import React from "react";
import "./Announcements.css"
import {Link} from "react-router-dom";

export const Announcements = () =>
    <div>
        <h1>Duyurular</h1>
        <div className="List">
            <div className="ListItem">
                <Link to={"/duyurular/1"}>
                    <img alt="Duyuru Resmi" className="ListItemPhoto" src="https://teknomoli.net/wp-content/uploads/2020/05/337946.png"/>
                </Link>
                <h2 style={{color : "black"}}>Destek Hat Bilgileri</h2>
            </div>
            <div className="ListItem">
                <Link to={"/duyurular/2"}>
                    <img alt="Duyuru Resmi" className="ListItemPhoto" src="https://teknomoli.net/wp-content/uploads/2020/05/337946.png"/>
                </Link>
                <h2 style={{color : "black"}}>COVID-19 Yetkilendirilmiş Tanı Laboratuvarları Listesi</h2>
            </div>
            <div className="ListItem">
                <Link to={"/duyurular/3"}>
                    <img alt="Duyuru Resmi" className="ListItemPhoto" src="https://teknomoli.net/wp-content/uploads/2020/05/337946.png"/>
                </Link>
                <h2 style={{color : "black"}}>Günlük Covid19 Tablosu</h2>
            </div>
        </div>
    </div>;
