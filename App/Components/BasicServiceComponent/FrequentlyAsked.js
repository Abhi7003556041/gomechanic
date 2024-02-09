import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Accordion, Card, CheckBox, Container, Icon, RadioButton } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const FrequentlyAsked = () => {
    //map
    const Oil_data =
        [
            {
                dist: "Why should i opt for a Basic Car Service?",
                icon: <Icon name="down" type='AntDesign' color="#bdb8c1" />,
                text: "goMechanic Basic car service cover all the bare essensials to keep your car in operational condition.A basic service is the most budget-friendly affordable car service",
            },
            {
                dist: "How frequently Should i get a Basic Service?",
                icon: <Icon name="down" type='AntDesign' color="#bdb8c1" />,
                text: "goMechanic Basic car service cover all the bare essensials to keep your car in operational condition.A basic service is the most budget-friendly affordable car service",
            },
            {
                dist: "Why should i opt for a Basic Car Service?",
                icon: <Icon name="down" type='AntDesign' color="#bdb8c1" />,
                text: "goMechanic Basic car service cover all the bare essensials to keep your car in operational condition.A basic service is the most budget-friendly affordable car service",
            },
            {
                dist: "Why should i opt for a Basic Car Service?",
                icon: <Icon name="down" type='AntDesign' color="#bdb8c1" />,
                text: "goMechanic Basic car service cover all the bare essensials to keep your car in operational condition.A basic service is the most budget-friendly affordable car service",
            },
            {
                dist: "Why should i opt for a Basic Car Service?",
                icon: <Icon name="down" type='AntDesign' color="#bdb8c1" />,
                text: "goMechanic Basic car service cover all the bare essensials to keep your car in operational condition.A basic service is the most budget-friendly affordable car service",
            },
        ]
    return (
        <Container style={{ ...styles.MainContainerStyle }}>
            <ScrollView showsVerticalScrollIndicator={false}>

                {Oil_data?.map((item, index) => {
                    return (<>
                        <Accordion style={{ color: "#fff" }}
                            title={item.dist}
                            titleStyle={{ fontSize: moderateScale(13), fontFamily: FONTS.semibold }}
                            containerStyle={{
                                ...styles.AccordionStyle,
                                elevation:2
                            }}
                            shadow={true}
                        >
                            <View style={{ ...styles.Accordion_View_Style }}>
                                <Text style={{ fontFamily: FONTS.regular, padding: moderateScale(0) }}>
                                    {item.text}
                                </Text>
                            </View>
                        </Accordion>
                    </>)
                })}
            </ScrollView>
        </Container>
    )
}
export default FrequentlyAsked

const styles = StyleSheet.create({
    MainContainerStyle: {
        flex: 0,
        paddingHorizontal: moderateScale(10),
        backgroundColor: "#fff"
    },
    AccordionStyle: {
        color: "#fff",
        backgroundColor: "#fff",
        // borderWidth: moderateScale(0.2),
        marginBottom: moderateScale(10),
        borderColor:"#a6a2a5",
        borderRadius:moderateScale(10),
        marginHorizontal:5

    },
    Accordion_View_Style: {
        // borderWidth: moderateScale(0.2),
        borderRadius:moderateScale(6),
        borderColor:"#a6a2a5",
        paddingHorizontal:10,
        paddingBottom:5
        // width:'95%'
        // marginHorizontal
        // elevation:4
    }

})