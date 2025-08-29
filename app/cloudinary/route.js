import {v2 as cloudinary } from "cloudinary";


cloudinary .v2.config({
cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
api_key: process.env.CLOUDINARY_API_KEY,
api_secret: process.env.CLOUDINARY_API_SECRET,
});




 export default async function handler(req, res) {
if (req.method === "GET") {
const timestamp = Math.round(new Date().getTime() / 1000);
const signature = cloudinary.v2.utils.api_sign_request(
{ timestamp },
process.env.CLOUDINARY_API_SECRET
);
res.json({ timestamp, signature, apiKey: process.env.CLOUDINARY_API_KEY });
}
} 