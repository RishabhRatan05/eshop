import Cover from "../assets/cover1.jpg"
import Cover2 from "../assets/cover2.avif"

const Carousel = () => {
  return (
    <div className="w-full flex overflow-x bg-pink-300">
      <img
        src={Cover}
        width={100}
        height={100}
        alt="cover"
        className="w-screen h-[40vh] object-cover"
      />
      <img
        src={Cover2}
        width={100}
        height={100}
        alt="cover"
        className="w-full h-[40vh] object-cover"
      />
    </div>
  )
}

export default Carousel
