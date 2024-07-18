import React from "react";
import { View, Text, FlatList } from 'react-native';
import { FONTS, COLORS, SIZES } from "../constants";

const ReviewList = ({ reviews }) => {
    const renderItem = ({ item }) => (
        <View style={{ marginVertical: SIZES.base, padding: SIZES.base, backgroundColor: COLORS.darkGray, borderRadius: SIZES.radius }}>
            <Text style={{ ...FONTS.body4, color: COLORS.white }}>{item.user}</Text>
            <Text style={{ ...FONTS.body3, color: COLORS.lightGray, marginTop: SIZES.base }}>{item.comment}</Text>
        </View>
    );

    return (
        <View style={{ padding: SIZES.padding }}>
            <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.padding }}>Reviews</Text>
            <FlatList
                data={reviews}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default ReviewList;
