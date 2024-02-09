import { View, Text, ScrollView, Dimensions, Animated, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Accordion, Container, Icon, useTheme } from 'react-native-basic-elements'
import GoogleMap from '../../Components/GoogleMap/GoogleMap'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient'
import FrequentlyAsked from '../../Components/BasicServiceComponent/FrequentlyAsked'
const { height, width } = Dimensions.get('window')

const Sos = () => {
    const colors = useTheme();

    return (
        <Container >
            <GoogleMap
            // changeLongLat={(a) => {changeLocation(a)}}
            />
            <ScrollView style={{}}>

                <View style={{
                    // height: 1000,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    // marginTop:height/2.5,
                    // position:'absolute',
                    // zIndex: 99999999
                }}>
                    <View style={{
                        flexDirection: "row", alignItems: "center", justifyContent: "space-between",
                        paddingHorizontal: moderateScale(15), paddingVertical: moderateScale(10),
                        borderBottomColor: '#EBEBEB', borderBottomWidth: 1
                    }}>

                        <Text style={{ fontFamily: FONTS.bold, color: "#000", fontSize: moderateScale(16) }}>Choose Your Emergency Service</Text>
                        {/* <Text style={{ fontFamily: FONTS.regular }}>Choose the best-fit service for you car</Text> */}

                    </View>
                    <View
                        style={{
                            height: height / 2.8,
                        }}>
                        <Swiper>
                            {[1, 2].map((item, index) => (
                                <View style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    // marginHorizontal:10
                                }}>
                                    {[1, 2, 3, 4, 5, 6].map((it, ind) => {
                                        return (

                                            <View style={{
                                                height: moderateScale(60),
                                                width: '30%',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginVertical: 25
                                            }}>
                                                <Image
                                                    style={styles.imageView}
                                                    source={require('../../Assets/images/1695110021299.png')}
                                                    resizeMode="contain"
                                                />
                                                <Text

                                                    style={{
                                                        fontFamily: FONTS.semibold,
                                                        fontSize: moderateScale(11),
                                                        maxWidth: '80%',
                                                        textAlign: 'center',
                                                        color: '#000',
                                                        margin: 5,
                                                        marginLeft:10
                                                        // alignSelf: 'center'
                                                    }}>
                                                    Car Fluid Leakage
                                                </Text>
                                            </View>

                                        )
                                    })}
                                </View>
                            ))}
                        </Swiper>
                    </View>
                    <Text style={{ fontFamily: FONTS.semibold, color: "#000", fontSize: moderateScale(14), textAlign: 'center', color: 'green' }}>
                        165 Customers Assisted Today</Text>
                    <Image
                        style={{ ...styles.imageView, height: moderateScale(120), marginTop: moderateScale(12) }}
                        source={require('../../Assets/images/1695115876040.png')}
                    // resizeMode="contain"
                    />
                   
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={['#333333', '#000']}
                        style={styles.linearGradient}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center',marginBottom:moderateScale(10)}}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: 25, width: 50, borderRadius: 5, backgroundColor: '#FF3131', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 12, color: '#fff', fontFamily: FONTS.bold }}>Miles</Text>
                                </View>
                                <Text style={{ fontSize: 14, color: '#fff', fontFamily: FONTS.bold, marginHorizontal: moderateScale(5) }}>Membership</Text>
                            </View>
                            <Icon
                                name="arrowright"
                                type='AntDesign'
                                color={'#fff'}
                                onPress={() => {
                                    // setModalVisible(true);
                                }}
                                style={{
                                    // marginLeft: 10,
                                }}
                                size={20}
                            />
                        </View>
                        <Text style={{ fontSize: 13, color: '#f4f4f4', fontFamily: FONTS.medium,  }}>
                            • Get 2 Free SOS Services with Miles Membership</Text>

                    </LinearGradient>
                    <View style={{
        backgroundColor:'#f4f4f4'

                    }}>
                         <Accordion style={{ color: "#fff" }}
                    title='Terms & FAQs'
                    titleStyle={{ fontSize: moderateScale(13), fontFamily: FONTS.semibold }}
                    containerStyle={{
                        color: "#fff",
                        backgroundColor: "#fff",
                        marginVertical:10,
                        borderRadius:0,
                        paddingHorizontal: moderateScale(0),

                    }}
                    shadow={true}

                >
                    {/* <Accordion.Item/> */}
                    <FrequentlyAsked />
                </Accordion>
                <View style={{height:moderateScale(140),backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
                <Image
                        style={{ ...styles.imageView, height: moderateScale(120), paddingVertical: moderateScale(12) }}
                        source={require('../../Assets/images/1695115847851.png')}
                    // resizeMode="contain"
                    />
                    </View>
                    </View>
                </View>
            </ScrollView>
        </Container>
    )
}

export default Sos

const styles = StyleSheet.create({
    imageView: {
        height: moderateScale(50),
        width: '100%',
        // borderRadius:10
    },
    textStyle: {
        fontFamily: FONTS.bold,
        fontSize: moderateScale(18),
        textAlign: 'center',
        width: '70%',
        alignSelf: 'center',
    },
    textSubStyle: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(13),
        textAlign: 'center',
        marginTop: moderateScale(10),
    },
    linearGradient: {
        // borderRadius: moderateScale(5),
        height: moderateScale(75),
        marginVertical: moderateScale(10),
        padding: moderateScale(15),
        // backgroundColor:'#EBEBEB'
    },
})