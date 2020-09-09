import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Spin, notification, Alert, Checkbox, Empty } from 'antd';
import { UserOutlined, LockOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Banner from "../../../assets/image/banner-home.jpg";
import Picanto from "../../../assets/image/kia-picanto.jpg";

//CATEGORIES
import Automovil from "../../../assets/image/bmw-cat.png";
import Camionetas from "../../../assets/image/lr-cat.png";
import Pasajeros from "../../../assets/image/van-cat.png";
import Camion from "../../../assets/image/camion-cat.png";
import Lujosos from "../../../assets/image/mustang-cat.png";

//BRANDS CARS
import LogoAudi from "../../../assets/image/logo-audi.png";
import LogoBMW from "../../../assets/image/logo-bmw.png";
import LogoChevrolet from "../../../assets/image/logo-chevrolet.png";
import LogoFord from "../../../assets/image/logo-ford.png";
import LogoHyundai from "../../../assets/image/logo-hyundai.png";
import LogoKia from "../../../assets/image/logo-kia.png";
import LogoMazda from "../../../assets/image/logo-mazda.png";
import LogoMercedes from "../../../assets/image/logo-mercedes-benz.png";
import LogoNissan from "../../../assets/image/logo-nissan.png";
import LogoRenault from "../../../assets/image/logo-renault.png";
import LogoToyota from "../../../assets/image/logo-toyota.png";
import LogoVolkswagen from "../../../assets/image/logo-volkswagen.png";

import { auth } from '../../../services/Auth/AuthActions';
import { Header } from '../../../components/Header/Header';
import { Footer } from '../../../components/Footer/Footer';


export const Home = ({ history }) => {

	const { authentication, user } = useSelector(state => state.auth)
	const dispatch = useDispatch()

	const handleDetail = (id) => {
		console.log(id)
		history.push(`/detail-car/${id}`)
	}

	const dummyVehiculos = [
		{ id: 1, name: "Kia Picanto", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "80.000", image: "https://www.motor.com.co/files/article_multimedia/uploads/2019/06/19/5d0a6fd36ed3a.jpeg", },
		{ id: 2, name: "Ford Fiesta", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "80.000", image: "https://www.conduciendo.com/wp-content/uploads/2017/11/FordNewFiesta-27112017-01.jpg", },
		{ id: 3, name: "Kia Rio", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "100.000", image: "https://www.caetanomovilsur.es/wp-content/uploads/2019/04/portada333.jpg", },
		{ id: 4, name: "Hyundai Tucson", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "120.000", image: "https://http2.mlstatic.com/D_NQ_NP_827984-MCO43257338038_082020-W.jpg", },
		{ id: 5, name: "Audi Q5", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "240.000", image: "https://http2.mlstatic.com/audi-q5-ambition-19-D_NQ_NP_864670-MLA40809199844_022020-F.jpg", },
		{ id: 6, name: "BMW X3", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "380.000", image: "https://http2.mlstatic.com/D_NQ_NP_884185-MCO43337647044_092020-W.jpg", },
		{ id: 7, name: "Toyota TXL", puestos: 7, automatico: "Aut", radio: "si", aire: "si", precio: "450.000", image: "https://http2.mlstatic.com/D_NQ_NP_829417-MCO42846632730_072020-W.jpg", },
		{ id: 8, name: "Mazda 3", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "200.000", image: "https://i.ytimg.com/vi/YtZghEKpCeA/maxresdefault.jpg", },
		{ id: 9, name: "Mazda cx5", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "300.000", image: "https://2.bp.blogspot.com/-bQ3j2aNpvzc/XEUqZoI_JlI/AAAAAAAAK4o/7-lt4G31ZAgRERCt4ruG8Qm35gK8UUXiwCEwYBhgL/s1600/DSC_2444%2Bcomo%2Bobjeto%2Binteligente-1%2Bpeq.jpg", },
		{ id: 10, name: "Kia Sportage", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "140.000", image: "https://http2.mlstatic.com/D_NQ_NP_669748-MCO43259540960_082020-W.jpg", },
		{ id: 11, name: "Ford EDGE", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "250.000", image: "https://imgcdn.larepublica.co/i/1200/2019/04/25170631/FORD-EDGE_LR-web.jpg", },
		{ id: 12, name: "Renault Stepway", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "80.000", image: "https://autosaldetalle.com.ar/wp-content/uploads/2019/11/Renault-Stepway-2020-1.jpg", }
	]

	const dummyMarcas = [
		{ id: 1, brand: "Audi", image: LogoAudi, },
		{ id: 2, brand: "BMW", image: LogoBMW, },
		{ id: 3, brand: "Chevrolet", image: LogoChevrolet, },
		{ id: 4, brand: "Ford", image: LogoFord, },
		{ id: 5, brand: "KIA", image: LogoKia, },
		{ id: 6, brand: "Mazda", image: LogoMazda, },
		{ id: 7, brand: "Renault", image: LogoRenault, },
		{ id: 8, brand: "Toyota", image: LogoToyota, },
		{ id: 9, brand: "Volskwagen", image: LogoVolkswagen, },
		{ id: 10, brand: "Hyundai", image: LogoHyundai, },
		{ id: 11, brand: "Mercedes Benz", image: LogoMercedes, },
		{ id: 12, brand: "Nissan", image: LogoNissan, }
	]

	console.log(authentication)

	return (


		<div className="Home">
			<Header history={history} />
			<div className="banner">
				<img className="img-banner" src={Banner} />
			</div>
			<div className="Container-cars">
				<div className="Container-cars_content-box">
					<h1>CONOCE NUESTROS VEHICULOS</h1>
					<div className="cars-grid">
						{dummyVehiculos && dummyVehiculos.length > 0 ?
							<>
								{dummyVehiculos.map((item, index) =>
									<div key={index} className="single-car" onClick={() => handleDetail(item.id)}>
										<div className="box-car">
											<div className="content-top">
												<div className="content-top-left">
													<div className="model-car">
														<h3>{item.name}</h3>
													</div>
													<div className="price">
														<span>{item.precio}/Dia</span>
													</div>
												</div>
												<div className="content-top-right">
													<div className="car-features">
														<CheckCircleOutlined />
														<span>{item.puestos} Puestos</span>
													</div>
													<div className="car-features">
														<CheckCircleOutlined />
														<span>{item.automatico}.</span>
													</div>
													<div className="car-features">
														<CheckCircleOutlined />
														<span>{item.radio}</span>
													</div>
													<div className="car-features">
														<CheckCircleOutlined />
														<span>Aire: {item.aire} </span>
													</div>
												</div>
											</div>
											<div className="content-bottom">
												<img className="picanto" src={item.image} />
											</div>
											{authentication &&
												<div className="cont-btn">
													<Button className="btn">Alquilar</Button>
												</div>
											}

										</div>
									</div>
								)}
							</>
							:
							<div className="content-bottom">
								<Empty />
							</div>
						}
					</div>
				</div>
			</div>
			<div className="categories-box">
				<div className="categories-title">
					<h2>CATEGORIAS</h2>
				</div>
				<div className="container-categories">
					<Link>
						<div className="item-cat">
							<div className="title-item-cat">
								<h3>Automóviles</h3>
							</div>
							<div className="item-cat-icon">
								<img className="img-item-cat" src={Automovil} />
							</div>
						</div>
					</Link>
					<Link>
						<div className="item-cat">
							<div className="title-item-cat">
								<h3>Camionetas</h3>
							</div>
							<div className="item-cat-icon">
								<img className="img-item-cat" src={Camionetas} />
							</div>
						</div>
					</Link>
					<Link>
						<div className="item-cat">
							<div className="title-item-cat">
								<h3>Vans - Pasajeros</h3>
							</div>
							<div className="item-cat-icon">
								<img className="img-item-cat" src={Pasajeros} />
							</div>
						</div>
					</Link>
					<Link>
						<div className="item-cat">
							<div className="title-item-cat">
								<h3>Camiones</h3>
							</div>
							<div className="item-cat-icon">
								<img className="img-item-cat" src={Camion} />
							</div>
						</div>
					</Link>
					<Link>
						<div className="item-cat">
							<div className="title-item-cat">
								<h3>Lujosos</h3>
							</div>
							<div className="item-cat-icon">
								<img className="img-item-cat" src={Lujosos} />
							</div>
						</div>
					</Link>
				</div>
			</div>
			<div className="brands">
				<div className="brands_container-title">
					<h2>CONOCE NUESTRAS MARCAS</h2>
				</div>
				<div className="brands_content">
					{dummyMarcas && dummyMarcas.map((data, index) =>
						<div key={index} className="brands_container-logos">
							<Link>
								<div className="logo-brand">
									<div className="logo-brand-img">
										<img className="image-brand" src={data.image} />
									</div>

									<div className="title-brand">
										<h3>{data.brand}</h3>
									</div>
								</div>
							</Link>
						</div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
}
