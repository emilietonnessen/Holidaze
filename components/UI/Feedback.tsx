
interface FeedbackProps {
    children: React.ReactNode;
    theme: "error" | "success" | "warning";
}

const Feedback: React.FC<FeedbackProps> = ({children, theme}) => {
    return (
        <div className={"feedback feedback--" + theme}>
            {children}
        </div>
    );
}

export default Feedback;