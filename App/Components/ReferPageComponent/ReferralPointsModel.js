import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FONTS } from '../../Constants/Fonts'
import { Container, Icon } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'

const ReferralPointsModel = ({ isModalVisible, setModalVisible }) => {
    const Referral =
        [
            {

                title: "Earn 10 points when you refer a friend",
                count: "1",
            },
            {

                title: "When your friends completes an order you get 100 points",
                count: "100",
            },

        ]
    return (
        <Container>
            {/* ------------------------Referral Services Start------------------------------- */}
            <View style={{ ...styles.main_view }}>
                <Text style={{ ...styles.main_view_text }}>How to earn Referral Points?</Text>
                <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                >
                    <Icon name="close" type='AntDesign' />
                </TouchableOpacity>
            </View>
            <View style={{ ...styles.selfclosedView }} />

            {Referral?.map((item, index) => {
                return (<>
                    <View style={{ ...styles.main_count_view }}>
                        <View style={{ ...styles.count_view }}>
                            <Text style={{ ...styles.count_text }}>{item.count}</Text>
                        </View>
                        <Text numberOfLines={2} style={{ ...styles.view_text }}>{item.title}</Text>
                    </View>
                </>)
            })}

            {/* ------------------------Referral Services END------------------------------- */}
        </Container>
    )
}

export default ReferralPointsModel

const styles = StyleSheet.create({
    selfclosedView: {
        borderWidth: moderateScale(0.3),
        marginVertical: moderateScale(15),
        borderColor: "#d2d2d2"
    },
    main_view: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(10),
        paddingTop: moderateScale(20)

    },
    main_view_text: {
        fontFamily: FONTS.bold,
        paddingLeft: moderateScale(20),
        color: "#000"

    },
    main_count_view: {
        flexDirection: "row",
        paddingTop: moderateScale(10),
        alignItems: "center",
        marginHorizontal: moderateScale(10),
        paddingLeft: moderateScale(10)

    },
    count_view: {
        borderWidth: moderateScale(0.2),
        height: moderateScale(35),
        width: moderateScale(35),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: moderateScale(20),
        backgroundColor: "#ebc7c7",

    },
    count_text: {
        fontFamily: FONTS.medium,
        color: "red",
    },
    view_text: {
        fontFamily: FONTS.bold,
        paddingLeft: moderateScale(10),
        fontSize: moderateScale(13),
        maxWidth: "90%",
        paddingHorizontal: moderateScale(15)
    }

})