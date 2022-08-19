import React from "react";
import "./Homepage.css";

export const Homepage = ( props ) =>
    <div>
        <div className="guncel">
            <div>
                <h1>Güncel Durum</h1>
            </div>
            <div className="verticalLine"/>
            <div>
                <p>Toplam Test Sayısı</p>
                <p>1.807.673</p>
            </div>
            <div>
                <p>Toplam Vaka Sayısı</p>
                <p>155.686</p>
            </div>
            <div>
                <p>Toplam Vefat Sayısı</p>
                <p>4.308</p>
            </div>
            <div>
                <p>Toplam Yoğun Bakım Hasta Sayısı</p>
                <p>775</p>
            </div>
            <div>
                <p>Toplam Entübe Hasta Sayısı</p>
                <p>388</p>
            </div>
            <div>
                <p>Toplam İyileşen Hasta Sayısı</p>
                <p>117.602</p>
            </div>
        </div>
        <div>
            <p className="content">Yeni Koronavirüs Hastalığı (COVID-19)</p>
            <p>Koronavirusler (CoV), soğuk algınlığından Orta Doğu Solunum Sendromu (MERS-CoV) ve Şiddetli Akut Solunum Sendromu (SARS-CoV) gibi daha ciddi hastalıklara kadar çeşitli hastalıklara neden olan büyük bir virüs ailesidir. </p>
        </div>
    </div>;
