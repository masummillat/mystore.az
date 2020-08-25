import React from 'react';

import { featuredStore } from '../../constants/data';
import StoreCard from './StoreCard';

const FeaturedStore = () => {
    return (
        <section className="featured-store-area common-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bordered-shadow-box">
                            <div className="bordered-shadow-box-overflow-hidden">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="common-padded-box featured-box">
                                            <div className="common-padded-box-header featured-header">
                                                <h3>
                                                    Tövsiyyə olunan <span>Mağaza</span>
                                                </h3>
                                            </div>
                                            <div className="featured-stores-links">
                                                <ul>
                                                    <li>
                                                        <a className="official">Rəsmi satıcılar</a>
                                                    </li>
                                                    <li>
                                                        <a className="feature">
                                                            Seçilmiş mağazalar
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="selling_merchants">
                                                            Ən çox satan satıcılar
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="top_rated_merchants">
                                                            Ən reytinqli satıcılar
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="row featured-stores-list" id="updateDiv">
                                            {featuredStore.map(store => (
                                                <StoreCard key={store.id} store={store} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default FeaturedStore;
