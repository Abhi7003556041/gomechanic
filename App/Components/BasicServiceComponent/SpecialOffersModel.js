import { Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FONTS } from '../../Constants/Fonts'
import { AppButton, Container, Icon } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'

const SpecialOffersModel = ({ setModalVisible }) => {
    const Offers = [

        {
            icon: <Icon name="checkcircle" type='AntDesign' color="#50c63e" />,
            title: "Offer application on Periodic Services",
        },
        {
            icon: <Icon name="checkcircle" type='AntDesign' color="#50c63e" />,
            title: "Brake Maintenance and Cleaning & Detailing Service ",
        },
    ]
    return (
        <Container>
            {/* ------------------------Offers Services Start------------------------------- */}
            <View style={{ ...styles.main_View }}>
                <Text style={{ fontFamily: FONTS.semibold, paddingLeft: moderateScale(20), color: "#000", fontSize: moderateScale(15) }}>Offer Details</Text>
                <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                >
                    <Icon name="close" type='AntDesign' />

                </TouchableOpacity>
            </View>
            <View style={{ ...styles.Services_View }}>
                <Text numberOfLines={2} style={{ ...styles.service_text }}> Flat 10% OFF On Scheduled Services, AC,Brakes,Detailing & Cleaning</Text>

                <View style={{ ...styles.smartservice_View_Style }}>
                    <Text style={{ color: "#000", fontFamily: FONTS.medium }}>SMARTSERVICE</Text>
                </View>

                {Offers?.map((item, index) => {
                    return (<>
                        <View style={{ flexDirection: "row", paddingLeft: moderateScale(10), alignItems: "center" }}>
                            {item.icon}
                            <Text numberOfLines={2} style={{ maxWidth: "80%", fontFamily: FONTS.bold, paddingLeft: moderateScale(5), marginLeft: moderateScale(5), paddingTop: moderateScale(5) }}>{item.title}</Text>
                        </View>
                    </>)
                })}
                {/* </View> */}


                <AppButton
                    title="APPLY"
                    gradient={true}
                    gradientColors={['#eb0000', '#eb0000', '#eb0000']}
                    style={{ marginTop: moderateScale(20) }}
                />
            </View>
            {/* ------------------------Offers Services END------------------------------- */}
        </Container>
    )
}

export default SpecialOffersModel

const styles = StyleSheet.create({
    main_View: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(10),
        paddingTop: moderateScale(20)
    },
    Services_View: {
        borderWidth: moderateScale(0.2),
        height: moderateScale(200),
        marginVertical: moderateScale(10),
        borderColor: "#d2d2d2"
    },
    OffersServices_View: {
        borderWidth: moderateScale(0.2),
        height: moderateScale(170),
        marginVertical: moderateScale(10),
        borderColor: "#d2d2d2"
    },
    smartservice_View_Style: {
        borderWidth: 1,
        height: moderateScale(30),
        width: "35%",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "blue",
        borderRadius: moderateScale(5),
        borderStyle: "dashed",
        margin: moderateScale(20)
    },
    service_text: {
        fontFamily: FONTS.semibold,
        maxWidth: "100%",
        paddingTop: moderateScale(20),
        paddingLeft: moderateScale(20)
    }

})