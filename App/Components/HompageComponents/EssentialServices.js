import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Container, Icon} from 'react-native-basic-elements';
import {moderateScale} from '../../Constants/PixelRatio';
import {FONTS} from '../../Constants/Fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NavigationService from '../../Services/Navigation';

const EssentialServices = () => {
  const data = [
    {
      image: require('../../Assets/images/BranchIMG2.jpg'),
      title: 'Standard Service',
      icon: (
        <Icon name="rightcircle" type="AntDesign" color="#1e215b" size={12} />
      ),
      text: 'Standard Service',
    },
    {
      image: require('../../Assets/images/BranchIMG3.jpg'),
      title: 'Wheel Lift Tow',
      icon: (
        <Icon name="rightcircle" type="AntDesign" color="#1e215b" size={12} />
      ),
      text: 'Wheel-Lift Tow',
    },
    {
      image: require('../../Assets/images/BranchIMG1.jpg'),
      title: 'Clutch Set Replacement',
      icon: (
        <Icon name="rightcircle" type="AntDesign" color="#1e215b" size={12} />
      ),
      text: 'Clutch Set Replacement',
    },
    {
      image: require('../../Assets/images/BranchIMG4.jpg'),
      title: 'Battery Replacement',
      icon: (
        <Icon name="rightcircle" type="AntDesign" color="#1e215b" size={12} />
      ),
      text: 'Battery Replacement',
    },
  ];

  return (
    <Container style={{...styles.mainContainer}}>
      <View style={{...styles.main_View}}>
        {data?.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() =>
                NavigationService.navigate('ServiceSingleCardDetail')
              }>
              <View style={{flexDirection: 'column'}}>
                <View>
                  <Image style={{...styles.branch_IMG}} source={item.image} />
                  <Text numberOfLines={3} style={{...styles.branch_Text}}>
                    {item.title}
                    {item.icon}
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: 'center',
                    paddingVertical: moderateScale(10),
                  }}>
                  <Text
                    style={{
                      fontFamily: FONTS.medium,
                      color: '#000',
                      fontSize: moderateScale(11),
                    }}>
                    {item.text}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </Container>
  );
};

export default EssentialServices;

const styles = StyleSheet.create({
  mainContainer: {
    padding: moderateScale(10),
  },
  branch_IMG: {
    height: moderateScale(100),
    width: moderateScale(150),
    // resizeMode: 'contain',
    borderRadius: moderateScale(10),
  },
  branch_Text: {
    fontFamily: FONTS.medium,
    color: '#1e215b',
    position: 'absolute',
    padding: moderateScale(10),
    marginTop: moderateScale(10),
    fontSize: moderateScale(11),
    width: moderateScale(100),
  },

  main_View: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(5),
    flexWrap: 'wrap',
  },
});
