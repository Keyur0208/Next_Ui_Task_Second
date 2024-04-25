"use client"
import { Home, SportsCricket, SportsCricketRounded, Star } from "@mui/icons-material";
import { Accordion, AccordionItem, Avatar, BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

export function Most_Run() {
    return (
        <>
            <div className="m-2 my-5">
                <div className="p-3">
                    <h1 className="text-3xl" >Most Run in Ipl 2024</h1>
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
                            Most Run
                        </BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                <Accordion selectionMode="multiple">
                    <AccordionItem
                        className="bg-green-500 p-2"
                        key="1"
                        aria-label="Virat kohli"
                        indicator={<SportsCricket className="text-black text-2xl" />}
                        startContent={
                            <Avatar
                                isBordered
                                color="success"
                                radius="full"
                                src="/virat2.jpeg"
                                size="lg"
                            />
                        }
                        title="Virat Kohli - 1000 Runs"
                    >
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                    </AccordionItem>
                    <AccordionItem
                        className="bg-orange-500 p-2"
                        key="2"
                        aria-label="Travish Head"
                        indicator={<SportsCricket className="text-black text-2xl" />}
                        startContent={
                            <Avatar
                                isBordered
                                color="warning"
                                src="/head.jpeg"
                                size="md"
                                radius="md"
                            />
                        }
                        title="Travish Head - 825 Runs "
                    >
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                    </AccordionItem>
                    <AccordionItem
                        key="3"
                        className="bg-blue-500 p-2"
                        aria-label="Rohit Shram"
                        indicator={<SportsCricket className="text-black text-2xl" />}
                        startContent={
                            <Avatar
                                isBordered
                                color="primary"
                                radius="sm"
                                size="sm"
                                src="/rohit.jpeg"
                            />
                        }
                        title="Rohit Sharma - 820 Runs "
                    >
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                    </AccordionItem>
                </Accordion>
            </div>

        </>
    )
}