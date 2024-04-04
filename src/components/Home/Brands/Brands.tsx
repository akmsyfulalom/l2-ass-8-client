import Container from "@/components/ui/container";
import BrandCard from "./BrandCard";

const Brands = () => {
  return (
    <div className="mt-20">
      <Container>
        <div className="mb-16">
          <h1 className="text-2xl text-center font-bold">Top Brands</h1>
          <p className="text-slate-600 md:w-1/2 mx-auto mt-5  text-center">
          Curating an impressive lineup of top-tier brands, our website offers an unmatched selection of premium clothing labels.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 justify-items-center items-center gap-5">
          <BrandCard image="https://res.cloudinary.com/akmsyful/image/upload/v1712237906/ass-8/_1512076803_93_Nike-mobile_hkj2zn.jpg" title="Nike" />
          <BrandCard image="https://res.cloudinary.com/akmsyful/image/upload/v1712237977/ass-8/Adidas-logo_scihui.webp" title="adidas" />
          <BrandCard image="https://res.cloudinary.com/akmsyful/image/upload/v1712238047/ass-8/106616095_acztmq.webp" title="GICCi " />
          <BrandCard image="https://res.cloudinary.com/akmsyful/image/upload/v1712238115/ass-8/images_eprgj4.png" title="ZARA" />
          <BrandCard image="https://res.cloudinary.com/akmsyful/image/upload/v1712238158/ass-8/H_M-Logo.svg_myhxfp.png" title="H&M" />
          <BrandCard image="https://res.cloudinary.com/akmsyful/image/upload/v1712238204/ass-8/images_nvk0ah.png" title="Levi's" />
        </div>
      </Container>
    </div>
  );
};

export default Brands;
