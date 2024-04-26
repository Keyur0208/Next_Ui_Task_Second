"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Skeleton } from "@nextui-org/react";
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import { useEffect, useState } from "react";


export default function Navbar_com() {

    const [loaded, setIsloaded] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsloaded(true);
    //     }, 3000)
    // }, []);

    return (
        <Navbar isBordered>
            <NavbarContent justify="start">
                <NavbarBrand className="mr-4">
                    <Skeleton className="rounded-full" isLoaded={loaded}>
                        <Avatar src="/bcci.svg" size="lg" />
                    </Skeleton>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-5">
                    <NavbarItem >
                        <Skeleton isLoaded={loaded} >
                            <Link color="primary" href="/" >
                                Home
                            </Link>
                        </Skeleton>

                    </NavbarItem>
                    <NavbarItem >
                        <Skeleton isLoaded={loaded}>
                            <Link href="#" color="secondary">
                                About
                            </Link>
                        </Skeleton>
                    </NavbarItem>
                    <NavbarItem>
                        <Skeleton isLoaded={loaded}>
                            <Link color="danger"
                                href="#">
                                Content
                            </Link>
                        </Skeleton>
                    </NavbarItem>
                    <NavbarItem>
                        <Skeleton isLoaded={loaded}>
                            <Link color="foreground" href="#">
                                News
                            </Link>
                        </Skeleton>
                    </NavbarItem>
                    <NavbarItem>
                        <Skeleton isLoaded={loaded}>
                            <Link color="success" href="#">
                                Blog
                            </Link>
                        </Skeleton>
                    </NavbarItem>
                    <NavbarItem>
                        <Skeleton isLoaded={loaded}>
                            <Link color="warning" href="#">
                                World Cup 2024
                            </Link>
                        </Skeleton>
                    </NavbarItem>
                </NavbarContent>
            </NavbarContent>
            <NavbarContent as="div" className="items-center" justify="end">
                <Skeleton className="rounded-md" isLoaded={loaded}>
                    <Input
                        classNames={{
                            base: "max-w-full sm:max-w-[10rem] h-10",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                        }}
                        placeholder="Type to search..."
                        size="sm"
                        type="search"
                        startContent={<SavedSearchIcon />}
                    />
                </Skeleton>
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Skeleton className="rounded-full" isLoaded={loaded}>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transfor"
                                color="success"
                                name="Virat Kohli"
                                src="/virat.jpeg"
                            />
                        </Skeleton>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat" >
                        <DropdownItem key="profile" className="h-14 gap-2" color="primary">
                            <Skeleton isLoaded={loaded}>
                                <p className="font-semibold">Signed in as</p>
                                <p className="font-semibold">virat@gmail.com</p>
                            </Skeleton>
                        </DropdownItem>
                        <DropdownItem
                            key="settings" color="secondary">
                            <Skeleton isLoaded={loaded}>
                                My Settings
                            </Skeleton>
                        </DropdownItem>
                        <DropdownItem key="team_settings"
                            color="success" >
                            <Skeleton isLoaded={loaded}>
                                Team Settings
                            </Skeleton>
                        </DropdownItem>
                        <DropdownItem
                            key="analytics">
                            <Skeleton isLoaded={loaded}>
                                Analytics
                            </Skeleton></DropdownItem>
                        <DropdownItem key="system"
                            color="warning">
                            <Skeleton isLoaded={loaded}>
                                System
                            </Skeleton>
                        </DropdownItem>
                        <DropdownItem
                            color="secondary" key="configurations">
                            <Skeleton isLoaded={loaded}>
                                Configurations
                            </Skeleton></DropdownItem>
                        <DropdownItem
                            color="success"
                            key="help_and_feedback">
                            <Skeleton isLoaded={loaded}>
                                Help & Feedback
                            </Skeleton></DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            <Skeleton isLoaded={loaded} >
                                Log Out
                            </Skeleton>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
}