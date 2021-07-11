import React, {useState} from "react";
import "./Carousel.scss";
import Imgs from "./Imgs";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img5 from "./imgs/img5.jpg";
import img6 from "./imgs/img6.jpg";
import img7 from "./imgs/img7.jpg";
import img8 from "./imgs/img8.jpeg";
import img9 from "./imgs/img9.jpeg";

export default function Carousel(){
    let CarArray=[<Imgs src={img1}/>,<Imgs src={img2}/>,<Imgs src={img3}/>,<Imgs src={img4}/>, <Imgs src={img5}/>, <Imgs src={img6}/>, <Imgs src={img7}/>,
        <Imgs src={img8}/>,<Imgs src={img9}/>
    ];

    const [x,setX] = useState(0)
    const goLeft = () => {
        x === 0 ? setX(-100 *(CarArray.lenght-1)) : setX(x + 100);
        
    }    


    const goRight = () =>  {
       (x === -100*(CarArray.lenght-1))?setX(0):setX(x - 100);
    }    

    return(
        <div className="Slider">
            {
                CarArray.map((item,index)=>{
                    return(
                        <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                            {item}
                            </div>

                    );
                })
            }
            <button id="goLeft" onClick={goLeft}>←</button>
            <button id="goRight" onClick={goRight}>→</button>
             
        </div>
    )
}