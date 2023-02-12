import palette from "@/assets/palette";
import variables from "@/assets/variables";
import SvgIcon from "@/components/icons/SvgIcon";
import styled from "styled-components";

const FieldLink = (props) => {
	return (
		<Style href={props.link} target="_blank">
			<SvgIcon name="link" />
		</Style>
	);
};

const Style = styled.a`
	display: inline-block;
	width: 2rem;
	height: 2rem;
	display: flex;
	justify-content: center;
	border-radius: ${variables.borderRadius.main};
	transition: background-color ${variables.transitionDuration} ease-out;

	&:hover {
		background-color: ${palette.dark.background.dark3};
	}
`;

export default FieldLink;
