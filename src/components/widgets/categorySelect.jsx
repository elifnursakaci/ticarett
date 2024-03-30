import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL} from '../../service/urls';

const CategorySelect = ({onSelect}) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();

  const getCategories = () => {
    getRequest(CATEGORIES_URL)
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  };

  const selectCategory = category => {
    setCategory(category);
    onSelect(category);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => selectCategory(item)}
        style={
          category == item ? styles.activeCategory : styles.inactiveCategory
        }>
        <Text style={{fontWeight: 400}}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={renderItem}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  activeCategory: {
    backgroundColor: AppColors.PRIMARY,
    padding: 10,
    marginRight: 5,
    borderRadius: 20,
  },
  inactiveCategory: {
    backgroundColor: AppColors.SOFTGRAY,
    padding: 10,
    marginRight: 5,
    borderRadius: 20,
  },
});

export default CategorySelect;
