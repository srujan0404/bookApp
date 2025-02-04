import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet
} from 'react-native';
import { FONTS, COLORS, SIZES, icons } from "../constants";

const LineDivider = () => {
    return (
        <View style={styles.lineDividerContainer}>
            <View style={styles.lineDivider}></View>
        </View>
    );
}

const MysteryDetail = ({ route, navigation }) => {

    const [genre, setGenre] = React.useState({
        name: "Mystery",
        bookCount: 120,
        popularity: "Medium",
        description: "Mystery is a genre that involves suspenseful and thrilling stories centered around solving a crime or uncovering a secret."
    });

    function renderGenreInfoSection() {
        return (
            <View style={styles.infoSectionContainer}>
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

                    <View style={styles.headerTitleContainer}>
                        <Text style={styles.headerTitle}>Mystery Detail</Text>
                    </View>
                </View>

                <View style={styles.genreNameContainer}>
                    <Text style={styles.genreName}>{genre.name}</Text>
                </View>

                <View style={styles.genreInfoContainer}>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>{genre.bookCount}</Text>
                        <Text style={styles.statLabel}>Books</Text>
                    </View>

                    <LineDivider />

                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>{genre.popularity}</Text>
                        <Text style={styles.statLabel}>Popularity</Text>
                    </View>
                </View>
            </View>
        );
    }

    function renderGenreDescription() {
        return (
            <View style={styles.descriptionContainer}>
                <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                >
                    <Text style={styles.descriptionTitle}>About the Genre</Text>
                    <Text style={styles.descriptionText}>{genre.description}</Text>
                </ScrollView>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.genreInfoWrapper}>
                {renderGenreInfoSection()}
            </View>

            <View style={styles.genreDescriptionWrapper}>
                {renderGenreDescription()}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
    },
    lineDividerContainer: {
        width: 1,
        paddingVertical: 5,
    },
    lineDivider: {
        flex: 1,
        borderLeftColor: COLORS.lightGray2,
        borderLeftWidth: 1,
    },
    infoSectionContainer: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        paddingHorizontal: SIZES.radius,
        height: 80,
        alignItems: 'flex-end',
    },
    backButton: {
        marginLeft: SIZES.base,
    },
    backIcon: {
        width: 25,
        height: 25,
        tintColor: COLORS.white,
    },
    headerTitleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        ...FONTS.h3,
        color: COLORS.white,
    },
    genreNameContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: SIZES.padding,
    },
    genreName: {
        ...FONTS.h1,
        color: COLORS.white,
    },
    genreInfoContainer: {
        flexDirection: 'row',
        paddingVertical: 20,
        margin: SIZES.padding,
        borderRadius: SIZES.radius,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
    },
    statValue: {
        ...FONTS.h2,
        color: COLORS.white,
    },
    statLabel: {
        ...FONTS.body4,
        color: COLORS.lightGray,
    },
    descriptionContainer: {
        flex: 1,
        padding: SIZES.padding,
    },
    scrollViewContent: {
        paddingLeft: SIZES.padding2,
    },
    descriptionTitle: {
        ...FONTS.h2,
        color: COLORS.white,
        marginBottom: SIZES.padding,
    },
    descriptionText: {
        ...FONTS.body3,
        color: COLORS.lightGray,
        lineHeight: 22,
    },
    genreInfoWrapper: {
        flex: 4,
    },
    genreDescriptionWrapper: {
        flex: 2,
    },
});

export default MysteryDetail;
