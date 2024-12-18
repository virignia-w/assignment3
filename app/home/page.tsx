import React from "react";
import Header from "../components/Header";
import "../home.css";
import { TiStar } from "react-icons/ti";
import Footer from "../components/footer";
import Image from "next/image";
import Invite from "@/public/image/Invite.png";
import Candle from "@/public/image/Candle.png";
import AngelCard from "@/public/image/AngelCard.png";
import Himalaya from "@/public/image/Himalaya.png";
import Sphere from "@/public/image/Sphere.png";
import RainbowFluorite from "@/public/image/RainbowFluorite.png";
import ClearQuartz from "@/public/image/ClearQuartz.png";
import Xuebaoding from "@/public/image/Xuebaoding.png";
import BlueFluorite from "@/public/image/BlueFluorite.png";
import Azurite from "@/public/image/Azurite.png";
import Indian from "@/public/image/Indian.png";
import Mia from "@/public/image/Mia.png";
import David from "@/public/image/David.png";
import Isabella from "@/public/image/Isabella.png";
import Homepage from "@/public/image/homepage.png";



export default function Home() {
   return <>
      <Header />

      <div className="containerHom">
         <div style={{ width: '100vw', height: 'auto' }}>
            <Image className="hpPic" src={Homepage} alt="crystal" layout="responsive" objectFit="cover" />
         </div>
         <div className="serviceCard Row">
            <div className="cardS">
               <Image src={Invite} alt="Invite Crystal" width={500} height={500} />
               <div className="cardS-text">Invite Crystal</div>
            </div>
            <div className="cardS">
               <Image src={Candle} alt="Candle" width={500} height={500} />
               <div className="cardS-text">Candle</div>
            </div>
            <div className="cardS">
               <Image src={AngelCard} alt="AngelCard" width={500} height={500} />
               <div className="cardS-text">Angel Card</div>
            </div>
         </div>
      </div>

      <div className="flex flex-col w-full justify-center items-center crystal-container  ">
         <h1>Popular</h1>
         <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="row">
                     {/* 每一行顯示四個項目 */}
                     <div className="col-12 col-md-6 col-lg-3">
                        <div className="crystalCard">
                           <Image src={Himalaya} className="card-img-top" alt="Himalaya Citrine" width={350} height={350} layout="responsive" objectFit="cover" />
                           <div className="card-body text-center">
                              <div className="cardC-text">Himalaya Citrine</div>
                           </div>
                        </div>
                     </div>

                     <div className="col-12 col-md-6 col-lg-3">
                        <div className="crystalCard">
                           <Image src={Sphere} className="card-img-top" alt="Purple Mica Sphere" width={350} height={350} layout="responsive" objectFit="cover" />
                           <div className="card-body text-center">
                              <div className="cardC-text">Purple Mica Sphere</div>
                           </div>
                        </div>
                     </div>

                     <div className="col-12 col-md-6 col-lg-3">
                        <div className="crystalCard">
                           <Image src={RainbowFluorite} className="card-img-top" alt="Rainbow Fluorite" width={350} height={350} layout="responsive" objectFit="cover" />
                           <div className="card-body text-center">
                              <div className="cardC-text">Rainbow Fluorite</div>
                           </div>
                        </div>
                     </div>

                     <div className="col-12 col-md-6 col-lg-3">
                        <div className="crystalCard">
                           <Image src={ClearQuartz} className="card-img-top" alt="Clear Quartz" width={350} height={350} layout="responsive" objectFit="cover" />
                           <div className="card-body text-center">
                              <div className="cardC-text">Clear Quartz</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* 第二頁 */}
               <div className="carousel-item">
                  <div className="row">
                     <div className="col-12 col-md-6 col-lg-3">
                        <div className="crystalCard">
                           <Image src={Xuebaoding} className="card-img-top" alt="Xuebaoding Aquamarine" width={350} height={350} layout="responsive" objectFit="cover" />
                           <div className="card-body text-center">
                              <div className="cardC-text">Xuebaoding Aquamarine</div>
                           </div>
                        </div>
                     </div>

                     <div className="col-12 col-md-6 col-lg-3">
                        <div className="crystalCard">
                           <Image src={BlueFluorite} className="card-img-top" alt="Blue Fluorite" width={350} height={350} layout="responsive" objectFit="cover" />
                           <div className="card-body text-center">
                              <div className="cardC-text">Blue Fluorite</div>
                           </div>
                        </div>
                     </div>

                     <div className="col-12 col-md-6 col-lg-3">
                        <div className="crystalCard">
                           <Image src={Azurite} className="card-img-top" alt="Azurite" width={350} height={350} layout="responsive" objectFit="cover" />
                           <div className="card-body text-center">
                              <div className="cardC-text">Azurite</div>
                           </div>
                        </div>
                     </div>

                     <div className="col-12 col-md-6 col-lg-3">
                        <div className="crystalCard">
                           <Image src={Indian} className="card-img-top" alt="Indian Epi Stilbite" width={350} height={350} layout="responsive" objectFit="cover" />
                           <div className="card-body text-center">
                              <div className="cardC-text">Indian Epi Stilbite</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* 控制按鈕 */}
            <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
               <span className="carousel-control-prev-icon car-button" aria-hidden="true"></span>
               <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Next</span>
            </button>
         </div>

      </div>

      <div className="review-container row">
         <h1>Let Customers Speak for Us</h1>
         <div className="reviewCard Row">
            <div className="cardR">
               <div><Image className="cardRImg" src={Mia} alt="Mia Clark" width={500} height={500} /></div>
               <div className="reviewContent">
                  <div className="ratingCon">
                     <TiStar />
                     <TiStar />
                     <TiStar />
                     <TiStar />
                     <TiStar />
                  </div>
                  <div className="cardR-text">
                     <p>Mia Clark</p>
                     <p>{"It's really beautiful, so peaceful and harmonious. The energy from it made me accidentally shed tears on the MRT."}</p>
                  </div>
               </div>
            </div>
            <div className="cardR">
               <div><Image className="cardRImg" src={David} alt="David Sanchez" width={500} height={500} /></div>
               <div className="reviewContent">
                  <div className="ratingCon">
                     <TiStar />
                     <TiStar />
                     <TiStar />
                     <TiStar />
                     <TiStar />
                  </div>
                  <div className="cardR-text">
                     <p>David Sanchez</p>
                     <p>When I opened it and saw them, I truly felt a sense of finally being understood and supported—a kind of emotion that made me want to cry my heart out.♥ Thank you, Universe.</p>
                  </div>
               </div>
            </div>
            <div className="cardR">
               <div><Image className="cardRImg" src={Isabella} alt="Isabella Smith" width={500} height={500} /></div>
               <div className="reviewContent">
                  <div className="ratingCon">
                     <TiStar />
                     <TiStar />
                     <TiStar />
                     <TiStar />
                     <TiStar />
                  </div>
                  <div className="cardR-text">
                     <p>Isabella Smith</p>
                     <p>{"The bracelet has arrived, and  I've been wearing it for a week now. I absolutely love it—thank you so much for giving me so much strength! ❤️❤️❤️"}</p>
                  </div>
               </div>
            </div>
         </div>

      </div>


      <Footer />

   </>
}