import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/colors';
import widgets from '../../widgets';
import {screenStyle} from '../../styles/screenStyle';

const Home = () => {
  const renderItem = ({item}) => {
    return <View>{item.isShow && item.component}</View>;
  };
  return (
    <View style={screenStyle.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={widgets}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;
