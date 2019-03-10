import '~/config/ReactotronConfig';
import React, { Component } from 'react';
import {
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  AsyncStorage,
  FlatList,
} from 'react-native';

import api from '~/services/api';
import Header from '~/components/Header';
import styles from './styles';

export default class Repositories extends Component {
  state = {
    repository: 'rocketseat/comunidade',
    loading: false,
    error: false,
    listrepos: [],
  };

  async componentDidMount() {
    console.tron.log(await AsyncStorage.getItem('@Repositorio:repository'));
    AsyncStorage.clear();
    const { listrepos } = this.setState;
    console.tron.log(listrepos);
  }

  addRepository = async () => {
    const { repository, listrepos } = this.state;

    this.setState({ loading: true });

    try {
      const { data } = await api.get(`/repos/${repository}`);

      this.setState({ error: false, loading: false, listrepos: [...listrepos, data] });
      await AsyncStorage.setItem('@Repositorio:repository', JSON.stringify([...listrepos, data]));
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  };

  renderListItem = ({ item }) => <Text>{item.full_name}</Text>;

  renderList = () => {
    const { listrepos } = this.state;

    console.tron.log(listrepos);

    /*return !listrepos.length ? (
      <Text style={styles.empty}>{listrepos.item}</Text>
    ) : (
      listrepos.map(item => (
        <View key={item.id}>
          <Text>{item.id}</Text>
          <Text>{item.full_name}</Text>
        </View>
      ))
    );
  };*/

    return !listrepos.length ? (
      <Text style={styles.empty}>Nenhum repositório adicionado</Text>
    ) : (
      <FlatList
        data={listrepos}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        style={styles.listContainer}
      />
    );
  };

  render() {
    const { repository, loading, error } = this.state;
    return (
      <View style={styles.containerMaster}>
        <StatusBar barStyle="light-content" backgroundColor="#7A91CA" />
        <Header title="Repositórios" />
        {error && <Text style={styles.error}>Repositório Inexistente</Text>}
        <View style={styles.container}>
          <View style={styles.boxInput}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Adicionar novo repositório"
              underlineColorAndroid="transparent"
              value={repository}
              onChangeText={text => this.setState({ repository: text })}
            />
          </View>
          <View style={styles.boxButton}>
            <TouchableOpacity style={styles.button} onPress={this.addRepository}>
              {loading ? (
                <ActivityIndicator size="small" color="#9DCA83" />
              ) : (
                <Text style={styles.buttonText}>+</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        {this.renderList()}
      </View>
    );
  }
}
