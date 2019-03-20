import React from 'react';
import { View } from 'react-native';
import MapView from './MapView';
import Modal from './Modal';
import styles from './styles';

const Map = () => (
  <View style={styles.container}>
    <MapView />
    <Modal />
  </View>
);

export default Map;
