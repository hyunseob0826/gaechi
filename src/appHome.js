import React from "react";
import {Link} from 'react-router-dom';
import './appHome.css';
import main from './mainPage/Main/main';
import {datalist} from './data';
import Menu from "./mainPage/menu";

const Home = (props) => {
    console.log(datalist);

    return(
        <div>
            <div className = "header-bar">
                <a className = "logo" href ="/">개취존중</a>
            </div>

            <Menu />
            {
                datalist.map((info)=>{
                    return(
                        <div>
                            <img src={info.imgaddr}></img>
                            <span>{info.name}</span>
                            <span>{info.title}</span>
                        </div>   
                    );                      
                })
            }
          </div>
    )
}

export default Home;