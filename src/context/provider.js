import React, {useState} from 'react';
import StoreContext from './index';

const Provider = ({children}) => {
  const [cart, setCart] = useState([]);
  const addCart = product => {
    setCart([...cart, product]);
    console.log(product);
  };
  return (
    <StoreContext.Provider value={{cart, addCart}}>
      {children}
    </StoreContext.Provider>
  );
};

export default Provider;
