import * as React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TimerIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

function CustomCarousel({ items }) {
  return (
    <div className="relative w-full">
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2"
            >
              <Card className="w-full shadow-md rounded-lg flex flex-col h-full">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                )}
                <CardHeader>
                  <CardTitle className="text-lg text-center">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  {item.description && (
                    <p className="text-gray-600 text-sm text-center">{item.description}</p>
                  )}

                  {/* Exibe preço e duração apenas se existirem */}
                  <div className="flex justify-between items-center mt-4">
                    {item.price && (
                      <span className="text-lg font-bold text-primary">{item.price}</span>
                    )}
                    {item.duration && (
                      <span className="text-gray-500 flex items-center gap-1">
                        {item.icon && <TimerIcon size={20} />} {item.duration}
                      </span>
                    )}
                  </div>
                </CardContent>

                {/* Exibe botão apenas se existir */}
                {item.buttonText && (
                  <CardFooter>
                    <Button onClick={item.onClick} className="w-full">
                      {item.buttonText}
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 md:left-4" />
        <CarouselNext className="right-2 md:right-4" />
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
