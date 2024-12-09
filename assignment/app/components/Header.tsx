// "use client";


export default function Header() {
    return (
        <>
            <div className="containerallNav">
                <nav className="navbar navbar-expand-lg mb-0">
                    <div>
                        <a className="navbar-brand" href="/home"> <img src="image/Logo.png" /> </a>
                    </div>
                    <div>
                        <a className="brandName" href="/home"> <img src="image/CrystalSoul.png" /> </a>
                    </div>

                    <div className="navRow">
                    <hr className="custom-hr"/>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#linkbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="linkbar">
                        <ul className="nav" >
                            <li className="nav-item">
                                <a className="nav-link" href="/crystal">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Offering</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Booking</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="custom-hr"/>
                    </div>
                </nav>
            </div>
        </>
    );
}