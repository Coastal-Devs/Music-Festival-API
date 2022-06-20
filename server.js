const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
app.use(cors()
);
const festivals = {
    
    'Coachella': {
        location: 'Los Angeles, California',
        date: 'April 14-16, 21-23 2023',
        genre: 'rock, pop, indie, hip hop and electronic dance music',
        description: 'The Coachella Valley Music and Arts Festival is an annual music and arts festival held at the Empire Polo Club in Indio, California, in the Coachella Valley in the Colorado Desert. It was co-founded by Paul Tollett and Rick Van Santen in 1999, and is organized by Goldenvoice, a subsidiary of AEG Presents.',
        attendance: '125,000',
        website: 'coachella.com',
        picture: 'https://media.glamour.com/photos/6254dca536f5904ec3513ffe/master/w_2560%2Cc_limit/1142665368',
    },
    'Governor\'s Ball': {
        location: 'Citifield, New York City',
        date: 'TBD',
        genre: 'rock, pop, indie, hip hop and electronic dance music',
        description: 'The Gov Ball experience encompasses all of these and is unlike any other festival out there. Built by New Yorkers, for New Yorkers, the festival is always evolving, always entertaining, and always striving to exceed your expectations.',
        attendance: '150,000',
        website: 'https://www.governorsballmusicfestival.com/',
        picture:'https://www.governorsballmusicfestival.com/wp-content/uploads/2021/09/POST2021_0926_220307_7313_ALIVECOVERAGE_CTL_5vqeu8wjc07hb46ilr9m-scaled.jpeg',
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