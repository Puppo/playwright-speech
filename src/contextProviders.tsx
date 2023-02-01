import React from "react";
import { AddContextProvider } from "./Contexts/addContext";
import { AuthProvider } from "./Contexts/authContext";
import { CategoriesContextProvider } from "./Contexts/categoriesContext";
import { ChildrenProps, DeleteContextProvider } from "./Contexts/deleteContext";
import { TaskListContextProvider } from "./Contexts/taskListContext";

const ContextProviders: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <TaskListContextProvider>
            <DeleteContextProvider>
                <AddContextProvider>
                    <CategoriesContextProvider>
                        <AuthProvider>
                            {children}
                        </AuthProvider>
                    </CategoriesContextProvider>
                </AddContextProvider>
            </DeleteContextProvider>
        </TaskListContextProvider>
    )
};

export default ContextProviders;