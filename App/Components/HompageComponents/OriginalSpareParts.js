import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const OriginalSpareParts = () => {
    const data = [{
        image: require('../../Assets/images/BrandIMGE6.png')
    },

    {
        image: require('../../Assets/images/BrandIMGE1.png')
    },
    {
        image: require('../../Assets/images/BrandIMGE2.png')
    },
    {
        image: require('../../Assets/images/BrandIMGE3.png')
    },
    {
        image: require('../../Assets/images/BrandIMGE4.png')
    },
    {
        image: require('../../Assets/images/BrandIMGE5.png')
    },
    ]

    return (
        <Container style={{ ...styles.mainContainer }}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                {data?.map((item, index) => {
                    return (
                        <View style={{ ...styles.Brand_View }}>
                            <Image
                                style={{ ...styles.Brand_IMG }}
                                source={item.image}
                            />
                        </View>

                    )
                })}

            </ScrollView>
        </Container>
    )
}
export default OriginalSpareParts

const styles = StyleSheet.create({
    mainContainer: {
        padding: moderateScale(10)
    },
    Brand_View: {
        borderWidth: moderateScale(0.5),
        padding: moderateScale(1),
        margin: moderateScale(5),
        borderRadius: moderateScale(5),
        borderColor: "#faf8fc",
        backgroundColor: "#faf8fc"
    },
    Brand_IMG: {
        width: moderateScale(60),
        height: moderateScale(45),
        // marginBottom: moderateScale(5)
    },

})