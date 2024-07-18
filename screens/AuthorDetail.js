import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Animated
} from 'react-native';
import { FONTS, COLORS, SIZES, icons } from "../constants";

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 5 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray2, borderLeftWidth: 1 }}></View>
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
            <View style={{ flex: 1 }}>
                <Image
                    source={author.profilePicture}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: 200
                    }}
                />

                {/* Navigation header */}
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
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>Author Detail</Text>
                    </View>
                </View>

                {/* Author Name */}
                <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: SIZES.padding }}>
                    <Text style={{ ...FONTS.h2, color: COLORS.white }}>{author.name}</Text>
                </View>

                {/* Author Info */}
                <View
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 20,
                        margin: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: "rgba(0,0,0,0.3)"
                    }}
                >
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{author.booksWritten}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Books Written</Text>
                    </View>

                    <LineDivider />

                    <View style={{ flex: 1, paddingHorizontal: SIZES.radius, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{author.rating}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Rating</Text>
                    </View>
                </View>
            </View>
        );
    }

    function renderAuthorDescription() {
        const indicatorSize = scrollViewWholeHeight > scrollViewVisibleHeight ? scrollViewVisibleHeight * scrollViewVisibleHeight / scrollViewWholeHeight : scrollViewVisibleHeight;
        const difference = scrollViewVisibleHeight > indicatorSize ? scrollViewVisibleHeight - indicatorSize : 1;

        return (
            <View style={{ flex: 1, flexDirection: 'row', padding: SIZES.padding }}>
                <View style={{ width: 4, height: "100%", backgroundColor: COLORS.gray1 }}>
                    <Animated.View
                        style={{
                            width: 4,
                            height: indicatorSize,
                            backgroundColor: COLORS.lightGray4,
                            transform: [{
                                translateY: Animated.multiply(indicator, scrollViewVisibleHeight / scrollViewWholeHeight).interpolate({
                                    inputRange: [0, difference],
                                    outputRange: [0, difference],
                                    extrapolate: 'clamp'
                                })
                            }]
                        }}
                    />
                </View>

                <ScrollView
                    contentContainerStyle={{ paddingLeft: SIZES.padding2 }}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onContentSizeChange={(width, height) => {
                        setScrollViewWholeHeight(height);
                    }}
                    onLayout={({ nativeEvent: { layout: { x, y, width, height } } }) => {
                        setScrollViewVisibleHeight(height);
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: indicator } } }],
                        { useNativeDriver: false }
                    )}
                >
                    <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.padding }}>About the Author</Text>
                    <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>{author.description}</Text>
                </ScrollView>
            </View>
        );
    }

    if (author) {
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.black }}>
                <View style={{ flex: 4 }}>
                    {renderAuthorInfoSection()}
                </View>

                <View style={{ flex: 2 }}>
                    {renderAuthorDescription()}
                </View>
            </View>
        );
    } else {
        return (<></>);
    }
}

export default AuthorDetail;
