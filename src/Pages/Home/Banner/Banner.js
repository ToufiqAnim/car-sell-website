
import { Container, Button, Typography } from '@mui/material';
import { Carousel } from 'react-carousel-minimal';
import Header from '../../Shared/Header/Header';

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
        mrginBottom:20
        
      }
     
    return (
        <>
        <Header></Header>
            <Carousel
            
              data={data}
              time={5000}
              width="100%"
              height="800px"
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
                maxHeight: "800px",
                
                
              }}
              
            />
         
         
</>
    );
};

export default Banner;