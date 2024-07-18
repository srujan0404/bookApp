import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FONTS, COLORS, SIZES } from "../constants";

const BookCard = ({ book, onPress }) => {
    return (
        <TouchableOpacity style={{ flexDirection: 'row', marginVertical: SIZES.base, backgroundColor: COLORS.darkGray, borderRadius: SIZES.radius, padding: SIZES.base }} onPress={onPress}>
            <Image
                source={book.cover}
                resizeMode="cover"
                style={{ width: 100, height: 150, borderRadius: SIZES.radius }}
            />
            <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.title}</Text>
                <Text style={{ ...FONTS.body4, color: COLORS.lightGray }}>{book.author}</Text>
                <Text style={{ ...FONTS.body4, color: COLORS.lightGray, marginTop: SIZES.base }}>{book.description}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default BookCard;
