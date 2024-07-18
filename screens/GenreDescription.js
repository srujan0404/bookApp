import React from "react";
import { View, Text, ScrollView } from 'react-native';
import { FONTS, COLORS, SIZES } from "../constants";

const GenreDescription = ({ description }) => {
    return (
        <View style={{ flex: 1, padding: SIZES.padding }}>
            <ScrollView
                contentContainerStyle={{ paddingLeft: SIZES.padding2 }}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
            >
                <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.padding }}>About the Genre</Text>
                <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>{description}</Text>
            </ScrollView>
        </View>
    );
}

export default GenreDescription;
