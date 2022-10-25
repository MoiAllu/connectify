import { NextApiRequest,NextApiResponse } from "next";
export default async (req:NextApiRequest ,res:NextApiResponse) => {
    const getCookie = () => {
        return document.cookie.split(';').some(c => {
          return c.trim().startsWith("CONNECTIFY_ACCESS_TOKEN" + '=');
        });
      }
      const deleteCookie = () => {
        if (getCookie()) {
          document.cookie = "CONNECTIFY_ACCESS_TOKEN" + "=" +
            (("/") ? ";path=" + "/" : "") +
            (("lax") ? ";domain=" + "lax" : "") +
            ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
        }
      }
      deleteCookie()
}