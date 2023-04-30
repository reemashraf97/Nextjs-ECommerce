import Image from "next/image";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "./checkout.module.scss";

function CheckoutCard({ product, key }) {
    return (
        <Row className={`mb-4 ${styles.box}`}>
            <Col xs={4} className="p-5">
                <Image
                    layout="responsive"
                    width={300}
                    height={150}
                    src={`${product.image}`}
                    className={``}
                    alt={`alt`}
                    loading="lazy"
                />
            </Col>
            <Col xs={8} className="px-5 py-5">
                <h3 className={`mb-2 ${styles.title}`}>{product.title}</h3>
                <p className={`mb-2 ${styles.para}`}>{product.description}</p>
                <p className={`mb-2 ${styles.price}`}>${product.price}</p>
                <p className={`mb-4 ${styles.category}`}>{product.category}</p>
            </Col>
        </Row>
    );
}

export default CheckoutCard;
