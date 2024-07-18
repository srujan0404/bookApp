import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Animated,
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

const AuthorDetail = ({ route, navigation }) => {

    const [author, setAuthor] = React.useState(null);
    const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
    const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = React.useState(0);
    const indicator = new Animated.Value(0);

    React.useEffect(() => {
        let { author } = route.params;
        setAuthor(author);
    }, [author]);

    function renderAuthorInfoSection() {
        return (
            <View style={styles.authorInfoSection}>
                <Image
                    source={author.profilePicture}
                    resizeMode="cover"
                    style={styles.authorImage}
                />

                {/* Navigation header */}
                <View style={styles.header}>
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

                    <View style={styles.headerTitle}>
                        <Text style={styles.headerText}>Author Detail</Text>
                    </View>
                </View>

                {/* Author Name */}
                <View style={styles.authorNameContainer}>
                    <Text style={styles.authorName}>{author.name}</Text>
                </View>

                {/* Author Info */}
                <View style={styles.authorInfo}>
                    <View style={styles.infoBlock}>
                        <Text style={styles.infoText}>{author.booksWritten}</Text>
                        <Text style={styles.infoLabel}>Books Written</Text>
                    </View>

                    <LineDivider />

                    <View style={[styles.infoBlock, styles.infoBlockWithPadding]}>
                        <Text style={styles.infoText}>{author.rating}</Text>
                        <Text style={styles.infoLabel}>Rating</Text>
                    </View>
                </View>
            </View>
        );
    }

    function renderAuthorDescription() {
        const indicatorSize = scrollViewWholeHeight > scrollViewVisibleHeight ? scrollViewVisibleHeight * scrollViewVisibleHeight / scrollViewWholeHeight : scrollViewVisibleHeight;
        const difference = scrollViewVisibleHeight > indicatorSize ? scrollViewVisibleHeight - indicatorSize : 1;

        return (
            <View style={styles.descriptionContainer}>
                <View style={styles.scrollIndicatorContainer}>
                    <Animated.View
                        style={[
                            styles.scrollIndicator,
                            {
                                height: indicatorSize,
                                transform: [{
                                    translateY: Animated.multiply(indicator, scrollViewVisibleHeight / scrollViewWholeHeight).interpolate({
                                        inputRange: [0, difference],
                                        outputRange: [0, difference],
                                        extrapolate: 'clamp'
                                    })
                                }]
                            }
                        ]}
                    />
                </View>

                <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onContentSizeChange={(width, height) => {
                        setScrollViewWholeHeight(height);
                    }}
                    onLayout={({ nativeEvent: { layout: { height } } }) => {
                        setScrollViewVisibleHeight(height);
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: indicator } } }],
                        { useNativeDriver: false }
                    )}
                >
                    <Text style={styles.descriptionTitle}>About the Author</Text>
                    <Text style={styles.descriptionText}>{author.description}</Text>
                </ScrollView>
            </View>
        );
    }

    if (author) {
        return (
            <View style={styles.container}>
                <View style={styles.infoSection}>
                    {renderAuthorInfoSection()}
                </View>

                <View style={styles.descriptionSection}>
                    {renderAuthorDescription()}
                </View>
            </View>
        );
    } else {
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
    },
    authorInfoSection: {
        flex: 4,
    },
    authorImage: {
        width: "100%",
        height: 200,
    },
    header: {
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
    headerTitle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        ...FONTS.h3,
        color: COLORS.white,
    },
    authorNameContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: SIZES.padding,
    },
    authorName: {
        ...FONTS.h2,
        color: COLORS.white,
    },
    authorInfo: {
        flexDirection: 'row',
        paddingVertical: 20,
        margin: SIZES.padding,
        borderRadius: SIZES.radius,
        backgroundColor: "rgba(0,0,0,0.3)",
    },
    infoBlock: {
        flex: 1,
        alignItems: 'center',
    },
    infoBlockWithPadding: {
        paddingHorizontal: SIZES.radius,
    },
    infoText: {
        ...FONTS.h3,
        color: COLORS.white,
    },
    infoLabel: {
        ...FONTS.body4,
        color: COLORS.white,
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
    descriptionContainer: {
        flex: 2,
        flexDirection: 'row',
        padding: SIZES.padding,
    },
    scrollIndicatorContainer: {
        width: 4,
        height: "100%",
        backgroundColor: COLORS.gray1,
    },
    scrollIndicator: {
        width: 4,
        backgroundColor: COLORS.lightGray4,
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
        ...FONTS.body2,
        color: COLORS.lightGray,
    },
    infoSection: {
        flex: 4,
    },
    descriptionSection: {
        flex: 2,
    },
});

export default AuthorDetail;
