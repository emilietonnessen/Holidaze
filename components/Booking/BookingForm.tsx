import * as yup from "yup";
import axios from "axios";
import { Asserts } from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

import Feedback from "../UI/Feedback";
import Input from "../UI/Form/Input";
import Select from "../UI/Form/Select";
import Textarea from "../UI/Form/Textarea";
import { ENQUIRY_URL } from "../../constants/api";
import { Button } from '../UI/Button';
import { bookingFormSchema } from "../../constants/schemas";
import { BookingFormProps } from "../../constants/interfaces.js";



// TypeScript for Yup and Yup validation
interface Schema extends Asserts<typeof schema> {}
const schema = yup.object().shape(bookingFormSchema);


const BookingForm: React.FC<BookingFormProps> = ({establishmentName}) => {

    // State
    const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);



    // Putting React Hook Form and Yup validation together with a resolver
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });



    // Handle the Submit
    async function onSubmit(data: any) {
        setSubmitting(true);
		setServerError(null);
        
        // Adds the current Establishment to the Enquiry Data
        data.establishment = establishmentName;
		
		try {
			await axios.post(ENQUIRY_URL, data);
            window.location.href="#feedback-success";
		} catch (error) {
			setServerError(error.toString());
		} finally {
			setSubmitting(false);
		}
    }



    return (
        <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

            {/* Title: */}
            <h3 className="booking-form__title">Book now!</h3>


            <fieldset className="form__fieldset booking-form__fieldset">
                {/* Choose a room: */}
                <Select 
                    name="room" 
                    cssClass="booking-form__group--room"
                    label="Choose a room" 
                    register={register} 
                    error={errors.room && <span className="form__error"><i className="fas fa-exclamation-circle"></i> {errors.room.message}</span>} >
                    <option value="standard">Standard Room</option>
                    <option value="superior">Superior Room</option>
                    <option value="family">Family Room</option>
                </Select>

                {/* First Name */}
                <Input
                    name="firstName"
                    cssClass="booking-form__group--first-name"
                    label="First Name"
                    type="text"
                    placeholder="Nora"
                    register={register} 
                    error={errors.firstName && <span className="form__error"><i className="fas fa-exclamation-circle"></i> {errors.firstName.message}</span>} />
                        

                {/* Last Name */}
                <Input
                    name="lastName"
                    cssClass="booking-form__group--last-name"
                    label="Last Name"
                    type="text"
                    placeholder="Nordmann"
                    register={register} 
                    error={errors.lastName && <span className="form__error"> <i className="fas fa-exclamation-circle"></i>{errors.lastName.message}</span>} />
                        

                {/* Email: */}
                <Input
                    name="email"
                    cssClass="booking-form__group--email"
                    label="Email"
                    type="text"
                    placeholder="nora@nordmann.no"
                    register={register} 
                    error={errors.email && <span className="form__error"><i className="fas fa-exclamation-circle"></i> {errors.email.message}</span>} />
                        

                {/* Phone Number: */}
                <Input
                    name="phone"
                    cssClass="booking-form__group--phone"
                    label="Phone Number"
                    type="text"
                    placeholder="123 45 678"
                    register={register} 
                    error={errors.phone && <span className="form__error"><i className="fas fa-exclamation-circle"></i> {errors.phone.message}</span>} />
                            
                        
                {/* Start Date: */}
                <Input 
                    name="startDate"
                    cssClass="booking-form__group--start-date"
                    label="Start Date"
                    type="date"
                    register={register} 
                    error={errors.startDate && <span className="form__error"><i className="fas fa-exclamation-circle"></i> {errors.startDate.message}</span>} />
                    

                {/* End Date: */}
                <Input 
                    name="endDate"
                    cssClass="booking-form__group--end-date"
                    label="End Date"
                    type="date"
                    register={register} 
                    error={errors.endDate && <span className="form__error"><i className="fas fa-exclamation-circle"></i> {errors.endDate.message}</span>} />
                        

                {/* Message: */}
                <Textarea 
                    name="message"
                    cssClass="booking-form__group--message"
                    label="Message"
                    placeholder="How many adults, children will you bring with you?"
                    register={register}
                    error={errors.message && <span className="form__error"><i className="fas fa-exclamation-circle"></i> {errors.message.message}</span>} />


                {/* Submit: */}
                <Button theme="primary" size="md" type="submit" classes="booking-form__group--submit">
                    {submitting ? "booking..." : "book now"}
                </Button> 
                
            </fieldset>

            {serverError && <Feedback theme="error">{serverError}</Feedback>}
        </form>
    );
}

export default BookingForm;