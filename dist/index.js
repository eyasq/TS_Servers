import express from "express";
import { middlewareLogResponses, middlewareMetricsInc } from "./utils/middlewareLogResponses.js";
import { stateObj } from "./config.js";
const app = express();
app.use(express.json());
app.use(middlewareLogResponses);
app.use("/app", middlewareMetricsInc, express.static('./src/app'));
app.get('/api/healthz', (req, res) => {
    res.status(200);
    res.set("Content-Type", "text/plain; charset=utf-8");
    res.send("OK");
});
app.get('/admin/metrics', (req, res) => {
    res.set("Content-Type", 'text/html; charset=utf-8');
    res.send(`
            <html>
  <body>
    <h1>Welcome, Chirpy Admin</h1>
    <p>Chirpy has been visited ${stateObj.fileserverHits} times!</p>
  </body>
</html>

        `);
});
app.post('/admin/reset', (req, res) => {
    stateObj.fileserverHits = 0;
    res.send("Resetted hits");
});
app.post('/api/validate_chirp', (req, res) => {
    try {
        res.header("Content-Type", "application/json");
        const body = JSON.stringify(req.body);
        if (req.body.body.length > 140) {
            res.status(400).send({ "error": "Chirp is too long" });
        }
        const respBody = {
            "valid": true
        };
        res.status(200).send(respBody);
        res.end;
    }
    catch (e) {
        console.log("error: Something went wrong");
    }
});
app.listen(8080, () => {
    console.log("Server running at port 8080");
});
