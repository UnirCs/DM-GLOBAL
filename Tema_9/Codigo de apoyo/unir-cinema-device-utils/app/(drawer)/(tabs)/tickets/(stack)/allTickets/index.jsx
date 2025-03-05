import React, { useContext, useState } from 'react';
import { Text, View, ScrollView, SafeAreaView, Pressable, Modal, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PurchaseContext } from '../../../../../../context/PurchaseContext';
import { router } from 'expo-router';
import QRCode from 'react-native-qrcode-svg';
import * as Calendar from 'expo-calendar';

const TicketsTab = () => {
    const { purchases } = useContext(PurchaseContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [qrCodeValue, setQrCodeValue] = useState('');
    const [selectedPurchase, setSelectedPurchase] = useState(null);

    const handleShareTicket = (id) => {
        router.push(`/tickets/allTickets/share/${id}`);
    };

    const handleQRCode = (purchase) => {
        const randomValue = Math.random().toString(36).substring(7);
        setQrCodeValue(randomValue);
        setSelectedPurchase(purchase);
        setModalVisible(true);
    };

    const handleCreateCalendarEvent = async (purchase) => {
        const { status } = await Calendar.requestCalendarPermissionsAsync();
        if (status === 'granted') {
            const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
            const defaultCalendar = calendars.find(cal => cal.isPrimary) || calendars[0];

            const [hour, minute] = purchase.hour.split(':').map(Number);
            const startDate = new Date();
            startDate.setHours(hour, minute, 0, 0);
            const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000); // 2 hours later

            const eventDetails = {
                title: `Movie: ${purchase.movie}`,
                startDate,
                endDate,
                timeZone: 'GMT',
                location: purchase.cinema,
                notes: `Asientos: ${purchase.seats?.map(seat => `Fila ${seat.row} - Asiento ${seat.col}`).join(', ')}`
            };

            try {
                await Calendar.createEventAsync(defaultCalendar.id, eventDetails);
                Alert.alert('¡Todo listo!', 'Se ha añadido un evento a tu calendario');
            } catch (error) {
                console.error('Error creando evento en calendario:', error);
                Alert.alert('¡Ups!', 'Ha ocurrido un error intentando añadir un evento a tu calendario');
            }
        } else {
            Alert.alert('Permisos insuficientes', 'Debes dar permisos a la aplicación para poder añadir eventos al calendario');
        }
    };

    return (
        <SafeAreaView className="flex-1">
            <ScrollView className="flex-1 p-4 mt-5">
                {purchases.length > 0 ? (
                    purchases.map((purchase, index) => (
                        <View key={index}
                              className="mb-4 p-4 border border-gray-400 rounded flex-row justify-between items-center relative">
                            <View>
                                <Text className="text-lg">Cine: {purchase.cinema}</Text>
                                <Text className="text-lg">Pelicula: {purchase.movie}</Text>
                                <Text className="text-lg">Hora: {purchase.hour}</Text>
                                <Text className="text-lg">Asientos:</Text>
                                {purchase.seats.map((seat, i) => (
                                    <Text key={i} className="text-lg">Fila {seat.row} - Asiento {seat.col}</Text>
                                ))}
                            </View>
                            <View className="absolute bottom-0 right-0 p-2 flex-row">
                                <Pressable onPress={() => handleCreateCalendarEvent(purchase)} className="mx-2">
                                    <Ionicons name="calendar-number-outline" size={30} color="#0096c3"/>
                                </Pressable>
                                <Pressable onPress={() => handleQRCode(purchase)} className="mx-2">
                                    <Ionicons name="qr-code-outline" size={30} color="#0096c3"/>
                                </Pressable>
                                <Pressable onPress={() => handleShareTicket(purchase.id)} className="mx-2">
                                    <Ionicons name="share-outline" size={30} color="#0096c3"/>
                                </Pressable>
                            </View>
                        </View>
                    ))
                ) : (
                    <View className="flex-1 justify-center items-center self-center">
                        <Text className="text-center">Parece que no hay nada que ver :(</Text>
                    </View>
                )}
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View className="flex-1 justify-center items-center bg-white bg-opacity-50 w-full">
                    <View className="bg-white p-5 rounded items-center border border-[#0096c3] mx-10 py-10 w-3/4">
                        {selectedPurchase && (
                            <View className="mb-10 items-center w-full">
                                <Text className="text-lg font-bold text-center" numberOfLines={1} adjustsFontSizeToFit>
                                    {selectedPurchase.movie}
                                </Text>
                                <Text className="text-sm text-center mt-2">
                                    {selectedPurchase.cinema} - {selectedPurchase.hour}
                                </Text>
                                <View className="mt-2">
                                    <Text className="text-lg text-center">Asientos:</Text>
                                    {selectedPurchase.seats.map((seat, i) => (
                                        <Text key={i} className="text-lg text-center">Fila {seat.row} - Asiento {seat.col}</Text>
                                    ))}
                                </View>
                            </View>
                        )}
                        <QRCode value={qrCodeValue} size={200}/>
                    </View>

                    <Pressable onPress={() => setModalVisible(false)}>
                        <Ionicons className="mt-5" name="chevron-down-outline" size={40} color="#0096c3"/>
                    </Pressable>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default TicketsTab;