import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const ItemListsContainer = ({ greeting }) => {

  const [productsData, setProductsData] = useState([]);



  return (
    //<div style={{fontSize:"2rem", color:"black", margin:"20px"}}>{greeting}</div>
    <div>
      <Item productsData={productsData} />
    </div>
  );
};

export default ItemListsContainer;