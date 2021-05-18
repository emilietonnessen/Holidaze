import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useEffect, useState } from 'react';

import { GRAPHQL_URL } from "../constants/api";
import { META_ESTABLISHMENTS, TITLE_ESTABLISHMENTS } from '../constants/meta';
import * as interfaces from '../constants/interfaces';
import Layout from '../components/Layout';
import EstablishmentCard from "../components/Establihsment/EstablishmentCard";
import Filter from '../components/Filter';


const establishments: React.FC<interfaces.EstablishmentsProps> = ({est}) => {

    // Const Variables
    const hotel: string = 'hotel';
    const bnb: string = 'bedandbreakfast';
    const guesthouse: string = "guesthouse";
    const explore: string = "explore";

    // State
    const [establishments, setEstablishments] = useState<interfaces.Establishment[]>([]);
    const [active, setActive] = useState<string>(explore);

    // Let Variables
    let activeHotels: boolean = false;
    let activeBnBs: boolean = false;
    let activeGuesthouses: boolean = false;
    let activeExplore: boolean = false;
    let filterEstablishments: interfaces.Establishment[] = establishments;

    
    // Set the Establishment to show all as default:   
    useEffect(() => { setEstablishments(est) }, []);

    
    // Handle Filter Functions:
    const hotelFilterHandler = () => {
        filterEstablishments = est.filter(est => est.category.toLowerCase().match(hotel));
        setEstablishments(filterEstablishments);
        setActive(hotel);
    }

    const guesthouseFilterHandler = () => {
        filterEstablishments = est.filter(est => est.category.toLowerCase().match(guesthouse));
        setEstablishments(filterEstablishments);
        setActive(guesthouse);
    }

    const bnbFilterHandler = () => {
        filterEstablishments = est.filter(est => est.category.toLowerCase().match(bnb));
        setEstablishments(filterEstablishments);
        setActive(bnb);
    }

    const exploreAllFilterHandler = () => {
        filterEstablishments = est;
        setEstablishments(filterEstablishments);
        setActive(explore);
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

 
    if (active === hotel) { activeHotels = true; } else { activeHotels = false; }
    if (active === bnb) { activeBnBs = true; } else { activeBnBs = false; }
    if (active === guesthouse) { activeGuesthouses = true; } else { activeGuesthouses = false; }
    if (active === explore) { activeExplore = true; } else { activeExplore = false; }


    return (
        <Layout page="establishments" title={TITLE_ESTABLISHMENTS} description={META_ESTABLISHMENTS}>

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

        </Layout>
    );
}

export default establishments;


// API Call with GraphQL and Apollo Client
export async function getStaticProps() {
    
    // Creating a new Apollo Client
    const client = new ApolloClient({
        uri: GRAPHQL_URL,
        cache: new InMemoryCache
    });

    // Destructing the data endpoints into "data" variable
    const { data } = await client.query({
        query: gql` query  {
            establishments {
                id
                slug
                category
                name
                stars
                featured
                reviews
                lowestPrice
                thumbnail {
                    url
                    width
                    height
                }
            }                   
        }`
    });

    return { props: { est: data.establishments } };
} 