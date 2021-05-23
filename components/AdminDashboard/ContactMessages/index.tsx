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
                console.error(error)
            }
        }; fetchData(); 
    }, []);


    // Sort and Map through the contact messages and make cards out of them, display the new first
    const ContactMessageCards: JSX.Element[]= contactMessages.sort(value => value.read ? 1 : -1).map(contact => (
        <ContactCard
            id={contact.id}
            read={contact.read}
            key={contact.id}
            name={contact.name}
            topic={contact.topic}
            email={contact.email}
            message={contact.message}
            data={contact} />
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