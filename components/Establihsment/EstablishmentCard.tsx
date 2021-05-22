import Image from "next/image"
import Link from "next/link";

import { Star } from '../UI/Icons';
import { greyDarkOne, greyLightThree } from "../../constants/colors";
import { EstablishmentCardProps } from "../../constants/interfaces";



const EstablishmentCard: React.FC<EstablishmentCardProps> = ({thumbnail, name, reviews, stars, lowestPrice, slug }) => {

    // Loop through the correct amount of stars
    const n: number = stars;
    const calculatedStars: JSX.Element[] = [...Array(n)].map((e, i) => <Star key={i} color={greyDarkOne} /> );

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
        <Link href={`/establishment/${slug}`}>
            <a className="establishment-card__link">
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
                            {stars === 4 ? oneGreyStar :
                            stars === 3 ? twoGreyStar :
                            stars === 2 ? threeGreyStar :
                            stars === 1 ? fourGreyStar : null }
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