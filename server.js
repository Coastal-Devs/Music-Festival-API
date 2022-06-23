const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
app.use(cors());
const festivals = {
    'rock pop indie hip hop electronic dance':{
        'name': 'Coachella',
        'location': 'Los Angeles, California',
        'date': 'April 14-16, 21-23 2023',
        'genre': 'rock pop indie hip hop electronic dance',
        'description': 'The Coachella Valley Music and Arts Festival is an annual music and arts festival held at the Empire Polo Club in Indio, California, in the Coachella Valley in the Colorado Desert. It was co-founded by Paul Tollett and Rick Van Santen in 1999, and is organized by Goldenvoice, a subsidiary of AEG Presents.',
        'attendance': '125,000',
        'website': 'coachella.com',
        'picture': 'https://media.glamour.com/photos/6254dca536f5904ec3513ffe/master/w_2560%2Cc_limit/1142665368',
    },
    'rock, pop, indie, hip hop and electronic dance music': {
        'name': 'Governor\'s Ball',
        'location': 'Citifield, New York City',
        'date': 'TBD',
        'genre': 'rock, pop, indie, hip hop and electronic dance music',
        'description': 'The Gov Ball experience encompasses all of these and is unlike any other festival out there. Built by New Yorkers, for New Yorkers, the festival is always evolving, always entertaining, and always striving to exceed your expectations.',
        'attendance': '150,000',
        'website': 'https://www.governorsballmusicfestival.com/',
        'picture':'https://www.governorsballmusicfestival.com/wp-content/uploads/2021/09/POST2021_0926_220307_7313_ALIVECOVERAGE_CTL_5vqeu8wjc07hb46ilr9m-scaled.jpeg',
    },
    'alternative-rock, punk-rock': {
        'name': 'Lollapalooza',
        'location': 'Grant Park, Chicago, Illinois',
        'date': 'July 28-31, 2022',
        'genre': 'alternative-rock, punk-rock',
        'description': 'Lollapalooza is an annual four-day music festival held in Grant Park in Chicago. It originally started as a touring event in 1991 but several years later made Chicago the permanent location for the annual music festival',
        'attendance': '385,000',
        'website': 'https://www.lollapalooza.com/',
        'picture':'https://assets-global.website-files.com/5e927ba01e4ad56ae5465eb8/62a120fd4aaf2d18b41a2569_L22-Daily-0608-1080x1350.png',
    },

    'electronic': {
        'name': 'Ultra Music Festival',
        'location': 'Miami, Florida',
        'date': 'March 24-26, 2023',
        'genre': 'electronic',
        'description': 'Ultra Music Festival is an annual outdoor electronic music festival that takes place during March in Miami, Florida, United States. The festival was founded in 1999 by Russell Faibisch and Alex Omes and is named after the Ultra Music label.',
        'attendance': '165,000',
        'website': 'https://ultramusicfestival.com/',
        'picture':'https://ultramusicfestival.com/wp-content/uploads/2022/03/2022_MIA_Billing_PH3_V1-3-scaled.jpg',
    },

    'Bonnaroo Music and Arts Festival': {
        'location': 'Great Stage Park, Manchester, Tennessee',
        'date': 'June 16-19, 2022',
        'genre': 'electronic',
        'description': 'The Bonnaroo Music and Arts Festival is an American annual four-day music festival developed and produced by Superfly Presents and AC Entertainment. Since its first year in 2002, it has been held at what is now Great Stage Park on a 700-acre farm in Manchester, Tennessee.',
        'attendance': '85,000',
        'website': 'https://www.bonnaroo.com/',
        'picture':'https://assets-global.website-files.com/5e94ab5e53b1514c1704e66e/6272d25bda78ee2077b58168_b22-lineup-v5_Press-p-1080.png',
    },

    'EDC Las Vegas': {
        'location': 'Las Vegas',
        'date': 'May 19-21, 2023',
        'genre': 'electronic',
        'description': 'Electric Daisy Carnival, commonly known as EDC, is an electronic dance music festival organized by promoter and distributor Insomniac. The annual flagship event, EDC Las Vegas, is held in May at the Las Vegas Motor Speedway, and is currently the largest electronic dance music festival in North America',
        'attendance': '400,000',
        'website': 'https://lasvegas.electricdaisycarnival.com/',
        'picture':'https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2022/02/01171129/EDCLV2021_1024_042113-7803_AGP_768x440.jpg',
    },

    'New Orleans Jazz & Heritage Festival': {
        'location': 'Fair Grounds Race Course, New Orleans',
        'date': 'April 28 - May 7, 2023',
        'genre': 'blues, R&B, gospel, Cajun, zydeco, Afro-Caribbean, folk, Latin, rock, rap, country, bluegrass and everything in between. And of course there is lots of jazz, both contemporary and traditional.',
        'description': 'The New Orleans Jazz & Heritage Festival presented by Shell, a/k/a Jazz Fest, is a 10-day cultural feast in which thousands of musicians, cooks and craftspeople welcome 400,000 visitors each year. The Louisiana Heritage Fair showcases unforgettable music on multiple stages, delicious Louisiana cuisine in two large food areas, and crafts artisans from the region and around the world demonstrating and selling their work. The Louisiana Heritage Fair is held at the Fair Grounds Race Course over the course of 2 weekends. They are April 29, April 30 & May 1 and May 5 – May 8, 2022.',
        'attendance': '425,000',
        'website': 'https://www.nojazzfest.com/',
        'picture':'https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2022/02/01171129/EDCLV2021_1024_042113-7803_AGP_768x440.jpg',
    },

    'Austin City Limits Music Festival': {
        'location': 'Zilker Park, Austin, Texas',
        'date': 'October 7-9 & 14-16, 2022',
        'genre': 'rock, indie, country, folk, electronic and hip hop',
        'description': 'The Austin City Limits Music Festival is an annual music festival held in Zilker Park in Austin, Texas on two consecutive three-day weekends. Inspired by the KLRU/PBS music series of the same name, the festival is produced by Austin-based company C3 Presents',
        'attendance': '165,000',
        'website': 'https://austincitylimits.com/',
        'picture':'https://assets-global.website-files.com/626ab670470f4322713394d1/627d1bed7f9de857bbb318ee_ACL22-Admat-0512_Main-1200x1500.png',
    },

    'Firefly Music Festival': {
        'location': 'Dover, Delaware',
        'date': 'September 22-24, 2022',
        'genre': 'rock, indie, country, folk, electronic and hip hop',
        'description': 'The Austin City Limits Music Festival is an annual music festival held in Zilker Park in Austin, Texas on two consecutive three-day weekends. Inspired by the KLRU/PBS music series of the same name, the festival is produced by Austin-based company C3 Presents',
        'attendance': '165,000',
        'website': 'https://fireflyfestival.com/',
        'picture':'https://aegwebprod.blob.core.windows.net/content/content_images/239/oSBXtJWem01K4YHVUPElv1crtvSHHEWQMHxXjekN.png',
    },

    'Pitchfork Music Festival': {
        'location': 'Union Park, Chicago',
        'date': 'July 15-17, 2022',
        'genre': 'alternative rock, indie rock, electronic, hip hop',
        'description': 'The Pitchfork Music Festival is an annual summer music festival organized by Pitchfork Media and held in Union Park in Chicago, Illinois. Starting in 2011, the festival announced a branch staged in Paris at Grande halle de la Villette.',
        'attendance': '60,000',
        'website': 'https://pitchforkmusicfestival.com/',
        'picture':'https://media.pitchfork.com/photos/622771d010cc5cd4d04eb2c2/master/pass/Pitchfork-Festival-2022-Lineup.png',
    },

    'Summerfest, The World\'s Largest Music Festival': {
        'location': 'Milwaukee, Wisconsin',
        'date': 'June 23 - July 9, 2022',
        'genre': 'alternative rock, indie rock, electronic, hip hop',
        'description': 'Summerfest is an annual music festival held in downtown Milwaukee, Wisconsin. First held in 1968, Summerfest is located at Henry Maier Festival Park, adjacent to Lake Michigan and Milwaukee\'s central business district.',
        'attendance': '45,000',
        'website': 'https://www.summerfest.com/lineup/',
        'picture':'https://pbs.twimg.com/media/FPBUXgJXMAYwe-h?format=jpg&name=4096x4096',
    },

    'Country Jam Colorado': {
        'location': 'Grand Junction, Colorado',
        'date': 'June 23 - 25, 2022',
        'genre': 'country',
        'description': 'Country Jam USA is a 3-day annual country music festival held in Eau Claire, Wisconsin. The first festival was held in 1990, making Country Jam USA one of the longest-running festivals in the country.',
        'attendance': '130,000',
        'website': 'https://countryjam.com/',
        'picture':'https://countryjam.com/wp-content/uploads/2021/10/MS_5506-UPDATED.jpg',
    },

    'Hangout Music Festival': {
        'location': 'Gulf Shores, Alabama',
        'date': 'May 19-21, 2003',
        'genre': 'rock, alternative, electronic dance music, indie, hip hop, jam bands, reggae',
        'description': 'Hangout Fest 2023 features great indie rock, hip-hop and electronic music. You can soak up the sun while you listen to great music on a great beach in the Gulf of Mexico! Hangout Fest also has a lot of things to do in addition to music, which you can learn more about below.',
        'attendance': '40,000',
        'website': 'http://www.thespacelab.tv/spaceLAB/theSHOW/MusicFestivals/Hangout-Fest-2023-Lineup-Tickets-Schedule-Dates.html',
        'picture':'https://pbs.twimg.com/media/FGQla9iXoAkP5DF?format=jpg&name=medium',
    },

    'Outside Lands Music and Arts Festival': {
        'location': 'Golden Gate Park, San Francisco',
        'date': 'August 5-7, 2022',
        'genre': 'electronic music and visual artists',
        'description': 'The Outside Lands Music and Arts Festival is a music festival held annually in San Francisco, California, at Golden Gate Park. The festival is produced by Another Planet Entertainment, Superfly Presents, and Starr Hill Presents. It is the largest independently owned music festival in the US.',
        'attendance': '200,000',
        'website': 'https://www.sfoutsidelands.com/',
        'picture':'https://pbs.twimg.com/media/FS-aBO-WAAAQugc?format=jpg&name=4096x4096',
    },


    'Electric Zoo': {
        'location': 'Randall\'s Island, NYC',
        'date': 'September 2-4, 2022',
        'genre': 'electric',
        'description': 'Electric Zoo is an annual electronic music festival held over Labor Day weekend in New York City on Randall\'s Island. The festival represents all genres of electronic music, bringing top international DJs and live acts from multiple countries to four stages.',
        'attendance': '85,000',
        'website': 'https://electriczoo.com/',
        'picture':'https://electriczoo.com/wp-content/uploads/2022/06/EZoo2022_StageByStageLineup_4x5.png',
    },

    'The RIDE Festival': {
        'location': 'Telluride, Colorado',
        'date': 'July 6-10, 2022',
        'genre': 'rock and roll',
        'description': 'Since its debut in 2012, The RIDE Festival has quickly garnered a reputation among music fans for its thoughtful performance curation, handpicking rootsy, rocking talent whose music flawlessly compliments the festivals stunning Telluride, Colorado setting. Past RIDE Festival lineups have included such acts as Pearl Jam, Cage the Elephant, Widespread Panic, David Byrne and St. Vincent, Edward Sharpe & the Magnetic Zeros, Ben Harper, Thievery Corporation, North Mississippi Allstars, The Lumineers, Rodrigo y Gabriela, Drive-By-Truckers, Cake, Los Lobos, Steve Earle, among others. In addition to stellar live music, The RIDE Festivals close proximity to the many outdoor activities that Telluride and Southern Colorado have to offer help make the festival a unique destination event. Attendees can enjoy hiking, biking, hot springs, and so much more all in a truly majestic setting.',
        'attendance': '8,000',
        'website': 'https://ridefestival.com/',
        'picture':'https://ridefestival.com/wp-content/uploads/2022/06/ride-fest_banner1-700.jpg',
    },

    'Life is Beautiful Music and Arts Festival': {
        'location': 'Downtown, Las Vegas',
        'date': 'September 16-18, 2022',
        'genre': 'music, culinary art, comedy, learning festival',
        'description': 'Life Is Beautiful Music & Art Festival is an annual music, culinary, art, and learning festival held in Downtown Las Vegas, Nevada, United States. It debuted in 2013 as a three-day event. In 2019, it was one of the world\'s highest grossing festivals with revenues of $17.7 million. ',
        'attendance': '180,000',
        'website': 'https://lifeisbeautiful.com/',
        'picture':'https://mma.prnewswire.com/media/1766386/Life_is_Beautiful_Lineup_Poster.jpg?w=400',
    },

    'Stagecoach Festival': {
        'location': 'Empire Polo Club, California',
        'date': 'April 29 - Mayy 1, 2022',
        'genre': 'folk, mainstream country, southern rock, bluegrass, roots rock, americana, alternative country',
        'description': 'The Stagecoach Festival is an outdoor country music festival held annually at the Empire Polo Club in Indio, California. Various artists attend, whether they be mainstream or relatively unknown, ranging from folk, mainstream country, bluegrass, roots rock, americana and alternative country.',
        'attendance': '80,000',
        'website': 'https://www.stagecoachfestival.com/',
        'picture':'https://images.ctfassets.net/nec7dfptn2hs/4UivGWGfMrKtyBqRRnHQX0/8296a709842d7fa5fde41e692d0e9f77/stagecoach_2022_1800x2400_v4.jpg',
    },

    'Stagecoach Festival': {
        'location': 'Empire Polo Club, California',
        'date': 'April 29 - May 1, 2022',
        'genre': 'folk, mainstream country, southern rock, bluegrass, roots rock, americana, alternative country',
        'description': 'The Stagecoach Festival is an outdoor country music festival held annually at the Empire Polo Club in Indio, California. Various artists attend, whether they be mainstream or relatively unknown, ranging from folk, mainstream country, bluegrass, roots rock, americana and alternative country.',
        'attendance': '80,000',
        'website': 'https://www.stagecoachfestival.com/',
        'picture':'https://images.ctfassets.net/nec7dfptn2hs/4UivGWGfMrKtyBqRRnHQX0/8296a709842d7fa5fde41e692d0e9f77/stagecoach_2022_1800x2400_v4.jpg',
    },

    'Afro-Punk Festival': {
        'location': 'Brooklyn, New York',
        'date': 'September 10 - 11, 2022',
        'genre': 'punk rock, alternative rock',
        'description': 'Afropunk Festival was an annual arts festival that featured music, film, fashion, and art produced by black artists. Beginning in 2005 at the Brooklyn Academy of Music in New York, in later years Afropunk Festivals were also held in Atlanta, Paris and London',
        'attendance': '60,000',
        'website': 'https://afropunk.com/',
        'picture':'https://cdn.vor.us/event/484382/dbbec02bcbbe4fcea5b73ef637a5baa5.image!jpeg.1947969.jpg.AP_BK_LINEUP_FULL_1000X1000.jpg',
    },

    'Boston Calling Music Festival': {
        'location': 'Harvard Stadium, Boston, Massachusetts',
        'date': 'September 10 - 11, 2022',
        'genre': 'rock, hip hop, indie',
        'description': 'Boston Calling Music Festival is a Boston-based music festival. The festival debuted in May 2013 and previously took place twice a year, May and September, at City Hall Plaza. The festival reportedly attracted 20–22,000 fans with its earlier editions, eventually drawing roughly 40,000 festival goers in 2017.',
        'attendance': '40,000',
        'website': 'https://bostoncalling.com/',
        'picture':'https://bostoncalling.com/wp-content/uploads/2022/04/BC2022_Food-Admat_OriginalSize_V3-e1650469580588.jpg',
    },

    'Riot Fest': {
        'location': 'Douglass Park, Chicago, Illinois',
        'date': 'September 16 - 18, 2022',
        'genre': 'punk rock, rock, alternative rock',
        'description': 'Riot Fest is an annual three-day music festival based in Chicago, Illinois, at Douglass Park. First started as a multi-venue festival in Chicago in 2005, Riot Fest has since become an outdoor festival starting in 2012, later expanding to Denver and Toronto until 2017, specializing in rock, punk, alternative rock, and hip hop.',
        'attendance': '120,000',
        'website': 'https://riotfest.org/',
        'picture':'https://riotfest.org/wp-content/uploads/2022/05/riot-fest-2022-lineup-daily.jpg',
    },

    'Country Stampede Music Festival': {
        'location': 'Topeka, Kansas',
        'date': 'July 14-16, 2022',
        'genre': 'punk rock, rock, alternative rock',
        'description': 'The Country Stampede is an annual 3-day outdoor music and camping festival that takes place in Topeka, Kansas. The well-respected Country Stampede is nationally known as one of the largest music festivals in the Midwest and has grown to almost 400 acres. The BIGGEST names in country music have performed on stage such as Kenny Chesney, Miranda Lambert, Reba McEntire, Taylor Swift, Chris Stapleton, Jason Aldean,  Florida Georgia Line, Luke Bryan and so many more. Country Stampede won the coveted 2014 Governor’s Outstanding Tourism Event award in the State of Kansas, along with countless other awards over the years.  Television shows such as The CMT Top 20 Countdown, Ellen, The Outdoor Channel, and several other popular television shows have filmed and broadcast live from the festival.',
        'attendance': '170,000',
        'website': 'https://www.countrystampede.com/',
        'picture':'https://pbs.twimg.com/media/FJ-uU27XoAATmbd.jpg:large',
    },

    'Rooster Walk Music Festival': {
        'location': 'Axton, VA',
        'date': 'May 26-29, 2022',
        'genre': 'art, food, craft beer, camping, disc golf, kid\'s activities',
        'description': 'Making the most of a tragic situation, that\'s how Rooster Walk came about. The Rooster Walk Music and Arts Festival was created in memory of two of our best childhood friends who passed away while still in their 20s: Edwin “the Rooster” Penn and Walker Shank. This festival celebrates life and the notion that you shouldn\'t waste a moment of it.',
        'attendance': '1,226,000',
        'website': 'https://roosterwalk.com/',
        'picture':'https://roosterwalk.com/rooster-press/wp-content/uploads/2022/05/RW12-Poster-Final.jpg',
    },

    'Kate Wolf Music Festival': {
        'location': 'Black Oak Ranch, Laytonville, California',
        'date': 'June 23-26, 2022',
        'genre': 'folk music',
        'description': 'In June of 1996, the Kate Wolf Retrospective Concert was held to celebrate the music of Kate Wolf. Her friends, family, and a sold-out crowd had such a wonderful time that we decided to make it an annual event. Thus was born the Kate Wolf Music Festival. Kate\'s family invites you to come to the next festival. We hope to see you there!',
        'attendance': '5,000',
        'website': 'https://katewolfmusicfestival.com/',
        'picture':'https://katewolfmusicfestival.com/wp-content/plugins/wp_roksprocket/cache/52e77842ea1b628e10cd3b9a772962c4_0_600.jpg',
    },

    'Stilldream Festival': {
        'location': 'Beldon, California',
        'date': 'June 23-27, 2022',
        'genre': 'music, community, nature, culture and consciousness',
        'description': 'For twenty years, Stilldream Festival has been an oasis of chill in California. The festival takes place over the summer solstice and features camping in the beautiful mountains around Belden.',
        'attendance': '?',
        'website': 'https://www.musicfestivalwizard.com/festivals/stilldream-festival-2022/',
        'picture':'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F221041619%2F139473750547%2F1%2Foriginal.20220131-083253?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=ceffa889096e755f3a264be8e335905c',
    },

    'Electric Forest': {
        'location': 'Rothbury, Michigan',
        'date': 'June 23-26, 2022',
        'genre': 'jam and rock',
        'description': 'Electric Forest is a four-day and one-weekend multi-genre event with a focus on electronic music and jam band genres. It is held in Rothbury, Michigan at the Double JJ Resort. The original event debuted in 2008, under the name Rothbury Festival, and focused on jam bands and rock bands',
        'attendance': '40,000',
        'website': 'https://electricforestfestival.com/',
        'picture':'https://electricforestfestival.com/wp-content/uploads/2022/06/EF-Flattened-Final-Poster.jpg',
    },

    'Blue Ox Music Festival': {
        'location': 'Eau Claire, Wisconsin',
        'date': 'June 23-26, 2022',
        'genre': 'bluegrass, americana',
        'description': 'Bluegrass band, Pert Near Sandstone, hosts the Blue Ox Music Festival just outside of Eau Claire, Wisconsin. The Whispering Pines Campground brings back festies each year with its hammock-handy shade trees and the peace of the central pond. This small sized festival is beloved for its cozy size and excellent bluegrass lineup.',
        'attendance': '4,000',
        'website': 'https://www.blueoxmusicfestival.com/',
        'picture':'https://www.musicfestivalwizard.com/wp-content/uploads/2021/10/Blue-Ox-2022-Lineup-Poster.jpgg',
    },

    'Green River Music Festival': {
        'location': 'Franklin County Fairgrounds, Massachusetts',
        'date': 'June 24-26, 2022',
        'genre': 'bluegrass, americana',
        'description': 'Named one of “fifty essential summer music festivals” by The New York Times, Green River Festival is Western Massachusetts\' signature summer event. Celebrating its 35th year this June, Green River is a fantastic celebration of music and community: a world-class lineup of over 30 acts on three stages, the best in local food, beer and wine, handmade juried crafts at The Makers Market, a wide array of kid\'s music and activities, and camping. Come see why NPR recently wrote, "The Green River Festival lineup gets more legendary by the year."',
        'attendance': '4,000',
        'website': 'https://www.greenriverfestival.com/',
        'picture':'https://images.squarespace-cdn.com/content/v1/61d5ea6050d90f16e14772cb/70fe0539-b53f-4938-b580-3805b0f6663c/LakeStreetDive-dates.jpg?format=1500w',
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