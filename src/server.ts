import app from "./app"

const port = 8080

const start = async () => {
    try {
        await app.listen(port)
    } catch (error) {
        app.log.error(error)
        process.exit(0)
    }
}

start()