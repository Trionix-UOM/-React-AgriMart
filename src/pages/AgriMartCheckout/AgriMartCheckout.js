import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import axios from "axios";
import "./AgriMartCheckout.css";
import AgriMartNavBar from "../../components/AgriMartNavBar/AgriMartNavBar";
import { Button, Col, Form, Input, InputNumber, Row, message, Select, Space, Card } from "antd";
import FormItem from "antd/lib/form/FormItem";
import TextArea from "antd/lib/input/TextArea";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import { inputAdornmentClasses } from "@mui/material";

const AgriMartCheckout = () => {
  const requiredValidation = [{ required: true, message: "Required" }];

  //-------------Success Message
  const key = 'updatable';

const success = () => {
  message.loading({ content: 'Loarding',
  className: 'custom-class',
  style: {
    marginTop: '20vh',
  }, 
});
  setTimeout(() => {
    message.success({ content: 'Success',
    className: 'custom-class',
    style: {
      marginTop: '20vh',
    }, });
  }, 3600);
};

  //-------------------------------------------

  //validation
  // const {
  //   register,
  //   formState: { errors },
  // } = useForm();

  const [form] = Form.useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  // console.log(form)
  const { isEmpty, items, cartTotal } = useCart();
  const [fullname, setfullname] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [province, setprovince] = useState("");
  const [zipcode, setzipcode] = useState("");

  let handleSubmit = (e) => {

    console.log(e);

    try {
      const ShippingDetail = {
        fullname: fullname,
        phonenumber: phonenumber,
        email: email,
        address: address,
        city: city,
        province: province,
        zipcode: zipcode,
      };
console.log();
      axios({
        method: "post",
        url: "http://localhost:8080/createShipping",
        data: ShippingDetail,
      })
        .then((res) => {
          console.log("result", res);
          console.log("data", res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };


//Col2 Table
const [cartDetails, setCartDetails] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/receiveToCart")
    .then(res => {
      console.log(res.data);
      setCartDetails(res.data)
  })
  .catch(err=>{
    console.error(err)
  })
  },[])


  

  console.log("re-rendered");

  return (
    <>
      <AgriMartNavBar />
      <div className="content">
      <Row className='checkRow'>
        
      <Col className='checkCol' span={12}><div>
      <Card>
                    <h4 class="txt-header">Add Shipping Details</h4>
                    <div class="form-style">
                    <Form
                        onFinish={handleSubmit}
                        // onClick={success}
                        layout="vertical"
                        labelCol={{ flex: "110px" }}
                        labelAlign="left"
                        labelWrap
                        form={form}
                        wrapperCol={{ flex: 1 }}
                      >
                          <FormItem label="Full Name" name="name" 
                            rules={[
                              { 
                                required: true, 
                                message: 'Please input your Full Name!' 
                              },
                              
                              {
                                pattern: new RegExp(/^[a-zA-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]+$/i),
                                message: "field does not accept numbers"
                              },
                            
                            ]}
                             >
                              <TextArea className="w-100" />
                            </FormItem>
                            <FormItem
                          label="Phone Number"
                          name='Phone Number'
                          placeholder = "+94"
                          required
                          rules={[
                            { 
                              required: true, 
                              message: 'Please input your phone number!' 
                            },   
                            {
                              pattern: /^(?:\d*)$/,
                              message: "Value should contain numbers",
                            },
                            {
                              pattern: /^[\d]{9,10}$/,
                              message: "Enter 10 digits phone number",
                            },
                          
                          ]}
                          validateTrigger="onBlur"
                        >
                          <InputNumber className="w-100" />
                        </FormItem>

                          <FormItem
                            label="E mail (Optional)"
                            name="email"
                          >
                            <EmailIcon/>
                            <Input type="email" />
                          </FormItem>

                          <FormItem label="Address" name="address" 
                            rules={[
                              { 
                                required: true, 
                                message: 'Please input your Address!' 
                              },
                              
                              // {
                              //   pattern: new RegExp(/^[a-zA-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]+$/i),
                              //   message: "field does not accept numbers"
                              // },
                            
                            ]}
                             >
                              <TextArea className="w-100" />
                            </FormItem>

                        <Row gutter={8}>
                          <Col md={8}>
                            <FormItem label="Province" name="province"
                            rules={requiredValidation}
                            >
                              <Select className="w-100">
                                  <option value={"Central"}>Central</option>
                                  <option value={"Eastern"}>Eastern</option>
                                  <option value={"Northern"}>Northern</option>
                                  <option value={"Trincomalee"}>North Central</option>
                                  <option value={"North Western"}>North Western</option>
                                  <option value={"Sabaragamuwa"}>Sabaragamuwa</option>
                                  <option value={"Southern"}>Southern</option>
                                  <option value={"Uva"}>Uva</option>
                                  <option value={"Western"}>Western</option>
                                </Select>
                            
                            </FormItem>
                          </Col>

                          <Col md={8}>
                            <FormItem label="City" name="city" 
                            rules={[
                              { 
                                required: true, 
                                message: 'Please input your City!' 
                              },
                              
                              {
                                pattern: new RegExp(/^[a-zA-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]+$/i),
                                message: "field does not accept numbers"
                              },
                            
                            ]}
                             >
                              <TextArea className="w-100" />
                            </FormItem>
                          </Col>

                          <Col md={8}>
                            <FormItem label="Zip Code" name="zip" required
                              rules={[
                                { 
                                  required: true, 
                                  message: 'Please input zip code!' 
                                },
                                
                                {
                                  pattern: /^[\d]{5}$/,
                                  message: "Enter 5 digit zip code",
                                },
                              
                              ]}
                             >
                              <InputNumber className="w-5" />
                            </FormItem>
                          </Col>
                        </Row>

                        <Row gutter={8}>
                          <Col md={8}>
                         
                          </Col>
                          <Col md={8}>
                         
                          </Col>
                          <Col md={8}>
                          <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="my-2 btn-danger"
                                    varient="danger"
                                    
                                  >
                                    Save
                                  </Button>
                          </Col>
                        </Row>

                        <Row gutter={8}>
                          <Col md={8}>
                          <Link to="/ToCart">
                                <Button
                                type="primary"
                                  className="btn btn-primary"
                                >
                                  Back to Cart
                                </Button>
                              </Link>
                          </Col>
                          <Col md={8}>
                        
                          </Col>
                          <Col md={8}>
                          <Link to="/ToPayment">
                                <button
                                type="primary"
                                htmlType="submit"
                                  color="red"
                                  className="btn btn-danger"
                                >
                                  Proceed to Pay
                                </button>
                              </Link>
                          </Col>
                        </Row>
                        <Space>
                        </Space>
                      </Form>
                    </div></Card>
                  </div></Col>


            <Col className='checkCol' span={8}><table className="table table-bordered">
              <thead>
                <tr>
                  <th width="20%">Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td>
                          <img
                            src={item.img}
                            style={{ height: "2rem", width: "2rem" }}
                          />
                        </td>
                        <td>Rs. {item.price}</td>
                        <td>{item.quantity}</td>
                        <td>Rs. {item.price * item.quantity}</td>
                      </tr>
                    </>
                  );
                })}
                <tr>
                  <td colSpan="2" className="text-left">
                    <b>Grand Total</b>
                  </td>
                  <td colSpan="2" className="text-end">
                    Rs. {cartTotal}
                  </td>
                </tr>
              </tbody>
              </table>
            </Col>
          </Row>
         
      
      </div>
    </>
  );
};

export default AgriMartCheckout;
