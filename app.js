const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render('landing');
});

app.get('/campgrounds', (req, res) => {
   const campgrounds = [
      {name: 'photo of bonfire', image: 'https://images.unsplash.com/photo-1482355347028-ff60443f60fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
      {name: 'campers under milky way', image: 'https://images.unsplash.com/photo-1499363536502-87642509e31b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
      {name: 'Borealis', image: 'https://images.unsplash.com/photo-1498825350378-fc468c285f96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}
   ]

   res.render('campgrounds', {campgrounds: campgrounds});
});

app.listen(port, () => {
   console.log(`localhost:3000`);
});