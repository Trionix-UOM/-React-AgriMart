import React, { useState, useEffect } from 'react';
import AgriMartAdminNavBar from '../../components/AgriMartAdminNavBar/AgriMartAdminNavBar';
import './AdminOrderManagement.css';
import OrderTable from './OrderTable';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
import AgriMartAdminSideBar from '../../components/AgriMartSideBar/AgriMartSideBar';
import 'antd/dist/antd.css';
import {  Select, Button } from 'antd';
import { Table } from 'react-bootstrap';
import axiosInstance from 'axios';
import moment from 'moment';
import { withCurrentUserContext } from '../../context/UserContext';


const {Option} = Select;

function AdminOrderManagement() {
    const [posts, setPosts] = useState([]);
    const [option, setOption] = useState([]);


    useEffect(() => {
        axiosInstance.get('/orders')
        .then((res) => {
          console.log(res.data);
          setPosts(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
      });


      const handleOption =  (value) => {
            if(value === 'denied' || value === 'approved'){
            
            }
            else{
                // Filtering part
            }
      }



   

    return (
        <div>
            <div>
                <AgriMartAdminNavBar />

            </div>
            <div>

                <h2 class="txt-header">Order Management</h2>
            </div>
            <div>
                <Select 
                style={{width:'200px', float:'right', marginRight:'40px',borderRadius:'8px' }}
                placeholder='Confirmation Status'
                onChange={handleOption()}>
                    <Option key='1' value='pending'>Pending</Option>
                    <Option key='2'value='denied'>Denied</Option>
                    <Option key='3' value='approved'>Approved</Option>

                </Select>
            <div style={{height:'80px'}}></div>
            <div style={{float:'left', position:'fixed'}}><AgriMartAdminSideBar/></div>
                <div className="card-container" style={{margin:'0px 100px 0px 210px', position:'relative'}} >
              
                            <div >
                                <OrderTable/>

                                {/* <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Order Date</th>
                                            <th>Product Name</th> 
                                            <th>Quantity</th>
                                            <th>Total Price</th>
                                            <th>Delivery Status</th>
                                            <th>Confirmation</th>
                                     
                                        </tr>
                              
                                    </thead>
                                    <tbody>
                                    {
                                           posts.map((post) => (
                                            <tr key={post?.productTitle}>
                                                <td>{moment(post?.orderDateTime).format('LLLL')}</td>
                                                <td>{post?.productTitle}</td>
                                                <td>{post?.productTitle}</td>
                                                <td>{post?.productTitle}</td>
                                                <td>{post?.productTitle}</td>
                                                <td>{post?.productTitle}</td>
                                                <td><Button type='primary' style={{height:'30px', width:'80px', backgroundColor:'black'}}>Approve</Button></td>
                                             

                                            </tr>
                                        ))
                                    }
                                     </tbody>
                                     </Table> */}

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