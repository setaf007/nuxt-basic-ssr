// data/products.ts
export type Product = {
  id: string
  name: string
  brand: string
  price: number
  description: string
  image: string
}

export const products: Product[] = [
  {
    id: 'lipstick-1',
    name: 'Velvet Matte Lipstick',
    brand: 'Store Collection',
    price: 19,
    description: 'Highly pigmented matte lipstick with comfortable wear.',
    image: 'https://plus.unsplash.com/premium_photo-1677526496932-1b4bddeee554?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'serum-1',
    name: 'Glow Boost Vitamin C Serum',
    brand: 'Store Collection',
    price: 39,
    description: 'Brightening serum to improve dull and uneven skin tone.',
    image: 'https://images.unsplash.com/photo-1713768704571-6aeb0d0e5105?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'palette-1',
    name: 'Everyday Eyeshadow Palette',
    brand: 'Store Collection',
    price: 29,
    description: 'Neutral-toned eyeshadow palette for everyday looks.',
    image: 'https://images.unsplash.com/photo-1625094640367-05f84293fe42?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
]

export function findProductById(id: string) {
  return products.find(p => p.id === id)
}
