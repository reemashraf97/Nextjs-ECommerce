"use client";
import Image from "next/legacy/image";
import React from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./productsCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../../store/slices/basketSlice";

function ProductsCard({ product , key}) {

    const basket = useSelector((state) => state.basket.value)
    const dispatch = useDispatch()

    const id = product.id;
    const title = product.title;
    const price = product.price;
    const description = product.description;
    const category = product.category;
    const image = product.image;

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            description,
            category,
            image,
        };
        console.log(product);
        //Sending the product as an action to the redux store
        dispatch(addToBasket(product));
    };

    return (
        <Card className={`p-0 h-100 w-100`}>
            <div>
                <Image
                    layout="responsive"
                    width={200}
                    height={170}
                    src={`${product.image}`}
                    className={`card-img-top w-100`}
                    alt={`alt`}
                    loading="lazy"
                />
            </div>
            <Card.Body className={`${styles.body} p-4`}>
                <div className={`${styles.box}`}>
                    <Card.Title className={`mb-2`}>
                        <h3 className={`mb-0 ${styles.title}`}>{product.title}</h3>
                    </Card.Title>
                    <Card.Text className={`mb-2 ${styles.para}`}>
                        {product.description}
                    </Card.Text>
                    <Card.Text className={`mb-2 ${styles.price}`}>
                        ${product.price}
                    </Card.Text>
                    <Card.Text className={`mb-4 ${styles.category}`}>
                        {product.category}
                    </Card.Text>
                    <Button type="button" onClick={addItemToBasket}>
                        Add to Cart
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProductsCard;
