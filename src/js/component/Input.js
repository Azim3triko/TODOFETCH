import React, { useCallback } from "react";
import PropTypes from "prop-types";

export const Input = (props) => {
	function addNewTask(e) {
		props.setter(e.target.value);
	}
	const pressEnter = useCallback(
		async (e) => {
			if (e.key === "Enter") {
				const newTaskObject = {
					label: props.value,
					done: false,
				};
				const response = await fetch(
					'https://assets.breatheco.de/apis/fake/todos/user/azim3triko',
					{
						method: "put",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify([newTaskObject, ...props.list]),
					}
				);
				if (response.status !== 200) {
					alert("ha ocurrido un error");
					return;
				}
				await props.getToDos();
				props.setter("");
				e.stopPropagation();
			}
		},
		[props.value, props.list, props.getToDos, props.setter]
	);

	return (
		<div className="w-100">
			<input
				placeholder={props.text}
				style={{ width: "100%" }}
				value={props.value}
				onChange={addNewTask}
				onKeyUp={pressEnter}></input>
		</div>
	);
};

Input.propTypes = {
	text: PropTypes.string,
	value: PropTypes.string,
	setter: PropTypes.func,
	setterList: PropTypes.func,
	list: PropTypes.array,
	getToDos: PropTypes.func,
};