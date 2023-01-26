import React, { useContext } from "react";
// styles
// import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.Styles.js";
// logo image imports
// import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
// routiing
import { Link } from "react-router-dom";
// login system
import { Context } from "../../context";

const Header: React.FC = () => {
	const [user] = useContext(Context);

	return (
		<Wrapper id="header">
			<Content>
				<Link to="/">
					<LogoImg src={RMDBLogo} alt="rmdb-logo" />
				</Link>
				{user ? (
					<span className="user">
						Logged in as: {user.username}
					</span>
				) : (
					<Link to="/login">
						<span className="logIn">Log in to rate</span>
					</Link>
				)}
				<TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
			</Content>
		</Wrapper>
	);
};
export default Header;
