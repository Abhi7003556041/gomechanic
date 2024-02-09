import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppTextInput, Card, Container, Icon } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'

const CarSearch = () => {
    const data = [
        {
            image: require('../../Assets/images/carselecticon1.png'),
            title: "Honda City IVTEC",

        },
        {
            image: require('../../Assets/images/carselecticon2.png'),
            title: "Hyundai Grand i10",

        },
        {
            image: require('../../Assets/images/carselecticon3.png'),
            title: "Hyundai Grand i20",

        },
        {
            image: require('../../Assets/images/carselecticon4.png'),
            title: "Honda City IVTEC",

        },
        {
            image: require('../../Assets/images/carselecticon5.png'),
            title: "Honda City IVTEC",

        },
        {
            image: require('../../Assets/images/carselecticon1.png'),
            title: "Honda City IVTEC",

        },
        {
            image: require('../../Assets/images/carselecticon2.png'),
            title: "Honda City IVTEC",

        },
        {
            image: require('../../Assets/images/carselecticon3.png'),
            title: "Honda City IVTEC",

        },
        {
            image: require('../../Assets/images/carselecticon4.png'),
            title: "Honda City IVTEC",

        },
        {
            image: require('../../Assets/images/carselecticon5.png'),
            title: "Honda City IVTEC",

        },
        {
            image: require('../../Assets/images/carselecticon1.png'),
            title: "Honda City IVTEC",

        },
    ]
    return (
        <Container style={{ ...styles.Container }}>
            <Text style={{ fontFamily: FONTS.bold, paddingVertical: moderateScale(10), padding: moderateScale(10), color: "#000", fontSize: moderateScale(14) }}>Select your car</Text>

            <AppTextInput
                placeholder="   Search by Car Model or Brand"
                inputStyle={{ backgroundColor: "#fff", borderRadius: moderateScale(10) }}
                mainContainerStyle={{ paddingHorizontal: moderateScale(10), borderRadius: moderateScale(10) }}
            />

            <Text style={{ fontFamily: FONTS.bold, alignSelf: "center", paddingVertical: moderateScale(10) }}>POPULAR CARS</Text>


            <ScrollView showsVerticalScrollIndicator={false} style={{ ...styles.ScrollView_Style }}>

                {data?.map((item, index) => {
                    return (<>
                        <Card style={{ ...styles.card_main_view }}>
                            <Image
                                style={{ ...styles.car_image }}
                                source={item.image}
                            />
                            <Text style={{ ...styles.car_text }}>{item.title}</Text>
                        </Card>
                    </>)
                })}

            </ScrollView>

        </Container>
    )
}

export default CarSearch

const styles = StyleSheet.create({
    Container: {
        // paddingHorizontal:
        backgroundColor: "#f0f0f0"
    },
    ScrollView_Style: {
        backgroundColor: "#fff",
        marginHorizontal: moderateScale(10),
        marginBottom: moderateScale(10),
        borderRadius: moderateScale(10),
        borderWidth: moderateScale(1),
        padding: moderateScale(5),
        borderColor: "#EBEBEB"
    },
    car_image: {
        height: moderateScale(50),
        width: moderateScale(50),
        borderRadius: moderateScale(50)
    },
    card_main_view: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: moderateScale(0),
        height: moderateScale(70)
    },
    car_text: {
        fontFamily: FONTS.bold,
        fontSize: moderateScale(13),
        paddingLeft: moderateScale(10)
    }

})