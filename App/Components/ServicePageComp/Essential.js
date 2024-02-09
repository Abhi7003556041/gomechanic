import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'

const Essential = ({Data,AnotherData}) => {
  const data = [
    {
      image: require('../../Assets/images/mack.jpg'),
      title: "Engine Oil Replacement",
    },
    {
      image: require('../../Assets/images/mack2.jpg'),
      title: "Oil Filter Replacement",
    },
    {
      image: require('../../Assets/images/mack.jpg'),
      title: "Air Filter Cleaning",
    },
    {
      image: require('../../Assets/images/mack2.jpg'),
      title: "Engine Oil Replacement",
    },
    {
      image: require('../../Assets/images/mack.jpg'),
      title: "Engine Oil Replacement",
    },

  ]
  return (
    <Container>
      <Text style={{ fontFamily: FONTS.bold, paddingTop: moderateScale(20), paddingLeft: moderateScale(20), color: "#000" }}>What's included</Text>

      <Text style={{ fontFamily: FONTS.medium, paddingTop: moderateScale(10), paddingBottom: moderateScale(10), marginLeft: moderateScale(20), color: "#000" }}>Essential Services</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: moderateScale(10) }}>

          {Data?.map((item, index) => {
            return (
              <View style={{ flexDirection: "column", paddingRight: moderateScale(5) }}>
                <Image
                  style={{ ...styles.serviceIMG_image }}
                  source={{uri:item.service_benefit_image}}
                />
                <Text numberOfLines={2}
                  style={{ maxWidth: moderateScale(100),textAlign:'center', fontSize: moderateScale(12), fontFamily: FONTS.medium }}>{item.service_benefit_name}</Text>
              </View>
            )
          })}
        </View>
      </ScrollView>
      {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <Text style={{ fontFamily: FONTS.medium, paddingTop: moderateScale(10), paddingBottom: moderateScale(10), marginLeft: moderateScale(20), color: "#000" }}>Performamce Services</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: moderateScale(10) }}>
          {AnotherData?.map((item, index) => {
            return (
              <View style={{ paddingRight: moderateScale(10), }}>
                <Image
                  style={{ ...styles.serviceIMG_image }}
                  source={{uri:item.service_benefit_image}}
                />
                <Text numberOfLines={2} style={{ maxWidth: moderateScale(100), textAlign:'center',fontSize: moderateScale(11), fontFamily: FONTS.medium }}>{item.service_benefit_name}</Text>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </Container>
  )
}

export default Essential

const styles = StyleSheet.create({
  serviceIMG_image: {
    height: moderateScale(100),
    width: moderateScale(100),
    borderRadius: moderateScale(5),
   
  }

})