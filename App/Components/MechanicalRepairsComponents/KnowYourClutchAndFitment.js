import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const KnowYourClutchAndFitment = () => {
    const data = [
        {
            image: require('../../Assets/images/BlogIMG1.jpg'),
            title: "watch How Experts Service your car",
        },   
    ]
    return (
        <Container style={styles.maincontainer}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: moderateScale(15), paddingVertical: moderateScale(10) }}>
                <View>
                    <Text style={{ fontFamily: FONTS.semibold, color: "#000", fontSize: moderateScale(15) }}>Know Your Clutch & Fitment</Text>
                    <Text style={{ fontFamily: FONTS.regular }}>Choose the best-fit service for you car</Text>
                </View>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                {data?.map((item, index) => {
                    return (
                        <View style={{ flexDirection: "column", paddingBottom: moderateScale(10) }}>
                            <Image
                                style={{ ...styles.Image_style }}
                                source={item.image}
                            />
                            <Image
                                source={require('../../Assets/images/play.png')}
                                style={{ ...styles.playIMAGE }}
                                resizeMode='contain'
                            />
                            <Text style={{ fontFamily: FONTS.regular, color: "#000", paddingTop: moderateScale(5), paddingLeft: moderateScale(15) }}>{item.title}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </Container>
    )
}

export default KnowYourClutchAndFitment

const styles = StyleSheet.create({
    maincontainer: {
        paddingTop: moderateScale(10)

    },
    Image_style: {
        width: moderateScale(250),
        height: moderateScale(150),
        // resizeMode: "contain",
        marginLeft: moderateScale(10),
        borderRadius: moderateScale(10)
    },
    playIMAGE: {
        height: moderateScale(50),
        width: moderateScale(50),
        position: "absolute",
        alignSelf: "center",
        marginTop: moderateScale(50)

    }

})