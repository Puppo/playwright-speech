import React, { useContext, useState } from "react";
import { CategoriesContext } from "../../Contexts/categoriesContext";
import { CategoriesContextType } from "../../Contexts/categoriesType";
import Add from "../../Img/add.svg";
import Arrow from "../../Img/arrow.svg";
import CategoryItem from "../Category";
import * as S from "./styles";

interface SidebarItemProps {
    name: string;
    icon: string;

}



const ExpandSidebarItem: React.FC<SidebarItemProps> = ({ name, icon }) => {
    const [active, setActive] = useState(false);
    const { categoryList } = useContext(CategoriesContext) as CategoriesContextType;

    function handleActivate() {
        setActive(!active);
    }

    return (
        <S.OuterContainer isActive={active}>
            <S.Container isActive={active} onClick={handleActivate}>
                <S.Icon src={icon} />
                <S.Name>{name}</S.Name>
                <S.Arrow isActive={active} src={Arrow} />
            </S.Container>
            <S.CatArea isActive={active}>
                {categoryList.map(cat => <CategoryItem key={cat.id} name={cat.name} color={cat.color} />)}
                <S.AddArea>
                    <S.AddIcon src={Add} />
                    <S.AddText>Add new</S.AddText>
                </S.AddArea>
            </S.CatArea>

        </S.OuterContainer>
    );
};


export default ExpandSidebarItem;