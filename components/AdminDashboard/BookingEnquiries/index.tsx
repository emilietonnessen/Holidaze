import { useEffect, useState } from "react";
import Accordion from "../../UI/Accordion";
import { AxiosInstance } from "axios";
import useAxios from "../../../hooks/useAxios";
import BookingCard from "./BookingCard";
import { Booking } from "../../../constants/interfaces";
import { ENQUIRY_URL } from "../../../constants/api";



const BookingNotifications: React.FC = () => {
    const [enquiries, setEnquiries] = useState<Booking[]>([]);
    const http: AxiosInstance = useAxios();
    let url;

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


/*     const handler = async () => {
        url = `${ENQUIRY_URL}/${enquiries.id}`;

        //console.log("[data]", data);
        //console.log(establishment, read);
        console.log("[url]", url);

        //data.read = true;

        //const formData = new FormData()
        //formData.append("read", true);

        //console.log(data.data);

        try {
            const response = await http.get(url);
            const data = response;

            console.log("[response]", data);
            //setNewMessage(true);
        } catch (error) {
            console.log(error);
        } finally {
            "finally"
        }   
    } */



    // Console logs
    //console.log("[Enquiries]", enquiries);

    const bookingEnquiries: JSX.Element[]= enquiries.map(enq =>  (
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