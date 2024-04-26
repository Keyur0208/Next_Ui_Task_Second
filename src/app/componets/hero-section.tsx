"use client"
import { Image, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";


export function Hero_Section() {

    const [loaded, setloaded] = useState(false);

    useEffect(() => {

        setTimeout(() => {
            setloaded(true);
        }, 3000);

    }, [])

    return (
        <>
            <div className="grid sm:grid-cols-1  gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 p-2"  >
                <div>
                    <Skeleton className="bg-blue-400 rounded-lg" isLoaded={loaded}>
                        <Image
                            isZoomed
                            src="india_squard.jpg"
                            isBlurred={true}
                        />
                    </Skeleton>
                </div>
                <div className="w-full" >
                    <Skeleton className="rounded-lg h-22  mb-2 my-2 bg-gray-950"
                        isLoaded={loaded} >
                        <h1 className="text-4xl my-5 text-gray-950" >Indian cricket team in England in 2021</h1>
                    </Skeleton>

                    <br></br>

                    <Skeleton className="rounded-lg h-6 mb-2 bg-green-500" isLoaded={loaded} >
                        <div className="text-green-500">
                            At Sydney with the bruised and battered pair of Hanuma Vihari and R Ashwin denying Australia. Ok Not Problem
                        </div>
                    </Skeleton>
                    <Skeleton className="rounded-lg h-6 mb-2 bg-green-500" isLoaded={loaded}>
                        <div className="text-green-500">
                            Let's roll back to January of 2021. With the series levelled at 1-1, India pulled off a remarkable escape
                        </div>
                    </Skeleton>
                    <Skeleton className="rounded-lg h-6 mb-2 bg-green-500" isLoaded={loaded}>
                        <div className="text-green-500">
                            The home series against England did not start on the best of notes, with India going down comprehensively in
                        </div>
                    </Skeleton>
                    <Skeleton className="rounded-lg h-6 mb-2 bg-green-500" isLoaded={loaded}>
                        <div className="text-green-500">
                            India managed a heist for the ages when they chased down 328 to beat Australia for the first time at the Gabba 1988
                        </div>
                    </Skeleton>
                    <Skeleton className="rounded-lg h-7 w-65 mb-2 bg-green-500" isLoaded={loaded} >
                        <div className="text-green-500">
                            the mention of the series isn't complete
                        </div>
                    </Skeleton>



                    <br></br>

                    <Skeleton className="rounded-lg h-6 mb-2 bg-red-600  " isLoaded={loaded} >
                        <div className="text-red-600" >
                            At Sydney with the bruised and battered pair of Hanuma Vihari and R Ashwin denying Australia. Ok Not Problem
                        </div>
                    </Skeleton>
                    <Skeleton className="rounded-lg h-6 mb-2  bg-red-600" isLoaded={loaded}>
                        <div  className="text-red-600">
                            Let's roll back to January of 2021. With the series levelled at 1-1, India pulled off a remarkable escape
                        </div>
                    </Skeleton>
                    <Skeleton className="rounded-lg h-6 mb-2 bg-red-600" isLoaded={loaded}>
                        <div className="text-red-600">
                            The home series against England did not start on the best of notes, with India going down comprehensively in
                        </div>
                    </Skeleton>
                    <Skeleton className="rounded-lg h-6 mb-2 bg-red-600" isLoaded={loaded}>
                        <div className="text-red-600">
                            India managed a heist for the ages when they chased down 328 to beat Australia for the first time at the Gabba 1988
                        </div>
                    </Skeleton>
                    <Skeleton className="rounded-lg h-6 mb-2  bg-red-600" isLoaded={loaded}>
                        <div className="text-red-600">
                            The home series against England did not start on the best of notes, with India going down comprehensively
                        </div>
                    </Skeleton>
                    <Skeleton className="rounded-lg h-6 w-60 mb-2 bg-red-600" isLoaded={loaded} >
                        <div className="text-red-600">
                            the mention of the series
                        </div>
                    </Skeleton>


                    <br></br>

                    <Skeleton className="rounded-lg h-6 mb-2 bg-yellow-500" isLoaded={loaded} >
                        <div className="text-yellow-500">
                            At Sydney with the bruised and battered pair of Hanuma Vihari and R Ashwin denying Australia. Ok Not Problem
                        </div>
                    </Skeleton>
                    <Skeleton className="rounded-lg h-6 mb-2 bg-yellow-500" isLoaded={loaded}>
                        <div className="text-yellow-500">
                            Let's roll back to January of 2021. With the series levelled at 1-1, India pulled off a remarkable escape
                        </div>
                    </Skeleton>
                    <Skeleton className="rounded-lg h-6 mb-2 bg-yellow-500" isLoaded={loaded}>
                        <div className="text-yellow-500">
                            The home series against England did not start on the best of notes, with India going down comprehensively in
                        </div>
                    </Skeleton>
                    <Skeleton className="rounded-lg h-6 mb-2 bg-yellow-500" isLoaded={loaded}>
                        <div className="text-yellow-500">
                            India managed a heist for the ages when they chased down 328 to beat Australia for the first time at the Gabba 1988
                        </div>
                    </Skeleton>
                    <Skeleton className="rounded-lg h-6 mb-2 bg-yellow-500" isLoaded={loaded}>
                        <div className="text-yellow-500">
                            The home series against England did not start on the best of notes, with India going down comprehensively
                        </div>
                    </Skeleton>
                    <Skeleton className="rounded-lg h-6 w-60 mb-2 bg-yellow-500" isLoaded={loaded} >
                        <div className="text-yellow-500">
                            The mention.
                        </div>
                    </Skeleton>
                </div>
            </div>
        </>

    )
}