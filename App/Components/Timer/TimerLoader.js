import React, { useEffect, useState } from 'react';
const ON = 'on';
const OFF = 'off';
const defaultTimerValue = 3;
const defaultTimerInterval = 1000;
const defaultTimeOutCallback = () => { };
function useCountDownTimer({
    initialValue = defaultTimerValue,
    interval = defaultTimerInterval,
    onTimeOut = defaultTimeOutCallback
} = {}) {
    const [timer, setTimer] = useState(initialValue);
    const [timerStatus, setTimerStatus] = useState(OFF);
    const [intervalID, setIntervalID] = useState('');
    const [Pause, setPause] = useState(false)

    function convertStoMs(seconds) {
        let minutes = Math.floor(seconds / 60);
        let extraSeconds = seconds % 60;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
        return minutes + " : " + extraSeconds;
    }
    const FormatedTimmer = convertStoMs(timer)
    useEffect(() => {
        if (Pause) {
            if (intervalID) {
                clearInterval(intervalID);
                onTimeOut();
            }
            setTimerStatus(OFF);
            return;
        }

        if (timer === 0) {
            if (intervalID) {
                clearInterval(intervalID);
                onTimeOut();
            }
            setTimerStatus(OFF);
            return;
        }
        if (timerStatus === OFF) {
            const timerID = setInterval(
                () => setTimer((currentTime) => currentTime - 1),
                interval,
            );
            setIntervalID(timerID);
            setTimerStatus(ON);
        }

        () => {
            clearInterval(intervalID);
        };
    }, [timer, interval, intervalID, timerStatus, onTimeOut, Pause]);

    function resetTimer() {
        setPause(false)
        setTimer(initialValue);
    }
    return { FormatedTimmer, timer, setTimer, resetTimer, setPause };
}

// Example Code for using the above hook

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Timmer = ({ timmer = 300 }) => {
    const { FormatedTimmer, timer, resetTimer, setTimer, setPause } = useCountDownTimer({ initialValue: timmer });
    useEffect(() => {
        setTimer(100)
    }, [])
    function convertStoMs(seconds) {
        let minutes = Math.floor(seconds / 60);
        let extraSeconds = seconds % 60;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
        return minutes + " : " + extraSeconds;
    }
    // [0,1,2,3,4,5]
    return (
        <View style={styles.body}>
            <Text>{convertStoMs(timer) + "====" + FormatedTimmer}</Text>
            <TouchableOpacity
                onPress={() => {
                    resetTimer();
                }}>
                <Text>Reset</Text>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setTimer(60);
                }}>
                <Text>Set</Text>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setPause(true);
                }}>
                <Text>Set</Text>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setPause(false);
                }}>
                <Text>ReSet</Text>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
})
export default useCountDownTimer;