import React from "react";
import { View, Text, Image } from 'react-native';
import { FONTS, COLORS, SIZES } from "../constants";

const UserProfile = ({ user }) => {
    return (
        <View style={{ alignItems: 'center', marginVertical: SIZES.padding }}>
            <Image
                source={user.profilePic}
                resizeMode="cover"
                style={{ width: 100, height: 100, borderRadius: 50 }}
            />
            <Text style={{ ...FONTS.h2, color: COLORS.white, marginTop: SIZES.base }}>{user.name}</Text>
            <Text style={{ ...FONTS.body4, color: COLORS.lightGray }}>{user.bio}</Text>
        </View>
    );
}

export default UserProfile;
