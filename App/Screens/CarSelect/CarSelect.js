import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppTextInput, Container, useTheme} from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import {FONTS} from '../../Constants/Fonts';
import {moderateScale} from '../../Constants/PixelRatio';
import CarCard from '../../Components/SelectCard/CarCard';
import ReactNativeModal from 'react-native-modal';
import CarModal from '../../Components/Modal/CarModal';
import AuthService from '../../Services/Auth';
import Toast from 'react-native-simple-toast';

const CarSelect = ({route}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [BrandId,setBrandId] = useState('')
  const {Phone} = route.params ?? ''
  const toggleModal = (val) => {
    GetCar(val)
    setBrandId(val)
    
  };
  const cardArray = [
    {
      carImg: require('../../Assets/images/marutisuzukilogo.png'),
    },
    {
      carImg: require('../../Assets/images/honda.png'),
    },
    {
      carImg: require('../../Assets/images/audi1.jpg'),
    },
    {
      carImg: require('../../Assets/images/tata.png'),
    },
    {
      carImg: require('../../Assets/images/marutisuzukilogo.png'),
    },
    {
      carImg: require('../../Assets/images/honda.png'),
    },
    {
      carImg: require('../../Assets/images/audi1.jpg'),
    },
    {
      carImg: require('../../Assets/images/tata.png'),
    },
    {
      carImg: require('../../Assets/images/marutisuzukilogo.png'),
    },
    {
      carImg: require('../../Assets/images/honda.png'),
    },
    {
      carImg: require('../../Assets/images/audi1.jpg'),
    },
    {
      carImg: require('../../Assets/images/tata.png'),
    },
    {
      carImg: require('../../Assets/images/marutisuzukilogo.png'),
    },
    {
      carImg: require('../../Assets/images/honda.png'),
    },
    {
      carImg: require('../../Assets/images/audi1.jpg'),
    },
    {
      carImg: require('../../Assets/images/tata.png'),
    },
  ];

  const colors = useTheme();
  const [allbrand,setAllBrand] = useState([])
  const [AllCar,setAllCar] = useState([])


  const GetAllBrand = async() => {
    AuthService.FetchBrand()
    .then((res)=>{
      console.log('FetchBrand',res.data)
      if(res && res.status){
        setAllBrand(res.data)
      }
      else{
        setAllBrand([])
      }
    })
    .catch((err)=>err && console.log('err',err))
  }

  const GetCar = async(id) => {
    console.log('iddd',id)
    AuthService.FetchCar({car_brand_id:id})
    .then((res)=>{
      console.log('FetchCar>>>>',res)
      if(res && res.status){
        if(res.data.length==0){
          Toast.show('No car found')
        }      
        else{
          setModalVisible(!isModalVisible);
          setAllCar(res.data)
        }
      }
      else{
        setAllCar([])      
          Toast.show('No car found')
      
      }
    })
    .catch((err)=>err && console.log('err',err))
  }

  useEffect(()=>{
    GetAllBrand()
  },[])

  return (
    <Container>
      <BackHeader title="Select Your Car" />
      <View style={styles.textInput}>
        <AppTextInput
          placeholder="Search by Car Model or Brand"
          inputStyle={styles.placeHolderStyle}
          leftIcon={{
            name: 'search1',
            type: 'AntDesign',
            color: colors.secondaryFontColor,
            size: moderateScale(15),
          }}
        />
      </View>
      <ScrollView>
        <View style={styles.carItemView}>
          {allbrand.map((item, index) => (
            <CarCard
              carImg={item.brand_logo}
              brandId={item.car_brand_id}
              key={index}
              toggleModal={(val) => toggleModal(val)}
            />
          ))}
        </View>
      </ScrollView>
      <ReactNativeModal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        style={{margin: 0, justifyContent: 'flex-end'}}>
        <CarModal Phone={Phone ?? ''} BrandID={BrandId} Data={AllCar} func={()=>setModalVisible(false)}/>
      </ReactNativeModal>
    </Container>
  );
};

export default CarSelect;

const styles = StyleSheet.create({
  placeHolderStyle: {
    fontFamily: FONTS.regular,
    fontSize: moderateScale(10),
  },
  textInput: {
    marginHorizontal: moderateScale(15),
  },
  carItemView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: moderateScale(0),

    // justifyContent:'space-between',
    // alignItems:'center',
    // justifyContent:'center'
  },
});
