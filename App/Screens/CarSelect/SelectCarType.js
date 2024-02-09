import { Image, Pressable, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Container, useTheme, Text, Card, AppButton } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import { RadioButton } from 'react-native-basic-elements';
import LinearGradient from 'react-native-linear-gradient';
import NavigationService from '../../Services/Navigation';
import AuthService from '../../Services/Auth';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { setcar, setuser } from '../../Redux/reducer/User';
import { ScrollView } from 'react-native-gesture-handler';

const SelectCarType = ({route}) => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(false);
  const [gearType,setGeartype] = useState('')
  const [Fueltype,setFueltype] = useState('')
  const [Autogear,setAutogear] = useState(false)
  const [ManualGear,setManualGear] = useState(false)
  const [AllFuel,setAllFuel] = useState([])
  const [btnLoader, setBtnLoader] = useState(false);

  const [singleCar,setSingleCar] = useState(null)
  const colors = useTheme();
  const CarData = route.params.cardata
  const {PHONE,BrandId} = route.params

  const register = async() => {
    let data = {
        phone:Number(PHONE),
        car_id:CarData.car_id,
        fuel_id:Fueltype,
        transmission:gearType
    } 
    console.log('data>>>>>>>>>>',data)
    setBtnLoader(true)
    AuthService.Register(data)
    .then((res)=>{
        if(res && res.status){
          AuthService.setAccount(res.data);
          AuthService.setCar(res.car_data)
          dispatch(setuser(res.data))
          dispatch(setcar(res.car_data))
          Toast.show("Registered Successfully", Toast.SHORT);
        }
        setBtnLoader(false)
    })
}
  const GetSingleCar = async() => {
    AuthService.FetchCarSingle({car_id:CarData.car_id})
    .then((res)=>{
      console.log('FetchCarSingle',res.data)
      if(res && res.status){
        setSingleCar(res.data)
        
      }
    })
    .catch((err)=>err && console.log('err',err))
  }

  const GetFuelType = async(type='manual') => {
    let data = {
      car_id:CarData.car_id,
      transmission:type
    }
    AuthService.FetchFuelType(data)
    .then((res)=>{
      console.log('FetchFuelType',res)
      if(res && res.status){
        setAllFuel(res.data)
      }
      else{
        setAllFuel([])
      }
    })
    .catch((err)=>err && console.log('err',err))
  }
  useEffect(()=>{
   GetSingleCar()
   GetFuelType()
  },[])
  return (
    <Container>
      <BackHeader title="Select Your Car" />
      <ScrollView showsVerticalScrollIndicator={false}>
      <Card style={{ ...styles.contant_style }}>
        <Image
          style={styles.carType}
          source={{uri:CarData.car_image}}
        />

        <Text style={{ ...styles.textCar, color: colors.secondaryFontColor }}>
          {CarData.car_name}
        </Text>
      </Card>
{console.log('geartypepepee',Autogear,ManualGear,PHONE)}
{singleCar?.auto || singleCar?.manual ?
      <Card style={{ ...styles.contant_style }}>
        <Text style={{ ...styles.carTransmissionText }}>Car Transmission Type</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {singleCar?.auto ?
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#EBEBEB', '#fff']} 
          onPress={()=>{
            {
              setGeartype('manual')
              GetFuelType('manual')
            }
          }}
          style={{
             flexDirection: 'row',
             alignItems: 'center',
             marginHorizontal: moderateScale(7),
             borderWidth: moderateScale(1),
             height: moderateScale(50),
             width: moderateScale(120),
             paddingVertical: moderateScale(8),
             marginTop: moderateScale(20),
             borderColor:gearType== 'manual' ? "grey" : '#EBEBEB',
             borderRadius: moderateScale(5),
          }}>
            <RadioButton
              activeColor={"red"}
              containerStyle={{ marginLeft: moderateScale(5) }}
              selected={gearType == 'manual'}
              onChange={val => 
                {
                  setGeartype('manual')
                  GetFuelType('manual')
                }}
              size={20}
            />
            <Text style={styles.radioButtonText}>Manual</Text>
          </LinearGradient>
          :null
          }
        {singleCar?.manual ?
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#EBEBEB', '#fff']} style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: moderateScale(7),
            borderWidth: moderateScale(1),
            height: moderateScale(50),
            width: moderateScale(120),
            paddingVertical: moderateScale(8),
            marginTop: moderateScale(20),
            borderColor:gearType== 'auto' ? "grey" : '#EBEBEB',
            borderRadius: moderateScale(5),
          }}>
            <RadioButton
              activeColor={"red"}
              containerStyle={{ marginLeft: moderateScale(5) }}
              selected={gearType == 'auto'}
              onChange={val => {
                setGeartype('auto')
                GetFuelType('auto')
              }}
              size={20}
            />
            <Text style={styles.radioButtonText}>Automatic</Text>
          </LinearGradient>
          :null
}
        </View>
      </Card>
      :null
}
{AllFuel.length>0 ?
      <Card style={{ ...styles.contant_style }}>
        <Text style={{ ...styles.carTransmissionText }}>Car Fuel Type</Text>
        <View style={{ padding: moderateScale(5), flexDirection: "row", marginTop: moderateScale(10) }}>
          {AllFuel?.map((res,ind)=>{
            return(
              <Pressable  
              key={ind}
              onPress={()=>setFueltype(res.fuel_id)}
              style={{ ...styles.icon_view,borderColor:Fueltype == res.fuel_id ? 'grey' : '#EBEBEB',borderWidth:Fueltype == res.fuel_id ? 1 : 0.7 }}>
                <Image
                  style={styles.icon_fule}
                  source={res.fuel_logo ? {uri:res.fuel_logo}: require('../../Assets/images/imgsingle3.png')}
                  resizeMode='contain'
                />
                <Text style={{ fontFamily: FONTS.regular }}>{res.fuel_name}</Text>
                {console.log('first',res.fuel_logo)}
              </Pressable>
            )
          })}
         

          {/* <Pressable 
          onPress={()=>setFueltype('Diesel')}
          style={{ ...styles.icon_view,borderColor:Fueltype == 'Diesel' ? 'grey' : '#EBEBEB',borderWidth:Fueltype == 'Diesel' ? 1 : 0.7 }}>
            <Image
              style={styles.icon_fule}
              source={require('../../Assets/images/imgsingle1.png')}
            />
            <Text style={{ fontFamily: FONTS.regular }}>Diesel</Text>
          </Pressable>

          <Pressable 
          onPress={()=>setFueltype('CNG')}
          style={{ ...styles.icon_view,borderColor:Fueltype == 'CNG' ? 'grey' : '#EBEBEB',borderWidth:Fueltype == 'CNG' ? 1 : 0.7 }}>
            <Image
              style={styles.icon_fule}
              source={require('../../Assets/images/imgsingle3.png')}
            />
            <Text style={{ fontFamily: FONTS.regular }}>CNG</Text>
          </Pressable> */}
        </View>
      </Card>
      :null
}
      <View style={{flex:1}}/>
      {gearType!='' && Fueltype!='' ?
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
                   {
                    register()
                  }
                }
            />
            :null
              }
</ScrollView>
    </Container>
  );
};

export default SelectCarType;

const styles = StyleSheet.create({
  carType: {
    height: moderateScale(150),
    width: moderateScale(300),
    alignSelf: 'center',
    marginTop: moderateScale(25),
  },
  textCar: {
    textAlign: 'center',
    marginVertical: moderateScale(25),
    fontFamily: FONTS.semibold,
    fontSize: moderateScale(14),
  },
  carTransmissionText: {
    fontFamily: FONTS.medium,
    color: "#000",
    fontSize: moderateScale(14),
    marginLeft: moderateScale(10),
    paddingTop: moderateScale(10)
  },
  radioButtonText: {
    fontFamily: FONTS.medium,
    fontSize: moderateScale(13),
    marginLeft: moderateScale(10),
    color: "red"

  },
  radioButtonBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: moderateScale(7),
    borderWidth: moderateScale(1),
    height: moderateScale(50),
    width: moderateScale(120),
    paddingVertical: moderateScale(8),
    marginTop: moderateScale(20),
    borderColor: "red",
    borderRadius: moderateScale(5),
    // backgroundColor:"red"
  },
  icon_fule: {
    width: moderateScale(60),
    height: moderateScale(60)
  },
  icon_view: {
    borderWidth: moderateScale(0.2),
    height: moderateScale(90),
    width: moderateScale(70),
    alignItems: 'center',
    borderRadius: moderateScale(3),
    marginLeft: moderateScale(10)
  },
  contant_style: {
    borderWidth: moderateScale(2),
    marginTop: moderateScale(5),
    borderColor: "#f9efef",
    borderRadius: moderateScale(5)

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
