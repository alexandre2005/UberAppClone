import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Account = () => {
    return (
        <SafeAreaView style={{ marginTop: Platform.OS == 'android' ? 25:0, flex: 1, backgroundColor: '#fff' }}>
          <Text>Account</Text>
        </SafeAreaView>
      )
}

export default Account

const styles = StyleSheet.create({})