import { NextApiRequest,NextApiResponse } from "next";
const cookie =require("cookie");
export default async (req:NextApiRequest, res:NextApiResponse) => {
  /* remove cookies from request header */
  res.setHeader('Set-Cookie', [
    cookie.serialize(process.env.ACCESS_TOKEN, "", {
      maxAge: -1,
      path: '/',
    }),
   cookie.serialize(process.env.ACCESS_TOKEN, "", {
      maxAge: -1,
      path: '/',
    }),
  ]);
  
  res.writeHead(302, { Location: '/api/signin' });
  res.end();
}