const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
app.use(cors());
const festivals = {
    
    'coachella': {
        'location': 'Los Angeles, California',
        'date': 'April 14-16, 21-23 2023',
        'genre': 'rock, pop, indie, hip hop and electronic dance music',
        'description': 'The Coachella Valley Music and Arts Festival is an annual music and arts festival held at the Empire Polo Club in Indio, California, in the Coachella Valley in the Colorado Desert. It was co-founded by Paul Tollett and Rick Van Santen in 1999, and is organized by Goldenvoice, a subsidiary of AEG Presents.',
        'attendance': '125,000',
        'website': 'coachella.com',
        'picture': 'https://media.glamour.com/photos/6254dca536f5904ec3513ffe/master/w_2560%2Cc_limit/1142665368',
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