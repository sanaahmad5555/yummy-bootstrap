import React from 'react'
import img1 from '../assets/menu/menu-item-1.png'
import img2 from '../assets/menu/menu-item-2.png'
import img3 from '../assets/menu/menu-item-3.png'
import img4 from '../assets/menu/menu-item-4.png'
import img5 from '../assets/menu/menu-item-5.png'
import img6 from '../assets/menu/menu-item-6.png'
import '../components/CSS/menu.css'

function Menu() {
  return (
    <section id="menu" className="menu section-bg">
      <div className="container">

        <div className="section-header">
          <h2>Our Menu</h2>
          <p>Check Our <span>Yummy Menu</span></p>
        </div>

        <ul className="nav nav-tabs d-flex justify-content-center">

          <li className="nav-item">
            <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
              <h4>Starters</h4>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
              <h4>Breakfast</h4>
            </a>
            </li>

          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
              <h4>Lunch</h4>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
              <h4>Dinner</h4>
            </a>
          </li>

        </ul>

        <div className="tab-content">

          <div className="tab-pane fade active show" id="menu-starters">

            <div className="tab-header text-center">
              <p>Menu</p>
              <h3>Starters</h3>
            </div>

            <div className="row gy-5">

              <div className="col-lg-4 menu-item">
                <img src={img1} className="menu-img img-fluid" alt=""/>
                <h4>Magnam Tiste</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $5.95
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <img src={img2} className="menu-img img-fluid" alt=""/>
                <h4>Aut Luia</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $14.95
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <img src={img3} className="menu-img img-fluid" alt=""/>
                <h4>Est Eligendi</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $8.95
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <img src={img4} className="menu-img img-fluid" alt=""/>
                <h4>Eos Luibusdam</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $12.95
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <img src={img6} className="menu-img img-fluid" alt=""/>
                <h4>Eos Luibusdam</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $12.95
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <img src={img6} className="menu-img img-fluid" alt=""/>
                <h4>Laboriosam Direva</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $9.95
                </p>
              </div>

            </div>
          </div>

          <div className="tab-pane fade" id="menu-breakfast">

            <div className="tab-header text-center">
              <p>Menu</p>
              <h3>Breakfast</h3>
            </div>

            <div className="row gy-5">

              <div className="col-lg-4 menu-item">
                <img src={img1} className="menu-img img-fluid" alt=""/>
                <h4>Magnam Tiste</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $5.95
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <img src={img2} className="menu-img img-fluid" alt=""/>
                <h4>Aut Luia</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $14.95
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <img src={img3} className="menu-img img-fluid" alt=""/>
                <h4>Est Eligendi</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $8.95
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <img src={img4} className="menu-img img-fluid" alt=""/>
                <h4>Eos Luibusdam</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $12.95
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <img src={img5} className="menu-img img-fluid" alt=""/>
                <h4>Eos Luibusdam</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $12.95
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <img src={img6} className="menu-img img-fluid" alt=""/>
                <h4>Laboriosam Direva</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $9.95
                </p>
              </div>

            </div>
          </div>

          <div className="tab-pane fade" id="menu-lunch">

            <div className="tab-header text-center">
              <p>Menu</p>
              <h3>Lunch</h3>
            </div>

            <div className="row gy-5">

              <div className="col-lg-4 menu-item">
                <img src={img1} className="menu-img img-fluid" alt=""/>
                <h4>Magnam Tiste</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $5.95
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <img src={img2} className="menu-img img-fluid" alt=""/>
                <h4>Aut Luia</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $14.95
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <img src={img3} className="menu-img img-fluid" alt=""/>
                <h4>Est Eligendi</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $8.95
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <img src={img4} className="menu-img img-fluid" alt=""/>
                <h4>Eos Luibusdam</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $12.95
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <img src={img5} className="menu-img img-fluid" alt=""/>
                <h4>Eos Luibusdam</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $12.95
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <img src={img6} className="menu-img img-fluid" alt=""/>
                <h4>Laboriosam Direva</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $9.95
                </p>
              </div>

            </div>
          </div>

          <div className="tab-pane fade" id="menu-dinner">

            <div className="tab-header text-center">
              <p>Menu</p>
              <h3>Dinner</h3>
            </div>

            <div className="row gy-5">

              <div className="col-lg-4 menu-item">
                <img src={img1} className="menu-img img-fluid" alt=""/>
                <h4>Magnam Tiste</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $5.95
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <img src={img2} className="menu-img img-fluid" alt=""/>
                <h4>Aut Luia</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $14.95
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <img src={img3} className="menu-img img-fluid" alt=""/>
                <h4>Est Eligendi</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $8.95
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <img src={img4} className="menu-img img-fluid" alt=""/>
                <h4>Eos Luibusdam</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $12.95
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <img src={img5} className="menu-img img-fluid" alt=""/>
                <h4>Eos Luibusdam</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $12.95
                </p>
              </div>

              <div className="col-lg-4 menu-item">
                <img src={img6} className="menu-img img-fluid" alt=""/>
                <h4>Laboriosam Direva</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">
                  $9.95
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Menu