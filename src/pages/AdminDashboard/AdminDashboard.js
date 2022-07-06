import React from "react";
import AgriMartAdminNavBar from "../../components/AgriMartAdminNavBar/AgriMartAdminNavBar";
import TopSellingTable from './TopSellingTable';
import RecentOrderTable from './RecentOrderTable';
import "./AdminDashboard.css";
import AgriMartFooter from "../../components/AgriMartFooter/AgriMartFooter";
import { Progress } from 'antd';
import { MDBCol } from "mdbreact";
import { DataGrid } from '@mui/x-data-grid';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar';



function AdminDashboard() {
  return (
    <>
    
   <div>

      <div>
        <AgriMartAdminNavBar />
      </div>
      <h2 class="txt-header">Administration Dashboard</h2>
      <div style={{float:'left', position:'fixed'}}><AdminSideBar/></div>
      <div  style={{margin:'0px 100px 0px 210px'}} >


  <div class="row">

    <div class="col">
     <div class="p-3 border bg-dark">Top Selling</div>
     <div style={{ height: 'auto', width: '100%', marginTop:'40px' }}>
     <TopSellingTable/>
    </div>
    </div>


    <div class="col">
      <div class="p-3 border bg-dark">Recent Orders</div>
      <div style={{ height: 'auto', width: '100%', marginTop:'40px' }}>
     <RecentOrderTable/>
    </div>
    </div>
  </div>

<br/>

 
      <div>

        <AgriMartFooter />
      </div>
    </div>
    </div>
    </>
  );
}
export default AdminDashboard;
