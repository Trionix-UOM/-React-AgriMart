import React, { useState, useEffect } from 'react';
import {mapProductResponsesToTable} from './ProductServices';
import { axiosInstance } from "../../services";
import {Table, Button, Space} from 'antd';

function ProductTable()
{
  const [products, setProducts] = useState([]);
  const fetchedProducts = [];


  const loadProducts = async () => {
 
    fetchedProducts = await getAllOrders();
    setProducts(fetchedProducts);
      console.log("All products: ", products)
      products =  await mapProductResponsesToTable(fetchedProducts);
    }

  

  
  const getAllOrders = async () => {
    axiosInstance.get('/products')
    .then((res) => {
      console.log(res.data);
      setProducts(res.data);
      const fetchedProducts = (res.data);
      products =  mapProductResponsesToTable(fetchedProducts);
    })
    .catch((err) => {
      console.error(err);
    });
  }


  useEffect(() => {
    loadProducts();

  },[]);




const columns = [
    {
        title: 'Product ID',
        dataIndex: 'productID',
        key: 'productID',
      },

      {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
      },
      {
        title: 'Product Name',
        dataIndex: 'productTitle',
        key: 'productTitle',
      },
   
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
      },

      {
        title: 'Seller',
        dataIndex: 'seller',
        key: 'seller',
      },
   
      {
        title:'Item Price',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Availability',
        dataIndex: 'available',
        key: 'available',
      },
      {

        title: 'Action',
        dataIndex: 'action',
        key: 'action',
   
    

        render: (record) => (
          <>
 
          <Button type='danger'
          style={{width: '70px', backgroundColor:'red'}}
          onClick={() => handleHide({ProductID: record?._id})}>{'Hide'}</Button>
  
          </>
        ),
      },

    

];

const handleHide = async ({ProductID}) => {
  console.log('product ID',ProductID);
  ///Perform handling hide
}


return(
<>
<Table columns={columns} dataSource={products} />
</>



);

}

export default ProductTable;