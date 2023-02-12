import { createGlobalStyle } from "styled-components";
import palette from "@/assets/palette";

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
	}

	html {
		font-size: 12pt;
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

	ul {
		margin: 0;
		padding-left: 1rem;
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
		background-color: ${palette.dark.background.dark1};
	}
	::-webkit-scrollbar-thumb {
		background-color: ${palette.dark.background.dark2};
	}

	::-moz-selection { /* Code for Firefox */
		color: ${palette.dark.foreground.base};
		background-color: ${palette.dark.primary};
	}

	::selection {
		color: ${palette.dark.foreground.base};
		background-color: ${palette.dark.primary};
	}

	.center {
		text-align: center;
	}
`;

export default GlobalStyle;
