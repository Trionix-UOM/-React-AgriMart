import React from 'react';
import AgriMartAdminNavBar from '../../components/AgriMartAdminNavBar/AgriMartAdminNavBar';
import './AdminManageReview.css';
import 'antd/dist/antd.css';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
import AgriMartAdminSideBar from '../../components/AgriMartSideBar/AgriMartSideBar';
import { Table } from 'react-bootstrap';
import {Rate} from 'antd';


function AdminManageReview () {
    
    return (
      <div>
      <div>
        <AgriMartAdminNavBar />
      </div>

      <h2 class="txt-header">Customer Reviews</h2>
      <div style={{float:'left', position:'fixed'}}><AgriMartAdminSideBar/></div>
                <div className="card-container" style={{margin:'40px 100px 0px 210px', position:'relative'}} >
                  

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Customer Name</th>
                                            <th>Order ID</th> 
                                            <th>Rating</th>
                                            <th>Feedback Note</th>
                                    
                                        
                                        </tr>
                                     
                                        <tr>
                                          <td>P.S.U. Silva</td>
                                          <td>0001</td>
                                          <td><Rate defaultValue={4}></Rate></td>
                                          <td>Quality and fresh</td>
                                     
                               
                                        </tr>
                                        </thead>
                                
                                   
                                </Table>

                </div>

      <div>
        <AgriMartFooter />
      </div>
    </div>
      );
}

export default AdminManageReview;