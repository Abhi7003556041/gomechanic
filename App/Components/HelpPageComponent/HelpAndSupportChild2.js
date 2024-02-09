import {ScrollView, StyleSheet, Text, Touchable, View} from 'react-native';
import React from 'react';
import {Card, Container, Icon} from 'react-native-basic-elements';
import BackHeader from '../Header/BackHeader';
import {moderateScale} from '../../Constants/PixelRatio';
import {Image} from 'react-native';
import {FONTS} from '../../Constants/Fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NavigationService from '../../Services/Navigation';

const HelpAndSupportChild2 = () => {
  const data = [
    {
      text1:
        'What are the services offered by GoMechanic What are the services offered by GoMechanic,What are the services offered by GoMechanic What are the services offered by GoMechanic?',
    },
  ];
  return (
    <>
      <View style={{...styles.Main_header_View}}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => NavigationService.back()}>
            <Icon
              name="arrowleft"
              type="AntDesign"
              color="#fff"
              style={{paddingVertical: moderateScale(10)}}
            />
          </TouchableOpacity>
          <Text style={{color: '#fff', fontSize: moderateScale(15)}}>
            What is GoMechanic?
          </Text>
        </View>
      </View>
      <View style={{...styles.Main_container}}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
                  <Text
                    style={{
                      color: '#000',
                      fontFamily: FONTS.semibold,
                      paddingHorizontal: moderateScale(10),
                    }}>
                    {item.text1}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default HelpAndSupportChild2;

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
    // flexDirection: 'row',
  },
  helpImage: {
    height: moderateScale(55),
    width: '20%',
  },
  Main_Card: {
    borderWidth: moderateScale(0.3),
    // backgroundColor: 'green',
  },
  table: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: moderateScale(0.3),
    // alignItems: 'center',
    height: moderateScale(150),
    paddingTop: moderateScale(5),
    backgroundColor: '#fff',
    // position: 'absolute',
  },
});
