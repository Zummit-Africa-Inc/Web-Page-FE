import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"
import { CardActionArea } from '@mui/material';
import "../CSS/slider.css"
import { makeStyles } from '@mui/styles';

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
      <div
       className="leftarrow"
      onClick={onClick}
          >
            <svg 
              width="35"
              height="35"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <path
                  d="M29.9996 0C16.7452 0 6 10.7453 6 23.9998C6 37.2537 16.745 48 29.9993 48C43.2535 48 53.9997 37.2537 53.9997 23.9998C53.9997 10.7453 43.2537 0 29.9996 0ZM36.2757 34.912C35.8379 35.3494 35.2643 35.5681 34.6914 35.5681C34.1183 35.5681 33.5444 35.3494 33.1071 34.9117L24.1 25.905C23.9659 25.8191 23.8377 25.7204 23.7211 25.6033C23.2737 25.1554 23.0579 24.5666 23.0688 23.9802C23.0584 23.3935 23.2737 22.8043 23.7211 22.3569C23.8385 22.2399 23.9659 22.1411 24.1 22.0551L33.0668 13.0883C33.942 12.214 35.3611 12.2136 36.236 13.0888C37.1112 13.9635 37.1112 15.3824 36.236 16.2581L28.5137 23.9804L36.2759 31.7429C37.1507 32.6179 37.1507 34.0368 36.2757 34.912Z"
                  fill="#FFF"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  width="59.9997"
                  height="60"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="6" />
                  <feGaussianBlur stdDeviation="3" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.317647 0 0 0 0 0.360784 0 0 0 0 0.435294 0 0 0 0.12 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
    
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
      <div
          className="rightarrow"
            onClick={onClick}
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <path
                  d="M30 0C16.7451 0 6 10.7451 6 24C6 37.2546 16.7451 48 30 48C43.2549 48 54 37.2546 54 24C54 10.7451 43.2549 0 30 0ZM37.3133 25.6254C37.1963 25.7424 37.068 25.8413 36.9344 25.9272L27.9272 34.9344C27.4898 35.3722 26.9163 35.5909 26.3429 35.5909C25.7694 35.5909 25.1963 35.3722 24.7586 34.9344C23.8834 34.0592 23.8834 32.64 24.7586 31.7651L32.52 24.0026L24.7976 16.2802C23.9224 15.4045 23.9224 13.9858 24.7976 13.1109C25.6728 12.2357 27.0917 12.2362 27.9669 13.1104L36.9342 22.0773C37.0678 22.1632 37.1962 22.2619 37.3126 22.379C37.76 22.8264 37.9758 23.4157 37.9658 24.0024C37.9763 24.5888 37.761 25.1778 37.3133 25.6254Z"
                  fill="#FFF"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  width="60"
                  height="60"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="6" />
                  <feGaussianBlur stdDeviation="3" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.317647 0 0 0 0 0.360784 0 0 0 0 0.435294 0 0 0 0.12 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
    
  );
}

var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};


const SliderComponent = ({ items }) => {
  
  const useStyles = makeStyles((theme)=>({
text:{

fontStyle: "normal",
fontWeight: "400",
fontSize: "16px",
lineHeight: "20px",

display: "flex",
      alignItems: "center",
color: "#081F4A"
    },
    header:{

fontStyle: "normal",
fontWeight: "700",
fontSize: "18px",
lineHeight: "24px",

display: "flex",
      alignItems: "center",
color: "#081F4A"
}
    
}));

  const classes = useStyles();
    const sliders = () => {
          return items.map(item => {
              return (

                <Box
               
                >
                  
            <Card sx={{
                height:416,
                marginRight:3,
            }}>
      <CardActionArea>
         <CardMedia
          component="img"
          height="176"
          width="296"
          image={item.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography className={classes.header}  gutterBottom variant="h5" component="div">
            {item.header}
          </Typography>
                        <br/>
          <Typography className={classes.text}  color="text.secondary">
           {item.text}
          </Typography>
        </CardContent>
      </CardActionArea>
                  </Card>
                  </Box>
               
              );
            })
    }

  
    
    return (
      <div>
        
        <div style={{ position: "relative", margin: "4%" }}>
          
          
         
          {items.length>0?
            <Slider {...settings}>
               {sliders()}
            </Slider>

             :""}
            {/*  )} */}
        </div>
         
      </div>    

      
    );
    
  }

export default SliderComponent