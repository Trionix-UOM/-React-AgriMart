import React, { useState, useEffect } from 'react';
import {mapOrderResponsesToTable} from './OrderServices';
import { axiosInstance } from "../../services";
import {Table, Button, Space} from 'antd';
import { async } from '@firebase/util';

function OrderTable()
{
  const [orders, setOrders] = useState([]);
  const [mappedOrders, setMappedOrders] = useState([]);


  const loadOrders = async () => {
      await getAllOrders();
      console.log("All orders: ", orders);
    }

    const newFun=async(res)=>{
        console.log('new',res.data);
        const mappedOrders =  await mapOrderResponsesToTable(res.data);
        console.log('mapped',mappedOrders);
        setMappedOrders(mappedOrders);
    
    }

  

  
  const getAllOrders = async () => {
    axiosInstance.get('/getorder')
    .then((res) => {
      newFun(res);

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

        render: (index,record) => (
          <>
          <Space>
          <Button type='primary'
          style={{width: '70px', backgroundColor:'blue'}}
          onClick={() => handleActionApprove({OrderID: record?.orderID})}>{'Approve'}</Button>
          <Button type='danger'
          style={{width: '70px', backgroundColor:'red'}}
          onClick={() => handleActionDecline({OrderID: record?.orderID})}>{'Decline'}</Button>
          </Space>
          </>
        ),
      },

];

const handleActionApprove = async ({OrderID}) => {
  console.log('order ID',OrderID);
  ///Perform handling action
  axiosInstance.put('/orderstate',
  {
    orderId:OrderID,
    response:"confirm"
  }
  )
    .then(res => {
      console.log(res.data);
      
  })
  .catch(err=>{
    console.error(err)
  })
}

const handleActionDecline = async ({OrderID}) => {
  console.log('order ID',OrderID);
  ///Perform handling action
  axiosInstance.put('/orderstate',
  {
    orderId:OrderID,
    response:"reject"
  }
  )
    .then(res => {
      console.log(res.data);
     
  })
  .catch(err=>{
    console.error(err)
  })
}


return(
<>
<Table columns={columns} dataSource={mappedOrders} />
</>



);

}

export default OrderTable;