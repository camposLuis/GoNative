import React, { Component } from 'react';
import {
  Modal, Text, TextInput, View, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '../../../store/ducks/modal';

import styles from './styles';

class ViewModal extends Component {
  state = {
    username: '',
  };

  handleInputChange = (username) => {
    this.setState({ username });
  };

  handleSubmit = () => {
    const { addMarkerRequest } = this.props;
    const { username } = this.state;

    addMarkerRequest(username);
  };

  render() {
    const { modal, hideModal } = this.props;

    return (
      <Modal transparent visible={modal.visibilit} animationType="fade" onRequestClose={hideModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Adicionar novo local</Text>
            <TextInput
              autoFocus
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.modalInput}
              placeholder="Usuário do Github"
              onChangeText={this.handleInputChange}
            />
            <View style={styles.actionsContainer}>
              <TouchableOpacity style={styles.button} onPress={hideModal}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonSubmit]}
                onPress={this.handleSubmit}
              >
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModal);
