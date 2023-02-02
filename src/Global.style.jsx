import { createGlobalStyle } from "styled-components";
import palette from "@/assets/palette";

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
	}

	body {
		margin: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-size: 14px;
		height: 100vh;
		width: 100vw;
		background-color: ${palette.dark.background.base};
		color: ${palette.dark.foreground.base};
		overflow: hidden;
	}

	input::-ms-reveal,
	input::-ms-clear {
		display: none;
	}
	::-webkit-scrollbar {
		width: 0.25rem;
		height: 0.25rem;
	}
	::-webkit-scrollbar-track {
		background-color: ${palette.dark.background.base};
	}
	::-webkit-scrollbar-thumb {
		background-color: ${palette.dark.background.dark};
	}
`;

export default GlobalStyle;