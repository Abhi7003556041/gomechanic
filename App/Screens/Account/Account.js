import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Container, Icon } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationService from '../../Services/Navigation';
import AuthService from '../../Services/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/reducer/User';
import Toast from 'react-native-simple-toast'
import { deleteCart } from '../../Redux/reducer/CartService';
const Account = () => {
  const dispatch = useDispatch()
  const { login_status,car_status,userData } = useSelector(state => state.User);

  const logoutUser = async () => {
    AuthService.setAccount(null);
    AuthService.setCar(null)

    // setModalVisible(false);
    dispatch(logout());
    dispatch(deleteCart());
    // dispatch(clearCart([]));
    Toast.show('Logged Out Successfully',Toast.SHORT);
  };
  return (
    <Container style={{ ...styles.mainContainer }}>
      <View style={{ ...styles.Header_View }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontFamily: FONTS.medium, color: '#000' }}>Hellow,</Text>
          <Text
            style={{
              fontFamily: FONTS.bold,
              paddingLeft: moderateScale(5),
              color: '#000',
            }}>
            {userData?.name ?? 'New User'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: moderateScale(5),
          }}>
          <Image
            style={{ height: moderateScale(10), width: moderateScale(10) }}
            source={require('../../Assets/images/india.png')}
          />
          <Text
            style={{
              fontFamily: FONTS.semibold,
              fontSize: moderateScale(10),
              paddingLeft: moderateScale(5),
            }}>
            +91 {userData?.phone}
          </Text>
        </View>
      </View>

      <View style={{ ...styles.icon_View }}>
        <TouchableOpacity
          onPress={() => NavigationService.navigate('OrderHistory')}>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ height: moderateScale(50), width: moderateScale(50) }}
              source={require('../../Assets/images/account1.png')}
            />
            <Text style={{ fontFamily: FONTS.medium, color: '#000' }}>
              Order History
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => NavigationService.navigate('GoConnect')}>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ height: moderateScale(50), width: moderateScale(50) }}
              source={require('../../Assets/images/account2.png')}
            />
            <Text style={{ fontFamily: FONTS.medium, color: '#000' }}>
              My Cars
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => NavigationService.navigate('HelpAndSupport')}>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ height: moderateScale(50), width: moderateScale(50) }}
              source={require('../../Assets/images/account3.png')}
            />
            <Text style={{ fontFamily: FONTS.medium, color: '#000' }}>
              Help & Support
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ borderWidth: moderateScale(0.3), borderColor: '#ddd5de' }} />

      <TouchableOpacity
        onPress={() => NavigationService.navigate("GoAppMoney")}
      >
        <View style={{ ...styles.google_icon_View }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ height: moderateScale(35), width: moderateScale(35) }}
              source={require('../../Assets/images/googleicon.png')}
            />

            <View
              style={{ alignItems: 'flex-start', paddingLeft: moderateScale(10) }}>
              <Text style={{ color: '#000', fontFamily: FONTS.medium }}>
                GoApp Money
              </Text>
              <Text>₹ 1,000</Text>
            </View>

          </View>
          <Icon name="right" type="AntDesign" />
        </View>
      </TouchableOpacity>

      <View style={{ ...styles.miles_icon_View }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={{ height: moderateScale(35), width: moderateScale(35) }}
            source={require('../../Assets/images/milesicon.png')}
            resizeMode="contain"
          />
          <View
            style={{ alignItems: 'flex-start', paddingLeft: moderateScale(10) }}>
            <Text
              numberOfLines={2}
              style={{
                maxWidth: '85%',
                color: '#000',
                fontFamily: FONTS.medium,
                fontSize: moderateScale(11),
              }}>
              Save ₹ 10,000 Annually, Free SOS & much more
            </Text>
          </View>
        </View>
        <Icon name="right" type="AntDesign" />
      </View>

      <View
        style={{
          borderWidth: moderateScale(0.3),
          borderColor: '#ddd5de',
          marginVertical: moderateScale(15),
        }}
      />
      {/* ----------------------------------------profile Start------------------------------------------------ */}
      <TouchableOpacity
        onPress={() => NavigationService.navigate('UserProfile')}>
        <View style={{ ...styles.profile_icon_View }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              name="user"
              type="EvilIcon"
              color={'red'}
              size={30}
              style={{
                marginBottom: moderateScale(5),
                paddingRight: moderateScale(5),
                marginLeft: moderateScale(-4),
              }}
            />
            <Text
              style={{
                color: '#000',
                fontFamily: FONTS.medium,
                paddingLeft: moderateScale(10),
              }}>
              Profile
            </Text>
          </View>
          <Icon name="right" type="AntDesign" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => NavigationService.navigate('SetPreferrences')}
      >
        <View style={{ ...styles.profile_icon_View }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              name="sliders-h"
              type="FontAwesome5"
              color={'red'}
              size={20}
              style={{
                marginBottom: moderateScale(5),
                paddingRight: moderateScale(10),
              }}
            />
            <Text
              style={{
                color: '#000',
                fontFamily: FONTS.medium,
                paddingLeft: moderateScale(10),
              }}>
              Set Preferrences
            </Text>
          </View>
          <Icon name="right" type="AntDesign" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => NavigationService.navigate('GoMechActivation')}>
        <View style={{ ...styles.profile_icon_View }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              name="line-scan"
              type="MaterialCommunityIcon"
              color={'red'}
              size={20}
              style={{
                marginBottom: moderateScale(5),
                paddingRight: moderateScale(10),
              }}
            />
            <Text
              style={{
                color: '#000',
                fontFamily: FONTS.medium,
                paddingLeft: moderateScale(10),
              }}>
              Activate OBD
            </Text>
          </View>
          <Icon name="right" type="AntDesign" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => NavigationService.navigate('Referral')}>
        <View style={{ ...styles.profile_icon_View }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              name="gift"
              type="Feather"
              color={'red'}
              size={20}
              style={{
                marginBottom: moderateScale(5),
                paddingRight: moderateScale(10),
              }}
            />
            <Text
              style={{
                color: '#000',
                fontFamily: FONTS.medium,
                paddingLeft: moderateScale(10),
              }}>
              Refer and Earn
            </Text>
          </View>
          <Icon name="right" type="AntDesign" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
      // onPress={() => NavigationService.navigate('')}
      >
        <View style={{ ...styles.profile_icon_View }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              name="handshake-o"
              type="FontAwesome"
              color={'red'}
              size={20}
              style={{
                marginBottom: moderateScale(5),
                paddingRight: moderateScale(5),
              }}
            />
            <Text
              style={{
                color: '#000',
                fontFamily: FONTS.medium,
                paddingLeft: moderateScale(10),
              }}>
              Register as Partner
            </Text>
          </View>
          <Icon name="right" type="AntDesign" />
        </View>
      </TouchableOpacity>
      {/* ----------------------------------------profile Start END------------------------------------------------ */}

      <View
        style={{
          borderWidth: moderateScale(0.3),
          borderColor: '#ddd5de',
          // marginVertical: moderateScale(5),
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingVertical: moderateScale(15),
          paddingHorizontal: moderateScale(35),
        }}>
        <Text style={{ fontSize: moderateScale(11), fontFamily: FONTS.medium }}>
          Privacy Policy
        </Text>
        <Icon name="dot-single" type="Entypo" color={'#b5b5b3'} />
        <Text 
        onPress={()=>{
          logoutUser()
        }}
        style={{ fontSize: moderateScale(11), fontFamily: FONTS.medium }}>
          Logout
        </Text>
        <Icon name="dot-single" type="Entypo" color={'#b5b5b3'} />
        <Text style={{ fontSize: moderateScale(11), fontFamily: FONTS.medium }}>
          v2.23.5
        </Text>
      </View>
    </Container>
  );
};

export default Account;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: moderateScale(10),
  },
  Header_View: {
    padding: moderateScale(10),
  },
  icon_View: {
    // borderWidth: moderateScale(1),
    height: moderateScale(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
  },
  google_icon_View: {
    // borderWidth: moderateScale(0.2),
    height: moderateScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(15),
    borderRadius: moderateScale(5),
    backgroundColor: '#f9fcd7',
    marginVertical: moderateScale(15),
  },
  miles_icon_View: {
    // borderWidth: moderateScale(0.2),
    height: moderateScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(15),
    borderRadius: moderateScale(5),
    backgroundColor: '#f0dff7',
    // marginVertical:moderateScale(15)
  },

  profile_icon_View: {
    height: moderateScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(15),
    borderRadius: moderateScale(5),
    alignItems: 'center',
    // borderWidth:1,
    marginBottom: moderateScale(5),
  },
});
