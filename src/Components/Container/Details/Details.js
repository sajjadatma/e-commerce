import React,{useState,useEffect} from "react";
import "./Details.scss";
import axios from 'axios'
import Button from "@material-ui/core/Button";
import Icon from "@mdi/react";
import { withRouter } from 'react-router-dom'
import { mdiContentCopy, mdiHeartOutline, mdiCartPlus } from "@mdi/js";
function Details(props) {

  useEffect(() => {
     axios.get(`http://127.0.0.1:8000/api/products/${props.match.params.id}`, {
      headers: {
        'Content-Type': 'application/json',
        }
     })
.then( function (response) {
  // handle success   
  console.log(response.data);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
  }, [])

  console.log(props.match.params.id);
  return (
    <div className='details'>
      <div className='details__header'>
        <h4>DETAILS OF PRODUCTS</h4>
      </div>
      <div className='details__content'>
        <div className='details__content_desc'>
          <div className='desc_title'>
            <h2>TITLE</h2>
            <div className='desc_colors'>
              <div style={{ background: "red" }}></div>
              <div style={{ background: "blue" }}></div>
              <div style={{ background: "green" }}></div>
              <div style={{ background: "black" }}></div>
            </div>
          </div>
          <div className='desc_price'>
            <h5>Price:</h5>
            <span>$20</span>
          </div>
          <div className='desc_desc'>
            <h5>Description:</h5>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              eveniet eius fugiat, incidunt tenetur autem enim doloribus, magnam
              sequi quisquam blanditiis voluptatibus debitis dignissimos odit
              vitae? Eos voluptatum deleniti ullam quisquam ab placeat eum. Enim
              exercitationem eius deleniti voluptas at.
            </span>
          </div>
          <div className='desc_buttons'>
          <div className='desc_buttons_faveCom'>
              <Button variant='outlined' size='small' color='secondary'>
                <Icon path={mdiHeartOutline} title='Login' size={0.8} />
              </Button>
                <Button variant='outlined' size='small' color='primary'>
                <Icon path={mdiContentCopy} title='Login' size={0.8} />
              </Button>
            </div>
            <Button variant='outlined' size='small' color='primary'>
              <Icon path={mdiCartPlus} title='Login' size={0.8} /> add to Cart
            </Button>
          </div>
        </div>
        <div className='details__content_images'>
          <img
            className='product__img'
            src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bced0fee-fbfc-4ae3-985b-2fdbb57ff31a/air-max-plus-iii-shoe-Z4LkKl.jpg'
        alt='title'  />
          <div className='product__img_slide'>
            <img src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bced0fee-fbfc-4ae3-985b-2fdbb57ff31a/air-max-plus-iii-shoe-Z4LkKl.jpg'  alt='title' />
            <img src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bced0fee-fbfc-4ae3-985b-2fdbb57ff31a/air-max-plus-iii-shoe-Z4LkKl.jpg'  alt='title'/>
            <img src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bced0fee-fbfc-4ae3-985b-2fdbb57ff31a/air-max-plus-iii-shoe-Z4LkKl.jpg'  alt='title'/>
            <img src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bced0fee-fbfc-4ae3-985b-2fdbb57ff31a/air-max-plus-iii-shoe-Z4LkKl.jpg'  alt='title'/>
            <img src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bced0fee-fbfc-4ae3-985b-2fdbb57ff31a/air-max-plus-iii-shoe-Z4LkKl.jpg'  alt='title'/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Details);