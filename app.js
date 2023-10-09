const express = require('express')
const app = express()
app.set('view engine', 'ejs');
app.use(express.static("public"));
const port = process.env.PORT||3000

const fruits=['apple','pear','plum','raspberry']
const items=[
    {name:'iPhone', price: 800, category:'mobile', brand:'Apple', url:'http://abc'},
    {name:'A70', price: 400, category:'mobile', brand:'Samsung', url:'http://abc'},
    {name:'A71', price: 500, category:'mobile', brand:'Samsung', url:'http://abc'},
    {name:'S21', price: 700, category:'mobile', brand:'Samsung', url:'http://abc'},
    {name:'HP gamer', price: 1700, category:'desktop', brand:'HP', url:'http://abc'}

]

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/bestplayers', (req, res) => {
  res.render('bestplayers')
})
app.get('/first', (req, res) => {
  res.render('firstround')
})
app.get('/about', (req, res) => {
  res.render('about',{dev:'Krunoslav Kulhavi', judge:'AA', idea:'BB'})
})

app.get('/mobile', (req, res) => {
  //res.send(items.sort((a,b)=>a.price-b.price))
  //res.send(items.filter(a=>a.price>500))
  //res.send(items.filter(a=>a.brand==='Samsung'))
  res.send(items.filter(a=>a.category!='mobile')) 
})

app.get('/total',(req,res)=>{
    const total=items.reduce((acc,value)=>acc+value.price,0)
    res.send(total.toString())
})

app.listen(port)