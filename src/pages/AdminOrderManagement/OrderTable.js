import React, { useState, useEffect } from 'react';
import {Table} from 'antd';

function OrderTable()
{

    const data=[
{
    key:'1',
    orderID: '00001',
    orderDate: '12-04-2022',
    productName:'Carrot',
    quantity:'3',
    price:'400',
    confirmation: 'Approved',
    deliveryStatus: 'True',


}




    ];

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
        title:'Confirmation Status',
        dataIndex: 'confirmation',
        key: 'confirmation',
      },
      {
        title:'Delivery Status',
        key: 'deliveryStatus',
        dataIndex: 'deliveryStatus',
      },


];
return(
<>
<Table columns={columns} dataSource={data} />
</>



);

}

export default OrderTable;