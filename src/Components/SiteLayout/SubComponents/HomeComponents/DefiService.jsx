import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import { DefiServiceData } from "../../../../Constant/HomeDate";

const DefiServiceItem = ({Heading, SubHeading, imgSrc, Lists }) => {
    return (
        <>
            {
                <div class="item">
                    <div class="serv_box">
                        <img src={imgSrc} alt={imgSrc} class="icon"/>
                        <h1>{Heading}</h1>
                        <p>{SubHeading}</p>
                        {/* <ul>
                            {
                                Lists.map((item) =>
                                    <li><Link to={item.Link}>• {item.ListItem}</Link></li>
                                )
                            }
                        </ul> */}
                    </div>
                </div>
            }
        </>
    );
}

const DefiService = () => {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        dotsEach:false,
        dots: false,
        autoplay: true,
        navText: false,
        // navText: ["<", ">"],
        // smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
            },
            600: {
                items: 3,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 3,

            }
        },
    };
    return (
        <>
            {/* <!-----line seperator start-------> */}
            <div class="line_shade">
                <div class="left_side"></div><div class="middle_side"></div><div class="righ_side"></div>
            </div>
            {/* <!-----line seperator end-------> */}

            <section id="defi" class="serv_pd">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                            <div class="service">
                                <h1>Services For DeFi</h1>
                                <p>WYZ International Firm provides with full circle support for DeFi projects.</p>
                            </div>
                        </div>
                        <OwlCarousel {...options} className='owl-theme carouselNav' loop margin={10}>
                            {
                                DefiServiceData.map((val, ind) =>{
                                    return<DefiServiceItem
                                        key={ind}
                                        imgSrc={val.imgSrc}
                                        Heading={val.SubHeading}
                                        Lists={val.List}
                                    />
                                })
                            }
                        </OwlCarousel>
                        <div class="col-md-12">
                            <div class="contactUsbtn">
                                <a href="#scheduleCallSection" class="btn_all btn">Schedule a call!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-----line seperator start-------> */}
            <div class="line_shade">
                <div class="left_side"></div><div class="middle_side"></div><div class="righ_side"></div>
            </div>
        </>
    );
}
export default DefiService;