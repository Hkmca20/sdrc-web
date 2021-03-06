import React from 'react'
const Banner2 = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row col-md-12 align-items-center justify-content-center">
              <div class="col-md-9">
                <img src="./images/prod7.jpeg" class="d-block w-100" alt="..." /></div>
            </div>
            <div class="carousel-caption d-none d-md-block">
              {/* <h5>SdrCare</h5>
              <p>Product</p> */}
            </div>
          </div>
          <div class="carousel-item">
            <div class="row col-md-12 align-items-center justify-content-center">
              <div class="col-md-5">
                <img src="./images/prod3.jpeg" class="d-block w-100" alt="..." /></div>

              <div class="col-md-5">
                <img src="./images/prod4.jpeg" class="d-block w-100" alt="..." /></div>
            </div>
            <div class="carousel-caption d-none d-md-block">
              {/* <h5>SdrCare</h5>
              <p>Product</p> */}
            </div>
          </div>
          <div class="carousel-item">
            <div class="row col-md-12 align-items-center justify-content-center">
              <div class="col-md-5">
                <img src="./images/prod5.jpeg" class="d-block w-100" alt="..." /></div>

              <div class="col-md-5">
                <img src="./images/prod6.jpeg" class="d-block w-100" alt="..." /></div>
            </div>
            <div class="carousel-caption d-none d-md-block">
              {/* <h5>SdrCare</h5>
              <p>Product</p> */}
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Banner2
