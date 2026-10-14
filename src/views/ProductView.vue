<template>
  <TheHeader />
  <div class="container-xl py-2">
    <ul class="path">
      <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
      <li class="breadcrumb-item"><RouterLink to="/products">Products</RouterLink></li>
      <li class="breadcrumb-item active" aria-current="page">Shoes</li>
    </ul>
    <div class="row">
      <!-- 左側篩選 -->
      <aside class="col-lg-3 mb-4 mb-lg-0">
        <ul class="list-unstyled">
          <li class="mb-2">
            <a href="#" class="text-dark text-decoration-none">All</a>
          </li>
          <li class="mb-2">
            <a href="#" class="text-dark text-decoration-none">Shoes</a>
          </li>
          <li class="mb-2">
            <a href="#" class="text-dark text-decoration-none">Apparel</a>
          </li>
          <li class="mb-2">
            <a href="#" class="text-dark text-decoration-none">Accessories</a>
          </li>
        </ul>
      </aside>

      <!-- 右側商品列表 -->
      <main class="col-lg-9">
        <div class="row row-cols-2 row-cols-md-3 g-4">商品</div>
      </main>
    </div>
  </div>
  <TheFooter />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: { TheHeader, TheFooter },
};
</script>
