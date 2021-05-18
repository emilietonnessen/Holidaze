import { EstablishmentFormProps } from '../../constants/interfaces';
import Error from '../UI/Form/Error';
import File from '../UI/Form/File';
import Input from '../UI/Form/Input';
import RadioBoolean from '../UI/Form/RadioBoolean';
import Textarea from '../UI/Form/Textarea';

const EstablishmentForm: React.FC<EstablishmentFormProps> = ({register, selectedEstablishment, errors,
changeThumbnailValue, thumbnailValue, thumbnailValueError, changeImageOneValue, imageOneValue,imageOneValueError,changeImageTwoValue, imageTwoValue,imageTwoValueError, featured}) => (
    <>
        {/* Thumbnail: */}
        <File 
            name="thumbnail" label="Thumbnail"  onChange={changeThumbnailValue}  
            cssClass="establishment-form__group--thumbnail"
            added={thumbnailValue ? thumbnailValue.name : selectedEstablishment ? selectedEstablishment.thumbnail.name : ""}
            fileError={thumbnailValueError ? <Error>"Please use an .jpeg file"</Error> : null}  />


        {/* Image 1: */} 
        <File 
            name="imageOne" label="Image 1" onChange={changeImageOneValue} 
            cssClass="establishment-form__group--image-1" 
            added={imageOneValue ? imageOneValue.name : selectedEstablishment ? selectedEstablishment.imageOne.name : null}
            fileError={imageOneValueError ? <Error>"Please use an .jpeg file"</Error> : null}/>


        {/* Image 2: */}
        <File 
            name="imageTwo" label="Image 2" onChange={changeImageTwoValue} 
            cssClass="establishment-form__group--image-2" 
            added={imageTwoValue ? imageTwoValue.name : selectedEstablishment ? selectedEstablishment.imageTwo.name : null}
            fileError={imageTwoValueError ? <Error>"Please use an .jpeg file"</Error> : null}/>

        {/* Hotel Name: */}
        <Input 
            register={register}
            name="name"
            cssClass="establishment-form__group--name"
            label="Establishment Name"
            type="text"
            error={errors ? errors.name && <Error>{errors.name.message}</Error> : null}
            placeholder="Establishment Name"
            defaultValue={selectedEstablishment ? selectedEstablishment.name : ""}  />

        

        {/* Email: */}
        <Input
            register={register}
            name="email"
            cssClass="establishment-form__group--email"
            label="Email"
            type="text"
            error={errors.email && <Error>{errors.email.message}</Error>}
            placeholder="establishment@support.no"
            defaultValue={selectedEstablishment ? selectedEstablishment.email : ""} />

        {/* Phone */}
        <Input
            register={register}
            name="phone"
            cssClass="establishment-form__group--phone"
            label="Phone"
            type="text"
            error={errors.phone && <Error>{errors.phone.message}</Error>}
            placeholder="123 45 678"
            defaultValue={selectedEstablishment ? selectedEstablishment.phone : ""} />


        {/* Coordinates */}
        <Input
            register={register}
            name="coordinates"
            cssClass="establishment-form__group--coordinates"
            label="Coordinates"
            type="text"
            error={errors.coordinates && <Error>{errors.coordinates.message}</Error>}
            placeholder="latitude, longitude"
            defaultValue={selectedEstablishment ? selectedEstablishment.coordinates : ""} />


        {/* Street name */}
        <Input
            register={register}
            name="street"
            cssClass="establishment-form__group--street"
            label="Street"
            type="text"
            error={errors.street && <Error>{errors.street.message}</Error>}
            placeholder="Street Name 12"
            defaultValue={selectedEstablishment ? selectedEstablishment.street : ""} />

                {/* City */}
        <Input
            register={register}
            name="city"
            cssClass="establishment-form__group--city"
            label="City"
            type="text"
            error={errors.city && <Error>{errors.city.message}</Error>}
            placeholder="City Name"
            defaultValue={selectedEstablishment ? selectedEstablishment.city : ""} />

        {/* Zip Code */}
        <Input
            register={register}
            name="zipCode"
            cssClass="establishment-form__group--zip-code"
            label="Zip Code"
            type="text"
            error={errors.zipCode && <Error>{errors.zipCode.message}</Error>}
            placeholder="1234"
            defaultValue={selectedEstablishment ? selectedEstablishment.zipCode : ""} />

        {/* Average User Rating */}
        <Input
            register={register}
            name="rating"
            cssClass="establishment-form__group--rating"
            label="User Rating"
            type="text"
            error={errors.rating && <Error>{errors.rating.message}</Error>}
            placeholder="Ex: 7.9"
            defaultValue={selectedEstablishment ? selectedEstablishment.rating : ""} />

        {/* Stars */}
        <Input
            register={register}
            name="stars"
            cssClass="establishment-form__group--stars"
            label="Stars"
            type="text"
            error={errors.rating && <Error>{errors.rating.message}</Error>}
            placeholder="4"
            defaultValue={selectedEstablishment ? selectedEstablishment.stars : ""} />

                
        {/* Lowest Price: */}
        <Input
            register={register}
            name="lowestPrice"
            cssClass="establishment-form__group--lowest-price"
            label="Lowest Room Price"
            type="text"
            error={errors.lowestPrice && <Error>{errors.lowestPrice.message}</Error>}
            placeholder="499"
            defaultValue={selectedEstablishment ? selectedEstablishment.lowestPrice : ""} />

        {/* Reviews: */}
        <Input
            register={register}
            name="reviews"
            cssClass="establishment-form__group--reviews"
            label="Amount of reviews"
            type="text"
            error={errors.reviews && <Error>{errors.reviews.message}</Error>}
            placeholder="456"
            defaultValue={selectedEstablishment ? selectedEstablishment.reviews : ""} />

        {/* Featured */}
        <RadioBoolean 
            label="Featured"
            name="featured"
            register={register}
            cssClass="establishment-form__group--featured"
            error={errors.featured && <Error>{errors.featured.message}</Error>}
            defaultValue={selectedEstablishment ? selectedEstablishment.featured : undefined} />


        { /* console.log("featured", featured) */}
        {/* Description */}
        <Textarea
            register={register}
            name="description"
            cssClass="establishment-form__group--description"
            label="Description"
            placeholder="Establishment Description"
            error={errors.description && <Error>{errors.description.message}</Error>}
            defaultValue={selectedEstablishment ? selectedEstablishment.description : ""} />

        {/* List of Amenities */}
        <Textarea
            register={register}
            name="amenities"
            cssClass="establishment-form__group--amenities"
            label="Amenities"
            placeholder="Establishment amenities"
            error={errors.amenities && <Error>{errors.amenities.message}</Error>}
            defaultValue={selectedEstablishment ? selectedEstablishment.amenities : ""} />
            
    </>
);

export default EstablishmentForm;