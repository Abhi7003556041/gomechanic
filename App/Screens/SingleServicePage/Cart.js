import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { Card, Container, Icon } from 'react-native-basic-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'


import CartSliderCard from '../../Components/CartComponents/CartSliderCard'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
import { useDispatch, useSelector } from 'react-redux'
import { COLORS } from '../../Constants/Colors'
import { deleteService, initCartService, setSafety_warranty_amount, updateServiceCount } from '../../Redux/reducer/CartService'
import MainService from '../../Services/MainService'
import Toast from 'react-native-simple-toast'

const Cart = () => {
    const { userData, carData } = useSelector((state) => state.User)
    const { serviceData, safety_warranty_amount } = useSelector((state) => state.CartService)
    const dispatch = useDispatch()
    var totalPrice = 0
    if(serviceData.length >0){

        totalPrice =  serviceData.reduce(
            (accumulator, currentValue) =>
              accumulator + Number(currentValue.total_service_customize_price) * Number(currentValue.quantity ?? 1),
            0,
          );

    }
    const GetCart = async() => {
        let data = {
          customer_id:userData.customer_id,
          car_variant_id:carData.car_variant_id
        }
        MainService.FetchCart(data)
        .then((res)=>{
          console.log('TotalCart',res)
          if(res && res.status){
            dispatch(initCartService(res.data))
            dispatch(setSafety_warranty_amount(res.safety_warranty_amount))

          }
          else{
            dispatch(initCartService([]))
    
          }
        })
        .catch((err)=>err && console.log('err',err))
      }

    const deleteCart = async(data) => {
        console.log('data',data)
        MainService.deleteCart(data)
        .then((res)=>{
            console.log('deleteCart',res)
            if(res.status){
                Toast.show('Service Deleted Suucessfully',Toast.SHORT)
                
            }
        })
        .catch((err)=>err && console.log('err',err))
    }

    const updateCart = async(data) => {
        console.log('data',data)
        MainService.updateCart(data)
        .then((res)=>{
            console.log('updatetete',res)
            if(res.status){
                console.log('updatetete',res)
            }
        })
        .catch((err)=>err && console.log('err',err))
    }
    
    useEffect(()=>{
        GetCart()
        
    },[])

    useEffect(()=>{
        if(serviceData.length == 0){
            NavigationService.back()
        } 
    },[serviceData])

    return (
        <Container style={{ ...styles.Container }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ ...styles.header_View }}>

                    <View style={{ flexDirection: "row" }}>
                        <Icon
                            name="down"
                            type='AntDesign'
                        // color="#c3c1c6"
                        />
                        <Text style={{ fontFamily: FONTS.bold, color: "#000", paddingLeft: moderateScale(20) }}>My Cart</Text>
                    </View>
                    <View style={{ height: moderateScale(50), width: "25%", alignItems: "center" }}>
                        <Image
                            style={{ ...styles.headerCar_Img }}
                            source={{ uri: carData?.car_image }}

                        />
                        <View style={{ backgroundColor: "#000", width: "95%", borderRadius: moderateScale(2), paddingVertical: 2 }}>
                            <Text
                                numberOfLines={1}
                                style={{ color: "#fff", fontFamily: FONTS.regular, fontSize: moderateScale(10), textAlign: "center" }}> {carData?.car_name}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ borderWidth: moderateScale(0.3), borderColor: "#abadab", marginVertical: moderateScale(5) }} />
                <View style={{ ...styles.Membership_View }}>
                    <View>
                        <Text style={{ ...styles.Membership_text }}>You can Save ₹149</Text>
                        <Text style={{ ...styles.Membership_text }}>Using Coupon Code</Text>
                    </View>
                    <Image
                        style={{ height: moderateScale(35), width: moderateScale(35) }}
                        source={require('../../Assets/images/cartmenuicons5.png')}
                    />
                </View>
                {console.log('serviceData',serviceData)}
                {/* ---------------------------------------------------------------------------- */}
                {serviceData.map((item,index) => {
                    return (
                        <View style={{ ...styles.item_View1 }} key={index}>
                            <View style={{ flexDirection: "row" }}>
                                <Image
                                    style={{ height: moderateScale(50), width: moderateScale(50), borderRadius: moderateScale(5) }}
                                    source={{uri:item?.image}}
                                    resizeMode='contain'
                                />
                                <View style={{ paddingLeft: moderateScale(10) }}>
                                    <Text style={{ fontFamily: FONTS.bold, color: "#000" }}>{item?.service_name}</Text>
                                    {item?.option_name!= null ?
                                    <Text style={{ fontFamily: FONTS.regular,  }}>{item?.option_name ?? null}</Text>
                                    :null
                                    }
                                    <View style={{ flexDirection: "row", paddingTop: moderateScale(5) }}>
                                        <Text style={{ fontFamily: FONTS.regular, textDecorationLine: "line-through" }}>₹7,899</Text>
                                        <Text style={{ fontFamily: FONTS.bold, color: "#000", paddingLeft: moderateScale(5) }}>₹{item?.total_service_customize_price}</Text>
                                    </View>

                                </View>

                            </View>
                        {item?.quantity != null ?
                            <View style={{...styles.add_button }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems:'center',
                        justifyContent:'center'
                        // marginTop: 20

                    }}>
                        <Pressable
                        onPress={() => {
                            if (serviceData.filter((re)=> re.cart_id == item.cart_id)[0].quantity > 0) {
                              if (serviceData.filter((re)=> re.cart_id == item.cart_id)[0].quantity == 1) {
                                deleteCart({
                                  cart_id: item.cart_id
                                })
                                dispatch(deleteService(item.cart_id))
                               
                              }
                              else {
                                updateCart({
                                    cart_id: item.cart_id,
                                    quantity:Number(serviceData.filter((res) => res.cart_id == item.cart_id)[0].quantity) - 1
                                })
                                dispatch(updateServiceCount({ id: item.cart_id, quantity: (Number(serviceData.filter((res) => res.cart_id == item.cart_id)[0].quantity) - 1)}))
                              }
                             
                            }
                            else{

                            }
                          }
                          }

                        style={styles.plus}>
                            <Icon
                                name='minus'
                                type='AntDesign'
                                size={14}
                                color={COLORS.primaryThemeColor}
                            />
                        </Pressable>
                        <Text style={{
                            fontFamily: FONTS.semibold,
                            color: COLORS.primaryThemeColor,
                            fontSize: 13,
                            marginRight: 10,
                            alignSelf:'center'
                        }}>
                              {/* {serviceData.filter((re)=> re.cart_id == item.cart_id)[0].count} */}{item?.quantity}
                        </Text>
                        <Pressable 
                        onPress={() => {
                            updateCart({
                              cart_id: item.cart_id,
                              quantity:Number(serviceData.filter((res) => res.cart_id == item.cart_id)[0].quantity) + 1
                            })
                            dispatch(updateServiceCount({ id: item.cart_id, quantity: (Number(serviceData.filter((res) => res.cart_id == item.cart_id)[0].quantity) + 1)}))

                          }}
                        style={styles.mins}>
                            <Icon
                                name='plus'
                                type='AntDesign'
                                size={14}
                                color={COLORS.primaryThemeColor}
                            />
                        </Pressable>
                    </View>
                </View>
                :
                            <Pressable onPress={()=>{
                                deleteCart({
                                    cart_id: item.cart_id
                                  })
                                dispatch(deleteService(item.cart_id))
                               
                            }}>

                            <Icon
                                name="closecircle"
                                type='AntDesign'
                                color="#c3c1c6"
                                size={20}
                            />
                            </Pressable>
                }

                        </View>
                    )
                })}

                <View style={{ ...styles.item_View3 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon
                            name="mic"
                            type='Feather'
                            color="#c3c1c6"
                            size={22}
                        />
                        <Text style={{ fontFamily: FONTS.medium, paddingLeft: moderateScale(10), fontSize: moderateScale(13) }}>Add Voice Instructions</Text>
                    </View>
                    <Icon
                        name="right"
                        type='AntDesign'
                        color="#c3c1c6"
                    />

                </View>
                {/* ---------------------------------------------------------------------------- */}



                {/* -----------------Cupone Tab Start-------------------------------------- */}

                <View style={{ flexDirection: "row", marginHorizontal: moderateScale(20), marginTop: moderateScale(10), justifyContent: 'center', alignItems: 'center' }}>

                    <Image
                        style={{ height: moderateScale(67), width: "5%" }}
                        source={require('../../Assets/images/cartmenuicons4.png')}
                    />
                    <View style={{ ...styles.CuponeTabView3 }}>


                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image
                                style={{ height: moderateScale(40), width: moderateScale(40) }}
                                source={require('../../Assets/images/cartmenuicons3.png')}
                            />
                            <Text style={{ fontFamily: FONTS.medium, paddingLeft: moderateScale(5) }}>Apply Coupon | A1App Money</Text>
                        </View>
                        <Icon
                            name="right"
                            type='AntDesign'
                            color="#c3c1c6"
                        />

                    </View>
                </View>
                {/* -----------------Cupone Tab END-------------------------------------- */}

                <Card style={{ ...styles.Bill_View }}>
                    <Text style={{ fontFamily: FONTS.medium, color: "#000", fontSize: moderateScale(15) }}>Bill Details</Text>
                    <View style={{ ...styles.Bill_text_View }}>
                        <Text style={{ ...styles.Bill_text }}>Item total</Text>
                        <Text style={{ ...styles.Bill_text }}>₹ {totalPrice}</Text>
                    </View>
                    <View style={{ ...styles.Bill_text_View }}>
                        <Text style={{ ...styles.Bill_text }}>safety & Warranty Fees  <Icon
                            name="infocirlceo"
                            type='AntDesign'
                            color="#000"
                            size={15}
                        /></Text>
                        <Text style={{ ...styles.Bill_text }}>₹ {Number(safety_warranty_amount)}</Text>
                    </View>

                    <View style={{ ...styles.Bill_text_View, paddingTop: moderateScale(10) }}>
                        <Text style={{ fontFamily: FONTS.semibold, color: "#000", fontSize: moderateScale(15) }}>You Pay</Text>
                        <Text style={{ fontFamily: FONTS.semibold, color: "#000", fontSize: moderateScale(15) }}>₹ {totalPrice + Number(safety_warranty_amount)}</Text>
                    </View>
                </Card>


                <Image
                    style={{ height: moderateScale(200), width: "100%", borderRadius: moderateScale(5) }}
                    source={require('../../Assets/images/cartbanner.jpg')}
                />
                {/* <View style={{ ...styles.Freq_View }}>
                    <Image
                        style={{ height: moderateScale(40), width: "10%", borderRadius: moderateScale(5) }}
                        source={require('../../Assets/images/cartmenuicons6.png')}
                    />
                    <View style={{ paddingLeft: moderateScale(10) }}>
                        <Text style={{ fontFamily: FONTS.bold, color: "#000" }}>Frequently Added Together</Text>
                        <Text style={{ fontFamily: FONTS.regular }}>Add more Products for Extra Discounts</Text>
                    </View>
                </View> */}

                {/* ----------------------Slider Start------------------------------ */}
                {/* <CartSliderCard /> */}
                {/* ----------------------Slider END------------------------------ */}

            </ScrollView>
            {console.log('totalPrice',totalPrice)}
            <TouchableOpacity
                onPress={() => NavigationService.navigate("CardCheckout")}
            >


                <View style={{ ...styles.checkout_button_View }}>
                    <View>
                        <Text style={{ fontFamily: FONTS.medium, color: "#000" }}>Cart Value</Text>
                        <Text style={{ fontFamily: FONTS.medium, fontSize: moderateScale(15) }}>₹ {totalPrice+ Number(safety_warranty_amount)}</Text>
                    </View>
                    <View style={{ ...styles.checkout_button }}>
                        <Text style={{ fontFamily: FONTS.semibold, color: "#fff" }}>CHECKOUT</Text>
                        <Icon
                            name="arrowright"
                            type='AntDesign'
                            color="#fff"
                            size={25}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        </Container>
    )
}

export default Cart

const styles = StyleSheet.create({
    Container: {
        // paddingHorizontal: moderateScale(10)
    },
    header_View: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(10),
        alignItems: "center"
    },
    headerCar_Img: {
        width: '80%',
        height: moderateScale(32),
    },
    Membership_View: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(10),
        // borderWidth: moderateScale(1),
        marginHorizontal: moderateScale(20),
        height: moderateScale(60),
        alignItems: "center",
        borderRadius: moderateScale(5),
        backgroundColor: "#f6f6e2",
        marginVertical: moderateScale(10)
    },
    Membership_text: {
        color: "green",
        fontFamily: FONTS.semibold
    },
    item_View1: {
        borderWidth: moderateScale(0.3),
        marginHorizontal: moderateScale(20),
        height: moderateScale(65),
        alignItems: "center",
        borderColor: "#ababa7",
        borderTopLeftRadius: moderateScale(10),
        borderTopRightRadius: moderateScale(10),
        // alignItems:"center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: moderateScale(10)
    },
    item_View2: {
        borderWidth: moderateScale(0.3),
        marginHorizontal: moderateScale(20),
        height: moderateScale(65),
        alignItems: "center",
        borderColor: "#ababa7",
        // alignItems:"center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: moderateScale(10)
    },
    item_View3: {
        borderWidth: moderateScale(0.3),
        marginHorizontal: moderateScale(20),
        height: moderateScale(50),
        alignItems: "center",
        borderColor: "#ababa7",
        borderBottomLeftRadius: moderateScale(10),
        borderBottomRightRadius: moderateScale(10),
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: moderateScale(10)
    },
    add_button: {
        borderWidth: moderateScale(1),
        height: moderateScale(25),
        width: "22%",
        borderRadius: moderateScale(5),
        alignItems: "center",
        justifyContent: "center",
        borderColor: "red"

    },
    MemberShipTab_main_view_style: {
        height: moderateScale(75),
        borderWidth: moderateScale(1),
        marginVertical: moderateScale(10),
        backgroundColor: '#000',
    },
    MemberShipTab_button_view_style: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    MemberShipTab_button: {
        borderWidth: moderateScale(1),
        margin: moderateScale(5),
        backgroundColor: 'red',
        width: moderateScale(50),
        alignItems: 'center',
        borderRadius: moderateScale(5),
    },
    CuponeTabView3: {
        borderWidth: moderateScale(0.2),
        height: moderateScale(66),
        alignItems: "center",
        borderColor: "#ababa7",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: moderateScale(10),
        width: "95%",
        alignItems: "center",
    },
    Bill_View: {
        borderWidth: moderateScale(0.5),
        marginHorizontal: moderateScale(20),
        height: moderateScale(125),
        borderColor: "#ababa7",
        marginVertical: moderateScale(20),
        width: "90%",

    },
    Bill_text_View: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    Bill_text: {
        fontFamily: FONTS.medium,
        paddingTop: moderateScale(5)

    },
    Freq_View: {

        flexDirection: "row",
        height: moderateScale(50),
        marginVertical: moderateScale(20),
        paddingHorizontal: moderateScale(20)
    },
    checkout_button: {
        borderWidth: moderateScale(1),
        borderColor: "red",
        backgroundColor: COLORS.primaryThemeColor,
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(10),
        borderRadius: moderateScale(5)
    },
    checkout_button_View: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(10),
        // height
    },
    plus: {
        // borderWidth: 1,
        height: 20,
        width: 20,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
      },
      mins: {
        // backgroundColor: "#323142",
        height: 20,
        width: 20,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    
      }

})