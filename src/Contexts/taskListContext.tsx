import React, { createContext, useState } from "react";
import { TaskListType, TaskProps } from "./taskType";

interface ChildrenProps {
    children: React.ReactNode;
}

export const TaskListContext = createContext<TaskListType | null>(null);

export const TaskListContextProvider: React.FC<ChildrenProps> = ({ children }) => {
    const [taskList, setTaskList] = useState<TaskProps[]>([
        {
            id: 1,
            title: "Example task",
            done: false,
            category: "Home",
            color: "#FF9C9C",
        },
        {
            id: 2,
            title: "Example task 2",
            done: false,
            category: "Home",
            color: "#FF9C9C",
        },
        {
            id: 3,
            title: "Example task 3",
            done: true,
            category: "Home",
            color: "#FF9C9C",
        },

    ]);
    const [doneTasks, setDoneTasks] = useState<TaskProps[]>(taskList.filter((task: TaskProps) => !!task.done));
    const [notDoneTasks, setNotDoneTasks] = useState<TaskProps[]>(taskList.filter((task: TaskProps) => !task.done));

    const addTask = (task: TaskProps) => {

        taskList.push(task)
        setTaskList([...taskList]);
        console.log(taskList)
        setNotDoneTasks([...notDoneTasks, task]);


    };

    const checkTask = (id: number) => {
        taskList.forEach((task: TaskProps) => {
            if (task.id === id) {
                task.done = !task.done
                setTaskList([...taskList]);
                setDoneTasks(taskList.filter((task: TaskProps) => task.done === true));
                setNotDoneTasks(taskList.filter((task: TaskProps) => task.done !== true));
            }
        });
    };

    const deleteTask = (id: number) => {
        const index = taskList.findIndex((task: TaskProps) => task.id === id);
        taskList.splice(index, 1);
        setTaskList([...taskList]);
        console.log(taskList);
        setDoneTasks(taskList.filter((task: TaskProps) => !!task.done));
        setNotDoneTasks(taskList.filter((task: TaskProps) => !task.done));
    };

    return (
        <TaskListContext.Provider value={{
            taskList,
            doneTasks,
            notDoneTasks,
            addTask,
            checkTask,
            deleteTask
        }}>
            {children}
        </TaskListContext.Provider>
    )
}

