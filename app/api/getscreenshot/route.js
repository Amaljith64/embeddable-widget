import axios from "axios";
import { NextResponse } from "next/server";

const apiUsername = "amaljith64@gmail.com";
const apiPassword = "df2b2616a0be9a97";

export async function POST(request) {
  try {
    const body = await request.json();
    const { url } = body;

    const post_array = [
      {
        url: url,
        for_mobile: true,
      },
    ];
    const screenshot = await axios({
      method: "post",
      url: "https://api.dataforseo.com/v3/on_page/page_screenshot",
      auth: {
        username: apiUsername,
        password: apiPassword,
      },
      data: post_array,
      headers: {
        "content-type": "application/json",
      },
    })
    const result = screenshot.data.tasks[0].result[0].items[0].image;
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
