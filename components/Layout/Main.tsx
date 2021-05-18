interface MainProps {
    children: React.ReactNode;
    page: string;
}

const Main: React.FC<MainProps> = ({children, page}) => {
    return (
        <main className={'main ' + page} id="main">
            {children}
        </main>
    );
}

export default Main;