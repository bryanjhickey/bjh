<template>
  <header class="border-red border-t-40">
    <nav class="container flex flex-wrap justify-center md:justify-between pt-12 pb-6 md:pt-24">
      <div class="flex items-center w-full">
        <a href="/" class="ml-auto mr-auto mb-12">
          <img src="@/assets/img/logo.svg" alt="Bryan J. Hickey Logo" class="w-3/4 ml-auto mr-auto" />
        </a>
      </div>
      <ul class="ml-auto mr-auto text-center uppercase tracking-wide font-black flex items-center">
        <li>
          <g-link
            to="/"
            class="mr-2 md:mr-4 text-gray-800 px-2 md:px-4 pb-2 border-b-4 border-white hover:text-red hover:border-red"
            exact
          >Home</g-link>
        </li>
        <li>
          <g-link
            to="/resume"
            class="mr-2 md:mr-4 text-gray-800 px-2 md:px-4 pb-2 border-b-4 border-white hover:text-red hover:border-red"
          >Resumé</g-link>
        </li>
        <li>
          <g-link
            to="/uses"
            class="mr-2 md:mr-4 text-gray-800 px-2 md:px-4 pb-2 border-b-4 border-white hover:text-red hover:border-red"
          >Uses</g-link>
        </li>
        <!-- <li>
          <g-link
              to="/articles"
              class="mr-2 md:mr-4 text-gray-800 px-2 md:px-4 pb-2 border-b-4 border-white hover:text-red hover:border-red"
          >Articles</g-link>
        </li>-->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "GlobalHeader"
};
</script>
<style scoped>
.active {
  @apply text-red;
  @apply border-red;
}
</style>

