"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/image/Logo.png"
import CrystalSoul from "@/public/image/CrystalSoul.png"


export default function Header() {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(()=> {
        // function directToLoginPage() {
            if (pathname === "/") {
                router.replace("/home");
            }
    }, [pathname]);
    
    return (
        <>
            <div className="containerallNav">
                <nav className="navbar navbar-expand-lg mb-0">
                    <div>
                        <a className="navbar-brand" href="/home"> <Image src={Logo} alt="logo" width={500} height={80}/> </a>
                    </div>
                    <div>
                        <a className="brandName" href="/home"> <Image src={CrystalSoul} alt="brand" width={150} height={30}/> </a>
                    </div>

                    <div className="navRow">
                        <hr className="custom-hr"/>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#linkbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="linkbar">
                            <ul className="nav" >
                                <li className="nav-item">
                                    <a className="nav-link" href="/assignment3/crystal">Product</a>
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