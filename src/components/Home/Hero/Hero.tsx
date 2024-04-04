import Slider from "./Slider";
import Container from "@/components/ui/container";

const Banner = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover min-h-screen py-20  flex justify-center items-center text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/hero-image.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover",
      }}
    >
      <div className="flex justify-center items-center w-full">
        <Container>
          <div className=" mx-auto  flex justify-center items-center text-center flex-col">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-6">
              Welcome to AKM CLOTH
              <br />
              Shop Now for Cutting-Edge new fasion and Elevate Your cloth
              Experience!            </h2>
            <p className="md:text-xl text-white mb-10">
              
              Discover a curated collection of trendy fashion pieces, from casual wear to elegant ensembles, crafted to elevate your wardrobe.
            </p>
          </div>
          <div>
            <Slider />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
