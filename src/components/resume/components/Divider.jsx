import palette from "@/assets/palette";
import styled from "styled-components";

const Divider = () => {
	return <Style />
};

const Style = styled.div`
	height: 1px;
	margin: 0 1rem;
	background-color: ${palette.dark.background.base};
`

export default Divider;