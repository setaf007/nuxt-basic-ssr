<!-- pages/index.vue -->
<script setup lang="ts">
useHead({
  title: 'Home - Mini Store'
})
import { products } from '~/data/products'

const featured = products.slice(0, 2)
</script>

<template>
  <!-- Hero Section -->
  <section class="text-center py-32 bg-gradient-to-br from-store-red via-pink-500 to-purple-600 text-white rounded-3xl mb-20 overflow-hidden">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-5xl md:text-7xl font-black mb-8 leading-tight drop-shadow-2xl">
        Discover Your<br>Perfect Beauty Match
      </h1>
      <p class="text-2xl md:text-3xl mb-12 opacity-95 max-w-2xl mx-auto leading-relaxed">
        Explore our curated collection of premium beauty products handpicked for you
      </p>
      <NuxtLink 
        to="/products" 
        class="inline-block bg-white text-store-red px-12 py-6 rounded-3xl text-xl font-bold hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-2xl"
      >
        Shop All Products →
      </NuxtLink>
    </div>
  </section>

  <!-- Featured Products -->
  <section>
    <h2 class="text-4xl md:text-5xl font-black text-center mb-20 bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">
      Featured Products
    </h2>
    
    <div class="grid md:grid-cols-2 gap-10 mb-24">
      <div
        v-for="product in featured"
        :key="product.id"
        class="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-10 hover:shadow-2xl hover:-translate-y-4 hover:border-store-red/50 transition-all duration-700 overflow-hidden"
      >
        <div class="w-full h-80 bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl flex items-center justify-center p-8 mb-8 group-hover:scale-110 transition-all duration-700">
          <img :src="product.image" :alt="product.name" class="w-64 h-64 object-cover rounded-2xl shadow-2xl" />
        </div>
        
        <div class="text-center">
          <p class="inline-block bg-store-red/20 text-store-red font-bold px-6 py-2 rounded-full mb-6 text-sm uppercase tracking-wide">
            {{ product.brand }}
          </p>
          <h3 class="text-3xl font-black mb-6 group-hover:text-store-red transition-all duration-500 leading-tight">
            {{ product.name }}
          </h3>
          <p class="text-xl text-gray-600 mb-10 leading-relaxed max-w-md mx-auto">
            {{ product.description }}
          </p>
          <div class="flex items-center justify-between">
            <span class="text-4xl font-black text-store-black">${{ product.price }}</span>
            <NuxtLink 
              :to="`/products/${product.id}`"
              class="bg-gradient-to-r from-store-red to-pink-600 text-white px-10 py-4 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl"
            >
              View Details →
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center">
      <NuxtLink 
        to="/products"
        class="bg-store-black text-white px-16 py-6 rounded-3xl text-xl font-bold hover:bg-store-gray-900 hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-2xl"
      >
        Browse All Products →
      </NuxtLink>
    </div>
  </section>
</template>
