import React from "react";
import Header from "../components/Header";
import "../crystal.css";
import Footer from "../components/footer";
import Image from "next/image";
import EpiStilbite from "@/public/image/EpiStilbite.png";
import RainbowAngle from "@/public/image/RainbowAngle.png";
import FluoriteBlue from "@/public/image/FluoriteBlue.png";
import AzuriteS from "@/public/image/AzuriteS.png";
import MelodyQ from "@/public/image/MelodyQ.png";
import PinkPurple from "@/public/image/PinkPurple.png";
import Aquamarine from "@/public/image/Aquamarine.png";
import BlossAgat from "@/public/image/BlossAgat.png";
import ManekiNeko from "@/public/image/Maneki-neko.png";
import LaceAgate from "@/public/image/LaceAgate.png";
import Rosewood from "@/public/image/Rosewood.png";
import Amazonite from "@/public/image/Amazonite.png";
import YellowQuartz from "@/public/image/YellowQuartz.png";
import FoxSpirit from "@/public/image/FoxSpirit.png";
import Rainbow from "@/public/image/Rainbow.png";




export default function Crystal() {
    return <>
        <Header />
        <div className="containerCry">
            <div className="productList">
                <div className="productCard">
                    <Image src={EpiStilbite} alt="Indian Epi Stilbite" className="productImage" width={500} height={500} />
                    <h3 className="productName">Indian Epi Stilbite</h3>
                    <p className="productPrice">CAD 65.00</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src={RainbowAngle} alt="Rainbow Fluorite Angle" className="productImage" width={500} height={500} />
                    <h3 className="productName">Rainbow Fluorite Angle</h3>
                    <p className="productPrice">CAD 35.75</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src={FluoriteBlue} alt="Fluorite Blue" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Fluorite Blue</h3>
                    <p className="productPrice">CAD 32.89</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src={AzuriteS} alt="Azurite" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Azurite</h3>
                    <p className="productPrice">CAD 39.35</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src={MelodyQ} alt="Melody Quartz" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Melody Quartz</h3>
                    <p className="productPrice">CAD 26.55</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src={PinkPurple} alt="Pink Purple Fluorite" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Pink Purple Fluorite</h3>
                    <p className="productPrice">CAD 38.64</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src={Aquamarine} alt="Xuebaoding Aquamarine" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Xuebaoding Aquamarine</h3>
                    <p className="productPrice">CAD 41.36</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src={BlossAgat} alt="Blossoms Agat" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Blossoms Agat</h3>
                    <p className="productPrice">CAD 68.55</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src={ManekiNeko} alt="Maneki-neko Gold Glaze" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Maneki-neko Gold Glaze</h3>
                    <p className="productPrice">CAD 27.99</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src={LaceAgate} alt="Lace Agate" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Lace Agate</h3>
                    <p className="productPrice">CAD 31.99</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src={Rosewood} alt="Rosewood Petrified Wood" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Rosewood Petrified Wood</h3>
                    <p className="productPrice">CAD 18.69</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src={Amazonite} alt="Amazonite" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Amazonite</h3>
                    <p className="productPrice">CAD 33.00</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image  src={YellowQuartz} alt="Yellow Rutilated Quartz" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Yellow Rutilated Quartz</h3>
                    <p className="productPrice">CAD 56.75</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src={FoxSpirit} alt="Fox Spirit Hematoid Quartz" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Fox Spirit Hematoid Quartz</h3>
                    <p className="productPrice">CAD 18.50</p>
                    <button>Ivite Crystal</button>
                </div>
                <div className="productCard">
                    <Image src={Rainbow} alt="Rainbow Fluorite" className="productImage" width={500} height={500}/>
                    <h3 className="productName">Rainbow Fluorite</h3>
                    <p className="productPrice">CAD 45.89</p>
                    <button>Ivite Crystal</button>
                </div>
            </div>

        </div>

        <Footer />

    </>
}