import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Card, Container } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { Image } from 'react-native'
import { FONTS } from '../../Constants/Fonts'

const CartSliderCard = () => {
    const data = [
        {
            image: require('../../Assets/images/cartpics2.jpg'),
            title: "Front Shock Absorber Replacement",
            text1: "25% Improved Driving Stability Guarantee",
            newPrice: "₹3,294",
            oldPrice: "₹4,282",
        },
        {
            image: require('../../Assets/images/cartmenuicons1.png'),
            title: "Front Shock Absorber Replacement",
            text1: "25% Improved Driving Stability Guarantee",
            newPrice: "₹3,294",
            oldPrice: "₹4,282",
        },
        {
            image: require('../../Assets/images/mack2.jpg'),
            title: "Front Shock Absorber Replacement",
            text1: "25% Improved Driving Stability Guarantee",
            newPrice: "₹3,294",
            oldPrice: "₹4,282",
        },
    ]
    return (
        <Container>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                {data?.map((item, index) => {
                    return (
                        <Card style={{ ...styles.Card_view }}>
                            <Image
                                style={{ height: moderateScale(100), width: "100%", borderRadius: moderateScale(5) }}
                                source={item.image}
                            />

                            <Text style={{ fontFamily: FONTS.semibold, color: "#000", fontSize: moderateScale(11) }}>{item.title}</Text>
                            <Text style={{ fontFamily: FONTS.regular, fontSize: moderateScale(11) }}>{item.text1}</Text>


                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <View>
                                    <Text style={{ fontFamily: FONTS.semibold, color: "#000" }}>{item.newPrice}</Text>
                                    <Text style={{ fontFamily: FONTS.regular, textDecorationLine: "line-through" }}>{item.oldPrice}</Text>
                                </View>
                                <View style={{ ...styles.add_button }}>
                                    <Text style={{ color: "red", fontFamily: FONTS.bold }}>ADD</Text>
                                </View>
                            </View>
                        </Card>
                    )
                })}
            </ScrollView>
        </Container>
    )
}

export default CartSliderCard

const styles = StyleSheet.create({
    Card_view: {
        // borderWidth: moderateScale(0.2),
        marginBottom: moderateScale(20),
        height: moderateScale(220),
        width: moderateScale(140),
        marginLeft: moderateScale(15)
    },
    add_button: {
        borderWidth: moderateScale(1),
        height: moderateScale(27),
        width: "35%",
        borderRadius: moderateScale(5),
        alignItems: "center",
        justifyContent: "center",
        borderColor: "red"

    },

})