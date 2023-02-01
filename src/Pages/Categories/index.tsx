import React, { useContext, useState } from "react";

import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import AddModal from "../../Components/AddModal";
import AddTask from "../../Components/AddTask";
import DeleteModal from "../../Components/DeleteModal";
import ExpandSidebarItem from "../../Components/ExpandSidebarItem";
import FilterTag from "../../Components/FilterTag";
import SidebarItem from "../../Components/SidebarItem";
import TaskCard from "../../Components/TaskCard";
import { AddContext } from "../../Contexts/addContext";
import { AddType } from "../../Contexts/addType";
import AuthContext, { AuthType } from "../../Contexts/authContext";
import { DeleteContext } from "../../Contexts/deleteContext";
import { DeleteType } from "../../Contexts/deleteType";
import { TaskListContext } from "../../Contexts/taskListContext";
import { TaskListType } from "../../Contexts/taskType";
import Filter from "../../Img/filter.svg";
import Folder from "../../Img/folder.svg";
import Logo from "../../Img/Logo.png";
import Logout from "../../Img/logout.svg";
import Settings from "../../Img/settings.svg";
import TaskFill from "../../Img/task.png";
import * as S from "./styles";


const CategoriesPage: React.FC = () => {
    const { name } = useParams<string>()

    const { taskList, doneTasks, notDoneTasks } = useContext(TaskListContext) as TaskListType;
    const { showDelete } = useContext(DeleteContext) as DeleteType;
    const { showAdd } = useContext(AddContext) as AddType;
    const [listToDisplay, setListToDisplay] = useState(0);
    const listOfLists = [
        taskList.filter(task => task.category === name),
        doneTasks.filter(task => task.category === name),
        notDoneTasks.filter(task => task.category === name)];

    const [allActive, setAllActive] = useState(true);
    const [doneActive, setDoneActive] = useState(false);
    const [notDoneActive, setNotDoneActive] = useState(false);

    const { setUserData } = useContext(AuthContext) as AuthType;



    function handleAll() {
        setListToDisplay(0);
        setAllActive(true);
        setDoneActive(false);
        setNotDoneActive(false);
    };

    function handleDone() {
        setListToDisplay(1);
        setAllActive(false);
        setDoneActive(true);
        setNotDoneActive(false);
    };
    function handleNotDone() {
        setListToDisplay(2);
        setAllActive(false);
        setDoneActive(false);
        setNotDoneActive(true);
    };

    function handleLogout() {
        localStorage.removeItem('@Project:email');
        setUserData({ email: "" });
    };
    return (

        <S.Page>
            <S.Sidebar>
                <S.Img src={Logo} />
                <S.Tabs>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <SidebarItem icon={TaskFill} name="Tasks" isActive={false} ></SidebarItem>
                    </Link>
                    <ExpandSidebarItem icon={Folder} name="Categories"   ></ExpandSidebarItem>
                    <SidebarItem icon={Settings} name="Settings" isActive={false} ></SidebarItem>
                </S.Tabs>
                <Link to="/login" style={{ textDecoration: 'none' }} onClick={handleLogout}>
                    <SidebarItem icon={Logout} name="Logout" isActive={false}></SidebarItem>
                </Link>

            </S.Sidebar>
            <S.Main>
                <S.Header>{name}</S.Header>
                <S.TitleAndFilter>
                    <S.Title onClick={handleDone}>Tasks </S.Title>
                    <S.FilterField>
                        <div onClick={handleAll}><FilterTag name="All" active={allActive} /></div>
                        <div onClick={handleDone}><FilterTag name="Done" active={doneActive} /></div>
                        <div onClick={handleNotDone}><FilterTag name="Not done" active={notDoneActive} /></div>
                        <S.FilterIcon src={Filter} />
                    </S.FilterField>
                </S.TitleAndFilter>
                {listOfLists[listToDisplay].map(task => <TaskCard id={task.id} name={task.title} list={task.category} color={task.color} done={task.done} />)}
                <AddTask></AddTask>
            </S.Main>
            {showDelete && <DeleteModal />}
            {showAdd && <AddModal />}
        </S.Page>


    );
};

export default CategoriesPage;