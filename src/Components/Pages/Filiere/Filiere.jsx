import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from "../Filiere/Filiere.module.css"

const Filiere = ()=>{

    const setting={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1

    }

    return(
     
  /*   <div className={style.container}>  */
      
      <Slider {...setting} className={style.slider}>
            
            <div>
              <section className={style.section}>
              <img src="image1" alt="slide1" />
              <h2>titre</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti non quis earum porro harum est amet. Accusamus doloribus dicta autem, nostrum placeat vel sit necessitatibus dolorem omnis vero praesentium laboriosam officia voluptatum! Incidunt aspernatur sapiente iure, et impedit temporibus aliquam veritatis consequuntur? Deleniti, perferendis. Illo eum sequi quas expedita?</p>
                <button>commencer</button>
              </section>
             
              
                
            </div>
            <div>
              <section className={style.section}>
              <img src="image1" alt="slide1" />
              <h2>titre</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti non quis earum porro harum est amet. Accusamus doloribus dicta autem, nostrum placeat vel sit necessitatibus dolorem omnis vero praesentium laboriosam officia voluptatum! Incidunt aspernatur sapiente iure, et impedit temporibus aliquam veritatis consequuntur? Deleniti, perferendis. Illo eum sequi quas expedita?</p>
                <button>commencer</button>
              </section>
             
              
                
            </div> <div>
              <section className={style.section}>
              <img src="image1" alt="slide1" />
              <h2>titre</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti non quis earum porro harum est amet. Accusamus doloribus dicta autem, nostrum placeat vel sit necessitatibus dolorem omnis vero praesentium laboriosam officia voluptatum! Incidunt aspernatur sapiente iure, et impedit temporibus aliquam veritatis consequuntur? Deleniti, perferendis. Illo eum sequi quas expedita?</p>
                <button>commencer</button>
              </section>
             
              
                
            </div>
            <div>
              <section className={style.section}>
              <img src="image1" alt="slide1" />
              <h2>titre</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti non quis earum porro harum est amet. Accusamus doloribus dicta autem, nostrum placeat vel sit necessitatibus dolorem omnis vero praesentium laboriosam officia voluptatum! Incidunt aspernatur sapiente iure, et impedit temporibus aliquam veritatis consequuntur? Deleniti, perferendis. Illo eum sequi quas expedita?</p>
                <button>commencer</button>
              </section>
             
              
                
            </div>
           
        </Slider> 
       
 /*    </div> */
    )
}

export default Filiere;