import "./Gallery.css";
import img1 from "./img1.jpeg";


export default function showGallery(){
    return(<div className="row">
        <div className="col-4"><section><h4>Ultime creazioni</h4>
        <img src={img1.jpeg} alt="flower" className="img-fluid" />
        </section>
        
        </div></div>
    )
}