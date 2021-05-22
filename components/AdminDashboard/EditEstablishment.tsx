import * as yup from "yup";
import { Asserts } from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";

import useAxios from "../../hooks/useAxios.js";
import Select from "../UI/Form/Select";
import Error from "../UI/Form/Error";
import AdvancedOptions from "./AdvancedOptions";
import EstablishmentForm from "./EstablishmentForm";
import Feedback from "../UI/Feedback";
import { ESTABLISHMENTS_URL } from "../../constants/api";
import { editEstablishmentSchema } from '../../constants/schemas';
import { Establishment } from '../../constants/interfaces';
import { Button } from "../UI/Button";


// yup validation
interface Schema extends Asserts<typeof schema> {}
const schema = yup.object().shape(editEstablishmentSchema);




const EditEstablishment: React.FC = () => {

    // Put together React Hook Form and Yup validation.
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });



    // State
    const [establishments, setEstablishments] = useState<Establishment[] | undefined>();
    const [matchEstablishment, setMatchEstablishment] = useState<string | undefined>();

	const [updated, setUpdated] = useState<boolean>(false);
	const [updatingEstablishment, setUpdatingEstablishment] = useState<boolean>(false);
	const [updateError, setUpdateError] = useState<any>(null);

    const [thumbnailValue, setThumbnailValue] = useState<any>(null);
    const [thumbnailValueError, setThumbnailValueError] = useState<any>(false);
    const [imageOneValue, setImageOneValue] = useState<any>(null);
    const [imageOneValueError, setImageOneValueError] = useState<any>(null);
    const [imageTwoValue, setImageTwoValue] = useState<any>(null);
    const [imageTwoValueError, setImageTwoValueError] = useState<any>(null);



    // Variables
    const http = useAxios();
    let establishmentOptions;
    let selectedEstablishment: any;
    let url: string = "";



    // Set all the Establishments from the API
     useEffect(() => {
        async function fetchData() {
            try {
                const response = await http.get("establishments");
				setEstablishments(response.data);
            } catch (error) {
                console.log(error)
            }
        }; fetchData(); 
    }, []);



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



    // Set the Matching Establishment
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMatchEstablishment(event.target.value);
    }


    // Set the selected establishment to match the search
    if (establishments != undefined && matchEstablishment != null && establishments.length > 0) {
        selectedEstablishment = establishments.filter(esta => esta.name.match(matchEstablishment)); 
    };
    if (selectedEstablishment != undefined && selectedEstablishment.length === 1) selectedEstablishment = selectedEstablishment[0];
    if (selectedEstablishment != undefined ) url = ESTABLISHMENTS_URL + "/" + selectedEstablishment.id;

    

    // Get the Establishments API and map through the establishments
    if (establishments) {
        establishmentOptions = establishments.map(est => (
            <option key={est.id} value={est.name}>{est.name}</option>
        ));
    }
    

    // OnSubmit
    async function onSubmit(data: any) {
        setUpdatingEstablishment(true);
		setUpdateError(null);
		setUpdated(false);

        const formData = new FormData()
        formData.append("data", JSON.stringify(data));
        formData.append("files.thumbnail", thumbnailValue);
        formData.append("files.imageOne", imageOneValue);
        formData.append("files.imageTwo", imageTwoValue); 

		try {
            await http.put(url, formData);
            setUpdated(true);
		} catch (error) {
			setUpdateError(error.toString());
		} finally {
			setUpdatingEstablishment(false);
		}
    }


    return (
        <>
            <form  onSubmit={handleSubmit(onSubmit)} className="establishment-form">

                {/* Select an Establishment */}
                <Select 
                    onChange={changeHandler}
                    name="establishment" 
                    cssClass="establishment-form__group--establishment"
                    label="Choose an establishment" 
                    register={register} 
                    error={errors.establishment && <Error>{errors.establishment.message}</Error>} >

                    {establishmentOptions}
                </Select>

                
                <fieldset disabled={updatingEstablishment} className="form__fieldset establishment-form__fieldset">

                    <EstablishmentForm 
                        register={register}
                        selectedEstablishment={selectedEstablishment}
                        errors={errors}
                        radioID="edit"
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
                        error={errors.category && <Error>{errors.category.message}</Error>}
                        defaultValue={selectedEstablishment ? selectedEstablishment.category : ""} >
                                        
                        <option value="Hotel">Hotel</option>
                        <option value="BedAndBreakfast">Bed & Breakfast</option>
                        <option value="Guesthouse">Guesthouse</option>
                    </Select>


                    {/* Submit Button */}    
                    <Button theme="primary" size="sm" type="submit" classes="establishment-form__group--submit">
                        {updatingEstablishment ? "updating.." : "update establishment"}
                    </Button>

                </fieldset>

                {/* Feedback on the Update */}
                {updated && <Feedback theme="success">The Establishment was successfully updated!</Feedback>}
                {updateError && <Feedback theme="error">{updateError}</Feedback>}

            </form>

            {/* Advanced Options */}
            <AdvancedOptions url={url} name={selectedEstablishment ? selectedEstablishment.name : null} />
        </>
    );
}

export default EditEstablishment;