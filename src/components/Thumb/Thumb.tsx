import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Image } from "./Thumb.Styles";

// Types
type Props = {
	image: string;
	movieId?: number;
	clickable: boolean;
};

const Thumb: React.FC<Props> = ({ image, movieId, clickable }) => {
	const overflow = {
		overflow: "hidden",
	};

	return (
		<div style={overflow}>
			{clickable ? (
				<Link to={`/${movieId}`}>
					<Wrapper className="" style={overflow}>
						<Image src={image} alt="movie-thumb" />
					</Wrapper>
				</Link>
			) : (
				<Image src={image} alt="movie-thumb" />
			)}
		</div>
	);
};

export default Thumb;
