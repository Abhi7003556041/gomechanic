import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
  AppTextInput,
  Container,
  Icon,
  useTheme,
} from 'react-native-basic-elements';
import Swiper from 'react-native-swiper';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import TrendingServicesCard from '../../Components/TrendingServices/TrendingServicesCard';
import CuratedCustomCard from '../../Components/HompageComponents/CuratedCustomCard';
import DesignerServiceCard from '../../Components/HompageComponents/DesignerServiceCard';
import GoMechanicGuarantee from '../../Components/HompageComponents/GoMechanicGuarantee';
import EssentialServices from '../../Components/HompageComponents/EssentialServices';
import BlogPosts from '../../Components/HompageComponents/BlogPosts';
import OriginalSpareParts from '../../Components/HompageComponents/OriginalSpareParts';
import LinearGradient from 'react-native-linear-gradient';
import NavigationService from '../../Services/Navigation';
import ServiceMenuButtons from '../../Components/HompageComponents/ServiceMenuButtons';
import ReactNativeModal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import GoogleSearch from '../../Components/GoogleMap/GoogleSearch';
import MainService from '../../Services/MainService';
import { initCartService, setSafety_warranty_amount } from '../../Redux/reducer/CartService';
import GoogleMap from '../../Components/GoogleMap/GoogleMap';
import SelectGoogleMap from '../../Components/GoogleMap/SelectGoogleMap';

const { height, width } = Dimensions.get('screen');
const HomePage = () => {
  const colors = useTheme();
  //map
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalVisible, setModalVisibleSe] = useState(false);
  const dispatch = useDispatch()
  const { userData, carData } = useSelector((state) => state.User)

  const [Reigoin, setReigoin] = useState({});
  const [Address, setAddress] = useState('');
  const [ShowHeader, setShowHeader] = useState(true);

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

  useEffect(() => {
    // fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${Reigoin.latitude},${Reigoin.longitude}&key=AIzaSyC-ki3ImgxYzo8K2OCH9yDthHWIWV1yfj4`)
    // fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=37.78825,-122.4324&key=AIzaSyC-ki3ImgxYzo8K2OCH9yDthHWIWV1yfj4`)
    setAddress('');
    Geocoder.from({
      latitude: Reigoin.latitude,
      longitude: Reigoin.longitude,
    })
      .then(a => {
        // console.log('aaa', JSON.stringify(a));
        // console.log('aaa', a.results[0].formatted_address);
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

  const GetDet = async() => {
    // let data = {
    //   customer_id:userData.customer_id,
    //   car_variant_id:carData.car_variant_id
    // }
    MainService.FetchDet()
    .then((res)=>{
      console.log('TotalCart',res)
      
    })
    .catch((err)=>err && console.log('err',err))
  }
  const translateY = useRef( new Animated.Value(0)).current
  const heigth = useRef( new Animated.Value(0)).current


  const scrollEvent = (event) => {
    let scrollY = event.nativeEvent.contentOffset.y
    scrollY > 10 ? setShowHeader(false) : setShowHeader(true)
    console.log('scrollY',scrollY)
  }

  useEffect(()=>{
    Animated.timing(translateY,
      {
        toValue:ShowHeader ? 0 : -70,
        duration:300,
        useNativeDriver: false
      }).start()

      Animated.timing(heigth, {
        toValue:ShowHeader ? 70 :0,
        duration: 300,
       
        useNativeDriver: false  // <-- neccessary
      }).start()
  },[ShowHeader])

  useEffect(() => {
    Geocoder.init("AIzaSyC-ki3ImgxYzo8K2OCH9yDthHWIWV1yfj4")
    sendLocation();
    GetDet()
  }, []);
  return (
    <Container>
      <StatusBar
        backgroundColor={colors.pageBackgroundColor}
        barStyle="dark-content"
      />
      {
        console.log('userDatatta', Address.split(',').at(-3))
      }
      {/* <View style={{ ...styles.carousel_style }} /> */}
   
      <Animated.View style={{ paddingHorizontal: moderateScale(10),marginTop:moderateScale(5),
        transform:[
          {translateY:translateY }
        ],
        height:heigth
        
      }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{
            width:'80%'
          }}>
            <Pressable 
            onPress={()=>setModalVisibleSe(true)}
            style={{ flexDirection: 'row' }}>
              <Icon name="location-pin" type="Entypo" />
              <Text style={{ fontFamily: FONTS.semibold, color: '#000' }}>
                {Address.split(',').at(-3)}
              </Text>
            </Pressable>
            <Text 
            numberOfLines={2}
            style={{ fontFamily: FONTS.regular, margin: moderateScale(5),fontSize:12 }}>
              {Address}
            </Text>
          </View>
          {/* <View style={{ ...styles.carButton_View_Style }}>
            <Text
              onPress={() => setModalVisible(true)}
              style={{ fontFamily: FONTS.regular, fontSize: moderateScale(11) }}>
              Select Car
            </Text>
          </View> */}
          <Pressable 
          onPress={() => setModalVisible(true)}
          style={{  paddingRight: moderateScale(10) ,alignItems:'center'}}>
            <Image
              style={{ ...styles.carImage }}
              source={{uri:carData?.car_image}}
            />
            <View style={{
               ...styles.carButton_View_Style
            }}>

            <Text 
            numberOfLines={1}
            style={{ fontFamily: FONTS.semibold, color: '#fff',fontSize:9,width:'92%' }}>
               {carData?.car_name}
              </Text>
            </View>
          </Pressable>
        </View>

      </Animated.View>
     
      <Animated.View style={{ ...styles.Search_View_Style, }}>
        <AppTextInput
          leftIcon={{
            name: 'search',
            type: 'Feather',
            color: 'red',
          }}
          inputContainerStyle={{
            borderRadius: moderateScale(15),
            borderColor: '#eae3f5',
            borderWidth: moderateScale(1),
            height:moderateScale(40)

          }}
          mainContainerStyle={{
            // height:moderateScale(30)
          }}
          style={{ borderRadius: moderateScale(20) }}
          placeholder="Search Services & Packages"
          inputStyle={{}}
        />
      </Animated.View>
      <Animated.ScrollView showsVerticalScrollIndicator={false}
      onScroll={scrollEvent}
      // onScrollBeginDrag={scrollEvent}
      // onScrollEndDrag={scrollEvent}
      scrollEventThrottle={10}
      >
        {/* ------------------------Banner Start----------------------------- */}
        <View
          style={{
            height: height / 4,
          }}>
          <Swiper>
            {[1, 2, 3, 4].map((item, index) => (
              <View>
                <Image
                  style={styles.imageView}
                  source={{
                    uri: 'https://img.freepik.com/premium-photo/handsome-auto-service-mechanic-uniform-is-standing-background-car-with-open-hood-smiling-looking-camera-car-repair-maintenance_189498-1880.jpg?w=1380',
                  }}
                  resizeMode="contain"
                />
                <TouchableOpacity style={{ ...styles.ClaimNow_Button }}>
                  <Text style={{ fontFamily: FONTS.semibold, color: '#000' }}>
                    Claim Now
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </Swiper>
        </View>
        {/* ------------------------Banner END----------------------------- */}

        {/* -------------------------------Service Buttons Start-----------*/}
        <ServiceMenuButtons />
        {/* -------------------------------Service Buttons END------------- */}

        {/* ----------------Mid-Banner Start-------------------------- */}
        <View>
          <Image
            style={styles.imageView}
            // style={{ width: moderateScale(60), height: moderateScale(60) }}
            source={{
              uri: 'https://e1.pxfuel.com/desktop-wallpaper/143/944/desktop-wallpaper-car-service-car-repair.jpg',
            }}
          />
          <View style={{ ...styles.ClaimNow_Button, backgroundColor: 'red' }}>
            <Text
              style={{
                fontFamily: FONTS.semibold,
                color: '#fff',
                fontSize: moderateScale(11),
              }}>
              JOIN NOW
            </Text>
          </View>
        </View>
        {/* ----------------Mid-Banner END-------------------------- */}

        {/* ----------------------------------Trending Services Start-------------------------------------- */}
        <Text
          style={{
            fontFamily: FONTS.semibold,
            color: '#000',
            padding: moderateScale(15),
            fontSize: moderateScale(15),
          }}>
          Trending Services
        </Text>
        <View>
          <TrendingServicesCard />
        </View>
        {/* ----------------------------------Trending Services END-------------------------------------- */}

        {/* ----------------2nd Mid-Banner Start-------------------------- */}
        <View
          style={{
            height: height / 4,
            marginTop: moderateScale(10),
          }}>
          <Swiper>
            {[1, 2].map((item, index) => (
              <View>
                <Image
                  style={styles.imageView}
                  source={{
                    uri: 'https://thumbs.dreamstime.com/z/automotive-parts-10323258.jpg?w=992',
                  }}
                  resizeMode="contain"
                />
                <View style={{ ...styles.Banner_Button }}>
                  <Text
                    style={{
                      fontFamily: FONTS.regular,
                      color: '#000',
                      fontSize: moderateScale(10),
                    }}>
                    USE CODE:ClUTCH10{' '}
                  </Text>
                </View>
              </View>
            ))}
          </Swiper>
        </View>
        {/* ----------------2nd Mid-Banner END-------------------------- */}
        {/* ----------------------------------Curated Custom Services Start-------------------------------------- */}
        <Text
          style={{
            fontFamily: FONTS.semibold,
            color: '#000',
            paddingTop: moderateScale(20),
            paddingLeft: moderateScale(15),
            fontSize: moderateScale(15),
          }}>
          Curated Custom Services
        </Text>

        <CuratedCustomCard />

        {/* ----------------------------------Curated Custom Services END-------------------------------------- */}

        {/* ----------------------------------Designer Service Start-------------------------------------- */}
        <Text
          style={{
            fontFamily: FONTS.semibold,
            color: '#000',
            paddingTop: moderateScale(20),
            paddingLeft: moderateScale(15),
            fontSize: moderateScale(15),
          }}>
          Designer Service Combos
        </Text>

        <DesignerServiceCard />

        {/* ----------------------------------Designer Service END-------------------------------------- */}

        {/* ----------------------------------GoMechanic Guarantee Start-------------------------------------- */}

        <TouchableOpacity
          onPress={() => NavigationService.navigate('GoMechanicAssurance')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: moderateScale(15),
              paddingTop: moderateScale(20),
            }}>
            <Text
              style={{
                fontFamily: FONTS.semibold,
                color: '#000',
                fontSize: moderateScale(15),
              }}>
              GoMechanic Guarantee
            </Text>
            <Icon name="right" type="AntDesign" color="#000" />
          </View>
        </TouchableOpacity>

        <GoMechanicGuarantee />

        {/* ----------------------------------GoMechanic Guarantee END-------------------------------------- */}

        {/* ----------------------------------Essential Services This Monsoon Start-------------------------------------- */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: moderateScale(15),
            paddingTop: moderateScale(20),
          }}>
          <Text
            style={{
              fontFamily: FONTS.semibold,
              color: '#000',
              fontSize: moderateScale(15),
            }}>
            Essential Services This Monsoon
          </Text>
        </View>

        <EssentialServices />

        {/* ----------------------------------Essential Services This Monsoon END-------------------------------------- */}
        {/* ----------------------------------MemberShip TAB Start-------------------------------------- */}
        <View style={{ ...styles.MemberShipTab_main_view_style }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: moderateScale(15),
            }}>
            <View style={{ ...styles.MemberShipTab_button_view_style }}>
              <View style={{ ...styles.MemberShipTab_button }}>
                <Text style={{ padding: moderateScale(5), color: '#fff' }}>
                  Miles
                </Text>
              </View>
              <Text style={{ color: '#fff', fontFamily: FONTS.medium }}>
                MemberShip
              </Text>
            </View>
            <View>
              <Icon name="right" type="AntDesign" color="#fff" />
            </View>
          </View>
          <View style={{ flexDirection: 'row', padding: moderateScale(5) }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="dot-single" type="Entypo" color="#fff" />
              <Text
                style={{
                  color: '#fff',
                  fontFamily: FONTS.regular,
                  fontSize: moderateScale(10),
                }}>
                ₹ 20,000 Savings
              </Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="dot-single" type="Entypo" color="#fff" />
              <Text
                style={{
                  color: '#fff',
                  fontFamily: FONTS.regular,
                  fontSize: moderateScale(10),
                }}>
                Discount Upto 25%
              </Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="dot-single" type="Entypo" color="#fff" />
              <Text
                style={{
                  color: '#fff',
                  fontFamily: FONTS.regular,
                  fontSize: moderateScale(10),
                }}>
                Free SOS
              </Text>
            </View>
          </View>
        </View>
        {/* ----------------------------------MemberShip TAB END-------------------------------------- */}

        {/* ----------------------------------Blog Posts & Articles Start-------------------------------------- */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: moderateScale(15),
            paddingTop: moderateScale(10),
          }}>
          <View>
            <Text
              style={{
                fontFamily: FONTS.semibold,
                color: '#000',
                fontSize: moderateScale(15),
              }}>
              Blog Posts & Articles
            </Text>
            <Text style={{ fontFamily: FONTS.regular }}>
              Get to know your car, abit more
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ paddingRight: moderateScale(5) }}>See All</Text>
            <Icon name="right" type="AntDesign" color="#b3b3b5" size={20} />
          </View>
        </View>

        <BlogPosts />

        {/* ----------------------------------Blog Posts & Articles  END-------------------------------------- */}

        {/* ----------------Last-Banner Start-------------------------- */}
        <View style={{ marginTop: moderateScale(25) }}>
          <Image
            style={styles.imageView}
            // style={{ width: moderateScale(60), height: moderateScale(60) }}
            source={require('../../Assets/images/last.jpg')}
          />
          <View style={{ position: 'absolute', padding: moderateScale(20) }}>
            <Text
              style={{
                color: '#fff',
                fontSize: moderateScale(20),
                fontFamily: FONTS.bold,
              }}>
              Free {'\n'}Wiper Blades
            </Text>
            <Text style={{ color: '#383885', fontFamily: FONTS.medium }}>
              On Periodic Services
            </Text>
          </View>

          <View style={{ ...styles.last_ClaimNow_Button }}>
            <Text
              style={{
                fontFamily: FONTS.medium,
                color: '#000',
                fontSize: moderateScale(10),
              }}>
              USE CODE:FREEWIPERBLADES
            </Text>
          </View>
        </View>
        {/* ----------------Last-Banner END-------------------------- */}

        {/* ----------------------------------Original Spare Parts Start-------------------------------------- */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: moderateScale(15),
            paddingTop: moderateScale(10),
          }}>
          <View>
            <Text
              style={{
                fontFamily: FONTS.semibold,
                color: '#000',
                fontSize: moderateScale(15),
              }}>
              Original Spare Parts
            </Text>
            <Text style={{ fontFamily: FONTS.regular }}>
              Extend Warranty With GoMechanic
            </Text>
          </View>
        </View>

        <OriginalSpareParts />

        {/* ----------------------------------Original Spare Parts END-------------------------------------- */}

        {/* ----------------------------------Refer Start-------------------------------------- */}
        <TouchableOpacity
          onPress={() => NavigationService.navigate('Referral')}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: moderateScale(15),
                paddingTop: moderateScale(10),
              }}>
              <View>
                <Text
                  style={{
                    fontFamily: FONTS.semibold,
                    color: '#000',
                    fontSize: moderateScale(15),
                  }}>
                  Earn ₹ 1000 for every Friend you Refer
                </Text>
                <Text style={{ fontFamily: FONTS.regular }}>
                  Get a Friend to start using GoMechanic
                </Text>
              </View>
            </View>

            <View style={{ marginTop: moderateScale(5) }}>
              <Image
                style={styles.imageView_reffer}
                source={require('../../Assets/images/reffer.jpg')}
              />
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#f75151', '#f75176', '#f0b4c7']}
                style={{ ...styles.refer_Button }}>
                <Text
                  style={{
                    fontFamily: FONTS.semibold,
                    color: '#fff',
                    fontSize: moderateScale(10),
                  }}>
                  REFER NOW
                </Text>
              </LinearGradient>
            </View>
          </View>
        </TouchableOpacity>
        {/* ----------------------------------Refer END-------------------------------------- */}
      </Animated.ScrollView>
      <ReactNativeModal 
      isVisible={isModalVisible}
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
        <View style={{ backgroundColor: '#fff', paddingVertical: 20, borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
          <Pressable style={{
            height: moderateScale(100),
            width: '90%',
            alignSelf: 'center',
            borderRadius: moderateScale(10),
            borderWidth: 0.7,
            borderColor: 'grey',
            paddingVertical: moderateScale(10),
            // alignItems:'center',
            justifyContent: 'center',

          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 20,
              justifyContent: 'space-between',
            }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                <Image
                  style={{
                    height: moderateScale(70),
                    width: moderateScale(70)
                  }}
                  resizeMode='contain'
                  source={{uri:carData?.car_image}}
                />
                <View>
                  <Text
                    style={{
                      fontFamily: FONTS.semibold,
                      color: '#000',
                      fontSize: moderateScale(13),
                      marginLeft: moderateScale(10)
                    }}>
                    {carData?.car_name}
                  </Text>
                  <Text
                    style={{
                      fontFamily: FONTS.medium,
                      color: 'grey',
                      fontSize: moderateScale(11),
                      marginLeft: moderateScale(10)

                    }}>
                    {carData?.transmission == 'auto' ? "Autometic" : "Manual"}
                  </Text>
                </View>
              </View>
              <Pressable style={{
                height: moderateScale(30),
                width: moderateScale(30),
                borderRadius: moderateScale(20),
                borderWidth: 0.5,
                borderColor: '#8A8A8A',
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor:'#EBEBEB'
              }}>

                <Icon name="delete" type="AntDesign" color="#000" size={16} />
              </Pressable>
            </View>
            <Pressable style={{
              width: '100%',
              backgroundColor: '#b1f2ff',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: moderateScale(15),
              height: moderateScale(30),
              borderBottomLeftRadius: moderateScale(10),
              borderBottomRightRadius: moderateScale(10),
              alignSelf: 'center',
              alignItems:'center'
            }}>
              <Text style={{
                color:'#1E90ff',
                fontFamily:FONTS.semibold
              }}>Manage your car</Text>
              <Pressable
              style={{
                height:22,
                width:22,
                backgroundColor:'#1E90ff',
                // zIndex:9999999,
                borderRadius:moderateScale(15),
                alignItems:'center',
                justifyContent:'center'
              }}
              >

               <Icon name="right" type="AntDesign" color="#fff" size={15} />
              </Pressable>
            </Pressable>
          </Pressable>
          <Pressable
            onPress={() => {
              NavigationService.navigate('CarSearch')
              setModalVisible(false)
            }}
            style={{
              height: moderateScale(50),
              width: '95%',
              alignSelf: 'center',
              borderRadius: 10,
              borderWidth: 0.8,
              borderColor: 'red',
              borderStyle: 'dashed',
              marginTop: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ffefea',
            }}>
            <Text

              style={{ fontFamily: FONTS.semibold, fontSize: moderateScale(15),color:'#BA110C' }}>
              Add New Vehicle +
            </Text>
          </Pressable>
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
              <SelectGoogleMap/>
            </>
          </ReactNativeModal>
    </Container>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  imageView: {
    height: moderateScale(150),
    width: moderateScale(330),
    borderRadius: moderateScale(20),
    marginHorizontal: moderateScale(10),
  },
  carButton_View_Style: {
    // borderWidth: moderateScale(0.5),
    borderRadius: moderateScale(5),
    width: moderateScale(70),
    height: moderateScale(18),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#d9d0d0',
    backgroundColor:'#000'
  },
  ClaimNow_Button: {
    borderRadius: moderateScale(5),
    width: moderateScale(80),
    height: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: moderateScale(0),
    bottom: moderateScale(0),
    marginLeft: moderateScale(20),
    marginBottom: moderateScale(15),
    backgroundColor: '#fff',
  },
  Search_View_Style: {
    paddingHorizontal: moderateScale(10),
    marginBottom: moderateScale(10),
    // marginTop:moderateScale(5)
  },
  service_View: {
    width: moderateScale(80),
    height: moderateScale(110),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    backgroundColor: '#fcfbfc',
  },
  service_text: {
    textAlign: 'center',
    fontFamily: FONTS.medium,
    fontSize: moderateScale(11),
  },
  Banner_Button: {
    borderRadius: moderateScale(5),
    width: moderateScale(120),
    height: moderateScale(25),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: moderateScale(0),
    bottom: moderateScale(0),
    marginLeft: moderateScale(20),
    marginBottom: moderateScale(15),
    backgroundColor: '#fff',
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
  last_ClaimNow_Button: {
    borderRadius: moderateScale(5),
    width: moderateScale(162),
    height: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: moderateScale(0),
    bottom: moderateScale(0),
    marginLeft: moderateScale(20),
    marginBottom: moderateScale(15),
    backgroundColor: '#fff',
  },
  refer_Button: {
    borderRadius: moderateScale(5),
    width: moderateScale(85),
    height: moderateScale(35),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginLeft: moderateScale(20),
    marginTop: moderateScale(25),
  },
  imageView_reffer: {
    height: moderateScale(190),
    width: moderateScale(330),
    marginHorizontal: moderateScale(10),
  },
  carImage: {
    height: moderateScale(35),
    width: "85%"
  },
});
