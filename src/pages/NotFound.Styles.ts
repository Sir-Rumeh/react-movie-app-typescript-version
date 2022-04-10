import styled from "styled-components";

export const Wrapper = styled.div`
	border-radius: 10px;
	width: 80%;
	margin: 10% auto;
	justify-content: center;
	box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.53);
	-webkit-box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.53);
	-moz-box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.53);
	@media screen and (max-width: 768px) {
		transform: translateY(30%);
	}
`;

export const Content = styled.div`
	background-color: rgba(255, 0, 21, 0.7);
	padding: 1rem;
	display: flex;
	align-items: center;
	padding-left: 3rem;
	color: var(--white);
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	@media screen and (max-width: 768px) {
		padding-left: 1rem;
		justify-content: center;
	}
	svg {
		width: 2rem;
		@media screen and (max-width: 768px) {
			width: 1.5rem;
		}
	}
	span {
		margin-right: 0.5rem;
	}
`;

export const List = styled.ul`
	padding-top: 2rem;
	padding-bottom: 3rem;
	padding-left: 4.5rem;
	font-size: larger;
	font-weight: 500;
	color: #6b777d;
	@media screen and (max-width: 768px) {
		padding-left: 2.5rem;
		padding-right: 1.5rem;
	}
	li {
		margin-bottom: 1rem;
	}
`;
