import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Container, Icon } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'

const Exidebatteries = () => {
    const data = [
        {
            image: require('../../Assets/images/mack2.jpg'),
            serviceName: "Basic Service",
            name1: "Every 5000 Kms/3Months",
            name2: "Takes 4 Hours",
            name3: "1 Month Werranty",
            name4: "Includes 9 Services",
            oldprice: "₹ 4,532",
            newprice: "₹ 3,399",
            discount: "25%",
        },
        {
            image: require('../../Assets/images/BlogIMG6.jpg'),
            serviceName: "Basic Service",
            name1: "Every 5000 Kms/3Months",
            name2: "Takes 4 Hours",
            name3: "1 Month Werranty",
            name4: "Includes 9 Services",
            oldprice: "₹ 4,532",
            newprice: "₹ 3,399",
            discount: "25%",
        },
        {
            image: require('../../Assets/images/mack.jpg'),
            serviceName: "Basic Service",
            name1: "Every 5000 Kms/3Months",
            name2: "Takes 4 Hours",
            name3: "1 Month Werranty",
            name4: "Includes 9 Services",
            oldprice: "₹ 4,532",
            newprice: "₹ 3,399",
            discount: "25%",
        },
    ]


    return (
        <Container>

            {/* <View style={{ ...styles.bannerIMG_view }}>
                <Image
                    style={{ ...styles.bannerIMG_image }}
                    source={require('../../Assets/images/batteries.jpg')}
                />
            </View> */}
            <Text style={{ fontFamily: FONTS.semibold, color: "#000", fontSize: moderateScale(20), paddingLeft: moderateScale(10) }}>Exide</Text>
            {/* ---------------------- */}

            {data?.map((item, index) => {
                return (
                    <TouchableOpacity
                        onPress={() => NavigationService.navigate('ServiceSingleCardDetail')}
                    >
                        <View style={{ ...styles.mainView }}>
                            <View style={{ flexDirection: "row" }}>

                                <View style={{ marginTop: moderateScale(10) }}>
                                    <Text style={{ fontFamily: FONTS.semibold, color: "#000", marginLeft: moderateScale(10), marginBottom: moderateScale(5) }}>{item.serviceName}</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Icon
                                            name="dot-single"
                                            type='Entypo'
                                            color="#c3c1c6"
                                        />
                                        <Text style={{ fontFamily: FONTS.regular }}>{item.name1}</Text>
                                    </View>


                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Icon
                                            name="dot-single"
                                            type='Entypo'
                                            color="#c3c1c6"
                                        />
                                        <Text style={{ fontFamily: FONTS.regular }}>{item.name2}</Text>
                                    </View>


                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Icon
                                            name="dot-single"
                                            type='Entypo'
                                            color="#c3c1c6"
                                        />
                                        <Text style={{ fontFamily: FONTS.regular }}>{item.name3}</Text>
                                    </View>


                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Icon
                                            name="dot-single"
                                            type='Entypo'
                                            color="#c3c1c6"
                                        />
                                        <Text style={{ fontFamily: FONTS.regular }}>{item.name4}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: moderateScale(10), marginLeft: moderateScale(10) }}>
                                        <Text style={{ textDecorationLine: "line-through", color: "#b7b6b8" }}>{item.oldprice}</Text>
                                        <Text style={{ paddingLeft: moderateScale(5), color: "#000" }}>{item.newprice}</Text>
                                        <Text style={{ color: "green", paddingLeft: moderateScale(5) }}>{item.discount}</Text>
                                    </View>

                                </View>

                                <View style={{ flexDirection: "column" }}>
                                    <View>
                                        <Image
                                            style={{ ...styles.serviceIMG_image }}
                                            source={require('../../Assets/images/mack2.jpg')}
                                        />
                                        <View style={{ ...styles.Add_Button }}>
                                            <Text style={{ color: "red" }}>ADD</Text>
                                        </View>
                                    </View>
                                    <Text style={{ marginTop: moderateScale(15), marginLeft: moderateScale(30) }}>Add Ons</Text>

                                </View>
                            </View>

                            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                                <View style={{ ...styles.sliderText_View }}>
                                    <Text>Save ₹ 1019 compared to Authorised{"\n"}services</Text>
                                    <Icon
                                        name="pluscircle"
                                        type='AntDesign'
                                        color="red"
                                        size={25}
                                    />
                                </View>

                                <View style={{ ...styles.sliderText_View }}>
                                    <Text style={{ color: "green" }}>Save ₹ 1019 compared to Authorised{"\n"}services</Text>
                                    <Icon
                                        name="pluscircle"
                                        type='AntDesign'
                                        color="red"
                                        size={25}
                                    />
                                </View>
                            </ScrollView>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </Container>
    )
}

export default Exidebatteries

const styles = StyleSheet.create({

    serviceIMG_image: {
        width: moderateScale(100),
        height: moderateScale(100),
        borderRadius: moderateScale(20),
        marginTop: moderateScale(20),
        marginLeft: moderateScale(15)
    },
    mainView: {
        width: moderateScale(310),
        height: moderateScale(225),
        borderWidth: moderateScale(0.2),
        // flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(5),
        marginHorizontal: moderateScale(15),
        marginVertical: moderateScale(15),
        borderRadius: moderateScale(10),
        alignItems: "center",
        borderColor: "#bdb8c1"
    },
    Add_Button: {
        width: moderateScale(70),
        height: moderateScale(30),
        borderRadius: moderateScale(5),
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        alignSelf: "center",
        resizeMode: "cover",
        left: moderateScale(30),
        borderWidth: moderateScale(1),
        bottom: moderateScale(-12),
        borderColor: "red",
        backgroundColor: "#fff",
    },
    sliderText_View: {
        width: moderateScale(270),
        height: moderateScale(50),
        borderWidth: moderateScale(0.1),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(10),
        marginHorizontal: moderateScale(10),
        marginBottom: moderateScale(15),
        borderRadius: moderateScale(5),
        borderColor: "#bdb8c1",
        marginTop: moderateScale(10)
    },
    bannerIMG_view: {


    },
    bannerIMG_image: {
        width: moderateScale(330),
        height: moderateScale(150)
    }

})