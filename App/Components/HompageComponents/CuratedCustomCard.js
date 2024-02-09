import {
  BackHandler,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Card, Container, Icon} from 'react-native-basic-elements';
import {moderateScale} from '../../Constants/PixelRatio';
import {FONTS} from '../../Constants/Fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NavigationService from '../../Services/Navigation';

const CuratedCustomCard = () => {
  const data1 = [
    {
      Image: require('../../Assets/images/curatedIMG7.png'),
      name: 'Batteries',
    },
    {
      Image: require('../../Assets/images/curatedIMG9.png'),
      name: 'AC Parts',
    },
    {
      Image: require('../../Assets/images/curatedIMG10.png'),
      name: 'Tyres',
    },
    {
      Image: require('../../Assets/images/curatedIMG3.png'),
      name: 'Suspensions',
    },
    {
      Image: require('../../Assets/images/curatedIMG1.png'),
      name: 'Lights',
    },
    {
      Image: require('../../Assets/images/curatedIMG2.png'),
      name: 'Body Parts',
    },
    {
      Image: require('../../Assets/images/curatedIMG14.png'),
      name: 'Seat Covers',
    },
    {
      Image: require('../../Assets/images/curatedIMG13.png'),
      name: 'Car Detailing',
    },
  ];
  const data2 = [
    {
      Image: require('../../Assets/images/curatedIMG6.png'),
      name: 'Brakes',
    },
    {
      Image: require('../../Assets/images/curatedIMG5.png'),
      name: 'Clutch',
    },
    {
      Image: require('../../Assets/images/curatedIMG4.png'),
      name: 'Steering',
    },
    {
      Image: require('../../Assets/images/curatedIMG12.png'),
      name: 'GoConnect 2.0',
    },
    {
      Image: require('../../Assets/images/curatedIMG11.png'),
      name: 'Android Screens',
    },
    {
      Image: require('../../Assets/images/curatedIMG8.png'),
      name: 'Glasses',
    },
    {
      Image: require('../../Assets/images/curatedIMG16.png'),
      name: 'Car Spa',
    },
    {
      Image: require('../../Assets/images/curatedIMG15.png'),
      name: 'Side Mirror',
    },
  ];

  return (
    <Container style={{...styles.mainContainerStyle}}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {/* -------------------------------slider 1---------------------------------- */}
        <View style={{flexDirection: 'column'}}>
          <View style={{...styles.main_View}}>
            {data1?.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={()=>NavigationService.navigate("CuratedCustomService")}
                >
                  <View style={{...styles.service_View}}>
                    <Image
                      style={{
                        width: moderateScale(60),
                        height: moderateScale(60),
                      }}
                      source={item.Image}
                    />
                    <Text style={{...styles.service_text}}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          {/* -------------------------------slider 2---------------------------------- */}

          <View style={{...styles.main_View}}>
            {data2?.map((item, index) => {
              return (
                <TouchableOpacity
                onPress={() => NavigationService.navigate("ServicePage")}

                >
                  <View style={{...styles.service_View}}>
                    <Image
                      style={{
                        width: moderateScale(60),
                        height: moderateScale(60),
                      }}
                      source={item.Image}
                    />
                    <Text style={{...styles.service_text}}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default CuratedCustomCard;

const styles = StyleSheet.create({
  mainContainerStyle: {
    // paddingVertical: moderateScale(50)
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
  main_View: {
    paddingLeft: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
