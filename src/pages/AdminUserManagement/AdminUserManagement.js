import React from 'react';
import { useState, useEffect } from "react";
import AgriMartAdminNavBar from '../../components/AgriMartAdminNavBar/AgriMartAdminNavBar';
 import './AdminUserManagement.css';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
import AgriMartAdminSideBar from '../../components/AgriMartSideBar/AgriMartSideBar';
import CustomerTable from './CustomerTable';
import { Table } from "react-bootstrap";
import { Tabs, Button } from 'antd';
import moment from 'moment';
import { QuestionCircleOutlined } from '@ant-design/icons';
import DeleteIcon from '@mui/icons-material/Delete';
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineEdit  } from "react-icons/ai";

const { TabPane } = Tabs;
function AdminUserManagement() {
    const [data, setData] = useState([]);

    const handleRestriction = () =>{
        //Handling seller restriction
    }
    
    return (
        <div>
        <div>
            <AgriMartAdminNavBar />

        </div>
       
        <div>
                <h2  class="txt-header">User Management</h2>
            </div>
            <div style={{float:'left', position:'fixed'}}><AgriMartAdminSideBar/></div>
                <div className="card-container" style={{margin:'0px 100px 0px 210px', position:'relative'}} >
                    <Tabs type="card">
                        <TabPane tab="Customer" key="1">
                            <div class="table-style">

                             <CustomerTable/>
                            </div>
                        </TabPane>
                        <TabPane tab="Seller" key="2">
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Seller ID</th>
                                            <th>Seller Name</th>
                                            <th>Email Address</th>
                                            <th>Contact Number</th>
                                            <th>Product ID</th>
                                            <th>Product Name</th>
                                            <th>Action</th>

                                        </tr>
                                        <tr>
                                          <td>0002</td>
                                          <td>B.T.Fernando</td>
                                          <td>btfernando@gmail.com</td>
                                          <td>075 234 9876</td>
                                          <td>0003</td>
                                          <td>Cabbage</td>
                                          <td><Button style={{width:'80px', backgroundColor:'red', fontWeight:'bold'}}
                                          onClick={handleRestriction()}
                                          > Restrict </Button ></td>
                                        </tr>
                                    </thead>
                                   
                                </Table>

                            </div>

                        </TabPane>

                        {/* <TabPane tab="Delivery Person" key="3">
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Delivery Person ID</th>
                                            <th>Delivery Person Name</th>
                                            <th>Email Address</th>
                                            <th>Contact Number</th>
                                            <th>Action</th>

                                        </tr>
                                        <tr>
                                          <td>0002</td>
                                          <td>E.G.Kurey</td>
                                          <td>kurey@gmail.com</td>
                                          <td>075 234 9876</td>
                                          <td><AiFillDelete/>  <AiOutlineEdit /></td>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        {/* {
                                            data.map((item) => ( 
                                                <tr key={(item.id)}> 
                                                    <td>{(item.orderId ?? "").substring(0, 4).toUpperCase()}</td>
                                                    <td>{item.orderDateTime}</td>
                                                    <td>{item.productTitle}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.amount}</td>
                                                </tr>
                                            ))
                                        } */}

{/* 
                                    </tbody>
                                </Table>

                            </div>

                        </TabPane> */}
                         
                    </Tabs>
                </div>
        <div>
            <AgriMartFooter/>

        </div>

    </div>

      );
}

export default AdminUserManagement;