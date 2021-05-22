import { useState } from "react";
import { NextRouter, useRouter } from "next/router";

import useAxios from "../../../hooks/useAxios";
import { CONTACT_URL } from "../../../constants/api";
import {ContactCardProps} from '../../../constants/interfaces';
import { Button } from "../../UI/Button";
import Feedback from "../../UI/Feedback";


const ContactCard: React.FC<ContactCardProps> = ({ name, email, message, topic, id, read}) => {

    // State
    const [newMessage, setNewMessage] = useState<boolean>(read);
    const [deleting, setDeleting] = useState<boolean>(false)
    const [deleteError, setDeleteError] = useState<string | null>(null);
    const [deleteSuccess, setDeleteSuccess] = useState<boolean>(false);


    // Variables
    const router: NextRouter = useRouter();
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


    // Delete Handler
    const deleteContactMessageHandler = async () => {
        setDeleting(true);
        setDeleteError(null);
        setDeleteSuccess(false);

        const confirmDelete = window.confirm("Delete the message from " + name + "?");

        if (confirmDelete) {
            try {
				await http.delete(url);
                setDeleteSuccess(true);
			} catch (error) {
				setDeleteError(error.toString());
			} finally {
                setDeleting(false)
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

            <Button theme="dark-grey" size="sm" onClick={deleteContactMessageHandler}>
                {deleting ? "deleting.." : "delete"}
            </Button>

            {/* Feedback: */}
            {deleteError && <Feedback theme="error">{deleteError}</Feedback>}
            {deleteSuccess && <Feedback theme="success">The Message was successfully deleted!</Feedback>}

        </div>
    );
}

export default ContactCard;