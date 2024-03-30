import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/colors';
import {height} from '../../utils/constans';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../../utils/routes';

const CategoryCard = ({item, category}) => {
  const navigation = useNavigation();
  console.log(item);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(PRODUCTLIST, {category: item, title: category})
      }>
      <Text
        style={{
          fontSize: 24,
          color: 'black',
          fontWeight: '600',
          textTransform: 'capitalize',
        }}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: AppColors.SOFTGRAY,
    minHeight: height / 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 5,
  },
});

export default CategoryCard;
