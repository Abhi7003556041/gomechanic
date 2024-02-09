//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { COLORS } from '../../Constants/Colors';
import { moderateScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';
import Icon, { IconType } from '../Icon';

// create a component
const HomeHeader = ({ defaultButtons = true }) => {
    const { userData, login_status } = useSelector(state => state.User);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.headerColor}
                barStyle='dark-content'
            />
            <View
                style={{
                    height: moderateScale(55),
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Image
                    source={require('../../Assets/images/logo.png')}
                    style={{
                        height: moderateScale(45),
                        width: moderateScale(45)
                    }}
                    resizeMode='contain'
                />

                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    {
                        defaultButtons ?
                            <View>
                                <TouchableOpacity
                                    style={styles.iconButton}
                                    onPress={() => NavigationService.navigate('HomeSearch')}
                                >
                                    <Icon
                                        type={IconType.Feather}
                                        name='search'
                                        color={COLORS.primaryFontColor}
                                        size={moderateScale(15)}
                                    />
                                </TouchableOpacity>

                                {
                                    login_status ?
                                        <>
                                            <TouchableOpacity
                                                style={styles.iconButton}
                                            >
                                                <Icon
                                                    type={IconType.AntDesign}
                                                    name='shoppingcart'
                                                    color={COLORS.primaryFontColor}
                                                    size={moderateScale(15)}
                                                />
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                style={styles.iconButton}
                                            >
                                                <Icon
                                                    type={IconType.MaterialIcon}
                                                    name='favorite-outline'
                                                    color={COLORS.primaryFontColor}
                                                    size={moderateScale(15)}
                                                />
                                            </TouchableOpacity>
                                        </>
                                        :
                                        null
                                }
                            </View>
                            :
                            null
                    }

                    
                </View>

            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.headerColor,
    },
    iconButton: {
        height: moderateScale(30),
        width: moderateScale(30),
        borderRadius: moderateScale(15),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.pageBackgroundColor,
        marginLeft: moderateScale(7)
    }
});

//make this component available to the app
export default HomeHeader;
