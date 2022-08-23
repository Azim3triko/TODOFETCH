import React from "react";
import PropTypes from "prop-types";

export const Counter = (props) => {
	return (
		<div
			className="box text-secondary"
			style={{
				padding: "5px",
			}}>
			<span
				style={{
					fontSize: "15px",
					marginLeft: "2%",
					paddingTop: "3px",
					paddingLeft: "24px",
					paddingRight: "20px",
					paddingBottom: "3px",
					border: "1px solid black",
				}}>
				{props.list.length} item left...
			</span>
		</div>
	);
};

Counter.propTypes = {
	list: PropTypes.array,
};