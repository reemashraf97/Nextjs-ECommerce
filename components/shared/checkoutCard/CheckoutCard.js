import Image from "next/image";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "./checkout.module.scss";

function CheckoutCard({ product, key }) {
    return (
        <Row className={`mb-4 ${styles.box}`}>
            <Col xs={6}>
                <Row xs={6} className="p-5">
                    <Image
                        layout="responsive"
                        width={200}
                        height={270}
                        src={`${product.image}`}
                        className={`h-100 w-100`}
                        alt={`alt`}
                        loading="lazy"
                    />
                </Row>
            </Col>
            <Col xs={6}>
            <Row className="px-5 py-3">
                <h3 className={`mb-2 ${styles.title}`}>{product.title}</h3>
                <p className={`mb-2 ${styles.para}`}>{product.description}</p>
                <p className={`mb-2 ${styles.price}`}>${product.price}</p>
                <p className={`mb-4 ${styles.category}`}>{product.category}</p>
            </Row>
            </Col>
        </Row>
    );
}

export default CheckoutCard;
