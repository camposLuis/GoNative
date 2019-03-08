import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const colorPostText = '#222';

const styles = StyleSheet.create({
  postBox: {
    marginTop: 15,
    paddingTop: 0,
  },
  postText: {
    color: colorPostText,
    fontSize: 14,
  },
});

const Post = ({ postText }) => (
  <View style={styles.postBox}>
    <Text style={styles.postText}>{postText}</Text>
  </View>
);

Post.propTypes = {
  postText: PropTypes.string.isRequired,
};

export default Post;
