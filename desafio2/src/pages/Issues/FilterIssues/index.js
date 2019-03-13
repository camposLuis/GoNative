import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const FilterIssues = ({ pressFilter, filterIssues }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={pressFilter === 'all' ? styles.buttonPress : styles.button}
      onPress={() => filterIssues('all')}
    >
      <Text style={styles.text}>all</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={pressFilter === 'open' ? styles.buttonPress : styles.button}
      onPress={() => filterIssues('open')}
    >
      <Text style={styles.text}>open</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={pressFilter === 'closed' ? styles.buttonPress : styles.button}
      onPress={() => filterIssues('closed')}
    >
      <Text style={styles.text}>closed</Text>
    </TouchableOpacity>
  </View>
);

export default FilterIssues;
