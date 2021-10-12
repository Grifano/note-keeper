import React from "react";

export default function TextArea(props) {
	return (
		<textarea
			onChange={props.onChange}
			onClick={props.onClick}
			name="text"
			placeholder="Take a note..."
			rows={props.rows}
			value={props.value}
		/>
	)
}