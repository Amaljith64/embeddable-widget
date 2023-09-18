// const task_id = '02231934-2604-0066-2000-570459f04879';
import axios from "axios";
import { NextResponse } from 'next/server'
const apiUsername = process.env.API_USERNAME;
const apiPassword = process.env.API_PASSWORD

export async function POST(request,response){
    try{
    const body = await request.json()
    const { task_id } = body
    const result = await axios.get('https://api.dataforseo.com/v3/on_page/lighthouse/task_get/json/' + task_id, {
        auth: {
            username: apiUsername,
            password: apiPassword
        },
        headers: {
            'content-type': 'application/json'
        }
    });
    
    const result1 = result.data.tasks;
        return NextResponse.json(result1);
}catch (error) {
    console.error(error);
    return new NextResponse("Internal error", { status: 500 });
}
}
