import React from 'react';
import Select from 'react-select';
import {Form, Button} from 'react-bootstrap';


const HeaderBottom  = ({searchText, category, categoriesOptions, handleSearch, handleCategory, handleSubmit}) => {


	return(
		<div className="header-area">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-3">
						<div className="logo-and-category">
							<div className="logo-area">
								<a href="index.html"><img src="../../static/uploads/documents/GeneralSetting/PUxf1TNoP24Yq9D0lEVGV5bc2rRaEOlTddW2z2aj.png" alt="" /></a>
							</div>
							<nav className="navbar navbar-expand-lg navbar-light">
								<div className="collapse navbar-collapse" id="navbarSupportedContent">
									<ul className="navbar-nav mr-auto">
										<li className="nav-item dropdown category-area">
											<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												<i className="fas fa-bars"></i>&nbsp;&nbsp;Categories
											</a>
											<div className="dropdown-menu" aria-labelledby="navbarDropdown">
												<a className="dropdown-item" href="#">
													<img src="https://beta.mystore.az/uploads/documents/Category/computer-01-01 copy.png" /> Elektronika
												</a>
												<a className="dropdown-item" href="#">
													<img src="https://beta.mystore.az/uploads/documents/Category/computer-01-01 copy.png" /> Elektronika
												</a>
												<a className="dropdown-item" href="#">
													<img src="https://beta.mystore.az/uploads/documents/Category/computer-01-01 copy.png" /> Elektronika
												</a>
												<a className="dropdown-item" href="#">
													<img src="https://beta.mystore.az/uploads/documents/Category/computer-01-01 copy.png" /> Elektronika
												</a>
												<a className="dropdown-item" href="#">
													<img src="https://beta.mystore.az/uploads/documents/Category/computer-01-01 copy.png" /> Geyim, ayaqqabı və aksesuarlar
												</a>
												<a className="dropdown-item" href="#">
													<img src="https://beta.mystore.az/uploads/documents/Category/computer-01-01 copy.png" /> Heyvan məhsulları
												</a>
											</div>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>

					<div className="col-lg-8">
						<div className="header-search-area">
							<Form id="search" method="GET" action="https://beta.mystore.az/search-product">
								<div className="header-search-form">
									<Form.Group>
										<Form.Control value={searchText} onChange={handleSearch} type="input" id="right_side_product_search_iteam" name="search_product"  placeholder="Search a product" required />
									</Form.Group>
									<Form.Group style={{width: 250}}>
										<Select
											instanceId="category"
											label="Select category"
											defaultValue={categoriesOptions[0]}
											options={categoriesOptions}
											onChange={handleCategory}
										/>
									</Form.Group>
									<Button onClick={handleSubmit} type="submit"><i className="fas fa-search"></i></Button>
								</div>
							</Form>
							<div id="product_right_search_autocomplete">
							</div>
							<div className="popular-search-list">
								<ul>
									<li> <a href="--HP-24fw-OtvS8.html"> Монитор HP 24fw</a> </li>
									<li> <a href="-Samsung-Galaxy-A51-64GB-VsMwz.html"> Samsung Galaxy A51 64GB</a> </li>
									<li> <a href="--Lenovo-IdeaPad-S145-15IGM-qFV3h.html"> Ноутбук Lenovo IdeaPad S145-15IGM</a> </li>
									<li> <a href="--Apple-iPhone-11-Pro-Max-64GB-Gold-pu9B2.html"> Смартфон Apple iPhone 11 Pro Max 64GB Gold</a> </li>
									<li> <a href="-Huawei-Watch-GT2-Matte-Black-8ltIi.html"> Huawei Watch GT2 Matte Black</a> </li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-1">
						<div className="header-menu-area">
							<div className="header-menu">
								<ul>
									<li className="shopping_cart">
										<div className="header-cart">
											<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Cart">
												<span className="header-cart-icon"> <i className="fas fa-cart-plus"></i> </span>
												<span className="number">0</span>
											</a>
											<div className="dropdown-menu dropdown-menu-right">
												<div className="header-cart-item">
													<div className="empty-content-box">
														<div className="empty-content-box-icon">
															<img src="../../static/img/empty-cart.png" alt="" />
														</div>
														<div className="empty-content-box-message">Your cart is empty!!</div>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeaderBottom;