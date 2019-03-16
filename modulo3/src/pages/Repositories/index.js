import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActivityIndicator, Text } from 'react-native';
import { Creators as RepositoriesActions } from '../../store/ducks/repositories';

import { Container } from './styles';

class Repositories extends Component {
  componentDidMount() {
    const { loadRepositoriesRequest } = this.props;

    loadRepositoriesRequest();
  }

  render() {
    const { repositories } = this.props;

    console.tron.log(repositories.data);
    return (
      <Container>
        {repositories.loading ? (
          <ActivityIndicator size="small" color="#7159c1" />
        ) : (
          /* <Text>Entrou</Text> */
          repositories.data.map(repository => <Text key={repository.id}>{repository.name}</Text>)
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
});

const mapDispatchToProps = dispatch => bindActionCreators(RepositoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repositories);
