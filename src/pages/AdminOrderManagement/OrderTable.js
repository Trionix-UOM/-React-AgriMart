import React, { useState, useEffect } from 'react';
import {mapOrderResponsesToTable} from './OrderServices';
import { axiosInstance } from "../../services";
import {Table, Button, Space} from 'antd';

function OrderTable()
{
  const [orders, setOrders] = useState([]);
  const fetchedOrders = [];


  const loadOrders = async () => {
 
      fetchedOrders = await getAllOrders();
      setOrders(fetchedOrders);
      console.log("All orders: ", orders)
      orders =  await mapOrderResponsesToTable(fetchedOrders);
    }

  

  
  const getAllOrders = async () => {
    axiosInstance.get('/getorder')
    .then((res) => {
      console.log(res.data);
      setOrders(res.data);
      const fetchedOrders = (res.data);
      orders =  mapOrderResponsesToTable(fetchedOrders);
    })
    .catch((err) => {
      console.error(err);
    });
  }


  useEffect(() => {
    loadOrders();

  });




const columns = [
    {
        title: 'Order ID',
        dataIndex: 'orderID',
        key: 'orderID',
      },
      {
        title: 'Order Date',
        dataIndex: 'orderDateTime',
        key: 'orderDateTime',
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
        title: 'Total Price',
        dataIndex: 'amount',
        key: 'amount',
      },
    
   
      {
        title:'Confirmation',
        dataIndex: 'confirmation',
        key: 'confirmation',

        render: () => (
          <>
          <Space>
          <Button type='primary'
          style={{width: '70px', backgroundColor:'blue'}}
          onClick={() => handleAction()}>{'Approve'}</Button>
          <Button type='danger'
          style={{width: '70px', backgroundColor:'red'}}
          onClick={() => handleAction()}>{'Decline'}</Button>
          </Space>
          </>
        ),
      },

];

const handleAction = async () => {
  ///Perform handling action
}


return(
<>
<Table columns={columns} dataSource={orders} />
</>



);

}

export default OrderTable;