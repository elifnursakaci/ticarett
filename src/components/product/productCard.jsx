import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useContext} from 'react';
import {height, width} from '../../utils/constans';
import {AppColors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL} from '../../utils/routes';
import Button from '../uı/button';
import StoreContext from '../../context';

const ProductCard = ({item}) => {
  const navigation = useNavigation();
  const {addCart} = useContext(StoreContext);
  return (
    <Pressable
      onPress={() => navigation.navigate(PRODUCTDETAIL, {item: item})}
      style={styles.container}>
      <Image
        source={{uri: item.image}}
        style={{
          width: width * 0.4,
          height: height * 0.1,
          resizeMode: 'contain',
        }}
      />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <Text
          numberOfLines={2}
          style={{fontWeight: '700', marginVertical: 5, color: 'black'}}>
          {item.title}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 2}}>
          <Text style={{fontSize: 12, color: AppColors.GRAY}}>
            {item.category}
          </Text>

          <View style={{flex: 2}}>
            <TouchableOpacity>
              <Image
                source={{
                  uri: 'https://w7.pngwing.com/pngs/471/545/png-transparent-computer-icons-symbol-symbol.png',
                }}
                style={{
                  width: width * 0.04,
                  height: height * 0.02,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={{fontWeight: '700', marginVertical: 5, color: 'black'}}>
        ${item.price}
      </Text>
      <View>
        <Button title="Sepete Ekle" />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    margin: 5,
    backgroundColor: AppColors.WHITE,
    marginVertical: 15,
  },
});

export default ProductCard;
