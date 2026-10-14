<template>
  <TheHeader />
  <div class="container-xl py-3">
    <TheBreadcrumb />

    <div class="border p-4 mb-4 mx-2">
      <h3 class="fw-bold">ALL</h3>
      <p class="fs-6">
        Explore our complete range of sports products and equipment now! Decathlon Taiwan offers
        thousands of items across more than 80 sports, including hiking, camping, running, and
        fitness. Shop now!
      </p>
    </div>
    <div class="row px-3">
      <!-- 左側篩選 -->

      <aside class="col-lg-2 mb-4 mb-lg-0">
        <div class="sticky-top" style="top: 20px">
          <div class="d-flex align-items-center mb-3">
            <i class="bi bi-filter-circle fs-4"></i>
            <p class="mx-2 fs-4 fw-semibold mb-0">Filter</p>
          </div>
          <ul class="list-unstyled mx-0 me-2">
            <li class="border border-lg-0 p-2 d-inline-block d-lg-block me-2 mb-2mxlg-0">
              <a href="#" class="text-dark text-decoration-none d-inline-block d-lg-block">All</a>
            </li>
            <li class="border border-lg-0 p-2 d-inline-block d-lg-block me-2 mb-2 m-lg-0">
              <a href="#" class="text-dark text-decoration-none d-inline-block d-lg-block">Shoes</a>
            </li>
            <li class="border border-lg-0 p-2 d-inline-block d-lg-block me-2 mb-2 m-lg-0">
              <a href="#" class="text-dark text-decoration-none d-inline-block d-lg-block"
                >Apparel</a
              >
            </li>
            <li class="border border-lg-0 p-2 d-inline-block d-lg-block me-2 mb-2 m-lg-0">
              <a href="#" class="text-dark text-decoration-none d-inline-block d-lg-block"
                >Accessories</a
              >
            </li>
            <li class="border border-lg-0 p-2 d-inline-block d-lg-block me-2 mb-2 m-lg-0">
              <a href="#" class="text-dark text-decoration-none d-inline-block d-lg-block"
                >Accessories</a
              >
            </li>
            <li class="border border-lg-0 p-2 d-inline-block d-lg-block me-2 mb-2 m-lg-0">
              <a href="#" class="text-dark text-decoration-none d-inline-block d-lg-block"
                >Accessories</a
              >
            </li>
          </ul>
        </div>
      </aside>

      <!-- 右側商品列表 -->
      <main class="products col-lg-10 mb-4 px-lg-0">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <span>41 items</span>
          <div class="d-flex justify-content-center align-items-center">
            <span class="mx-2">Sort by:</span>
            <select class="form-select w-auto rounded-0">
              <option selected>select</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>
        <div class="row px-0 g-3 gy-4 mb-4 mb-lg-6">
          <div class="col-6 col-md-4 col-lg-3" v-for="item in products" :key="item.id">
            <ProductCard :product="item" />
          </div>
        </div>
        <ThePagination />
      </main>
    </div>
  </div>
  <TheFooter />
</template>

<script>
import photoImg from "@/assets/images/photoImg.jpg";

import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import ProductCard from "@/components/ProductCard.vue";
import ThePagination from "@/components/ui/ThePagination.vue";
import TheBreadcrumb from "@/components/ui/TheBreadcrumb.vue";

export default {
  components: { TheHeader, TheFooter, ProductCard, ThePagination, TheBreadcrumb },
  data() {
    return {
      photoImg,
      products: [
        {
          id: 1,
          title: "Ultra Boost Running Shoes Pro Edition",
          text: "Engineered for long-distance runners, featuring ultra-lightweight cushioning technology that delivers exceptional rebound and comfort across all surfaces.",
          price: 3200,
          origin_price: 4500,
          category: "Ultra Boost Running",
          imageUrl: photoImg,
        },
        {
          id: 2,
          title: "Lightweight Sport Performance Jacket",
          text: "A breathable, wind-resistant jacket with water-repellent fabric, designed to keep you performing at your best whether on a morning run or intense training session.",
          price: 2800,
          origin_price: 3800,
          category: "Apparel",
          imageUrl: photoImg,
        },
        {
          id: 3,
          title: "High Compression Training Tights",
          text: "High-elasticity compression design promotes blood circulation, reduces muscle fatigue, and enhances both athletic performance and post-workout recovery.",
          price: 1500,
          origin_price: 2000,
          category: "Apparel",
          imageUrl: photoImg,
        },
        {
          id: 4,
          title: "All Terrain Trail Running Shoes",
          text: "Reinforced grip outsole adapts to gravel, mud, and rugged terrain, keeping your stride stable and confident on every trail running adventure.",
          price: 4200,
          origin_price: 5500,
          category: "Shoes",
          imageUrl: photoImg,
        },
        {
          id: 5,
          title: "Waterproof Multi-Pocket Sports Bag",
          text: "Durable waterproof material paired with a versatile multi-pocket layout, making it easy to organize your gear for the gym, trails, or any outdoor activity.",
          price: 1800,
          origin_price: 2500,
          category: "Accessories",
          imageUrl: photoImg,
        },
        {
          id: 6,
          title: "Breathable UV Protection Running Cap",
          text: "Quick-dry, UV-blocking fabric shields you from the sun while keeping you cool and comfortable during outdoor workouts in any weather condition.",
          price: 850,
          origin_price: 1200,
          category: "Accessories",
          imageUrl: photoImg,
        },
      ],
    };
  },
};
</script>
