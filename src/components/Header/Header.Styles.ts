import styled from "styled-components";

export const Wrapper = styled.div`
	background: var(--darkBlue);
	padding: 0 20px;
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: var(--maxWidth);
	padding: 20px 0;
	margin: 0 auto;
	color: var(--white);

	a {
		color: var(--white);
		text-decoration: none;
	}
	.user {
		color: #4ec78a;
		font-size: larger;
		@media screen and (max-width: 768px) {
			font-size: small;
		}
	}

	.logIn {
		font-style: italic;
		font-size: large;
		border: 2px solid var(--white);
		border-radius: 10px;
		padding: 0.5rem;
		@media screen and (max-width: 768px) {
			font-size: small;
			font-style: normal;
		}
	}
`;

export const LogoImg = styled.img`
	width: 200px;

	@media screen and (max-width: 500px) {
		width: 150px;
	}
`;

export const TMDBLogoImg = styled.img`
	width: 100px;

	@media screen and (max-width: 500px) {
		width: 80px;
		display: none;
	}
`;
