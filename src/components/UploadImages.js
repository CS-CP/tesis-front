import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import '../App.css';
import { Button } from "antd";


export class UploadImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [],
        };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
            pictures: pictureDataURLs
        });
        this.props.imagesToSend(pictureDataURLs);
    }
    analizar = e => {
        e.preventDefault();
        this.props.goAnalizar();
    };

    render() {
        console.log("PROPS: ", this.props);
        return (
            <div>
                <ImageUploader
                    withIcon={true}
                    withPreview={true}
                    label={"Suba solo imágenes en formato jpg, jpeg o png"}
                    buttonText='Haga click aquí para subir las imágenes.'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.jpeg', '.png']}
                    maxFileSize={5242880}
                    fileSizeError={"es un archivo es muy pesado, el tamaño máximo aceptable es 5 MB"}
                    fileTypeError={"no es una imagen en formato jpg, jpeg o png"}
                />
                <div className="container-button">
                    <div className="center">
                        <Button className="normal-button" onClick={this.analizar} disabled={this.props.loading}>
                            Analizar
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default UploadImages