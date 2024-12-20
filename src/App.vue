<script setup></script>

<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/filmes">Filmes</router-link>
      <router-link to="/tv">Programas de TV</router-link>
    </nav>
 
    <button class="login-button">Entrar</button>
  </header>


  <main>
    <router-view />


  </main>

</template>

<style scoped>

header {
  display: flex;
  background-color: rgb(0, 0, 0);
  color: white;
  font-size: 1.3rem;
  padding: 0 2rem;
  height: 10vh;
}

nav {
  column-gap: 2rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 2rem; 
}

nav a {
  
  text-decoration: none;
  color: #ffffff;
  border: #030303;
  padding: 1.4rem;
}



button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 2rem;  
  cursor: pointer;
  font-size: 1.1rem;  background-color: rgba(0, 0, 0, 0.432);
}



.login-button {
  
  font-weight: bold;
  color: white;
  border: 2px solid white;
  border-radius: 4px;
  padding: 10px 20px;
  text-transform: uppercase;
  transition: background-color 0.3s, color 0.3s;
  margin: 10px;
  }

  .login-button:hover {
  border: 2px solid #ffe817;
  background-color: #ffe817;
  color: black;
  }
    
</style>
