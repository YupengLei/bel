import { useEffect, useState } from "react";
import { SvgIcon } from "../SvgIcon";
import { ScrollUpContainer } from "./styles";
import { getScroll } from "../utils/getWindow";
import scrollTop from "../../img/svg/scroll-top.svg";


const ScrollToTop = () => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = (event: any) => {
		const offsetFromTop = getScroll(event.target, true);

		if (!showScroll && offsetFromTop > 350) {
			setShowScroll(true);
		} else if (offsetFromTop <= 350) {
			setShowScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop);
		return () => {
			window.removeEventListener("scroll", checkScrollTop);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const scrollUp = () => {
		const element = document.getElementById("el") as HTMLDivElement;
		element.scrollIntoView({
			behavior: "smooth",
			block: "end",
			inline: "nearest",
		});
	};

	return (
		<ScrollUpContainer onClick={scrollUp} show={showScroll}>
			<SvgIcon src={scrollTop} width="20px" height="20px" />
		</ScrollUpContainer>
	);
};

export default ScrollToTop;
