<!-- components/ScrollingBanner.vue -->
<template>
    <div class="banner-bar py-2">
      <div class="scroll-text">
        <span v-for="(item, index) in scrollItems" :key="index">
          {{ item }} &nbsp; ● &nbsp;
        </span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ScrollingBanner',
    data() {
      return {
        scrollItems: [
          'PRINT & DIGITAL MEDIA',
          'AD CREATIVES',
          'SOCIAL MEDIA POSTS',
          'LOGO DESIGN',
          'UI/UX MOCKUPS',
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .banner-bar {
    background-color: black;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    z-index: 9999;
  }
  
  .scroll-text {
    display: inline-block;
    animation: scroll-left 15s linear infinite;
    color: transparent;
    -webkit-text-stroke: 1px white;
    font-weight: bold;
    font-size: 1.5rem;
  }
  
  @keyframes scroll-left {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  </style>
  