export async function healthz(req, res, next) {
    try {
        res.status(200);
        res.set("Content-Type", "text/plain; charset=utf-8");
        res.send("OK");
    }
    catch (e) {
        next(e);
    }
}
