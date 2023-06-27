import React, { CSSProperties, useContext } from "react";
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';

export interface Props {
    img?: string;
    className?: string;
    style?: CSSProperties;
}
export const ProductImage = ({ img, className, style }: Props) => {

    const { product } = useContext( ProductContext );

    return (
        <img
            className={ `${styles.productImg} ${className}` }
            style={style}
            src={ img ? img : product.img ? product.img : noImage }
            alt="Product"
        />
    );
}