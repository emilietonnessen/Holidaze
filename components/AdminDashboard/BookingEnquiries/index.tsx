import { useEffect, useState } from "react";
import Accordion from "../../UI/Accordion";
import { AxiosInstance } from "axios";
import useAxios from "../../../hooks/useAxios";
import BookingCard from "./BookingCard";
import { Booking } from "../../../constants/interfaces";



const BookingNotifications: React.FC = () => {
    const [enquiries, setEnquiries] = useState<Booking[]>([]);
    const http: AxiosInstance = useAxios();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await http.get("enquiries");
				setEnquiries(response.data);
            } catch (error) {
                console.log(error)
            }
        }; fetchData(); 
    }, []);

    //console.log("[Enquiries]", enquiries);

    const bookingEnquiries: JSX.Element[]= enquiries.map(enq =>  (
            <BookingCard
                key={enq.id}
                establishment={enq.establishment}
                firstName={enq.firstName}
                lastName={enq.lastName}
                email={enq.email}
                phone={enq.phone}
                startDate={enq.startDate}
                endDate={enq.endDate}
                room={enq.room}
                message={enq.message} />
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