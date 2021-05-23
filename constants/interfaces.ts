// Array of Establishments
export interface Establishments {
    establishment: Establishment[];
    length?: number;
}

export interface Image {
    src: string;
    alt: string;
    id: number;
}

// Single object of a Establishment
export interface Establishment {
    name: string;
    length: number;
    id: number;
    category: string;
    description: string;
    email: string;
    featured: boolean;
    rating: number;
    stars: number;
    lowestPrice: number;
    slug: string;
    reviews: number;
    street: string;
    coordinates: string;
    zipCode: string;
    city: string;
    amenities: string;
    phone: number;
    thumbnail: GalleryProps;
	imageOne: GalleryProps;
	imageTwo: GalleryProps;
}

export interface ModalProps {
    children: React.ReactNode;
    link: string;
    id: string;
    classes: string;
}

export interface TextareaProps {
    register: () => void;
    name: string;
    label: string;
    placeholder: string; 
    error: any;
    defaultValue?: any;
    cssClass?: string;
}

export interface FeedbackProps {
    children: React.ReactNode;
    theme: "error" | "success" | "warning";
}

export interface AccordionProps {
    title: string;
    children: React.ReactNode;
    closed?: boolean;
}

export interface ErrorProps {
    children: React.ReactNode;
}

export interface OuterLayoutProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

export interface NavigationProps {
    active: string;
}

export interface NextHeadProps {
    title: string;
    description: string;
}

export interface LayoutProps {
    children: React.ReactNode;
    page: string;
    title: string;
    description: string;
}

export interface MainProps {
    children: React.ReactNode;
    page: string;
}

export interface ButtonProps {
    children: React.ReactNode;
    name?: string;
    theme: 'primary' | 'light-grey' | 'dark-grey' | 'danger';
    size: 'cta' | 'lg' | 'md' | 'sm';
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: any;
    classes?: string;
}

export interface AdminLayoutProps {
    title: string;
    description: string;
    children: React.ReactNode;
    page: string;
}

export interface ButtonLinkProps {
    link: string;
    children: React.ReactNode;
    name?: string;
    theme: 'primary' | 'light-grey' | 'dark-grey' | 'danger';
    size: 'cta' | 'lg' | 'md' | 'sm';
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: any;
}


export interface EstablishmentGalleryProps {
	thumbnail: GalleryProps;
	imageOne: GalleryProps;
	imageTwo: GalleryProps;
}

export interface SelectProps {
    name: string;
    children: React.ReactNode;
    label: string;
    register: () => void;
    error: any;
    onChange?: any;
    defaultValue?: any;
    cssClass?: string;
}

export interface GalleryProps {
    alternativeText: string;
    height: number;
    width: number;
    url: string;
    name: string;
}



export interface SearchProps {
    theme: 'white' | 'grey';
}


export interface InputProps {
    register: () => void;
    name: string;
    label: string;
    type: string;
    placeholder?: string; 
    error: JSX.Element | undefined;
    defaultValue?: any;
    cssClass?: string;
}

export interface FileProps {
    register?: () => void;
    name: string;
    label: string;
    fileError: JSX.Element | null;
    cssClass: string;
    onChange: any;
    added: string | null;
}

export interface RadioProps {
    register: () => void;
    radioID: string;
    name: string;
    label: string;
    error: JSX.Element | undefined;
    cssClass: string;
    defaultValue?: boolean | undefined;
}

export interface HomeProps {
    establishments: EstablishmentCardProps[];
}

export interface EstablishmentCardProps {
    id: number;
    slug: string;
    featured?: boolean;
    reviews: number;
    name: string;
    lowestPrice: number;
    stars: number;
    thumbnail: GalleryProps;
}

export interface EstablishmentDetailsProps {
	est: Establishment;
}

export interface SearchBarProps {
    theme: 'white' | 'grey';
    search: any;
    value: any;
    clearSearch: any;
    iconType: any;
}

export interface SearchResultProps {
    name: string;
    thumbnail: GalleryProps;
    stars: number;
    slug: any;
    onClick: any;
}

export interface EstablishmentsProps {
    est: Establishment[];
}

export interface FilterProps {
    activeHotels: any;
    activeBnBs: any;
    activeGuesthouses: any;
    activeExplore: any;
    onClickHotels: any;
    onClickBnBs: any;
    onClickGuesthouses: any;
    onClickAll: any;
}

export interface AdvancedOptionsProps {
    url: string;
    name: string | null;
}


export interface EstablishmentFormProps {
    register: () => void;
    selectedEstablishment?: Establishment;
    errors: any;
    radioID: string;

    changeThumbnailValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
    thumbnailValue: GalleryProps;
    thumbnailValueError: string;

    changeImageOneValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
    imageOneValue: GalleryProps;
    imageOneValueError: string;

    changeImageTwoValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
    imageTwoValue: GalleryProps;
    imageTwoValueError: string;
}


export interface Auth {
    jwt: string;
    user: {
        blocked: boolean;
        confirmed: boolean;
        email: string;
        id: number;
        role: {
            type: string;
            name: string
            description: string;
            id: number;
        }
    }
}

export interface EstablishmentHeaderProps {
    name: string;
    stars: number;
    street: string;
    rating: number;
    reviews: number;
}

export interface EstablishmentInfoProps {
    coordinates: string;
    description: string;
    amenities: string;
    lowestPrice?: number | undefined;
}


export interface RoomProps {
	lowestPrice: number | undefined;
}

export interface BookingModalProps {
    email: string;
    phone: number;
    street: string;
    zipCode: string;
    city: string;
    establishmentName: string;
}

export interface BookingInfoProps {
    street: string;
    zipCode: string;
    city: string;
    phone: number;
    email: string;
}

export interface BookingFormProps {
    establishmentName: string;
}

export interface Booking {
    id: number;
    firstName: string;
    lastName: string;
    room: string;
    message: string;
    startDate: string;
    endDate: string;
    phone: string;
    email: string;
    created_at: string;
    updated_at: string;
    published_at: string;
    establishment: string;
    read: boolean;
    
}

export interface BookingCardProps {
    establishment: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    startDate: string;
    endDate: string;
    room: string;
    message: string;
    read: boolean;
    id: number;
    onClick?: any;
    data: Booking;
}

export interface ContactMessage {
    id: number;
    name: string;
    message: string;
    email: string;
    topic: string;
    read: boolean;
}

export interface ContactCardProps {
    name: string;
    email: string;
    message: string;
    topic: string;
    id: number;
    read: boolean;
    data: ContactMessage;
}

// ICONS: ------------------------------------------------
export interface IconProps {
    color?: string;
    classes?: string;
}