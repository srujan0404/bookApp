import React from "react";
import { View } from 'react-native';
import { COLORS, SIZES } from "../constants";
import GenreHeader from '../components/GenreHeader';
import GenreInfo from '../components/GenreInfo';
import GenreDescription from '../components/GenreDescription';
import BookList from '../components/BookList';

const HorrorDetail = ({ navigation }) => {

    const genre = {
        name: "Horror",
        bookCount: 100,
        popularity: "High",
        description: "Horror is a genre of fiction which is intended to, or has the capacity to frighten, scare, or startle its readers.",
        books: [
            { id: 1, title: "Dracula", author: "Bram Stoker" },
            { id: 2, title: "The Shining", author: "Stephen King" },
            // more books...
        ]
    };

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.black }}>
            <View style={{ flex: 4 }}>
                <GenreHeader navigation={navigation} title="Horror Detail" />
                <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: SIZES.padding }}>
                    <Text style={{ ...FONTS.h2, color: COLORS.white }}>{genre.name}</Text>
                </View>
                <GenreInfo bookCount={genre.bookCount} popularity={genre.popularity} />
           </View>
    </View>
    )
}