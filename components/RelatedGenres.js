import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { FONTS, COLORS, SIZES } from "../constants";

const RelatedGenres = ({ genres, onSelectGenre }) => {
    return (
        <View style={{ padding: SIZES.padding }}>
            <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.padding }}>Related Genres</Text>
            {genres.map((genre, index) => (
                <TouchableOpacity key={index} onPress={() => onSelectGenre(genre)}>
                    <Text style={{ ...FONTS.body3, color: COLORS.lightGray, marginBottom: SIZES.base }}>{genre.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

export default RelatedGenres;
