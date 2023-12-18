import { SocialMediaData } from "../../../../Constant/HomeDate";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';

const PaidAdsItem = ({Heading, SubHeading, socialIcon1, subIcons}) => {
    return (
        <>
            {
                <div class="item">
                    <div class="social_box">
                        <div class="content">
                            <h2>{Heading}</h2>
                            <p>{SubHeading}</p>
                            <div class="paid_icon">
                                <span class="google_adds">
                                    <Link to="#"><img src={socialIcon1} alt={socialIcon1} /></Link>
                                </span>
                                {
                                    subIcons.map((item) =>
                                        <span><Link to="#"><i class={item.Icon}></i></Link></span>
                                    )
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

const SocialMedia = () => {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
        navText: true,
        navText: ["‹", "›"],
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
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
            <section id="SocialMedia" class="serv_pd">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="service">
                                <h1>Services Of Social Media</h1>
                                <p>In This Era, SMM is Essential For The Success Of Any Business. Period.</p>
                                <p>The world is on Social Media and SMM is the bridge that takes you to your customer. Keeping up with the ever-changing trends, at WYZ International, we generate consistent and engaging social media content that grows your community, reach and consumer retentivity.</p>
                            </div>
                        </div>
                        <OwlCarousel {...options} className='owl-theme carouselNav' loop margin={10}>
                            {
                                SocialMediaData.map((val, ind) =>{
                                    return<PaidAdsItem
                                        key={ind}
                                        Heading={val.Heading}
                                        SubHeading={val.SubHeading}
                                        socialIcon1={val.socialIcon1}
                                        subIcons={val.subIcon}
                                    />
                                })
                            }
                        </OwlCarousel>
                        <div class="col-md-12">
                            <div class="cont_btn">
                                <a href="#scheduleCallSection" class="btn_all btn">Schedule a call!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default SocialMedia;