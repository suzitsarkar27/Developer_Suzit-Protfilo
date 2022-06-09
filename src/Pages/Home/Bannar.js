import React from 'react';
import Vector1 from '../../assets/img/Vector1.png'
import Vector2 from '../../assets/img/Vector2.png'
import boy from '../../assets/img/Ami.png'
import glassedimoji from '../../assets/img/glassesimoji.png'
import thumbup from '../../assets/img/thumbup.png'
import crown from '../../assets/img/crown.png'
import Github from '../../assets/img/github.png'
import LinkedIn from '../../assets/img/linkedin.png'
import Instagram from '../../assets/img/instagram.png'
import './Bannar.css'
const Bannar = () => {
    return (
        <div class="hero  min-h-screen lg:h-[60vh] ">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <h2 class="text-4xl font-bold">HY! I Am</h2>
            <h2 class="text-4xl font-bold">Suzit Sarkar</h2>
            <p class="py-6 max-w-xl">MREN Stack Developer with high level if experience in web desiging and development
             producting the Auality work</p>
            <button class="btn btn-primary">Hire Me</button>
            <div className='flex mt-14'>
              <a href=""> <img className='mr-5 ' src={Github} alt="" /></a>
              <a href=""> <img className='mr-5 ' src={LinkedIn} alt="" /></a>
              <a href=""> <img className='mr-5 ' src={Instagram} alt="" /></a>
            </div>
          </div>
          <div className='h-[60vh] '>
                  <img src={boy} alt="" class="h-full " />
                </div>
        </div>
      </div>
    );
};

export default Bannar;