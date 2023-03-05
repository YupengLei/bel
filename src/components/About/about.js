import Mission from '../../img/svg/mission.svg';
import History from '../../img/svg/history.svg';
import { useState } from 'react';

const tabData = [
	{
		img: Mission,
		title: "Mission",
		description: "Our mission at BEL is to provide a dynamic platform for high school art creators to showcase their talent and advocate for the importance of art education. We strive to be the leading voice for art in high schools worldwide, fostering a community of passionate and driven young artists who use their creativity to make a positive impact on the world."
	},
	{
		img: History,
		title: "History",
		description: "BEL has been founded by a high school student Heidi, and her high school friends, who were passionate about art and felt that there was a lack of representation for high school artists in the broader art world. They started by sharing their own artwork on social media and soon found that other students from around the world were also eager to share their own creations. Over time, the group grew and expanded their platform to include a website, online galleries, and regular art competitions. As they gained more visibility and recognition, they began to use their platform to advocate for the importance of art education in high schools and to push for more resources and support for young artists. Today, BEL is a thriving community of high school artists and art enthusiasts from around the world, dedicated to promoting the power and potential of art in the lives of young people.",
	}
]

const TabContent = (props) => {
	return (
		<div data-w-tab="Tab 1" className="tab-content w-tab-pane w--tab-active" id="w-tabs-0-data-w-pane-0"
			role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-0">
			<div className="tab-height">
				<div className="tab-con">
					<div className="tab-box1">
						<div className="genre__icn large _15vw" data-w-id="73a24018-58e5-87ee-df7f-e58122e8e295"
							data-animation-type="lottie"
							data-src="https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a300b973c161492dc2e4f7_01_quirky_1872.json"
							data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0"
							data-renderer="svg" data-default-duration="3.683333333333333" data-duration="0">
							<img alt="character" loading="lazy"
								src={props.img}
							/>
						</div>
					</div>
					<div className="tab-box2">
						<div id="quirky" data-w-id="e83f84c1-2bcc-4acf-c144-890c74927920"
							className="play-circle quirky">
							<div className="letter-animation-fast">
								<div className="txt__genre split-text" >
									<div className="split-lines" >
										<div className="split-words">
											{props.title.split('').map((c, i) => {
												return (
													<div key={i} className="split-chars">{c}</div>
												)
											})}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tab-box3">

					<div data-is-ix2-target="1" className="sound-icn"
						data-w-id="21e9b575-0b39-8ced-7bb9-f2b0a0c0babb" data-animation-type="lottie"
						data-src="https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a8808a990edd4f338a966d_lottie-equalizer_01.json"
						data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg"
						data-default-duration="6.15" data-duration="6.15" data-ix2-initial-state="0">
						{props.description}
					</div>
					<div className="txt sample-name">{props.title}@BEL</div>
				</div>
			</div>
		</div>
	)

}





const About = () => {
	const [selectedTab, setSelectedTab] = useState(0);

	const tabChange = (index) => {
		console.log("index: " + index)
		setSelectedTab(index);
	}

	
	return (
		<div id="catalogue" className="s-genre">
			<div className="txt genre">Explore who we are.</div>

			<div data-current="Tab 1" data-easing="ease" data-duration-in="0" data-duration-out="0"
				className="genre__tabs w-tabs">
				<div className="tabs__menu w-tab-menu" role="tablist">
					<div data-w-tab="Tab 1"
						className="tab-menu quirky w-inline-block w-tab-link" id={0} style={{backgroundColor: selectedTab == 0 ? "#91c3ce" : null}}
						href="#" role="tab"
						aria-controls="w-tabs-0-data-w-pane-0" onClick={e => tabChange(e.target.id)} >
						<div className="genre-name">
							<div className="genre-icn__con"><img alt="Quirky character" loading="lazy"
								src={Mission} className="genre__icn"
							/>
								<div className="genre__lottie" data-w-id="9876b703-0868-bbbd-0f07-154db340316e"
									data-animation-type="lottie"
									data-src="https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a300b973c161492dc2e4f7_01_quirky_1872.json"
									data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0"
									data-renderer="svg" data-default-duration="3.683333333333333" data-duration="0"
								><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"
									width="500" height="500" preserveAspectRatio="xMidYMid meet"
								>
										<defs>
											<clippath id="__lottie_element_1173">
												<rect width="500" height="500" x="0" y="0"></rect>
											</clippath>
										</defs>

									</svg></div>
							</div>
							<div className="letter-animation-fast">
								<div className="txt__genre split-text" >
									<div className="split-lines" >
										<div className="split-words">
											<div
												className="split-chars">M</div>
											<div
												className="split-chars">i</div>
											<div
												className="split-chars">s</div>
											<div
												className="split-chars">s</div>
											<div
												className="split-chars">i</div>
											<div
												className="split-chars">o</div>
											<div
												className="split-chars">n</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
					<div data-w-tab="Tab 2" className="tab-menu sleep w-inline-block w-tab-link" tabIndex="-1"
						id={1} href="#" role="tab"
						aria-controls="w-tabs-0-data-w-pane-1" style={{backgroundColor: selectedTab == 1 ? "#91c3ce" : null}} onClick={e => tabChange(e.target.id)} >
						<div className="genre-name">
							<div className="genre-icn__con"><img alt="Moon with stars" loading="lazy"
								src={History} className="genre__icn" />
								<div className="genre__lottie" data-w-id="a3b824a8-076d-4d56-8b45-551abdf986bf"
									data-animation-type="lottie"
									data-src="https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a300b973c1610f11c2e4f8_02_sleep_1821.json"
									data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0"
									data-renderer="svg" data-default-duration="2.566666666666667" data-duration="0"><svg
										xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500"
										preserveAspectRatio="xMidYMid meet"
									>
										<defs>
											<clippath id="__lottie_element_1116">
												<rect width="500" height="500" x="0" y="0"></rect>
											</clippath>
										</defs>

									</svg></div>
							</div>
							<div className="letter-animation-fast">
								<div className="txt__genre split-text" >
									<div className="split-lines" >
										<div className="split-words">
											<div
												className="split-chars">H</div>
											<div
												className="split-chars">i</div>
											<div
												className="split-chars">s</div>
											<div
												className="split-chars">t</div>
											<div
												className="split-chars">o</div>
											<div
												className="split-chars">r</div>
											<div
												className="split-chars">y</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					
					
				</div>
				<div className="tabs__content w-tab-content">
					<TabContent
						img={tabData[selectedTab].img}
						title={tabData[selectedTab].title}
						description={tabData[selectedTab].description}
					/>
				</div>
				
			</div>
		</div>
	)
}

export default About;