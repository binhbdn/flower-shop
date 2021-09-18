<template>
  <div
    id="myCarousel"
    class="carousel carousel-fade carousel-dark slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="0"
        aria-label="Slide 1"
        aria-current="true"
        class="active"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="4000">
        <div class="bg-img img-carousel-1"></div>

        <div class="carousel-caption pb-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <div class="carousel__text text-start">
                  <span>Shop hoa tươi &amp; Quà tặng</span>
                  <h2>Đẹp nhẹ nhàng đắm say lòng người.</h2>
                  <a href="/gioi-thieu" class="btn-florist">Giới thiệu</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="4000">
        <div class="bg-img img-carousel-2"></div>

        <div class="carousel-caption pb-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <div class="carousel__text text-start">
                  <span>Shop hoa tươi &amp; Quà tặng</span>
                  <h2>Đẹp tinh khôi tặng người yêu mến.</h2>
                  <a href="/dich-vu" class="btn-florist">Dịch vụ</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCarousel",
};
</script>
