import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Modal,
  Platform,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import MapView, { Marker, Overlay } from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Geolocation from '@react-native-community/geolocation';
import { useEffect } from 'react';
// import { } from 'react-native-paper';
import Geocoder from 'react-native-geocoding';
import GoogleSearch from './GoogleSearch';
import { moderateScale } from '../../Constants/PixelRatio';
import { Icon, StatusBar } from 'react-native-basic-elements';
const { height, width } = Dimensions.get('window')

const GoogleMap = ({
  changeAddress = () => { },
  onClose = () => { },
  changeLongLat = () => { },
}) => {
  const [LoderStatus, setLoderStatus] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [Reigoin, setReigoin] = useState({
    // latitude: 37.78825,
    // longitude: -122.4324,
    // latitudeDelta: 0.0922,
    // longitudeDelta: 0.0421,
  });
  const [Address, setAddress] = useState('');
  async function sendLocation() {
    Geolocation.getCurrentPosition(info => {
      setReigoin({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    });
  }
  function submitAddress() {
    // latLong(Reigoin)
    changeAddress(Address);
    onClose();
    changeLongLat(Reigoin);
  }
  useEffect(() => {
    Geocoder.init("AIzaSyC-ki3ImgxYzo8K2OCH9yDthHWIWV1yfj4")
    sendLocation();

  }, []);
  async function SearchField(address) {
    setLoderStatus(true);
    console.log('address', address);
    fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${address}&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyC-ki3ImgxYzo8K2OCH9yDthHWIWV1yfj4`,
    )
      .then(response => response.json())
      .then(res => {
        console.log(address, JSON.stringify(res));
        // setAllFilds(res.predictions)
        setLoderStatus(false);
        setReigoin({
          latitude: res.candidates[0].geometry.location.lat,
          longitude: res.candidates[0].geometry.location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      })
      .catch(e => console.log(e));
  }

  useEffect(() => {
    // fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${Reigoin.latitude},${Reigoin.longitude}&key=AIzaSyC-ki3ImgxYzo8K2OCH9yDthHWIWV1yfj4`)
    // fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=37.78825,-122.4324&key=AIzaSyC-ki3ImgxYzo8K2OCH9yDthHWIWV1yfj4`)
    setAddress('');
    Geocoder.from({
      latitude: Reigoin.latitude,
      longitude: Reigoin.longitude,
    })
      .then(a => {
        console.log('aaa', JSON.stringify(a));
        console.log('aaa', a.results[0].formatted_address);
        setAddress(a.results[0].formatted_address);
        // fetch(`${a.url}`).then(res => console.log('address', res))
      })
      // .then((response) => response.json())
      // .then((data) => console.log('ddd', data))
      .catch(e => console.log(e));
  }, [Reigoin]);
  return (
    <View style={{
      
    }}>
      {Reigoin.latitude && Reigoin?.longitude ? (
        <View
          style={{
            // flex: 1,
            backgroundColor: '#fff',
            // position:'absolute',
            // top:0,
            height:height/2.4,
            width:'100%',
            zIndex:99999  
            
          }}>
          <StatusBar
            backgroundColor={'transparent'}
            barStyle={'dark-content'}
            translucent={false}
          />

          {/* <Pressable
            style={{
              width: '90%',
              height: 50,
              backgroundColor: '#fff',
              alignSelf: 'center',
              position: 'absolute',
              zIndex: 139,

              elevation: 4,
              paddingHorizontal: 15,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 50,
              marginTop: Platform.OS == 'ios' ? 40 : 50,
            }}>
            <Pressable
              onPress={() => onClose()}
              style={{
                height: 50,
                width: 40,
                // alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AntDesign name="arrowleft" size={24} color="#333" />
            </Pressable>
            <Pressable
              onPress={() => {
                setModalVisible(true);
              }}
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: '#999',
                  fontSize: 17,
                  fontWeight: '500',
                  flex: 1,
                }}>
                Search a Place
              </Text>
              <AntDesign name="search1" size={24} color="#333" />
            </Pressable>
          </Pressable> */}

          <View
            style={{
              width: '100%',
              backgroundColor: '#fff',
              paddingVertical: 0,
             
            }}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                height: moderateScale(45),
               
                // elevation: 1,
              }}>
              <EvilIcons
                name="location"
                color={'#000'}
                onPress={() => {
                  setModalVisible(true);
                }}
                style={{
                  marginLeft: 10,
                }}
                size={26}
              />

              {Address == '' ? (
                <View
                  style={{
                    flex: 1,
                  }}>
                  <ActivityIndicator
                    style={{ alignSelf: 'center' }}
                    color={'#000'}
                  />
                </View>
              ) : (
                <Text
                  numberOfLines={2}
                  style={{
                    color: '#000',
                    fontSize: 14,
                    flex: 1,
                    paddingHorizontal: 5,
                    maxWidth: '95%'
                  }}>
                  {Address}
                </Text>
              )}

            </View>
          </View>
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                position: 'absolute',
                width: 40,
                height: 40,
                // backgroundColor: "#fff",
                zIndex: 28998,
                top: '50%',
                left: '50%',
                transform: [{ translateX: -20 }, { translateY: -20 }],
              }}>
              <Image
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                }}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/149/149059.png',
                }}
              />
            </View>
            <Pressable
            style={{
              position:'absolute',
              bottom:15,
              right:20,
              height:28,
              width:28,
              backgroundColor:'#fff',
              zIndex:9999999,
              borderRadius:moderateScale(15),
              alignItems:'center',
              justifyContent:'center'
            }}
            onPress={()=>{
              sendLocation()
            }}
            >
               <Icon name="my-location" type="MaterialIcon" color="#000" size={24}/>
            </Pressable>
            {Reigoin.latitude && Reigoin?.longitude ? (
              <MapView
                onPress={e => console.log('tyytytyty',e)}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  // zIndex:99999999
                }}
                provider={MapView.PROVIDER_GOOGLE}
                initialRegion={Reigoin}
                region={Reigoin}
                onRegionChangeComplete={e => {
                  // console.log(e)
                  setReigoin(e);
                }}>
                {/* <Marker

                        key={2}
                        coordinate={Reigoin}
                        style={{
                            width: 40,
                            height: 40
                        }}
                   
                    >
                        <Image resizeMode='contain' style={{
                            width: 40,
                            height: 40,

                        }} source={{ uri: "https://cdn-icons-png.flaticon.com/512/149/149059.png" }} />
                    </Marker> */}
              </MapView>
            ) : (
              <ActivityIndicator />
            )}

          </View>
          

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            statusBarTranslucent={true}
            onRequestClose={() => {
              console.log('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <>
              <GoogleSearch
                SearchField={a => SearchField(a)}
                onClose={() => setModalVisible(false)}
              />
            </>
          </Modal>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator color="#000" size={'large'} />
        </View>
      )}
    </View>
  );
};

export default GoogleMap;

const styles = StyleSheet.create({});
