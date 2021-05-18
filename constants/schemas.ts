import * as yup from "yup";
import * as regex from './regex';


export const addEstablishmentSchema = {
    name: yup.string()
        .required('Please enter the name of the establishment')
        .min(4, "Please enter more than 4 letters"),
    category: yup.string()
        .required('Please choose a category'),
    email: yup.string()
        .required('Please enter an email address')
        .matches(regex.email, 'Please enter a valid email address'),
    phone: yup.number()
        .typeError('Please enter a phone number')
        .min(10000000, "Please enter a valid phone number with 8 numbers")
        .max(99999999, "Please enter a valid phone number with 8 numbers"),
    coordinates: yup.string()
        .required('Please enter coordinates. Latitude, longitude')
        .matches(regex.coordinates, 'Please enter valid coordinates'),
    street: yup.string()
        .required('Please enter a street name')
        .min(4, "Please enter more than 4 letters"),
    city: yup.string()
        .required('Please enter a city')
        .min(2, "Please enter more than 2 letters"),
    zipCode: yup.string()
        .typeError('Please enter a zip code')
        .min(4, "Please enter a number between 1000 - 9999")
        .max(4, "Please enter a number between 1000 - 9999"),
    rating: yup.number()
        .typeError("Please enter a number")
        .min(1, "Please enter a value between 1 - 10")
        .max(10, "Please enter a value between 1 - 10"),
    stars: yup.number()
        .typeError("Please enter a number")
        .min(1, "Please enter a value between 1 - 5")
        .max(5, "Please enter a value between 1 - 5"),
    featured: yup.boolean()
        .typeError("Please choose on of the options"),
    lowestPrice: yup.number()
        .typeError("Please enter a number"),
    reviews: yup.number()
        .typeError("Please enter a number"),
    description: yup.string()
        .required('Please enter a description')
        .min(200, "Please enter more than 200 letters")
        .max(700, "Please have less than 700 letters"),
    amenities: yup.string()
        .required('Please enter different amenities')
        .min(100, "Please enter more than 100 letters")
        .max(300, "Please have less than 300 letters"),
};

export const editEstablishmentSchema = {
    establishment: yup.string()
        .required("Please choose an establishment"),
    name: yup.string()
        .required('Please enter the name of the establishment')
        .min(4, "Please enter more than 4 letters"),
    category: yup.string()
        .required('Please choose a category'),
    email: yup.string()
        .required('Please enter an email address')
        .matches(regex.email, 'Please enter a valid email address'),
    phone: yup.number()
        .typeError('Please enter a phone number')
        .min(10000000, "Please enter a valid phone number with 8 numbers")
        .max(99999999, "Please enter a valid phone number with 8 numbers"),
    coordinates: yup.string()
        .required('Please enter coordinates. Latitude, longitude')
        .matches(regex.coordinates, 'Please enter valid coordinates'),
    street: yup.string()
        .required('Please enter a street name')
        .min(4, "Please enter more than 4 letters"),
    city: yup.string()
        .required('Please enter a city')
        .min(2, "Please enter more than 2 letters"),
    zipCode: yup.string()
        .typeError('Please enter a zip code')
        .min(4, "Please enter a number between 1000 - 9999")
        .max(4, "Please enter a number between 1000 - 9999"),
    rating: yup.number()
        .typeError("Please enter a number")
        .min(1, "Please enter a value between 1 - 10")
        .max(10, "Please enter a value between 1 - 10"),
    stars: yup.number()
        .typeError("Please enter a number")
        .min(1, "Please enter a value between 1 - 5")
        .max(5, "Please enter a value between 1 - 5"),
    featured: yup.boolean()
        .typeError("Please choose on of the options"),
    lowestPrice: yup.number()
        .typeError("Please enter a number"),
    reviews: yup.number()
        .typeError("Please enter a number"),
    description: yup.string()
        .required('Please enter a description')
        .min(200, "Please enter more than 200 letters")
        .max(700, "Please have less than 700 letters"),
    amenities: yup.string()
        .required('Please enter different amenities')
        .min(100, "Please enter more than 100 letters")
        .max(300, "Please have less than 300 letters"),
};

export const contactFormSchema = {
    name: 
        yup.string()
        .required('Please enter your full name')
        .min(2, 'Please enter 5 or more letters'),
    email:
        yup.string()
        .required('Please enter a Email address')
        .matches(regex.email, 'Please enter a valid email address'),
    topic:
        yup.string()
        .required('Please enter a topic')
        .min(4, 'Please enter 4 or more letters'),
    message:
        yup.string()
        .required('Please write a message')
        .min(10, 'Please write a message with at least 10 letters')
}

export const bookingFormSchema = {
    room:
        yup.string()
        .required('Please select a room option'),
    firstName: 
        yup.string()
        .required('Please enter your first name')
        .min(2, 'Please enter 2 or more letters'), // There exist names with only two letters.
    lastName: 
        yup.string()
        .required('Please enter your last name')
        .min(3, 'Please enter 3 or more letters'),
    email:
        yup.string()
        .required('Please enter a Email address')
        .matches(regex.email, 'Please enter a valid email address'),
    phone:
        yup.number() 
        .typeError('Please enter your phone number')
        .required('Please enter your phone number')
        .min(10000000, 'Please enter at least 8 numbers'),
    startDate:
        yup.string()
        .required('Enter a start date'),
    endDate:
        yup.string()
        .required('Enter an end date'),
    message:
        yup.string()
        .required('Please write a message')
        .min(10, 'Please write a message with at least 10 letters')
}

export const loginSchema = {
    identifier: yup.string().required('Please enter a username'),
    password: yup.string().required('Please enter a password'),
}