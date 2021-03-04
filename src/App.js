// import logo from './logo.svg';
import React, { useState } from 'react'
  import './App.css';
import 'antd/dist/antd.css'; 
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined, BarcodeOutlined } from '@ant-design/icons';



function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if ((username !== '') & (password !== '')) {
        // alert('¿Porqué lo tienes TODO, Bb?');
        message.success('Pero, ¿Porqué lo tienes TODO, Bb?');
      }else{
        // alert('éallleeee!, capture los datos');
        message.warning('éallleeee! captura tus datos Baby!');
      }
    } catch (error) {
      console.log(error.message)
    }
    
  } 

  return (
    <div className="App-header">
    <h3>Punto de Venta</h3>
    <BarcodeOutlined style={{ fontSize: '90px', color: '#000'}}/>
    <br/>
       {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      <DatePicker />*/}
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        // rules={[
        //   {
        //     required: true,
        //     message: 'Escriba su Usuario, por favor! ',
        //   },
        // ]}
      >
        <Input 
          prefix={<UserOutlined 
          className="site-form-item-icon" />} 
          placeholder="Usuario" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          required
          />
      </Form.Item>
      <Form.Item
        name="password"
        // rules={[
        //   {
        //     required: true,
        //     message: 'Escriba su Contraseña, por favor! ',
        //   },
        // ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Contraseña"
          value="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Recordarme</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="https://www.google.com/" target="blank">
          Olvidé mi Contraseña
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary"  className="login-form-button" onClick={handleSubmit}>
          Accesar
        </Button>
         <a href="https://www.google.com/" target="blank" style={{ alignContent: 'center'}}>Registrarse!</a>
      </Form.Item>
    </Form>

    </div>
  );
}

export default App;