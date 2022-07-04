import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import Admin from '../../resources/images/adminImg.png'
import {Link,useNavigate} from 'react-router-dom';


  

function AdminResetPassword() {
  
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
        <br/><br/>  <br/><br/>
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
        label="New Password"
        name="password"
        rules={[
          {
            pattern: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
            required: true,
            message: 'New Password',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm New Password"
        name="password"
        rules={[
          {
            pattern: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
            required: true,
            message: 'Confirm New Password',
          },
        ]}
      >
        <Input.Password />
        <br/><br/>   <br/><br/>
      </Form.Item>
        <Button  type="primary" htmlType="submit" style={{marginLeft:'210px'}}
        onClick={navigateFunc}>
        Reset Password 
        </Button>
 
    </Form>
    </Box>
       
      </Container>
    </React.Fragment>
    </div>
    </>
  )
}

export default AdminResetPassword;