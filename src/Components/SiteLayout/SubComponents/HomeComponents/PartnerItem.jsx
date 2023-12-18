import OwlCarousel from 'react-owl-carousel';
import { PartnerData } from '../../../../Constant/HomeDate';

const PartnerItem = () => {
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
                items: 2,
            },
            400: {
                items: 4,
            },
            600: {
                items: 4,
            },
            700: {
                items: 6,
            },
            1000: {
                items: 6,

            }
        },
    };
    return (
        <>
            <section class="section_padding2">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="about">
                                <h1>WYZ Marketing Firm </h1>
                                <p> A  smart way to launch your Blockchain, Cryptocurrency DeFi, STO, NFT and IEO/ICO!</p>
                            </div>
                            <div class="defi_banner">
                                <OwlCarousel {...options} className='owl-theme carouselNav' loop margin={10}>
                                    {
                                        PartnerData.map((val, ind) =>
                                            <div key={ind} class="item">
                                                <div class="defi_icon">
                                                    <img src={val.imgSrc}/>
                                                </div>
                                            </div>
                                        )
                                    }
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default PartnerItem;