import React from "react";
import { View, Text, Image, ScrollView } from 'react-native';
import { FONTS, COLORS, SIZES } from "../constants";

const TopBooksCarousel = ({ books }) => {
    return (
        <View style={{ padding: SIZES.padding }}>
            <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.padding }}>Top Books</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {books.map((book, index) => (
                    <View key={index} style={{ marginRight: SIZES.base }}>
                        <Image
                            source={book.cover}
                            resizeMode="cover"
                            style={{ width: 100, height: 150, borderRadius: SIZES.radius }}
                        />
                        <Text style={{ ...FONTS.body4, color: COLORS.white, marginTop: SIZES.base }}>{book.title}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

export default TopBooksCarousel;
