import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { styles } from './App';

function MainMenu(){
  return(
    <NavigationContainer>
      <View style={styles.container}></View>
    </NavigationContainer>
  )
}