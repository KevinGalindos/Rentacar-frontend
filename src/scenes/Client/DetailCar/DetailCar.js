import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import { user as userActions, user } from '../../../services/User/UserActions'
import Picanto from "../../../assets/image/kia-picanto.jpg";
import AliceCarousel from 'react-alice-carousel';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';



export const DetailCar = ({ history, match }) => {

    const responsive = { 0: { items: 1 }, 1024: { items: 1 } }

    const handleOnDragStart = (e) => e.preventDefault()

    const dummyMini = [{
        id: 1, marca: "kia",
        imagen: [
            { id: 1, name: Picanto },
            { id: 2, name: Picanto },
            { id: 3, name: Picanto },
            { id: 4, name: Picanto },
            { id: 5, name: Picanto },
        ]
    }]

    const dummyImages = [
        { id: 1, name: "https://www.motor.es/fotos-noticias/2018/01/precio-kia-picanto-gt-line-10-t-gdi-100-cv-201843199_1.jpg" },
        { id: 2, name: "https://www.coches.com/fotos_historicas/kia/Picanto-GT-Line-2017/kia_picanto-gt-line-2017_r22.jpg" },
        { id: 3, name: "https://www.motor.com.co/files/article_multimedia/uploads/2019/06/19/5d0a718c7ecc6.jpeg" },
        { id: 4, name: "https://cdn.motor1.com/images/mgl/jLl71/s3/kia-picanto-2017.jpg" },
        { id: 5, name: "https://movicentro.co/portal/wp-content/uploads/2020/02/kia_picanto_ion_extreme_rjs112_serviautos_4.jpg" },
    ]


    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemSelect, setItemSelect] = useState(1)

    const slideTo = (i) => {
        setCurrentIndex(i)
        setItemSelect(i)
    }


    const onSlideChanged = (e) => { setCurrentIndex(e.item) }

    const slideNext = () => { setCurrentIndex(currentIndex + 1) }

    const slidePrev = () => { setCurrentIndex(currentIndex - 1) }

    const renderThumbs = () =>
        <ul className="mini_container-imgs-mini">{dummyImages.map((item, i) =>
            <li className="mini_container-list-imgs" key={i} onClick={() =>
                slideTo(i)
            }>
                <Link>
                    <div className="mini">
                        <img className="mini_images" src={item.name} />
                    </div>
                </Link>

            </li>)}
        </ul>;

    const handleItemSelect = (id) => {
        setItemSelect(id)
    }

    console.log(itemSelect)
    return (
        <div className="DetailCar">
            <Header />

            <div className="content-page">

                <div className="container">

                    <div className="container_carousel">
                     

                        <button className="btn-left" onClick={() => slidePrev()}><LeftOutlined /></button>
                        <button className="btn-right" onClick={() => slideNext()}><RightOutlined /></button>


                        <AliceCarousel
                            dotsDisabled={true}
                            buttonsDisabled={true}
                            slideToIndex={currentIndex}
                            onSlideChanged={onSlideChanged}
                        // responsive={responsive}
                        >

                            {dummyImages && dummyImages.map((item, index) =>
                                <div className="carousel-imgs">
                                    <img src={item.name} />
                                </div>
                            )}

                        </AliceCarousel>
                        {renderThumbs()}

                    </div>

                    <div className="container_description">
                        <div className="container_description_title">
                            <h2>KIA PICANTO MODELO 2012 </h2>
                        </div>
                        <div className="container_descripcion_price">
                            <h2>28.000.000</h2>
                        </div>
                        <div className="container_descripcion_ubication">
                            <h2>Medellin</h2>
                        </div>
                        <div className="container_descripcion_phone">
                            <h2>3151314420</h2>
                        </div>

                        <div className="contact-owner">
                            <div className="contact-owner_container">
                                <div className="title-contact">
                                    <h3>Contacta al Dueño</h3>
                                </div>
                                <div className="contact-phone">
                                    <input type="number" name="" id="" placeholder="Escribe tu teléfono" />
                                </div>
                                <div className="contact-mail">
                                    <input type="email" name="" id="" placeholder="Escribe tu email" />
                                </div>
                                <div className="contact-message">
                                    <input type="textarea" name="" id="" placeholder="Deja tu mensaje" />
                                </div>
                                <div>
                                    <button type="submit">ENVIAR MENSAJE</button>
                                </div>


                            </div>

                        </div>
                    </div>

                </div>

                <div className="vehicle-data-box">
                    <div className="data-title">
                        <h2>CARACTERISTICAS DEL VEHICULO</h2>
                    </div>

                    <div className="row-data">
                        <div className="brand-mark">
                            <h3>MARCA</h3>
                            <h4>KIA</h4>
                        </div>
                        <div className="model-car">
                            <h3>MODELO</h3>
                            <h4>PICANTO</h4>
                        </div>

                    </div>

                    <div className="row-data">
                        <div className="year">
                            <h3>AÑO</h3>
                            <h4>2016</h4>
                        </div>
                        <div className="capacity">
                            <h3>CAPACIDAD</h3>
                            <h4>5 PASAJEROS</h4>
                        </div>

                    </div>

                    <div className="row-data">
                        <div className="id-car">
                            <h3>ULTIMO DIGITO PLACA</h3>
                            <h4>5</h4>
                        </div>
                        <div className="motor-cap">
                            <h3>CILINDRAJE</h3>
                            <h4>1.6</h4>
                        </div>

                    </div>

                    <div className="row-data">
                        <div className="car-trans">
                            <h3>TRANSMISION</h3>
                            <h4>MANUAL</h4>
                        </div>
                        <div className="color">
                            <h3>COLOR</h3>
                            <h4>BLANCO</h4>
                        </div>

                    </div>

                </div>
            
            </div>

            <Footer />


        </div>
    );
}