import Star2Img from "../../assets/images/v1/icon/star2.webp";
import CheckIcon from "../../assets/images/icon/check.svg";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../animation/FadeInStaggerTwo";

import SolutionProjectSlider from "./SolutionProjectSlider";
import SolutionPageLogoSlider from "./SolutionPageLogoSlider";
import SolutionTestimonialSlider from "./SolutionTestimonialSlider";
import SolutionDynamicInfo from "./SolutionDynamicInfo";

import Slider1Img from '../../assets/images/images2/tinified/all-it-nw-front-page.webp';
import Slider2Img from '../../assets/images/images2/tinified/alt-it-front-page.webp';
import Slider3Img from '../../assets/images/images2/global-it-front-page.webp';
import Slider4Img from '../../assets/images/images2/tinified/HoBarbe-front-page.webp';
import Slider5Img from '../../assets/images/images2/tinified/informadist-front-page.webp';
import Slider6Img from '../../assets/images/images2/tinified/orangenexus-front-page.webp';
import Slider7Img from '../../assets/images/images2/tinified/The-IT-Consultancy-front-page.webp';
const slidesData = [
    { image: Slider1Img, alt: "All IT NW Front Page" },
    { image: Slider2Img, alt: "Alt IT Front Page" },
    { image: Slider3Img, alt: "Global IT Front Page" },
    { image: Slider4Img, alt: "HoBarbe Front Page" },
    { image: Slider5Img, alt: "Informadist Front Page" },
    { image: Slider6Img, alt: "Orange Nexus Front Page" },
    { image: Slider7Img, alt: "The IT Consultancy Front Page" },
];

import Logo1Img from '../../assets/images/images2/alt-it-logo.webp';
import Logo2Img from '../../assets/images/images2/HoBarbe-logo.webp';
import Logo3Img from '../../assets/images/images2/ll-it-nw-logo.webp';
import Logo4Img from '../../assets/images/images2/informadist-logo.webp';
import Logo5Img from '../../assets/images/images2/orangenexus-logo.webp';
import Logo6Img from '../../assets/images/images2/The-IT-Consultancy-logo.webp';
import Logo7Img from '../../assets/images/images2/global-tech-distribution.webp';
const logosData = [
    { image: Logo1Img, alt: "Alt IT Logo" },
    { image: Logo2Img, alt: "HoBarbe Logo" },
    { image: Logo3Img, alt: "LL IT NW Logo" },
    { image: Logo4Img, alt: "Informadist Logo" },
    { image: Logo5Img, alt: "Orange Nexus Logo" },
    { image: Logo6Img, alt: "The IT Consultancy Logo" },
    { image: Logo7Img, alt: "Global Tech Distribution" },
];

const featuresList = [
    { text: "Fully Responsive and Mobile-Friendly Design", icon: CheckIcon },
    { text: "SEO-Optimized Structure", icon: CheckIcon },
    { text: "Services Showcase and Portfolio Integration", icon: CheckIcon },
    { text: "Fast and Secure Performance", icon: CheckIcon },
    { text: "Blog and Resource Center", icon: CheckIcon },
    { text: "Social Media Integration", icon: CheckIcon },
];


function Itdigitalagencydata() {



    return (
        <div>
            <FadeInStaggerTwo>
                <FadeInStaggerTwoChildren>
                    <SolutionPageLogoSlider
                        logos={logosData}
                        title="Trusted by Industry Leaders in IT and Digital Services."
                    />
                </FadeInStaggerTwoChildren>
                <FadeInStaggerTwoChildren>
                    <SolutionProjectSlider slides={slidesData} />
                </FadeInStaggerTwoChildren>
            </FadeInStaggerTwo>

            <SolutionDynamicInfo
                title="Modern and Professional"
                subtitle="Websites for IT Digital Agencies"
                description="Your IT digital agency deserves a website that showcases your expertise and drives client acquisition.
                            In a competitive industry, first impressions matter, and a professionally designed website can set you
                            apart from the rest. We specialize in creating tailored, cutting-edge websites for IT digital agencies
                            that are visually striking, fully functional, and optimized for growth. With a deep understanding of
                            your industry’s needs, we design platforms that highlight your services, showcase your portfolio, and
                            provide a seamless user experience for your clients. Let’s create a website that reflects your agency’s
                            professionalism and helps you achieve your business goals."
                ctaText="Get In Touch"
                ctaLink="/contact-us"
                iconImage={Star2Img}
                features={featuresList}
            />

            <SolutionTestimonialSlider />
        </div>

    )
}

export default Itdigitalagencydata