import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Content } from "./BreadCrumb.Styles";
// Types
type Props = {
	movieTitle: string;
};

const BreadCrumb: React.FC<Props> = ({ movieTitle }) => {
	return (
		<Wrapper>
			{/* <Content>
				{/* <Link to="/"><span>Home</span></Link> */}
				{/* <span>{movieTitle}</span> */}
			</Content> */}
		</Wrapper>
	);
};

export default BreadCrumb;
