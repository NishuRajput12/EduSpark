import './campus.css';
import gallery1 from '../../assets/gallery-1.jpg'
import gallery2 from '../../assets/gallery-2.png'
import gallery3 from '../../assets/gallery-3.jpg'
import gallery4 from '../../assets/gallery-4.jpg'

export default function Campus(){
    return(
        <>
        <div className="campus">
           <div className="gallery">
            <img src={gallery1 } alt=""/>
            <img src={gallery2 }  alt=""/>
            <img src={gallery3 } alt=""/>
            <img src={gallery4 } alt=""/>

           </div>
           <button className='btn dark-btn'> See more here<i className="fas fa-arrow-right"></i> </button>
        </div>
        </>
    )
}