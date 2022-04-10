import styled from "styled-components";

export const Wrapper = styled.div`
	max-width: var(--maxWidth);
	margin: 0 auto;
	padding: 1px 20px;
	padding-bottom: 1rem;
	background: rgba(3, 37, 65, 0.2);
	border-radius: 10px;
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;
	transform: translateY(0%);
	@media screen and (max-width: 768px) {
		transform: translateY(0.001%);
		border-radius: 1px;
	}

	h1 {
		color: var(--medBlue);
		margin-top: 2rem;
		margin-bottom: 2rem;
		@media screen and (max-width: 768px) {
			font-size: var(--fontBig);
		}
	}
`;

export const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 2rem;
`;
