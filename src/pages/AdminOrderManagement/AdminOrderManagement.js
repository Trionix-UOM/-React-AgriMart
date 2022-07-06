import React, { useState, useEffect } from 'react';
import AgriMartAdminNavBar from '../../components/AgriMartAdminNavBar/AgriMartAdminNavBar';
import './AdminOrderManagement.css';
import OrderTable from './OrderTable';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
import AgriMartAdminSideBar from '../../components/AgriMartSideBar/AgriMartSideBar';
import 'antd/dist/antd.css';
import {  Select, Button } from 'antd';
import { axiosInstance } from "../../services";
import moment from 'moment';
import { withCurrentUserContext } from '../../context/UserContext';


function AdminOrderManagement() {
    const [orders, setOrders] = useState([]);
    const [fetchedOrders, setFetchedOrders] = useState([]);
    const [orderCount, setOrderCount] = useState(0);

  
  
    const loadOrders = async () => {
   
        fetchedOrders = await getAllOrders();
        setOrders(fetchedOrders);
      
     
      }
  
    
  
    
    const getAllOrders = async () => {
      axiosInstance.get('/getorder')
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
        setOrderCount(res.data.length);
        setFetchedOrders(orders);
      })
      .catch((err) => {
        console.error(err);
      });
    }
  
  
    useEffect(() => {
      loadOrders();
  
    });
  


   

    return (
        <div>
            <div>
                <AgriMartAdminNavBar />

            </div>
            <div>

                <h2 class="txt-header">Order Management</h2>
            </div>
            <div>
              <h3 style={{color:'black', fontSize:'17px', fontWeight:'bold', textAlign:'right', paddingRight:'110px'}}>Order Count: {orderCount}</h3>
            <div style={{height:'80px'}}></div>
            <div style={{float:'left', position:'fixed'}}><AgriMartAdminSideBar/></div>
                <div className="card-container" style={{margin:'0px 100px 0px 210px', position:'relative'}} >
              
                            <div >
                                <OrderTable/>
                            </div>
                   
                </div>
             
            </div>



            <div>
                <AgriMartFooter />

            </div>

        </div>

    );
}

export default withCurrentUserContext(AdminOrderManagement);