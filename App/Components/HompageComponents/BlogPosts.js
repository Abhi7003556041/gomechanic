import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'

const BlogPosts = () => {
  const data = [
    { image: require('../../Assets/images/BlogIMG1.jpg',) },
    { image: require('../../Assets/images/BlogIMG2.jpg',) },
    { image: require('../../Assets/images/BlogIMG3.jpg',) },
    { image: require('../../Assets/images/BlogIMG4.jpg',) },
    { image: require('../../Assets/images/BlogIMG5.jpg',) },
  ]
  return (
    <Container style={styles.maincontainer}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {data?.map((item, index) => {
          return (
            <Image
              style={{ ...styles.Image_style }}
              source={item.image}
            />
          )
        })}
      </ScrollView>
    </Container>
  )
}

export default BlogPosts

const styles = StyleSheet.create({
  maincontainer: {
    paddingTop: moderateScale(10)

  },
  Image_style: {
    width: moderateScale(250),
    height: moderateScale(150),
    // resizeMode: "contain",
    marginLeft: moderateScale(10),
    borderRadius: moderateScale(10)
  }

})