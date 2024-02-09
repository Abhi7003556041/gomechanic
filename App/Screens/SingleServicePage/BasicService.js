import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Container } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import BasicServiceComp from '../../Components/BasicServiceComponent/BasicServiceComp'
import BoostYourService from '../../Components/BasicServiceComponent/BoostYourService'
import LinearGradient from 'react-native-linear-gradient'
import NavigationService from '../../Services/Navigation'
import { useDispatch, useSelector } from 'react-redux'
import { addCartService } from '../../Redux/reducer/CartService'
import MainService from '../../Services/MainService'
import Toast from 'react-native-simple-toast'

const BasicService = ({Data,SubData,func}) => {
    const { userData, carData } = useSelector((state) => state.User)
    const [customizeServiceId,setCustomizeServiceId] = useState(SubData[0]?.service_customize_id)
    const [customizeServicePrice,setCustomizeServicePrice] = useState(SubData?.[0]?.service_customize_price)

    const dispatch = useDispatch()
    const addToCart = async() => {
        let data = {
            service_id:Data?.service_id,
            service_customize_id:customizeServiceId,
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
            else{
                Toast.show('Already Added to Cart',Toast.SHORT)
            }
        })
        .catch((err)=>err && console.log('err',err))
    }
    return (
        <Container style={{ ...styles.MainContainerStyle }}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ ...styles.HeaderStyle }}>
                    <Text style={{ fontFamily: FONTS.bold, color: "#000", fontSize: moderateScale(15) }}>{Data?.service_name}</Text>
                    <Text style={{ fontFamily: FONTS.regular }}>Select Engine Oil</Text>
                </View>
                {/* ----------------Basic Service Start---------------- */}
                {SubData.length ? 
                <BasicServiceComp SubService={SubData} func={(val,price)=>{
                    setCustomizeServiceId(val)
                    setCustomizeServicePrice(price)
                }}/>
                :null
            }
            
                {/* ----------------Basic Service END---------------- */}
                {/* ---------------------------------Boost Your Service Start-------------------------------------- */}
                {/* <View style={{ ...styles.ServiceViewStyle }}>
                    <Text style={{ fontFamily: FONTS.bold, color: "#000", fontSize: moderateScale(15) }}>Boost Your Service</Text>
                    <Text style={{ fontFamily: FONTS.regular }}>For better performance in Car & mileage</Text>
                </View>
                <BoostYourService /> */}
                {/* ---------------------------------Boost Your Service END-------------------------------------- */}
            </ScrollView>

            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#eb0000', '#e96464']} style={{ ...styles.submit_button }}>
                <Text style={{ fontFamily: FONTS.bold, fontSize: moderateScale(14), color: "#fff" }}>₹ {Number(Data?.service_price) + Number(customizeServicePrice)}</Text>
                <Text 
                onPress={()=>{
                    func()
                    addToCart()
                }}
                style={{ fontFamily: FONTS.bold, fontSize: moderateScale(13), color: "#fff" }}>ADD TO CART</Text>
            </LinearGradient>



        </Container>
    )
}

export default BasicService

const styles = StyleSheet.create({
    MainContainerStyle: {
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        // flex:1

    },
    HeaderStyle: {
        alignItems: "center",
        paddingTop: moderateScale(15),
    },
    ServiceViewStyle: {
        alignItems: "center",
        paddingVertical: moderateScale(10),

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

})