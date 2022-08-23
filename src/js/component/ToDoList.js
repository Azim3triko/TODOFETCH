

import React from "react";
import { List } from "./List.js";
import { Title } from "./Title.js";

const ToDoList = () => {
	return (
		<div className="container d-block col-10">
			<Title />
			<List />
		</div>
	);
};

export default ToDoList;