import app from "./app"

const port = 8080
const address = '127.0.0.1'

const start = async () => {
    try {
        await app.listen(port, (err, address) => {
            if(err) {
                console.error(err)
                process.exit(0)
            }
            console.log(`1 Server listening at ${address}`)
        })
        console.log(`2 Server listening at ${address}`)
    } catch (error) {
        console.error(error)
        process.exit(0)
    }
}

start()