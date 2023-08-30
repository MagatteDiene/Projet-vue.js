<template>
  <div class="page2">
    <h1>Page 2</h1> <br>
    <p>Prénom saisi a la page 1 : {{  prenom }}</p>
    <p>Nom saisi a la page 1 : {{ nom }}</p>
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
  created() {
    this.prenom = localStorage.getItem('prenom');
    this.nom = localStorage.getItem('nom');
  },
};

</script>

<style>
   @media (min-width: 1024px) {
  .page2 {
    min-height: 60vh;
    text-align: center;
    position: relative;
    top: 80px;
  }
}
</style>

