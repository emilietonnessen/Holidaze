import * as yup from "yup";
import { Asserts } from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";

import useAxios from "../../../hooks/useAxios.js";
import { ESTABLISHMENTS_URL } from "../../../constants/api";
import Accordion from "../../UI/Accordion";
import Select from "../../UI/Form/Select";
import Input from "../../UI/Form/Input";
import Textarea from "../../UI/Form/Textarea";
import { SubmitButton } from "../../UI/Button";
import Error from "../../UI/Form/Error";
import { editEstablishmentSchema } from '../../../constants/schemas';
import { Establishment } from '../../../constants/interfaces';
import File from "../../UI/Form/File";
import * as regex from '../../../constants/regex';
import AdvancedOptions from "./AdvancedOptions";
import RadioBoolean from "../../UI/Form/RadioBoolean";
import EstablishmentForm from "../EstablishmentForm";
import Feedback from "../../UI/Feedback";

interface Schema extends Asserts<typeof schema> {}

const schema = yup.object().shape(editEstablishmentSchema);

const EditForm: React.FC = () => {

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

// Image values
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
		
        console.log("[Data Sending]", data);

        const formData = new FormData()
        formData.append("data", JSON.stringify(data));
        formData.append("files.thumbnail", thumbnailValue);
        formData.append("files.imageOne", imageOneValue);
        formData.append("files.imageTwo", imageTwoValue); 

		try {
            const response = await http.put(url, formData);
            console.log("[Response Data]", response.data);
            setUpdated(true);
		} catch (error) {
			console.log("[OnSubmit Error]", error);
			setUpdateError(error.toString());
		} finally {
			setUpdatingEstablishment(false);
		}
    }



    // Console Logging
    //console.log("[url]", url);
    //console.log("[Match Establishment]", matchEstablishment);
	//console.log("[Establishments]", establishments);
    //if (selectedEstablishment) console.log("[Selected Establishment Featured]", selectedEstablishment.featured);
    
    //console.log("[Errors]", errors);
    //if (selectedEstablishment) console.log("[Thumbnail Url]", selectedEstablishment.thumbnail.url);
    //console.log(thumbnailValue);

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


            {/* Feedback on the Update */}
            {updated && <Feedback theme="success">The Establishment was successfully updated!</Feedback>}
            {updateError && <Feedback theme="error">{updateError}</Feedback>}


            {/* Form: */}
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
                <div className="establishment-form__group--submit">
                    <SubmitButton theme="primary" size="sm">
                        {updatingEstablishment ? "updating.." : "update establishment"}
                    </SubmitButton>
                </div> 

            </fieldset>

        </form>

        {/* Advanced Options */}
        <AdvancedOptions url={url} />
        </>
    );
}

export default EditForm;