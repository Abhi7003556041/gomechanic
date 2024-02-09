import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, ScrollView } from 'react-native';
import { Accordion, Container, Icon, useTheme } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import Swiper from 'react-native-swiper';
import { FONTS } from '../../Constants/Fonts';
import EssentialServices from '../../Components/HompageComponents/EssentialServices';
import Essential from '../../Components/ServicePageComp/Essential';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationService from '../../Services/Navigation';
import ReactNativeModal from 'react-native-modal';
import FrequentlyAsked from '../../Components/BasicServiceComponent/FrequentlyAsked';
import BasicService from './BasicService';
import SpecialOffers from '../../Components/BasicServiceComponent/SpecialOffers';
import BackHeader from '../../Components/Header/BackHeader';
import MainService from '../../Services/MainService';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast'
import { addCartService } from '../../Redux/reducer/CartService';

const { width, height } = Dimensions.get('window');

const ServiceSingleCardDetail = ({route}) => {
    const colors = useTheme()
    const {serviceData} = useSelector((state)=>state.CartService)
    const {ServiceId} = route.params
    //map
    const Front_Brake_Pads = [
        {
            image: require('../../Assets/images/time2.png'),
            text: "Takes 3 Hours",
        },
        {
            image: require('../../Assets/images/time1.png'),
            text: "1 Month Warranty",
        },
        {
            image: require('../../Assets/images/time3.png'),
            text: "Every 20000 kms or 12 Months (Recommended)",
        },
    ]
    const Additional = [

        {
            icon: <Icon name="checkcircle" type='AntDesign' color="green" />,
            title: "Wiper Fluid Replacement",
        },
        {
            icon: <Icon name="checkcircle" type='AntDesign' color="green" />,
            title: "Battery Water Top Up",
        },
        {
            icon: <Icon name="checkcircle" type='AntDesign' color="green" />,
            title: "Car Wash",
        },
        {
            icon: <Icon name="checkcircle" type='AntDesign' color="green" />,
            title: "Interior Vacuuming (Carpet & Seats)",
        },
    ]

    const steps = [
        {
            icon: <Icon name="numeric-1" type='MaterialCommunityIcon' color="red" size={30} />,
            iconIMG: require('../../Assets/images/substract.png'),
            text: "A Dedicated Service Buddy Will Arrange a doorstep pick-up from your location",
        },
        {
            icon: <Icon name="numeric-2" type='MaterialCommunityIcon' color="red" size={30} />,
            iconIMG: require('../../Assets/images/substract.png'),
            text: "A Dedicated Service Buddy Will Arrange a doorstep pick-up from your location",
        },
        {
            icon: <Icon name="numeric-3" type='MaterialCommunityIcon' color="red" size={30} />,
            iconIMG: require('../../Assets/images/substract.png'),
            text: "A Dedicated Service Buddy Will Arrange a doorstep pick-up from your location",
        },
        {
            icon: <Icon name="numeric-4" type='MaterialCommunityIcon' color="red" size={30} />,
            text: "A Dedicated Service Buddy Will Arrange a doorstep pick-up from your location",
        },
    ]

    //model State
    const [isModalVisible, setModalVisible] = useState(false)
    const [singleService,setSingleService] = useState({})
    const [SubService,setSubService] = useState([])
    const dispatch = useDispatch()
    const [SwiperImage,setSwiperImage] = useState([])
    const { userData, carData } = useSelector((state) => state.User)


    const GetSingleService = async() => {
        let data = {
            service_id:ServiceId,
            car_variant_id:carData.car_variant_id
        }
        MainService.FetchSingleService(data)
        .then((res)=>{
            console.log('FetchSingleService',res.data)
            if(res && res.status){
                setSingleService(res.data)
                setSwiperImage(res.data.image)
            }
            else{
                Toast.show('Already Added to Cart',Toast.SHORT)
            }
           
        })
        .catch((err)=>err && console.log('err'))
    }

    const GetSubService = async() => {
        let data = {
            service_id:ServiceId,
        }
        MainService.FetchSubService(data)
        .then((res)=>{
            console.log('FetchSubService',res.data)
            if(res && res.status){
                setSubService(res.data)        
            }
            else{
                setSubService([])
            }
        })
        .catch((err)=>err && console.log('err'))
    }

    const addToCart = async() => {
        let data = {
            service_id:singleService?.service_id,
            service_customize_id:"",
            customer_id:userData.customer_id
        }
        console.log('data',data)
        MainService.AddToCartService(data)
        .then((res)=>{
            console.log('AddToCartService',res)
            if(res && res.status){
                Toast.show('Added to cart',Toast.SHORT)
                dispatch(addCartService(res.data))
            }
        })
        .catch((err)=>err && console.log('err',err))
    }


    useEffect(()=>{
        GetSingleService()
        GetSubService()
    },[])
    return (
        <Container>
            <BackHeader title={singleService?.service_name} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* ------------------------Banner Start----------------------------- */}
                <View
                    style={{
                        height: height / 2.9,
                    }}>
                    <Swiper
                     paginationStyle={{
                        paddingBottom: moderateScale(2)
    
                    }}
                    autoplayDirection={true}
                    nextButton={true}
                    activeDotStyle={{
                        backgroundColor: colors.primaryThemeColor,
                    }}
                    dotStyle={{
                        backgroundColor: colors.secondaryThemeColor
                    }}
                    dot={
                        <View style={{backgroundColor:'#DEDEDE', width: 80, height: 3,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
                    }
                    activeDot={
                        <View style={{backgroundColor: '#8A8A8A', width: 80, height: 3, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
                    }
                    // scrollEnabled
                    loop={true}
                    showsPagination={true}
                    // onResponderRelease
                    autoplay={true}
                    autoplayTimeout={3}
                    >
                        {SwiperImage?.map((item, index) => (
                            <View key={index}>
                                <Image
                                    style={styles.imageView}
                                    source={{uri:item}}
                                    resizeMode="contain"
                                />
                            </View>

                        ))}
                    </Swiper>
                </View>
                {/* ------------------------Banner END----------------------------- */}
{console.log('imaageswiper',userData)}

                {/* -----------------------------------Front Brake Pads Start----------------------------------- */}
                <Text style={{ fontFamily: FONTS.bold, color: "#000", paddingTop: moderateScale(20), paddingLeft: moderateScale(20) }}>Front Brake Pads</Text>
                <View style={{ padding: moderateScale(20) }}>
                   
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Image
                                    style={{ height: moderateScale(30), width: moderateScale(30), marginRight: moderateScale(5) }}
                                    source={require('../../Assets/images/time2.png')}
                                />
                                <Text style={{ fontFamily: FONTS.semibold, fontSize: moderateScale(11) }}>{singleService?.time_taken}</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Image
                                    style={{ height: moderateScale(30), width: moderateScale(30), marginRight: moderateScale(5) }}
                                    source={require('../../Assets/images/time1.png')}
                                />
                                <Text style={{ fontFamily: FONTS.semibold, fontSize: moderateScale(11) }}>{singleService?.warranty_period} Warrenty</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Image
                                    style={{ height: moderateScale(30), width: moderateScale(30), marginRight: moderateScale(5) }}
                                    source={require('../../Assets/images/time3.png')}
                                />
                                <Text style={{ fontFamily: FONTS.semibold, fontSize: moderateScale(11) }}>{singleService?.assurance_details} (Recomended)</Text>
                            </View>
                       
                </View>
                {/* -----------------------------------Front Brake Pads END----------------------------------- */}

                {/* ---------------------------------------Special Offers Start--------------------------------------- */}
                <SpecialOffers />
                {/* ---------------------------------------Special Offers END--------------------------------------- */}

                {/* ------------------------Essential Service Start------------------------------- */}
                <Essential Data={singleService?.essential_data} AnotherData={singleService?.performance_data}/>
                {/* ------------------------Essential Service END------------------------------- */}

                {/* ------------------------Additional Services Start------------------------------- */}

                <Text style={{ fontFamily: FONTS.bold, paddingTop: moderateScale(20), paddingLeft: moderateScale(20), color: "#000" }}>Additional Services</Text>

                <View style={{ ...styles.AdditionalServices_View }}>

                    {singleService?.additional_data?.map((item, index) => {
                        return (<>
                            <View style={{ flexDirection: "row", paddingTop: moderateScale(15), paddingLeft: moderateScale(10) }}>
                            <Icon name="checkcircle" type='AntDesign' color="green" />
                                <Text style={{ fontFamily: FONTS.bold, paddingLeft: moderateScale(5), fontSize: moderateScale(11) }}>{item}</Text>
                            </View>
                        </>)
                    })}
                </View>
                {/* ------------------------Additional Services END------------------------------- */}

                {/* -----------------------Steps After Booking Start------------------------------ */}

                <Accordion style={{ color: "#fff" }}
                    title='Steps After Booking'
                    titleStyle={{ fontSize: moderateScale(13), fontFamily: FONTS.semibold }}
                    containerStyle={{
                        margin: 20,
                        bottom: 10,
                        color: "#fff",
                        // size: 1,
                        backgroundColor: "#f9f6f8",
                        borderRadius: moderateScale(10)
                    }}
                    shadow={true}

                >

                    <View style={{ paddingHorizontal: moderateScale(10), marginBottom: moderateScale(20) }}>

                        {steps?.map((item, index) => {
                            return (<>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#f9f6f8" }}>
                                    <View style={{ flexDirection: "column", alignItems: "center" }}>
                                        <View style={{ ...styles.Num_icon }}>
                                            {item.icon}
                                        </View>
                                        <Image
                                            style={{ height: moderateScale(25), width: moderateScale(2) }}
                                            source={item.iconIMG}
                                        />
                                    </View>
                                    <Text numberOfLines={2} style={{ maxWidth: "80%", paddingLeft: moderateScale(6), fontFamily: FONTS.regular, paddingBottom: moderateScale(15), fontSize: moderateScale(11) }}>{item.text}</Text>
                                </View>
                            </>)
                        })}
                    </View>
                </Accordion>

                {/* -----------------------Steps After Booking END---------------------------------*/}

                {/* -----------------------------------Frequently Asked Start----------------------*/}
                <Accordion style={{ color: "#fff" }}
                    title='Frequently Asked Questions'
                    titleStyle={{ fontSize: moderateScale(13), fontFamily: FONTS.semibold }}
                    containerStyle={{
                        color: "#fff",
                        backgroundColor: "#fff",
                        paddingHorizontal: moderateScale(10)

                    }}
                    shadow={true}

                >
                    {/* <Accordion.Item/> */}
                    <FrequentlyAsked />
                </Accordion>
                {/* -----------------------------------Frequently Asked END-------------------------------------- */}
                {console.log('alladattata',singleService)}
            </ScrollView>


           
            {serviceData.some((res)=>res.service_id == singleService.service_id) ?
            <TouchableOpacity onPress={() => { 
               
                    NavigationService.navigate('Cart')
                }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#eb0000', '#e96464']} style={{ ...styles.submit_button }}>
                    <Text style={{ fontFamily: FONTS.bold, fontSize: moderateScale(14), color: "#fff" }}>₹ {singleService?.service_price}</Text>
                    <Text style={{ fontFamily: FONTS.bold, fontSize: moderateScale(13), color: "#fff" }}>VIEW CART</Text>
                </LinearGradient>
            </TouchableOpacity>
    :
            <TouchableOpacity onPress={() => { 
                if(singleService?.customize_status){

                    setModalVisible(true) 
                }
                else{
                    
                    addToCart()

                }
                }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#eb0000', '#e96464']} style={{ ...styles.submit_button }}>
                    <Text style={{ fontFamily: FONTS.bold, fontSize: moderateScale(14), color: "#fff" }}>₹ {singleService?.service_price}</Text>
                    <Text style={{ fontFamily: FONTS.bold, fontSize: moderateScale(13), color: "#fff" }}>ADD TO CART</Text>
                </LinearGradient>
            </TouchableOpacity>
}
            <ReactNativeModal isVisible={isModalVisible}
                // backdropColor={'rgba(228, 14, 104, 1)'}
                backdropOpacity={0.7}
                style={{
                    marginBottom: 0,
                    marginHorizontal: 0,
                    justifyContent: 'flex-end',
                    margin:0
                }}
                onBackButtonPress={() => {
                    setModalVisible(false)
                   
                }}
                onBackdropPress={() => {
                    setModalVisible(false)
                    
                }}
            >
                <View style={{ height: height / 2.1, }}>
                    <BasicService Data={singleService} SubData = {SubService} func={()=>setModalVisible(false)}/>
                </View>


      
    

            </ReactNativeModal>
        </Container>
    );
};

const styles = StyleSheet.create({
    viewBox: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        width: width,
        padding: 10,
        alignItems: 'center',
        height: 150
    },
    slider: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    dotContainer: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: moderateScale(0)
    },
    imageView: {
        height: moderateScale(270),
        width: moderateScale(350),
        position: "absolute"
    },
    ClaimNow_Button: {
        borderRadius: moderateScale(5),
        width: moderateScale(80),
        height: moderateScale(30),
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: moderateScale(0),
        bottom: moderateScale(0),
        marginLeft: moderateScale(20),
        marginBottom: moderateScale(15),
        backgroundColor: "#fff"
    },
    offerTag: {
        width: moderateScale(250),
        height: moderateScale(70),
        borderWidth: moderateScale(1),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: moderateScale(10),
        borderRadius: moderateScale(10),
        borderColor: "#44bbf5",
        backgroundColor: "#effdff"
    },
    AdditionalServices_View: {
        borderWidth: moderateScale(0.2),
        // height: moderateScale(170),
        marginHorizontal: moderateScale(15),
        borderRadius: moderateScale(10),
        marginVertical: moderateScale(10),
        paddingBottom:moderateScale(10)
    },
    submit_button: {
        flexDirection: "row",
        justifyContent: "space-between",
        // borderWidth: moderateScale(1),
        height: moderateScale(50),
        width: moderateScale("100%"),
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: moderateScale(15),
        paddingHorizontal: moderateScale(10),
        borderRadius: moderateScale(5),
        marginVertical: moderateScale(10)

    },
    Num_icon: {
        // borderWidth:moderateScale(),
        borderRadius: moderateScale(20),
        backgroundColor: "#f9f4f4"


    }
});

export default ServiceSingleCardDetail;

