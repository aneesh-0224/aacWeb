import React from "react";
import "./Sig.css";
import astronomy from './assets/astronomy.jpeg'
import mediaAndDesign from './assets/mediaAndDesign.jpeg'

export default function Project() {
  return (
    <div>
      <section class="articles">
        <div class="features">
          <div class="item item1">
            <img
              class="item-photo"
              src={astronomy}
              alt="Astronomy Sig"
            />
            <div class="item-header">
              <ion-icon class="item-icon" name="bulb-outline"></ion-icon>
              <h3 class="item-title">Astronomy SIG</h3>
            </div>
            <p class="item-text">
              This is the SIG for those who are interested in astronomy and
              anything related to the cosmos. We organise various space themed
              events, talks related to astronomy and also make content for the
              AAC instagram page.
            </p>
          </div>
          <div class="item item2">
            <img
              class="item-photo"
              src="https://strefainzyniera.pl/images/galleries/pages_631_991876233_c.jpg"
              alt="small drone photo catched mid-air"
            />
            <div class="item-header">
              <ion-icon class="item-icon" name="wallet-outline"></ion-icon>
              <h3 class="item-title">Astrophysics SIG</h3>
            </div>
            <p class="item-text">
              We at Astrophysics Sig discuss about things ranging from the universe and the cosmos 
              to the engineering marvels that humans have made.
              We also keep a keen eye on the breakthroughs and developments in the field of Astronomy.
              We hold debates on wide variety of topics in which every member is welcomed to give their opinions.
              If you love physics and astronomy then this is the right place for you.
            </p>
          </div>
          <div class="item item3">
            <img
              class="item-photo"
              src={mediaAndDesign}
              alt="hand holding phone with whatsapp converstaion"
            />
            <div class="item-header">
              <ion-icon
                class="item-icon"
                name="chatbubble-ellipses-outline"
              ></ion-icon>
              <h3 class="item-title">Media and Design SIG</h3>
            </div>
            <p class="item-text">
              The Media team involves in getting content from other SIGs and
              publish them in a suitable format to gain better reach with people
              outside the club. We operate on various social media platforms
              like Instagram, Youtube, Blog sites, etc. The team also organizes
              learning sessions on Photoshop, Video editing, and
              Astrophotography post-processing.
            </p>
          </div>
        </div>
      </section>

      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
