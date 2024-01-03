<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="sponsors mt-5">
    <div class="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
      <div class="col-8 col-md-2">
        <div class="sponsor-card">
          <img
            src="../assets/images/01.png"
            class="card-img-top"
            alt="Sponsor 1"
          />
        </div>
      </div>
      <div class="col-8 col-md-2">
        <div class="sponsor-card">
          <img
            src="../assets/images/02.png"
            class="card-img-top"
            alt="Sponsor 2"
          />
        </div>
      </div>
      <div class="col-8 col-md-2">
        <div class="sponsor-card">
          <img
            src="../assets/images/03.png"
            class="card-img-top"
            alt="Sponsor 3"
          />
        </div>
      </div>
      <div class="col-8 col-md-2">
        <div class="sponsor-card">
          <img
            src="../assets/images/04.png"
            class="card-img-top"
            alt="Sponsor 4"
          />
        </div>
      </div>
      <div class="col-8 col-md-2">
        <div class="sponsor-card">
          <img
            src="../assets/images/05.png"
            class="card-img-top"
            alt="Sponsor 5"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sponsor",
};
</script>

<style>
.sponsors {
  text-align: center;
}

.sponsor-card {
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.sponsor-card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
