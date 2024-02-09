import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppBar, Icon, useTheme} from 'react-native-basic-elements';
import NavigationService from '../../Services/Navigation';
import {FONTS} from '../../Constants/Fonts';
import {moderateScale} from '../../Constants/PixelRatio';

const BackHeader = ({title = '',}) => {
    const colors=useTheme()
  return (
    <AppBar.Back
      style={{ height:moderateScale(50),elevation:3}}
      title={title}
      titlePosition="left"
      titleStyle={{fontFamily: FONTS.bold, fontSize: 16, color: colors.primaryFontColor}}
      onLeftIconPress={() => NavigationService.back()}
      icon={{
        name: 'arrow-back-outline',
        type: 'Ionicon',
        size: 20,
      }}
    
    />
    
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  backbuttonCircle: {
    height: moderateScale(23),
    width: moderateScale(23),
    color: '#F0F0F0',
  },
 
});
