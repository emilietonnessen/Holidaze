import { FeedbackProps } from "../../constants/interfaces";


const Feedback: React.FC<FeedbackProps> = ({children, theme}) => (
    <div className={"feedback feedback--" + theme}>
        {children}
    </div>
);


export default Feedback;