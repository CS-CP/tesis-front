import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import PieComp from './components/PieComp';
import BarComp from './components/BarComp';
import { Row, Col } from 'antd';
import UploadImages from './components/UploadImages';


const { Header, Footer, Content } = Layout;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      analizar: false,
      images: [],
    };
    this.goAnalizar = this.goAnalizar.bind(this);
    this.sendImages = this.sendImages.bind(this);

  }
  goAnalizar() {
    this.setState({ analizar: true });
    console.log("GO ENVIAR: ", this.state.images);
  }
  sendImages(imagesToSend) {
    this.setState({ images: imagesToSend})
  }

  render() {
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
          <Content style={{ padding: '0 50px' }}>
            <div className="cover d-flex justify-content-center align-items-center flex-column image">
              <h1 style={{ color: "floralwhite", fontSize:"64px" }}>
                YOPS
              </h1>
            </div>
            <br />
            <br />
            <h4>Suba imágenes de trampas pegantes amarillas a analizar:  </h4>
            <br />
            <UploadImages imagesToSend={this.sendImages} goAnalizar={this.goAnalizar}></UploadImages>
            <br />
            <br />
            <h2 className="title-text" >{this.state.analizar ? "Resultados del análisis de imágenes:" : ""}</h2>
          </Content>

          {this.state.analizar && (
            <div style={{ margin: "48px" }}>
              <Content>
                <Row>
                  <Col span={6} push={18}>
                    <PieComp></PieComp>
                  </Col>
                  <Col span={18} pull={6}>
                    <BarComp insectType={["Mosca Blanca", "Mosca Minadora", "Pulgón verde del melocotonero"]}></BarComp>
                  </Col>
                </Row>

              </Content>
            </div>
          )}

          <br />
          {this.state.analizar}<Footer style={{ textAlign: 'center' }}>Trabajo de investigación - PUCP 2020</Footer>
        </Layout>
      </div>
    )
  }

}

export default App;


