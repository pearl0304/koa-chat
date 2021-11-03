import App from "./app.js"

const app = new App().app
const PORT = 5003   

app.listen(PORT,()=>{
    console.log(`KOA SERVER CONNECTION  http://localhost:${PORT}`)
})