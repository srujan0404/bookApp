import React from "react";
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import { FONTS, COLORS, SIZES, icons } from "../constants";

const SearchBar = ({ value, onChangeText, onPressSearch }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.lightGray, borderRadius: SIZES.radius, padding: SIZES.base }}>
            <TextInput
                style={{ flex: 1, ...FONTS.body3, color: COLORS.black }}
                placeholder="Search..."
                placeholderTextColor={COLORS.gray}
                value={value}
                onChangeText={onChangeText}
            />
            <TouchableOpacity onPress={onPressSearch}>
                <Image
                    source={icons.search}
                    resizeMode="contain"
                    style={{ width: 20, height: 20, tintColor: COLORS.gray }}
                />
            </TouchableOpacity>
        </View>
    );
}

export default SearchBar;
