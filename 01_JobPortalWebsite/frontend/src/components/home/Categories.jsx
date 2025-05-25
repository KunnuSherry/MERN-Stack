import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { Button } from '../ui/button'

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "Machine Learning"
]

const Categories = () => {
    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent className="flex space-x-0">
                    {
                        category.map((category, ind) => (

                            <CarouselItem className="md:basis-1/2 lg-basis-1/3 !mx-0">
                                <Button variant="outline" className="rounded-full hover:cursor-pointer">{category}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    )
}

export default Categories