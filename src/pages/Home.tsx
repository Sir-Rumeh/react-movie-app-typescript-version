import React from "react";

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Components
import HeroImage from "../components/HeroImage/HeroImage.js";
import SearchBar from "../components/SearchBar/SearchBar";
import Grid from "../components/Grid/Grid";
import Thumb from "../components/Thumb/Thumb";
import Spinner from "../components/Spinner/Spinner";
import LoadMoreButton from "../components/LoadMoreButton/LoadMoreButton";
// pages
import NotFound from "./NotFound";

// Hook
import { useHomeFetch } from "../hooks/useHomeFetch";

// Image
import NoImage from "../images/no_image.jpg";

const Home: React.FC = () => {
	const {
		state,
		loading,
		error,
		searchTerm,
		setSearchTerm,
		setIsLoadingMore,
	} = useHomeFetch();

	const random = Math.floor(Math.random() * 6);

	// console.log(state);

	if (error) return <NotFound />;

	return (
		<>
			{state.results[1] ? (
				<HeroImage
					image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[1].backdrop_path}`}
					title={state.results[1].original_title}
					text={state.results[1].overview}
				/>
			) : null}
			<SearchBar setSearchTerm={setSearchTerm} />
			<Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
				{state.results.map((movie) => (
					<Thumb
						key={`${movie.id}${random}`}
						clickable
						image={
							movie.poster_path
								? IMAGE_BASE_URL +
								  POSTER_SIZE +
								  movie.poster_path
								: NoImage
						}
						movieId={movie.id}
					/>
				))}
			</Grid>
			{loading && <Spinner />}
			{state.page < state.total_pages && !loading && (
				// <LoadMoreButton
				// 	text="Load More"
				// 	callback={() => setIsLoadingMore(true)}
				// />
			)}
		</>
	);
};

export default Home;
