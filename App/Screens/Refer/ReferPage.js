import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Container, Icon, StatusBar, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import ReferFrequentlyAsked from '../../Components/ReferPageComponent/ReferFrequentlyAsked'
import NavigationService from '../../Services/Navigation'


const ReferPage = () => {
    const colors = useTheme()
    const steps = [
        {
            icon: <Icon name="numeric-1" type='MaterialCommunityIcon' color="red" size={30} />,
            iconIMG: require('../../Assets/images/substract.png'),
            text: "Refer your friend with your Unique Referral Code.",
        },
        {
            icon: <Icon name="numeric-2" type='MaterialCommunityIcon' color="red" size={30} />,
            iconIMG: require('../../Assets/images/substract.png'),
            text: "Your Friend gets ₹ 1000 GoApp Money post installing the app. ",
        },
        {
            icon: <Icon name="numeric-3" type='MaterialCommunityIcon' color="red" size={30} />,
            text: "You get ₹ 1000 GoApp Money after their first order.",
        },

    ]
    return (
        <Container style={{ ...styles.container_style }}>
            <StatusBar
                backgroundColor={colors.pageBackgroundColor}
                barStyle="dark-content"
            />
            <View style={{ ...styles.header_View }}>
                <Text style={{ ...styles.header_Text }}>Refer And Earn</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <ImageBackground
                        style={{ ...styles.refer_image }}
                        source={require('../../Assets/images/back1.jpg')}
                    />
                    <Text numberOfLines={2} style={{ ...styles.refer_Text1 }}>Earn ₹ 1000 for every Friend you Refer</Text>
                    <Text numberOfLines={2} style={{ ...styles.refer_Text2 }}>Ger a friend to start using GoMechanic & earn ₹ 1000 when they complete their first order. </Text>
                </View>

                <View style={{ ...styles.main_View }}>

                    <Text style={{ color: "#000", fontFamily: FONTS.regular, padding: moderateScale(10) }}>How it Works?</Text>

                    <View style={{ borderWidth: moderateScale(0.5), borderStyle: "dashed", borderColor: "#ccc2c2", marginHorizontal: moderateScale(15) }} />
                    <View style={{ paddingHorizontal: moderateScale(5), marginHorizontal: moderateScale(15), paddingTop: moderateScale(10) }}>

                        {steps?.map((item, index) => {
                            return (<>
                                <View style={{ ...styles.loop_main_view }}>
                                    <View style={{ flexDirection: "column", alignItems: "center" }}>
                                        <View style={{ ...styles.Num_icon }}>
                                            {item.icon}
                                        </View>
                                        <Image
                                            style={{ height: moderateScale(25), width: moderateScale(2) }}
                                            source={item.iconIMG}
                                        />
                                    </View>
                                    <Text numberOfLines={2} style={{ ...styles.loop_main_text }}>{item.text}</Text>
                                </View>
                            </>)
                        })}
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", justifyContent: "space-between", paddingVertical: moderateScale(10) }}>
                    <View style={{ borderWidth: moderateScale(0.5), borderStyle: "dashed", width: moderateScale(110) }} />
                    <Text style={{ fontFamily: FONTS.regular, fontSize: moderateScale(15) }}>REFER VIA</Text>
                    <View style={{ borderWidth: moderateScale(0.5), borderStyle: "dashed", width: moderateScale(110) }} />
                </View>
                <View style={{ ...styles.share_view }}>
                    <Text style={{ ...styles.usertext }}>ABCDEFGH</Text>
                    <Icon name="share" type='Entypo' color="#2fb3cf" size={25} />
                </View>

                <View style={{ ...styles.whatsapp_view }}>
                    <Text style={{ ...styles.whatsapp_text }}>Share via WhatsApp</Text>
                    <Icon name="whatsapp" type='FontAwesome5' color="#fff" size={25} />
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: moderateScale(20) }}>
                    <Text style={{ fontFamily: FONTS.semibold, color: "#000", fontSize: moderateScale(13) }}>Your Earnings</Text>
                    <Text style={{ fontFamily: FONTS.semibold, color: "#000", fontSize: moderateScale(13) }}>₹2500</Text>
                </View>


                <View style={{ borderWidth: moderateScale(0.5), borderStyle: "dashed", marginVertical: moderateScale(10), borderColor: "#dad8db" }} />


                <View>
                    <Text style={{ fontFamily: FONTS.regular, color: "#000", fontSize: moderateScale(13), padding: moderateScale(20) }}>Avail Referral Discount</Text>
                    <View style={{ ...styles.Discount_view }}>
                        <Text style={{ ...styles.Discount_text1 }}>Friend Referral Code</Text>
                        <Text style={{ ...styles.Discount_text2 }}>APPLY</Text>
                    </View>
                </View>


                <View>
                    <Text numberOfLines={2} style={{ ...styles.winMiles_Text1 }}>Win Miles Membership</Text>
                    <Text numberOfLines={2} style={{ ...styles.winMiles_Text2 }}>Refer your friends & Top 3 on the Leaderboard get to win Free Miles Membership </Text>
                </View>


                <View style={{ paddingVertical: moderateScale(15) }}>

                    <View style={{ ...styles.user_pic_view }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image
                                style={{ height: moderateScale(55), width: moderateScale(55) }}
                                source={require('../../Assets/images/robo.png')}
                            />
                            <Text style={{ fontFamily: FONTS.bold, color: "#000" }}>You</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontFamily: FONTS.semibold, color: "#000" }}>149760</Text>
                            <Text style={{ fontFamily: FONTS.regular }}>Rank</Text>
                        </View>
                        <View style={{ alignItems: "center", paddingRight: moderateScale(10) }}>
                            <Text style={{ fontFamily: FONTS.semibold, color: "#000" }}>0</Text>
                            <Text style={{ fontFamily: FONTS.regular }}>Points</Text>
                        </View>
                    </View>
                </View>


                <TouchableOpacity
                    onPress={() => NavigationService.navigate("Leaderboard")}
                >
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: moderateScale(15) }}>
                        <Text style={{ fontFamily: FONTS.bold, color: "red" }}>VIEW LEADERBOARD</Text>
                        <Icon name="arrowright" type='AntDesign' color="red" size={25} />
                    </View>
                </TouchableOpacity>
                {/* -------------------------------------Frequently Asked Question start------------------------------------------- */}

                <ReferFrequentlyAsked />

                {/* -------------------------------------Frequently Asked Question END------------------------------------------- */}


            </ScrollView>
        </Container>
    )
}

export default ReferPage

const styles = StyleSheet.create({
    container_style: {
        paddingHorizontal: moderateScale(10)
    },
    header_View: {

    },
    header_Text: {
        fontFamily: FONTS.bold,
        fontSize: moderateScale(14),
        color: "#000",
        paddingVertical: moderateScale(10)
    },
    refer_image: {
        height: moderateScale(160),
        width: "100%",
        // borderRadius:10
        // position:"absolute"
    },
    refer_Text1: {
        maxWidth: "100%",
        fontSize: moderateScale(17),
        color: "#000",
        paddingTop: moderateScale(10),
        paddingHorizontal: moderateScale(15),
        fontFamily: FONTS.bold
    },
    refer_Text2: {
        maxWidth: "100%",
        fontSize: moderateScale(12),
        color: "#000",
        padding: moderateScale(15),
        fontFamily: FONTS.regular
    },
    Num_icon: {
        // borderWidth:moderateScale(),
        borderRadius: moderateScale(20),
        backgroundColor: "#faecec"
    },
    main_View: {
        justifyContent: "center",
        backgroundColor: "#f9f6f8",
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(5),
        marginHorizontal: moderateScale(15),
        borderColor: "red"
    },
    loop_main_view: {
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "#f9f6f8",
    },
    loop_main_text: {
        maxWidth: "80%",
        paddingLeft: moderateScale(6),
        fontFamily: FONTS.regular,
        paddingBottom: moderateScale(15),
        fontSize: moderateScale(11)
    },
    share_view: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: moderateScale(1.5),
        height: moderateScale(50),
        alignItems: "center",
        paddingHorizontal: moderateScale(20),
        marginHorizontal: moderateScale(15),
        borderStyle: "dashed",
        borderRadius: moderateScale(5),
        borderColor: "#2fb3cf"
    },
    usertext: {
        fontFamily: FONTS.bold,
        fontSize: moderateScale(15),
        color: "#2fb3cf"

    },
    whatsapp_view: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: moderateScale(55),
        alignItems: "center",
        paddingHorizontal: moderateScale(20),
        marginHorizontal: moderateScale(15),
        borderStyle: "dashed",
        borderRadius: moderateScale(5),
        backgroundColor: "#50c63e",
        marginVertical: moderateScale(20)
    },
    whatsapp_text: {
        fontFamily: FONTS.bold,
        fontSize: moderateScale(13),
        color: "#fff"

    },
    Discount_view: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: moderateScale(55),
        alignItems: "center",
        paddingHorizontal: moderateScale(20),
        marginHorizontal: moderateScale(15),
        borderRadius: moderateScale(5),
        borderWidth: moderateScale(1),
        borderColor: "#cfcdd0"

    },
    Discount_text1: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(13),
        // color: "#fff"
    },
    Discount_text2: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(12),
        color: "red"
    },
    winMiles_Text1: {
        fontSize: moderateScale(17),
        color: "#000",
        padding: moderateScale(20),
        fontFamily: FONTS.bold
    },
    winMiles_Text2: {
        fontSize: moderateScale(13),
        color: "#000",
        fontFamily: FONTS.regular,
        paddingHorizontal: moderateScale(16)
    },
    user_pic_view: {

        flexDirection: "row",
        justifyContent: "space-between",
        height: moderateScale(70),
        alignItems: "center",
        paddingHorizontal: moderateScale(5),
        marginHorizontal: moderateScale(15),
        borderRadius: moderateScale(5),
        borderWidth: moderateScale(1),
        borderColor: "#cfcdd0"
    }
})