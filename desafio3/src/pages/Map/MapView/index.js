import React, { Component } from 'react';
import { View, Image } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '../../../store/ducks/modal';

import styles from './styles';
import Property from '../../../../secretsettings';

MapboxGL.setAccessToken(Property.accessToken);

class MapView extends Component {
  state = {
    markerSelected: null,
  };

  handleMapPress = ({ geometry }) => {
    const { showModal } = this.props;
    const [long, latd] = geometry.coordinates;

    showModal(latd, long);
  };

  render() {
    const { modal } = this.props;
    const { markerSelected } = this.state;

    // console.tron.log(modal);

    return (
      <MapboxGL.MapView
        showUserLocation
        style={styles.container}
        onLongPress={this.handleMapPress}
        styleURL={MapboxGL.StyleURL.Dark}
        centerCoordinate={[-49.6437627, -27.2123286]}
      >
        {modal.markers.map((marker, i) => (
          <MapboxGL.PointAnnotation
            key={String(marker.user.id)}
            id={String(marker.user.id)}
            title={marker.user.login}
            selected={markerSelected === i}
            onSelected={() => this.setState({ markerSelected: i })}
            coordinate={[marker.coordinates.logd, marker.coordinates.latd]}
          >
            <View style={styles.pointContainer}>
              <Image style={styles.pointImage} source={{ uri: marker.user.avatar_url }} />
            </View>

            <MapboxGL.Callout title={marker.user.name} />
          </MapboxGL.PointAnnotation>
        ))}
      </MapboxGL.MapView>
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
)(MapView);
