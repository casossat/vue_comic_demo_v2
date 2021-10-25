<template>
  <main-container>
    <main-navbar />
    <main-content>
      <router-view />
    </main-content>
  </main-container>
</template>

<script>
import MainNavbar from '@/components/gridLayout/MainNavbar.vue';
import MainContent from '@/components/gridLayout/MainContent.vue';
import MainContainer from '@/components/gridLayout/MainContainer.vue';

export default {
  components: {
    MainNavbar,
    MainContent,
    MainContainer,
  },
};
</script>
