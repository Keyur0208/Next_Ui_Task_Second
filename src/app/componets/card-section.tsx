"use client"
import { Button, Card, Image, Skeleton } from "@nextui-org/react"
import { useEffect, useState } from "react"

export function Card_section() {

    const [isLoaded, setisLoaded] = useState(false);

    function myfun()
    {
        setisLoaded(!isLoaded);
    }
    
    return (
        <>
            <div className="text-end p-2" >
                <Button onClick={myfun}>
                    Click Me
                </Button>
            </div>
            <div className="p-2 my-2">
                <Skeleton className="rounded-lg h-22  mb-2 my-2 bg-gray-800"
                    isLoaded={isLoaded} >
                    <div className="text-center" >
                        <h1 style={{ textTransform: 'uppercase' }} className="text-4xl my-5 text-gray-800" >ipl most popular team in 2024</h1>
                    </div>
                </Skeleton>
            </div>
            <div className="flex flex-row gap-3 p-2 align-middle justify-center flex-wrap">
                <Card className="w-[300px] space-y-5 p-4" radius="lg">
                    <Skeleton isLoaded={isLoaded} className="rounded-lg bg-danger">
                        <Image className="h-35 rounded-lg bg-danger" src="/rcb.jpeg" />
                    </Skeleton>
                    <div className="space-y-3">
                        <Skeleton isLoaded={isLoaded} className="w-65 rounded-lg bg-danger">
                            <div className="h-6 w-65 rounded-lg text-danger">
                                RCB are still in contention to make
                            </div>
                        </Skeleton>
                        <Skeleton isLoaded={isLoaded} className="w-65 rounded-lg bg-danger">
                            <div className="h-6 w-65  rounded-lg text-danger">
                                Virat Kohli,ABD,Green,Dinesh Kartik
                            </div>
                        </Skeleton>
                        <Skeleton isLoaded={isLoaded} className="w-65 rounded-lg bg-danger">
                            <div className="h-6 w-30  rounded-lg  text-danger">
                                Rajat Patidar.
                            </div>
                        </Skeleton>
                    </div>
                </Card>
                <Card className="w-[300px] space-y-5 p-4" radius="lg">
                    <Skeleton isLoaded={isLoaded} className="rounded-lg bg-primary">
                        <Image className="h-35 rounded-lg bg-primary" src="/mi.jpeg" />
                    </Skeleton>
                    <div className="space-y-3">
                        <Skeleton isLoaded={isLoaded} className="w-65 rounded-lg bg-primary">
                            <div className="h-6 w-65 rounded-lg text-primary">
                                Mi are still in contention to make
                            </div>
                        </Skeleton>
                        <Skeleton isLoaded={isLoaded} className="w-65 rounded-lg bg-primary">
                            <div className="h-6 w-65  rounded-lg text-primary">
                                Rohit Sharma,Ishan,Suraya,Tilk Varma
                            </div>
                        </Skeleton>
                        <Skeleton isLoaded={isLoaded} className="w-65 rounded-lg bg-primary">
                            <div className="h-6 w-30  rounded-lg  text-primary">
                                Jasprit Bumrah.
                            </div>
                        </Skeleton>
                    </div>
                </Card>
                <Card className="w-[300px] space-y-5 p-4" radius="lg">
                    <Skeleton isLoaded={isLoaded} className="rounded-lg bg-warning">
                        <Image className="h-35 rounded-lg bg-warning" src="/csk.jpeg" />
                    </Skeleton>
                    <div className="space-y-3">
                        <Skeleton isLoaded={isLoaded} className="w-65 rounded-lg bg-warning">
                            <div className="h-6 w-65 rounded-lg text-warning">
                                CSK are still in contention to make
                            </div>
                        </Skeleton>
                        <Skeleton isLoaded={isLoaded} className="w-65 rounded-lg bg-warning">
                            <div className="h-6 w-65  rounded-lg text-warning">
                                MS Dhoni,Ruturaj,Jadeja,Rachit
                            </div>
                        </Skeleton>
                        <Skeleton isLoaded={isLoaded} className="w-65 rounded-lg bg-warning">
                            <div className="h-6 w-30  rounded-lg  text-warning">
                                Deepk Chahar.
                            </div>
                        </Skeleton>
                    </div>
                </Card>
                <Card className="w-[300px] space-y-5 p-4" radius="lg">
                    <Skeleton isLoaded={isLoaded} className="rounded-lg bg-secondary">
                        <Image className="h-35 rounded-lg bg-warning" src="/kkr.jpeg" />
                    </Skeleton>
                    <div className="space-y-3">
                        <Skeleton isLoaded={isLoaded} className="w-65 rounded-lg bg-secondary">
                            <div className="h-6 w-65 rounded-lg text-secondary">
                                KKR are still in contention to make
                            </div>
                        </Skeleton>
                        <Skeleton isLoaded={isLoaded} className="w-65 rounded-lg bg-secondary">
                            <div className="h-6 w-65  rounded-lg text-secondary">
                                Russal,Iyer,Rinku Sharma,varun
                            </div>
                        </Skeleton>
                        <Skeleton isLoaded={isLoaded} className="w-65 rounded-lg bg-secondary">
                            <div className="h-6 w-30  rounded-lg  text-secondary">
                                Mitchell starc.
                            </div>
                        </Skeleton>
                    </div>
                </Card>
            </div>
        </>
    )
}