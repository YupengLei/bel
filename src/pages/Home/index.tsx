import { lazy } from "react";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import How from "../../components/HowWeWork/how";
import Who from "../../components/WhoWeAre/who";
import What from "../../components/WhatWeDo/what";
import Intro from "../../components/Intro/intro";
import Partner from "../../components/partner/partner";
import Newsletter from "../../components/Newsletter/newsletter";
import About from "../../components/About/about";
import Founder from "../../components/Founder/founder";



const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
	return (
		<Container>
			<ScrollToTop />
			
			<MiddleBlock
				title={MiddleBlockContent.title}
				content={MiddleBlockContent.text}
				button={MiddleBlockContent.button}
				id="about"
				childComp={<About />}
				direction="none"
			/>

			<MiddleBlock
				title={MiddleBlockContent.title}
				content={MiddleBlockContent.text}
				button={MiddleBlockContent.button}
				id="founder"
				childComp={<Founder />}
				direction="none"
			/>

			<MiddleBlock
				title={MiddleBlockContent.title}
				content={MiddleBlockContent.text}
				button={MiddleBlockContent.button}
				id="newsletter"
				childComp={<Newsletter />}
				direction="none"
			/>

		</Container>
	);
};

export default Home;

/*
<Intro />
			<MiddleBlock
				title={MiddleBlockContent.title}
				content={MiddleBlockContent.text}
				button={MiddleBlockContent.button}
				id="how"
				childComp={<How />}
				direction="right"
			/>
			<MiddleBlock
				title={MiddleBlockContent.title}
				content={MiddleBlockContent.text}
				button={MiddleBlockContent.button}
				id="what"
				childComp={<What />}
				direction="left"
			/>
			<MiddleBlock
				title={MiddleBlockContent.title}
				content={MiddleBlockContent.text}
				button={MiddleBlockContent.button}
				id="who"
				childComp={<Who />}
				direction="right"
			/>
			<MiddleBlock
				title={MiddleBlockContent.title}
				content={MiddleBlockContent.text}
				button={MiddleBlockContent.button}
				id="partner"
				childComp={<Partner />}
				direction="left"
			/>
			*/
