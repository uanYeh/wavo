<template>
  <TheHeader />
  <div class="container-xl py-3">
    <TheBreadcrumb />
    <h2 class="text-center mb-3 mb-lg-4 fw-bold">News</h2>
    <main class="mb-4 mb-lg-6">
      <img :src="aboutBanner" class="img-fluid w-100" />
    </main>
  </div>
  <TheFooter />
</template>

<script>
import aboutBanner from "@/assets/images/aboutBanner.jpg";

import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheBreadcrumb from "@/components/ui/TheBreadcrumb.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheBreadcrumb,
  },
  data() {
    return {
      aboutBanner,
    };
  },
};
</script>
