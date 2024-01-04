<template>
  <nav class="navbar navbar-expand-lg bg-body-light navbar-light mt-3 mb-3">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <span style="font-weight: 600">E-Commerce</span>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Us</router-link>
          </li>
        </ul>
        <!-- Button trigger modal login -->
        <button
          v-if="!isUserLoggedIn"
          type="button"
          style="border: none; background-color: transparent; color: blue"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Login
        </button>

        <div v-else>
          <button
            type="button"
            style="border: none; background-color: transparent; color: blue"
            @click="logoutButton"
          >
            Logout
          </button>
        </div>

        <!-- Button trigger modal Register -->
        <button
          v-show="isUserLoggedIn === false"
          type="button"
          style="border: none; background-color: transparent; color: blue"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
        >
          Register
        </button>

        <!-- <div v-else>
          <button
            type="button"
            style="border: none; background-color: transparent; color: blue"
            @click="logoutButton"
          >
            Logout
          </button>
        </div> -->

        <!-- Modal login-->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Login</h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h4 class="text-center mb-4">Login to your account</h4>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div class="d-grid mt-4">
                  <button
                    type="button"
                    class="btn btn-primary mt-3"
                    @click="loginButton"
                  >
                    Login
                  </button>
                  <p class="text-center mt-3">Don't have an account? <a href="#">Register</a></p>
                </div>
                <hr class="mt-4 mb-3" />
                <div class="d-grid">
                  <button type="button" class="btn btn-outline-primary mt-3">
                    Login with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal Register-->
        <div
          class="modal fade"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel2"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel2">
                  Register
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h4 class="text-center mb-4">
                  Register to create your account
                </h4>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Email"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingConfirmPassword"
                    placeholder="Confirm Password"
                  />
                  <label for="floatingConfirmPassword">Confirm Password</label>
                </div>
                <div class="d-grid mt-4">
                  <button
                    type="button"
                    class="btn btn-primary mt-3"
                    @click="RegisterButton"
                  >
                    Register
                  </button>
                </div>
                <hr class="mt-4 mb-3" />
                <div class="d-grid">
                  <button type="button" class="btn btn-outline-primary mt-3">
                    Register with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  data() {
    return {
      title: "Navbar",
      isUserLoggedIn: false,
      isUserRegistered: false,
      loginUser: [
        {
          email: "dummy@gmail.com",
          password: "123456",
        },
      ],
    };
  },

  methods: {
    loginButton() {
      const email = document.getElementById("floatingInput").value;
      const password = document.getElementById("floatingPassword").value;
      
      if (email === this.loginUser[0].email && password === this.loginUser[0].password) {
        alert("Login Success");
        this.$router.push("/");
        this.isUserLoggedIn = true;
      } else {
        alert("Login Failed");
      }
    },

    // registerButton() {
    //   //button disable
    //   const email = document.getElementById("floatingInput").value;
    //   const password = document.getElementById("floatingPassword").value;
    //   const confirmPassword = document.getElementById("floatingConfirmPassword").value;

    //   if (email === "" || password === "" || confirmPassword === "") {
    //     alert("Please fill all the form");
    //   } else if (password !== confirmPassword) {
    //     alert("Password not match");
    //   } else {
    //     alert("Register Success");
    //     this.$router.push("/");
    //     this.isUserRegistered = true;
    //   }
    // }

    logoutButton() {
      alert("Logout Success");
      this.$router.push("/");
      this.isUserLoggedIn = false;
    },
  },
};
</script>

<style></style>
