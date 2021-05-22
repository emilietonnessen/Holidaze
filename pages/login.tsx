import * as yup from "yup";
import { Asserts } from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter, NextRouter } from 'next/router';
import { useState, useContext } from "react";
import axios from "axios";
import Link from "next/link";


import { Button } from '../components/UI/Button';
import { TITLE_LOGIN, META_LOGIN } from '../constants/meta';
import { Logo } from '../components/UI/Icons';
import { AUTH_URL } from '../constants/api';
import { loginSchema } from "../constants/schemas";
import Input from '../components/UI/Form/Input';
import AuthContext from "../context/AuthContext";
import OuterLayout from '../components/Layout/OuterLayout';
import Error from "../components/UI/Form/Error";



interface Schema extends Asserts<typeof schema> {}
const schema = yup.object().shape(loginSchema);


const login: React.FC = () => {
    const [submitting, setSubmitting] = useState<boolean>(false);
	const [loginError, setLoginError] = useState<string | null>(null);
    const router: NextRouter = useRouter();

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });

    

    const [, setAuth]: any = useContext(AuthContext);

    const onSubmit: (data: {}) => Promise<void>  = async (data) => {
        setSubmitting(true);
        setLoginError(null);

        try {
			const response = await axios.post(AUTH_URL, data);
			setAuth(response.data);
			router.push("/admin");
		} catch (error) {
			setLoginError(error.toString());
		} finally {
			setSubmitting(false);
		}
    }

    return (
        <OuterLayout title={TITLE_LOGIN} description={META_LOGIN}>

            <div className="login" id="login">
                <form onSubmit={handleSubmit(onSubmit)}>

                
                    <fieldset disabled={submitting} className="form__fieldset login__box">
                        <Link href="/">
                            <a className="login__brand-link">
                                <div className="login__brand">
                                    <div className="login__logo-icon">
                                        <Logo color="#ff1447" />
                                    </div>
                                    <h1 className="login__logo">Holidaze</h1>
                                </div>
                            </a>
                        </Link>
                        

                        <div className="login__fields">

                            {/* Display an error */}
                            {loginError && <div className="form__feedback--error">{loginError}</div>}
                            
                            <Input
                                register={register}
                                name="identifier"
                                label="Username"
                                type="text"
                                error={errors.identifier && <span className="form__error"><i className="fas fa-exclamation-circle"></i> <Error>{errors.identifier.message}</Error></span>}
                                placeholder="noranordmann" />

                            <Input
                                register={register}
                                name="password"
                                label="Password"
                                type="password"
                                error={errors.password && <span className="form__error"><i className="fas fa-exclamation-circle"></i> <Error>{errors.password.message}</Error></span>}
                                placeholder="********" />
                                
                        </div>

                        
                            <Button  theme="primary" size="md" type="submit" classes="login__button">
                                {submitting ? "loggin in..." : "login"}
                            </Button>
                        
                    </fieldset>
                    
                </form>

            </div>
        </OuterLayout>  
    );
}

export default login; 