import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppBar, Icon, useTheme} from 'react-native-basic-elements';
import NavigationService from '../../Services/Navigation';
import {FONTS} from '../../Constants/Fonts';
import {moderateScale} from '../../Constants/PixelRatio';

const ServicePageHeader = ({title = '',}) => {
    const colors=useTheme()
  return (
    <AppBar.Back
      // style={{ elevation:3}}
      title={title}
      titlePosition="left"
      titleStyle={{fontFamily: FONTS.semibold, fontSize: 15, color: colors.primaryFontColor}}
      onLeftIconPress={() => NavigationService.back()}
      icon={{
        name: 'arrow-back-outline',
        type: 'Ionicon',
        size: 20,
      }}
    
    />
    
  );
};

export default ServicePageHeader;

const styles = StyleSheet.create({
  backbuttonCircle: {
    height: moderateScale(23),
    width: moderateScale(23),
    color: '#F0F0F0',
  },
 
});
