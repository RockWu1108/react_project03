import React ,{Component} from "react";
import Search from "./search";
import Main from "./main";


//ajax axios 抓取github作者資料
export default class App extends  Component{



    render() {
        return(
            <div className="container">
                <Search />
                <Main />
            </div>
        )
    }
}
