import styled from "styled-components";
import palette from "@/assets/palette";
import SvgIcon from "@/components/icons/SvgIcon";

const Tag = (props) => {
	return (
		<Style>
			{props.icon && <SvgIcon name={props.icon} />}
			<span>{props.name}</span>
		</Style>
	);
};

// styling
const Style = styled.span`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;	
	background-color: ${palette.dark.background.dark};
	padding: 0.125rem 0.75rem;
	font-size: 0.9rem;
	border-radius: 0.375rem;
	color: ${palette.dark.foreground.base};

	svg {
		width: 0.9rem;
	}
`;

export default Tag;
