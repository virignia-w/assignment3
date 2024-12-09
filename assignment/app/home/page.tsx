import React from "react";
import Header from "../components/Header";
import "../home.css";
import { TiStar } from "react-icons/ti";
import Footer from "../components/footer";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
   return <>
      <Header />

      <div className="containerHom">
         <img className="hpPic" src="image/homepage.png" alt="crystal" />

         <div className="serviceCard Row">
            <div className="cardS">
               <img src="image/Invite.png" alt="Invite Crystal" />
               <div className="cardS-text">Invite Crystal</div>
            </div>
            <div className="cardS">
               <img src="image/Candle.png" alt="Candle" />
               <div className="cardS-text">Candle</div>
            </div>
            <div className="cardS">
               <img src="image/AngelCard.png" alt="AngelCard" />
               <div className="cardS-text">Angel Card</div>
            </div>
         </div>
      </div>

      <div className="flex flex-col w-full justify-center items-center">
         <h1>Popular</h1>
         <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="col-12 col-md-6 col-lg-4">
                     <div className="card">
                        <img src="image/Himalaya.png" className="card-img-top" alt="Himalaya Citrine" />
                        <div className="card-body text-center">
                           <div className="card-text">Himalaya Citrine</div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="carousel-item">
                  <div className="col-12 col-md-6 col-lg-4">
                     <div className="card">
                        <img src="image/Sphere.png" className="card-img-top" alt="Purple Mica Sphere" />
                        <div className="card-body text-center">
                           <div className="card-text">Purple Mica Sphere</div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="carousel-item">
                  <div className="col-12 col-md-6 col-lg-4">
                     <div className="card">
                        <img src="image/RainbowFluorite.png" className="card-img-top" alt="Rainbow Fluorite" />
                        <div className="card-body text-center">
                           <div className="card-text">Rainbow Fluorite</div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="carousel-item">
                  <div className="col-12 col-md-6 col-lg-4">
                     <div className="card">
                        <img src="image/ClearQuartz.png" className="card-img-top" alt="Clear Quartz" />
                        <div className="card-body text-center">
                           <div className="card-text">Clear Quartz</div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="carousel-item">
                  <div className="col-12 col-md-6 col-lg-4">
                     <div className="card">
                        <img src="image/Xuebaoding.png" className="card-img-top" alt="Xuebaoding Aquamarine" />
                        <div className="card-body text-center">
                           <div className="card-text">Xuebaoding Aquamarine</div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="carousel-item">
                  <div className="col-12 col-md-6 col-lg-4">
                     <div className="card">
                        <img src="image/BlueFluorite.png" className="card-img-top" alt="Blue Fluorite" />
                        <div className="card-body text-center">
                           <div className="card-text">Blue Fluorite</div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="carousel-item">
                  <div className="col-12 col-md-6 col-lg-4">
                     <div className="card">
                        <img src="image/Azurite.png" className="card-img-top" alt="Azurite" />
                        <div className="card-body text-center">
                           <div className="card-text">Azurite</div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="carousel-item">
                  <div className="col-12 col-md-6 col-lg-4">
                     <div className="card">
                        <img src="image/Indian.png" className="card-img-top" alt="Indian Epi Stilbite" />
                        <div className="card-body text-center">
                           <div className="card-text">Indian Epi Stilbite</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
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
               <div><img className="cardRImg" src="image/Mia.png" alt="Mia Clark" /></div>
               <div className="ratingCon">
                  <TiStar />
                  <TiStar />
                  <TiStar />
                  <TiStar />
                  <TiStar />
               </div>
               <div className="cardR-text">
                  <p>Mia Clark</p>
                  <p>It's really beautiful, so peaceful and harmonious. The energy from it made me accidentally shed tears on the MRT.</p>
               </div>
            </div>
            <div className="cardR">
               <div><img className="cardRImg" src="image/David.png" alt="David Sanchez" /></div>
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
            <div className="cardR">
               <div><img className="cardRImg" src="image/Isabella.png" alt="Isabella Smith" /></div>
               <div className="ratingCon">
                  <TiStar />
                  <TiStar />
                  <TiStar />
                  <TiStar />
                  <TiStar />
               </div>
               <div className="cardR-text">
                  <p>Isabella Smith</p>
                  <p>The bracelet has arrived, and  I've been wearing it for a week now. I absolutely love it—thank you so much for giving me so much strength! ❤️❤️❤️</p>
               </div>
            </div>
            <div className="cardR">
               <div><img className="cardRImg" src="image/Alex.png" alt="Alex Johnson" /></div>
               <div className="ratingCon">
                  <TiStar />
                  <TiStar />
                  <TiStar />
                  <TiStar />
                  <TiStar />
               </div>
               <div className="cardR-text">
                  <p>Alex Johnson</p>
                  <p>I'm so happy that this is my first time buying crystals! Thank you so much to the shop owner! </p>
               </div>
            </div>
         </div>

      </div>


      <Footer />

   </>
}