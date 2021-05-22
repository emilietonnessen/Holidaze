import {ButtonLink} from "../UI/Button";
import Search from "../UI/Search";

const Hero: React.FC = () => (
    <header className="hero">
        <div className="hero__banner"><div className="hero__banner-filter"></div></div>
    
        <div className="hero__content">

            {/* Headline */}
            <h1 className="hero__headline hero__headline--primary">
                <span className="hero__headline--bigger">Bergen</span> - where memories are made
            </h1>

            {/* Underline */}
            <h2 className="hero__headline hero__headline--secondary">
                We help <span className="hero__headline--bold">you</span> with accommodations 
            </h2>
        
            {/* Search */}
            <div className="hero__search">
                <Search theme="white" />
            </div>
        </div>
            
        {/* CTA Button */}
        <div className="hero__cta">
            <ButtonLink link="/establishments" theme="primary" size="cta">
                explore
            </ButtonLink>
        </div>
            
    </header>
);

export default Hero;