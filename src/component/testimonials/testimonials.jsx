import './testimonials.css';

import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user1 from '../../assets/user-1.png'; import user2 from '../../assets/user-2.png';
import { useRef } from 'react';
export default function Testimonials() {
     const slider = useRef();
     let tx = 0;// transform: translateX(-25%);
     let slideForward = () => {
          if (tx > -50) {
               tx -= 25;
          }
          slider.current.style.transform = ` translateX(${tx}%)`
     }
     let slidebackword = () => {
               if (tx < 0) {
                    tx += 25;
               }
               slider.current.style.transform = ` translateX(${tx}%)`
     }
     return (
          <>
               <div className="testimonials">
                    <img src={next_icon} alt='' className='next-btn' onClick={slideForward}></img>
                    <img src={back_icon} alt='' className='back-btn' onClick={slidebackword}></img>
                    <div className="slider">
                         <ul ref={slider}>
                              <li>
                                   <div className="slide">
                                        <div className="user-info">
                                             <img src={user1} alt='' className='user1'></img>
                                        </div>
                                        <div>
                                             <h3> Emily Williams  </h3>
                                             <span>
                                                  Edusity, USA
                                             </span>
                                        </div>

                                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                                   </div>
                              </li>
                              <li>
                                   <div className="slide">
                                        <div className="user-info">
                                             <img src={user2} alt='' className='user2'></img>
                                        </div>
                                        <div>
                                             <h3> William Jackson</h3>
                                             <span>
                                                  Edusity, USA
                                             </span>
                                        </div>

                                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                                   </div>
                              </li>
                              <li>
                                   <div className="slide">
                                        <div className="user-info">
                                             <img src={user2} alt='' className='user2'></img>
                                        </div>
                                        <div>
                                             <h3> William Jackson</h3>
                                             <span>
                                                  Edusity, USA
                                             </span>
                                        </div>

                                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                                   </div>
                              </li>
                         </ul>
                    </div>
               </div>
          </>
     )
}
