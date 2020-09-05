import React from 'react';
import { useRouter } from 'next/router';
import Head from '../../../../components/Head';
import { categories, products } from '../../../../constants/data';
import CategoryFilter from '../../../../components/filter/CategoryFilter';
import SingleProduct from '../../../../components/productcard/SingleProduct';

const SubSubCategory = ({ categories }) => {
    const history = useRouter();
    const { id, subid, subsubid } = history.query;
    const category = categories && categories.filter(cate => cate.id === id)[0];
    const subCategories = (categories && category.sub) || [];
    const subCategory = subCategories && subCategories.filter(sc => sc.id === parseInt(subid))[0];
    const subsubCats = (subCategory && subCategory.sub) || [];
    let subsubCat = subsubCats && subsubCats.filter(ss => ss.id === parseInt(subsubid))[0];
    return (
        <>
            <Head title="Sub Sub Category" />
            <div className="header-fixed-content-layout">
                <section className="product-page-area common-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="common-padded-box-header">
                                    <h3>
                                        Category: <span>{categories && subsubCat.title}</span>
                                    </h3>
                                    <div className="product-breadcumb">
                                        <ul>
                                            <li>
                                                <a href="../shopping.html">Shopping Products</a>
                                            </li>
                                            <li className="active">{categories && subsubCat.title}</li>
                                        </ul>
                                    </div>
                                    <div className="product-filter-btn">
                                        <i className="fas fa-sliders-h"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shop-product-info">
                            {/*<div className="m-tab-header">Shopping</div>*/}
                            <div className="row">
                                <div className="product-filter-col-backdrop" />
                                <CategoryFilter categories={(categories && subsubCat.sub) || []} />
                                <div className="col-lg-9 product-list-col">
                                    <div className="common-padded-box">
                                        <div className="product-search-area">
                                            <div className="product-search-form">
                                                <input type="text" name="" placeholder="Search product" />
                                                <button type="submit" name="search-product" className="btn-search">
                                                    <i className="fas fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product-filter-right-area">
                                            <div className="product-grid-list-option">
                                                <button
                                                    type="button"
                                                    className="product-list-grid-option-select active">
                                                    <i className="fas fa-th" />
                                                </button>
                                                <button type="button" className="product-list-grid-option-select">
                                                    <i className="fas fa-list" />
                                                </button>
                                            </div>
                                            <div className="product-single-options">
                                                <ul>
                                                    <li className="active">
                                                        <a className="latest" data-id="7">
                                                            Newest
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="oldest" data-id="7">
                                                            Oldest
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="highest" data-id="7 ">
                                                            Highest Price
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="lowest" data-id="7">
                                                            Lowest Price
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="ascending" data-id="7">
                                                            Ascending
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="descending" data-id="7">
                                                            Descending
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-list-area" id="updateDiv">
                                            <div className="row">
                                                {products.map((product, ind) => (
                                                    <SingleProduct product={product} key={ind} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="product-pagination">
                                            <ul></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '*', subid: '*', subsubid: '*' } }],
        fallback: true,
    };
}

export async function getStaticProps(context) {
    return {
        props: {
            categories: categories,
            context,
        }, // will be passed to the page component as props
    };
}

export default SubSubCategory;
