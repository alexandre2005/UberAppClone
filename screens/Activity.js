import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Activity = () => {
    return (
        <SafeAreaView style={{ marginTop: Platform.OS == 'android' ? 25:0, flex: 1, backgroundColor: '#fff' }}>
          <Text>Activity</Text>
        </SafeAreaView>
      )
}

export default Activity

const styles = StyleSheet.create({})