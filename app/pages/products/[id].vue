<!-- pages/products/[id].vue -->
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { findProductById } from '~/data/products'

const route = useRoute()
const id = route.params.id as string
const product = findProductById(id)
</script>

<template>
  <section v-if="product">
    <div class="grid gap-6 md:grid-cols-2">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full rounded border"
      />

      <div>
        <h1 class="text-2xl font-bold mb-2">{{ product.name }}</h1>
        <p class="text-gray-600 mb-1">{{ product.brand }}</p>
        <p class="text-xl font-semibold mb-4">${{ product.price }}</p>
        <p class="mb-4">{{ product.description }}</p>

        <NuxtLink to="/products" class="text-blue-600 hover:underline">
          ← Back to products
        </NuxtLink>
      </div>
    </div>
  </section>

  <section v-else>
    <h1 class="text-xl font-bold mb-2">Product not found</h1>
    <NuxtLink to="/products" class="text-blue-600 hover:underline">
      ← Back to products
    </NuxtLink>
  </section>
</template>
