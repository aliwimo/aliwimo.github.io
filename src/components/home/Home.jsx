import Name from "@/components/home/Name";
import Contact from "@/components/home/Contact";
import profileImage from "@/assets/profile.jpg"
import "@/components/home/Home.scss";

const HomeIndex = () => {
	return (
		<div className="container">
			<img className="profile" src={profileImage} alt="profile" />
			<Name />
			<Contact />
		</div>
	);
};

export default HomeIndex;
