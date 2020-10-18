import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import DragFile from './components/DragFile';

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    console.log("HOLA APP");
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">Inicio</Menu.Item>
              <Menu.Item key="2">Contáctanos</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px'}}>
            <div class="cover d-flex justify-content-center align-items-center flex-column image">
              <h1 style={{color: "floralwhite"}}> 
                YOPS
              </h1>
            </div>
            <DragFile></DragFile>
            <div className="site-layout-content"></div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>Trabajo de investigación PUCP 2020</Footer>
        </Layout>
      </div>
    )
  }

}

export default App;


