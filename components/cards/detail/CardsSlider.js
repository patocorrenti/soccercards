import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

import SoccerCard from '../list/Card';
import ALL_CARDS from "../../../lib/allCards";

export default function SoccerCardsSlider () {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
  };

  return (
    <Slider {...settings} >
        {
          ALL_CARDS.map(( card, index ) =>
            index &&
            <div key={index}>
              <SoccerCard card={card} id={index}/>
            </div>
          )
        }
    </Slider>
  )
}
