import { useState } from "react";


const Newsletter = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    const checkedStyle = {
        bordeRadius: ".5vw",
        backgroundColor: "#f5e1be",
        backgroundImage: "url(https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a77f54b289c084a16ac984_checkmark.svg)",
        backgroundSize: "65%",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        borderWidth: "2px",
        borderColor: "#f37925",
        boxShadow: "none"
    }

    return (
        <div id="contact" className="s-form">
            <div className="s-left form">
                <div className="left__sticky letter-animation-medium form">
                    <h2 className="title split-text form" >
                        <div className="split-lines">
                            <div className="split-words">
                                <div 
                                    className="split-chars">S</div>
                                <div 
                                    className="split-chars">e</div>
                                <div 
                                    className="split-chars">n</div>
                                <div 
                                    className="split-chars">d</div>
                                <div
									className="split-chars">&nbsp;</div>
                            </div>
                            <div  className="split-words">
                                <div 
                                    className="split-chars">o</div>
                                <div 
                                    className="split-chars">u</div>
                                <div 
                                    className="split-chars">r</div>
                                
                            </div>
                        </div>
                        <div className="split-lines" ><span
                            className="highlight-orange">
                            <div  className="split-words">
                                <div 
                                    className="split-chars">g</div>
                                <div 
                                    className="split-chars">o</div>
                                <div 
                                    className="split-chars">o</div>
                                <div 
                                    className="split-chars">d</div>
                            </div>
                        </span> </div>
                        <div className="split-lines" >
                            <div  className="split-words">
                                <div 
                                    className="split-chars">v</div>
                                <div 
                                    className="split-chars">i</div>
                                <div 
                                    className="split-chars">b</div>
                                <div 
                                    className="split-chars">e</div>
                                <div 
                                    className="split-chars">s</div>
                            </div>
                        </div>
                        <div className="split-lines" >
                            <div  className="split-words">
                                <div 
                                    className="split-chars">y</div>
                                <div 
                                    className="split-chars">o</div>
                                <div 
                                    className="split-chars">u</div>
                                <div 
                                    className="split-chars">r</div>
                            </div>
                            <div  className="split-words">
                                <div 
                                    className="split-chars">w</div>
                                <div 
                                    className="split-chars">a</div>
                                <div 
                                    className="split-chars">y</div>
                                <div 
                                    className="split-chars">.</div>
                            </div>
                        </div>
                    </h2>
                </div>
            </div>
            <div className="s-right form">
                <div className="form-block w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form-contact"
                        aria-label="Email Form">
                        <div className="form-inputs">
                            <div className="input-con"><label htmlFor="email" className="field-label">Email Address</label><input
                                type="email" className="input-field w-input" maxLength="256" name="email" data-name="Email"
                                placeholder="Your email" id="email" required="" /></div>
                        </div>
                        <div className="submit-con"><label className="w-checkbox checkbox-field">
                            <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" style={checked ? checkedStyle : null}></div><input
                                type="checkbox" id="checkbox" checked={checked} onChange={handleChange}
                                style={{opacity:"0",position:"absolute",zIndex:"-1"}} /><span className="checkbox-label w-form-label"
                                    htmlFor="checkbox">When submitting your information you will agree to our <a
                                        href="#" target="_blank">Terms &amp; Privacy
                                        policy</a> and newsletter subscription.</span>
                        </label><input type="submit" value="Send" data-wait="Sending..." className="submit-button w-button" />
                        </div>
                    </form>
                    <div className="success-message w-form-done" tabIndex="-1" role="region" aria-label="Email Form success">
                        <img src="62a8bb37a4857b41f8bae6bd_success_illu.svg" loading="lazy" alt="" className="image" />
                            <div className="success-con">
                                <div className="div-block">
                                    <div className="title success"><span className="highlight-orange">Success!</span> Your submission
                                        has been
                                        received!</div>
                                    <div className="txt success">You will hear back from us.</div>
                                </div>
                            </div>
                    </div>
                    <div className="error-message w-form-fail" tabIndex="-1" role="region" aria-label="Email Form failure">
                        <div className="text-block-2">Oops! Something went wrong while submitting the form.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;