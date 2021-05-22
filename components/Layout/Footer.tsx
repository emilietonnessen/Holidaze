const Footer: React.FC = () => {

    // Set date in the footer
    const currentDate: Date = new Date();
    const currentYear: number = currentDate.getFullYear();

    return (
        <footer className="footer">
            <span className="footer__copyright">{currentYear} &copy; Holidaze. All rights reserved.</span>
        </footer>
    );
}

export default Footer;