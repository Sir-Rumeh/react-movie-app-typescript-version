import React, { useState } from "react";

export default function Rate({ callback }) {
	const [value, setValue] = useState(5);

	return (
		<div>
			<input
				type="range"
				min="1"
				max="10"
				value={value}
				onChange={(e) => setValue(e.currentTarget.value)}
			/>
			{value}
			<p>
				<button onClick={() => callback(value)}>
					Submit Rating
				</button>
			</p>
		</div>
	);
}
