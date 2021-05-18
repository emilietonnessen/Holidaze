import Image from "next/image";
import Link from "next/link";

import { Star } from '../Icons';
import * as interfaces from '../../../constants/interfaces';


const SearchResult: React.FC<interfaces.SearchResultProps> = ({ name, thumbnail, stars, slug }) => {

    // Calculate the amount of stars that shall be displayed
	const amountOfStars: number = stars;
    const calculatedStars: JSX.Element[] = [...Array(amountOfStars)].map((e, i) => <Star key={i} />);

    return (
        <Link href={`/establishment/${slug}`}>
            <a className="search-result__link">
                <div className="search-result">
                    <Image src={thumbnail} alt="button" width="150" height="100"  />
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