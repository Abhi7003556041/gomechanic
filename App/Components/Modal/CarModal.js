import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  
  View,
} from 'react-native';
import React from 'react';
import {useTheme,Text,} from 'react-native-basic-elements';
import {moderateScale} from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';
import { FONTS } from '../../Constants/Fonts';
const {height, width} = Dimensions.get('screen');

const CarModal = ({func,Data,Phone,BrandID}) => {
  const colors = useTheme();
  return (
    <View
      style={{
        ...styles.modalStyle,
        backgroundColor: colors.pageBackgroundColor,
      }}>
        {/* <Text style={{...styles.tataText, color:colors.secondaryFontColor}}>Tata</Text> */}
        <Text style={styles.tataText}>Select Car</Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap',marginHorizontal:0,justifyContent:'center'}}>
        {Data?.map((item, index) => (
          <Pressable
            onPress={() =>{

              NavigationService.navigate('SelectCarType',{cardata:item,BrandId:BrandID, PHONE:Phone})
              func()
            }} 
            style={{alignItems:'center',width:'32%'}}
            >
            <Image
              style={styles.carImageStyle}
              source={{uri:item.car_image}}
            />
            <Text 
            numberOfLines={2}
            style={styles.carSelectText}>{item.car_name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default CarModal;

const styles = StyleSheet.create({
  modalStyle: {
    height: height / 1.3,
    width: width,
    borderTopRightRadius: moderateScale(10),
    borderTopLeftRadius: moderateScale(10),
  },
  carImageStyle: {
    height: moderateScale(40),
    width: moderateScale(80),
    marginVertical: moderateScale(20),
    marginHorizontal: moderateScale(15),
  },
  carSelectText:{
    fontFamily:FONTS.medium,
    fontSize:moderateScale(11),
    textAlign:'center',
    maxWidth:'70%'
  },
  tataText:{
    fontFamily:FONTS.semibold,
    marginLeft:moderateScale(15),
    marginTop:moderateScale(10),
    fontSize:16
  }
});
