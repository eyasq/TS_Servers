import express from "express";
import { middlewareLogResponses,middlewareMetricsInc, handleErr } from "./api/middlewareLogResponses.js";
import { healthz } from "./api/healthz.js";
import { validate_chirp } from "./api/validateChirps.js";
import { metrics } from "./api/metrics.js";
import { handlerReset } from "./api/reset.js";
const PORT = process.env.PORT ? process.env.PORT:8080
const app = express();
app.use(express.json())
app.use(middlewareLogResponses)
app.use("/app",middlewareMetricsInc,express.static('./src/app'))



app.get('/app',(req,res)=>{
    res.render('index.html')
})

app.get('/api/healthz',healthz)
app.get('/admin/metrics',metrics)
app.post('/admin/reset',handlerReset)
app.post('/api/validate_chirp',validate_chirp)
app.use(handleErr)
app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`)
});