import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FONTS, COLORS, SIZES, icons } from "../constants";

const GenreHeader = ({ navigation, title }) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={icons.back_arrow_icon}
                    resizeMode="contain"
                    style={styles.backIcon}
                />
            </TouchableOpacity>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        paddingHorizontal: SIZES.radius,
        height: 80,
        alignItems: 'flex-end',
        backgroundColor: COLORS.primary, // Adding a background color for better visibility
    },
    backButton: {
        marginLeft: SIZES.base,
    },
    backIcon: {
        width: 25,
        height: 25,
        tintColor: COLORS.white,
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        ...FONTS.h3,
        color: COLORS.white,
    },
});

export default GenreHeader;
