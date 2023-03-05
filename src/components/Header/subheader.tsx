import "./subheader.css";
import { SvgIcon } from "../../common/SvgIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from "../../img/svg/bel.png";

import { useState } from "react";
import { Col, Drawer } from "antd";

import {
    Menu,
    CustomNavLinkSmall,
    Label,
    Outline,
    Span,
} from "./styles";




const SubHeader = () => {

    const [visible, setVisibility] = useState(false);

    const showDrawer = () => {
        setVisibility(!visible);
    };

    const onClose = () => {
        setVisibility(!visible);
    };

    const scrollTo = (id: string) => {
        const element = document.getElementById(id) as HTMLDivElement;
        element.scrollIntoView({
            behavior: "smooth",
        });
        setVisibility(false);
    };

    const MenuItem = () => {

        return (
            <>
                <CustomNavLinkSmall onClick={() => scrollTo("how")}>
                    <Span>ABOUT</Span>
                </CustomNavLinkSmall>
                <CustomNavLinkSmall onClick={() => scrollTo("what")}>
                    <Span>EVENTS</Span>
                </CustomNavLinkSmall>
                <CustomNavLinkSmall onClick={() => scrollTo("who")}>
                    <Span>GALLERY</Span>
                </CustomNavLinkSmall>

            </>
        );
    };



    /*const searchStyleClose = {
        visibility: "hidden",
        opacity: "0"
    }

    const searchStyleOpen = {
        visibility: "visible",
        opacity: "1",
    }*/


    return (
        <div id="el" className="s-hero">
            <div data-w-id="88d8e678-2b05-4f9f-87e6-b170592a288e" className="hero__left"
            >
                <div data-w-id="39f82f08-a604-0cff-aafd-2534e9dfdbdb" className="hero__top"><img
                    src={logo} loading="lazy" alt="Mubasic"
                    className="top__logo" /><img src="" loading="lazy"
                        alt="" className="top__symbol" /></div>
                <div data-w-id="32cb57d4-eb31-a829-ba19-692f7e659aef" className="txt hero">An ever-growing voice and platform for
                    advocating
                    high school’s art, sourced by talented high school art creators from all over the world.</div>
                <div data-w-id="49a15f63-0888-eeb7-0fd1-8d1072ff5e01" className="letter-animation">
                    <h1 className="hero__title">The&nbsp;<span className="highlight-orange optical">voice</span><span
                        className="highlight-orange"> & platform
                    </span> for&nbsp;art&nbsp;in<br />high&nbsp;schools.</h1>
                </div>
            </div>
            <div className="hero__right">
                <div className="piano__con">
                    <div data-note="m" data-w-id="978e6a1f-ddc1-7308-c3e1-4f35dfad17dc" className="piano__key white" onClick={() => scrollTo("about")}>
                        <div className="key__label" >ABOUT</div>
                    </div>
                    
                    <div data-note="b" data-w-id="a4b65aa8-a242-0bc3-21bd-41fffea2bd15" className="piano__key _2 white" onClick={() => scrollTo("founder")}>
                        <div className="key__label" >FOUNDER</div>
                    </div>
                    
                    <div data-note="a" data-w-id="43d95864-5394-3375-b300-021d9585d816" className="piano__key _3 white"
                    >
                        <div className="key__label">EVENTS</div>
                    </div>
                    <div data-note="i" data-w-id="0b7766b5-f3bc-03cc-f42e-61e61c79daf1" className="piano__key _4 white"
                    >
                        <div className="key__label">STORE</div>
                    </div>
                    <div data-note="c" data-w-id="c47ebfb0-48cf-a54d-87d0-052fafb17b73" className="piano__key _5 white" onClick={() => scrollTo("newsletter")}>
                        <div className="key__label" >CONTACT</div>
                    </div>
                    <div data-w-id="b731cc94-4fee-7300-508c-92d98d0f26a4" className="loader-pointer-events-none"
                        style={{ display: "none" }}>
                    </div>
                </div>
                <div className="piano-active-classes">
                    <div data-note="m" className="piano__key white active">
                        <div className="key__label">m</div>
                    </div>
                    <div data-note="s" className="piano__key black active">
                        <div className="key__label black">s</div>
                    </div>
                </div>
                <div data-w-id="4ba0b110-1ca8-38a2-7999-07684e1cbde5" className="hero__right-dark-bg"
                >
                </div>
            </div>
        </div>
    )
}

export default SubHeader;


/*
onClick={props.showSearch}
style={!props.visibleSearch ? searchStyleClose : searchStyleOpen}



 <div className="g-header__search" >
                            <div className="g-header__search__container">
                                <form action="" >
                                    <input className="a-input g-header__search__input" placeholder="Search" aria-label="Search input" name="q"
                                        data-search-input="" autoComplete="off" id="search" />
                                    <button className="g-header__search__submit" aria-label="Submit search" disabled={true}>
                                        <span className="visually-hidden" >submit</span>
                                        <figure className="g-header__navIcon" aria-hidden="true" ><i><FontAwesomeIcon icon={faMagnifyingGlass} /></i></figure>

                                    </button>
                                    <button className="g-header__search__close" type="button" data-meganav-toggle=""
                                        aria-label="Close search and navigation" >
                                        <span className="visually-hidden">close navigation</span>
                                        <figure className="g-header__navIcon" aria-hidden="true"><i><FontAwesomeIcon icon={faXmark} /></i></figure>
                                    </button>
                                </form>


                            </div>
                        </div>
*/