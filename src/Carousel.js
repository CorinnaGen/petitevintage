import React, {useState} from "react";
import "./Carousel.scss";


export default function Carousel(){
    let CarArray=[1,2,3,4];

    const [x,setX] = useState(0)
    const goLeft = () => {
        console.log("left");
        setX(x + 100);
    }    


    const goRight = () =>  {
        console.log("right");
        setX(x - 100);
    }    

    return(
        <div className="Carousel">
            {
                CarArray.map((item,index)=>{
                    return(
                        <div key={index} className="carousel">
                            {item}
                            </div>

                    );
                })
            }
            <button id="goLeft" onClick={goLeft}>left</button>
            <button id="goRight" onClick={goRight}>right</button>
            <form action="mailto:xinatowner@gmail.com">
                <input ></input>
                <button>Send mail</button>
            </form>    
        </div>
    )
}