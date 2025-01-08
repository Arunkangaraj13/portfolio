<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <header>
    <!-- <div>
      <nav class="p-4 d-flex align-items-center">
        <RouterLink to="/" class="text-decoration-none fw-bold px-5 text-dark">DESINGU</RouterLink>
        <RouterLink to= "/" class="text-decoration-none px-5 text-dark">HOME</RouterLink>
        <RouterLink to="/projects" class="text-decoration-none px-5 text-dark">PROJECT</RouterLink>
        <RouterLink to="/testimonial" class="text-decoration-none px-5 text-dark">TESTIMONIAL</RouterLink>
        <RouterLink to="/contact" class="text-decoration-none px-5 text-dark">CONTACT</RouterLink>
        <RouterLink to="/contact" class="btn btn-outline-dark rounded-pill px-4 position-relative ms-auto">Let’s Talk →</RouterLink>
      </nav>
    </div>                                             -->
    
  </header>

  <RouterView />
</template>

<style scoped>
  

</style>
