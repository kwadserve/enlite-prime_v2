import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import IconButton from '@mui/material/IconButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowBack from '@mui/icons-material/ArrowBack';
import imgData from 'enl-api/images/imgData';
import 'enl-styles/vendors/slick-carousel/slick-carousel.css';
import 'enl-styles/vendors/slick-carousel/slick.css';
import 'enl-styles/vendors/slick-carousel/slick-theme.css';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton className="nav-next" onClick={onClick} size="large">
      <ArrowForward />
    </IconButton>
  );
}

SampleNextArrow.propTypes = { onClick: PropTypes.func, };

SampleNextArrow.defaultProps = {
  onClick: undefined,
};

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton className="nav-prev" onClick={onClick} size="large">
      <ArrowBack />
    </IconButton>
  );
}

SamplePrevArrow.propTypes = { onClick: PropTypes.func, };

SamplePrevArrow.defaultProps = {
  onClick: undefined,
};

const useStyles = makeStyles()(() => ({
  item: {
    textAlign: 'center',
    '& img': {
      margin: '10px auto'
    }
  }
}));

function CustomCarousel() {
  const {
    classes
  } = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="container custom-arrow">
      <Slider {...settings}>
        {imgData.map((item, index) => (
          <div key={index.toString()} className={classes.item}>
            <img src={item.img} alt={item.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomCarousel;
