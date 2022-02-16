
import { Container, Button, Typography } from '@mui/material';
import { Carousel } from 'react-carousel-minimal';
import Header from '../../Shared/Header/Header';
import './Banner.css';
const Banner = () => {
    const data = [
        {
          image: "https://wallpaperaccess.com/full/1921102.jpg",
          caption: "Buy Your Dream Car"
          
        },
        {
          image: "https://images4.alphacoders.com/105/thumb-1920-1057695.jpg",
          
          caption:'Buy Your Dream Car'
        }
      
      ];

      const captionStyle = {
        fontSize: '4em',
        fontWeight: 'bold',
        position:'absolute',
        top:'50%',
        right:"25%",
       
      }
    return (
        <>
        <Header></Header>
            <Carousel
            
              data={data}
              time={5000}
              width="100%"
              height="900px"
              captionStyle={captionStyle}
              
              slideNumber={true}
              // slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
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
             
            </Carousel>
            <div className='btn-div'>
              <button className="banner-btn">Know More</button>
              </div>
         
         
</>
    );
};

export default Banner;