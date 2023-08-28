<template>
  <div class="page1">
    <h1>Page 1</h1> <br>
    <h2>Veuillez saisir votre prénom et nom</h2>
    <input v-model="prenom" placeholder="Prénom"><br>
    <input v-model="nom" placeholder="Nom"><br>
    <button @click="envoyerVersPage2">Envoyer</button>
  </div>
</template>


<script>

export default {
  data() {
    return {
      prenom: '',
      nom: '',
    };
  },
  methods: {
    envoyerVersPage2() {
      localStorage.setItem('prenom', this.prenom);
      localStorage.setItem('nom', this.nom);
      this.$router.push({ path: '/about' });
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .page1 {
    min-height: 60vh;
    text-align: center;
    position: relative;
    top: 80px;
  }
}
.page1 input{
  background: transparent;
  border: none;
  position: relative;
  top: 20px;
  color: white;
  margin: 5px;
}
.page1 button{
    background-color: hsla(160, 100%, 37%, 1);
    color: black;
    border-radius: 20px;
    position: relative;
    top: 30px;
    left: 200px;
    padding: 10px 20px;
    font-weight: 600;
    text-decoration: none;
    box-shadow: 0 0 10px black;
    transition: transform 0.3s;
    cursor: pointer;

}
.page1 button:hover{
    color: white;
    transition: .5 ease-in-out;
    transform: scale(1.2);

}
</style>