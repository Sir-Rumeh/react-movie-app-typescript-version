import React from "react";
import { useParams } from "react-router-dom";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
// Components
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import MovieInfo from "../components/MovieInfo/MovieInfo";
import Grid from "../components/Grid/Grid";
import Spinner from "../components/Spinner/Spinner";
import MovieInfoBar from "../components/MovieInfoBar/MovieInforBar";
import Actor from "../components/Actor/Actor";
// pages
import NotFound from "./NotFound";
// Hook
import { useMovieFetch } from "../hooks/useMovieFetch";
// Image
import NoImage from "../images/no_image.jpg";

export default function Movie() {
	const { movieId } = useParams();

	// const { state: movie, loading, error } = useMovieFetch(movieId);

	if (loading) return <Spinner />;
	if (error) return <NotFound />;

	return (
		<div>
			<BreadCrumb movieTitle={movie?.original_title} />
			<MovieInfo movie={movie} />
			<MovieInfoBar
				time={movie.runtime}
				budget={movie.budget}
				revenue={movie.revenue}
			/>
			<Grid header="Actors">
				{movie.actors.map((actor) => (
					<Actor
						key={actor.credit_id}
						name={actor.name}
						character={actor.character}
						imageUrl={
							actor.profile_path
								? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
								: NoImage
						}
					/>
				))}
			</Grid>
		</div>
	);
}
