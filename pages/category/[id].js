import React from 'react';
import { useRouter } from 'next/router';
import { products, categories } from '../../constants/data';
import dynamic from 'next/dynamic';
const Head = dynamic(import('../../components/Head'));
const Skeleton = dynamic(() => import('react-loading-skeleton'));
const SingleProduct = dynamic(() => import('../../components/productcard/SingleProduct'), {
    loading: () => {
        return <Skeleton count={10} />;
    },
    ssr: false,
});
const CategoryFilter = dynamic(() => import('../../components/filter/CategoryFilter'), {
    loading: () => {
        return <Skeleton count={50} />;
    },
    ssr: false,
});
const Category = props => {
    const history = useRouter();
    console.log(history);
    console.log(props);
    const categoryId = history.query.id || null;
    const category = categories.filter((cate, i) => cate.id === categoryId)[0];
    console.log(categories);

    return (
        <div>
            <Head title="Category" />
            <div className="header-fixed-content-layout">
                <section className="product-page-area common-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="common-padded-box-header">
                                    <h3>
                                        Category: <span>{category && category.title}</span>
                                    </h3>
                                    <div className="product-breadcumb">
                                        <ul>
                                            <li>
                                                <a href="../shopping.html">Shopping Products</a>
                                            </li>
                                            <li className="active">{category && category.title}</li>
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
                                <CategoryFilter categories={(category && category.sub) || []} />
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
        </div>
    );
};
export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '*' } }],
        fallback: true,
    };
}
export async function getStaticProps(context) {
    return {
        props: {
            categories: categories,
        }, // will be passed to the page component as props
    };
}

export default Category;
