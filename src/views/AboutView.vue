<template>
  <div class="about container">
    <div class="row align-items-center mt-3">
      <div class="col mt-3">
        <h4 class="text" style="text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum voluptates.
        </h4>
        <p class="text" style="text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum voluptates. Quisquam, voluptatum voluptates.
        </p>
      </div>
      <div class="col mt-3">
        <img
          src="../assets/images/learning5.png"
          class="card-img-top"
          alt="Learning"
          style="width: 100%; height: 100%; object-fit: cover"
        />
      </div>
    </div>
    
    <div class="row align-items-center mt-3">
      <div class="col mt-3">
        <img
          src="../assets/images/learning4.png"
          class="card-img-top"
          alt="Learning"
          style="width: 100%; height: 100%; object-fit: cover"
        />
      </div>
      <div class="col mt-3">
        <h4 class="text" style="text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum voluptates.
        </h4>
        <p class="text" style="text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum voluptates. Quisquam, voluptatum voluptates.
        </p>
      </div>
    </div>

    <!-- testimonials -->
    <testimonials />

    <!-- Contact Us -->
    <contact />

    
  </div>
</template>

<script>
import Testimonials from '@/components/Testimonials.vue';
import Contact from '@/components/Contact.vue';
export default {
  components: { Testimonials, Contact },
  name: "AboutView",
  
};
</script>
