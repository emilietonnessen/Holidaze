import Image from "next/image";
import Link from "next/link";

import { Star } from '../Icons';
import {SearchResultProps} from '../../../constants/interfaces';
import { primary } from "../../../constants/colors";


const SearchResult: React.FC<SearchResultProps> = ({ name, thumbnail, stars, slug }) => {

    // Calculate the amount of stars that shall be displayed
	const amountOfStars: number = stars;
    const calculatedStars: JSX.Element[] = [...Array(amountOfStars)].map((e, i) => <Star key={i} color={primary} />);

    return (
        <Link href={`/establishment/${slug}`}>
            <a className="search-result__link">
                <div className="search-result">

                    <Image 
                        className="search-result__image" 
                        src={thumbnail.url} alt="button" 
                        width={thumbnail.width} 
                        height={thumbnail.height}  />

                    <div className="search-result__box">
                        <h6 className="search-result__hotel-name">{name}</h6>
                        <div className="search-result__stars">
                            {calculatedStars}
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
}
 
export default SearchResult;