import React from "react";
import { View, Text } from 'react-native';
import { FONTS, COLORS, SIZES } from "../constants";

const GenreStatsComponent = ({ stats }) => {
    return (
        <View style={{ padding: SIZES.padding, backgroundColor: COLORS.darkGray, borderRadius: SIZES.radius }}>
            {stats.map((stat, index) => (
                <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: SIZES.base }}>
                    <Text style={{ ...FONTS.body4, color: COLORS.white }}>{stat.label}</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.white }}>{stat.value}</Text>
                </View>
            ))}
        </View>
    );
}

export default GenreStatsComponent;
