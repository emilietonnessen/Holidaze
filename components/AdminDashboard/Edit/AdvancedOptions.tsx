import { useState } from 'react';
import { NextRouter, useRouter } from "next/router";

import { AdvancedOptionsProps } from "../../../constants/interfaces";
import useAxios from '../../../hooks/useAxios';
import Accordion from '../../UI/Accordion';
import { SimpleButton } from '../../UI/Button';
import Error from '../../UI/Form/Error';
import Feedback from '../../UI/Feedback';



const AdvancedOptions: React.FC<AdvancedOptionsProps> = ({url}) => {
    const [error, setError] = useState(null);

    const http = useAxios();
    const router: NextRouter = useRouter();

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
                <SimpleButton theme="danger" size="sm" onClick={deleteEstablishment}>
                    delete
                </SimpleButton>
            </Accordion>
        </div>
    );
}

export default AdvancedOptions;