import { getCoockieServer } from "@/lib/coockieServer";
import { Form } from "./components/form";
import { api } from "@/services/app";


export default async function Product() {

   const token = await getCoockieServer();

   const response = await api.get("/category", {
       headers: {
           Authorization: `Bearer ${token}`
       }
   })


    return (
        <Form categories={response.data}/>
    )
    
}