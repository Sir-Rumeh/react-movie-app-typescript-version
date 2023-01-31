import React, { useState, useEffect, useRef } from "react";

// import searchIcon from "../../images/search-icon.svg";
// Styles
// import { Wrapper, Content } from "./SearchBar.Styles";

// Types
type Props = {
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<Props> = ({ setSearchTerm }) => {
	// const [state, setState] = useState("");
	// const initial = useRef(true);

	useEffect(() => {
		// if (initial.current) {
		// 	initial.current = false;
		// 	return;
		// }

		// const timer = setTimeout(() => {
		// 	setSearchTerm(state);
		// }, 500);

		return () => clearTimeout(timer);
	}, [setSearchTerm, state]);

	return (
		<Wrapper>
			<Content>
				<img src={searchIcon} alt="search-icon" />
				<form>
					<input
						type="text"
						placeholder="Search Movie"
						onChange={(e) => setState(e.currentTarget.value)}
						value={state}
					/>
				</form>
			</Content>
		</Wrapper>
	);
};
export default SearchBar;
