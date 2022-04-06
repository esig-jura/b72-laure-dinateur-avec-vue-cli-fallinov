<template>
  <div id="app">
    <header>
      <!-- Logo du site -->
      <router-link class="logo" to="/">
        <div class="nom">Laure Dinateur</div>
        <div class="metier">Graphiste</div>
      </router-link><nav><!-- Menu de navigation -->
      <ul>
        <li>
          <router-link to="/">Accueil</router-link>
        </li>
        <li>
          <router-link to="/infos">Informations</router-link>
        </li>
        <li>
          <router-link to="/contact">Me contacter</router-link>
        </li>
      </ul>
    </nav>
    </header>

    <router-view/>
    <!-- pied de page -->
    <footer>
      <nav>
        <ul>
          <li>
            <a href="https://twitter.com/lauredi">
              <img src="img/twitter-draw.png" alt="Twitter">
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/laure.dinateur">
              <img src="img/facebook-draw.png" alt="Facebook">
            </a>
          </li>
        </ul>
      </nav>
      <div>&copy;2021 Laure Dinateur</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LaureDinateur',
};
</script>

<style>

</style>
