import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, Icon } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const DesignerServiceCard = () => {
  return (

    <Container style={{ ...styles.mainContainerStyle }}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {/* --------------------------------------slider 1 Start---------------------------------------------- */}
        <View style={{ alignItems: "center" }}>
          <View>
            <Image
              style={{ ...styles.sliderIMG }}
              source={require('../../Assets/images/mack.jpg')}
            />
            <View style={{ flexDirection: "row", position: "absolute", paddingTop: moderateScale(20), paddingLeft: moderateScale(10) }}>
              <Text style={{ fontFamily: FONTS.bold, color: "#fff" }}>MILES MEMBERSHIP {"\n"}COMBO
                <Icon
                  name="caretright"
                  type='AntDesign'
                  color="red"
                />
              </Text>
            </View>
          </View>
          <View style={{ ...styles.arrow_View_Style }}>
            <Icon
              name="trending-up"
              type='Feather'
              color="green"
            />
            <Text style={{ padding: moderateScale(5), textAlign: "center" }}>Added in 8470 Carts</Text>
          </View>
        </View>
        {/* --------------------------------------slider 1 END---------------------------------------------- */}
        {/* --------------------------------------slider 2 Start---------------------------------------------- */}
        <View style={{ alignItems: "center" }}>
          <View>
            <Image
              style={{ ...styles.sliderIMG }}
              source={require('../../Assets/images/mack2.jpg')}
            />
            <View style={{ flexDirection: "row", position: "absolute", paddingTop: moderateScale(20), paddingLeft: moderateScale(10) }}>
              <Text style={{ fontFamily: FONTS.bold, color: "#fff" }}>USED CAR {"\n"}COMBO
                <Icon
                  name="caretright"
                  type='AntDesign'
                  color="red"
                />
              </Text>
            </View>
          </View>
          <View style={{ ...styles.arrow_View_Style }}>
            <Icon
              name="trending-up"
              type='Feather'
              color="green"
            />
            <Text style={{ padding: moderateScale(5), textAlign: "center" }}>Added in 8470 Carts</Text>
          </View>
        </View>
        {/* --------------------------------------slider 2 END---------------------------------------------- */}

      </ScrollView>
    </Container>
  )
}

export default DesignerServiceCard

const styles = StyleSheet.create({
  mainContainerStyle: {
    padding: moderateScale(5)
  },
  sliderIMG: {
    width: moderateScale(250),
    height: moderateScale(70),
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  arrow_View_Style: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: moderateScale(5),
    backgroundColor: "#fff",
    width: moderateScale(250),
    height: moderateScale(40),
    borderWidth: moderateScale(0.2),
    borderBottomLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
    paddingLeft: moderateScale(10)
  }
})