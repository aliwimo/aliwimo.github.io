import FieldDate from "@/components/resume/components/field/FieldDate";
import FieldTitle from "@/components/resume/components/field/FieldTitle";
import FieldOrg from "@/components/resume/components/field/FieldOrg";
import FieldDesc from "@/components/resume/components/field/FieldDesc";
import styled from "styled-components";

const Field = (props) => {
	return (
		<Style>
			<FieldDate date={props.date}/>
			<FieldTitle title={props.title} link={props.link} />
			<FieldOrg org={props.org} />
			{props.desc && <FieldDesc desc={props.desc} />}
		</Style>
	);
};

const Style = styled.div`
	margin-left: 1rem;
`;

export default Field;