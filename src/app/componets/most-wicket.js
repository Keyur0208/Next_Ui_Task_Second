"use client"
import { Home, SportsCricket, Star } from "@mui/icons-material";
import { Avatar, BreadcrumbItem, Breadcrumbs, Progress, Slider , Image } from "@nextui-org/react";
import { useState } from "react";


export function Most_Wicket() {

    const [getvalue, setgetvalue] = useState(26)

    const handleSliderChange = (value) =>{
        setgetvalue(value)
    }
    

    return (
        <>
            <div className="m-2 my-5">
                <div className="p-3">
                    <h1 className="text-3xl" >Most Wickets in Ipl 2024</h1>
                </div>
                <div className="p-2">
                    <Breadcrumbs
                        separator="/"
                        itemClasses={{
                            separator: "px-2"
                        }}
                    >
                        <BreadcrumbItem startContent={<Home />}>
                            Home
                        </BreadcrumbItem>
                        <BreadcrumbItem startContent={<Star />}>
                            IPL
                        </BreadcrumbItem>
                        <BreadcrumbItem startContent={<SportsCricket />}>
                            Most Wicket
                        </BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                <div className="flex justify-center ">
                    <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="text-center" >
                            <Image className="object-cover w-full  h-96 md:h-auto md:w-48 p-3" src="/jasprit.jpeg" alt="" isBlurred isZoomed />
                            JJ Bumrah (MI)
                            <br></br>
                            {getvalue} Wickets
                        </div>
                        <div className="flex flex-col justify-between p-4 max-w-md  gap-6  leading-normal">
                            <Slider
                                size="md"
                                startContent={<Avatar src="/jasprit.jpeg" size="lg" isBordered color="primary" />}
                                color="primary"
                                className="max-w-md"
                                label="JJ Bumrah (MI)"
                                radius="full"
                                maxValue={50}
                                step={1}
                                defaultValue={26}
                                onChange={handleSliderChange}
                            />
                            <Slider
                                size="md"
                                startContent={<Avatar src="/chahal.jpeg" size="md" isBordered color="secondary" />}
                                color="secondary"
                                className="max-w-md"
                                label="YS Chahal (RR)"
                                radius="lg"
                                maxValue={50}
                                defaultValue={22}
                            />
                            <Slider
                                size="md"
                                startContent={<Avatar src="/harshal.webp" size="sm" isBordered color="danger" />}
                                color="danger"
                                className="max-w-md"
                                label="HS Patel (PBKS)"
                                radius="sm"
                                maxValue={50}
                                defaultValue={20}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}