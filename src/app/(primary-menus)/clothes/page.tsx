import ProductCard from "@/components/shared/ProductCard";
import ProoductFilter from "@/components/products/products-filter";
import Container from "@/components/ui/container";

const AllClothesPage = async ({
  searchParams,
}: {
  searchParams: { brand: string };
}) => {
  let brand = "";
  let data = [];

  if (searchParams.brand) {
    brand = searchParams.brand;
    const res = await fetch(
      `https://l2-ass-8-server.vercel.app/api/v1/cloth/brand/${brand}`,
      {
        cache: "no-store",
      }
    );
    data = await res.json();
  } else {
    const res = await fetch("https://l2-ass-8-server.vercel.app/api/v1/cloth", {
      cache: "no-store",
    });
    data = await res.json();
    brand = "All";
  }

  return (
    <div className="mt-32">
      <Container>
        <h1 className="text-2xl font-bold mb-4">
          Our Collection Of {brand} Cloth
        </h1>
        <p className=" mb-14">
          Step into the world of fashion with AKM Cloth, where style meets
          comfort and quality. Our curated collection offers a wide range of
          trendy and timeless clothing pieces for every occasion. From casual
          wear to formal attire, we strive to provide clothing that reflects
          your unique personality and enhances your sense of style. Experience
          the joy of shopping with AKM Cloth, where fashion meets affordability
          and customer satisfaction is our top priority.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-8 items-start gap-5">
          <div className="lg:col-span-2">
            <ProoductFilter />
          </div>
          <div className="lg:col-span-6">
            {data?.data?.length === 0 ? (
              <h1 className="text-2xl font-bold text-center">
                No Cloth Found For {brand}
              </h1>
            ) : (
              <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center items-start">
                {data?.data?.map((cloth: any) => (
                  <ProductCard key={cloth?._id} cloth={cloth} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllClothesPage;
