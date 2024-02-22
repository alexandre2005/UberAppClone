import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Services = () => {
    return (
        <SafeAreaView style={{ marginTop: Platform.OS == 'android' ? 25:0, flex: 1, backgroundColor: '#fff' }}>
          <Text>Services</Text>
        </SafeAreaView>
      )
}

export default Services

const styles = StyleSheet.create({})