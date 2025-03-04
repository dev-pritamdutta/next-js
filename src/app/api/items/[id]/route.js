import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, {params}) {
  const p = await params;
  const singelData = await dbConnect("practice_data").findOne({ _id: new ObjectId(p.id)});

  return Response.json(singelData);
}


export async function DELETE(req, params) {
  const p = await params;
  console.log(p);

  return Response.json({ params: p });
}
export async function PATCH(req, params) {
  const p = await params;
  console.log(p);

  return Response.json({ params: p });
}
