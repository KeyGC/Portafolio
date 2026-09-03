function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/images/IMGKey1.0.png" alt="Imagen" width="60" height="60" style={{ borderRadius: '50%' }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav" style={{ justifyContent: 'flex-end' }}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Start</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">languages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Proyects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;