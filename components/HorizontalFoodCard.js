import React from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";
import {COLORS, SIZES, FONTS, icons, images} from "../constants";


const HorinzontalFoodCard = ({containerStyle, imageStyle, item, onPress}) => {
        return(
            <TouchableOpacity
            style={{
                flexDirection: "row",
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                ...containerStyle
            }}
            >
                {/*Image*/}
                <Image
                    source={item.image}
                    style={imageStyle}
                />
                {/*Info*/}
                <View>
                    {/*Name*/}
                    <Text
                        style={{
                            ...FONTS.h3, fontSize: 17
                        }}
                    >{item.name}</Text>
                    {/* Description */}
                    <Text
                        style={{
                            color: COLORS.darkGray2, ...FONTS.body4
                        }}
                    >{item.description}</Text>
                    {/* Price */}
                    <Text
                        style={{
                            marginTop: SIZES.base, ...FONTS.h2
                        }}
                    >${item.price}</Text>
                </View>
                {/*Calories*/}
                <View
                style={{
                    flexDirection: "row",
                    position: "absolute",
                    top: 5,
                    right: SIZES.radius
                }}>
                    <Image
                        source={icons.calories}
                        style={{
                            height: 30,
                            width:30
                        }}
                    />
                    <Text
                    style={{color: COLORS.darkGray2, ...FONTS.body5}}
                    >{item.calories} Calories</Text>
                </View>

            </TouchableOpacity>
        )
}

export default HorinzontalFoodCard;