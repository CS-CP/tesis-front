import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Spin } from 'antd';
import PieComp from './components/PieComp';
import BarComp from './components/BarComp';
import { Row, Col } from 'antd';
import UploadImages from './components/UploadImages';
import API from './services/API';
import notify from './Public/notification/notify';
import CarouselComp from "./components/CarouselComp";
import "react-responsive-carousel/lib/styles/carousel.min.css";




const { Header, Footer, Content } = Layout;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      analizar: false,
      images: [],
      spin: false,
      respuesta: {
        detalleImgs: [],
      },
    };
    this.goAnalizar = this.goAnalizar.bind(this);
    this.sendImages = this.sendImages.bind(this);

  }
  goAnalizar() {
    console.log("Data al Back: ", this.state.images);
    if (this.state.images.length !== 0) {
      this.setState({ spin: true });
      let json = {
        images: this.state.images
      }
      API.post("api/detectImages", json).then(response => {
        console.log("El back respondió: ", response.data);
        this.setState({ analizar: true, spin: false, respuesta: response.data });
        notify.success({
          message: 'Se procesaron todas las imágenes.'
        });
      }).catch((error) => {
        this.setState({ spin: false });
        notify.error({
          message: 'Ocurrió un error inseperado.'
        });
      })
    }
    else {
      notify.info({
        message: 'No ha subido imágenes para analizar.'
      })
    }

  }
  sendImages(imagesToSend) {
    this.setState({ images: imagesToSend })
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
              <h1 style={{ color: "greenyellow", fontSize: "64px" }}>
                🌱 Verde hoja 🌱
              </h1>
            </div>
            <br />
            <br />
            <h4>Suba imágenes de trampas pegantes amarillas a analizar:  </h4>
            <br />
            <UploadImages imagesToSend={this.sendImages} goAnalizar={this.goAnalizar} loading={this.state.spin}></UploadImages>
            <br />
            <br />
          </Content>
          {this.state.spin && (
            <div className="spinner"><Spin tip="Detectando insectos..." size="large" /></div>
          )}
          <h2 className="title-text" >{this.state.analizar ? "Resultados del análisis de imágenes:" : ""}</h2>
          {this.state.analizar && (
            <div>
              <Row>
                <Col span={6}></Col>
                <Col span={12}><div className="container-centered"><CarouselComp dataReporte={this.state.respuesta}></CarouselComp></div></Col>
                <Col span={6}></Col>
              </Row>
            </div>
          )}



          {this.state.analizar && (
            <div style={{ margin: "48px" }}>
              <Content>
                <Row>
                  <Col span={8} push={16}>
                    <PieComp dataReporte={this.state.respuesta}></PieComp>
                  </Col>
                  <Col span={16} pull={8}>
                    <BarComp insectType={["Mosca Blanca", "Mosca Minadora", "Pulgón verde del melocotonero"]} dataReporte={this.state.respuesta}></BarComp>
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


