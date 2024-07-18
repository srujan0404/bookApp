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

const GenreDetail = ({ route, navigation }) => {

    const [genre, setGenre] = React.useState(null);

    React.useEffect(() => {
        let { genre } = route.params;
        setGenre(genre);
    }, [route.params]);

    function renderGenreInfoSection() {
        return (
            <View style={styles.infoSectionContainer}>
                {/* Navigation header */}
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
                        <Text style={styles.headerTitle}>Genre Detail</Text>
                    </View>
                </View>

                {/* Genre Name */}
                <View style={styles.genreNameContainer}>
                    <Text style={styles.genreName}>{genre.name}</Text>
                </View>

                {/* Genre Info */}
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

    if (genre) {
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
    } else {
        return (<></>);
    }
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
        paddingTop: SIZES.padding,
        paddingBottom: SIZES.base,
        alignItems: 'center',
    },
    backButton: {
        marginRight: SIZES.base,
        paddingHorizontal: SIZES.base,
        paddingVertical: SIZES.base,
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
        ...FONTS.h2,
        color: COLORS.white,
    },
    genreInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: SIZES.padding,
        marginHorizontal: SIZES.padding,
        borderRadius: SIZES.radius,
        backgroundColor: "rgba(0,0,0,0.3)",
    },
    statItem: {
        alignItems: 'center',
    },
    statValue: {
        ...FONTS.h3,
        color: COLORS.white,
    },
    statLabel: {
        ...FONTS.body4,
        color: COLORS.white,
        marginTop: 4,
    },
    descriptionContainer: {
        flex: 2,
        padding: SIZES.padding,
    },
    scrollViewContent: {
        paddingLeft: SIZES.padding,
    },
    descriptionTitle: {
        ...FONTS.h2,
        color: COLORS.white,
        marginBottom: SIZES.base,
    },
    descriptionText: {
        ...FONTS.body2,
        color: COLORS.lightGray,
    },
    genreInfoWrapper: {
        flex: 3,
    },
    genreDescriptionWrapper: {
        flex: 4,
    },
});

export default GenreDetail;
