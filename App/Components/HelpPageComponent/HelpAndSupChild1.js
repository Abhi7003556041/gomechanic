import {ScrollView, StyleSheet, Text, Touchable, View} from 'react-native';
import React from 'react';
import {Card, Container, Icon} from 'react-native-basic-elements';
import BackHeader from '../Header/BackHeader';
import {moderateScale} from '../../Constants/PixelRatio';
import {Image} from 'react-native';
import {FONTS} from '../../Constants/Fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NavigationService from '../../Services/Navigation';

const HelpAndSupChild1 = () => {
  const data = [
    {
      text1: 'What is GoMechanic?',
      icon: (
        <Icon
          name="right"
          type="AntDesign"
          style={{paddingVertical: moderateScale(10)}}
        />
      ),
    },
    {
      text1: 'What are the services offered by GoMechanic?',
      icon: (
        <Icon
          name="right"
          type="AntDesign"
          style={{paddingVertical: moderateScale(10)}}
        />
      ),
    },
    {
      text1: 'What are the services offered by GoMechanic?',
      icon: (
        <Icon
          name="right"
          type="AntDesign"
          style={{paddingVertical: moderateScale(10)}}
        />
      ),
    },
    {
      text1: 'What are the services offered by GoMechanic?',
      icon: (
        <Icon
          name="right"
          type="AntDesign"
          style={{paddingVertical: moderateScale(10)}}
        />
      ),
    },
  ];
  return (
    <>
      <View style={{...styles.Main_header_View}}>
        <TouchableOpacity onPress={() => NavigationService.back()}>
          <Icon
            name="arrowleft"
            type="AntDesign"
            color="#fff"
            style={{paddingVertical: moderateScale(10)}}
          />
        </TouchableOpacity>
      </View>
      <View style={{...styles.Main_container}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <View style={{...styles.Main_Card}}> */}
          {data?.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  NavigationService.navigate('HelpAndSupportChild2')
                }>
                <View
                  style={{
                    ...styles.table,
                  }}>
                  <View style={{paddingLeft: moderateScale(25)}}>
                    <Text
                      numberOfLines={2}
                      style={{
                        maxWidth: '95%',
                        color: '#000',
                        fontFamily: FONTS.semibold,
                      }}>
                      {item.text1}
                    </Text>
                  </View>
                  <Icon
                    name="right"
                    type="AntDesign"
                    // color="#fff"
                    style={{paddingVertical: moderateScale(10)}}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
          {/* </View> */}
        </ScrollView>
      </View>
    </>
  );
};

export default HelpAndSupChild1;

const styles = StyleSheet.create({
  Main_container: {
    paddingHorizontal: moderateScale(10),
    position:"absolute",
    width:"90%",
    alignSelf:"center",
    top:40
  },
  Main_header_View: {
    height: moderateScale(100),
    backgroundColor: 'red',
    paddingLeft: moderateScale(10),
    // position:"absolute"
  },
  helpImage: {
    height: moderateScale(55),
    width: '20%',
  },
  Main_Card: {
    borderWidth: moderateScale(0.3),
    // position: 'absolute',
    // height:moderateScale(500),
    // backgroundColor: 'green',
  },
  table: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: moderateScale(0.3),
    alignItems: 'center',
    height: moderateScale(55),
    paddingTop: moderateScale(5),
    backgroundColor: '#fff',
    // position: 'absolute',
  },
});
