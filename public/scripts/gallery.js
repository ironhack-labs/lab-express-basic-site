"use strict";

const galleryArr = [
    "0_D3d9xt_3S1V3ir0v.png",
    "1_QbcdE7zksMH_gwX--vee4w.jpg",
    "1-LOUUUUUUUUUUUUUUUUU.jpg",
    "6e988d33-af1b-4036-be9e-3b9b990d265b_570",
    "72dea4-20180313-lou-reed-02",
    "7163b6c0f27d19817259ce95f90c99bb",
    "allanandlou040613w.jpg",
    "Andy Warhol-Lou Reed(78-332-42)72_preview",
    "ClassicTracks_01-1113",
    "DlrXAvEUYAAJvrJ.jpg", "eight_col_LouReed_3z_by_MurrayCammick_Oct77.jpg",
    "eight_col_LouReed-_Photo_By_Murray_Cammick_(needs_permission).jpg",
    "images.jpg",
    "Lou_Reed_1977.jpg",
    "lou-reed-on-stage-in-cool-black-and-white-photo-ole-schwander.jpg",
    "lou-reed.jpg", "loureedheroindsdsdsdsd_465_328_int.jpg",
    "monster-children-lou-reed-1068x571.jpg",
    "reed-lou-5097ae467abfd.jpg", "TELEMMGLPICT000149622020_trans_NvBQzQNjv4BqplGOf-dgG3z4gg9owgQTXDVXE4-NcPVfcZy5a1cUJ04.jpg",
    "Velvet-Underground-the-velvet-underground-25381466-500-337.jpg"
]
const gallerySpace = document.querySelector(".gallery");
const galleryPic = document.createElement("div");

for (let i=0; i<galleryArr.length; i++){
    
    galleryPic.innerHTML =`<img src="/images/gallery/${galleryArr[0]}" />`;
    gallerySpace.appendChild(galleryPic);
}

