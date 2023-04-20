"use client";
import Image from "next/image";
import React from "react";
import styles from "./Nav.module.scss";
import { useSelector } from "react-redux";
import { selectItems } from "@/store/slices/basketSlice";
import Link from "next/link";

function Nav() {
    const item = useSelector(selectItems);
    return (
        <nav className="navbar navbar-expand-lg bg-black d-flex flex-row-reverse">
            <Link className={`navbar-brand me-5 ${styles.shoppingCart}`} href={"/shoppingCart"}>
                <span className={`${styles.shoppingIcon} px-1`} id="cartAmount">
                    {item.length}
                </span>
                <i className={`fa-solid fa-cart-plus`}></i>
            </Link>
            <Link className="navbar-brand me-5" href="#">
                <Image
                    src="/images/img_avatar.png"
                    width="50"
                    height="50"
                    alt="profile"
                ></Image>
            </Link>
        </nav>
    );
}

export default Nav;
