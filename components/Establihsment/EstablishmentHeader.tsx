import { primary, greyLightThree } from '../../constants/colors';
import { EstablishmentHeaderProps } from '../../constants/interfaces';
import { Star, Location }from '../UI/Icons';

const EstablishmentHeader: React.FC<EstablishmentHeaderProps> = ({name, stars, street, rating, reviews}) => {

    // Calculate the amount of stars that shall be displayed
	const numberOfStars: number = stars;
    const calculatedStars: JSX.Element[] = [...Array(numberOfStars)].map((e, index) => <Star key={index} color={primary} /> );

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
        <header className="establishment-header">
			<div className="establishment-header__box">
				<h2 className="establishment-header__title">{name}</h2>
				<div className="establishment-header__stars">
					{calculatedStars}
					{stars === 4 ? oneGreyStar :
                    stars === 3 ? twoGreyStar :
        	        stars === 2 ? threeGreyStar :
                    stars === 1 ? fourGreyStar : null }
				</div>
			</div>

			<div className="establishment-header__box">
				<div className="establishment-header__address">
					<Location color={primary} />
					{street}
				</div>
				<div className="establishment-header__rating-box">
					<div>
						<div className="establishment-header__rating">{rating}</div>
						<div className="establishment-header__reviews">{reviews} reviews</div>
					</div>
				</div>
			</div>
		</header>
    );
}

export default EstablishmentHeader;