import React from 'react'
import Head from 'next/head'
import Navbar from '../../../components/header/Navbar'

const ShoeId = () => {
  return (
    <>
    <Head>
        <title>página dinamica</title>
    </Head>
        <Navbar />

        <main>
            <h1>Fila dinámico</h1>
        </main>
    </>
  )
}

export default ShoeId