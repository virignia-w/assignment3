import React, { useState } from "react";
import Header from "../components/Header";
import "../crystal.css";
import Footer from "../components/footer";



export default function Crystal() {
    return <>
        <Header />
        <div className="containerCry">
            <div className="productList">
                <div className="productCard">
                    <img src="image/EpiStilbite.png" alt="Indian Epi Stilbite" className="productImage" />
                    <h3 className="productName">Indian Epi Stilbite</h3>
                    <p className="productPrice">CAD 65.00</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <img src="image/RainbowAngle.png" alt="Rainbow Fluorite Angle" className="productImage" />
                    <h3 className="productName">Rainbow Fluorite Angle</h3>
                    <p className="productPrice">CAD 35.75</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <img src="image/FluoriteBlue.png" alt="Fluorite Blue" className="productImage" />
                    <h3 className="productName">Fluorite Blue</h3>
                    <p className="productPrice">CAD 32.89</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <img src="image/AzuriteS.png" alt="Azurite" className="productImage" />
                    <h3 className="productName">Azurite</h3>
                    <p className="productPrice">CAD 39.35</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <img src="image/MelodyQ.png" alt="Melody Quartz" className="productImage" />
                    <h3 className="productName">Melody Quartz</h3>
                    <p className="productPrice">CAD 26.55</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <img src="image/PinkPurple.png" alt="Pink Purple Fluorite" className="productImage" />
                    <h3 className="productName">Pink Purple Fluorite</h3>
                    <p className="productPrice">CAD 38.64</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <img src="image/Aquamarine.png" alt="Xuebaoding Aquamarine" className="productImage" />
                    <h3 className="productName">Xuebaoding Aquamarine</h3>
                    <p className="productPrice">CAD 41.36</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <img src="image/BlossAgat.png" alt="Blossoms Agat" className="productImage" />
                    <h3 className="productName">Blossoms Agat</h3>
                    <p className="productPrice">CAD 68.55</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <img src="image/Maneki-neko.png" alt="Maneki-neko Gold Glaze" className="productImage" />
                    <h3 className="productName">Maneki-neko Gold Glaze</h3>
                    <p className="productPrice">CAD 27.99</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <img src="image/LaceAgate.png" alt="Lace Agate" className="productImage" />
                    <h3 className="productName">Lace Agate</h3>
                    <p className="productPrice">CAD 31.99</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <img src="image/Rosewood.png" alt="Rosewood Petrified Wood" className="productImage" />
                    <h3 className="productName">Rosewood Petrified Wood</h3>
                    <p className="productPrice">CAD 18.69</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <img src="image/Amazonite.png" alt="Amazonite" className="productImage" />
                    <h3 className="productName">Amazonite</h3>
                    <p className="productPrice">CAD 33.00</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <img src="image/YellowQuartz.png" alt="Yellow Rutilated Quartz" className="productImage" />
                    <h3 className="productName">Yellow Rutilated Quartz</h3>
                    <p className="productPrice">CAD 56.75</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <img src="image/FoxSpirit.png" alt="Fox Spirit Hematoid Quartz" className="productImage" />
                    <h3 className="productName">Fox Spirit Hematoid Quartz</h3>
                    <p className="productPrice">CAD 18.50</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <img src="image/Rainbow.png" alt="Rainbow Fluorite" className="productImage" />
                    <h3 className="productName">Rainbow Fluorite</h3>
                    <p className="productPrice">CAD 45.89</p>
                    <button>Ivite Crystal</button>
                </div>
            </div>

        </div>

        <Footer />

    </>
}