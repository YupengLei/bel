import Heidi from '../../img/svg/heidi.png';


const Founder = () => {

    return (
        <div id="creators" className="s-creators">
            <div className="s-left creators">
                <div className="left__sticky letter-animation-medium">
                    <h2 className="title split-text creators" >
                        <div className="split-lines" style={{ textAlign: "start", position: "relative" }}>

                            <div style={{ position: "relative", display: "inline-block" }} className="split-words">
                                <div
                                    className="split-chars">M</div>
                                <div
                                    className="split-chars">e</div>
                                <div
                                    className="split-chars">e</div>
                                <div
                                    className="split-chars">t</div>
                                <div
                                    className="split-chars">&nbsp;</div>
                            </div>
                            <div style={{ position: "relative", display: "inline-block" }} className="split-words">
                                <div
                                    className="split-chars">t</div>
                                <div
                                    className="split-chars">h</div>
                                <div
                                    className="split-chars">e</div>
                                <div
                                    className="split-chars">&nbsp;</div>
                            </div>
                        </div>
                        <div className="split-lines" style={{ textAlign: "start", position: "relative" }}>
                            <div style={{ position: "relative", display: "inline-block" }} className="split-words">
                                <div
                                    className="split-chars">f</div>
                                <div
                                    className="split-chars">o</div>
                                <div
                                    className="split-chars">u</div>
                                <div
                                    className="split-chars">n</div>
                                <div
                                    className="split-chars">d</div>
                                <div
                                    className="split-chars">e</div>
                                <div
                                    className="split-chars">r</div>
                                <div
                                    className="split-chars">.</div>
                                <div
                                    className="split-chars">&nbsp;</div>
                            </div>

                        </div>
                    </h2>
                </div>
                <div className="txt creators">From founding to growing.</div>
            </div>
            <div className="s-right creators">
                <div data-w-id="9d89c587-5cb9-deae-893e-dc797471432f" className="creators__grid">
                    
                    <div id="w-node-_8eebaf2a-a7a1-e2ea-1ae5-ee3059f04358-73c2e4a5" className="grid__box pink">
                        <img
                            src={Heidi}
                            alt="Instrumentalist playing the violin"
                            data-w-id="46e1b98a-5def-a501-ec8f-a622a6428807" className="grid__img" />
                    </div>
                    
                    
                    <div id="w-node-_9100e4ac-52b5-a836-a176-969ead7a5a28-73c2e4a5" className="grid__title">Heidi</div>
                    
                </div>
            </div>
        </div>
    )
}

export default Founder;