import StripeClient from "stripe";
import utils from "lexoral-utils";
import { SecretManagerServiceClient } from "@google-cloud/secret-manager";

import { Request, Response } from "express";

const stdPriceId = "price_1K2HEIHSxtW9M3UjENFj0EQZ";
const bulkPriceId = "price_1K2HEIHSxtW9M3UjY3hJW7CW";
const bulkMins = 60 * 10;

async function handleRequest(req: Request, res: Response): Promise<void> {
  const user = await utils.auth.check(req, res);

  const minsStr = req.body["mins"];
  if (!minsStr) {
    res.status(401).send("POST request is missing required body parameter `mins`");
    return;
  }

  const mins = parseInt(minsStr);
  if (mins <= 5) {
    res.status(401).send("Minimum amount is 5 minutes");
    return;
  }

  const price: string = (mins >= bulkMins) ? bulkPriceId : stdPriceId;

  const session = await stripeClient.checkout.sessions.create({
    line_items: [{ price, quantity: mins }],
    mode: "payment",
    client_reference_id: user.uid,
    customer_email: user.email,
    cancel_url: "https://lexoral.com/dashboard",
    success_url: "https://lexoral.com/dashboard"
  });

  const redirectUrl = session.url;
  if (redirectUrl === null) {
    console.error("Redirect url was null after creating stripe session");
    res.sendStatus(500);
    return;
  }

  res.redirect(303, redirectUrl);
}


const secretClient = new SecretManagerServiceClient();
const [accessResponse] = await secretClient.accessSecretVersion({
  name: "stripe"
});
const apiSecret = accessResponse.payload?.data?.toString();
if (!apiSecret) throw new Error("Could not access secret named `stripe`");

const stripeClient = new StripeClient(apiSecret, { apiVersion: "2020-08-27" });
export const run = utils.http.post(handleRequest);
