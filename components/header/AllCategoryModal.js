import React, { useState } from 'react';
import { Modal, Row, Col, ModalDialog } from 'react-bootstrap';
import { categories } from '../../constants/data';

const AllCategoryModal = props => {
    const [sub, setSub] = useState([]);
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <div>
                        <span>All Categories</span>
                        <span onClick={props.onHide}>
                            <i className="close"></i>
                        </span>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ height: 760, overflow: 'hidden' }}>
                <Row>
                    <Col
                        lg={5}
                        md={5}
                        className="border-right"
                        style={{ height: 760, overflow: 'auto' }}>
                        <ul>
                            <li>Categories</li>
                            {categories.map((category, ind) => (
                                <li
                                    key={category.id}
                                    onClick={() => setSub(category.sub || [])}
                                    className="dropdown-item d-inline-flex justify-content-between">
                                    <span>
                                        <img src={category.img} alt={category.title} />
                                        {category.title}{' '}
                                    </span>{' '}
                                    <i className="fa-arrow-right" />
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col lg={7} md={7}>
                        <ul>
                            {sub.map(s => (
                                <div key={s.id} className="col">
                                    <h3>{s.title}</h3>
                                    <ul>
                                        {s.sub.map(ss => (
                                            <li key={ss.id}>
                                                <a href="#">{ss.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Modal.Body>
            <style jsx>
                {`
                    img {
                        max-width: 100%;
                        height: 30px;
                    }
                    .modal-body {
                        position: relative;
                        -ms-flex: 1 1 auto;
                        flex: 1 1 auto;
                        padding: 1rem;
                    }
                `}
            </style>
        </Modal>
    );
};

export default AllCategoryModal;
