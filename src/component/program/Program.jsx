import './Program.css';
import program1 from '../../assets/program1.png';
import program2 from '../../assets/programimg2.png';  // Or fix if it's program2.png
import program3 from '../../assets/programimg3.jpg';
import program4 from '../../assets/programimg4.png';


import program_icon1 from '../../assets/program-icon-1.png'; // 🔄 fixed
import program_icon2 from '../../assets/program-icon-2.png'; // 🔄 fixed
import program_icon3 from '../../assets/program-icon-3.png'; // 🔄 fixed

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Program = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="programs">
            <div className="row row1">
                <div className="program" data-aos="fade-right">
                    <img src={program1} alt="Program 1" />
                    <div className='caption'>
                        <img src={program_icon1} alt="UG Degree Icon" />
                        <p>UG Degree</p>
                    </div>
                </div>
                <div className="program" data-aos="fade-left">
                    <img src={program2} alt="Program 2" />
                    <div className='caption'>
                        <img src={program_icon2} alt="UG Diploma Icon" />
                        <p>UG Diploma</p>
                    </div>
                </div>
            </div>
            <div className="row row2">
                <div className="program" data-aos="zoom-in">
                    <img src={program3} alt="Program 3" />
                    <div className='caption'>
                        <img src={program_icon3} alt="PG Degree Icon" />
                        <p>Post Graduation Degree</p>
                    </div>
                </div>
            </div>
            <div className="row row3">
                <div className="program" data-aos="fade-right">
                    <img src={program4} alt="Program 4" />
                    <div className='caption'>
                        <img src={program_icon1} alt="PG Diploma Icon" />
                        <p>PG Diploma</p>
                    </div>
                </div>
                <div className="program" data-aos="fade-left">
                    <img src={program1} alt="Program 5" />
                    <div className='caption'>
                        <img src={program_icon2} alt="Masters Degree Icon" />
                        <p>Masters Degree</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Program;
