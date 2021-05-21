import {ButtonLink} from "../UI/Button";
import Search from "../UI/Search";

const Hero: React.FC = () => (
    <header className="hero">
        <div className="hero__banner"><div className="hero__banner-filter"></div></div>
    
        <div className="hero__box">
            <h1 className="hero__headline">
                <span className="hero__bergen">Bergen</span> - where memories are made
            </h1>
            <h2 className="hero__underline">
                We help <span className="hero__underline--bold">you</span> with accommodations 
            </h2>
        </div>
            
        <div className="hero__search">
            
            <Search theme="white" />
        </div>
            
        <div className="hero__cta">
            <ButtonLink link="/establishments" theme="primary" size="cta">
                explore
            </ButtonLink>
        </div>
            
    </header>
);

export default Hero;


/*
    Holidaze. Where memories last (are made)
    The Gateway to the Fjords
    The heart of Norway

hvor minner blir til 

*/