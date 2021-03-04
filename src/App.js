// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; 
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';



function App() {

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  }

  return (
    <div className="App-header">
     {/*<hi>Punto de Venta</hi>
    <br/><br/><br/>
      <header className="App-header">
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
        rules={[
          {
            required: true,
            message: 'Escriba su Usuario, por favor! ',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Usuario" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Escriba su Contraseña, por favor! ',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Contraseña"
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
        <Button type="primary" htmlType="submit" className="login-form-button">
          Accesar
        </Button>
         <a href="https://www.google.com/" target="blank" style={{ alignContent: 'center'}}>Registrarse!</a>
      </Form.Item>
    </Form>

    </div>
  );
}

export default App;