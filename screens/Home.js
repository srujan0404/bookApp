import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 18 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1 }}></View>
        </View>
    )
}

const Home = ({ navigation }) => {

    // Your existing data and state definitions...

    function renderHeader(profile) {
        return (
            <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: SIZES.padding, alignItems: 'center' }}>
                {/* Greetings */}
                <View style={{ flex: 1 }}>
                    <View style={{ marginRight: SIZES.padding }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>Good Morning</Text>
                        <Text style={{ ...FONTS.h2, color: COLORS.white }}>{profile.name}</Text>
                    </View>
                </View>

                {/* Points */}
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.primary,
                        height: 40,
                        paddingLeft: 3,
                        paddingRight: SIZES.radius,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => { console.log("Point") }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={icons.plus_icon}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.white,
                                marginRight: 5
                            }}
                        />
                        <Text style={{ color: COLORS.white, ...FONTS.body3 }}>{profile.point} points</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    function renderButtonSection() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: SIZES.padding }}>
                {/* Claim Button */}
                <Button
                    onPress={() => console.log("Claim")}
                    icon={icons.claim_icon}
                    label="Claim"
                />

                {/* Divider */}
                <LineDivider />

                {/* Get Point Button */}
                <Button
                    onPress={() => console.log("Get Point")}
                    icon={icons.point_icon}
                    label="Get Point"
                />

                {/* Divider */}
                <LineDivider />

                {/* My Card Button */}
                <Button
                    onPress={() => console.log("My Card")}
                    icon={icons.card_icon}
                    label="My Card"
                />
            </View>
        );
    }

    function renderMyBookSection(myBooks) {

        const renderItem = ({ item, index }) => {
            return (
                <TouchableOpacity
                    style={{
                        marginLeft: index === 0 ? SIZES.padding : 0,
                        marginRight: SIZES.radius
                    }}
                    onPress={() => navigation.navigate("BookDetail", { book: item })}
                >
                    {/* Book Cover */}
                    <Image
                        source={item.bookCover}
                        resizeMode="cover"
                        style={{
                            width: 180,
                            height: 250,
                            borderRadius: 20
                        }}
                    />

                    {/* Book Info */}
                    <View style={{ marginTop: SIZES.radius, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={icons.clock_icon}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightGray
                            }}
                        />
                        <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}>{item.lastRead}</Text>

                        <Image
                            source={icons.page_icon}
                            style={{
                                marginLeft: SIZES.radius,
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightGray
                            }}
                        />
                        <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}>{item.completion}</Text>
                    </View>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ marginTop: SIZES.padding }}>
                {/* Header */}
                <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ ...FONTS.h2, color: COLORS.white }}>My Books</Text>
                    <TouchableOpacity onPress={() => console.log("See More")}>
                        <Text style={{ ...FONTS.body3, color: COLORS.lightGray, textDecorationLine: 'underline' }}>See More</Text>
                    </TouchableOpacity>
                </View>

                {/* Books */}
                <FlatList
                    data={myBooks}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }

    function renderCategoryHeader() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{ marginRight: SIZES.padding }}
                    onPress={() => setSelectedCategory(item.id)}
                >
                    <Text style={{ ...FONTS.h2, color: selectedCategory === item.id ? COLORS.white : COLORS.lightGray }}>{item.categoryName}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ marginTop: SIZES.padding }}>
                <FlatList
                    data={categories}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }

    function renderCategoryData() {
        let selectedCategoryBooks = categories.find(a => a.id === selectedCategory);

        if (!selectedCategoryBooks) return null;

        return (
            <FlatList
                data={selectedCategoryBooks.books}
                renderItem={({ item }) => (
                    <View style={{ marginVertical: SIZES.base }}>
                        <TouchableOpacity
                            style={{ flexDirection: 'row' }}
                            onPress={() => navigation.navigate("BookDetail", { book: item })}
                        >
                            {/* Book Cover */}
                            <Image
                                source={item.bookCover}
                                resizeMode="cover"
                                style={{ width: 100, height: 150, borderRadius: 10 }}
                            />

                            {/* Book Details */}
                            <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                                <Text style={{ ...FONTS.h2, color: COLORS.white }}>{item.bookName}</Text>
                                <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>{item.author}</Text>

                                <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
                                    <Image
                                        source={icons.page_filled_icon}
                                        resizeMode="contain"
                                        style={{ width: 20, height: 20, tintColor: COLORS.lightGray }}
                                    />
                                    <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.pageNo} pages</Text>

                                    <Image
                                        source={icons.read_icon}
                                        resizeMode="contain"
                                        style={{ width: 20, height: 20, tintColor: COLORS.lightGray }}
                                    />
                                    <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.readed} reads</Text>
                                </View>

                                <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
                                    {item.genre.includes("Adventure") &&
                                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.darkGreen, padding: SIZES.base, borderRadius: SIZES.radius, marginRight: SIZES.base }}>
                                            <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Adventure</Text>
                                        </View>
                                    }
                                    {item.genre.includes("Romance") &&
                                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.darkRed, padding: SIZES.base, borderRadius: SIZES.radius, marginRight: SIZES.base }}>
                                            <Text style={{ ...FONTS.body3, color: COLORS.lightRed }}>Romance</Text>
                                        </View>
                                    }
                                    {item.genre.includes("Drama") &&
                                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.darkBlue, padding: SIZES.base, borderRadius: SIZES.radius, marginRight: SIZES.base }}>
                                            <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Drama</Text>
                                        </View>
                                    }
                                </View>
                            </View>

                            {/* Bookmark Button */}
                            <TouchableOpacity
                                style={{ position: 'absolute', top: 5, right: 15 }}
                                onPress={() => console.log("Bookmark")}
                            >
                                <Image
                                    source={icons.bookmark_icon}
                                    resizeMode="contain"
                                    style={{ width: 25, height: 25, tintColor: COLORS.lightGray }}
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: SIZES.padding }}
            />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            {/* Header Section */}
            <View style={{ height: 200 }}>
                {renderHeader(profile)}
                {renderButtonSection()}
            </View>

            {/* Body Section */}
            <ScrollView style={{ marginTop: SIZES.radius }}>
                {/* Books Section */}
                <View>
                    {renderMyBookSection(myBooks)}
                </View>

                {/* Categories Section */}
                <View style={{ marginTop: SIZES.padding }}>
                    {renderCategoryHeader()}
                    {renderCategoryData()}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;
