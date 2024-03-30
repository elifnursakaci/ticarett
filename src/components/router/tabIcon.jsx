import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/colors';

const TabIcon = ({name}) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors,
  },
});

export default TabIcon;
