import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../../utils/routes';

const WidgetsTitle = ({title, category}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: '600', color: AppColors.PRIMARY}}>
        {title}
      </Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(PRODUCTLIST, {category: category, title: title})
        }>
        <Text style={{fontSize: 12, fontWeight: '600', color: AppColors.GRAY}}>
          See more
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default WidgetsTitle;
