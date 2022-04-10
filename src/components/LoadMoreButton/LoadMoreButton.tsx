import React from "react";
// Styles
import { Wrapper } from "./LoadMoreButton.Styles";
import "./LoadMoreButton.css";
// Types
type Props = {
	text: string;
	callback: () => void;
};

const LoadMoreButton: React.FC<Props> = ({ text, callback }) => {
	return (
		<div className="buttonBackground">
			<Wrapper type="button" onClick={callback}>
				{text}
			</Wrapper>
		</div>
	);
};
export default LoadMoreButton;
