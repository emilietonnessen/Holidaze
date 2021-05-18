import * as yup from "yup";
import { Asserts } from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

import { CONTACT_URL } from "../../constants/api";
import useAxios from "../../hooks/useAxios.js";
import Input from "../UI/Form/Input";
import Textarea from "../UI/Form/Textarea";
import { SubmitButton } from "../UI/Button";
import { contactFormSchema } from "../../constants/schemas";
import { ContactMessage } from "../../constants/interfaces";
import axios from "axios";

interface Schema extends Asserts<typeof schema> {}

const schema = yup.object().shape(contactFormSchema);

const ContactForm: React.FC = () => {
    const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);
	const http = useAxios();

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });

    async function onSubmit(data: ContactMessage) {
        setSubmitting(true);
		setServerError(null);
		
		try {
			const response = await axios.post(CONTACT_URL, data);

            // Open Successful Feedback Modal
            window.location.href="#feedback-success"
		} catch (error) {
			setServerError(error.toString());
		} finally {
			setSubmitting(false);
		}
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>

            {/* Title: */}
            <h3 className="contact-form__title">Send us a message</h3>

            {serverError && <div className="feedback--error">{serverError}</div>}

            <fieldset className="form__fieldset contact-form__fieldset">
                {/* Full Name: */}
                <Input
                    register={register}
                    name="name"
                    label="Name"
                    type="text"
                    error={errors.name && <span className="form__error"><i className="fas fa-exclamation-circle"></i> {errors.name.message}</span>}
                    placeholder="Nora Nordmann" />

                {/* Email: */}
                <Input
                    register={register}
                    name="email"
                    label="Email"
                    type="text"
                    error={errors.email && <span className="form__error"><i className="fas fa-exclamation-circle"></i> {errors.email.message}</span>}
                    placeholder="nora@nordmann.no" />

                {/* Topic: */}
                <Input
                    register={register}
                    name="topic"
                    label="Topic"
                    type="text"
                    error={errors.topic && <span className="form__error"><i className="fas fa-exclamation-circle"></i> {errors.topic.message}</span>}
                    placeholder="My Message" />

                {/* Message: */}
                <Textarea
                    register={register}
                    name="message"
                    label="Message"
                    error={errors.message && <span className="form__error"><i className="fas fa-exclamation-circle"></i> {errors.message.message}</span>}
                    placeholder="What can we help you with?" />

                <SubmitButton theme="primary" size="md">
                    {submitting ? "sending.." : "send"}
                </SubmitButton>
            </fieldset>
        </form>
    );
}

export default ContactForm;