import React, { createContext, useState } from "react";
import { CategoriesContextType, CategoriesProps } from "./categoriesType";

interface ChildrenProps {
    children: React.ReactNode;
};

export const CategoriesContext = createContext<CategoriesContextType | null>(null);

export const CategoriesContextProvider: React.FC<ChildrenProps> = ({ children }) => {

    const [categoryList] = useState<CategoriesProps[]>([
        {
            id: 0,
            name: "None",
            color: "#afafaf"
        },
        {
            id: 1,
            name: "Home",
            color: "#FF9C9C"
        },
        {
            id: 2,
            name: "School",
            color: "#FFD79C"
        },
        {
            id: 3,
            name: "Shopping list",
            color: "#9CD0FF"
        },
    ])

    return (
        <CategoriesContext.Provider value={{ categoryList }}>
            {children}
        </CategoriesContext.Provider>
    )
};

