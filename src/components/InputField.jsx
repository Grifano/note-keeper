import React from "react";

export default function InputField(props) {
	return (
		<input
			onChange={props.onChange}
			name="title"
			placeholder="Title"
			value={props.value}
		/>
	)
}