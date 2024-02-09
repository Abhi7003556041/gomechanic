//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, useTheme, Text, AppButton } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import NavigationService from '../../Services/Navigation';
import BackHeader from '../../Components/Header/BackHeader';
import { useDispatch, useSelector } from 'react-redux';
import AuthService from '../../Services/Auth';
import useCountDownTimer from '../../Components/Timer/TimerLoader';
import Toast from 'react-native-simple-toast';
import { setcar, setuser } from '../../Redux/reducer/User';

// create a component
const Otp = ({route}) => {
    const colors = useTheme()
    const dispatch = useDispatch();
    const {userData,carData} = useSelector((state)=>state.User)

    const {userdata,OTP,Phone,Exist,CarData} = route.params
    const [userOtp, setUserOtp] = useState('');
    const [ootp,setOotp] = useState(route.params.OTP)
    const [btnLoader, setBtnLoader] = useState(false);

    const login = () => {
        let data = {
            phone:Number(Phone)
        }  
        console.log('data',data)
        AuthService.login(data)
        .then((res)=>{
            console.log('login>>>>>>>>>>>',res.otp)
            if(res && res.status){
                // setUserOtp('')
                setOotp(res.otp)
                resetTimer()
                Toast.show(`Your OTP ${res?.otp}`)

            }
            else{
            Toast.show('Error Occurred',Toast.SHORT)
            }
        })
        .catch((err)=>console.log('errr',err))
    }

    const register = async() => {
        let data = {
            phone:Number(Phone),
            car_id:carData.car_id,
            fuel_id:carData.fuel_id,
            transmission:carData.transmission
        } 
        console.log('datarefg',data)
        setBtnLoader(true)
        AuthService.Register(data)
        .then((res)=>{
            console.log('Register',res)
            if(res && res.status){
              AuthService.setAccount(res.data);
              AuthService.setCar(res.car_data)
              dispatch(setuser(res.data))
              dispatch(setcar(res.car_data))
              Toast.show("Registered Successfully", Toast.SHORT);
              NavigationService.back()
            }
            setBtnLoader(false)
        })
        .catch((err)=>console.log('err',err))
    }

    const checkOtp = (val) => {
        if (val != userOtp) {
            Toast.show("Otp does not match", Toast.SHORT);
            return;
        }
        else if (val == userOtp) {
            if (Exist) {
                if(carData){
                    AuthService.setAccount(userdata);
                    AuthService.setCar(CarData)
                    dispatch(setuser(userdata))
                    dispatch(setcar(CarData))
                    setPause(true)
                    Toast.show("Logged In Successfully", Toast.SHORT);
                    NavigationService.navigate('BottomTab')
                }
                else{

                    AuthService.setAccount(userdata);
                    AuthService.setCar(CarData)
                    dispatch(setuser(userdata))
                    dispatch(setcar(CarData))
                    setPause(true)
                    Toast.show("Logged In Successfully", Toast.SHORT);
                    // NavigationService.navigate('BottomTab')
                }
            }
            else {
                if(CarData==null && carData==null){

                    setPause(true)
                    Toast.show("Otp matched", Toast.SHORT);
                    NavigationService.navigate('CarSelect',{Phone:Phone})
                }
                else if(CarData==null && carData){
                    console.log('first')
                    register()
                }
            }
           
        }
        // NavigationService.navigate('AppStack');
    }
    const { FormatedTimmer, timer, resetTimer, setTimer, setPause } = useCountDownTimer({ initialValue: 60 });

    useEffect(()=>{
        resetTimer()
    },[])
    return (
        <Container>
           <BackHeader title='OTP'/>
           {
            console.log('cardarar',carData)
           }
            <Text style={{
                ...styles.demo_txt,
                color: colors.primaryFontColor,
                marginTop:moderateScale(100)
            }}>Lorem ipsum dolor sit amet consectetur. Feugiat aliquam elit blandit lectus.</Text>
            <View style={{
                marginHorizontal: moderateScale(15),
                justifyContent: 'center',
                marginTop:30
            }}>
                <OTPInputView
                    style={{
                        height: moderateScale(75),
                        justifyContent: 'center',
                        alignSelf: 'center',
                        width: '105%',
                    }}
                    pinCount={4}
                    codeInputFieldStyle={{
                        ...styles.underlineStyleBase,
                        borderColor: colors.borderColor

                    }}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled={(code => {
                        console.log(`Code is ${code}, you are good to go!`)
                    })}
                    onCodeChanged={(val) => setUserOtp(val)}

                />
            </View>
            <Text style={{
                ...styles.resendOtp_txt,
                color: colors.buttonColor
            }}>
                OTP Expires in - 
            <Text style={{color:'red'}}> {FormatedTimmer}</Text>
            </Text>

            <View style={{ flex: 1 }} />
            {timer == 0 ?
            <AppButton
                title="Resend"
                style={{
                    ...styles.button_sty
                }}
                textStyle={{
                    ...styles.button_txt,
                    color:'#fff'
                }}

                onPress={() =>
                    login()
                }
            />
            :
            <AppButton
                title="Submit"
                textStyle={{
                    ...styles.button_txt,
                    color:'#fff'
                }}
                style={{
                    ...styles.button_sty
                }}
                disabled={btnLoader}
                loader={btnLoader ? {
                  position: 'right',
                  color: '#fff',
                  size: 'small'
                } : null}
                onPress={() =>
                    checkOtp(ootp)
                }
            />
            }
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    logo_sty: {
        resizeMode: 'contain',
        height: moderateScale(65),
        alignSelf: 'center',
        marginTop: moderateScale(30)
    },
    demo_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(13),
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: moderateScale(15),
        maxWidth: '90%'
    },
    underlineStyleBase: {
        width: moderateScale(58),
        height: moderateScale(52),
        borderRadius: moderateScale(5),
        backgroundColor: "#FFFFFF",
        color: '#000000',
        elevation: 3,
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(16),
        marginHorizontal: moderateScale(10),
        borderWidth: 0
    },
    underlineStyleHighLighted: {
        backgroundColor: "#FFFFFF",
    },
    userEmail_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(14),
        marginTop: moderateScale(25),
        marginHorizontal: moderateScale(25)
    },
    resendOtp_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(12),
        marginHorizontal: moderateScale(15),
        textAlign: 'right',
        marginTop: moderateScale(5),
        textDecorationLine: 'underline'
    },
    button_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(17)
    },
    button_sty: {
        height: moderateScale(50),
        borderRadius: moderateScale(5),
        width: '92%',
        alignSelf: 'center',
        marginBottom: moderateScale(20)
    },
});

//make this component available to the app
export default Otp;
