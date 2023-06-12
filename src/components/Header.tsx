import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <Link to="/receipe-page/:receipeId">Receipe Page</Link>
                <Link to="/">Receipe List</Link>

            </nav>
        </header>
    )
};

export default Header;