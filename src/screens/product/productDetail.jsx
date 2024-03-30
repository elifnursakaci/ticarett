import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {screenStyle} from '../../styles/screenStyle';
import {height, width} from '../../utils/constans';
import {AppColors} from '../../theme/colors';
import Button from '../../components/uı/button';
import Counter from '../../components/uı/counter';
import {getRequest} from '../../service/verbs';
import {PRODUCTS_URL} from '../../service/urls';
import StoreContext from '../../context';
import {useNavigation} from '@react-navigation/native';

const ProductDetail = ({route}) => {
  const [product, setProduct] = useState(null);
  const {addCart} = useContext(StoreContext);
  const navigation = useNavigation();

  const {item} = route?.params;
  const getProductDetail = () => {
    getRequest(PRODUCTS_URL + `/${item.id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={screenStyle.container}>
        <ScrollView>
          <View style={{}}>
            <View>
              <Image
                source={{uri: item.image}}
                style={{
                  width: width * 0.8,
                  height: height * 0.3,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                }}
              />
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 3, marginVertical: 20}}>
                <Text
                  style={{
                    flex: 3,

                    color: 'black',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  {product?.title}
                </Text>
                <Text
                  style={{
                    color: AppColors.GRAY,
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  {product?.category.toUpperCase()}
                </Text>
                <Text
                  style={{
                    flex: 3,
                    marginVertical: 5,
                    color: 'black',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  ${product?.price}
                </Text>
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={{
                        uri: 'https://purepng.com/public/uploads/large/purepng.com-golden-starstargeometricallydecagonconcavestardomgoldclipart-14215265026171wodm.png',
                      }}
                      style={{
                        width: width * 0.06,
                        height: height * 0.04,
                        resizeMode: 'contain',
                      }}
                    />
                    <Text
                      style={{
                        flex: 3,
                        marginVertical: 5,
                        color: 'black',
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginHorizontal: 5,
                      }}>
                      {product?.rating?.rate} / {product?.rating?.count}
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <TouchableOpacity>
                  <Image
                    source={{
                      uri: 'https://w7.pngwing.com/pngs/471/545/png-transparent-computer-icons-symbol-symbol.png',
                    }}
                    style={{
                      width: width * 0.05,
                      height: height * 0.03,
                      resizeMode: 'contain',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text
                style={{
                  flex: 3,
                  marginVertical: 8,

                  color: 'black',
                  fontSize: 14,
                }}>
                {product?.description}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          paddingBottom: 10,
          padding: 10,
          height: height * 0.1,
          width: width,
          backgroundColor: AppColors.WHITE,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          borderTopWidth: 1,
          borderColor: AppColors.SOFTGRAY,
        }}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Counter onChange={value => console.warn(value)} />
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Button onPress={() => addCart(item)} title="sepete ekle" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
