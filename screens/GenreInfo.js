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
        paddingVertical: SIZES.padding / 2,
        marginHorizontal: SIZES.padding,
        borderRadius: SIZES.radius,
        backgroundColor: "rgba(255,255,255,0.1)", // Updated background for better contrast
        alignItems: 'center', // Align items centrally
        shadowColor: "#000", // Adding shadow for better depth
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5, // For Android shadow
    },
    infoItem: {
        flex: 1,
        alignItems: 'center',
    },
    infoItemWithPadding: {
        paddingHorizontal: SIZES.padding,
    },
    infoValue: {
        ...FONTS.h3,
        color: COLORS.white,
        marginBottom: 5, // Added margin for spacing
    },
    infoLabel: {
        ...FONTS.body4,
        color: COLORS.lightGray, // Light gray for secondary text
    },
});

export default GenreInfo;
