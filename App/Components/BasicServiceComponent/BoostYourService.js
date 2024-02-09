import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Accordion, Card, CheckBox, Container, Icon, RadioButton } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import { TouchableOpacity } from 'react-native-gesture-handler'

const BoostYourService = () => {
    //map
    const Oil_data =
        [
            {
                image: require('../../Assets/images/scratch.png'),
                title: "AC Filter",
                dist: "30% Improvement in car Breating Air Quality",
                price: "₹ 549"

            },
            {
                image: require('../../Assets/images/scratch.png'),
                title: "AC Filter",
                dist: "30% Improvement in car Breating Air Quality",
                price: "₹ 549"

            },
            {
                image: require('../../Assets/images/scratch.png'),
                title: "AC Filter",
                dist: "30% Improvement in car Breating Air Quality",
                price: "₹ 549"

            },
            {
                image: require('../../Assets/images/scratch.png'),
                title: "AC Filter",
                dist: "30% Improvement in car Breating Air Quality",
                price: "₹ 549"

            },



        ]
    //state
    const [check, setCheck] = useState(false);
    // slider state 
    const [Slid, setSlid] = useState(false);

    return (
        <Container style={{ ...styles.MainContainerStyle }}>

            {Oil_data?.map((item, index) => {
                return (<>
                    <View style={{ ...styles.main_View_Style }}>
                        <View style={{ ...styles.View_Style }}>
                            <View style={{ flexDirection: "row", padding: moderateScale(10) }}>
                                <Image
                                    source={item.image}
                                    style={{ ...styles.cuponeIMG }}
                                />
                                <View style={{ paddingLeft: moderateScale(10) }}>
                                    <Text style={{ color: "#000", fontFamily: FONTS.medium }}>{item.title}</Text>
                                    <Text numberOfLines={2} style={{ maxWidth: "99%", fontFamily: FONTS.regular, fontSize: moderateScale(11) }}>{item.dist}</Text>

                                </View>
                            </View>
                            {/* -------------------------------------------Slider Part Start--------------------------------------------------------- */}


                            {
                                Slid ?
                                    <>
                                        <View style={{ ...styles.Main_slid_View }}>
                                            <View style={{ ...styles.slid_View }}>
                                                <Icon name="alarm"
                                                    type='MaterialCommunityIcon' />
                                                <Text style={{ ...styles.slid_text }}>Every 10000 Kms or 6 Months</Text>
                                            </View>
                                            <View style={{ ...styles.slid_View }}>
                                                <Icon name="shield-check"
                                                    type='Octicons' />
                                                <Text style={{ ...styles.slid_text }}>1 Month Warranty</Text>
                                            </View>
                                            <View style={{ ...styles.slid_View }}>
                                                <Icon name="list-alt"
                                                    type='MaterialIcon' />
                                                <Text style={{ ...styles.slid_text }}>includes:{"\n"}AC Filter Replacement(OES)AC CHeckup,Refitting</Text>
                                            </View>

                                        </View>
                                        <View style={{ padding: moderateScale(15), flexDirection: "row", justifyContent: "space-between" }}>
                                            <View style={{ flexDirection: "row" }}>
                                                <CheckBox
                                                    checked={check}
                                                    onChange={(val) => setCheck(val)}
                                                    size={20}
                                                    activeColor={"red"}
                                                />
                                                <Text style={{ paddingLeft: moderateScale(5), color: "red" }}>ADD</Text>
                                                <Text style={{ fontFamily: FONTS.regular, color: "#000", paddingLeft: moderateScale(10) }}>{item.price}</Text>
                                            </View>
                                            <View style={{ flexDirection: "row" }}>
                                                <Pressable
                                                    onPress={() => setSlid(false)}
                                                >
                                                    <Icon name="up"
                                                        type='AntDesign' />
                                                </Pressable>
                                            </View>

                                        </View>
                                    </>
                                    :

                                    <View style={{ padding: moderateScale(15), flexDirection: "row", justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <CheckBox
                                                checked={check}
                                                onChange={(val) => setCheck(val)}
                                                size={20}
                                                activeColor={"red"}
                                            />
                                            <Text style={{ paddingLeft: moderateScale(5), color: "red" }}>ADD</Text>
                                            <Text style={{ fontFamily: FONTS.regular, color: "#000", paddingLeft: moderateScale(10) }}>{item.price}</Text>
                                        </View>
                                        <View style={{ flexDirection: "row" }}>
                                            <Pressable
                                                onPress={() => setSlid(true)}
                                            >
                                                <Icon name="down"
                                                    type='AntDesign' />
                                            </Pressable>
                                        </View>

                                    </View>
                            }
                            {/* -------------------------------------------Slider Part END--------------------------------------------------------- */}


                        </View>

                    </View >


                </>)
            })}





        </Container >
    )
}

export default BoostYourService

const styles = StyleSheet.create({
    MainContainerStyle: {
        flex: 0,
        paddingHorizontal: moderateScale(10),
    },
    main_View_Style: {
        // padding: moderateScale(5),
    },
    View_Style: {
        height: moderateScale("15%"),
        width: "100%",
        borderWidth: moderateScale(0.5),
        borderRadius: moderateScale(2),
        borderColor: "#d2d2d2",
        borderWidth: moderateScale(1),
        marginTop: moderateScale(10)
    },
    cuponeIMG: {
        height: moderateScale(35),
        width: "20%",
        borderWidth: moderateScale(1),
    },
    Main_slid_View: {
        borderWidth: moderateScale(0.5),
        height: moderateScale(95),
        width: "100%",
        alignItems: "flex-start",
        padding: moderateScale(5),
        borderColor: "#d2d2d2",
    },
    slid_View: {
        flexDirection: "row",
        padding: moderateScale(2),
        paddingLeft: moderateScale(5),
        alignItems: "center",
    },
    slid_text: {
        fontFamily: FONTS.regular,
        paddingLeft: moderateScale(5),
        fontSize: moderateScale(11)
    }
})