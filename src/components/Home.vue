<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      alert("Form submitted successfully!\n" + JSON.stringify(this.form));
      this.resetForm();
    },
    resetForm() {
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>

<template>
  <div>
    <!-- Navigation Bar Section -->
    <nav class="navbar navbar-expand-lg navbar-light p-4">
      <div class="container-fluid">
        <a href="#home" class="navbar-brand fw-bold">DESINGU</a>
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
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a href="#home" class="nav-link fw-bold">HOME</a></li>
            <li class="nav-item"><a href="#projects" class="nav-link fw-bold">PROJECT</a></li>
            <li class="nav-item"><a href="#testimonial" class="nav-link fw-bold">TESTIMONIAL</a></li>
            <li class="nav-item"><a href="#contact" class="nav-link fw-bold">CONTACT</a></li>
          </ul>
          <a href="#letstalk" class="btn btn-outline-dark rounded-pill">Let's Talk →</a>
        </div>
      </div>
    </nav>

    <!-- Home Section -->
    <div class="container py-5" id="home">
      <div class="row">
        <div class="col-12 col-lg-6 mb-4 mb-lg-0">
          <h1 class="display-3 text-dark fw-bold">
            Bold Designs<br />
            That Inspire and<br />
            Engage
          </h1>
          <p class="font-bold mb-auto">
            A creative designer skilled in graphic design,<br class="d-none d-lg-inline" />
            editing, and web page design. I help brands<br class="d-none d-lg-inline" />
            tell stories through impactful visuals and<br class="d-none d-lg-inline" />
            timeless designs. Let's bring your ideas to life!
          </p>
          <div class="mt-4">
            <a class="p-2 p-lg-3 text-decoration-none text-dark" href="https://www.instagram.com/desing17__/">Instagram ↗</a>
            <a class="p-2 p-lg-3 text-decoration-none text-dark" href="https://www.behance.net/desingu17">BEHANCE ↗</a>
            <a class="p-2 p-lg-3 text-decoration-none text-dark" href="https://www.linkedin.com/in/desingue/">LINKEDIN ↗</a>
            <a class="p-2 p-lg-3 text-decoration-none text-dark" href="###">RESUME ↗</a>
          </div>
        </div>
        <div class="col-lg-6 col-12 position-relative">
          <img
            src="../assets/Web Assests/Photo/Photo.png"
            alt="Design Inspiration"
            class="img-fluid background-img"
          />
          <img src="../assets/round-animation.gif" alt="Animation" class="overlay-gif1">
          <img src="../assets/round-animation.gif" alt="Animation" class="overlay-gif2">
        </div>
      </div>
    </div>

    <!-- Expertise Section -->
    <div class="p-4">
      <h2 class="justify-content-center d-flex">Expertise</h2>
      <div class="justify-content-evenly d-flex flex-wrap p-1">
        <div class="bg-gray border border-secondary rounded-1 p-2 d-flex align-items-center mb-3 mb-lg-0">
          <div>
            <img src="../assets/Web Assests/Icons/Icon - Graphic Design.svg" alt="" class="me-4">
          </div> 
          <div>
            <h5>Graphic Design</h5>
            <p class="text-secondary">Eye-catching logos,<br> branding materials, and <br> marketing collateral.</p>
          </div> 
        </div>
        <div class="bg-gray border border-secondary rounded-1 p-2 d-flex align-items-center mb-3 mb-lg-0">
          <div>
            <img src="../assets/Web Assests/Icons/Icon - Video Editing.svg" alt="" class="me-4">
          </div>
          <div>
            <h5>Video Editing</h5>
            <p class="text-secondary">Enhancing Your Vision <br> with Creative Video <br> Edits.</p>
          </div>  
        </div>
        <div class="bg-gray border border-secondary rounded-1 p-2 d-flex align-items-center">
          <div>
            <img src="../assets/Web Assests/Icons/Icon - Web Design.svg" alt="" class="me-4">
          </div>
          <div>
            <h5>Web Design</h5>
            <p class="text-secondary">Crafting Visually <br>Stunning, User-Centered <br> Websites that <br>Bring Brands to Life.</p>
          </div>  
        </div>
      </div>
    </div>

    <!-- Projects Section -->
    <div id="projects" class="container">  
      <div class="p-1 row align-items-center">
        <div class="col-6">
          <h2 class="font-bold sizing p-1">Discover my works</h2>
        </div>
        <div class="col-6 text-end me-9">
          <svg width="114" height="48" viewBox="0 0 114 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="113" height="47" rx="23.5" stroke="#030712"/>
            <path d="M28.7605 30.112C27.9819 30.112 27.2779 29.9787 26.6485 29.712C26.0299 29.4453 25.5392 29.0613 25.1765 28.56C24.8139 28.0587 24.6272 27.4667 24.6165 26.784H27.0165C27.0485 27.2427 27.2085 27.6053 27.4965 27.872C27.7952 28.1387 28.2005 28.272 28.7125 28.272C29.2352 28.272 29.6459 28.1493 29.9445 27.904C30.2432 27.648 30.3925 27.3173 30.3925 26.912C30.3925 26.5813 30.2912 26.3093 30.0885 26.096C29.8859 25.8827 29.6299 25.7173 29.3205 25.6C29.0219 25.472 28.6059 25.3333 28.0725 25.184C27.3472 24.9707 26.7552 24.7627 26.2965 24.56C25.8485 24.3467 25.4592 24.032 25.1285 23.616C24.8085 23.1893 24.6485 22.624 24.6485 21.92C24.6485 21.2587 24.8139 20.6827 25.1445 20.192C25.4752 19.7013 25.9392 19.328 26.5365 19.072C27.1339 18.8053 27.8165 18.672 28.5845 18.672C29.7365 18.672 30.6699 18.9547 31.3845 19.52C32.1099 20.0747 32.5099 20.8533 32.5845 21.856H30.1205C30.0992 21.472 29.9339 21.1573 29.6245 20.912C29.3259 20.656 28.9259 20.528 28.4245 20.528C27.9872 20.528 27.6352 20.64 27.3685 20.864C27.1125 21.088 26.9845 21.4133 26.9845 21.84C26.9845 22.1387 27.0805 22.3893 27.2725 22.592C27.4752 22.784 27.7205 22.944 28.0085 23.072C28.3072 23.1893 28.7232 23.328 29.2565 23.488C29.9819 23.7013 30.5739 23.9147 31.0325 24.128C31.4912 24.3413 31.8859 24.6613 32.2165 25.088C32.5472 25.5147 32.7125 26.0747 32.7125 26.768C32.7125 27.3653 32.5579 27.92 32.2485 28.432C31.9392 28.944 31.4859 29.3547 30.8885 29.664C30.2912 29.9627 29.5819 30.112 28.7605 30.112ZM38.9105 30.144C38.0572 30.144 37.2892 29.9573 36.6065 29.584C35.9239 29.2 35.3852 28.6613 34.9905 27.968C34.6065 27.2747 34.4145 26.4747 34.4145 25.568C34.4145 24.6613 34.6119 23.8613 35.0065 23.168C35.4119 22.4747 35.9612 21.9413 36.6545 21.568C37.3479 21.184 38.1212 20.992 38.9745 20.992C39.8279 20.992 40.6012 21.184 41.2945 21.568C41.9879 21.9413 42.5319 22.4747 42.9265 23.168C43.3319 23.8613 43.5345 24.6613 43.5345 25.568C43.5345 26.4747 43.3265 27.2747 42.9105 27.968C42.5052 28.6613 41.9505 29.2 41.2465 29.584C40.5532 29.9573 39.7745 30.144 38.9105 30.144ZM38.9105 28.192C39.3159 28.192 39.6945 28.096 40.0465 27.904C40.4092 27.7013 40.6972 27.4027 40.9105 27.008C41.1239 26.6133 41.2305 26.1333 41.2305 25.568C41.2305 24.7253 41.0065 24.08 40.5585 23.632C40.1212 23.1733 39.5825 22.944 38.9425 22.944C38.3025 22.944 37.7639 23.1733 37.3265 23.632C36.8999 24.08 36.6865 24.7253 36.6865 25.568C36.6865 26.4107 36.8945 27.0613 37.3105 27.52C37.7372 27.968 38.2705 28.192 38.9105 28.192ZM47.7377 22.512C48.0257 22.0427 48.399 21.6747 48.8577 21.408C49.327 21.1413 49.8603 21.008 50.4577 21.008V23.36H49.8657C49.1617 23.36 48.6283 23.5253 48.2657 23.856C47.9137 24.1867 47.7377 24.7627 47.7377 25.584V30H45.4977V21.136H47.7377V22.512ZM54.8944 22.976V27.264C54.8944 27.5627 54.9637 27.7813 55.1024 27.92C55.2517 28.048 55.4971 28.112 55.8384 28.112H56.8784V30H55.4704C53.5824 30 52.6384 29.0827 52.6384 27.248V22.976H51.5824V21.136H52.6384V18.944H54.8944V21.136H56.8784V22.976H54.8944Z" fill="#030712"/>
            <path d="M89.3156 19.5807H70.6844C70.45 19.5807 70.2252 19.4875 70.0594 19.3218C69.8937 19.156 69.8005 18.9312 69.8005 18.6968C69.8005 18.4624 69.8937 18.2376 70.0594 18.0719C70.2252 17.9061 70.45 17.813 70.6844 17.813H89.3156C89.55 17.813 89.7748 17.9061 89.9405 18.0719C90.1063 18.2376 90.1994 18.4624 90.1994 18.6968C90.1994 18.9312 90.1063 19.156 89.9405 19.3218C89.7748 19.4875 89.55 19.5807 89.3156 19.5807Z" fill="black"/>
            <path d="M82.8017 24.8839H70.6844C70.45 24.8839 70.2252 24.7908 70.0594 24.625C69.8937 24.4593 69.8005 24.2345 69.8005 24C69.8005 23.7656 69.8937 23.5408 70.0594 23.3751C70.2252 23.2093 70.45 23.1162 70.6844 23.1162H82.8017C83.0361 23.1162 83.2609 23.2093 83.4267 23.3751C83.5924 23.5408 83.6855 23.7656 83.6855 24C83.6855 24.2345 83.5924 24.4593 83.4267 24.625C83.2609 24.7908 83.0361 24.8839 82.8017 24.8839Z" fill="black"/>
            <path d="M76.2348 30.1866H70.6844C70.45 30.1866 70.2252 30.0935 70.0594 29.9277C69.8937 29.762 69.8005 29.5372 69.8005 29.3028C69.8005 29.0684 69.8937 28.8436 70.0594 28.6778C70.2252 28.5121 70.45 28.4189 70.6844 28.4189H76.2348C76.4692 28.4189 76.6941 28.5121 76.8598 28.6778C77.0256 28.8436 77.1187 29.0684 77.1187 29.3028C77.1187 29.5372 77.0256 29.762 76.8598 29.9277C76.6941 30.0935 76.4692 30.1866 76.2348 30.1866Z" fill="black"/>
          </svg>
        </div>
      </div>

      <!-- Project Items -->
      <div class="row align-items-center">
        <div class="col-12 col-lg-5">
          <img src="../assets/Web Assests/Chicky-fries.jpg" alt="" class="img-fluid">
        </div>
        <div class="col-12 col-lg-7 p-lg-4">
          <h6 style="color:rgba(205, 27, 39, 1)">GRAPHIC DESIGN</h6>
          <h3>Branding for XYZ Corp</h3>
          <p>A modern and memorable brand identity that not only captured attention but also significantly increased recognition by an impressive 30%.</p>
        </div>
      </div>
      <hr>
      <div class="row align-items-center">
        <div class="col-12 col-lg-5">
          <img src="../assets/Web Assests/Chicky-fries.jpg" alt="" class="img-fluid">
        </div>
        <div class="col-12 col-lg-7 p-lg-4">
          <h6 style="color:rgba(205, 27, 39, 1)">GRAPHIC DESIGN</h6>
          <h3>Branding for XYZ Corp</h3>
          <p>A modern and memorable brand identity that not only captured attention but also significantly increased recognition by an impressive 30%.</p>
        </div>
      </div>
      <hr>
      <div class="row align-items-center">
        <div class="col-12 col-lg-5">
          <img src="../assets/Web Assests/Chicky-fries.jpg" alt="" class="img-fluid">
        </div>
        <div class="col-12 col-lg-7 p-lg-4">
          <h6 style="color:rgba(205, 27, 39, 1)">GRAPHIC DESIGN</h6>
          <h3>Branding for XYZ Corp</h3>
          <p>A modern and memorable brand identity that not only captured attention but also significantly increased recognition by an impressive 30%.</p>
        </div>
      </div>
      <hr>
      <div class="row align-items-center">
        <div class="col-12 col-lg-5">
          <img src="../assets/Web Assests/Chicky-fries.jpg" alt="" class="img-fluid">
        </div>
        <div class="col-12 col-lg-7 p-lg-4">
          <h6 style="color:rgba(205, 27, 39, 1)">GRAPHIC DESIGN</h6>
          <h3>Branding for XYZ Corp</h3>
          <p>A modern and memorable brand identity that not only captured attention but also significantly increased recognition by an impressive 30%.</p>
        </div>
      </div>
      <hr>
      <div class="row align-items-center">
        <div class="col-12 col-lg-5">
          <img src="../assets/Web Assests/Chicky-fries.jpg" alt="" class="img-fluid">
        </div>
        <div class="col-12 col-lg-7 p-lg-4">
          <h6 style="color:rgba(205, 27, 39, 1)">GRAPHIC DESIGN</h6>
          <h3>Branding for XYZ Corp</h3>
          <p>A modern and memorable brand identity that not only captured attention but also significantly increased recognition by an impressive 30%.</p>
        </div>
      </div>
      <hr>
      </div>

      <!-- Testimonial section -->
  
  <div>
    <!-- Testimonials Section -->
    <section id="testimonial" class="container my-5">
      <h2 class="mb-5">Let's see what my clients say</h2>
      <div class="row">
        <!-- Testimonial Card 1 -->
        <div class="col-md-6 col-lg-6 mb-4">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <blockquote class="blockquote mb-4">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quisquam sit porro expedita enim! Tempora officiis eveniet natus officia quisquam nam nihil. Porro nemo culpa quod nostrum veritatis quae nulla!
                </p>
              </blockquote>
              <div class="d-flex align-items-center">
                <div class="me-3">
                  <img
                    src="../assets/Web Assests/testimonial-logo.png"
                    alt="Testimonial Logo"
                    class="rounded-circle"
                    width="50"
                    height="50"
                  />
                </div>
                <div>
                  <h5 class="card-title mb-0">Richard Jonas</h5>
                  <small class="text-muted">CEO of Teamwork</small>
                </div>
                <img
                  src="../assets/Web Assests/teamwork.png"
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
                  "I had the pleasure of working with Daniel on a recent
                  project, and I was blown away by their creativity and
                  attention to detail. I highly recommend Daniel for anyone
                  looking for a talented and professional designer."
                </p>
              </blockquote>
              <div class="d-flex align-items-center">
                <div class="me-3">
                  <img
                    src="../assets/Web Assests/testimonial-logo.png"
                    alt="Testimonial Logo"
                    class="rounded-circle"
                    width="50"
                    height="50"
                  />
                </div>
                <div>
                  <h5 class="card-title mb-0">Richard Jonas</h5>
                  <small class="text-muted">CEO of Teamwork</small>
                </div>
                <img
                  src="../assets/Web Assests/teamwork.png"
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
          <h2>Ready to Collaborate?</h2>
          <h2 class="">Let's Turn Your Ideas into Art!</h2>
          <div class="d-flex flex-column">
            <button class="btn btn-outline-dark mb-2">
              <i class="bi bi-telephone-fill me-2"></i> +91 63816 70330
            </button>
            <button class="btn btn-outline-dark">
              <i class="bi bi-envelope-fill me-2"></i> desinguezhumalai2002@gmail.com
            </button>
          </div>
        </div>

        <!-- Contact Form -->
        <div id="letstalk"  class="col-md-6">
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
              <button type="submit" class="btn btn-dark">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>

  </div>
</template>

<style scoped>
.font-bold {
  font-weight: 500;
  font-size: 25px;
}

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

.sizing {
  font-weight: 700;
  font-size: 25px;
  width: 1000px;
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
</style>

