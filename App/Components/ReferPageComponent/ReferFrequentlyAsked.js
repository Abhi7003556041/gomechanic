import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Accordion, Card, CheckBox, Container, Icon, RadioButton } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const ReferFrequentlyAsked = () => {
    //map
    const Oil_data =
        [
            {
                dist: "What is GoMechanic Referral Program?",
                icon: <Icon name="down" type='AntDesign' color="#bdb8c1" />,
                text: "goMechanic Basic car service cover all the bare essensials to keep your car in operational condition.A basic service is the most budget-friendly affordable car service",
            },
            {
                dist: "How much GoApp Money do my friend, and i earn using the GoMechanic Referral Program?",
                icon: <Icon name="down" type='AntDesign' color="#bdb8c1" />,
                text: "goMechanic Basic car service cover all the bare essensials to keep your car in operational condition.A basic service is the most budget-friendly affordable car service",
            },
            {
                dist: "How many friends can i refer to using the referral code?",
                icon: <Icon name="down" type='AntDesign' color="#bdb8c1" />,
                text: "goMechanic Basic car service cover all the bare essensials to keep your car in operational condition.A basic service is the most budget-friendly affordable car service",
            },
            {
                dist: "When will my friend and i receive the GoApp Money?",
                icon: <Icon name="down" type='AntDesign' color="#bdb8c1" />,
                text: "goMechanic Basic car service cover all the bare essensials to keep your car in operational condition.A basic service is the most budget-friendly affordable car service",
            },
        ]
    return (
        <Container style={{ ...styles.MainContainerStyle }}>
            <Text style={{ ...styles.FrequentlyAsked_Text }}>Frequently Asked Question</Text>
            {Oil_data?.map((item, index) => {
                return (<>
                    <Accordion style={{ color: "#fff" }}
                        title={item.dist}
                        titleStyle={{ fontSize: moderateScale(12), fontFamily: FONTS.semibold }}
                        containerStyle={{
                            ...styles.AccordionStyle
                        }}
                        shadow={true}
                    >
                        <View style={{ ...styles.Accordion_View_Style }}>
                            <Text style={{ fontFamily: FONTS.regular, padding: moderateScale(10) }}>
                                {item.text}
                            </Text>
                        </View>
                    </Accordion>
                </>)
            })}
        </Container>
    )
}
export default ReferFrequentlyAsked

const styles = StyleSheet.create({
    MainContainerStyle: {
        flex: 0,
        paddingHorizontal: moderateScale(10),
        backgroundColor: "#fff"
    },
    AccordionStyle: {
        color: "#fff",
        backgroundColor: "#fff",
        borderWidth: moderateScale(0.2),
        marginBottom: moderateScale(10),
        borderColor: "#a6a2a5",
        borderBottomLeftRadius: moderateScale(5),
        borderBottomRightRadius: moderateScale(5),


    },
    Accordion_View_Style: {
        borderWidth: moderateScale(0.2),
        borderBottomLeftRadius: moderateScale(5),
        borderBottomRightRadius: moderateScale(5),
        borderColor: "#a6a2a5"
    },
    FrequentlyAsked_Text: {
        fontFamily: FONTS.medium,
        paddingVertical: moderateScale(20), color: "#000",
        paddingLeft: moderateScale(5),
        fontSize: moderateScale(14)
    }

})