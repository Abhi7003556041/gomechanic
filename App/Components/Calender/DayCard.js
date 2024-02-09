import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native';
import { useTheme } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import Toast from 'react-native-simple-toast'

var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const DayCard = ({ SelectedDate, day, setSelectedDate }) => {
    const colors = useTheme()
    return (
        <Pressable onPress={() => 
            {
                if(day >= new Date(new Date().toDateString())){

                    setSelectedDate(day)
                }
                
            } 
            }
        style={{
            width: 80,
            borderRadius: moderateScale(10),
            height: 80,
            backgroundColor: JSON.stringify(SelectedDate) == JSON.stringify(day) ? colors.primaryThemeColor :
            day < new Date(new Date().toDateString()) ? '#f0f0f0' :  "transparent",
            justifyContent: "center",
            marginRight: 10,

            borderWidth: moderateScale(0.5),
            borderColor:'#EBEBEB',
            alignItems:'center',
            // marginTop:5
            paddingTop:moderateScale(5)

            
        }}
        disabled={day < new Date(new Date().toDateString()) ? true :false}
        >
            <Text
                style={{
                    textAlign: "center",
                    color: JSON.stringify(SelectedDate) == JSON.stringify(day) ? "#fff" : 
                    "rgba(0, 0, 0, 0.5)",
                    fontFamily: FONTS.regular,
                    fontSize: 13
                }}>

                {days[new Date(day).getDay()]}
            </Text>
            <Text
                style={{
                    textAlign: "center",
                    color: JSON.stringify(SelectedDate) == JSON.stringify(day) ? "#fff" :
                    day < new Date(new Date().toDateString()) ? 'grey' : colors.primaryThemeColor,
                    fontFamily: FONTS.semibold,
                    marginTop:moderateScale(10),
                    fontSize: 15
                }}>
                {new Date(day).getDate()}
            </Text>
            <Text
                style={{
                    textAlign: "center",
                    color: "rgba(0, 0, 0, 0.5)",
                    fontFamily: FONTS.regular,
                    fontSize: 10
                }}>
                {/* 6 */}
            </Text>

        </Pressable>
    )
}

export default DayCard

const styles = StyleSheet.create({})
