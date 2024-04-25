import { Iplteam } from "@/team";
import { NextResponse } from "next/server";

export const GET = async() =>{
    try
    {
        const data = Iplteam;
        return  NextResponse.json({message:data,success:true},{status:200})
    }
    catch(error)
    {
        return NextResponse.json({message:error,success:false},{status:404})
    }
}
