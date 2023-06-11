import Banner from '@/components/Banner'
import ProductFeed from '@/components/ProductFeed'
import Header from '@/components/navbar/Header'
import Head from 'next/head'
import React from 'react'

interface ProductProps {
  products: any
}

export default function Home({
  products,
}: ProductProps) {
  return (
   <div className='bg-gray-200 '>
    <Head>
      <title>Home</title>
    </Head>

    {/* header */}
    <Header/>

    <main className='max-w-screen-2xl mx-auto'>
      {/* banner */}
      <Banner/>

      {/* product feed */}

      <ProductFeed products={
        products
      }/>
    </main>
   </div>
  )
}


export async function getServerSideProps() {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  )

  return {
    props: {
      products,
    },
  }
}