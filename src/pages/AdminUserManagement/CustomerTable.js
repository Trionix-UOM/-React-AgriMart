import React, { useState, useEffect } from 'react';
import {mapCustomerResponsesToTable} from './UserServices';
import { axiosInstance } from "../../services";
import {Table} from 'antd';

function CustomerTable()
{
  const [customers, setCustomers] = useState([]);
  const fetchedCustomers = [];


  const loadCustomers = async () => {
 
    fetchedCustomers = await getAllCustomers();
    setCustomers(fetchedCustomers);
      console.log("All customers: ", customers)
      customers =  await mapCustomerResponsesToTable(fetchedCustomers);
    }

  

  
  const getAllCustomers = async () => {
    axiosInstance.get('/customers')
    .then((res) => {
      console.log(res.data);
      setCustomers(res.data);
      const fetchedCustomers = (res.data);
      customers =  mapCustomerResponsesToTable(fetchedCustomers);
    })
    .catch((err) => {
      console.error(err);
    });
  }


  useEffect(() => {
    loadCustomers();

  },[]);




const columns = [
    {
        title: 'Customer ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Customer Name',
        dataIndex: 'fullName',
        key: 'fullName',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Contact',
        dataIndex: 'phoneNo',
        key: 'phoneNo',
      },

    
   
     
];


return(
<>
<Table columns={columns} dataSource={customers} />
</>



);

}

export default CustomerTable;