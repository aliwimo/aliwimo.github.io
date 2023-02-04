import styled from "styled-components";

const FieldDesc = (props) => {
	let desc;
	if (props.desc && props.desc instanceof Array) {
		desc = (
			<ul>
				{props.desc.map((item, i) => <li key={i}>{item}</li>)}
			</ul>
		);
	} else if (props.desc && typeof props.desc === "string") {
		desc = props.desc;
	}

	return <Style>{desc}</Style>;
};

const Style = styled.div`
	font-size: 0.9rem;
	margin-top: 0.25rem;
`;

export default FieldDesc;
