import React from 'react';
import {Link, router, useLocalSearchParams} from "expo-router";
import {FlatList, Text, View} from "react-native";
import useMovies from "../../../../../../hooks/useMovies";
import CinemaButton from "../../../../../../components/CinemaButton";
import CinemaSessionButton from "../../../../../../components/CinemaSessionButton";

const CinemaLanding = () => {

    const {id} = useLocalSearchParams();
    const {movies, loading} = useMovies(id.toLowerCase());

    return (

        loading ? <Text className="text-center">Cargando...</Text> :
            <View className="px-5 mt-2">
                <FlatList
                    data={movies} //Me pide data para mostrar
                    keyExtractor={(movie) => movie.id} //La forma de saber que es un item unico
                    renderItem={({item}) => ( //La forma de mostrar cada item
                        <View className="mt-5">
                            <Text className="text-2xl font-bold">{item.name}</Text>
                            <Text className="">{item.director}</Text>

                            <View className="flex-1 flex-row mt-5 flex-wrap">
                                {
                                    item.sessions.map((session) => (
                                        <CinemaSessionButton
                                            key={session.hour}
                                            session={session.hour}
                                            language={session.language}
                                            onPress={() => router.push(`/landing/${id}/movies/${item.id}/booking/${session.id}`)}/>
                                    ))
                                }
                            </View>
                            <Link
                                href={`/(tabs)/(stack)/landing/${id}/movies/${item.id}`}
                                className="text-primary"
                            >
                                Detalles de la película
                            </Link>
                        </View>
                    )}
                />
            </View>
    );
}

export default CinemaLanding;