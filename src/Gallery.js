import "./Gallery.css";
import img1 from "./img1.jpeg";


export default function showGallery(){
    return(<div className="Gallery">
       <h4>Ultime creazioni</h4>
        <br/>
        <section>
        <img src={img1.jpeg} alt="flower" className="img-fluid" />
        </section>
        
        </div>
    )
}