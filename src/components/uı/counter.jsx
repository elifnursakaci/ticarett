import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {AppColors} from '../../theme/colors';

const Counter = ({onChange}) => {
  const [count, setCount] = useState(0);

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
      onChange(count - 1);
    }
  };

  const increase = () => {
    if (count < 5) {
      setCount(count + 1);
      onChange(count + 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrease} style={styles.eksi}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
          -
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 20,
          marginHorizontal: 10,
        }}>
        {count}
      </Text>

      <TouchableOpacity onPress={increase} style={styles.arti}>
        <Text
          style={{fontWeight: 'bold', color: AppColors.WHITE, fontSize: 20}}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'row',
  },
  arti: {
    backgroundColor: 'black',
    borderRadius: 100,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  eksi: {
    backgroundColor: AppColors.WHITE,
    borderRadius: 100,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
});

export default Counter;
