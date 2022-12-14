import React from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";
import {COLORS, SIZES, FONTS, icons, images} from "../constants";

const VerticalFoodCard = ({containerStyle, imageStyle, item, onPress}) => {
    return(
        <TouchableOpacity
            style={{
                padding: SIZES.radius,
                width: 200,
                alignItems: "center",
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                ...containerStyle
            }}
        >

            {/*Calories and Favourites*/}
            <View style={{
                flexDirection: "row"
            }}>
                {/*Calories*/}
                <View style={{flex: 1, flexDirection: "row"}}>
                    <Image
                        source={icons.calories}
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                    <Text
                        style={{
                            color: COLORS.darkGray, ...FONTS.body5
                        }}
                    >{item.calories} Calories</Text>
                </View>
                {/*Favourites*/}
                <Image
                    source={icons.love}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: item.isFavourite ? COLORS.primary : COLORS.gray 
                    }}
                />

            </View>
            {/*Image*/}
            <View
                style={{
                    height: 150,
                    width: 150,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Image
                    source={item.image}
                    style={{
                        height: "100%",
                        width: "100%"
                    }}
                />
                <View style={{
                    alignItems: "center",
                    marginTop: -20
                }}>

                </View>
            </View>
            {/*Info*/}
            <View style={{
                alignItems: "center",
                marginTop: -20
            }}>
                <Text
                    style={{
                        ...FONTS.h3
                    }}
                >{item.name}</Text>
        <Text
            style={{
                color: COLORS.darkGray2, textAlign: "center", ...FONTS.body5, marginHorizontal: 10
            }}
        >{item.description}</Text>
        <Text
        style={{
            marginTop: SIZES.radius, ...FONTS.h2,
        }}
        >${item.price}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default VerticalFoodCard;