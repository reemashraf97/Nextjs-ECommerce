import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./products.module.scss";
import ProductsCard from "../shared/productsCard/ProductsCard";

function Products({ product }) {
    console.log(product);

    return (
        <Container>
            <h2 className={`${styles.header} my-5 text-center`}>
                E-Commerce Website
            </h2>
            <Row>
                {product?.map((product, index) => {
                    return (
                        <Col
                            sm={12}
                            md={6}
                            lg={4}
                            className={`d-flex justify-content-center mb-4`}
                        >
                            <ProductsCard product={product} key={product.id} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default Products;
