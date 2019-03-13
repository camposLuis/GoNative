import '~/config/ReactotronConfig';
import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Text,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import api from '~/services/api';

import ListIssues from './ListIssues';
import Header from '~/components/Header';

import styles from './styles';

export default class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    issues: [],
    refresh: false,
  };

  componentDidMount() {
    this.loadListIssues();
  }

  loadListIssues = async () => {
    this.setState({ refresh: true });
    const { navigation } = this.props;

    const { data } = await api.get(`/repos/${navigation.getParam('full_name')}/issues`);
    this.setState({ issues: data, refresh: false });
  };

  renderListIssues = ({ item }) => <ListIssues infoissues={item} />;

  renderList = () => {
    const { issues, refresh } = this.state;

    return !issues.length ? (
      <Text style={styles.empty}>Nenhuma issue encontrada</Text>
    ) : (
      <FlatList
        data={issues}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListIssues}
        onRefresh={this.loadListIssues}
        refreshing={refresh}
        style={styles.listContainer}
      />
    );
  };

  render() {
    const { navigation } = this.props;

    const login = navigation.getParam('login');
    return (
      <View style={styles.containerMaster}>
        <StatusBar barStyle="light-content" backgroundColor="#7A91CA" />
        <Header title={login} />
        {this.renderList()}
      </View>
    );
  }
}

// {issues.map(issue => <Text key={issue.id}>{issue.user.login}</Text>)}
// {this.renderList()}