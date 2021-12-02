import admin from "firebase-admin";
import StripeClient from "stripe";
import utils from "lexoral-utils";
import { SecretManagerServiceClient } from "@google-cloud/secret-manager";

import { Request, Response } from "express";

async function handleRequest(req: Request, res: Response): Promise<void> {
  const payload = req.body;
  
  const signature = req.header("stripe-signature");
  if (!signature) {
    res.status(400).send("Missing stripe-signature header");
    return;
  }

  // Verify the signature
  const event = stripeClient.webhooks.constructEvent(payload, signature, webhookSecret as string);

  if (event.type !== "checkout.session.completed") {
    res.status(400).send("Unrecognised event type");
    return;
  }

  const session = event.data.object as StripeClient.Checkout.Session;
  const customer = session.customer;
  if (customer === null) {
    res.status(400).send("Customer is null");
    return;
  }

  const userId = customer.toString();
  const userDoc = store.doc(`users/${userId}`);

  const lineItems = await stripeClient.checkout.sessions.retrieve(session.id, {
    expand: ["line_items"]
  }).then(data => data.line_items);

  if (lineItems === undefined) {
    res.status(400).send("Line Items are undefined");
    return;
  }

  const mins = lineItems.data.reduce((acc, item) => acc + (item.quantity ?? 0), 0);
  const secs = mins * 60;


  userDoc.update({
    secondsCredit: admin.firestore.FieldValue.increment(secs)
  });

  res.sendStatus(200);
}

const store = admin.initializeApp().firestore();

const secretClient = new SecretManagerServiceClient();

const apiSecret = await secretClient.accessSecretVersion({
  name: `projects/${process.env["PROJECT_ID"]}/secrets/stripe/versions/latest`
}).then(res => res[0]?.payload?.data?.toString());
if (!apiSecret) throw new Error("Could not access secret named `stripe`");

const webhookSecret = await secretClient.accessSecretVersion({
  name: `projects/${process.env["PROJECT_ID"]}/secrets/stripe_webhook/versions/latest`
}).then(res => res[0]?.payload?.data?.toString());
if (!webhookSecret) throw new Error("Could not access secret named `stripe_webhook`");


const stripeClient = new StripeClient(apiSecret, { apiVersion: "2020-08-27" });
export const run = utils.http.webhook(handleRequest);
