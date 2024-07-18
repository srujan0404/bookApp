import React from "react";
import { View, Text } from 'react-native';
import { FONTS, COLORS } from "../constants";

const RatingComponent = ({ rating }) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>Rating: {rating}</Text>
        </View>
    );
}

export default RatingComponent;
