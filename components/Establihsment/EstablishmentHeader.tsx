import { primary, greyLightThree } from '../../constants/colors';
import { EstablishmentHeaderProps } from '../../constants/interfaces';
import * as icons from '../UI/Icons';

const EstablishmentHeader: React.FC<EstablishmentHeaderProps> = ({name, stars, street, rating, reviews}) => {

    // Calculate the amount of stars that shall be displayed
	const n: number = stars;
    const calculatedStars: JSX.Element[] = [...Array(n)].map((e, i) => <icons.Star key={i} color={primary} />);

	const oneGreyStar = <icons.Star color={greyLightThree} />;

    const twoGreyStar = <>
        <icons.Star color={greyLightThree} />
        <icons.Star color={greyLightThree} />
    </>;

    const threeGreyStar = <>
        <icons.Star color={greyLightThree} />
        <icons.Star color={greyLightThree} />
        <icons.Star color={greyLightThree} />
    </>;

    const fourGreyStar = <>
        <icons.Star color={greyLightThree} />
        <icons.Star color={greyLightThree} />
        <icons.Star color={greyLightThree} />
        <icons.Star color={greyLightThree} />
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
					<icons.Location color={primary} />
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