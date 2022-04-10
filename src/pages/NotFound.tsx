import React from "react";
// styles
import { Wrapper, Content, List } from "./NotFound.Styles";

export default function NotFound() {
	return (
		<div>
			<Wrapper>
				<Content>
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
					<h2>There was a problem</h2>
				</Content>
				<List>
					<li>
						We encountered an error trying to process your
						request.
					</li>
					<li>
						Check that you are connected to the internet and
						that you are not visiting a broken link and try
						again.
					</li>
				</List>
			</Wrapper>
		</div>
	);
}
