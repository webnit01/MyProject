import wyzbanner from '../../../assets/video/video.mp4';
import { Link } from 'react-router-dom';
import wyzintro from '../../../assets/images/home.gif';

import OwlCarousel from 'react-owl-carousel';
import { CryptoData } from '../../../Constant/HomeDate';
import PartnerItem from '../SubComponents/HomeComponents/PartnerItem';
import SocialMedia from '../SubComponents/HomeComponents/SocialMedia';
import DefiService from '../SubComponents/HomeComponents/DefiService';

const Home = () => {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        navText: false,
        // navText: ["<", ">"],
        smartSpeed: 1000,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 1,
            },
            1000: {
                items: 1,

            }
        },
    };
    return (
        <>
            <video controls={false} muted autoPlay={"autoplay"} preLoad="auto" loop width="100%">
                <source src={wyzbanner} type="video/mp4" />
            </video>

            <div class="container">
                <div class="row">
                    <div class="get_btn">
                        <Link to="contact.html" target="_blank" class="btn_all btn">
                            Get A Proposal
                        </Link>
                    </div>
                </div>
            </div>

            <section class="wyz_top" style={{ backgroundColor: '#eff0f4' }}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">

                            <div class="wyz_banner1">
                                <h1 class="cryptoh1">Crypto Marketing & <br />Communications Experts</h1>
                            </div>
                            <OwlCarousel {...options} className='owl-theme carouselNav' loop margin={10}>
                                {
                                    CryptoData.map((val, ind) =>
                                        <div key={ind} class="item">
                                            <div class="wyz_banner_content">
                                                <h1>{val.WyzParagraph}</h1>
                                            </div>
                                        </div>
                                    )
                                }
                            </OwlCarousel>
                        </div>
                        <div class="col-md-6">
                            <div class="top_bannerimg">
                                <img src={wyzintro} style={{ width: '100%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" class="section_padding whoWe_bg mb_section topzero">

                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="who_we_are">
                                <h2>About Us</h2>
                                <div class="who_we_content abouthome">
                                    <p>WYZ International is one of the early adopters of blockchain specialised marketing communications. We are a young, innovative and result-driven company that serves as a launchpad for your business. Want to take your business in the global market or target its growth in a specific region? We, the Crypto Marketing Experts, have your back!</p>

                                    <p>From Social Marketing to PR to Search Engine Optimization to Event and Exhibition organisation, we offer all the services you need to take your business to the next level!</p>

                                    <p>We were incorporated in 2018; the exact year the world realised the immense potential of Blockchain technology. Through the years, we have worked with several clients in the field. This has led us to have a sharp learning curve; a curve that is constructed through trial and error. As a result, we know which marketing strategies work. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" class="section_padding whoWe_bg2 mb_section topzero">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="who_we_are how_we_are mt_0">
                                <h2>How Are We Different?</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="howdiff marb">
                                <ul class="howul">
                                    <li>We Focus on Business </li>
                                    <li>We Focus on Must haves Vs Good to have</li>
                                    <li>We Focus On Simple &amp; Effective Marketing Strategies</li>
                                    <li>We Focus On Growth of Community, Visibility, Credibility &amp; Market Making</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PartnerItem />

            {/* <!-----line seperator start-------> */}
            <div class="line_shade">
                <div class="left_side"></div><div class="middle_side"></div><div class="righ_side"></div>
            </div>
            {/* <!-----line seperator end-------> */}

            <SocialMedia/>

            <DefiService/>
        </>
    );
}
export default Home;