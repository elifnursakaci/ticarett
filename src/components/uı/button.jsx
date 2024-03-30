import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/colors';
import {width} from '../../utils/constans';

const Button = props => {
  const {title} = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    padding: 4,
    borderRadius: 5,
    width: width * 0.4,
  },
  title: {
    color: AppColors.WHITE,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Button;
