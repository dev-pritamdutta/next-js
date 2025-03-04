import dbConnect from "@/lib/dbConnect";

export async function GET() {
  const data = await dbConnect("practice_data").find({}).toArray();

  return Response.json(data)
}

export async function POST (req){
  const postData =  await req.json();
  const result = await dbConnect("practice_data").insertOne(postData);

  return Response.json(result);
}