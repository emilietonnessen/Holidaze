import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { GRAPHQL_URL } from "../constants/api";
import { META_HOME, TITLE_HOME } from '../constants/meta';
import { HomeProps, EstablishmentCardProps } from '../constants/interfaces';

import Layout from "../components/Layout";
import Hero from "../components/Homepage/Hero";
import Category from "../components/Homepage/Category";
import Review from "../components/Homepage/Review";
import Gallery from '../components/Homepage/Gallery';
import EstablishmentCard from "../components/Establihsment/EstablishmentCard";


const home: React.FC<HomeProps> = ({establishments}) => {

    // Filter out the featured establishments
    const filteredEstablishments: EstablishmentCardProps[] = establishments.filter(esta => (
        JSON.stringify(esta.featured).match('true')
    ));


    // Creating the filtered establishments into cards
    const featuredEstablishments: JSX.Element[] = filteredEstablishments.map(esta => (
        <EstablishmentCard 
            key={esta.id}
            id={esta.id}
            slug={esta.slug}
            name={esta.name}
            reviews={esta.reviews}
            lowestPrice={esta.lowestPrice}
            stars={esta.stars}
            thumbnail={esta.thumbnail}
        />
    ));
    
    return (
        <Layout page="home" title={TITLE_HOME} description={META_HOME}>
            <Hero />
            
                <Category />
            
            <Review />
            <section className="featured">
                {featuredEstablishments}
            </section>
            
            <Gallery />
        </Layout>
    );
}

export default home; 



// API Call with GraphQL and Apollo Client
export async function getServerSideProps() {
    
    // Creating a new Apollo Client with the GraphQL API
    const client = new ApolloClient({
        uri: GRAPHQL_URL,
        cache: new InMemoryCache
        
    });

    // Destructing the data endpoints into the "data" variable
    const { data } = await client.query({
        query: gql `query  {
            establishments {
                id
                slug
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

    // Returning the destructured data into the 'establishments' props
    return { props: { establishments: data.establishments } };
} 