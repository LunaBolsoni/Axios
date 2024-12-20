<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <img class="background" src="../img/crime.jpg" alt="">


  <main>
    <div class="content">
      <h1>"Prepare a pipoca e venha viver a magia do cinema! 🎬✨"</h1>
      <p>Assista onde quiser. Cancele quando quiser.</p>
      <button class="start-button" @click="$router.push('/filmes')">Começar sessão</button>
    </div>
  </main>

</template>

<style>

.background {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  color: rgb(240, 240, 240);
}

.content {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  height: 100vh;
  color: white;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.start-button {
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  border: none;
  border-radius: 4px;
  padding: 15px 30px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s;
}

.start-button:hover {
  background-color: #ffe817;
}
</style>
<!DOCTYPE html>
