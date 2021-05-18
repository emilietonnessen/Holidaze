import Image from "next/image"
import Link from "next/link";

import { greyDarkOne } from "../../constants/colors";
import { EstablishmentCardProps } from "../../constants/interfaces";
import * as icons from '../UI/Icons';


const EstablishmentCard: React.FC<EstablishmentCardProps> = ({thumbnail, name, reviews, stars, lowestPrice, slug }) => {

    // Loop through the correct amount of stars
    const n: number = stars;
    const calculatedStars: JSX.Element[] = [...Array(n)].map((e, i) => <icons.Star key={i} color={greyDarkOne} /> );

    return (
        <Link href={`/establishment/${slug}`}>
            <a>
                <div className="establishment-card">
                    <div className="establishment-card__img">
                        <Image 
                            src={thumbnail.url} 
                            alt={name} 
                            layout="responsive" 
                            width={thumbnail.width} 
                            height={thumbnail.height} /> 
                    </div>
                    <div className="establishment-card__name">
                        {name}
                    </div>
                    <div className="establishment-card__info">
                        <div className="establishment-card__stars">
                            {calculatedStars}
                            <span className="establishment-card__reviews">{reviews} Reviews</span>
                        </div>
                        <div className="establishment-card__price-box">
                            from <span className="establishment-card__price">{lowestPrice} NOK</span>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default EstablishmentCard;