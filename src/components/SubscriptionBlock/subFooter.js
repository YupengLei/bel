import "./subscription.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreativeCommons } from '@fortawesome/free-brands-svg-icons';
import { faCreativeCommonsBy } from '@fortawesome/free-brands-svg-icons';
import { faCreativeCommonsNc } from '@fortawesome/free-brands-svg-icons';
import { faCreativeCommonsNd } from '@fortawesome/free-brands-svg-icons';
import contactIcon from '../../img/svg/contact-icn.svg';
import facebookIcon from '../../img/svg/facebook.svg';
import youtubeIcon from '../../img/svg/youtube.svg';
import twitterIcon from '../../img/svg/twitter.svg';
import instagramIcon from '../../img/svg/instagram.svg';
import tiktokIcon from '../../img/svg/tiktok.svg';
import followIcon from '../../img/svg/follow-icn.svg';


const SubFooter = () => {

	/*const scrollTo = (id) => {
		const element = document.getElementById(id);
		element.scrollIntoView({
			behavior: "smooth",
		});
	};*/


	return (
		<div className="footer">
			<div className="s-cta">
				<div className="s-left cta"><img src={contactIcon} loading="lazy" alt=""
					className="cta-icn" />
					<div className="cta__center-text">
						<div className="letter-animation-medium">
							<h2 className="title split-text creators">
								<div className="split-lines" >
									<div className="split-words">
										<div
											className="split-chars">C</div>
										<div
											className="split-chars">o</div>
										<div
											className="split-chars">n</div>
										<div
											className="split-chars">t</div>
										<div
											className="split-chars">a</div>
										<div
											className="split-chars">c</div>
										<div
											className="split-chars">t</div>
										<div
											className="split-chars">&nbsp;</div>
									</div>
									<div className="split-words">
										<div
											className="split-chars">u</div>
										<div
											className="split-chars">s</div>
									</div>
								</div>
							</h2>
						</div>
						<div className="cta-subline">anytime</div>
					</div><a fs-copyclip-duration="800" fs-copyclip-element="click" fs-copyclip-message="Copied!"
						href="https://www.bel.com/#" className="cta-email-btn w-button">hi@bel.com</a>
					<div className="cta-email__con">
						<div fs-copyclip-element="copy-this" className="cta-email">hi@bel.com</div>
					</div>
				</div>
				<div className="s-right cta"><img src={followIcon} loading="lazy" alt=""
					className="cta-icn follow" />
					<div className="cta__center-text">
						<div className="letter-animation-medium">
							<h2 className="title split-text creators">
								<div className="split-lines">
									<div className="split-words">
										<div
											className="split-chars">F</div>
										<div
											className="split-chars">o</div>
										<div
											className="split-chars">l</div>
										<div
											className="split-chars">l</div>
										<div
											className="split-chars">o</div>
										<div
											className="split-chars">w</div>
										<div
											className="split-chars">&nbsp;</div>
									</div>
									<div className="split-words">
										<div
											className="split-chars">u</div>
										<div
											className="split-chars">s</div>
									</div>
								</div>
							</h2>
						</div>
						<div className="cta-subline green">anywhere</div>
					</div>
					<div className="cta__social-icns"><a data-w-id="e6cec9d1-5cd2-4dac-f786-0a95ae830eca"
						href="https://www.facebook.com/bel" target="_blank" rel="noreferrer" className="social-icn-con w-inline-block"
						><img src={facebookIcon} loading="lazy" alt=""
							className="social-icn" />
						<div className="social-title">Facebook</div>
					</a><a data-w-id="e6cec9d1-5cd2-4dac-f786-0a95ae830ece"
						href="https://www.youtube.com/channel/bel" target="_blank" rel="noreferrer"
						className="social-icn-con youtube w-inline-block" ><img
								src={youtubeIcon} loading="lazy" alt="" className="social-icn" />
							<div className="social-title">YouTube</div>
						</a><a data-w-id="e6cec9d1-5cd2-4dac-f786-0a95ae830ed2" href="https://www.instagram.com/bel/"
							target="_blank" rel="noreferrer" className="social-icn-con ig w-inline-block"><img
								src={instagramIcon} loading="lazy" alt="" className="social-icn" />
							<div className="social-title">Instagram</div>
						</a><a data-w-id="e6cec9d1-5cd2-4dac-f786-0a95ae830ed6" href="https://twitter.com/bel"
							target="_blank" rel="noreferrer" className="social-icn-con twitter w-inline-block" ><img
								src={twitterIcon} loading="lazy" alt="" className="social-icn" />
							<div className="social-title">Twitter</div>
						</a><a data-w-id="b3557dfd-049a-cc56-08b4-3e03446bd705" href="https://www.tiktok.com/@bel"
							target="_blank" rel="noreferrer" className="social-icn-con tiktok w-inline-block" ><img
								src={tiktokIcon} loading="lazy" alt="" className="social-icn" />
							<div className="social-title">TikTok</div>
						</a></div>
				</div>
			</div>

			<div className="s-footer">
				<div className="footer-nav">
					<div className="footer-link"><a href="http://www.bel.com/#">About</a></div>
					<div className="footer-link"><a href="http://www.bel.com/#">Founder</a></div>
					<div className="footer-link"><a href="http://www.bel.com/#">Event</a></div>
					<div className="footer-link"><a href="http://www.bel.com/#">Store</a></div>
					<div className="footer-link"><a href="http://www.bel.com/#">Contact</a></div>
				</div>
				<div className="letter-animation-footer">
					<div className="footer-logo split-text" >
						<div className="split-lines" >
							<div className="split-words">
								
								<div
									className="split-chars">B</div>
								
								<div
								
									className="split-chars">E</div>
								
								
								<div
									className="split-chars">L</div>
								<div
									className="split-chars"><FontAwesomeIcon icon={faCreativeCommons} className="copyright" /></div>
								<div
									className="split-chars"><FontAwesomeIcon icon={faCreativeCommonsBy} className="copyright" /></div>
								<div
									className="split-chars"><FontAwesomeIcon icon={faCreativeCommonsNc} className="copyright" /></div>
								<div
									className="split-chars"><FontAwesomeIcon icon={faCreativeCommonsNd} className="copyright" /></div>
								
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SubFooter;