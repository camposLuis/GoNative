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
import ListRepository from './ListRepositories';

export default class Repositories extends Component {
  state = {
    repository: '',
    loading: false,
    error: false,
    listrepos: [],
    refresh: false,
  };

  async componentDidMount() {
    this.loadListRepository();
  }

  addRepository = async () => {
    const { repository, listrepos } = this.state;

    this.setState({ loading: true });

    try {
      const { data } = await api.get(`/repos/${repository}`);

      this.setState({ error: false, loading: false, listrepos: [...listrepos, data] });
      await AsyncStorage.setItem('@Repositorio:repository', JSON.stringify([...listrepos, data]));
      this.setState({ repository: '' });
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  };

  loadListRepository = async () => {
    this.setState({ refresh: true });

    const listStorage = JSON.parse(await AsyncStorage.getItem('@Repositorio:repository'));

    this.setState({
      listrepos: listStorage || [],
      error: false,
      loading: false,
      refresh: false,
    });
  };

  renderListItem = ({ item }) => <ListRepository inforepository={item} />;

  renderList = () => {
    const { listrepos, refresh } = this.state;

    return !listrepos.length ? (
      <Text style={styles.empty}>Nenhum repositório adicionado</Text>
    ) : (
      <FlatList
        data={listrepos}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadListRepository}
        style={styles.listContainer}
        refreshing={refresh}
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
