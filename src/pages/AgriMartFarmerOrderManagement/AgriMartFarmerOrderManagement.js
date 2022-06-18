import React, { useState, useEffect } from 'react';
import AgriMartFarmerNavBar from '../../components/AgriMartFarmerNavBar/AgriMartFarmerNavBar';
import './AgriMartFarmerOrderManagement.css';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';

const { TabPane } = Tabs;

function AgriMartFarmerOrderManagement() {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Update the document title using the browser API
        apiCalls();
    });

    let apiCalls = (e) => {
        try {

            axios({
                method: 'get',
                url: 'http://localhost:8080/getorders'
            })
                .then(res => {
                    console.log('result', res);
                    console.log('data', res.data);
                    setData(res.data);
                    console.log('data-array', data)
                })
                .catch(error => {
                    console.log(error);
                });
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <div>
                <AgriMartFarmerNavBar />

            </div>
            <div>

                <h2 class="txt-header">Order Management</h2>
            </div>
            <div>
                {/* const App = () =&gt; ( */}
                <div className="card-container">
                    <Tabs type="card">
                        <TabPane tab="Pending Orders" key="1">
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Order Date</th>
                                            <th>Product Name</th> 
                                            <th>Quantity</th>
                                            <th>Total Amount</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <td>00001</td>
                                            <td>15.06.2022</td>
                                            <td>Carrot 10Kg</td>
                                            <td>1</td>
                                            <td>Rs.2560</td>
                                            <Button type="submit">RTS</Button>
                                    </tbody>
                                    <tbody>
                                            <td>00002</td>
                                            <td>15.06.2022</td>
                                            <td>Beans 10Kg</td>
                                            <td>1</td>
                                            <td>Rs.3000</td>
                                            <Button type="submit">RTS</Button>
                                    </tbody>
                                    <tbody>
                                            <td>00003</td>
                                            <td>15.06.2022</td>
                                            <td>Beans 10Kg</td>
                                            <td>1</td>
                                            <td>Rs.1900</td>
                                            <Button type="submit">RTS</Button>
                                    </tbody>
                                    <tbody>
                                            <td>00004</td>
                                            <td>16.06.2022</td>
                                            <td>Mango 40Kg</td>
                                            <td>1</td>
                                            <td>Rs.3600</td>
                                            <Button type="submit">RTS</Button>
                                    </tbody>
                                    <tbody>
                                            <td>00005</td>
                                            <td>16.06.2022</td>
                                            <td>Tomato 10Kg</td>
                                            <td>1</td>
                                            <td>Rs.2000</td>
                                            <Button type="submit">RTS</Button>
                                    </tbody>
                                    <tbody>
                                            <td>00006</td>
                                            <td>16.06.2022</td>
                                            <td>Potatoes 15Kg</td>
                                            <td>1</td>
                                            <td>Rs.3500</td>
                                            <Button type="submit">RTS</Button>
                                    </tbody>
                                </Table>

                            </div>
                        </TabPane>
                        <TabPane tab="Ready to Ship" key="2">
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Orders ID</th>
                                            <th>Order Date</th>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Total Amount</th>
                                            <th>Delivery Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((item) => (
                                                <tr key={item.id}>
                                                    <td>{item.orderId}</td>
                                                    <td>{item.orderDate}</td>
                                                    <td>{item.orderName}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.price}</td>
                                                    {/* <td>{item.price}</td> */}

                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>

                            </div>

                        </TabPane>
                        <TabPane tab="Shipped" key="3">
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Orders ID</th>
                                            <th>Order Date</th>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Total Amount</th>
                                            <th>Delivery Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((item) => (
                                                <tr key={item.id}>
                                                    <td>{item.orderId}</td>
                                                    <td>{item.orderDate}</td>
                                                    <td>{item.orderName}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.price}</td>

                                                    {/* <td>{item.price}</td> */}

                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>

                            </div>

                        </TabPane>
                        <TabPane tab="Delivered" key="4">
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Orders ID</th>
                                            <th>Order Date</th>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Total Amoun</th>
                                            <th>Delivery Status</th>
                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((item) => (
                                                <tr key={item.id}>
                                                    <td>{item.orderId}</td>
                                                    <td>{item.orderDate}</td>
                                                    <td>{item.orderName}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.price}</td>
                                                    {/* <td>{item.price}</td> */}

                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>

                            </div>

                        </TabPane>
                    </Tabs>
                </div>
            </div>



            <div>
                <AgriMartFooter />

            </div>

        </div>

    );
}

export default AgriMartFarmerOrderManagement;