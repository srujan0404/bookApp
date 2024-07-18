import React from "react";
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
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
    )
}

const BookDetail = ({ route, navigation }) => {

    const [book, setBook] = React.useState(null);

    const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
    const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = React.useState(0);

    const indicator = new Animated.Value(0);

    React.useEffect(() => {
        let { book } = route.params;
        setBook(book)
    }, [book])

    function renderBookInfoSection() {
        return (
            <View style={styles.infoSectionContainer}>
                <ImageBackground
                    source={book.bookCover}
                    resizeMode="cover"
                    style={styles.imageBackground}
                />

                {/* Color Overlay */}
                <View style={[styles.colorOverlay, { backgroundColor: book.backgroundColor }]} />

                {/* Navigation header */}
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={icons.back_arrow_icon}
                            resizeMode="contain"
                            style={[styles.headerIcon, { tintColor: book.navTintColor }]}
                        />
                    </TouchableOpacity>

                    <View style={styles.headerTitleContainer}>
                        <Text style={[styles.headerTitle, { color: book.navTintColor }]}>Book Detail</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.moreButton}
                        onPress={() => console.log("Click More")}
                    >
                        <Image
                            source={icons.more_icon}
                            resizeMode="contain"
                            style={[styles.headerIcon, { tintColor: book.navTintColor }]}
                        />
                    </TouchableOpacity>
                </View>

                {/* Book Cover */}
                <View style={styles.bookCoverContainer}>
                    <Image
                        source={book.bookCover}
                        resizeMode="contain"
                        style={styles.bookCover}
                    />
                </View>

                {/* Book Name and Author */}
                <View style={styles.bookInfoContainer}>
                    <Text style={[styles.bookName, { color: book.navTintColor }]}>{book.bookName}</Text>
                    <Text style={[styles.bookAuthor, { color: book.navTintColor }]}>{book.author}</Text>
                </View>

                {/* Book Info */}
                <View style={styles.bookStatsContainer}>
                    {/* Rating */}
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>{book.rating}</Text>
                        <Text style={styles.statLabel}>Rating</Text>
                    </View>

                    <LineDivider />

                    {/* Pages */}
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>{book.pageNo}</Text>
                        <Text style={styles.statLabel}>Number of Pages</Text>
                    </View>

                    <LineDivider />

                    {/* Language */}
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>{book.language}</Text>
                        <Text style={styles.statLabel}>Language</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderBookDescription() {
        const indicatorSize = scrollViewWholeHeight > scrollViewVisibleHeight ? scrollViewVisibleHeight * scrollViewVisibleHeight / scrollViewWholeHeight : scrollViewVisibleHeight;
        const difference = scrollViewVisibleHeight > indicatorSize ? scrollViewVisibleHeight - indicatorSize : 1;

        return (
            <View style={styles.descriptionContainer}>
                {/* Custom Scrollbar */}
                <View style={styles.scrollBarContainer}>
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

                {/* Description */}
                <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onContentSizeChange={(width, height) => setScrollViewWholeHeight(height)}
                    onLayout={({ nativeEvent: { layout: { height } } }) => setScrollViewVisibleHeight(height)}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: indicator } } }],
                        { useNativeDriver: false }
                    )}
                >
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.descriptionText}>{book.description}</Text>
                </ScrollView>
            </View>
        )
    }

    function renderBottomButton() {
        return (
            <View style={styles.bottomButtonContainer}>
                {/* Bookmark */}
                <TouchableOpacity
                    style={styles.bookmarkButton}
                    onPress={() => console.log("Bookmark")}
                >
                    <Image
                        source={icons.bookmark_icon}
                        resizeMode="contain"
                        style={styles.bookmarkIcon}
                    />
                </TouchableOpacity>

                {/* Start Reading */}
                <TouchableOpacity
                    style={styles.startReadingButton}
                    onPress={() => console.log("Start Reading")}
                >
                    <Text style={styles.startReadingText}>Start Reading</Text>
                </TouchableOpacity>
            </View>
        )
    }

    if (book) {
        return (
            <View style={styles.container}>
                {/* Book Cover Section */}
                <View style={styles.bookCoverSection}>
                    {renderBookInfoSection()}
                </View>

                {/* Description */}
                <View style={styles.bookDescriptionSection}>
                    {renderBookDescription()}
                </View>

                {/* Buttons */}
                <View style={styles.bottomButtonSection}>
                    {renderBottomButton()}
                </View>
            </View>
        )
    } else {
        return (<></>)
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
    imageBackground: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    colorOverlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
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
    headerIcon: {
        width: 25,
        height: 25,
    },
    headerTitleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        ...FONTS.h3,
    },
    moreButton: {
        marginRight: SIZES.base,
    },
    bookCoverContainer: {
        flex: 5,
        paddingTop: SIZES.padding2,
        alignItems: 'center',
    },
    bookCover: {
        flex: 1,
        width: 150,
        height: "auto",
    },
    bookInfoContainer: {
        flex: 1.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bookName: {
        ...FONTS.h2,
    },
    bookAuthor: {
        ...FONTS.body3,
    },
    bookStatsContainer: {
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
        ...FONTS.h3,
        color: COLORS.white,
    },
    statLabel: {
        ...FONTS.body4,
        color: COLORS.lightGray,
    },
    descriptionContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: SIZES.padding,
    },
    scrollBarContainer: {
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
        lineHeight: 22,
    },
   
)};