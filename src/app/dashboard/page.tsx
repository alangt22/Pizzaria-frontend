import { api } from "@/services/app";
import { Orders } from "./components/orders";
import { getCoockieServer } from "@/lib/coockieServer";

async function getOrders(): Promise<OrderProps[] | []> {
  try {
    const token = await getCoockieServer();

    const response = await api.get("/orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    return response.data || []

  } catch (error) {
    console.log(error);
    return []
  }
}

export default async function Dashboard() {

  const orders = await getOrders();


  return (
    <>
      <Orders orders={orders}/>
    </>
  );
}
