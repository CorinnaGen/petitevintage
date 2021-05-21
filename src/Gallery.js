import "./Gallery.css";
import Carousel from "./Carousel";



export default function showGallery(){
    return(<div className="Gallery">
       <h4>Ultime creazioni</h4>
        <br/>
        <section>
            <div className="row">
        <Carousel/>
           </div>
        </section>
        
        </div>
    )
}