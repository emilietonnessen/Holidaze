import { useEffect, useState } from "react";
import Accordion from "../../UI/Accordion";
import { AxiosInstance } from "axios";
import useAxios from "../../../hooks/useAxios";
import BookingCard from "./BookingCard";
import { Booking } from "../../../constants/interfaces";



const BookingNotifications: React.FC = () => {

    // State & Variables
    const [enquiries, setEnquiries] = useState<Booking[]>([]);
    const http: AxiosInstance = useAxios();


    // Set the enquiries to state
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await http.get("enquiries");
				setEnquiries(response.data);
            } catch (error) {
                console.error(error)
            }
        }; fetchData(); 
    }, []);


    // Sort and map through booking enquiries
    const bookingEnquiries: JSX.Element[]= enquiries.sort(value => value.read ? 1 : -1).map(enq =>  (
        <BookingCard
            key={enq.id}
            id={enq.id}
            read={enq.read}
            establishment={enq.establishment}
            firstName={enq.firstName}
            lastName={enq.lastName}
            email={enq.email}
            phone={enq.phone}
            startDate={enq.startDate}
            endDate={enq.endDate}
            room={enq.room}
            message={enq.message}
            data={enq} />
    ));

    return (
        <section className="booking-notifications">
            <Accordion title="Booking Enquiries ">
                {bookingEnquiries}
            </Accordion>        
        </section>
    );
}

export default BookingNotifications;