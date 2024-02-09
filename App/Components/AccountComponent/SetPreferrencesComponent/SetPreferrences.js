import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Card, Container, Icon, RadioButton } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import BackHeader from '../../Header/BackHeader'
import { FONTS } from '../../../Constants/Fonts'

const SetPreferrences = () => {
    const [selected1, setSelected1] = useState(false);
    const [selected2, setSelected2] = useState(false);
    const [selected3, setSelected3] = useState(false);
    const [selected4, setSelected4] = useState(false);
    return (
        <Container style={{ ...styles.Container }}>
            <BackHeader title='Set Preferences' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground
                    style={{ height: moderateScale(130), width: "100%", marginRight: moderateScale(20) }}
                    source={require('../../../Assets/images/imagebackground.jpg')}
                />


                <Card style={{ ...styles.card1 }}>
                    <Image
                        style={{ height: moderateScale(25), width: moderateScale(25), marginRight: moderateScale(20) }}
                        source={require('../../../Assets/images/drop.png')}
                    />
                    <Text style={{ fontFamily: FONTS.medium, color: "#000" }}>Preferred Engine Oil</Text>
                </Card>
                <Card style={{ ...styles.card2 }}>
                    <View>
                        <Text style={{ fontFamily: FONTS.semibold, color: "#000", fontSize: moderateScale(15) }}>Mineral Oil</Text>
                        <Text style={{ fontFamily: FONTS.medium, color: "red" }}>Mobil 5W30</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontFamily: FONTS.medium, color: "red" }}>EDIT</Text>
                        <Icon
                            name="pen"
                            type="FontAwesome5"
                            color="red"
                            size={15}
                            style={{ paddingLeft: moderateScale(10) }}
                        />
                    </View>
                </Card>


                <Card style={{ ...styles.card3 }}>
                    <Image
                        style={{ height: moderateScale(25), width: moderateScale(25), marginRight: moderateScale(20) }}
                        source={require('../../../Assets/images/checkicon.png')}
                    />
                    <Text style={{ fontFamily: FONTS.medium, color: "#000" }}>Preferred Fulfillment Mode</Text>
                </Card>
                <Card style={{ ...styles.card4 }}>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ ...styles.Transmission_button }}>
                            <RadioButton
                                activeColor={'red'}
                                selected={selected1}
                                onChange={val => setSelected1(val)}
                                size={20}
                                color={'red'}
                            />
                            <View style={{ paddingLeft: moderateScale(10), }}>

                                <Text
                                    style={{
                                        fontFamily: FONTS.medium,
                                        color: "#000"
                                    }}>
                                    Pick-Up
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: FONTS.regular,
                                    }}>
                                    from location
                                </Text>
                            </View>
                        </View>

                        <View style={{ ...styles.Transmission_button }}>
                            <RadioButton
                                activeColor={'red'}
                                selected={selected2}
                                onChange={val => setSelected2(val)}
                                size={20}
                                color={'red'}
                            />
                            <View style={{ paddingLeft: moderateScale(10), }}>

                                <Text
                                    style={{
                                        fontFamily: FONTS.medium,
                                        color: "#000"
                                    }}>
                                    Walk-In
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: FONTS.regular,
                                    }}>
                                    to workshop
                                </Text>
                            </View>
                        </View>

                    </View>
                </Card>

                <Card style={{ ...styles.card5 }}>
                    <Text style={{ fontFamily: FONTS.medium, color: "#000" }}>Preferred Service Buddy</Text>
                </Card>
                <Card style={{ ...styles.card6 }}>
                    <Image
                        style={{ height: moderateScale(30), width: moderateScale(50), marginRight: moderateScale(20) }}
                        source={require('../../../Assets/images/smallcaricon.png')}
                    />
                    <Text numberOfLines={2} style={{ maxWidth: "80%", fontFamily: FONTS.regular }}>choose your Preferred Service Buddy after First Service</Text>
                </Card>


                <Card style={{ ...styles.card5 }}>
                    <Text style={{ fontFamily: FONTS.medium, color: "#000" }}>Preferred Workshop</Text>
                </Card>
                <Card style={{ ...styles.card6 }}>
                    <Image
                        style={{ height: moderateScale(30), width: moderateScale(50), marginRight: moderateScale(20) }}
                        source={require('../../../Assets/images/smallcaricon.png')}
                    />
                    <Text numberOfLines={2} style={{ maxWidth: "80%", fontFamily: FONTS.regular }}>choose your Preferred Service Buddy after First Service</Text>
                </Card>

                <Card style={{ ...styles.card7 }}>
                    <Image
                        style={{ height: moderateScale(50), width: moderateScale(50), marginRight: moderateScale(20) }}
                        source={require('../../../Assets/images/smallhomeicon.png')}
                    />
                    <Text style={{ fontFamily: FONTS.medium, color: "#000" }}>Preferred Delivery Address</Text>
                    <View style={{ flexDirection: "row", right: moderateScale(0), position: "absolute", paddingRight: moderateScale(15) }}>
                        <Text style={{ fontFamily: FONTS.medium, color: "red" }}>EDIT</Text>
                        <Icon
                            name="pen"
                            type="FontAwesome5"
                            color="red"
                            size={15}
                            style={{ paddingLeft: moderateScale(10) }}
                        />
                    </View>
                </Card>
                <Card style={{ ...styles.card8 }}>
                    <View>
                        <Text style={{ fontFamily: FONTS.regular }}>ADDRESS</Text>
                        <Text style={{ fontFamily: FONTS.semibold, color: "#000", fontSize: moderateScale(13) }}>SET DEFAULT DELIVERY ADDRESS</Text>
                    </View>
                </Card>

                <Card style={{ ...styles.card3 }}>
                    <Image
                        style={{ height: moderateScale(30), width: moderateScale(30), marginRight: moderateScale(20) }}
                        source={require('../../../Assets/images/smallbordiconlall.png')}
                    />
                    <Text style={{ fontFamily: FONTS.medium, color: "#000" }}>Return Old Spare Parts Post Service</Text>
                </Card>
                <Card style={{ ...styles.card4 }}>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ ...styles.Transmission_button }}>
                            <RadioButton
                                activeColor={'red'}
                                selected={selected3}
                                onChange={val => setSelected3(val)}
                                size={20}
                                color={'red'}
                            />
                            <View style={{ paddingLeft: moderateScale(10), }}>

                                <Text
                                    style={{
                                        fontFamily: FONTS.medium,
                                        color: "#000"
                                    }}>
                                    Yes
                                </Text>

                            </View>
                        </View>

                        <View style={{ ...styles.Transmission_button }}>
                            <RadioButton
                                activeColor={'red'}
                                selected={selected4}
                                onChange={val => setSelected4(val)}
                                size={20}
                                color={'red'}
                            />
                            <View style={{ paddingLeft: moderateScale(10), }}>

                                <Text
                                    style={{
                                        fontFamily: FONTS.medium,
                                        color: "#000"
                                    }}>
                                    No
                                </Text>

                            </View>
                        </View>

                    </View>
                </Card>

            </ScrollView>
        </Container>
    )
}

export default SetPreferrences

const styles = StyleSheet.create({
    Container: {
        paddingHorizontal: moderateScale(10)
    },
    card1: {
        borderWidth: moderateScale(0.2),
        height: moderateScale(60),
        flexDirection: "row",
        alignItems: "center",
        borderBottomRightRadius: moderateScale(0),
        borderBottomLeftRadius: moderateScale(0)
    },
    card2: {
        borderWidth: moderateScale(0.2),
        height: moderateScale(70),
        flexDirection: "row",
        borderTopRightRadius: moderateScale(0),
        borderTopLeftRadius: moderateScale(0),
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(15)
    },
    card3: {
        borderWidth: moderateScale(0.2),
        height: moderateScale(60),
        flexDirection: "row",
        alignItems: "center",
        borderBottomRightRadius: moderateScale(0),
        borderBottomLeftRadius: moderateScale(0),
        marginTop: moderateScale(20)
    },
    card4: {
        borderWidth: moderateScale(0.2),
        height: moderateScale(70),
        flexDirection: "row",
        borderTopRightRadius: moderateScale(0),
        borderTopLeftRadius: moderateScale(0),
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(15)
    },
    card5: {
        borderWidth: moderateScale(0.2),
        height: moderateScale(60),
        flexDirection: "row",
        alignItems: "center",
        borderBottomRightRadius: moderateScale(0),
        borderBottomLeftRadius: moderateScale(0),
        marginTop: moderateScale(20)
    },
    card6: {
        borderWidth: moderateScale(0.2),
        height: moderateScale(70),
        flexDirection: "row",
        borderTopRightRadius: moderateScale(0),
        borderTopLeftRadius: moderateScale(0),
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(15)
    },
    card7: {
        borderWidth: moderateScale(0.2),
        height: moderateScale(60),
        flexDirection: "row",
        alignItems: "center",
        borderBottomRightRadius: moderateScale(0),
        borderBottomLeftRadius: moderateScale(0),
        marginTop: moderateScale(20),

    },
    card8: {
        borderWidth: moderateScale(0.2),
        height: moderateScale(70),
        flexDirection: "row",
        borderTopRightRadius: moderateScale(0),
        borderTopLeftRadius: moderateScale(0),
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(15)
    },
    Transmission_button: {
        flexDirection: 'row',
        borderWidth: moderateScale(0.3),
        height: moderateScale(45),
        width: '47%',
        borderRadius: moderateScale(5),
        marginTop: moderateScale(5),
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: moderateScale(10),
    },

})