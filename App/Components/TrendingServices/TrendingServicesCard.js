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
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NavigationService from '../../Services/Navigation';

const TrendingServicesCard = () => {
  const data = [
    {
      title: 'Periodic Car Services',
      text1: 'Improves Car Performance',
      image: require('../../Assets/images/pngegg.png'),
      count: '12534',
      counttext: 'Bookings near you',
    },
    {
      title: 'Clutch & Bumpers',
      text1: 'Ensure Smoother Gearshift',
      image: require('../../Assets/images/pngegg2.png'),
      count: '12534',
      counttext: 'Bookings near you',
    },
    {
      title: 'Periodic Car Services',
      text1: 'Improves Car Performance',
      image: require('../../Assets/images/pngegg.png'),
      count: '12534',
      counttext: 'Bookings near you',
    },
  ];

  return (
    <Container style={{...styles.mainContainerStyle}}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {/* ---------------------------------Card 1------------------------------------------------ */}
        {data?.map((item, index) => {
          return (
            <TouchableOpacity
            onPress={()=>NavigationService.navigate("GoMechanicAssurance")}
            >
              <LinearGradient
                colors={['#fff', '#c7f6f7', '#93baff']}
                style={{...styles.cardStyle}}>
                <Text numberOfLines={2} style={{...styles.CardTitle}}>
                  {item.title}
                </Text>
                <View style={{...styles.CardText_View}}>
                  <Text style={{...styles.CardText}}>{item.text1}</Text>
                </View>

                <Image style={{...styles.cardIMG_Style}} source={item.image} />
                <View style={{...styles.arrow_View_Style}}>
                  <Icon name="trending-up" type="Feather" color="green" />
                  <Text numberOfLines={2} style={{...styles.count_text_style}}>
                    <Text style={{color: 'green'}}>{item.count}</Text>{' '}
                    {item.counttext}
                  </Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default TrendingServicesCard;

const styles = StyleSheet.create({
  mainContainerStyle: {
    // paddingVertical: moderateScale(50)
  },
  cardStyle: {
    height: moderateScale(280),
    width: moderateScale(190),
    // backgroundColor: "red",
    marginLeft: moderateScale(20),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    borderWidth: moderateScale(0.5),
    borderColor: '#f4f1f6',
  },
  cardIMG_Style: {
    width: moderateScale(155),
    height: moderateScale(155),
  },
  CardTitle: {
    fontFamily: FONTS.medium,
    fontSize: moderateScale(20),
    textAlign: 'center',
    color: '#000',
    maxWidth: '100%',
  },
  CardText_View: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: moderateScale(1),
    backgroundColor: '#fff',
    borderRadius: moderateScale(5),
  },
  CardText: {
    fontFamily: FONTS.semibold,
    padding: moderateScale(7),
    fontSize: moderateScale(11),
    color: '#000',
  },
  arrow_View_Style: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(15),
    backgroundColor: '#fff',
    borderRadius: moderateScale(5),
    width: moderateScale(160),
    position: 'absolute',
    bottom: moderateScale(0),
    marginBottom: moderateScale(10),
  },
  count_text_style: {
    maxWidth: moderateScale(100),
    padding: moderateScale(5),
    textAlign: 'center',
  },
});
