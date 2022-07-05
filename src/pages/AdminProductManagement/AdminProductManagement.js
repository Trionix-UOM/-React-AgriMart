import React, { useState, useEffect } from "react";
import AgriMartAdminNavBar from "../../components/AgriMartAdminNavBar/AgriMartAdminNavBar";
import "./AdminProductManagement.css";
import AgriMartFooter from "../../components/AgriMartFooter/AgriMartFooter";
import AgriMartAdminSideBar from '../../components/AgriMartSideBar/AgriMartSideBar';
import ProductTable from './ProductTable';
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import 'antd/dist/antd.css';
import { Button, notification } from "antd";
import { Tabs, Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineEdit  } from "react-icons/ai";

const { TabPane } = Tabs;

function AdminProductManagement(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [productId, setProductId] = useState();
  
  useEffect(() => {
    getAllProducts();
  }, []);

  

  let getAllProducts = (e) => {
    try {
      axios({
        method: "get",
        url: "http://localhost:8080/products",
      })
        .then((res) => {
          console.log("result", res);
          console.log("data", res.data);
          setData(res.data);
          console.log("data-array", data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();
  let onUpdate = (item) => {
    const { productId: id } = item;

    navigate("/editproduct/" + id + "/", { state: item });

    console.log("ID----", id);
    
  };

  let onDelete = (id) => {
    axios({
      method: "delete",
      url: `http://localhost:8080/products/${id}`,
    })
      .then((res) => {
        notification.success({
          message: "Product Deleted Successfully",
        });
        setIsLoading(false);
      })
      .catch((error) => {
        notification.error({
          message: "Something Went Wrong",
        });
        setIsLoading(false);
      });
  };

const handleHide = () => {
  // Persorms Hide action
}


  return (
    <div>
      <div>
        <AgriMartAdminNavBar />
      </div>

      <h2 class="txt-header">Product Management</h2>
      <div style={{float:'left', position:'fixed'}}><AgriMartAdminSideBar/></div>
                <div className="card-container" style={{margin:'40px 100px 0px 210px', position:'relative'}} >
                  

                             <ProductTable/>

                </div>

      <div>
        <AgriMartFooter />
      </div>
    </div>
  );
}

export default AdminProductManagement;
