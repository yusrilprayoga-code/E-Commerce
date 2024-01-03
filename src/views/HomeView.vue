<template>
  <div class="hero-section container">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-slide="true">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner" style="border-radius: 20px;">
        <div class="carousel-item active">
          <img src="../assets/images/shop1.jpg" class="d-block" alt=" E-Commerce 1" />
        </div>
        <div class="carousel-item">
          <img src="../assets/images/shop2.jpg" class="d-block" alt=" E-Commerce 2" />
        </div>
        <div class="carousel-item">
          <img src="../assets/images/shop3.jpg" class="d-block" alt="E-Commerce 3" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <features />
  </div>
</template>

<script lang="ts">
import Features from '@/components/Features.vue';
export default {
  components: {  Features },
  name: "HomeView",
};
</script>
<style>
.hero-section {
  margin-top: 3rem;
}

img {
  height: 500px;
  width: 100%;
  object-fit: cover;
}

</style>
