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
const firstRound=[

  //{id:1, round: 1, fTeam:'2.S',sTeam:'3.EL',fTeamScore:0, sTeamScore:2, goals:[{name: 'Stjepan', surname: 'Bina', goal:2, cl:'3.EL'}]},
  {id:2, round: 1, fTeam:'2.MT',sTeam:'1.S',fTeamScore:0, sTeamScore:0, goals:[]},
  {id:3, round: 1, fTeam:'3.S',sTeam:'1.EL',fTeamScore:4, sTeamScore:0, goals:[{name: 'Marko', surname: 'Vuk ', goal:1, cl:'3.S'}, {name: 'Dejan', surname: 'Borojević', goal:1, cl:'3.S'}, {name: 'Robert', surname: 'Batković', goal:1, cl:'3.S'}, {name: 'Antonio', surname: 'Josipović', goal:1, cl:'3.S'}]},
  {id:4, round: 1, fTeam:'1.P',sTeam:'2.SP',fTeamScore:6, sTeamScore:4, goals:[{name: 'Ivan', surname: 'Ivić', goal:1, cl:'1.P'}, {name: 'Leon', surname: 'Mihajlović', goal:1, cl:'2.SP'}]},
  {id:5, round: 1, fTeam:'2.EL',sTeam:'1.SP',fTeamScore:10, sTeamScore:1, goals:[{name: 'David', surname: 'Bliznac', goal:6, cl:'2.EL'}, {name: 'Gabrijel', surname: 'Kolić', goal:2, cl:'2.EL'}, {name: 'Saša', surname:'Kabljanac', goal:2, cl:'2.EL'}, {name: 'Gabrijel',surname:'GGG', goal:1, cl:'1.SP'}]},
  {id:6, round: 1, fTeam:'2.PT',sTeam:'4.PT',fTeamScore:0, sTeamScore:1, goals:[{name: 'Vjekoslav', surname:'Pavičić', goal:1, cl:'4.PT'}]},
  {id:7, round: 1, fTeam:'3.RT',sTeam:'2.MT',fTeamScore:2, sTeamScore:0, goals:[{name: 'David', surname: 'Dubravac', goal:1, cl:'3.RT'}, {name: 'Toni', surname: 'Čimiris', goal:1, cl:'3.RT'}]},
  //{id:8, round: 1, fTeam:'1.RT',sTeam:'2.P',fTeamScore:2, sTeamScore:0, goals:[{name: 'Franjo', surname: 'Đorđević', goal:1, cl:'1.RT'}, {name: 'Antonio', surname: 'Bičak', goal:1, cl:'1.RT'}]},
  //{id:9, round: 1, fTeam:'3.PT',sTeam:'2.S',fTeamScore:1, sTeamScore:0, goals:[{name: 'Valentino', surname: 'Tolić', goal:1, cl:'3.PT'}]},
  {id:10, round: 1, fTeam:'3.MT',sTeam:'K/M',fTeamScore:1, sTeamScore:0, goals:[{name: 'Dragan', surname: 'DDD', goal:1, cl:'3.MT'}]},
  {id:11, round: 1, fTeam:'1.MT',sTeam:'2.RT',fTeamScore:0, sTeamScore:2, goals:[{name: 'David', surname: 'Krmela', goal:1, cl:'2.RT'}]},
  {id:12, round: 1, fTeam:'1.MT',sTeam:'2.RT',fTeamScore:0, sTeamScore:2, goals:[{name: 'David', surname: 'Krmela', goal:1, cl:'2.RT'}]},
  //{id:13, round: 1, fTeam:'1.MT',sTeam:'2.RT',fTeamScore:0, sTeamScore:2, goals:[{name: 'David', surname: 'Krmela', goal:1, cl:'2.RT'}]},
  {id:14, round: 1, fTeam:'1.MT',sTeam:'2.RT',fTeamScore:0, sTeamScore:2, goals:[{name: 'David', surname: 'Krmela', goal:1, cl:'2.RT'}]},
  {id:15, round: 1, fTeam:'1.MT',sTeam:'2.RT',fTeamScore:0, sTeamScore:2, goals:[{name: 'David', surname: 'Krmela', goal:1, cl:'2.RT'}]},
  //{id:16, round: 1, fTeam:'1.MT',sTeam:'2.RT',fTeamScore:0, sTeamScore:2, goals:[{name: 'David', surname: 'Krmela', goal:1, cl:'2.RT'}]}
  
]

app.get('/', (req, res) => {
  //res.render('index')
  res.render('qualifications',{fround:firstRound})
})
app.get('/finals', (req, res) => {
  //res.render('index')
  res.render('index')
})
app.get('/bestplayers', (req, res) => {
  res.render('bestplayers')
})
app.get('/qualifications', (req, res) => {
  res.render('qualifications',{fround:firstRound})
})
app.get('/about', (req, res) => {
  res.render('about',{dev:'Krunoslav Kulhavi', judge:'??', idea:'Danko Tomašek'})
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