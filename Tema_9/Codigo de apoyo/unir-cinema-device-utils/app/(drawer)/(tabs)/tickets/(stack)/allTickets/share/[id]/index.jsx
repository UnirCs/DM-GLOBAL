import React, {useContext, useEffect, useState} from 'react';
import { View, Text, FlatList, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native';
import * as Contacts from 'expo-contacts';
import * as SMS from 'expo-sms';
import { Ionicons } from '@expo/vector-icons';
import {PurchaseContext} from "../../../../../../../../context/PurchaseContext";
import {useLocalSearchParams} from "expo-router";

const ShareTicketsScreen = () => {

    const { purchases } = useContext(PurchaseContext);
    const [contacts, setContacts] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredContacts, setFilteredContacts] = useState([]);
    const { id } = useLocalSearchParams();

    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.PhoneNumbers],
                });

                if (data.length > 0) {
                    //Filter contacts that have phone numbers
                    const validContacts = data.filter(contact => contact.phoneNumbers && contact.phoneNumbers.length > 0);
                    setContacts(validContacts);
                    setFilteredContacts(validContacts);
                }
            }
        })();
    }, []);

    useEffect(() => {
        setFilteredContacts(
            contacts.filter(contact =>
                contact.name && contact.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, contacts]);

    const handleShareTicket = async (contact) => {
        const purchase = purchases.find(purchase => id == purchase.id);
        if (contact.phoneNumbers && contact.phoneNumbers.length > 0) {
            const isAvailable = await SMS.isAvailableAsync();
            if (isAvailable) {
                await SMS.sendSMSAsync(
                    [contact.phoneNumbers[0].number],
                    `Aqui estan los tickets para que vayamos a ver juntos ${purchase.movie}`,
                );
                console.log("SMS sent");
            } else {
                console.log('SMS is not available on this device');
                alert('SMS is not available on this device');
            }
        } else {
            console.log("No phone number");
        }
    };

    const renderContact = ({ item }) => (
        <View className="mb-5 p-3 bg-gray-200 rounded border border-[#0096c3] flex-row justify-between items-center">
            <View>
                <Text className="text-lg font-bold text-[#0096c3]">{item.name}</Text>
                {item.phoneNumbers && item.phoneNumbers.length > 0 && (
                    <Text className="text-base text-[#0096c3]">{item.phoneNumbers[0].number}</Text>
                )}
            </View>
            <Pressable onPress={() => handleShareTicket(item)} className="p-2">
                <Ionicons name="share-outline" size={24} color="#0096c3" />
            </Pressable>
        </View>
    );

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className="flex-1 p-5 bg-white">
                    <TextInput
                        placeholder="Buscar contactos"
                        value={search}
                        onChangeText={setSearch}
                        className="mb-4 p-2 border border-gray-400 rounded"
                        autoFocus={true}
                    />
                    <FlatList
                        data={filteredContacts}
                        keyExtractor={(item) => item.id}
                        renderItem={renderContact}
                    />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default ShareTicketsScreen;