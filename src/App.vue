<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> | -->
    <router-link to="/captureFabric">captureFabric</router-link> |
    <router-link to="/captureFabricTest">captureFabricTest</router-link> |
    <router-link to="/facingMode">facingMode</router-link> |
    <router-link to="/landing">LandingPage</router-link> | 
    <router-link to="/edit">EditPage</router-link>
  </div>
  <router-view/>
</template>

<script>
import { reactive, useStore, onMounted } from "@/helper/vue.js";

export default {
  name: 'Home',
  setup() {
    const { state, commit, dispatch } = useStore();
    const data = reactive({});

    const methods = {};

    onMounted(() => {
      dispatch('init')
    });

    return {
      data,
			methods,
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
