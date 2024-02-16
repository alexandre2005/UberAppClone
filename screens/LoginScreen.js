import { Platform, StyleSheet, Text, View, SafeAreaView, Pressable, Image, TextInput } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ marginTop: Platform.OS == 'android' ? 30:0, flex: 1, backgroundColor: '#fff' }}>

      <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
      
        <Text style={{ fontWeight: '500', fontSize: 22 }}>
          Enter your mobile number
        </Text>

        <View 
          style={{ 
              flexDirection: 'row', 
              height: 50, 
              width: '100%', 
              justifyContent: 'space-between',
              marginTop: 20
            }}
          >

          <Pressable 
            style={{ 
                backgroundColor: '#eeeeee', 
                flexDirection: 'row', 
                padding: 10, 
                width: 100, 
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: 10 
              }}
            >

            <Image source={require('../assets/flag.png')} style={{ width: 50, height: 50 }} />
            <Entypo name="triangle-down" size={20} color="black" />

          </Pressable>

          <Pressable 
            style={{ 
              backgroundColor: '#eeeeee', 
              width: 270, marginLeft: 10, 
              flexDirection: 'row', 
              alignItems: 'center', 
              borderRadius: 10 ,
              padding: 10,
              justifyContent: 'space-between'
            }}
          >

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 18 }}>+55</Text>
              <TextInput placeholder='Mobile number' style={{ marginLeft: 5, fontSize: 18 }} keyboardType='number-pad' />
            </View>

            <View style={{ marginRight: 5 }}>
              <FontAwesome6 name="user-lock" size={22} color="black" />
            </View>

          </Pressable>

        </View>

        <Pressable 
          style={{ 
            alignSelf: 'center', 
            backgroundColor: '#000', 
            marginTop: 20, 
            padding: 10, 
            width: '100%',
            alignItems: 'center' ,
            borderRadius: 10
          }}
          onPress={() => {
            navigation.navigate('OtpVerify')
          }}
        >
          <Text style={{ color: '#fff', fontWeight: '500', fontSize: 18 }}>Continue</Text>
        </Pressable>

        <View style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center'}}>
          <View style={{ backgroundColor: '#eeeeee', height: 5, width: '50%' }}></View>
          <Text style={{ fontSize: 18, paddingRight: 5, paddingLeft: 5, color: '#ddd', backgroundColor: '#fff' }}>or</Text>
          <View style={{ backgroundColor: '#eeeeee', height: 5, width: '50%'  }}></View>
        </View>
        
        <View style={{ marginTop: 20, gap: 10 }}>
          <Pressable 
            style={{ 
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#eeeeee',
              borderRadius: 10,
              padding: 15,
              justifyContent: 'center',
              height: 60
            }}
          >
            <Image source={require('../assets/apple.jpg')} style={{ width: 25, height: 25 }} />
            <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 10 }}>Continue with Apple</Text>
          </Pressable>

          <Pressable 
            style={{ 
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#eeeeee',
              borderRadius: 10,
              padding: 15,
              justifyContent: 'center',
              height: 60
            }}
          >
            <Image source={require('../assets/googleLogo.jpg')} style={{ width: 25, height: 25 }} />
            <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 10 }}>Continue with Google</Text>
          </Pressable>

          <Pressable 
            style={{ 
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#eeeeee',
              borderRadius: 10,
              padding: 15,
              justifyContent: 'center',
              height: 60
            }}
          >
            <Image source={require('../assets/facebook.jpg')} style={{ width: 25, height: 25 }} />
            <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 10 }}>Continue with Facebook</Text>
          </Pressable>

          <Pressable 
            style={{ 
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#eeeeee',
              borderRadius: 10,
              padding: 15,
              justifyContent: 'center',
              height: 60
            }}
          >
            <MaterialIcons name="email" size={24} color="black" />
            <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 10 }}>Continue with Email</Text>
          </Pressable>
        </View>
        
        <View style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center'}}>
          <View style={{ backgroundColor: '#eeeeee', height: 5, width: '50%' }}></View>
          <Text style={{ fontSize: 18, paddingRight: 5, paddingLeft: 5, color: '#ddd', backgroundColor: '#fff' }}>or</Text>
          <View style={{ backgroundColor: '#eeeeee', height: 5, width: '50%'  }}></View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 20, gap: 10 }}>
          <Ionicons name="search-outline" size={25} color="black" />
          <Text style={{ fontSize: 18, fontWeight: '700' }}>Find my account</Text>
        </View>

        <Text style={{ fontSize: 13, color: 'gray', marginTop: 10, textAlign: 'justify' }}>
          By proceeding, you concent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided 
        </Text>

      </View>

    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})