import {ButtonLink} from "../UI/Button";
import Search from "../UI/Search";

const Hero: React.FC = () => (
    <header className="hero">
        <div className="hero__banner"></div>
            
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