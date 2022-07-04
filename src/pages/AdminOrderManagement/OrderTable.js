import React, { useState, useEffect } from 'react';
import {mapOrderResponsesToTable} from './OrderServices';
import { axiosInstance } from 'axios';
import {Table, Button} from 'antd';

function OrderTable()
{
  const [orders, setOrders] = useState([]);
  const fetchedOrders = [];


  const loadOrders = async () => {
 
      fetchedOrders = await getAllOrders();
      setOrders(fetchedOrders);
      orders =  await mapOrderResponsesToTable(fetchedOrders);
    }

  

  
  const getAllOrders = async () => {
    axiosInstance.get('/order')
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
        dataIndex: 'orderDate',
        key: 'orderDate',
      },
      {
        title: 'Product Name',
        dataIndex: 'productName',
        key: 'productName',
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
      },
      {
        title: 'Total Price',
        dataIndex: 'price',
        key: 'price',
      },
    
      {
        title:'Delivery Status',
        key: 'deliveryStatus',
        dataIndex: 'deliveryStatus',
      },
      {
        title:'Confirmation',
        dataIndex: 'confirmation',
        key: 'confirmation',

        render: () => (
          <>
          <Button type='primary'
          style={{width: '70px', backgroundColor:'blue'}}
          onClick={() => handleAction()}>{'Approve'}</Button>
          <Button type='danger'
          style={{width: '70px', backgroundColor:'red'}}
          onClick={() => handleAction()}>{'Decline'}</Button>
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