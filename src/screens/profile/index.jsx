import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/colors';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;
