import { StyleSheet, Text, View, Image, StatusBar, ScrollView, Pressable, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import DayCard from './DayCard';
import { useTheme } from 'react-native-basic-elements';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';

function getTotalYearAllDate(Year = new Date().getFullYear()) {
    let FullArray = []
    let AllMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (let cMonth = 0; cMonth < 12; cMonth++) {
        let mDetails = []
        let TotalDay = new Date(Year, cMonth + 1, 0).getDate()
        for (let i = 0; i < TotalDay; i++) {
            let thisDay = new Date(Year, cMonth, i + 1)
            mDetails = [...mDetails, thisDay]
        }
        FullArray = [...FullArray, {
            year: Year,
            month: AllMonth[cMonth],
            monthDetails: mDetails
        }]
    }
    // return JSON.stringify(FullArray)
    return FullArray
}

const Clender = ({ onSetDate = () => { }, func, HomeDate }) => {
    const colors = useTheme()
    const MonthRef = useRef(null)
    const [AllDate, setAllDate] = useState(getTotalYearAllDate())
    const [CurrentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [Currentear, setCurrentear] = useState(new Date().getFullYear())
    const [SelectedDate, setSelectedDate] = useState(new Date(new Date().toDateString()))
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            let todayDate = new Date();
            // console.log({ index: todayDate.getDate() - 1 })
            // console.log('start');
            MonthRef.current.scrollToIndex({
                index: todayDate.getDate() - 1,
                animated: true,
            })
        }, 100)
        // ref.current = SelectedDate
    }, [])
    useEffect(() => {
        if (SelectedDate != '') {

            onSetDate(SelectedDate)

        }
    }, [SelectedDate])
    // useEffect(() => {
    //     if (HomeDate) {
    //         setSelectedDate(HomeDate)
    //     }
    // }, [])
    useEffect(() => {
        setAllDate(getTotalYearAllDate(Currentear))

    }, [Currentear])

    useEffect(() => {
        // setTimeout(() => {
        //     let todayDate = new Date();
        //     console.log({ index: todayDate.getDate() - 1 })
        //     MonthRef.current.scrollToIndex({  index: 20,  viewPosition: 0.5 })
        // }, 100);
        if (HomeDate) {
            setSelectedDate(HomeDate)
            setCurrentMonth(HomeDate.getMonth())
            setCurrentear(HomeDate.getFullYear())
        }
        // else if(ref.current!=null){
        //     let d = new Date(ref.current)
        //     setSelectedDate(d)
        // }
        // else {
        //     let d = new Date(new Date().toDateString())
        //     setSelectedDate(d)
        // }


    }, [])
    const showDatePicker = () => {
        console.log('first')
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // console.warn('A date has been picked: ', date);
        let d = new Date(new Date(date).toDateString())

        setSelectedDate(d)
        setCurrentMonth(d.getMonth())
        setCurrentear(d.getFullYear())
        setDatePickerVisibility(false);
        setTimeout(() => {

            MonthRef.current.scrollToIndex({
                index: d.getDate() - 1,
                animated: true,
            })
        }, 100)
    };
    const getItemLayout = (data, index) => {
        // console.log("AllDate[CurrentMonth].monthDetails.length", AllDate[CurrentMonth].monthDetails.length, 60 * index, index)
        return { length: AllDate[CurrentMonth].monthDetails.length, offset: 85 * index, index }
    }


    return (
        <View style={{
            // height: 258,
            width: "95%",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            marginHorizontal: 10
            // marginBottom: 50
        }}>
            {
                console.log('moment(SelectedDate).format', moment(SelectedDate).format('DD MMMM, YYYY'))
            }
            <View style={{
                flexDirection: "row",
                marginTop: 10,
                // justifyContent: 'space-between',
                // flex: 1,
            }}>
                <Text
                    onPress={() => showDatePicker()}
                    style={{
                        fontSize: moderateScale(14),
                        color: colors.primaryThemeColor,
                        fontFamily: FONTS.medium,
                        marginTop: 5,
                    }}>
                    {moment(SelectedDate).format('DD MMMM, YYYY')}
                </Text>
                <View style={{ flex: 1 }} />
                <Pressable onPress={() => {
                    if (CurrentMonth == 0) {
                        setCurrentear(s => s - 1)
                        setCurrentMonth(11)
                    } else {
                        setCurrentMonth(s => s - 1)
                    }
                }}

                    style={{
                        // width: 30,
                        borderRadius: 30,
                        height: 30,
                        // backgroundColor: "#rgba(228, 14, 104, 0.2)",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 3


                    }}>
                    <AntDesign
                        name="left"
                        color={colors.primaryThemeColor}
                        size={15}
                    />

                </Pressable>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    minimumDate={new Date(new Date().toDateString()) }
                // date={SelectedDate}
                />

                <Pressable
                    onPress={() => {
                        if (CurrentMonth == 11) {
                            setCurrentear(s => s + 1)
                            setCurrentMonth(0)
                        } else {
                            setCurrentMonth(s => s + 1)
                        }
                    }}
                    //  onPress={() => setCurrentMonth(s => s + 1)} 
                    style={{
                        // width: 30,
                        borderRadius: 30,
                        height: 30,
                        // backgroundColor: "rgba(228, 14, 104, 0.2)",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: moderateScale(15)

                    }}>
                    <AntDesign
                        name="right"
                        color={colors.primaryThemeColor}
                        size={15}
                    />
                </Pressable>

            </View>
            {/* <ScrollView horizontal style={{

            }}> */}
            {AllDate.map((month, MonthIndex) => {
                return <>
                    {CurrentMonth == MonthIndex ?
                        <View style={{
                            marginTop: 20,
                            // height:200
                        }}>

                            <FlatList
                                ref={MonthRef}
                                data={month.monthDetails}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                getItemLayout={getItemLayout}
                                keyExtractor={(item, index) => index}
                                renderItem={({ item, index }) => {
                                    return <DayCard SelectedDate={SelectedDate} setSelectedDate={(a) =>{
                                        func(a)
                                        setSelectedDate(a)
                                    } 
                                }
                                 day={item} />
                                }}
                            />
                        </View>
                        : null}
                </>
            })}
            {/* </ScrollView> */}



        </View>
    )
}

// const forwardref = React.forwardRef(Clender)
export default Clender

const styles = StyleSheet.create({})
