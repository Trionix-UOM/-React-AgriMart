import React, { useState, useEffect } from 'react';
import {mapTopSellingItemsToTable} from '../AdminOrderManagement/OrderServices';
import { axiosInstance } from "../../services";
import {Table, Button, Space} from 'antd';

function TopSellingTable()
{
  const [orders, setOrders] = useState([]);
  const fetchedOrders = [];


  const loadOrders = async () => {
 
      fetchedOrders = await getAllOrders();
      setOrders(fetchedOrders);
      console.log("All orders: ", orders)
      orders =  await mapTopSellingItemsToTable(fetchedOrders);
    }

  

  
  const getAllOrders = async () => {
    axiosInstance.get('/topTen')
    .then((res) => {
      console.log(res.data);
      setOrders(res.data);
      const fetchedOrders = (res.data);
      orders =  mapTopSellingItemsToTable(fetchedOrders);
    })
    .catch((err) => {
      console.error(err);
    });
  }


  useEffect(() => {
    loadOrders();

  },[]);




const columns = [
    {
        title: 'Product Name',
        dataIndex: 'productTitle',
        key: 'productTitle',
      },

      {
        title: 'Quantity',
        dataIndex: 'soldQuantity',
        key: 'soldQuantity',
      },
      {
        title: 'Total Amount',
        dataIndex: 'totalAmount',
        key: 'totalAmount',
      },
    
   


];




return(
<>
<Table columns={columns} dataSource={orders} pagination={false}/>
</>



);

}

export default TopSellingTable;