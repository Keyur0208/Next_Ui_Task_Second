"use client"
import { Image, Table, TableBody, TableCell, TableColumn, Button, TableHeader, TableRow, Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

export function Point_Table() {

    const [isLoading, setIsLoading] = useState(true);
    const [Teamdata, setTeamdata] = useState([]);


    const fetchData = async () => {
        try {
            const response = await fetch('https://next-ui-second.netlify.app/api/team', { cache: 'no-store' });
            const data = await response.json();
            setIsLoading(false);
            setTeamdata(data.message);
            console.log("click");
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        fetchData();
    };

    return (
        <div className="p-2">
            <div className="text-center">
                <h1 className="text-4xl">IPL POINT TABLE 2024</h1>
            </div>
            <div className="text-end">
                <Button onClick={fetchData} color="danger" >Show Data </Button>
            </div>
            <Table className="p-2">
                <TableHeader>
                    <TableColumn>No</TableColumn>
                    <TableColumn>Team</TableColumn>
                    <TableColumn>Match</TableColumn>
                    <TableColumn>Won</TableColumn>
                    <TableColumn>Lost</TableColumn>
                    <TableColumn>Net Run Rate</TableColumn>
                </TableHeader>
                <TableBody
                    isLoading={isLoading}
                    loadingContent={<Spinner label="Loading..." />}
                >
                    {Teamdata.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <div>
                                        <Image src={item.image} />
                                    </div>
                                    <div>{item.name}</div>
                                </div>
                            </TableCell>
                            <TableCell>{item.match}</TableCell>
                            <TableCell>{item.win}</TableCell>
                            <TableCell>{item.lose}</TableCell>
                            <TableCell>{item.net}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
