import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import SliderProductCard from "./SliderProductCard";

const Slider = async () => {
  const res = await fetch("https://l2-ass-8-server.vercel.app/api/v1/cloth", {
    next: {
      revalidate: 30,
    },
  });
  const clothData = await res.json();
  const clothSlider = clothData?.data?.sort(
    (a: any, b: any) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-4">
        {clothSlider.slice(0, 10).map((cloth: any) => (
          <CarouselItem key={cloth._id} className="md:basis-1/2 lg:basis-1/3">
            <SliderProductCard cloth={cloth} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Slider;
