import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const GoMechanicGuarantee = () => {
    const data = [
        {
            image: require('../../Assets/images/tow-truck.png'),
            name: "Free Pickup Drop"
        },
        {
            image: require('../../Assets/images/settings.png'),
            name: "Genuine Parts"
        },
        {
            image: require('../../Assets/images/security.png'),
            name: "30 Days Warranty"
        },
        {
            image: require('../../Assets/images/purse.png'),
            name: "Affordable Prices"
        },

    ]
    return (
        <Container style={{ ...styles.mainContainer }}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                {data?.map((item, index) => {
                    return (
                        <View style={{ ...styles.Guarantee_View }}>
                            <Image
                                style={{ ...styles.Guarantee_IMG }}
                                source={item.image}
                            />
                            <Text style={{ ...styles.Guarantee_Text }}>{item.name}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </Container>
    )
}
export default GoMechanicGuarantee

const styles = StyleSheet.create({
    mainContainer: {
        padding: moderateScale(10)
    },
    Guarantee_View: {
        borderWidth: moderateScale(0.5),
        padding: moderateScale(10),
        margin: moderateScale(5),
        borderRadius: moderateScale(5),
        borderColor: "#faf8fc",
        backgroundColor: "#faf8fc"
    },
    Guarantee_IMG: {
        width: moderateScale(20),
        height: moderateScale(20),
        marginBottom: moderateScale(5)
    },
    Guarantee_Text: {
        fontFamily: FONTS.regular,
        color: "#000",
    }

})