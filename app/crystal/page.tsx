import React from "react";
import Header from "../components/Header";
import "../crystal.css";
import Footer from "../components/footer";
import Image from "next/image";



export default function Crystal() {
    return <>
        <Header />
        <div className="containerCry">
            <div className="productList">
                <div className="productCard">
                    <Image src="/image/EpiStilbite.png" alt="Indian Epi Stilbite" className="productImage" width={500} height={500} />
                    <h3 className="productName">Indian Epi Stilbite</h3>
                    <p className="productPrice">CAD 65.00</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src="/image/RainbowAngle.png" alt="Rainbow Fluorite Angle" className="productImage" width={500} height={500} />
                    <h3 className="productName">Rainbow Fluorite Angle</h3>
                    <p className="productPrice">CAD 35.75</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src="/image/FluoriteBlue.png" alt="Fluorite Blue" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Fluorite Blue</h3>
                    <p className="productPrice">CAD 32.89</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src="/image/AzuriteS.png" alt="Azurite" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Azurite</h3>
                    <p className="productPrice">CAD 39.35</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src="/image/MelodyQ.png" alt="Melody Quartz" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Melody Quartz</h3>
                    <p className="productPrice">CAD 26.55</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src="/image/PinkPurple.png" alt="Pink Purple Fluorite" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Pink Purple Fluorite</h3>
                    <p className="productPrice">CAD 38.64</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src="/image/Aquamarine.png" alt="Xuebaoding Aquamarine" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Xuebaoding Aquamarine</h3>
                    <p className="productPrice">CAD 41.36</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src="/image/BlossAgat.png" alt="Blossoms Agat" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Blossoms Agat</h3>
                    <p className="productPrice">CAD 68.55</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src="/image/Maneki-neko.png" alt="Maneki-neko Gold Glaze" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Maneki-neko Gold Glaze</h3>
                    <p className="productPrice">CAD 27.99</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src="/image/LaceAgate.png" alt="Lace Agate" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Lace Agate</h3>
                    <p className="productPrice">CAD 31.99</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src="/image/Rosewood.png" alt="Rosewood Petrified Wood" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Rosewood Petrified Wood</h3>
                    <p className="productPrice">CAD 18.69</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src="/image/Amazonite.png" alt="Amazonite" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Amazonite</h3>
                    <p className="productPrice">CAD 33.00</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image  src="/image/YellowQuartz.png" alt="Yellow Rutilated Quartz" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Yellow Rutilated Quartz</h3>
                    <p className="productPrice">CAD 56.75</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src="/image/FoxSpirit.png" alt="Fox Spirit Hematoid Quartz" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Fox Spirit Hematoid Quartz</h3>
                    <p className="productPrice">CAD 18.50</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src="/image/Rainbow.png" alt="Rainbow Fluorite" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Rainbow Fluorite</h3>
                    <p className="productPrice">CAD 45.89</p>
                    <button>Ivite Crystal</button>
                </div>
            </div>

        </div>

        <Footer />

    </>
}