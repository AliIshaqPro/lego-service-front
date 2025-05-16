import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useRouter } from "@/lib/use-router";
import AOS from "aos";

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const router = useRouter();

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      setSelectedIndex(index);
    },
    [emblaApi, setSelectedIndex]
  );

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi, setScrollSnaps]);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const slides = [
    {
      title: "Build Your Digital Future",
      subtitle: "Create Stunning Digital Experiences Without Limits",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2073&auto=format&fit=crop",
      cta: "Explore Services",
      url: "/services",
      align: "left",
    },
    {
      title: "Custom Solutions",
      subtitle: "Tailored Digital Services To Grow Your Business",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
      cta: "Start Building",
      url: "/builder",
      align: "right",
    },
    {
      title: "Enterprise Technology",
      subtitle: "State-of-the-art Solutions For Business Growth",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop",
      cta: "View Packages",
      url: "/services",
      align: "center",
    }
  ];

  const renderSlideContent = (slide: any) => {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-8 md:p-12 lg:p-24">
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover object-center rounded-xl shadow-lg"
        />
        <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
        <div className={`relative z-10 text-white text-center md:text-${slide.align} container`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
          <p className="text-lg md:text-xl mb-8">{slide.subtitle}</p>
          <Link to={slide.url}>
            <Button size="lg" className="gap-2">
              {slide.cta}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section className="overflow-hidden rounded-xl shadow-2xl">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div className="embla__slide relative min-w-full" key={index}>
              {renderSlideContent(slide)}
            </div>
          ))}
        </div>
      </div>

      <div className="container flex justify-between items-center p-4">
        <Button variant="outline" size="icon" onClick={onPrevButtonClick}>
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`rounded-full w-3 h-3 transition-colors duration-300 ${
                index === selectedIndex ? "bg-primary" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
        <Button variant="outline" size="icon" onClick={onNextButtonClick}>
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
