import React from "react";
import Header from "../components/Header";
import "../home.css";
import { TiStar } from "react-icons/ti";
import Footer from "../components/footer";

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

      <div className="crystal-container row">
         <h1>Popular</h1>
         <div className="crystalCard">
            <div className="cardC">
               <img src="image/Himalaya.png" alt="Himalaya Citrine" />
               <div className="cardC-text">Himalaya Citrine</div>
            </div>
            <div className="cardC">
               <img src="image/Sphere.png" alt="Purple Mica Sphere" />
               <div className="cardC-text">Purple Mica Sphere</div>
            </div>
            <div className="cardC">
               <img src="image/RainbowFluorite.png" alt="Rainbow Fluorite" />
               <div className="cardC-text">Rainbow Fluorite</div>
            </div>
            <div className="cardC">
               <img src="image/ClearQuartz.png" alt="Clear Quartz" />
               <div className="cardC-text">Clear Quartz</div>
            </div>
            <div className="cardC">
               <img src="image/Xuebaoding.png" alt="Xuebaoding aquamarine" />
               <div className="cardC-text">Xuebaoding aquamarine</div>
            </div>
            <div className="cardC">
               <img src="image/BlueFluorite.png" alt="Blue Fluorite" />
               <div className="cardC-text">Blue Fluorite</div>
            </div>
            <div className="cardC">
               <img src="image/Azurite.png" alt="Azurite" />
               <div className="cardC-text">Azurite</div>
            </div>
            <div className="cardC">
               <img src="image/Indian.png" alt="Indian Epi Stilbite" />
               <div className="cardC-text">Indian Epi Stilbite</div>
            </div>
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
                  <p>It’s really beautiful, so peaceful and harmonious. The energy from it made me accidentally shed tears on the MRT.</p>
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
                  <p>I’m so happy that this is my first time buying crystals! Thank you so much to the shop owner! </p>
               </div>
            </div>
         </div>

      </div>


      <Footer />

   </>
}