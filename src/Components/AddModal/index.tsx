import React, { useContext, useState } from "react";
import { AddContext } from "../../Contexts/addContext";
import { AddType } from "../../Contexts/addType";
import { CategoriesContext } from "../../Contexts/categoriesContext";
import { CategoriesContextType } from "../../Contexts/categoriesType";
import { TaskListContext } from "../../Contexts/taskListContext";
import { TaskListType, TaskProps } from "../../Contexts/taskType";
import * as S from "./styles";


const AddModal: React.FC = () => {
    const { addTask } = useContext(TaskListContext) as TaskListType;
    const { categoryList } = useContext(CategoriesContext) as CategoriesContextType;
    const { setShowAdd, } = useContext(AddContext) as AddType;


    const [taskName, setTaskName] = useState("");
    const [taskCat, setTaskCat] = useState(categoryList.findIndex((cat) => cat.name === "None"));

    function handleTyping(event: React.ChangeEvent<HTMLInputElement>) {
        setTaskName(event.target.value);
    };

    function handleCancel() {
        setShowAdd(false);
    };

    function handleAdd() {
        const newTask: TaskProps = {
            id: Math.random(),
            title: taskName,
            category: categoryList[taskCat].name,
            color: categoryList[taskCat].color,
            done: false,
        }

        setShowAdd(false);

        addTask(newTask);

    }

    var e = document.getElementById("select") as HTMLSelectElement;

    function handleChange() {
        setTaskCat(Number(e.options[(e.selectedIndex)].value));
    }





    return (
        <S.Background>
            <S.Container>
                <S.Text>Insert name</S.Text>
                <S.TitleInput placeholder="Task name" onChange={handleTyping} value={taskName} />
                <S.Text>Select a category</S.Text>
                <S.Select id="select" onChange={handleChange}>
                    {categoryList.map((cat) => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                </S.Select>
                <S.Buttons>
                    <S.CancelButton onClick={handleCancel} >Cancel</S.CancelButton>
                    <S.DeletButton onClick={handleAdd}>Add</S.DeletButton>
                </S.Buttons>
            </S.Container>
        </S.Background>
    )
};

export default AddModal;