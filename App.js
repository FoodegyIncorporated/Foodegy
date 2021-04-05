import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import FirebaseUtils from './components/FirebaseUtils';
import RestaurantList from './components/RestaurantList';
import MainScreen from './components/MainScreen';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  FirebaseUtils.init();
  return (
    <MainScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
});