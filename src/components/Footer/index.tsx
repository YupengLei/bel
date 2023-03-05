import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
	FooterSection,
	Title,
	NavLink,
	Extra,
	LogoContainer,
	Para,
	Large,
	Chat,
	Empty,
	FooterContainer,
	Language,
} from "./styles";

interface SocialLinkProps {
	href: string;
	src: string;
}

const Footer = ({ t }: any) => {
	const handleChange = (language: string) => {
		i18n.changeLanguage(language);
	};

	const SocialLink = ({ href, src }: SocialLinkProps) => {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				key={src}
				aria-label={src}
			>
				<SvgIcon src={src} width="25px" height="25px" />
			</a>
		);
	};

	return (
		<>
			<FooterSection>
				<Container>
					
				</Container>
			</FooterSection>
			<Extra>
				<Container border={true}>
					<Row
						justify="space-between"
						align="middle"
						style={{ paddingTop: "3rem" }}
					>
						<NavLink to="/">
							<LogoContainer>
								<SvgIcon
									src="logo.svg"
									aria-label="homepage"
									width="101px"
									height="64px"
								/>
							</LogoContainer>
						</NavLink>
						<FooterContainer>
							<SocialLink
								href="https://github.com/de-data-lab"
								src="github.svg"
							/>
							<SocialLink
								href="https://twitter.com/de-data-lab"
								src="twitter.svg"
							/>
							<SocialLink
								href="https://www.linkedin.com/in/de-data-lab/"
								src="linkedin.svg"
							/>
							<SocialLink
								href="https://medium.com/@de-data-lab/"
								src="medium.svg"
							/>

						</FooterContainer>
					</Row>
				</Container>
			</Extra>
		</>
	);
};

export default withTranslation()(Footer);

