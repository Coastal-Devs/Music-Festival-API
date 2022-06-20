const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
app.use(cors()
);
const festivals = {
    
        'coachella': {
            'location': 'los angeles, california',
            'date': 'april 14-16, 21-23 2023',
            'genre': 'rock, pop, indie, hip hop and electronic dance music',
            'attendance': '125,000',
            'website': 'coachella.com',
            'image':'',
        },
    }

    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/index.html');
    })
    
    app.get('/api/:festivalName', (req, res) => {
      const festivalName = req.params.festivalName.toLowerCase();
    
      if(Object.hasOwn(festivals, festivalName)) {
        res.json(festivals[festivalName]);
      }
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });