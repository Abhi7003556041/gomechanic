import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Container, Icon } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'
import KnowYourPeriodicCard from './KnowYourPeriodicCard'
import ReactNativeModal from 'react-native-modal'
import BasicService from '../../Screens/SingleServicePage/BasicService'
import { useDispatch, useSelector } from 'react-redux'
import MainService from '../../Services/MainService'
import { addCartService } from '../../Redux/reducer/CartService'
import Toast from 'react-native-simple-toast'
import { COLORS } from '../../Constants/Colors'

const { width, height } = Dimensions.get('window');

const ServiceCard = ({ Data, Ind, len }) => {
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
    const { serviceData } = useSelector((state) => state.CartService)

    const { userData, carData } = useSelector((state) => state.User)

    const [isModalVisible, setModalVisible] = useState(false)
    const [singleService, setSingleService] = useState({})
    const [SubService, setSubService] = useState([])

    const dispatch = useDispatch()

    const addToCart = async (id) => {
        let data = {
            service_id: id,
            service_customize_id: "",
            customer_id: userData.customer_id
        }
        console.log('data', data)
        MainService.AddToCartService(data)
            .then((res) => {
                console.log('AddToCartService', res)
                if (res && res.status) {
                    Toast.show('Added to cart', Toast.SHORT)
                    dispatch(addCartService(res.data))
                }
                else {
                    Toast.show('Already Added to Cart', Toast.SHORT)
                }
            })
            .catch((err) => err && console.log('err', err))
    }


    const GetSubService = async (id) => {
        let data = {
            service_id: id,
        }
        console.log('data', data)
        MainService.FetchSubService(data)
            .then((res) => {
                console.log('FetchSubService', res.data)
                if (res && res.status) {
                    setSubService(res.data)
                }
                else {
                    setSubService([])
                }
            })
            .catch((err) => err && console.log('err'))
    }
    return (
        <Container>
            {
                console.log('Datatta', Data)
            }
            <View style={{ ...styles.bannerIMG_view }}>
                <Image
                    style={{ ...styles.bannerIMG_image }}
                    source={{ uri: Data?.sub_category_image }}
                />
            </View>
            <Text style={{ fontFamily: FONTS.semibold, color: "#000", fontSize: moderateScale(20), paddingLeft: moderateScale(10) }}>{Data?.sub_category_name}</Text>
            {/* ---------------------- */}

            {Data?.service?.map((item, index) => {
                return (
                    <TouchableOpacity
                        onPress={() => NavigationService.navigate('ServiceSingleCardDetail', { ServiceId: item?.service_id })}
                    >
                        <View style={{ ...styles.mainView }}>
                            <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>

                                <View style={{ marginTop: moderateScale(10), width: '55%', }}>
                                    <Text style={{ fontFamily: FONTS.semibold, color: "#000", marginLeft: moderateScale(10), marginBottom: moderateScale(5) }}>{item.service_name}</Text>
                                    {item?.service_benefit?.map((it) => {
                                        return (
                                            <View style={{ flexDirection: "row", alignItems: "center", }}>
                                                <Icon
                                                    name="dot-single"
                                                    type='Entypo'
                                                    color="#c3c1c6"
                                                />
                                                <Text style={{ fontFamily: FONTS.regular, }}>{it}</Text>
                                            </View>
                                        )
                                    })}




                                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: moderateScale(10), marginLeft: moderateScale(10) }}>
                                        <Text style={{ textDecorationLine: "line-through", color: "#b7b6b8" }}>₹ 4532</Text>
                                        <Text style={{ paddingLeft: moderateScale(5), color: "#000" }}>₹ {item?.service_price}</Text>
                                        <Text style={{ color: "green", paddingLeft: moderateScale(5) }}>25%</Text>
                                    </View>

                                </View>

                                <View style={{ flexDirection: "column" }}>
                                    <View>
                                        <Image
                                            style={{ ...styles.serviceIMG_image }}
                                            source={{uri:item?.image}}
                                        />
                                        {serviceData.some((res) => res.service_id == item?.service_id) ?
                                            <TouchableOpacity
                                                onPress={() => {

                                                    NavigationService.navigate('Cart')
                                                }

                                                }
                                                style={{ ...styles.Add_Button , backgroundColor: COLORS.primaryThemeColor}}>
                                                <Text style={{ color: "#fff" }}>VIEW</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity
                                                onPress={() => {
                                                    if (item?.customize_status) {
                                                        setSingleService(item)
                                                        GetSubService(item?.service_id)
                                                        setModalVisible(true)
                                                    }
                                                    else {
                                                        addToCart(item?.service_id)
                                                        // NavigationService.navigate('Cart')
                                                    }

                                                }}
                                                style={{ ...styles.Add_Button }}>
                                                <Text style={{ color: "red" }}>ADD</Text>
                                            </TouchableOpacity>


                                        }
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


                            </ScrollView>
                        </View>
                    </TouchableOpacity>
                )
            })}
            {Ind + 1 == len ?
                <KnowYourPeriodicCard />
                : null
            }

            <ReactNativeModal isVisible={isModalVisible}
                // backdropColor={'rgba(228, 14, 104, 1)'}
                backdropOpacity={0.7}
                style={{
                    marginBottom: 0,
                    marginHorizontal: 0,
                    justifyContent: 'flex-end',
                    margin: 0
                }}
                onBackButtonPress={() => {
                    setModalVisible(false)

                }}
                onBackdropPress={() => {
                    setModalVisible(false)

                }}
            >
                <View style={{ height: height / 2.1, }}>
                    <BasicService Data={singleService} SubData={SubService} func={() => setModalVisible(false)} />
                </View>





            </ReactNativeModal>
        </Container>
    )
}

export default ServiceCard

const styles = StyleSheet.create({

    serviceIMG_image: {
        width: moderateScale(100),
        height: moderateScale(100),
        borderRadius: moderateScale(20),
        marginTop: moderateScale(20),
        marginLeft: moderateScale(15),
    },
    mainView: {
        width: '95%',
        height: moderateScale(225),
        borderWidth: moderateScale(0.2),
        // flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(0),
        marginHorizontal: moderateScale(10),
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
        width: moderateScale(300),
        height: moderateScale(50),
        borderWidth: moderateScale(0.1),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(10),
        // marginHorizontal: moderateScale(10),
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