<!-- pages/products/[id].vue -->
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { findProductById } from '~/data/products'

const config = useRuntimeConfig()
const route = useRoute()
const id = route.params.id as string
const product = findProductById(id)

const canonical = computed(() =>
  new URL(route.fullPath || `/products/${id}`, config.public.siteUrl).toString()
)

useSeoMeta({
  title: product ? product.name : 'Product',
  description: product
    ? product.description
    : 'Product detail in Mini Store demo.',
  ogTitle: product ? product.name : 'Product',
  ogDescription: product ? product.description : '',
  ogUrl: canonical.value,
  ogType: 'article',
})

useHead({
  link: [{ rel: 'canonical', href: canonical.value }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product?.name || 'Product',
      description: product?.description || '',
      brand: { '@type': 'Brand', name: product?.brand || '' },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'SGD',
        price: product?.price || 0,
        availability: 'https://schema.org/InStock'
      }
    })
  }]
})
</script>

<template>
  <div v-if="product" class="max-w-7xl mx-auto">
    <!-- Breadcrumb -->
    <nav class="flex items-center text-sm text-gray-500 mb-16 bg-gray-50 p-4 rounded-2xl">
      <NuxtLink to="/" class="hover:text-store-red font-medium">Home</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/products" class="hover:text-store-red font-medium">Products</NuxtLink>
      <span class="mx-2">/</span>
      <span class="font-semibold text-gray-900">{{ product.name }}</span>
    </nav>

    <div class="grid lg:grid-cols-2 gap-16 items-start">
      <!-- Product Gallery -->
      <div class="sticky top-24">
        <div class="w-full aspect-square bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-4xl p-12 flex items-center justify-center shadow-2xl">
          <img :src="product.image" :alt="`${product.name}, ${product.brand} beauty product`" class="w-96 h-96 object-cover rounded-3xl shadow-2xl max-w-full" />
        </div>
      </div>

      <!-- Product Details -->
      <div>
        <div class="bg-gradient-to-r from-store-red/5 to-pink-50 p-12 rounded-4xl mb-12 border border-store-red/20">
          <p class="inline-block bg-store-red text-white font-bold px-6 py-2 rounded-full mb-8 text-sm uppercase tracking-wide">
            {{ product.brand }}
          </p>
          <h1 class="text-5xl lg:text-6xl font-black mb-8 leading-tight bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-clip-text text-transparent">
            {{ product.name }}
          </h1>
          <div class="text-6xl lg:text-7xl font-black text-store-red mb-12">${{ product.price }}</div>
        </div>

        <div class="prose prose-xl max-w-none mb-16 p-8 bg-gray-50 rounded-3xl">
          <p class="text-2xl leading-relaxed">{{ product.description }}</p>
        </div>

        <div class="flex space-x-6">
          <NuxtLink 
            to="/products"
            class="flex-1 bg-store-black text-white py-6 px-12 rounded-3xl font-bold text-lg text-center hover:bg-store-gray-900 hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-2xl"
          >
            ← Back to Products
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="min-h-screen flex items-center justify-center py-20">
    <div class="text-center max-w-md">
      <h1 class="text-4xl font-black text-gray-900 mb-6">Product Not Found</h1>
      <p class="text-xl text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
      <NuxtLink 
        to="/products"
        class="bg-store-red text-white px-10 py-4 rounded-3xl font-bold hover:bg-opacity-90 hover:shadow-2xl transition-all duration-300"
      >
        ← Browse Products
      </NuxtLink>
    </div>
  </div>
</template>

