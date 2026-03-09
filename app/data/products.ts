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
    brand: 'Sephora Collection',
    price: 19,
    description: 'Highly pigmented matte lipstick with comfortable wear.',
    image: 'https://via.placeholder.com/400x300?text=Lipstick'
  },
  {
    id: 'serum-1',
    name: 'Glow Boost Vitamin C Serum',
    brand: 'Sephora Collection',
    price: 39,
    description: 'Brightening serum to improve dull and uneven skin tone.',
    image: 'https://via.placeholder.com/400x300?text=Serum'
  },
  {
    id: 'palette-1',
    name: 'Everyday Eyeshadow Palette',
    brand: 'Sephora Collection',
    price: 29,
    description: 'Neutral-toned eyeshadow palette for everyday looks.',
    image: 'https://via.placeholder.com/400x300?text=Palette'
  }
]

export function findProductById(id: string) {
  return products.find(p => p.id === id)
}
