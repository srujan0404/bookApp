import React from "react";
import { View, Text } from 'react-native';
import { FONTS, COLORS } from "../constants";

const AuthorInfo = ({ author }) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>{author.name}</Text>
            <Text style={{ ...FONTS.body4, color: COLORS.lightGray }}>{author.bio}</Text>
        </View>
    );
}

export default AuthorInfo;
