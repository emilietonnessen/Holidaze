import { useState } from "react";

import useAxios from "../../../hooks/useAxios";
import { CONTACT_URL } from "../../../constants/api";
import {ContactCardProps} from '../../../constants/interfaces';


const ContactCard: React.FC<ContactCardProps> = ({ name, email, message, topic, id, read}) => {

    // State & Variables
    const [newMessage, setNewMessage] = useState(read);
    const http = useAxios();
    let url = `${CONTACT_URL}/${id}`;
    

    // "new" message handler
    async function readMessageHandler() {
        if (read === false) {
            try {
                const response = await http.get(url);
                const data = response.data;

                data.read = true;

                const updateResponse = await http.put(url, data);
                setNewMessage(true);
            } 
            catch (error) {
                console.log(error);
            } 
        }
    }

    return (
        <div className="booking-card" onClick={readMessageHandler}>

            <div className="booking-card__header">
                <h3 className="booking-card__title">{topic}</h3>
                {!newMessage ? <span className="booking-card__new">New!</span> : null}
            </div>

            <div className="booking-card__details">
                <p className="booking-card__constants">From:</p>
                <p className="booking-card__values">{name}</p>

                <p className="booking-card__constants">Topic:</p>
                <p className="booking-card__values">{topic}</p>

                <p className="booking-card__constants">Email:</p>
                <p className="booking-card__values">{email}</p>
            </div>

            <p className="booking-card__message">
                {message}
            </p>
        </div>
    );
}

export default ContactCard;