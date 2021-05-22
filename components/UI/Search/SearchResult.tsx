import Image from "next/image";
import Link from "next/link";

import { Star } from '../Icons';
import {SearchResultProps} from '../../../constants/interfaces';
import { primary, greyLightThree } from "../../../constants/colors";


const SearchResult: React.FC<SearchResultProps> = ({ name, thumbnail, stars, slug, onClick }) => {

    // Calculate the amount of stars that shall be displayed
	const amountOfStars: number = stars;
    const calculatedStars: JSX.Element[] = [...Array(amountOfStars)].map((e, i) => <Star key={i} color={primary} />);

    const oneGreyStar = <Star color={greyLightThree} />;

    const twoGreyStar = <>
        <Star color={greyLightThree} />
        <Star color={greyLightThree} />
    </>;

    const threeGreyStar = <>
        <Star color={greyLightThree} />
        <Star color={greyLightThree} />
        <Star color={greyLightThree} />
    </>;

    const fourGreyStar = <>
        <Star color={greyLightThree} />
        <Star color={greyLightThree} />
        <Star color={greyLightThree} />
        <Star color={greyLightThree} />
    </>;

    return (
        <Link href={`/establishment/${slug}`} >
            <a className="search-result__link" onClick={onClick}>
                <div className="search-result">

                    <div className="search-result__image">
                        <Image 
                            className="search-result__image" 
                            src={thumbnail.url} alt="button" 
                            width={thumbnail.width} 
                            height={thumbnail.height}  />
                    </div>
                    

                    <div className="search-result__box">
                        <h6 className="search-result__hotel-name">{name}</h6>
                        <div className="search-result__stars">
                            {calculatedStars}
                            {stars === 4 ? oneGreyStar :
                            stars === 3 ? twoGreyStar :
                            stars === 2 ? threeGreyStar :
                            stars === 1 ? fourGreyStar : null }
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
}
 
export default SearchResult;