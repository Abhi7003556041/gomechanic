import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import BackHeader from '../../Components/Header/BackHeader'
import { AppButton, AppTextInput, Container, Icon } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
import { useNavigation, useTheme } from '@react-navigation/native'
import PhoneInput from "react-native-phone-number-input";
import AuthService from '../../Services/Auth'
import Toast from 'react-native-simple-toast';

const Login = () => {
  const colors = useTheme()
  const Navigation = useNavigation()
  const phoneInput = useRef < PhoneInput > (null);
  const [value, setValue] = useState("");
  const [phoneNo, setPhoneNo] = useState('');
  const [btnLoader, setBtnLoader] = useState(false);


  const login = () => {

    if (phoneNo == '') {
      Toast.show('Please enter phone number');
      return false;
    }

    let data = {
      "phone": Number(phoneNo)
    }
    setBtnLoader(true)
    console.log('logData========', data);
    AuthService.login(data)
      .then(res => {
        console.log('logres========', res);
        if (res && res.status) {
          
          if (res.block == false) {
            setBtnLoader(false)
            NavigationService.replace('Otp', { userdata: res.data, CarData:res.car_data, OTP:res.otp ,Phone:phoneNo, Exist:res.already_exists})
            Toast.show(`Your OTP ${res?.otp}`)
          }
          
          else if(res.block){
            setBtnLoader(false)
            Toast.show('User blocked by admin', Toast.SHORT)
          }
        }
        else {
          setBtnLoader(false)
          Toast.show('Error Occurred', Toast.SHORT)
        }
      })
      .catch(err => {
        console.log('err', err);
        setBtnLoader(false)
      })
  }
  return (
    <Container>
      <BackHeader title='Login' />
      <View>
        <View>
          <Text style={{ fontFamily: FONTS.medium, paddingLeft: moderateScale(20), color: "#000", fontSize: moderateScale(15) }}>Enter Your Mobile Number</Text>
          <Text style={{ fontFamily: FONTS.medium, padding: moderateScale(20), fontSize: moderateScale(14) }}>We'll send you a <Text style={{ fontFamily: FONTS.medium, color: "#000" }}>4 digit OTP</Text> {"\n"}on your mobile number for verification</Text>
        </View>
        <PhoneInput
          useRef={phoneInput}
          defaultValue={value}
          value
          layout="second"
          containerStyle={{
            backgroundColor: colors.secondaryThemeColor,
            ...styles.phone_container_sty
          }}

          textContainerStyle={{
            ...styles.phone_txtContainer_txt
          }}
          textInputStyle={{
            ...styles.phone_input_txt
          }}

          codeTextStyle={{
            ...styles.ph_code_txt
          }}

          maxLength={10}
          placeholder=' Enter Phone Number'
          onChangeText={value => setPhoneNo(value)}
        />

        <Text style={{
          ...styles.bottom_txt,
        }}>Don't worry your number will not be shared with anyone</Text>
      </View>
      <View style={{ flex: 1 }} />
      <AppButton
        title="GET OTP"
        gradient={true}
        gradientColors={['#ff4e4e', '#ff4e4e', '#ff4e4e']}
        style={{ ...styles.SubmitButton_style }}
        onPress={() => login()}
        disabled={btnLoader}
        loader={btnLoader ? {
          position: 'right',
          color: '#fff',
          size: 'small'
        } : null}
       
      />

    </Container>
  )
}

export default Login

const styles = StyleSheet.create({
  SubmitButton_style: {
    height: moderateScale(50),
    marginTop: moderateScale(50),
    marginBottom: moderateScale(20)
  },
  phone_container_sty: {
    borderWidth: 1,
    borderRadius: moderateScale(10),
    width: '90%',
    height: moderateScale(50),
    marginHorizontal: moderateScale(15)
  },
  phone_txtContainer_txt: {
    backgroundColor: 'transparent',
    paddingLeft: moderateScale(5),
    borderLeftWidth: 1,
    height: moderateScale(50),
  },
  phone_input_txt: {
    fontFamily: FONTS.medium,
    fontSize: moderateScale(12),
    height: moderateScale(50)
  },
  ph_code_txt: {
    fontFamily: FONTS.semibold,
    fontSize: moderateScale(13),
  },
  bottom_txt: {
    textAlign: "center",
    fontFamily: FONTS.regular,
    fontSize: moderateScale(11),
    marginTop: moderateScale(10)
  }

})