import "@/components/home/Contact.scss";
import SvgIcon from "../icons/SvgIcon";

const Contact = () => {
	return (
		<ul className="links">
			<li>
				<a className="gmail" href="mailto:aliwimo@gmail.com">
					<SvgIcon name="gmail" />
				</a>
			</li>
			<li>
				<a className="linkedin" href="https://www.linkedin.com/in/aliwimo/">
					<SvgIcon name="linkedin" />
				</a>
			</li>
			<li>
				<a className="github" href="https://github.com/aliwimo">
					<SvgIcon name="github" />
				</a>
			</li>
			<li>
				<a className="twitter" href="https://twitter.com/aliwimo">
					<SvgIcon name="twitter" />
				</a>
			</li>
		</ul>
	);
};

export default Contact;
