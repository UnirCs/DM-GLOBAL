import React, { useContext, useState } from 'react';
import { Text, View, ScrollView, SafeAreaView, Pressable, Modal, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PurchaseContext } from '../../../../../../context/PurchaseContext';
import { router } from 'expo-router';
import QRCode from 'react-native-qrcode-svg';

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