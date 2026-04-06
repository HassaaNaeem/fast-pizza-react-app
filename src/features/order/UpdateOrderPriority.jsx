import React from "react";
import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

function UpdateOrderPriority({ order }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrderPriority;

export async function action({ request, params }) {
  //   console.log("update");
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
