import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { FONTS, COLORS, SIZES } from "../constants";
import LineDivider from './LineDivider';

const GenreInfo = ({ bookCount, popularity }) => {
    return (
        <View style={styles.container}>
            <View style={styles.infoItem}>
                <Text style={styles.infoValue}>{bookCount}</Text>
                <Text style={styles.infoLabel}>Books</Text>
            </View>

            <LineDivider />

            <View style={[styles.infoItem, styles.infoItemWithPadding]}>
                <Text style={styles.infoValue}>{popularity}</Text>
                <Text style={styles.infoLabel}>Popularity</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 20,
        margin: SIZES.padding,
        borderRadius: SIZES.radius,
        backgroundColor: "rgba(0,0,0,0.3)",
    },
    infoItem: {
        flex: 1,
        alignItems: 'center',
    },
    infoItemWithPadding: {
        paddingHorizontal: SIZES.radius,
    },
    infoValue: {
        ...FONTS.h3,
        color: COLORS.white,
    },
    infoLabel: {
        ...FONTS.body4,
        color: COLORS.white,
    },
});

export default GenreInfo;
