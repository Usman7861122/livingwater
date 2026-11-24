import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
const ses = new SESv2Client({ region: "us-east-1" });
const TO = ["ehanna@livingwaterclinic.com", "livingwaterclinic@livingwaterclinic.com", "alphadeveloper91@gmail.com"];
const FROM = "Living Water Website <noreply@ironhealthsolutions.com>";
const clean = (v, n) => String(v ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, n);
const res = (s) => ({ statusCode: s, headers: { "content-type": "application/json" }, body: JSON.stringify({ ok: s === 200 }) });
export const handler = async (event) => {
  let d;
  try { d = JSON.parse(event.isBase64Encoded ? Buffer.from(event.body, "base64").toString() : event.body || "{}"); } catch { return res(400); }
  if (d.company) return res(200);
  const name = clean(d.name, 100), phone = clean(d.phone, 40), email = clean(d.email, 120), location = clean(d.location, 80);
  const message = String(d.message ?? "").trim().slice(0, 3000);
  if (!name || !phone || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return res(400);
  const body = `New message from the Living Water Clinic website\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nPreferred location: ${location}\nLanguage: ${clean(d.lang, 5)}\n\nMessage:\n${message}\n\nSent from: ${clean(d.page, 200)}`;
  await ses.send(new SendEmailCommand({
    FromEmailAddress: FROM,
    Destination: { ToAddresses: TO },
    ReplyToAddresses: [email],
    Content: { Simple: { Subject: { Data: `Website message from ${name}` }, Body: { Text: { Data: body } } } },
  }));
  return res(200);
};
