import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import Admin from '../../resources/images/adminImg.png'
import { width } from '@mui/system';
import {Link,useNavigate} from 'react-router-dom';



  const onFinish = (values) => 
    console.log('Received values of form: ', values);
  

function AdminSignIn() {
  
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const navigateFunc = () => {
    navigate('/portal');
  };


  return (
  <>
    <div className='adminDiv'> 
       <React.Fragment>
        <div style={{height:'40px'}}></div>
      
      <Container className='adminDiv' style={{height:'620px', width: '600px', backgroundColor:'#DCDCDC',  borderRadius:'8px'}}>
      <Box sx={{ bgcolor: ' rgb(24, 24, 24', height: '95vh' }}>
        <img style={{marginLeft:'170px'}} src={Admin} width={250} height={250} />
        <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            
            message: 'Please input your username!',
          },
        ]}
      >
        <Input  type="email"/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            pattern: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button  type="submit" htmlType="submit"
        onClick={navigateFunc}>
        Submit
          
       
        </Button>
      </Form.Item>
    </Form>
    </Box>
       
      </Container>
    </React.Fragment>
    </div>
    </>
  )
}

export default AdminSignIn
