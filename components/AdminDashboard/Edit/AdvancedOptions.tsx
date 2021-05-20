import { useState } from 'react';
import { NextRouter, useRouter } from "next/router";

import useAxios from '../../../hooks/useAxios';
import Accordion from '../../UI/Accordion';
import Feedback from '../../UI/Feedback';
import { Button } from '../../UI/Button';
import { AdvancedOptionsProps } from "../../../constants/interfaces";


const AdvancedOptions: React.FC<AdvancedOptionsProps> = ({url}) => {

    // State & Variables
    const [error, setError] = useState(null);
    const http = useAxios();
    const router: NextRouter = useRouter();


    // Delete the selected Establishment
    const deleteEstablishment = async () => {
        console.log("delete", url);

        const confirmDelete = window.confirm("Delete this establishment?");

		if (confirmDelete) {
			try {
				await http.delete(url);
                router.push("/admin");
			} catch (error) {
				setError(error.toString());
			}
		}
    }

    return (
        <div className="establishment-form__group--advanced">
            <Accordion title="Advanced Options" closed={true}>
                {error ? <Feedback theme="error">{error}</Feedback> : null}

                <Button theme="danger" size="sm" onClick={deleteEstablishment}>
                    delete
                </Button>
            </Accordion>
        </div>
    );
}

export default AdvancedOptions;