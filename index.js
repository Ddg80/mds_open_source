import express from 'express';
const app = express();

// Server Setup
const PORT = 3333;
    
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});