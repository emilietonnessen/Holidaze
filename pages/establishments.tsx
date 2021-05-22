import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import { EstablishmentsProps } from '../constants/interfaces';
import Layout from '../components/Layout';
import EstablishmentResults from '../components/EstablishmentResults';
import { GRAPHQL_URL } from "../constants/api";
import { META_ESTABLISHMENTS, TITLE_ESTABLISHMENTS } from '../constants/meta';




const establishments: React.FC<EstablishmentsProps> = ({est}) => (
    <Layout page="establishments" title={TITLE_ESTABLISHMENTS} description={META_ESTABLISHMENTS}>
        <EstablishmentResults est={est} />
    </Layout>
);


export default establishments;




// API Call with GraphQL and Apollo Client
export async function getServerSideProps() {
    
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