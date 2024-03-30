import express from 'express';
import bodyParser from 'body-parser';
import { filterImageFromURL, deleteLocalFiles, checkURL } from './util/util.js';

// Init the Express application
const app = express();

// Set the network port
const port = process.env.PORT || 8082;

// Use the body parser middleware for post requests
app.use(bodyParser.json());

app.get("/filteredimage", async (req, res) => {
    const { image_url } = req.query;
    console.log(image_url)
    if (!image_url) {
        return res.status(400).send("image_url parameter is required");
    }
    
    let isImage = await checkURL(image_url);
    if (!isImage) {
        console.log(image_url)
        return res.status(400).send("Invalid image_url");
    }

    try {
        const filteredImagePath = await filterImageFromURL(image_url);
        res.sendFile(filteredImagePath, {}, (err) => {
            if (err) {
                return res.status(500).send("Error in sending file");
            }
            deleteLocalFiles([filteredImagePath]);
        });
    } catch (error) {
        return res.status(500).send("Error processing image");
    }
});

// Root Endpoint
// Displays a simple message to the user
app.get("/", async (req, res) => {
    res.send("Try GET /filteredimage?image_url={{URL}}");
});

// Start the Server
app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
});
