import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Container, Icon } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import BackHeader from '../Header/BackHeader'
import { FONTS } from '../../Constants/Fonts'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ReactNativeModal from 'react-native-modal'
import ReferralPointsModel from './ReferralPointsModel'
const { width, height } = Dimensions.get('window');

const Leaderboard = () => {
    const profle = [
        {
            image: require('../../Assets/images/robo1.png'),
            icon: <Icon name="numeric-3-circle-outline" type='MaterialCommunityIcon' color="blue" size={25} />,
            name: "Manish",
            icon2: <Icon name="trending-up" type='Feather' color="#9e9d9e" size={20} />,
            count: "1230",
        },
        {
            image: require('../../Assets/images/robo2.png'),
            icon: <Icon name="numeric-1-circle-outline" type='MaterialCommunityIcon' color="orange" size={25} />,
            name: "Mohit",
            icon2: <Icon name="trending-up" type='Feather' color="#9e9d9e" size={20} />,
            count: "1230",
        },
        {
            image: require('../../Assets/images/robo3.png'),
            icon: <Icon name="numeric-2-circle-outline" type='MaterialCommunityIcon' color="green" size={25} />,
            name: "Rahul",
            icon2: <Icon name="trending-up" type='Feather' color="#9e9d9e" size={20} />,
            count: "1230",
        },
    ]

    const Rank_Graf = [
        {
            num: "1",
            image: require('../../Assets/images/robo1.png'),
            name: "Rahul",
            count: "1210",
        },
        {
            num: "2",
            image: require('../../Assets/images/robo2.png'),
            name: "Rahul",
            count: "1210",
        },
        {
            num: "3",
            image: require('../../Assets/images/robo3.png'),
            name: "Rahul",
            count: "1210",
        },
        {
            num: "4",
            image: require('../../Assets/images/robo4.png'),
            name: "Rahul",
            count: "1210",
        },
        {
            num: "5",
            image: require('../../Assets/images/robo1.png'),
            name: "Rahul",
            count: "1210",
        },
        {
            num: "6",
            image: require('../../Assets/images/robo4.png'),
            name: "Rahul",
            count: "1210",
        },
        {
            num: "7",
            image: require('../../Assets/images/robo1.png'),
            name: "Rahul",
            count: "1210",
        },
        {
            num: "8",
            image: require('../../Assets/images/robo4.png'),
            name: "Rahul",
            count: "1210",
        },
        {
            num: "9",
            image: require('../../Assets/images/robo1.png'),
            name: "Rahul",
            count: "1210",
        },
    ]
    //MOBIL state
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <Container style={{ ...styles.MainContainer }}>

            <BackHeader />

            <View style={{ ...styles.HeaderView }}>
                <Text style={{ ...styles.HeaderText1 }}>Leaderboard</Text>
                <TouchableOpacity
                    onPress={() => { setModalVisible(true) }}
                >
                    <Text style={{ ...styles.HeaderText2 }}>How to earn Referral Points?</Text>
                    <View style={{ borderWidth: 1.3, borderStyle: "dashed", borderColor: "red", marginRight: moderateScale(140) }} />

                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                {/* -------------Leaderboard Start---------------------------------- */}
                <View style={{ ...styles.main_robo_view }}>
                    {profle?.map((item, index) => {
                        return (

                            <View style={{ ...styles.robo_view }}>
                                <View style={{ alignItems: "center" }}>
                                    <Image
                                        style={{ height: moderateScale(70), width: moderateScale(70) }}
                                        source={item.image}
                                    />
                                    <View style={{ ...styles.robo_icon }}>
                                        {item.icon}
                                    </View>
                                </View>

                                <View style={{ alignItems: "center" }}>
                                    <Text style={{ ...styles.robo_text }}>
                                        {item.name}
                                    </Text>
                                    <View style={{ flexDirection: "row" }}>
                                        {item.icon2}

                                        <Text style={{ paddingLeft: moderateScale(5) }}>{item.count}</Text>

                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </View>
                {/* -------------Leaderboard END---------------------------------- */}

                {/* --------------------Rank Graf Start---------------------------- */}
                <View>
                    <View style={{ ...styles.RankGraf_View }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ ...styles.RankGraf_text }}>Rank</Text>
                            <Text style={{ ...styles.RankGraf_text }}>Name</Text>
                        </View>
                        <Text style={{ ...styles.RankGraf_text }}>Points</Text>
                    </View>
                    {/* -------------------- */}
                    {Rank_Graf?.map((item, index) => {
                        return (
                            <View style={{ ...styles.Rank_Graf_mainView }}>

                                <View style={{ flexDirection: "row", alignItems: "center" }}>

                                    <Text style={{ ...styles.Rank_Graf_text1 }}>{item.num}</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: moderateScale(25) }}>
                                        <Image
                                            style={{ height: moderateScale(40), width: moderateScale(40) }}
                                            source={item.image}
                                        />
                                        <Text style={{ ...styles.Rank_Graf_text2 }}>{item.name}</Text>
                                    </View>
                                </View>
                                <Text style={{ fontFamily: FONTS.medium, fontSize: moderateScale(13), paddingRight: moderateScale(20) }}>{item.count}</Text>
                            </View>
                        )
                    })}
                </View>
                {/* --------------------Rank Graf END---------------------------- */}
            </ScrollView>


            {/* ---------------------Single User Profile Start ---------------------- */}
            <View>
                <View style={{ paddingTop: moderateScale(10), paddingHorizontal: moderateScale(15) }}>
                    <Text style={{ ...styles.singel_user_text1 }}> Your Placement</Text>
                    <Text style={{ ...styles.singel_user_text2 }}>Top 3 on the Leaderboard get Miles Membership every Monday</Text>
                </View>

                <View style={{ paddingVertical: moderateScale(15) }}>

                    <View style={{ ...styles.user_pic_view }}>
                        <View style={{ alignItems: "center", flexDirection: "row" }}>
                            <Text style={{ ...styles.user_pic_text }}>149760</Text>

                            <Image
                                style={{ ...styles.user_image }}
                                source={require('../../Assets/images/robo.png')}
                            />
                            <Text style={{ ...styles.user_name }}>Rahul</Text>
                        </View>

                        <View style={{ alignItems: "center", paddingRight: moderateScale(10) }}>
                            <Text style={{ ...styles.user_count_text }}>0</Text>
                        </View>
                    </View>
                </View>

            </View>
            {/* ---------------------Single User Profile END ---------------------- */}




            <ReactNativeModal isVisible={isModalVisible}
                // backdropColor={'rgba(228, 14, 104, 1)'}
                backdropOpacity={0.4}
                style={{
                    marginBottom: 0,
                    marginHorizontal: 0,
                    justifyContent: 'flex-end'
                }}
                onBackButtonPress={() => setModalVisible(false)}
                onBackdropPress={() => setModalVisible(false)}
            >
                <View style={{ height: height / 4 }}>
                    <ReferralPointsModel isModalVisible={isModalVisible} setModalVisible={setModalVisible} />
                </View>
            </ReactNativeModal>

        </Container>
    )
}

export default Leaderboard

const styles = StyleSheet.create({
    MainContainer: {
        paddingHorizontal: moderateScale(10),
        // paddingVertical: moderateScale(10)
    },
    HeaderView: {
        paddingHorizontal: moderateScale(10),
        paddingBottom: moderateScale(5)
    },
    HeaderText1: {
        fontFamily: FONTS.semibold,
        color: "#000",
        fontSize: moderateScale(20),
    },
    HeaderText2: {
        color: "red",
        // textDecorationLine: "underline",
        fontFamily: FONTS.regular,

    },
    main_robo_view: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(25),
        backgroundColor: "#f7f4f7",
        height: moderateScale(140),
    },
    robo_view: {
        alignItems: "center",
        paddingTop: moderateScale(15)
    },
    robo_icon: {
        position: "absolute",
        bottom: moderateScale(-5),
        backgroundColor: "#fff",
        borderRadius: moderateScale(20),
    },
    robo_text: {
        fontFamily: FONTS.regular,
        marginTop: moderateScale(5),
        color: "#000",
        fontSize: moderateScale(14)
    },
    RankGraf_View: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: moderateScale(10)
    },
    RankGraf_text: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(14),
        paddingLeft: moderateScale(5),
        paddingRight: moderateScale(25)
    },
    Rank_Graf_mainView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(20),
        paddingBottom: moderateScale(20)
    },
    Rank_Graf_text1: {
        fontFamily: FONTS.medium,
        color: "#000",
        fontSize: moderateScale(13)
    },
    Rank_Graf_text2: {
        fontFamily: FONTS.medium,
        color: "#000",
        paddingLeft: moderateScale(5)
    },
    user_pic_view: {

        flexDirection: "row",
        justifyContent: "space-between",
        height: moderateScale(60),
        alignItems: "center",
        paddingHorizontal: moderateScale(10),
        marginHorizontal: moderateScale(10),
        borderRadius: moderateScale(5),
        borderWidth: moderateScale(1),
        borderColor: "#cfcdd0",
        backgroundColor: "#f7f4f7"
    },
    user_pic_text: {
        fontFamily: FONTS.semibold,
        color: "#000",
        fontSize: moderateScale(12),
        paddingRight: moderateScale(10)

    },
    user_image: {
        height: moderateScale(35),
        width: "25%",
        marginRight: moderateScale(5)
    },
    user_name: {
        fontFamily: FONTS.regular,
        color: "#000"
    },
    user_count_text: {
        fontFamily: FONTS.semibold,
        color: "#000",
        fontSize: moderateScale(12)
    },
    singel_user_text1: {
        fontFamily: FONTS.bold,
        color: "#000",
        fontSize: moderateScale(14)
    },
    singel_user_text2: {
        fontFamily: FONTS.regular,
    }




})