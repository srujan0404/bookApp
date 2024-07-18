import React from "react";
import { View, Text } from 'react-native';
import { FONTS, COLORS, SIZES } from "../constants";

const GenreStats = ({ statName, statValue }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>{statValue}</Text>
            <Text style={{ ...FONTS.body4, color: COLORS.white }}>{statName}</Text>
        </View>
    );
}

export default GenreStats;
