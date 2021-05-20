import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";

import { ESTABLISHMENTS_URL } from "../../../constants/api";
import { Button } from "../../UI/Button";
import {addEstablishmentSchema} from '../../../constants/schemas';
import { Establishment } from "../../../constants/interfaces";
import AuthContext from "../../../context/AuthContext";
import EstablishmentForm from "../EstablishmentForm";
import Select from "../../UI/Form/Select";
import Error from "../../UI/Form/Error";
import Feedback from "../../UI/Feedback";


// Yup validation
interface Schema extends yup.Asserts<typeof schema> {}
const schema = yup.object().shape(addEstablishmentSchema);



const AddForm: React.FC = () => {

    // Put together React Hook Form and Yup validation.
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });


    
    // Variables
    const [auth] = useContext<any>(AuthContext);



    // State
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [serverError, setServerError] = useState<string | null>(null);
    const [added, setAdded] = useState<boolean>(false);

    const [thumbnailValue, setThumbnailValue] = useState<any>(null);
    const [thumbnailValueError, setThumbnailValueError] = useState<any>(false);
    const [imageOneValue, setImageOneValue] = useState<any>(null);
    const [imageOneValueError, setImageOneValueError] = useState<any>(null);
    const [imageTwoValue, setImageTwoValue] = useState<any>(null);
    const [imageTwoValueError, setImageTwoValueError] = useState<any>(null);

    


    // Checking and setting the image value of Thumbnail
    const changeThumbnailValue = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setThumbnailValueError(false);

        if (!event.target.files) return;
    
        if (event.target.files[0].type === "image/jpeg") {
            setThumbnailValue(event.target.files[0]); 
        }  else {
            setThumbnailValueError(true);
            setThumbnailValue(null);
        }
    }

    // Checking and setting the image value of Image One
    const changeImageOneValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImageOneValueError(false);

        if (!event.target.files) return;
    
        if (event.target.files[0].type === "image/jpeg") {
            setImageOneValue(event.target.files[0]); 
        }  else {
            setImageOneValueError(true);
            setImageOneValue(null);
        }
    }
    
    // Checking and setting the image value of Image Two
    const changeImageTwoValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImageTwoValueError(false);

        if (!event.target.files) return;
    
        if (event.target.files[0].type === "image/jpeg") {
            setImageTwoValue(event.target.files[0]); 
        }  else {
            setImageTwoValueError(true);
            setImageTwoValue(null);
        }
    }
    



    // Onsubmit
    async function onSubmit(data: Establishment) {
        setSubmitting(true);
        setServerError(null);
        setAdded(false);

        // Append the Images to the data with formData
        const formData = new FormData()
        formData.append("data", JSON.stringify(data));
        formData.append("files.thumbnail", thumbnailValue);
        formData.append("files.imageOne", imageOneValue);
        formData.append("files.imageTwo", imageTwoValue); 

        try {

            if (thumbnailValue != null && imageOneValue != null && imageTwoValue != null && auth != null) {
                const response = await fetch (ESTABLISHMENTS_URL, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${auth.jwt}`,
                    },
                    
                    body: formData
                });

                const data = await response.json();

                setAdded(true);
            } else {
                setThumbnailValueError(true);
                setImageOneValueError(true);
                setImageTwoValueError(true);
                setServerError("Please Choose images to be used!");
            }
        } catch (error) {
            setServerError(error.toString());
        } finally {
            setSubmitting(false);
        }
    }




    return (
        <form className="establishment-form" onSubmit={handleSubmit(onSubmit)}>
            <fieldset disabled={submitting} className="form__fieldset establishment-form__fieldset">

                {/* Form: */}
                <EstablishmentForm 
                    register={register}
                    errors={errors}
                    radioID="add"
                    changeThumbnailValue={changeThumbnailValue} 
                    thumbnailValue={thumbnailValue} 
                    thumbnailValueError={thumbnailValueError}
                    changeImageOneValue={changeImageOneValue}
                    imageOneValue={imageOneValue}
                    imageOneValueError={imageOneValueError}
                    changeImageTwoValue={changeImageTwoValue} 
                    imageTwoValue={imageTwoValue}
                    imageTwoValueError={imageTwoValueError} />

                {/* Category: */}
                <Select 
                    name="category" 
                    cssClass="establishment-form__group--category"
                    label="Choose a Category"
                    register={register} 
                    error={errors.category && <Error>{errors.category.message}</Error>} >
                                    
                    <option value="Hotel">Hotel</option>
                    <option value="BedAndBreakfast">Bed & Breakfast</option>
                    <option value="Guesthouse">Guesthouse</option>
                </Select>

                {/* Submit Button */}    
                <Button theme="primary" size="sm" type="submit" classes="establishment-form__group--submit">
                    {submitting ? "adding..." : "add establishment"}
                </Button>
                

            </fieldset>

            {/* Feedback: */}
            {serverError && <Feedback theme="error">{serverError}</Feedback>}
            {added && <Feedback theme="success">The Establishment was successfully added!</Feedback>}

        </form>
    );
}

export default AddForm;