import styled from "styled-components";

export const Wrapper = styled.div`
	border: 5px solid var(--lightBlue);
	border-top: 5px solid var(--medBlue);
	border-radius: 50%;
	width: 50px;
	height: 50px;
	animation: spin 1.2s linear infinite;
	margin: 20px auto;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		50% {
			border-top: 1px solid blue;
		}
		100% {
			transform: rotate(360deg);
			border-top: 5px solid pink;
		}
	}
`;
