import Image from "next/image";

import { Chevron } from '../UI/Icons';
import { primary } from "../../constants/colors";
import { EstablishmentInfoProps } from "../../constants/interfaces";



const EstablishmentDetails: React.FC<EstablishmentInfoProps> = ({description, coordinates, amenities}) => {

    // Splitting the amenities by every line break into an array
    const splitAmenities: string[] = amenities.split('\n');

    // Map through the recently made array into a list
    const finalAmenities: JSX.Element[] = splitAmenities.map(amenities => (
        <li  key={amenities}>
            <Chevron color={primary} />
            {amenities}
        </li>
    ));

    return (
        <div className="establishment-details__info details">

			<p className="details__description">{description}</p>

            <div className="details__map">
                <iframe
                    className="details__iframe"
                    src={`https://maps.google.com/maps?q=${coordinates}&hl=en-US&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;&output=embed`}>
                </iframe>
            </div>
            

			<ul className="details__amenities">
                {finalAmenities}
            </ul>
                
			<div className="details__recommendation">
                <p className="details__recommendation-text">
                    Lucy and other 3 friends recommend this hotel
                </p>
                <div className="details__recommendation-images">
                    <Image src="/assets/users/female-1.jpg" alt="User 1" width={45} height={45} />
                    <Image src="/assets/users/female-2.jpg" alt="User 2" width={45} height={45} />
                    <Image src="/assets/users/male-1.jpg" alt="User 3" width={45} height={45} />
                    <Image src="/assets/users/male-2.jpg" alt="User 4" width={45} height={45} />
                </div>
            </div>
		</div>
    );
}

export default EstablishmentDetails;