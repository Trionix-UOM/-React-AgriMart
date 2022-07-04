import React from "react";
import AgriMartAdminNavBar from "../../components/AgriMartAdminNavBar/AgriMartAdminNavBar";
import "./AdminDashboard.css";
import AgriMartFooter from "../../components/AgriMartFooter/AgriMartFooter";
import { Progress } from 'antd';
import { MDBCol } from "mdbreact";
import { DataGrid } from '@mui/x-data-grid';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar';



const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'product', headerName: 'Product', width: 190 },
  
 
];

const rows = [
  { id: 1, product:'Carrot'},
  { id: 2, product:'Beans'},
  { id: 3, product:'Cabbage'},
  { id: 4, product:'Ghurkin'},
  { id: 5, product:'Mango'},
];



function AdminDashboard() {
  return (
    <>
    
   <div>

      <div>
        <AgriMartAdminNavBar />
      </div>
      <h2 class="txt-header">Administration Dashboard</h2>
      <div style={{float:'left', position:'fixed'}}><AdminSideBar/></div>
      <div className="card-container" style={{margin:'0px 100px 0px 210px', position:'relative'}} >

      
    <div class="container overflow-hidden">
  <div class="row">
    <div class="col">
     <div class="p-3 border bg-dark">Top Selling</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-dark">Recent Orders</div>
    </div>
  </div>
</div>
<br/>
<div class="container overflow-hidden">
  <div class="row">
    <div class="col">
     <div class="p-3 border bg-light">
     <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns} 
      />
    </div>
     </div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">
      <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">img</th>
      <th scope="col">Product</th>
      <th scope="col">Customer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>.</td>
      <td>Carrot</td>
      <td>N.K.Silva</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>.</td>
      <td>Cabbage</td>
      <td>Y.Lalith</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>.</td>
      <td>Mango</td>
      <td>K.Perera</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>.</td>
      <td>Mango</td>
      <td>K.Perera</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>.</td>
      <td>Mango</td>
      <td>K.Perera</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>.</td>
      <td>Mango</td>
      <td>K.Perera</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>.</td>
      <td>Mango</td>
      <td>K.Perera</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>.</td>
      <td>Mango</td>
      <td>K.Perera</td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  </div>
</div>
    <div>
     </div>

      <div>
        {" "}
        <AgriMartFooter />
      </div>
    </div>
    </div>
    </>
  );
}
export default AdminDashboard;
