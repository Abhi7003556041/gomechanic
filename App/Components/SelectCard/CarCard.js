import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { Pressable } from 'react-native'

const CarCard = ({carImg,toggleModal,brandId}) => {
  return (
    <Pressable 
    style={{
      width:'33%',
      justifyContent:'center',
      alignItems:'center'
    }}
    onPress={()=>toggleModal(brandId)}>
      <Image style={styles.marutiStyle} source={{uri:carImg}} resizeMode='contain'/>
    </Pressable>
  )
}

export default CarCard

const styles = StyleSheet.create({
    marutiStyle:{
        height:moderateScale(60),
        width:moderateScale(60),
        marginVertical:moderateScale(10),
        // width:'30%'
        // marginRight:moderateScale(10)
      }
})