import styled from "styled-components";
import Name from "@/components/home/Name";
import Contact from "@/components/home/Contact";
import profileImage from "@/assets/profile.jpg"

const Home = () => {
	return (
		<Style>
			<img src={profileImage} alt="profile" />
			<Name />
			<Contact />
		</Style>
	);
};

const Style = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	text-align: center;
	margin-bottom: 2rem;

	img {
		width: 80px;
		border-radius: 50%;
		border: 0.125rem solid var(--main-fg);
	}
`;

export default Home;
