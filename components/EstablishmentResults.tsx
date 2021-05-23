import { useContext, useEffect, useState } from 'react';

import { EstablishmentsProps, Establishment } from '../constants/interfaces';
import EstablishmentCard from "./Establishment/EstablishmentCard";
import Filter from '../components/Filter';
import CategoryContext from '../context/CategoryContext';


const EstablishmentResults: React.FC<EstablishmentsProps> = ({est}) => {

    // State
    const [activeCategory, setActiveCategory]: any = useContext(CategoryContext);
    const [establishments, setEstablishments] = useState<Establishment[]>([]);

    // Const Variables
    const hotel: string = 'hotel';
    const bnb: string = 'bedandbreakfast';
    const guesthouse: string = "guesthouse";
    const explore: string = "explore";
    let activeHotels: boolean = false;
    let activeBnBs: boolean = false;
    let activeGuesthouses: boolean = false;
    let activeExplore: boolean = false;
    let filterEstablishments: Establishment[] = establishments;

    

    // Set the Establishment to show all as default:   
    useEffect(() => { 
        if(activeCategory != "explore") {
            filterEstablishments = est.filter(est => est.category.toLowerCase().match(activeCategory));
            setEstablishments(filterEstablishments);
        } else {
            setEstablishments(est);
        }
    }, []);

    

    // Handle Filter Functions:
    const hotelFilterHandler = () => {
        filterEstablishments = est.filter(est => est.category.toLowerCase().match(hotel));
        setEstablishments(filterEstablishments);
        setActiveCategory(hotel);
    }

    const guesthouseFilterHandler = () => {
        filterEstablishments = est.filter(est => est.category.toLowerCase().match(guesthouse));
        setEstablishments(filterEstablishments);
        setActiveCategory(guesthouse);
    }

    const bnbFilterHandler = () => {
        filterEstablishments = est.filter(est => est.category.toLowerCase().match(bnb));
        setEstablishments(filterEstablishments);
        setActiveCategory(bnb);
    }

    const exploreAllFilterHandler = () => {
        filterEstablishments = est;
        setEstablishments(filterEstablishments);
        setActiveCategory(explore);
    }
    

    // Setting the filtered establishment as a variable
    const filteredResult: JSX.Element[] = establishments.map(est => (
        <EstablishmentCard 
            id={2}
            lowestPrice={est.lowestPrice}
            thumbnail={est.thumbnail}
            key={est.id}
            slug={est.slug}
            name={est.name}
            reviews={est.reviews}
            stars={est.stars} />
    ));

    
    // Setting the "active" class for the filter buttons
    if (activeCategory === hotel) { activeHotels = true; } else { activeHotels = false; }
    if (activeCategory === bnb) { activeBnBs = true; } else { activeBnBs = false; }
    if (activeCategory === guesthouse) { activeGuesthouses = true; } else { activeGuesthouses = false; }
    if (activeCategory === explore) { activeExplore = true; } else { activeExplore = false; }


    return (
        <>
            {/* Filter: */}
            <Filter 
                activeHotels={activeHotels}
                activeBnBs={activeBnBs}
                activeGuesthouses={activeGuesthouses}
                activeExplore={activeExplore}
                onClickHotels={hotelFilterHandler}
                onClickBnBs={bnbFilterHandler}
                onClickGuesthouses={guesthouseFilterHandler}
                onClickAll={exploreAllFilterHandler} />

            {/* Establishments: */}
            <div className="establishment-results">
                {filteredResult}
            </div>
        </>
    );
}

export default EstablishmentResults;