import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	border-radius: 20px;
	height: 342px;

	&::after {
		content: "";
		position: absolute;
		top: -0.001%;
		left: -0.001%;
		height: 1%;
		width: 1%;
		/* top: 0.5%;
		left: 3%;
		width: 5%;
		height: 5%; */
		/* top: 0%;
		left: 0%;
		width: 100%;
		height: 99%; */
		background: rgba(255, 255, 255, 0.8);
		opacity: 0.5;
		border-radius: 20px;
		transform: rotate(45deg);
		transition: all 0.5s linear;
		:hover {
			opacity: 0.85;
		}

		animation: swipe 1s linear infinite;
		animation-direction: alternate-reverse;
		/* animation-delay: 3s; */

		@keyframes swipe {
			0% {
				top: -0.001%;
				left: -0.001%;
				height: 0%;
				background: rgba(255, 255, 255, 0.5);
			}
			/* 10% {
				top: 10%;
				left: 10%;
				height: 10%;
				background: rgba(18, 2, 255, 0.1);
			}
			20% {
				top: 20%;
				left: 20%;
				height: 20%;
				background: rgba(18, 2, 255, 0.2);
			}

			30% {
				top: 30%;
				left: 30%;
				height: 30%;
				background: rgba(18, 2, 255, 0.3);
			}
			40% {
				top: 40%;
				left: 40%;
				height: 40%;
				background: rgba(18, 2, 255, 0.4);
			} */
			50% {
				top: -50%;
				left: 50%;
				height: 40rem;
				background: rgba(255, 255, 255, 1);
			}
			/* 60% {
				top: 60%;
				left: 60%;
				height: 40%;
				background: rgba(18, 2, 255, 0.6);
			}
			70% {
				top: 70%;
				left: 70%;
				height: 30%;
				background: rgba(18, 2, 255, 0.7);
			}
			
			90% {
				top: 90%;
				left: 90%;
				height: 10%;
				background: rgba(18, 2, 255, 0.9);
			} */
			60% {
				background: rgba(83, 72, 255, 0.5);
			}
			100% {
				top: 98.001%;
				left: 98.001%;
				height: 0%;
				width: 0px;
				background: rgba(83, 72, 255, 1);
			}
		}
	}
`;

export const Image = styled.img`
	width: 100%;
	max-width: 720px;
	transition: all 0.3s;
	object-fit: cover;
	border-radius: 20px;
	animation: animateThumb 0.5s;

	:hover {
		opacity: 0.85;
	}

	@keyframes animateThumb {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;
