<!-- pages/products/index.vue -->
<script setup lang="ts">
import { products } from '~/data/products'
</script>

<template>
  <div>
    <!-- Header -->
    <div class="flex items-center justify-between mb-20">
      <div class="flex items-center space-x-4">
        <h1 class="text-5xl font-black bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">
          All Products
        </h1>
        <div class="px-6 py-3 bg-store-red/10 text-store-red rounded-2xl font-bold text-lg">
          {{ products.length }} items
        </div>
      </div>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
      <div
        v-for="product in products"
        :key="product.id"
        class="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-3 hover:border-store-red/50 transition-all duration-500 overflow-hidden hover:bg-white"
      >
        <div class="w-full h-64 bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-2xl flex items-center justify-center p-6 mb-6 group-hover:scale-110 transition-all duration-500">
          <img :src="product.image" :alt="product.name" class="w-40 h-40 object-cover rounded-xl shadow-xl" />
        </div>
        
        <div>
          <p class="inline-block bg-store-red/20 text-store-red font-semibold px-4 py-1.5 rounded-full mb-4 text-sm uppercase tracking-wide">
            {{ product.brand }}
          </p>
          <h3 class="font-black text-2xl mb-4 leading-tight group-hover:text-store-red transition-all duration-300 line-clamp-2">
            {{ product.name }}
          </h3>
          <p class="text-gray-600 mb-8 text-lg leading-relaxed line-clamp-3">
            {{ product.description }}
          </p>
          
          <div class="flex items-center justify-between pt-6 border-t border-gray-100">
            <span class="text-3xl font-black text-store-black">${{ product.price }}</span>
            <NuxtLink 
              :to="`/products/${product.id}`"
              class="bg-gradient-to-r from-store-red to-pink-600 text-white px-8 py-3 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg text-lg"
            >
              View Details
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
