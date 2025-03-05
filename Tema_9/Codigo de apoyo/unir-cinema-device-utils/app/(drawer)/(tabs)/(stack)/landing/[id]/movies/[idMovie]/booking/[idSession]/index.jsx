import React, { useEffect, useState, useContext } from 'react';
import {Text, View, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {router, useLocalSearchParams, useNavigation} from 'expo-router';
import useMovies from "../../../../../../../../../../hooks/useMovies";
import { PurchaseContext } from '../../../../../../../../../../context/PurchaseContext';
import {CommonActions} from "@react-navigation/native";
import CinemaCommonButton from "../../../../../../../../../../components/CinemaCommonButton";

const SeatSelection = () => {
    const rows = 6;
    const cols = 10;
    const initialSeats = Array.from({ length: rows }, () => Array(cols).fill(false));
    const [seats, setSeats] = useState(initialSeats);

    const { id, idMovie, idSession } = useLocalSearchParams();
    const { movies, loading } = useMovies(id.toLowerCase());
    const [movie, setMovie] = useState();
    const { addPurchase, purchases } = useContext(PurchaseContext);

    const navigation = useNavigation();

    useEffect(() => {
        if (!loading && movies) {
            const foundMovie = movies.find(movie => movie.id.toString() === idMovie);
            setMovie(foundMovie);
        }
    }, [loading, movies, idMovie]);

    const toggleSeat = (row, col) => {
        const newSeats = seats.map((r, i) =>
            r.map((seat, j) => (i === row && j === col ? !seat : seat))
        );
        setSeats(newSeats);
    };

    const getSelectedSeats = () => {
        let selectedSeats = [];
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (seats[i][j]) {
                    selectedSeats.push({ row: i, col: j });
                }
            }
        }
        return selectedSeats;
    };

    const handlePurchase = () => {
        const purchase = {
            id: purchases.length,
            cinema: id,
            movie: movie.name,
            hour: movie.sessions[idSession - 1].hour,
            seats: getSelectedSeats(),
            qrCode: Math.random().toString(36).substring(7)
        };
        addPurchase(purchase);
        Alert.alert(
            'Compra realizada',
            'Compra realizada con éxito',
            [
                {
                    text: 'OK',
                    onPress: () => {
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{ name: 'home/index' }],
                            })
                        );
                    }
                }
            ]
        );
    };

    return loading ? <Text className="text-center">Cargando...</Text> : (
        <ScrollView className="flex-1 px-2 mt-5">
            {movie ? (
                <>
                    <View className="p-4">
                        <View className="mb-4">
                            <Text className="text-lg">Cine: {id}</Text>
                            <Text className="text-lg">Pelicula ID: {movie.name}</Text>
                            <Text className="text-lg">Hora: {movie.sessions[idSession - 1].hour}</Text>
                        </View>
                        <View className="mb-4">
                            <Text className="text-center mb-5 py-7 bg-gray-800 text-white rounded">Pantalla</Text>
                            <View className="flex flex-wrap justify-center">
                                {seats.map((row, i) => (
                                    <View key={i} className="flex flex-row">
                                        {row.map((seat, j) => (
                                            <TouchableOpacity
                                                key={j}
                                                className={`w-8 h-8 m-1 ${seat ? 'bg-blue-500' : 'bg-gray-300'}`}
                                                onPress={() => toggleSeat(i, j)}
                                            />
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </View>

                        <View className="mt-5">
                            <Text className="text-lg">Asientos seleccionados: {"\n" + getSelectedSeats().map(seat => `Fila ${seat.row} - Asiento ${seat.col}`).join('\n')}</Text>
                        </View>
                        <View className="flex flex-row justify-center mt-5">
                            <CinemaCommonButton className="bg-green-500 p-2 rounded" onPress={handlePurchase}>
                                <Text className="text-white">Comprar Entradas</Text>
                            </CinemaCommonButton>
                        </View>
                    </View>
                </>
            ) : (
                <Text className="text-center text-red-500">Movie not found</Text>
            )}
        </ScrollView>
    );
};

export default SeatSelection;