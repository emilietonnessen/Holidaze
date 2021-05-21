import { useState } from 'react';
import { NextRouter, useRouter } from "next/router";

import useAxios from '../../../hooks/useAxios';
import Accordion from '../../UI/Accordion';
import Feedback from '../../UI/Feedback';
import { Button } from '../../UI/Button';
import { AdvancedOptionsProps } from "../../../constants/interfaces";


const AdvancedOptions: React.FC<AdvancedOptionsProps> = ({url, name}) => {

    // State & Variables
    const [deleting, setDeleting] = useState<boolean>(false)
    const [deleteError, setDeleteError] = useState<string | null>(null);
    const [deleteSuccess, setDeleteSuccess] = useState<boolean>(false);
    const http = useAxios();


    // Delete the selected Establishment
    const deleteEstablishment = async () => {
        setDeleteError(null);
        setDeleteSuccess(false);
        setDeleting(true);

        let confirmDelete;

        if (name) {
            confirmDelete = window.confirm("Delete " + name + "?");
        } else {
            setDeleteError("Choose an establishment");
            setDeleting(false);
        }

		if (confirmDelete) {
			try {
			    await http.delete(url);
                setDeleteSuccess(true);
			} catch (error) {
				setDeleteError(error.toString());
			} finally {
                setDeleting(false);
            }
		} 
    }


    
    return (
        <div className="establishment-form__group--advanced">
            <Accordion title="Advanced Options" closed={true}>
                {deleteError && <div><Feedback theme="error">{deleteError}</Feedback></div>} 
                {deleteSuccess && <div><Feedback theme="success">{name} was successfully deleted!</Feedback></div>}

                <Button theme="danger" size="sm" onClick={deleteEstablishment}>
                    {deleting ? "deleting.." : "delete"}
                </Button>
            </Accordion>
        </div>
    );
}

export default AdvancedOptions;