
import { Container, Button, Typography } from '@mui/material';
import { Carousel } from 'react-carousel-minimal';
import Header from '../../Shared/Header/Header';
import './Banner.css';
const Banner = () => {
    const data = [
        {
          image: "https://wallpaperaccess.com/full/1921102.jpg",
           /* caption: `<h1>Buy Your Dream Car</h1>`, */
  
          
        },
        {
          image: "https://images4.alphacoders.com/105/thumb-1920-1057695.jpg",
          
           /* caption:'Buy Your Dream Car', */
     
        }
      
      ];

     /*  const captionStyle = {
        fontSize: '4em',
        fontWeight: 'bold',
        position:'absolute',
        top:'50%',
        right:"25%",
       
      } */
     /*  const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      } */
    return (
        <>
        <Header></Header>
            <Carousel
                           data={data}
                          time={5000}
                          width="100%"
                          height="900px"
                          /* captionStyle={captionStyle} */
                          
                         /*  slideNumber={true}
                         slideNumberStyle={slideNumberStyle} */
                          captionPosition="center"
                          automatic={true}
                          dots={true}
                          pauseIconColor="white"
                          pauseIconSize="40px"
                          slideBackgroundColor="darkgrey"
                          slideImageFit="cover"
                          
                          thumbnailWidth="100px"
                          style={{
                            textAlign: "center",
                            maxWidth: "100%",
                            maxHeight: "900px",
                            
                            
                          }}
            >
             <div>

             </div>
            </Carousel>
           
            <div className='btn-div'>
              <h1 style={{margin:0, color:'#dd3d53'}}>Top Brands 2022</h1>
              <h1 className="banner-text" style={{margin:0,fontSize: '3em',
        fontWeight: 'bold', color:'white'}}>MODERN-CLASSIC</h1>
            <h1 className="banner-text" style={{ fontSize: '3em',
        fontWeight: 'bold', marginBottom:10,marginTop:0, color:'white'}}>INCREDIBLE</h1> 
              <button className="banner-btn">Know More</button>
              </div>
         
         
</>
    );
};

export default Banner;