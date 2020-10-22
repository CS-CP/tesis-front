import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { Upload, message, Icon } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import notify from "../Public/notification/notify";
import '../App.css';

import { Form, Button } from "antd";

const { Dragger } = Upload;
const FormItem = Form.Item;


export class DragFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            readerFiles: null,
            nameAirports: 'Archivo de aeropuertos sin cargar',
            nameFlights: 'Plan de Vuelos sin cargar',
            readerFlights: null,
            dataFiles: [],
            nameFiles: [],

            fileList: [],
        };

        //this.myBeforeUpload = this.myBeforeUpload.bind(this);
        this.onFileChange = this.onFileChange.bind(this);

    }

    analizar = e => {
        e.preventDefault();
        this.props.goAnalizar();
    };

    onFileChange(fileList) {
        if (fileList.file.status !== 'uploading') {
            /*let reader = new FileReader();
            reader.onload = (e) => {
                console.log(e.target.result);
            }
            reader.readAsText(fileList.file.originFileObj);*/
        }
        if (fileList.file.status === 'done') {
            message.success(`Archivo ${fileList.file.name} cargado correctamente`);

        } else if (fileList.file.status === 'error') {
            fileList.file.status = 'done';// QUE TRUKAZO :V
            message.success(`Archivo ${fileList.file.name} cargado correctamente`);
        }
        console.log("ASD");
        this.setState({ fileList: [...fileList.fileList] });
        var ij = 0;
        let aux = [];
        for (ij = 0; ij < this.state.fileList.length; ij++) {
            let reader = new FileReader();
            let file = this.state.fileList[ij].originFileObj;
            reader.readAsText(file);
            reader.onload = (e) => {
                //console.log(e.target.result);
                aux.push(e.target.result);
            }
        }
        this.setState({ readerFiles: aux });
        console.log("EL STATE DEL readerFiles GAA 2,", this.state.readerFiles);
        //this.props.inputChange2('myReaderFiles', this.state.readerFiles);
    }



    render() {
        const props = {
            //name: 'file',
            multiple: true,
            listType: "picture",
            className: "upload-list-inline",
            //name: 'file',
            action: '//jsonplaceholder.typicode.com/posts/',//"https://www.mocky.io/v2/5cc8019d300000980a055e76'",
            /*headers: {
                authorization: /*'authorization-text''application/json',
            },*/
            beforeUpload: file => {
                if (file.type !== 'image/png') { //'image/jpg' image/jpeg'
                    message.error(`${file.name} is not a png file`);
                }
                return file.type === 'image/png';
            },
            onChange: info => {
                console.log(info.fileList);
                var newxd = info.fileList.filter(file  => !!file.status );
                console.log("newxd :",newxd);
                // file.status is empty when beforeUpload return false
                //updateFileList(info.fileList.filter(file => !!file.status));
            },
        };
        return (
            <div>
                <br />
                <br />
                <h3>Suba imágenes de trampas pegantes amarillas a analizar:  </h3>
                <br />
                <Dragger {...props}
                //fileList={this.state.fileList} onChange={this.onFileChange}
                >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Haga click o arrastre las imágenes aquí</p>

                </Dragger>
                <div class="container-button">
                    <div class="center">
                        <Button className="normal-button" onClick={this.analizar} >
                            Analizar
                    </Button>
                    </div>
                </div>
                <br/>

            </div>
        );
    }
}
export default DragFile