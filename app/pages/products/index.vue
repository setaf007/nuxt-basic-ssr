<!-- pages/products/index.vue -->
 <script setup lang="ts">
import { products } from '~/data/products'
</script>

<template>
  <section>
    <h1 class="text-2xl font-bold mb-2">Products</h1>
    <p class="mb-4">Static mock product list rendered on the server.</p>

    <div class="grid gap-4 md:grid-cols-3">
      <article
        v-for="product in products"
        :key="product.id"
        class="border rounded p-3"
      >
        <h2 class="font-semibold mb-1">
          <NuxtLink :to="`/products/${product.id}`">
            {{ product.name }}
          </NuxtLink>
        </h2>
        <p class="text-sm text-gray-600 mb-1">{{ product.brand }}</p>
        <p class="font-medium mb-2">${{ product.price }}</p>
        <NuxtLink :to="`/products/${product.id}`" class="text-blue-600 text-sm hover:underline">
          View details
        </NuxtLink>
      </article>
    </div>
  </section>
</template>