import React from "react";
import {TouchableOpacity, Text, Image} from "react-native";
import {COLORS, SIZES, FONTS} from "../constants";

const TextIconButton = ({containerStyle, label, labelStyle, icon, iconStyle, onPress}) =>{
    return(
        <TouchableOpacity
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Text
                style={{
                    ...FONTS.body3,
                    ...labelStyle
                }}
            >{label}</Text>
            <Image
                source={icon}
                style={{
                    height: 20,
                    width: 20,
                    marginLeft: 5,
                    tintColor: COLORS.black,
                    ...iconStyle
                }}
            />
        </TouchableOpacity>
    )
}


export default TextIconButton;