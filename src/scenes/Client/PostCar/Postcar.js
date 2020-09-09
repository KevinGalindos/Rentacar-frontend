
import React, { useState } from 'react';
import { Header } from '../../../components/Header/Header';
import { Footer } from '../../../components/Footer/Footer';
import { Select, DatePicker } from 'antd';
import { Upload } from 'antd';
import { Tabs } from 'antd';
import { Form, Input, Button } from 'antd';
import './Postcar.scss'


export const Postcar = () => {

    const { Option } = Select;

    const { TabPane } = Tabs;

    const [form] = Form.useForm();

    const { TextArea } = Input;

    
    const formItemLayout = {
        labelCol: {
          span: 2.5,
            },
        wrapperCol: {
          span: 12,
        },
      };
      
      const formTailLayout = {
        labelCol: {
          span: 5,
        },
        wrapperCol: {
          span: 8,
          offset: 4,
        },
      };

      const onCheck = async () => {
        try {
          const values = await form.validateFields();
          console.log('Success:', values);
        } catch (errorInfo) {
          console.log('Failed:', errorInfo);
        }
      };


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

                                <Select className="brand" defaultValue="MARCA" style={{ width: '30%' }}>
                                    <Option value="Option1">Option1</Option>
                                    <Option value="Option2">Option2</Option>
                                </Select>

                                <DatePicker picker="year" placeholder="MODELO" />

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
                            <h1>DATOS DE VEHICULO *</h1>
                                <Form  form={form} >
                                    <label>
                                        Placa : 
                                    </label>
                                    <Form.Item 
                                        {...formItemLayout}
                                        name="placa"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'por favor digita la placa',
                                            },
                                        ]}
                                    >
                                    
                                        <Input type="text" placeholder="digita la placa" />
                                    </Form.Item>
                                    <label>
                                       Cilindraje : 
                                    </label>
                                    <Form.Item 
                                        {...formItemLayout}
                                        name="clindraje"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'por favor digita el cilindraje',
                                            },
                                        ]}
                                    >
                                    
                                        <Input  type="number" placeholder="ingresa el cilindraje" />
                                    </Form.Item>
                                    <label>
                                        Capacidad : 
                                    </label>
                                    <Form.Item 
                                        {...formItemLayout}
                                        name="capacidad"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'ingresa la capacidad del vehiculo',
                                            },
                                        ]}
                                    >
                                    
                                        <Input type="number" placeholder="ingresa la capacidad" />
                                    </Form.Item>
                                    <label>
                                        Numero Interno Vehiculo : 
                                    </label>
                                    <Form.Item 
                                        {...formItemLayout}
                                        name="numInterno"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Ingresa el numero interno del vehiculo',
                                            },
                                        ]}
                                    >
                                    
                                        <Input type="number" placeholder="ingresa el numero interno" />
                                    </Form.Item>
                                    <label>
                                        Descripcion : 
                                    </label>
                                    <Form.Item 
                                        {...formItemLayout}
                                        name="descripcion"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'ingresa una descripcion',
                                            },
                                        ]}
                                    >
                                    
                                    <TextArea rows={4} />
                                    </Form.Item>
                                    
                                    <label>
                                        Estado : 
                                    </label>
                                    <Form.Item 
                                        {...formItemLayout}
                                        name="estado"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'ingresa el estado del vehiculo',
                                            },
                                        ]}
                                    >
                                    
                                        <Input   placeholder="ingresa el estado " />
                                    </Form.Item>

                                    <Form.Item {...formTailLayout}>
                                        <Button type="primary" onClick={onCheck}>
                                            Publicar
                                        </Button>
                                    </Form.Item>
                                </Form>


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