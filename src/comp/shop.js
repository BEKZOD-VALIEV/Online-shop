import React from 'react'
import './shop.css'

const Shop = ({shop}) => {
  return (
    <>
    <div className="shop">
      <h2># shop</h2>
      <p>Home . shop</p>
      <div className="container">
        <div className="left_box">
          <div className="category">
            <div className="header">
              <h3>all categories</h3>
            </div>
            <div className="box">
              <ul>
                <li># tv</li>
                <li># laptop</li>
                <li># watch</li>
                <li># speaker</li>
                <li># electronics</li>
                <li># headphone</li>
                <li># phone</li>
              </ul>
            </div>
          </div>
          <div className="banner">
            <div className="img_box">
              <img src="image/shop_left.avif" alt="" />
            </div>
          </div>
        </div>
        <div className="right_box">
          <div className="banner">
            <div className="img_box">
              <img src="image/shop_top.webp" alt="" />
            </div>
          </div>
          <div className="product_box">
            <div className="product_container">
              {
                shop.map((curElm) => {
                  return(
                    <>
                    <div className="box">
                      <div className="img_box">
                        <img src={curElm.image} alt="" />
                      </div>
                    </div>
                    </>
                  )
                }
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Shop