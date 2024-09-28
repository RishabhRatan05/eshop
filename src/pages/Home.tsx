import React from "react"
import Navbar from "../components/Navbar"
import Carousel from "../components/Carousel"

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <main>
        <Carousel />
        <section>
          <h1>Latest Products</h1>
        </section>
      </main>
    </div>
  )
}

export default Home
