import React, {useContext} from 'react';
import {Text, View, ScrollView, SafeAreaView} from 'react-native';
import {PurchaseContext} from '../../../context/PurchaseContext';

const TicketsTab = () => {
    const {purchases} = useContext(PurchaseContext);

    return (
        <SafeAreaView className="flex-1">
            <ScrollView className="flex-1 p-4">
                <Text className="text-2xl font-bold mb-4 text-center">Tus Entradas</Text>
                {purchases.length > 0 ? (
                    purchases.map((purchase, index) => (
                        <View key={index} className="mb-4 p-4 border border-gray-400 rounded">
                            <Text className="text-lg">Cine: {purchase.cinema}</Text>
                            <Text className="text-lg">Pelicula: {purchase.movie}</Text>
                            <Text className="text-lg">Hora: {purchase.hour}</Text>
                            <Text className="text-lg">Asientos:</Text>
                            {purchase.seats.map((seat, i) => (
                                <Text key={i} className="text-lg">Fila {seat.row} - Asiento {seat.col}</Text>
                            ))}
                        </View>
                    ))
                ) : (
                    <View className="flex-1 justify-center items-center self-center">
                        <Text className="text-center">Parece que no hay nada que ver :(</Text>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default TicketsTab;