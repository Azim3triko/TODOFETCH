import React from "react";
import PropTypes from "prop-types";
import { Task } from "./Task.js";

export const Tasks = (props) => {
	return (
		<div>
			{props.list.map((task, index) => {
				return (
					<Task
						task={task}
						key={index}
						id={index}
						setterList={props.setterList}
						list={props.list}
						getToDos={props.getToDos}
					/>
				);
			})}
		</div>
	);
};

Tasks.propTypes = {
	setterList: PropTypes.func,
	list: PropTypes.array,
	getToDos: PropTypes.func,
};