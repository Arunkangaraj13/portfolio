<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      showAllProjects: false,
      selectedFilter: 'ALL',
      showFilterMenu: false,
      projects: [
        {
          id: 1,
          image: '/src/assets/Thumbnails/Chicky Fries.jpg',
          category: 'GRAPHIC DESIGN',
          title: 'ChickyFries | Fast Food',
          url:'https://drive.google.com/file/d/1o2buwg-NO2mMaRnWMi-eifkc7bksqVVC/view?usp=sharing',
          description: 'ChickyFries is a fast-food brand with a bold and fun identity. The vibrant design and unique logo make it stand out, creating a strong and memorable impression for customers.'
        },
        {
          id: 2,
          image: '/src/assets/Thumbnails/Swift Buy.jpg',
          category: 'WEB DESIGN',
          title: 'Website Redesign',
          url:'https://www.figma.com/proto/NHqucSObxt46GjTURmRgu0/Landing-Page---Portfolio?page-id=0%3A1&node-id=1-2&viewport=584%2C48%2C0.08&t=xcMhg8hbpGIgKmgh-1&scaling=scale-down-width&content-scaling=fixed',
          description: 'A modern and memorable brand identity that not only captured attention but also significantly increased recognition by an impressive 30%.'
        },
        {
          id: 3,
          image: '/src/assets/projects/Chicky-fries.jpg',
          category: 'VIDEO EDITING',
          title: 'Corporate Video',
          url:'https://drive.google.com/file/d/1ini2jKjXx2qopKUR55RxskmzdwVl4kGD/view?ts=67aa2930',
          description: 'A modern and memorable brand identity that not only captured attention but also significantly increased recognition by an impressive 30%.'
        },
        // Add more projects as needed
      ],
      categories: ['ALL', 'WEB DESIGN', 'VIDEO EDITING', 'GRAPHIC DESIGN']
    };
  },
  computed: {
    filteredProjects() {
      if (this.selectedFilter === 'ALL') {
        return this.projects;
      }
      return this.projects.filter(project => project.category === this.selectedFilter);
    },
    displayedProjects() {
      return this.showAllProjects ? this.filteredProjects : this.filteredProjects.slice(0, 2);
    }
  },
  methods: {

    redirectTo(link) {
      if (link && link.startsWith("http")) {
        window.open(link, "_blank"); // Opens link in a new tab
      } else {
        // console.error("Invalid URL:", link); // Debugging message
      }
    },
  
    handleSubmit() {
      this.loading = true;
      this.successMessage = "";
      this.errorMessage = "";

      // Replace with your EmailJS credentials
      const serviceID = "service_ljsrem9";
      const templateID = "template_p6c6cv7";
      const publicKey = "owa_AJOBf4QIDN7Gf";

      const templateParams = {
        from_name: this.form.name,
        from_email: this.form.email,
        message: this.form.message,
        to_email: "arunkanagaraj135@gmail.com"
      };

      emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then(() => {
          this.successMessage = "Email sent successfully!";
          this.form = { name: "", email: "", message: "" };
        })
        .catch((error) => {
          // console.error("EmailJS Error:", error);
          this.errorMessage = "Failed to send email. Please try again.";
        })
        .finally(() => {
          this.loading = false;
        });
      },
    
    resetForm() {
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
    toggleProjects() {
      this.showAllProjects = !this.showAllProjects;
    },
    setFilter(category) {
      this.selectedFilter = category;
      this.showFilterMenu = false;
      this.showAllProjects = false;
    }
  },
};
</script>

<template >
  <div>

    <!-- Navigation Bar Section -->
     <div class="container p-3">
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid p-0">
        
        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="poppins-nav collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <a href="#home" class="px-lg-3 navbar-brand">
              <img src="../assets/icons/Desingu-Logo.png" alt="DESINGU">
            </a>
            <li class="px-lg-3"><a href="#home" class="nav-link poppins-nav">HOME</a></li>
            <li class="px-lg-3"><a href="#projects" class="nav-link poppins-nav">PROJECT</a></li>
            <li class="px-lg-3"><a href="#testimonial" class="nav-link poppins-nav">TESTIMONIAL</a></li>
            <li class="px-lg-3"><a href="#contact" class="nav-link poppins-nav">CONTACT</a></li>
          </ul>
          <a href="#letstalk" class="btn btn-outline-dark rounded-pill">Let's Talk</a>
        </div>
      </div>
    </nav>
  </div>
    <!-- Home Section -->
    <div class="container p-4" id="home">
      <div class="row">
        <div class="col-12 col-lg-7 mb-4 mb-lg-0">
          <p class="poppins-extrabold display-3 text-dark ">
            Bold Designs
            That Inspire and
            Engage
          </p>
          <p class="poppins-regular">
            A creative designer skilled in graphic design,
            editing, and web page design. I help brands
            tell stories through impactful visuals and
            timeless designs. Let's bring your ideas to life!
          </p>
           <div class="container">
              <div class="row g-4 py-3 py-md-1">
                <div class="col-6 p-0 col-sm-3 col-md-auto">
                  <a class="text-decoration-none text-dark" href="https://www.instagram.com/desing17__/">INSTAGRAM↗</a>
                </div>
                <div class="col-6 col-sm-3 col-md-auto">
                  <a class="text-decoration-none text-dark" href="https://www.behance.net/desingu17">BEHANCE↗</a>
                </div>
                <div class="col-6 col-sm-3 col-md-auto">
                  <a class="text-decoration-none text-dark" href="https://www.linkedin.com/in/desingue/">LINKEDIN↗</a>
                </div>
                <div class="col-6 col-sm-3 col-md-auto">
                  <a class="text-decoration-none text-dark" href="https://drive.google.com/file/d/1aaatw5sw2iGXCv4AzF9LGspIm75CFTLb/view?ts=67c488d5">RESUME↗</a>
                </div>
              </div>
           </div>

        </div>
        <!-- Profile Photo -->
        <div class="col-lg-4 container-fluid col position-relative">
          <img
            src="../assets/profile/Final Image.png"
            alt="Design Inspiration"
            class="img-fluid"
          />
          <!-- <img src="../assets/round-animation.gif" alt="Animation" class="overlay-gif1">
          <img src="../assets/round-animation.gif" alt="Animation" class="overlay-gif2"> -->
        </div>
      </div>
    </div>

    <!-- Expertise Section -->
    <div class="p-lg-5">
      <h2 class="poppins-semibold justify-content-center d-flex py-3">Expertise</h2>
      <div class="justify-content-evenly d-flex flex-wrap p-1">
        <div class="expertise bg-gray border border-secondary rounded-1 p-2 d-flex align-items-center mb-3 mb-lg-0">
          <div>
            <img src="../assets/icons/GraphicDesign.svg" alt="Graphic Design" class="me-1 expertise-svg">
          </div> 
          <div>
            <h5>Graphic Design</h5>
            <p class="text-secondary">Eye-catching logos,<br> branding materials, and <br> marketing collateral.</p>
          </div> 
        </div>
        <div class="expertise bg-gray border border-secondary rounded-1 p-2 d-flex align-items-center mb-3 mb-lg-0">
          <div>
            <img src="../assets/icons/VideoEditing.svg" alt="Video Editing" class="me-1 expertise-svg">
          </div>
          <div>
            <h5>Video Editing</h5>
            <p class="text-secondary">Enhancing Your Vision <br> with Creative Video <br> Edits.</p>
          </div>  
        </div>
        <div class="expertise bg-gray border border-secondary rounded-1 p-2 d-flex align-items-center mb-3 mb-lg-0">
          <div>
            <img src="../assets/icons/WebDesign.svg" alt="Web Design" class="me-1 expertise-svg">
          </div>
          <div>
            <h5>Web Design</h5>
            <p class="text-secondary">Crafting Visually <br>Stunning, User-Centered <br> Websites that.</p>
          </div>  
        </div>
      </div>
    </div>

    <!-- Projects Section -->
    <div id="projects" class="container">  
      <div class="p-1 row align-items-center">
        <div class="col-6">
          <h2 class="poppins-semibold p-1">Discover my works</h2>
        </div>
        <div class="col-6 text-end position-relative">
          <button 
            @click="showFilterMenu = !showFilterMenu" 
            class="btn btn-outline-dark rounded-pill px-4 py-2"
          >
            Filter {{ selectedFilter !== 'ALL' ? `(${selectedFilter})` : '' }}
          </button>
          
          <div 
            v-if="showFilterMenu" 
            class="position-absolute end-0 mt-2 py-2 bg-white rounded-3 shadow-lg z-index-dropdown"
            style="min-width: 200px;"
          >
            <button 
              v-for="category in categories" 
              :key="category"
              @click="setFilter(category)"
              class="d-block w-100 text-start px-4 py-2 border-0 bg-transparent hover-bg-light"
              :class="{ 'text-primary': selectedFilter === category }"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>

      <!-- Project Items -->
       
      <div v-for="project in displayedProjects" :key="project.id">
        <div class="row align-items-center">
          <div class="col-12 col-lg-5 px-3">
            <img :src="project.image" :alt="project.title" class="img-fluid">
          </div>
          <div class="col-12 col-lg-7 p-lg-4">
            <h6 class="poppins-title" style="color:rgba(205, 27, 39, 1)">{{ project.category }} </h6>
            <h3
              class="poppins-quaterbold">
              {{ project.title }}
               <button @click="redirectTo(project.url)"  class="btn">
                <img src="../assets/icons/Arrow button.svg" class="" alt="project-button">
              </button>
            </h3>
            <p class="poppins-light">{{ project.description }}</p>
          </div>
        </div>
        <hr>
      </div>

      <!-- View More Button -->
      <div class="text-center mt-4 mb-5" v-if="filteredProjects.length > 2">
        <button 
          @click="toggleProjects" 
          class="btn btn-outline-dark rounded-pill px-4 py-2"
        >
          {{ showAllProjects ? 'View Less' : 'View More' }}
        </button>
      </div>
    </div>

    <!-- Testimonial section -->
    <section id="testimonial" class="container my-5">
      <h2 class="poppins-semibold mb-5">Let's see what my clients say</h2>
      <div class="row">
        <!-- Testimonial Card 1 -->
        <div class="col-md-6 col-lg-6 mb-4">
          <div class="card shadow-sm h-100">
            <div class="card-body d-flex flex-column">
              <blockquote class="blockquote mb-4">
                <p>
                  Desing is a talented graphic 'n' UIUX designer.. creative, responsive, and open to feedback, making collaboration smooth and effective. Highly recommend working with him..
                </p>
              </blockquote>
              <div class="d-flex align-items-center mt-auto">
                <div class="me-3">
                  <img
                    src="../assets/testimonials/testimonial-logo.png"
                    alt="Testimonial Logo"
                    class="rounded-circle"
                    width="50"
                    height="50"
                  />
                </div>
                <div>
                  <h5 class="card-title mb-0">Kavin K</h5>
                  <small class="text-muted">Graphic Designer</small>
                </div>
                <img
                  src="../assets/testimonials/teamwork.png  "
                  alt="Teamwork Logo"
                  class="ms-auto"
                  width="50"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Testimonial Card 2 -->
        <div class="col-md-6 col-lg-6 mb-4">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <blockquote class="blockquote mb-4">
                <p>
                  Skilled graphic & UIUX designer who understands both aesthetics and user experience. Creative, detail-oriented, and always open to feedback, making collaboration effortless.
                </p>
              </blockquote>
              <div class="d-flex align-items-center">
                <div class="me-3">
                  <img
                    src="../assets/testimonials/testimonial-logo.png"
                    alt="Testimonial Logo"
                    class="rounded-circle"
                    width="50"
                    height="50"
                  />
                </div>
                <div>
                  <h5 class="card-title mb-0">Sedhuraman J</h5>
                  <small class="text-muted">Digital Marketer</small>
                </div>
                <img
                  src="../assets/testimonials/teamwork.png"
                  alt="Teamwork Logo"
                  class="ms-auto"
                  width="50"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- Testimonial Card 3 -->
        <div class="col-md-6 col-lg-6 mb-4">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <blockquote class="blockquote mb-4">
                <p>
                  Working with him has been great! Their designs are clean, modern, and visually appealing. Responsive and easy to work with, they always bring fresh idea.
                </p>
              </blockquote>
              <div class="d-flex align-items-center">
                <div class="me-3">
                  <img
                    src="../assets/testimonials/testimonial-logo.png"
                    alt="Testimonial Logo"
                    class="rounded-circle"
                    width="50"
                    height="50"
                  />
                </div>
                <div>
                  <h5 class="card-title mb-0">Logesh E</h5>
                  <small class="text-muted">Video Editor</small>
                </div>
                <img
                  src="../assets/testimonials/teamwork.png"
                  alt="Teamwork Logo"
                  class="ms-auto"
                  width="50"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- Testimonial Card 4 -->
        <div class="col-md-6 col-lg-6 mb-4">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <blockquote class="blockquote mb-4">
                <p>
                  Talented designer with a keen eye for detail. Their ability to create intuitive and visually stunning landing page designs makes development seamless. A great team player and highly recommended!
                </p>
              </blockquote>
              <div class="d-flex align-items-center">
                <div class="me-3">
                  <img
                    src="../assets/testimonials/testimonial-logo.png"
                    alt="Testimonial Logo"
                    class="rounded-circle"
                    width="50"
                    height="50"
                  />
                </div>
                <div>
                  <h5 class="card-title mb-0">Jayandhann AS</h5>
                  <small class="text-muted">Web Developer</small>
                </div>
                <img
                  src="../assets/testimonials/teamwork.png"
                  alt="Teamwork Logo"
                  class="ms-auto"
                  width="50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="container bg-light py-5 rounded shadow-sm">
      <div id="contact" class="row align-items-center">
        <!-- Contact Details -->
        <div class="col-md-6 mb-4 mb-md-0">
          <p class="poppins-semibold">
          Ready to Collaborate? <br>
          Let's Turn Your Ideas into Art!
          </p>
              <div class="d-grid gap-2">
                <!-- Mobile Number -->
                <a href="tel:+9163816770330" class="btn btn-outline-dark w-100 text-decoration-none">
                  <i class="bi bi-telephone-fill me-2"></i> +91 63816770330
                </a>
                <!-- Mail -->
                <a href="mailto:desinguezhumalai2002@gmail.com" class="btn       btn-outline-dark w-100 text-decoration-none">
                  <i class="bi bi-envelope-fill me-2"></i> desinguezhumalai2002@gmail.com
                </a>
                <!-- Whatsapp -->
                <a href="https://wa.me/+916381670330" class="btn btn-outline-dark w-100 text-decoration-none">
                  <i class="bi bi-envelope-fill me-2"></i> Chat On Whatsapp
                </a>
              </div>

        </div>

        <!-- Contact Form -->
        <div id="letstalk" class="col-md-6">
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          id="name"
          class="form-control"
          v-model="form.name"
          placeholder="Enter your name"
          required
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          v-model="form.email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea
          id="message"
          class="form-control"
          rows="4"
          v-model="form.message"
          placeholder="Enter your message"
          required
        ></textarea>
      </div>
      <div class="d-flex justify-content-between">
        <button type="reset" class="btn btn-secondary">Cancel</button>
        <button type="submit" class="btn btn-dark" :disabled="loading">
          {{ loading ? "Sending..." : "Submit" }}
        </button>
      </div>
      <p v-if="successMessage" class="text-success mt-2">{{ successMessage }}</p>
      <p v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</p>
    </form>
  </div>
      </div>
    </section>
    <!-- Footer(Copyright) Section -->
     <footer class="container-fluid bg-light text-muted py-3 mt-4">
    <div class="row">
      <div class="col-12 text-center">
        <p class="mb-0">Copyright &copy; 2025 Desingu. All Rights Reserved. Developed by Arun.  </p>
      </div>
    </div>
    </footer>
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,800;0,900;1,300;1,800&display=swap');


blockquote {
  font-size: 1rem;
  color: #555;
}

.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.background-img {
  width: 545px;
  height: 479px;
  object-fit: cover;
  border-radius: 20px;
}

.overlay-gif1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 90px;
  height: auto;
  transform: translate(-50%, -50%);
}

.overlay-gif2 {
  position: absolute;
  top: 50%;
  right: 0;
  width: 90px;
  height: auto;
  transform: translate(50%, -50%);
}

.bg-gray {
  background: rgba(0, 0, 0, 0.03);
}

.z-index-dropdown {
  z-index: 1000;
}

.hover-bg-light:hover {
  background-color: #f8f9fa;
}

.hov-butt:hover{
  background: black;
  text-decoration-color: #ffffff;
}

.expertise-svg{
  width: 90px;
  height: auto;
}
@media (max-width: 991.98px) {
  .background-img {
    width: 100%;
    height: auto;
  }
  
  .sizing {
    width: 100%;
  }

  .navbar-collapse {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }
}

@media (max-width: 767.98px) {
  .justify-content-evenly {
    gap: 1rem;
  }
}

.poppins-nav {
  font-family: "Poppins", serif;
  font-size: 20px;
}
.poppins-regular {
  font-family: "Poppins", serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 29.7px;
  font-style: normal;
}
.poppins-title {
  font-family: "Poppins", serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 29.7px;
  font-style: normal;
}

.poppins-quaterbold {
  font-family: "Poppins", serif;
  font-weight: 500;
  font-size: 25px;
  font-style: normal;
}

.poppins-semibold {
  font-family: "Poppins", serif;
  font-weight: 600;
  font-size: 40px;
  font-style: normal;
}

.poppins-extrabold {
  font-family: "Poppins", serif;
  font-weight: 800;
  font-style: normal;
}

@media (min-width: 276px) { /* Small devices (sm) */
  .poppins-extrabold {
    font-size: 40px;
    line-height: 70px;
  }
}
@media (min-width: 576px) { /* Small devices (sm) */
  .poppins-extrabold {
    font-size: 60px;
    line-height: 100px;
  }
}

@media (min-width: 768px) { /* Medium devices (md) */
  .poppins-extrabold {
    font-size: 68px;
    line-height: 109.3px;
  }
}

@media (min-width: 992px) { /* Large devices (lg) */
  .poppins-extrabold {
    font-size: 70px;
    line-height: 105.3px;
  }
}

@media (min-width: 1200px) { /* Extra large devices (xl) */
  .poppins-extrabold {
    font-size: 78px;
    line-height: 105.3px;
  }
}

.poppins-light {
  font-family: "Poppins", serif;
  font-weight: 300;
  font-size: 15px;
  font-style: normal;
}

</style>

