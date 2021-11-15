
import { Container } from '@mui/material';
import { Carousel } from 'react-carousel-minimal';


const Banner = () => {
    const data = [
        {
          image: "https://cdn.vox-cdn.com/thumbor/EH3mwz-1RZ3smHMtWvD-HQBjn44=/0x0:2040x1360/1400x788/filters:focal(808x684:1134x1010):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/55982391/vrg_tesla_model_3_blue_driving.0.jpg",
          caption1:"Buy Your Dream Car",
          caption:'Buy Your Dream Car'
        },
        {
          image: "https://www.motortrend.com/uploads/sites/5/2014/03/2015-Mercedes-Benz-C-Class-front-three-quarters-in-motion1.jpg?fit=around%7C875:492",
          caption: "Buy Your Dream Car"
        }
      
      ];

      const captionStyle = {
        fontSize: '4em',
        fontWeight: 'bold',
        
      }
     
    return (
        <Container >
            <Carousel
              data={data}
              time={5000}
              width="100%"
              height="600px"
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
              radius="10px"
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "100%",
                maxHeight: "600px",
                margin:'30px auto'
                
              }}
            />
          </Container>

    );
};

export default Banner;