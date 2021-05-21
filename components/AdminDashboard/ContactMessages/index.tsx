import { useEffect, useState } from "react";
import Accordion from "../../UI/Accordion";
import { AxiosInstance } from "axios";
import useAxios from "../../../hooks/useAxios";
import ContactCard from "./ContactCard";
import { ContactMessage } from "../../../constants/interfaces";



const ContactNotifications: React.FC = () => {

    // State and Variables
    const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
    const http: AxiosInstance = useAxios();


    // Set the data 
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await http.get("contact-messages");
				setContactMessages(response.data);
            } catch (error) {
                console.log(error)
            }
        }; fetchData(); 
    }, []);


    // Sort and Map through the contact messages and make cards out of them, display the new first
    const ContactMessageCards: JSX.Element[]= contactMessages.sort(value => value.read ? 1 : -1).map(enq => (
        <ContactCard
            id={enq.id}
            read={enq.read}
            key={enq.id}
            name={enq.name}
            topic={enq.topic}
            email={enq.email}
            message={enq.message} />
    ));

    return (
        <section className="contact-notifications">
            <Accordion title="Contact Messages">
                {ContactMessageCards}
            </Accordion>        
        </section>
    );
}

export default ContactNotifications;