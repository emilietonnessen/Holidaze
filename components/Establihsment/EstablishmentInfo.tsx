import { EstablishmentInfoProps } from '../../constants/interfaces';
import EstablishmentDetails from './EstablishmentDetails';
import EstablishmentReview from './EstablishmentReview';
import EstablishmentRoom from './EstablishmentRoom';



const EstablishmentInfo: React.FC<EstablishmentInfoProps> = ({ coordinates, description, amenities, lowestPrice }) => {

    // Removing any spaces in the coordinates
	const filteredCoordinates: string = coordinates.replace(/ /g,'');

    return (
        <section className="establishment-details">
			<EstablishmentDetails 
				coordinates={filteredCoordinates}
				description={description}
				amenities={amenities} />
			
            <EstablishmentRoom lowestPrice={lowestPrice} />
			
            <EstablishmentReview />
		</section>
    );
}

export default EstablishmentInfo;


/* 

    TO DO LIST

    [X] - Move the interface to interface.tsx

*/