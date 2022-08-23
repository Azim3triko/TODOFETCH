import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { Counter } from "./Counter.js";
import { Input } from "./Input.js";
import { Tasks } from "./Tasks.js";

export const List = () => {
	const [newTask, setNewTask] = useState("");
	const [listOfTasks, setListOfTasks] = useState([]);
	const createUser = useCallback(async () => {
		try {
			const response = await fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/azim3triko",
				{
					method: "post",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify([]),
				}
			);
			if (response.status !== 200) {
				alert("no tiene usuario creado");
				return;
			}
			getToDos();
		} catch (error) {
			alert("no esta disponible la lista");
			return;
		}
	}, [getToDos]);

	const getToDos = useCallback(async () => {
		try {
			const response = await fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/azim3triko"
			);
			if (response.status !== 200) {
				if (response.status === 404) await createUser();
				return;
			}
			const body = await response.json();
			setListOfTasks(body);
		} catch (error) {
			alert("la lista no esta");
			return;
		}
	}, []);

	useEffect(() => {
		getToDos();
	}, [getToDos]);

	return (
		<div className="container w-100 d-flex flex-column">
			<Input
				text=" What needs to be done?"
				value={newTask}
				setter={setNewTask}
				list={listOfTasks}
				setterList={setListOfTasks}
				getToDos={getToDos}
			/>
			{listOfTasks.length === 0 ? (
				<div
					className="fs-5"
					style={{ padding: "15px", color: "#4f4f4f" }}>
					{"No tasks, add a task..."}
				</div>
			) : (
				<Tasks
					list={listOfTasks}
					setterList={setListOfTasks}
					getToDos={getToDos}
				/>
			)}
			<Counter list={listOfTasks} />
		</div>
	);
};