import { EstablishmentHeaderProps } from '../../constants/interfaces';
import * as icons from '../UI/Icons';

const EstablishmentHeader: React.FC<EstablishmentHeaderProps> = ({name, stars, street, rating, reviews}) => {

	const primaryColor = "#ff1447";

    // Calculate the amount of stars that shall be displayed
	const n: number = stars;
    const calculatedStars: JSX.Element[] = [...Array(n)].map((e, i) => <icons.Star key={i} color={primaryColor} />);

    return (
        <header className="establishment-header">
			<div className="establishment-header__box">
				<h2 className="establishment-header__title">{name}</h2>
				<div className="establishment-header__stars">{calculatedStars}</div>
			</div>

			<div className="establishment-header__box">
				<div className="establishment-header__address">
					<icons.Location color={primaryColor} />
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


/*

	TO DO LIST:

	[X] - Swap the image to icon component 
	[ ] - if there are less than 5 stars show grey stars?
	[X] - move the interface to interface.tsx

*/