const Footer: React.FC = () => {
    const currentDate: Date = new Date();
    const currentYear: number = currentDate.getFullYear();

    return (
        <footer className="footer">
            <div className="footer__box">
                {currentYear} &copy; Holidaze. All rights reserved.
                <span>&bull;</span>
                <a href="#" className="footer__link">Privacy</a>
                <span>&bull;</span> 
                <a href="#" className="footer__link">Terms</a>
            </div>
        </footer>
    );
}

export default Footer;