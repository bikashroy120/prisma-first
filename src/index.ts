import { PrismaClient } from '@prisma/client'
import app from './app'

const prisma = new PrismaClient()

const port = 5000

async function main() {
    app.listen(port, () => {
        console.log(`Server is running at Port = ${port}`)
    })
}

main() 