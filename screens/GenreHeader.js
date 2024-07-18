import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FONTS, COLORS, SIZES, icons } from "../constants";

const GenreHeader = ({ navigation, title }) => {
    return (
        <View style={{ flexDirection: 'row', paddingHorizontal: SIZES.radius, height: 80, alignItems: 'flex-end' }}>
            <TouchableOpacity
                style={{ marginLeft: SIZES.base }}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={icons.back_arrow_icon}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.white
                    }}
                />
            </TouchableOpacity>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ ...FONTS.h3, color: COLORS.white }}>{title}</Text>
            </View>
        </View>
    );
}

export default GenreHeader;