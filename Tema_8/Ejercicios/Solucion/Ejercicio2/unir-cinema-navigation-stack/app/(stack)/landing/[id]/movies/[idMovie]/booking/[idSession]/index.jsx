import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import useMovies from "../../../../../../../../hooks/useMovies";
import CinemaButton from "../../../../../../../../components/CinemaButton";

const SeatSelection = () => {
    const rows = 6;
    const cols = 10;
    const initialSeats = Array.from({ length: rows }, () => Array(cols).fill(false));
    const [seats, setSeats] = useState(initialSeats);

    const { id, idMovie, idSession } = useLocalSearchParams();
    const { movies, loading } = useMovies(id.toLowerCase());
    const [movie, setMovie] = useState();

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

    const getSeats = () => {
        let occupiedSeats = "";
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (seats[i][j]) {
                    occupiedSeats += `Fila ${i} - Asiento ${j}\n`;
                }
            }
        }
        return occupiedSeats;
    }
    return loading ? <Text className="text-center">Cargando...</Text> : (
        <ScrollView className="flex-1 px-5 mt-5">
            {movie ? (
                <>
                    <View className="p-4">
                        <Text className="text-2xl font-bold mb-4 text-center">Selecciona tus asientos</Text>
                        <View className="mb-4">
                            <Text className="text-lg">Cine: {id}</Text>
                            <Text className="text-lg">Pelicula ID: {movie.name}</Text>
                            <Text className="text-lg">Hora: {movie.sessions[idSession-1].hour}</Text>
                        </View>
                        <View className="mb-4">
                            <Text className="text-center mb-2">Pantalla</Text>
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
                            <Text className="text-lg">Asientos seleccionados: {"\n" + getSeats()}</Text>
                        </View>
                        <View className="flex flex-row justify-center mt-5">
                            <CinemaButton className="bg-green-500 p-2 rounded">
                                <Text className="text-white">Comprar Entradas</Text>
                            </CinemaButton>
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