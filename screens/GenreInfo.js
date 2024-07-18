import React from "react";
import { View, Text } from 'react-native';
import { FONTS, COLORS, SIZES } from "../constants";
import LineDivider from './LineDivider';

const GenreInfo = ({ bookCount, popularity }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                paddingVertical: 20,
                margin: SIZES.padding,
                borderRadius: SIZES.radius,
                backgroundColor: "rgba(0,0,0,0.3)"
            }}
        >
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ ...FONTS.h3, color: COLORS.white }}>{bookCount}</Text>
                <Text style={{ ...FONTS.body4, color: COLORS.white }}>Books</Text>
            </View>

            <LineDivider />

            <View style={{ flex: 1, paddingHorizontal: SIZES.radius, alignItems: 'center' }}>
                <Text style={{ ...FONTS.h3, color: COLORS.white }}>{popularity}</Text>
                <Text style={{ ...FONTS.body4, color: COLORS.white }}>Popularity</Text>
            </View>
        </View>
    );
}

export default GenreInfo;
