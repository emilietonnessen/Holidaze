import axios, { AxiosResponse } from 'axios';
import { Params } from 'next/dist/next-server/server/router';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { GetServerSideProps } from 'next';

import Layout from '../../components/Layout';
import Booking from '../../components/Booking';
import BookingFeedbackSuccess from '../../components/Booking/BookingFeedback';
import EstablishmentGallery from '../../components/Establishment/EstablishmentGallery';
import EstablishmentHeader from '../../components/Establishment/EstablishmentHeader';
import EstablishmentInfo from '../../components/Establishment/EstablishmentInfo';
import EstablishmentCTA from '../../components/Establishment/EstablishmentCTA';
import { EstablishmentDetailsProps } from '../../constants/interfaces';
import { ESTABLISHMENTS_URL, GRAPHQL_URL } from "../../constants/api";


const establishmentDetails: React.FC<EstablishmentDetailsProps> = ({est}) =>  (
	<>
		<Layout page="establishment" title={`${est.name} | Holidaze`} description={est.description}>

			{/* Gallery: */}
			<EstablishmentGallery thumbnail={est.thumbnail} imageOne={est.imageOne} imageTwo={est.imageTwo} /> 

			{/* Header: */}
			 <EstablishmentHeader 
				name={est.name}
				street={est.street}
				stars={est.stars}
				reviews={est.reviews}
				rating={est.rating} /> 

			{/* Information: */}
			 <EstablishmentInfo 
			 	coordinates={est.coordinates} 
				description={est.description} 
				amenities={est.amenities}
				lowestPrice={est.lowestPrice} />   

			{/* Booking */}
			<EstablishmentCTA />
				
		</Layout>


		{/* Booking Enquiry Modal: */}
		 <Booking
			email={est.email}
			phone={est.phone}
			street={est.street}
			city={est.city}
			zipCode={est.zipCode}
			establishmentName={est.name} /> 

		{/* Booking Feedback */}
		<BookingFeedbackSuccess />
	</>
);


export default establishmentDetails;



// Get the slug from the API
export const getServerSidePaths: () => Promise<{ paths: { params: { slug: string; }; }[]; fallback: boolean; } | undefined> = async () => {
	try {
		const response: AxiosResponse<any> = await axios.get(ESTABLISHMENTS_URL);
        const establishments: any[] = response.data;

		const paths: {params: {slug: string}}[]  = establishments.map((est) => ({
			params:  { 
				slug: est.slug.toString(),
			},
		}));

		return { 
            paths: paths, 
            fallback: false 
        };

	} catch (error) {
		console.error('[Error getStaticPaths]', error);
	}
}



// Based on the acquired slug - the graphQL will pick up the necessary endpoints
export const getServerSideProps: GetServerSideProps = async ({ params }: Params) => {
	let slug: string | string[] | undefined;
    
	// Going around a TS error that didn't liked that the value could be "undefined"
	if (params) {
		slug = params.slug;
	}

	const client = new ApolloClient({
        uri: GRAPHQL_URL,
        cache: new InMemoryCache
    });

	// Fetching the needed endpoints based on the slug
	const { data } = await client.query({
        query: gql` query  {
            establishments (where: {slug: "${slug}"}) {
                id
                slug
                name
                stars
				rating
                featured
                reviews
                lowestPrice
				description
				email
				phone
				category
				amenities
				coordinates
				street
				zipCode
				city
				thumbnail {
					url
					alternativeText
					width
					height
				}
				imageOne {
					url
					alternativeText
					width
					height
				}
				imageTwo {
					url
					alternativeText
					width
					height
				}
            }                   
    	}`
	});

	return { props: { est: data.establishments[0] } };
} 