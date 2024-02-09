import { ActivityIndicator, Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppButton, Card, Container, Icon, RadioButton } from 'react-native-basic-elements'


import ReactNativeModal from 'react-native-modal'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import Clender from '../../Components/Calender/Clender'
import Geolocation from '@react-native-community/geolocation'
import Geocoder from 'react-native-geocoding'
import GoogleSearch from '../../Components/GoogleMap/GoogleSearch'
import { COLORS } from '../../Constants/Colors'
import SelectGoogleMap from '../../Components/GoogleMap/SelectGoogleMap'
import moment from 'moment'
import MainService from '../../Services/MainService'
import { useDispatch, useSelector } from 'react-redux'
import Toast from 'react-native-simple-toast'
import NavigationService from '../../Services/Navigation'
import { deleteCart } from '../../Redux/reducer/CartService'
const { width, height } = Dimensions.get('window');

const CardCheckout = () => {
    //model state
    const { serviceData,safety_warranty_amount } = useSelector((state) => state.CartService)
  const { userData, carData } = useSelector((state) => state.User)

    const [status,setStatus] = useState(false)
    const [isModalVisible, setModalVisible] = useState(false);
  const [modalVisible, setModalVisibleSe] = useState(false);
  const dispatch = useDispatch()
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const [date,setDate] = useState(new Date(new Date().toDateString() ))
    // slot map 
    const [Morning,setMorning] = useState([])
    const [Evening,setEvening] = useState([])
    const [Afternoon,setAfternoon] = useState([])
    const [slotId,setSlotId] = useState('')
    const [Reigoin, setReigoin] = useState({});
    const [Address, setAddress] = useState('');
    const [online, setOnline] = useState(false);
    const [cod, setcod] = useState(true);
  const [modalFVisible, setModalFVisible] = useState(false);

    var totalPrice = 0
    if(serviceData.length >0){

        totalPrice =  serviceData.reduce(
            (accumulator, currentValue) =>
              accumulator + Number(currentValue.total_service_customize_price) * Number(currentValue.quantity ?? 1),
            0,
          );

    }
    async function sendLocation() {
      Geolocation.getCurrentPosition(info => {
        setReigoin({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      });
    }

    const Order = async() => {
        setStatus(true)
        setTimeout(()=>{
            Toast.show('Service Booked Successfull')
            // NavigationService.navigate('BottomTab')
            setStatus(false)
            setModalFVisible(true)
        },1000)
    }

    const OrderService = async() => {
      let data = {
        customer_id:userData.customer_id,
        car_variant_id:carData.car_variant_id,
        time_slot_id:slotId,
        address:Address,
        latitude:Reigoin.latitude,
        longitude:Reigoin.longitude,
        payment_mode:online ? 'online' : 'cod',
        total_item_amount:totalPrice,
        safety_warranty_fees:safety_warranty_amount,
        payable_amount:Number(totalPrice) + Number(safety_warranty_amount),
        services:serviceData
      }
      console.log('OrderDatatata',data)
      setStatus(true)
      MainService.OrderService(data)
      .then((res)=>{
        console.log('OrderService',res)
        if(res.status){
          setModalFVisible(true)
          setStatus(false)
          // dispatch(deleteCart());
          Toast.show('Service Booked Successfully')

        }
        else{
          setStatus(false)
          Toast.show('Service Not Booked')
        }
      })
      .catch((err)=>err && console.log('Err',err))
    }

    useEffect(() => {
        // fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${Reigoin.latitude},${Reigoin.longitude}&key=AIzaSyC-ki3ImgxYzo8K2OCH9yDthHWIWV1yfj4`)
        // fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=37.78825,-122.4324&key=AIzaSyC-ki3ImgxYzo8K2OCH9yDthHWIWV1yfj4`)
        setAddress('');
        Geocoder.from({
          latitude: Reigoin.latitude,
          longitude: Reigoin.longitude,
        })
          .then(a => {
            console.log('aaa', JSON.stringify(a));
            console.log('aaa', a.results[0].formatted_address);
            setAddress(a.results[0].formatted_address);
            // fetch(`${a.url}`).then(res => console.log('address', res))
          })
          // .then((response) => response.json())
          // .then((data) => console.log('ddd', data))
          .catch(e => console.log(e));
      }, [Reigoin]);
    
      async function SearchField(address) {
        // setLoderStatus(true);
        console.log('address', address);
        fetch(
          `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${address}&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyC-ki3ImgxYzo8K2OCH9yDthHWIWV1yfj4`,
        )
          .then(response => response.json())
          .then(res => {
            console.log(address, JSON.stringify(res));
            // setAllFilds(res.predictions)
            // setLoderStatus(false);
            setReigoin({
              latitude: res.candidates[0].geometry.location.lat,
              longitude: res.candidates[0].geometry.location.lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            });
          })
          .catch(e => console.log(e));
      }
    
      const GetTimeSlot = async() => {
        let data = {
            target_date:moment(date).format('YYYY-MM-DD') 
        }
        console.log('data',data)
        MainService.FetchTimeSlot(data)
        .then((res)=>{
            console.log('FetchTimeSlot',res)
            if(res && res.status){
                
                    setMorning(res.morning_data != null ? res.morning_data : [])
                
               
                    setAfternoon(res.afternoon_data != null ? res.afternoon_data : [])
                
               
                    setEvening(res.evening_data != null ? res.evening_data : [])
                
            }
        })
        .catch((err)=>err && console.log('err',err))
      }

    

      useEffect(()=>{
        GetTimeSlot()
        setSlotId('')
      },[date])
      useEffect(() => {
        Geocoder.init("AIzaSyC-ki3ImgxYzo8K2OCH9yDthHWIWV1yfj4")
        sendLocation();
    
      }, []);
    return (
        <Container style={{ ...styles.Container }}>
            <BackHeader title='Checkout' />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:20}}>
        {
            console.log('addresss religion',Address,'\n',Reigoin)
        }
                <Pressable 
                  onPress={()=>setModalVisibleSe(true)}
                style={{ ...styles.Membership_View ,borderColor:'#ffd6d6',borderWidth:1.5}}>
                    <View>
                        <Text style={{ ...styles.Membership_text, color: "red", fontSize: moderateScale(15) }}>Location for Pickup</Text>
                        <View style={{ flexDirection: "row", alignItems: "center",width:'95%' }}>
                            <Icon
                                name="map-pin"
                                type='FontAwesome5'
                                // color="red"
                                size={20}
                            />
                            <Text 
                            numberOfLines={2}
                            style={{ ...styles.Membership_text, padding:moderateScale(5),paddingLeft:10 }}>{Address}</Text>
                        </View>
                    </View>
                    <Icon
                  
                        name="right"
                        type='AntDesign'
                        color="red"
                        size={20}
                    />
                </Pressable>
                {/* -----------------------Date & Time Start-------------------------- */}
                <Text style={{ fontFamily: FONTS.semibold, color: "#000", fontSize: moderateScale(14), paddingLeft: moderateScale(20) }}>Select Your preferred Date & Time</Text>
                <View style={{ borderWidth: moderateScale(1), borderColor: "#dbdee3", borderStyle: "dashed", marginVertical: moderateScale(5) }} />
             
                    <Clender func={(val) => setDate(val)}  />

                {/* --------------Date & Time END------------------------------ */}

                {/* --------------Pick Time Slot Start------------------------------ */}
                <Text style={{ fontFamily: FONTS.semibold, color: "#000", fontSize: moderateScale(14), paddingLeft: moderateScale(20),marginTop:moderateScale(10) }}>
                    Pick Time Slot</Text>

                {/* ---------------------Early Morning  Start----------------------- */}
                {Morning.length>0 ?
                <View>
                    <View style={{ ...styles.dot_view }} />
                    <View style={{ ...styles.sun_icon_View }}>
                        <Image
                            style={{ height: moderateScale(20), width: "10%" }}
                            source={require('../../Assets/images/sunicon2.png')}
                        />
                        <Text style={{ fontFamily: FONTS.semibold, color: "#000", fontSize: moderateScale(14) }}>Early Morning Slots</Text>
                    </View>
                    <View style={{ ...styles.slot_view }}>
                        {Morning?.map((item, index) => {
                            return (
                                <Pressable 
                                onPress={()=>setSlotId(item.time_slot_id)}
                                style={{ ...styles.slot,
                                borderColor: slotId == item.time_slot_id ? COLORS.primaryThemeColor : 'grey' ,
                                borderWidth:slotId == item.time_slot_id ? 1 :0.2
                                }}>
                                    <Text style={{ fontFamily: FONTS.semibold, fontSize: moderateScale(13) }}>{item.start_time}-{item.end_time}</Text>
                                </Pressable>
                            )
                        })}
                    </View>

                </View>
                :null
                }
                {/* ---------------------Early Morning  END----------------------- */}

                {/* --------------Pick Time Slot END------------------------------ */}

                {/* ---------------------Afternoon Slot Start----------------------- */}
                {Afternoon.length>0 ?
                <View>
                    <View style={{ ...styles.dot_view }} />

                    <View style={{ ...styles.sun_icon_View }}>
                        <Image
                            style={{ height: moderateScale(20), width: "10%" }}
                            source={require('../../Assets/images/sunicon3.png')}
                        />
                        <Text style={{ fontFamily: FONTS.semibold, color: "#000", fontSize: moderateScale(14) }}>Afternoon Slot</Text>
                    </View>

                    <View style={{ ...styles.slot_view }}>
                        {Afternoon?.map((item, index) => {
                            return (
                                <Pressable 
                                onPress={()=>setSlotId(item.time_slot_id)}
                                style={{ ...styles.slot,
                                    borderColor: slotId == item.time_slot_id ? COLORS.primaryThemeColor : 'grey' ,
                                    borderWidth:slotId == item.time_slot_id ? 1 :0.2
                                    }}
                                >
                                <Text style={{ fontFamily: FONTS.semibold, fontSize: moderateScale(13) }}>{item.start_time}-{item.end_time}</Text>

                                </Pressable>
                            )
                        })}
                    </View>

                </View>
                :null
}
                {/* ---------------------Afternoon Slot END----------------------- */}


                {/* ---------------------Evening Slots Start----------------------- */}
    {Evening.length>0 ?
                <View>
                    <View style={{ ...styles.dot_view }} />

                    <View style={{ ...styles.sun_icon_View }}>
                        <Image
                            style={{ height: moderateScale(20), width: "10%" }}
                            source={require('../../Assets/images/sunicon1.png')}
                        />
                        <Text style={{ fontFamily: FONTS.semibold, color: "#000", fontSize: moderateScale(14) }}>Evening Slots</Text>
                    </View>
                    <View style={{ ...styles.slot_view }}>
                        {Evening?.map((item, index) => {
                            return (
                                <Pressable 
                                onPress={()=>setSlotId(item.time_slot_id)}
                                style={{ ...styles.slot,
                                    borderColor: slotId == item.time_slot_id ? COLORS.primaryThemeColor : 'grey' ,
                                    borderWidth:slotId == item.time_slot_id ? 1 :0.2
                                    }}
                                >
                                    <Text style={{ fontFamily: FONTS.semibold, fontSize: moderateScale(13) }}>{item.start_time}-{item.end_time}</Text>

                                </Pressable>
                            )
                        })}
                    </View>
                    <View style={{ ...styles.dot_view }} />

                </View>
                :null
}
                {/* ---------------------Evening Slots END----------------------- */}

                {/* --------------Day View END------------------------------------- */}

              <View style={{margin: 5,borderWidth:0.5,borderColor:'grey',width:'90%',alignSelf:'center',borderRadius:5}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '90%',
                    alignSelf: 'center',
                  }}>
                  <RadioButton
                    selected={online}
                    onChange={val => {
                      setOnline(true);
                      setcod(false);
                    }}
                    size={18}
                    activeColor={COLORS.primaryThemeColor}
                  />

                  <Text
                    style={{
                      fontFamily: FONTS.medium,
                      fontSize: 13,
                      color: '#000',
                      marginVertical: 10,
                      marginLeft: 10,
                    }}>
                    Online
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '90%',
                    alignSelf: 'center',
                  }}>
                  <RadioButton
                    selected={cod}
                    onChange={val => {
                      setOnline(false);
                      setcod(true);
                    }}
                    size={18}
                    activeColor={COLORS.primaryThemeColor}
                  />

                  <Text
                    style={{
                      fontFamily: FONTS.medium,
                      fontSize: 13,
                      color: '#000',
                      marginVertical: 10,
                      marginLeft: 10,
                    }}>
                    Cash on Delivery
                  </Text>
                </View>
              </View>
             
            </ScrollView>

            <View style={{ ...styles.button_View }}>
                <View>
                    <Text style={{ ...styles.button_text, fontSize: moderateScale(15) }}>₹ {totalPrice+ Number(99)}</Text>
                    <Text style={{ ...styles.button_text, fontSize: moderateScale(11), color: "#1e8fbe" }}
                        onPress={() => { setModalVisible(true) }}
                    >View Detailed Bill</Text>
                </View>
                <Pressable 
                // disabled={date && slotId ? false : true}
                onPress={()=>{
                    if(date && slotId){
                      OrderService()
                    }
                    else{
                        Toast.show('Please Choose Slot')
                    }
                }}
                style={{ ...styles.button, backgroundColor:date && slotId ? 'red' : COLORS.primaryThemeColor }}>
                    <Text style={{ ...styles.button_text, color:date && slotId ? "#fff" : '#EBEBEB' }}>PLACE ORDER</Text>
                    {status ?
                    <ActivityIndicator color='#fff'/> :
                    <Icon
                        name="arrowright"
                        type='AntDesign'
                        color={date && slotId ?"#fff" : '#EBEBEB'}
                        size={20}
                    />
}
                </Pressable>
            </View>

            <ReactNativeModal isVisible={isModalVisible}
                // backdropColor={'rgba(228, 14, 104, 1)'}
                backdropOpacity={0.4}
                style={{
                  
                    padding:0,
                    margin:0
                }}
                onBackButtonPress={() => setModalVisible(false)}
                onBackdropPress={() => setModalVisible(false)}
            >
                <View style={{ height: height , alignItems: "center", justifyContent: "center" }}>
                    <View style={{ ...styles.model_View }}>
                        {serviceData.map((ress,indd)=>{
                            return(
                        <>
                        <View style={{ ...styles.model_text_View }}>
                            <Text style={{ ...styles.model_text, color: "#000" }}>{ress.service_name}</Text>
                            <Text style={{ ...styles.model_text }}>₹ {ress.total_service_customize_price} {ress.quantity != null ? `× (${ress.quantity})` : null}</Text>
                        </View>
                        <View style={{ ...styles.Single_Line }} />
                        </>
                            )
                        })}

                        <View style={{ ...styles.Bill_View }}>
                            <Text style={{ fontFamily: FONTS.medium, color: "#000", fontSize: moderateScale(15) }}>Bill Details</Text>
                            <View style={{ ...styles.Bill_text_View }}>
                                <Text style={{ ...styles.Bill_text }}>Item total</Text>
                                <Text style={{ ...styles.Bill_text }}>₹ {totalPrice}</Text>
                            </View>
                            <View style={{ ...styles.Bill_text_View }}>
                                <Text style={{ ...styles.Bill_text }}>safety & Warranty Fees
                                    <Icon
                                        name="infocirlceo"
                                        type='AntDesign'
                                        color="#000"
                                        size={12}
                                    />
                                </Text>
                                <Text style={{ ...styles.Bill_text }}>₹ {safety_warranty_amount}</Text>
                            </View>

                            <View style={{ ...styles.Bill_text_View, paddingTop: moderateScale(10) }}>
                                <Text style={{ fontFamily: FONTS.semibold, color: "#000", fontSize: moderateScale(15) }}>You Pay</Text>
                                <Text style={{ fontFamily: FONTS.semibold, color: "#000", fontSize: moderateScale(15) }}>₹ {totalPrice + Number(safety_warranty_amount)}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ReactNativeModal>
           
          <ReactNativeModal
            isVisible={modalVisible}
           
            style={{
             margin:0,
             padding:0
              // justifyContent: 'flex-end'
            }}
            onBackButtonPress={() => setModalVisibleSe(false)}
            onBackdropPress={() => setModalVisibleSe(false)}
            >
            <>
              <SelectGoogleMap
              changeAddress={a => setAddress(a)}
              changeLongLat={a => setReigoin(a)}

              onClose={() => setModalVisibleSe(false)}
              />
            </>
          </ReactNativeModal>
          <ReactNativeModal
       isVisible={modalFVisible}
           
       style={{
        margin:0,
        padding:0
         // justifyContent: 'flex-end'
       }}
      //  onBackButtonPress={() => setModalFVisible(false)}
       onBackdropPress={() => setModalFVisible(false)}
        >
        <View
          style={{
            flex: 1,
            backgroundColor: '#8b8c8b',
            opacity: 0.9,
          }}>
          <Card style={styles.modalcard}>
            <Image
              source={require('../../Assets/images/SuccessIcon.png')}
              style={{
                height: 90,
                width: 90,
                resizeMode: 'contain',
                alignSelf: 'center',
                marginTop: 20,
              }}
            />
            <Text
              style={{
                color: COLORS.primaryThemeColor,
                fontFamily: FONTS.bold,
                fontSize: 25,
                textAlign: 'center',
                marginTop: 10,
              }}>
              Successful
            </Text>

            <Text
              style={{
                color: COLORS.primaryTextColor,
                fontFamily: FONTS.medium,
                fontSize: 14,
                textAlign: 'center',
                marginTop: 10,
              }}>
              Service has been placed successfully
            </Text>

            <AppButton
              //shadow={true}
              title="Continue"
              textStyle={{
                color: '#fff',
                fontFamily: FONTS.medium,
                fontSize: 14,
              }}
              style={{
                backgroundColor: COLORS.primaryThemeColor,
                marginTop: 20,
                width: '80%',
                height: 35,
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
              }}
              onPress={() =>{
                dispatch(deleteCart());
                NavigationService.navigate('BottomTab')
              } 
            }
            />
          </Card>
        </View>
      </ReactNativeModal>
        </Container>
    )
}

export default CardCheckout

const styles = StyleSheet.create({
    Container: {

    },
    Membership_View: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: moderateScale(10),
        marginHorizontal: moderateScale(15),
        height: moderateScale(65),
        alignItems: "center",
        borderRadius: moderateScale(5),
        backgroundColor: '#ffefea',
        marginVertical: moderateScale(15)
    },
    Membership_text: {
        color: "#000",
        fontFamily: FONTS.medium,
        fontSize: moderateScale(11)
    },
    week_Days: {
        borderWidth: moderateScale(0.2),
        width: moderateScale(60),
        height: moderateScale(60),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: moderateScale(5),
        marginLeft: moderateScale(10)
    },
    sun_icon_View: {
        flexDirection: "row",
        paddingLeft: moderateScale(15)
    },
    slot_view: {
        flexDirection: "row",
        paddingHorizontal: moderateScale(5),
        paddingVertical: moderateScale(15),
        flexWrap: "wrap",
        // paddingTop:moderateScale(5)
    },
    slot: {
        borderWidth: moderateScale(0.2),
        width: "45%",
        height: moderateScale(40),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: moderateScale(5),
        marginLeft: moderateScale(10),
        marginBottom: moderateScale(10)
    },
    dot_view: {
        borderWidth: moderateScale(0.5),
        borderColor: "#dbdee3",
        borderStyle: "dashed",
        marginVertical: moderateScale(10)

    },
    button_View: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(10),
        elevation:3,
        backgroundColor:'#fff'

    },
    button_text: {
        fontFamily: FONTS.bold,
        color: "#000"
    },
    button: {

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // borderWidth: moderateScale(1),
        height: moderateScale(40),
        width: "41%",
        paddingHorizontal: moderateScale(7),
        borderRadius: moderateScale(5),
        backgroundColor: COLORS.primaryThemeColor
    },
    model_View: {
        // height: moderateScale(180),
        width: moderateScale(260),
        backgroundColor: "#fff",
        borderRadius: moderateScale(10),
        padding:5
    },
    model_text_View: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(15)
    },
    model_text: {
        fontFamily: FONTS.bold
    },
    Single_Line: {
        borderWidth: moderateScale(0.3),
        marginHorizontal: moderateScale(10),
        borderColor: "#c9c9cb"

    },
    Bill_View: {
        marginHorizontal: moderateScale(10),
        marginVertical: moderateScale(10),
    },
    Bill_text_View: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    Bill_text: {
        fontFamily: FONTS.medium,
        paddingTop: moderateScale(5),
        fontSize: moderateScale(11)

    },
    modalcard: {
        width: '70%',
        height: moderateScale(290),
        alignSelf: 'center',
        marginTop: '50%',
      },
})