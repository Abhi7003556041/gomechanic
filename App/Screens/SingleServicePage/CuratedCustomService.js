import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import {Container, useTheme} from 'react-native-basic-elements';
  import ServicePageHeader from '../../Components/Header/ServicePageHeader';
  import {moderateScale} from '../../Constants/PixelRatio';
  import {FONTS} from '../../Constants/Fonts';
  import {TouchableOpacity} from 'react-native-gesture-handler';
import Amaronbatteries from '../../Components/CuratedCustomServiceComponent/Amaronbatteries';
import Exidebatteries from '../../Components/CuratedCustomServiceComponent/Exidebatteries';
import Alternatorparts from '../../Components/CuratedCustomServiceComponent/Alternatorparts';
import KnowYourCarBattery from '../../Components/CuratedCustomServiceComponent/KnowYourCarBattery';

  const CuratedCustomService = () => {
    const colors = useTheme();
    //button State
    const [Amaron, setAmaron] = useState(true);
    const [Exide, setExide] = useState(false);
    const [Alternator, setAlternator] = useState(false);
  
    return (
      <Container style={{paddingHorizontal: moderateScale(5)}}>
        <StatusBar
          backgroundColor={colors.pageBackgroundColor}
          barStyle="dark-content"
        />
        {/* ------------Header---------- */}
        <ServicePageHeader title="Denting & Painting" />
  
        {/* ---------------------Component Change Button Start------------------------------------------ */}
        <View style={{...styles.ServiceButton_view_Style}}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <TouchableOpacity
              onPress={() => {
                setAmaron(true);
                setExide(false);
                setAlternator(false);
       
              }}>
              <View
                style={{
                  ...styles.ServiceButton_Style,
                  borderColor: Amaron ? '#1054ee' : '#b8afc7',
                  backgroundColor: Amaron ? '#dae1f1' : '#fff',
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.medium,
                    color: Amaron ? '#1054ee' : '#b8afc7',
                  }}>
                  Amaron
                </Text>
              </View>
            </TouchableOpacity>
  
            <TouchableOpacity
              onPress={() => {
                setAmaron(false);
                setExide(true);
                setAlternator(false);
        
              }}>
              <View
                style={{
                  ...styles.ServiceButton_Style,
                  borderColor: Exide ? '#1054ee' : '#b8afc7',
                  backgroundColor: Exide ? '#dae1f1' : '#fff',
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.medium,
                    color: Exide ? '#1054ee' : '#b8afc7',
                  }}>
                  Exide
                </Text>
              </View>
            </TouchableOpacity>
  
            <TouchableOpacity
              onPress={() => {
                setAmaron(false);
                setExide(false);
                setAlternator(true);
              }}>
              <View
                style={{
                  ...styles.ServiceButton_Style,
                  borderColor: Alternator ? '#1054ee' : '#b8afc7',
                  backgroundColor: Alternator ? '#dae1f1' : '#fff',
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.medium,
                    color: Alternator ? '#1054ee' : '#b8afc7',
                  }}>
                 Alternator
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        {/* ---------------------Component Change Button End------------------------------------------ */}
  
        <View
          style={{
            borderWidth: moderateScale(0.6),
            marginVertical: moderateScale(10),
            borderColor: '#eeecf4',
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Amaronbatteries />
          <View style={{height: moderateScale(5), backgroundColor: '#e3dee1'}} />
  
          <Exidebatteries />
          <View style={{height: moderateScale(5), backgroundColor: '#e3dee1'}} />
  
          <Alternatorparts />
          <View style={{height: moderateScale(5), backgroundColor: '#e3dee1'}} />
  
          <KnowYourCarBattery/>
        </ScrollView>
      </Container>
    );
  };
  
  export default CuratedCustomService;
  
  const styles = StyleSheet.create({
    ServiceButton_view_Style: {
      flexDirection: 'row',
      borderColor: '#1054ee',
    },
    ServiceButton_Style: {
      borderWidth: moderateScale(1),
      padding: moderateScale(7),
      borderRadius: moderateScale(10),
      marginLeft: moderateScale(5),
      // borderColor: "#1054ee",
      // backgroundColor: "#dae1f1"
    },
    bannerIMG_view: {},
    bannerIMG_image: {
      width: moderateScale(330),
      height: moderateScale(150),
    },
  });
  