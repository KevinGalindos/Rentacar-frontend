
import React, { useState } from 'react';
import { Header } from '../../../components/Header/Header';
import { Footer } from '../../../components/Footer/Footer';
import { Input, Select, DatePicker } from 'antd';
import { Upload } from 'antd';
import { Tabs } from 'antd';
import './Postcar.scss'


export const Postcar = () => {

    const { Option } = Select;

    const { TabPane } = Tabs;

    
        const [fileList, setFileList] = useState([
            {
                uid: '-1',
                name: 'imagen lateral',
                status: 'done',
                url: '',
            },
            {
                uid: '-2',
                name: 'imagen frente',
                status: 'done',
                url: '',
            },
            {
                uid: '-3',
                name: 'imagen adentro',
                status: 'done',
                url: '',
            },
            {
                uid: '-4',
                name: 'imagen posterior',
                status: 'done',
                url: '',
            },
        ]);

        const onChange = ({ fileList: newFileList }) => {
            setFileList(newFileList);
        };

        const onPreview = async file => {
            let src = file.url;
            if (!src) {
                src = await new Promise(resolve => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file.originFileObj);
                    reader.onload = () => resolve(reader.result);
                });
            }
            const image = new Image();
            image.src = src;
            const imgWindow = window.open(src);
            imgWindow.document.write(image.outerHTML);
        };
    



    return (

        <div className="postcar">
            <Header></Header>
            <div className="container-tab">
                <Tabs>
                    <Tabs defaultActiveKey="1" type="card" >
                        <TabPane tab="VEHICULOS" key="1">
                                <h1>PUBLICAR VEHICULOS</h1>
                                <h3>
                                para publicar tu vehiculo se requiere diligenciar complentamente el formulario. Una vez diligenciado
                                pasara a revision por parte del soporte técnico.
                                </h3>
                            <div className="container-tab_container-categories">
                                    <h1>CATEGORIAS *</h1>
                                
                                    <Select className="type" defaultValue="TIPO" style={{ width: '30%' }}>
                                        <Option value="Option1">Option1</Option>
                                        <Option value="Option2">Option2</Option>
                                    </Select>
                                   
                                    <Select className="brand"defaultValue="MARCA" style={{ width: '30%' }}>
                                        <Option value="Option1">Option1</Option>
                                        <Option value="Option2">Option2</Option>
                                    </Select>

                                    <DatePicker picker="year" placeholder="AÑO"  />
                               
                            </div>
                            <div className="container-tab_container-photo" >
                                <h2>
                                    Agrega una o mas fotos ( maximo 5 fotos ) *
                                </h2>
                                
                                    <Upload 
                                        action=""
                                        listType="picture-card"
                                        fileList={fileList}
                                        onChange={onChange}
                                        onPreview={onPreview}
                                    >
                                        {fileList.length < 5 && '+ imagen principal'}
                                    </Upload >
                            </div>
                            <div className="container-tab_container-form">


                            </div>
                        </TabPane>
                        <TabPane tab="OTRO REQUERIMIENTO QUE VAYAMOS A USAR" key="2">
                            Content of card tab 2
                        </TabPane>

                    </Tabs>
                </Tabs>

            </div>

            <Footer></Footer>
        </div >

    );

}