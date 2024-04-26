"use client"
import { Home, SportsCricket, Star } from "@mui/icons-material";
import { Avatar, BreadcrumbItem, Breadcrumbs, Slider, Image } from "@nextui-org/react";
import { useState } from "react";

export function Log_six() {

    const handleSliderChange = (value) =>{
        setgetvalue(value)
    }
        

    const [getvalue, setgetvalue] = useState(26)

    return (
        <>
            <div className="m-2 my-5">
                <div className="p-3">
                    <h1 className="text-3xl" >Logest Six in Ipl 2024</h1>
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
                            Logest Six
                        </BreadcrumbItem>
                    </Breadcrumbs>
                </div>

                <div className="flex justify-center">
                    <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="text-center" >
                            <Image className="object-cover w-full  h-96 md:h-auto md:w-48 p-3" src="/dk.jpeg" alt="" isBlurred isZoomed  />
                            Dinesh Kartik
                            <br></br>
                            {getvalue}m
                        </div>
                        <div className="flex flex-row justify-between p-4 max-w-md h-[348px] gap-6  leading-normal">
                            <Slider
                                size="md"
                                startContent={<Avatar src="/dk.jpeg" size="lg" isBordered color="danger" />}
                                color="danger"
                                label="Dinesh (RCB)"
                                radius="full"
                                orientation="vertical"
                                maxValue={150}
                                defaultValue={108}
                                onChange={handleSliderChange}
                            />
                            <br></br>
                            <Slider
                                size="md"
                                startContent={<Avatar src="/klassen.jpeg" size="md" isBordered color="warning" />}
                                color="warning"
                                className="max-w-md"
                                label="Klaasen (SRH)"
                                radius="lg"
                                orientation="vertical"
                                maxValue={110}
                                defaultValue={106}
                            />
                            <br></br>
                            <Slider
                                size="md"
                                startContent={<Avatar src="/iyer.jpeg" size="sm" isBordered color="secondary" />}
                                 defaultValue={106}
                                color="secondary"
                                className="max-w-md"
                                label="Iyer (KKR)"
                                radius="sm"
                                orientation="vertical"
                                maxValue={110}
                            />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}