import { View, Text, Image } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const NodataFound = ({title}) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: moderateScale(100),
            }}>
            <Image
                source={require('../../Assets/images/nodata.png')}
                style={{
                    height: moderateScale(160),
                    width: moderateScale(160)
                }}

            />
            <Text
                style={{
                    color: 'blue',
                    fontFamily: FONTS.semibold,
                    marginTop: 5
                }}>
                {`No ${title ? title : 'data'} Found`}
            </Text>
        </View>
    )
}

export default NodataFound