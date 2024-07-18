import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import { FONTS, COLORS, SIZES, icons } from "../constants";

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 5 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray2, borderLeftWidth: 1 }}></View>
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
            <View style={{ flex: 1 }}>
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
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>Mystery Detail</Text>
                    </View>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: SIZES.padding }}>
                    <Text style={{ ...FONTS.h2, color: COLORS.white }}>{genre.name}</Text>
                </View>

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
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{genre.bookCount}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Books</Text>
                    </View>

                    <LineDivider />

                    <View style={{ flex: 1, paddingHorizontal: SIZES.radius, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{genre.popularity}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Popularity</Text>
                    </View>
                </View>
            </View>
        );
    }

    function renderGenreDescription() {
        return (
            <View style={{ flex: 1, padding: SIZES.padding }}>
                <ScrollView
                    contentContainerStyle={{ paddingLeft: SIZES.padding2 }}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                >
                    <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.padding }}>About the Genre</Text>
                    <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>{genre.description}</Text>
                </ScrollView>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.black }}>
            <View style={{ flex: 4 }}>
                {renderGenreInfoSection()}
            </View>

            <View style={{ flex: 2 }}>
                {renderGenreDescription()}
            </View>
        </View>
    );
}

export default MysteryDetail;
