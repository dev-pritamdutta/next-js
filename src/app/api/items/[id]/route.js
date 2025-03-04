import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

//get the singel data from database
export async function GET(req, {params}) {
  const p = await params;
  const singelData = await dbConnect("practice_data").findOne({ _id: new ObjectId(p.id)});

  return Response.json(singelData);
}


export async function DELETE(req, {params}) {
  const p = await params;
  console.log(p);

  return Response.json({ params: p });
}

//update the singel data from database
export async function PATCH(req, {params}) {

  const postedData = await req.json()
  const p = await params;
  const filter  =  ({ _id: new ObjectId(p.id)})
  const updatedData = await dbConnect("practice_data").updateOne(filter, {$set: {...postedData} }, {upsert: true});

  return Response.json(updatedData);
}
