import React, { useState, useEffect } from 'react';
import {mapRecentOrdersToTable} from '../AdminOrderManagement/OrderServices';
import { axiosInstance } from "../../services";
import {Table} from 'antd';

function RecentOrderTable()
{
  const [orders, setOrders] = useState([]);
  const fetchedOrders = [];


  const loadOrders = async () => {
 
      fetchedOrders = await getAllOrders();
      setOrders(fetchedOrders);
      console.log("All orders: ", orders)
      orders =  await mapRecentOrdersToTable(fetchedOrders);
    }

  

  
  const getAllOrders = async () => {
    axiosInstance.get('/getorder')
    .then((res) => {
      console.log(res.data);
      setOrders(res.data);
      const fetchedOrders = (res.data);
      orders =  mapRecentOrdersToTable(fetchedOrders);
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
        dataIndex: 'quantity',
        key: 'quantity',
      },
      {
        title: 'Total Amount',
        dataIndex: 'amount',
        key: 'amount',
      },
    
   


];




return(
<>
<Table columns={columns} dataSource={orders} pagination={false}/>
</>



);

}

export default RecentOrderTable;