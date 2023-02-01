import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

interface CategoryItemProps {
    name: string;
    color: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, color }) => {

    return (
        <Link to={"/categories/" + name} style={{ textDecoration: 'none' }}>
            <S.Categories>
                <S.ColorTag color={color} />
                <S.ListName>{name}</S.ListName>
            </S.Categories>
        </Link>
    )
};

export default CategoryItem;