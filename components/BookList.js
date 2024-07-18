import React from "react";
import { View, Text, FlatList } from 'react-native';
import { FONTS, COLORS } from "../constants";

const BookList = ({ books }) => {
    const renderItem = ({ item }) => (
        <View style={{ marginVertical: 5 }}>
            <Text style={{ ...FONTS.body3, color: COLORS.white }}>{item.title}</Text>
            <Text style={{ ...FONTS.body4, color: COLORS.lightGray }}>{item.author}</Text>
        </View>
    );

    return (
        <FlatList
            data={books}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            showsVerticalScrollIndicator={false}
        />
    );
}

export default BookList;
