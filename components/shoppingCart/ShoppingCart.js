import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductsCard from "../shared/productsCard/ProductsCard";
import { useSelector } from "react-redux";
import { selectItems } from "@/store/slices/basketSlice";
import styles from "./shoppingCart.module.scss";
import CheckoutCard from "../shared/checkoutCard/CheckoutCard";

function ShoppingCart() {
    const items = useSelector(selectItems);
    console.log(items);
    return (
        <Container>
            <h2 className={`${styles.header} my-5 text-center`}>
                Shopping Cart
            </h2>
            <Row>
                {items?.map((product, index) => {
                    return (

                            <CheckoutCard product={product} key={product.id} />
                        
                    );
                })}
            </Row>
        </Container>
    );
}

export default ShoppingCart;
