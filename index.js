import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });
    
const PORT = process.env.PORT || 3333;
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});