<template>
    <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Inicio de Sesion</h2>
              <p class="text-white-50 mb-5">Por favor ingrese su Usuario y Contraseña</p>

              <form  v-on:submit.prevent="login">
              <div class="form-outline form-white mb-3">
                <label class="form-label" for="typeEmailX" id="usuario">Correo</label>
                <input type="email" id="typeEmailX"  class="form-control  form-control-lg form-floating" placeholder="Correo" v-model="usuario"/>
              </div>
              <div class="form-outline form-white mb-3">
                <label class="form-label" for="typePasswordX" id="password" >Contraseña</label>
                <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder="Contraseña" v-model="password"/>
              </div>
              
              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">¿Olvido su contraseña?</a></p>
              
              <button class="btn-lg px-5 btn btn-success" type="submit">Inicio de Sesion</button>
              </form>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>  
            </div>
            <div>
              <p class="mb-0">¿No tienes cuenta? <a href="#!" class="text-white-50 fw-bold">Registrate</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
  export default{
    name: 'Home_login',
    components:{

    },
    data(){
      return{
        usuario: '',
        password: '',
        error: false,
        error_msg: ''
      }
    },
    methods:{
      login(){
        console.log(this.usuario)
        console.log(this.password)
      }
    }
  }
</script>

<style scoped>
.gradient-custom {
/* fallback for old browsers */
background: #6a11cb;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgb(51, 41, 61), rgba(37, 117, 252, 1))
}
</style>
