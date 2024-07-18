import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from "../constants";
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
        <View style={styles.container}>
            {/* Genre Header */}
            <GenreHeader navigation={navigation} title="Horror Detail" />

            {/* Genre Name */}
            <View style={styles.genreNameContainer}>
                <Text style={styles.genreName}>{genre.name}</Text>
            </View>

            {/* Genre Info */}
            <View style={styles.genreInfoContainer}>
                <GenreInfo bookCount={genre.bookCount} popularity={genre.popularity} />
            </View>

            {/* Genre Description */}
            <View style={styles.descriptionContainer}>
                <GenreDescription description={genre.description} />
            </View>

            {/* Book List (if needed) */}
            <View style={styles.bookListContainer}>
                <BookList books={genre.books} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
        paddingHorizontal: SIZES.padding,
    },
    genreNameContainer: {
        alignItems: 'center',
        marginVertical: SIZES.padding,
    },
    genreName: {
        ...FONTS.h2,
        color: COLORS.white,
    },
    genreInfoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: SIZES.padding,
    },
    descriptionContainer: {
        flex: 1,
        marginTop: SIZES.padding,
    },
    bookListContainer: {
        flex: 1,
        marginTop: SIZES.padding,
    },
});

export default HorrorDetail;
