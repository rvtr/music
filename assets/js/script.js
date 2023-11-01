'use strict';



/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Ahmad_Jamal_-_Jamalca_(1974).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Ahmad_Jamal_-_Jamalca_(1974).jpeg",
    title: "Jamalca",
    album: "Jamalca",
    year: 1974,
    artist: "Ahmad Jamal",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Ahmad_Jamal_-_Jamalca_(1974).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Ahmad_Jamal_-_One_(1978).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Ahmad_Jamal_-_One_(1978).jpeg",
    title: "One",
    album: "One",
    year: 1978,
    artist: "Ahmad Jamal",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Ahmad_Jamal_-_One_(1978).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Ahmad_Jamal_-_Poinciana_(1951).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Ahmad_Jamal_-_Poinciana_(1951).jpeg",
    title: "Poinciana",
    album: "Poinciana",
    year: 1951,
    artist: "Ahmad Jamal",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Ahmad_Jamal_-_Poinciana_(1951).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Akira_Ishikawa_&_His_Count_Buffalos_-_Get_Up_!_(1975).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Akira_Ishikawa_&_His_Count_Buffalos_-_Get_Up_!_(1975).jpeg",
    title: "Get Up!",
    album: "Get Up!", 
    year: 1975,
    artist: "Akira Ishikawa & His Count Buffalos",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Akira_Ishikawa_&_His_Count_Buffalos_-_Get_Up_!_(1975).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Akira_Ishikawa_-_Bakishinba_Memories_of_Africa_(1970).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Akira_Ishikawa_-_Bakishinba_Memories_of_Africa_(1970).jpeg",
    title: "Bakishinba Memories of Africa",
    album: "Bakishinba Memories of Africa", 
    year: 1970,
    artist: "Akira Ishikawa",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Akira_Ishikawa_-_Bakishinba_Memories_of_Africa_(1970).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/AllahLas_-_AllahLas_(2012).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/AllahLas_-_AllahLas_(2012).jpeg",
    title: "AllahLas",
    album: "AllahLas", 
    year: 2012,
    artist: "AllahLas",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/AllahLas_-_AllahLas_(2012).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/AllahLas_-_Worship_The_Sun_(2014).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/AllahLas_-_Worship_The_Sun_(2014).jpeg",
    title: "Worship The Sun",
    album: "Worship The Sun", 
    year: 2014,
    artist: "AllahLas",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/AllahLas_-_Worship_The_Sun_(2014).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Anri_-_Timely_(1983).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Anri_-_Timely_(1983).jpeg",
    title: "Timely",
    album: "Timely", 
    year: 1983,
    artist: "Anri",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Anri_-_Timely_(1983).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Automatic_Man_-_Visitors_(1977).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Automatic_Man_-_Visitors_(1977).jpeg",
    title: "Visitors",
    album: "Visitors", 
    year: 1977,
    artist: "Automatic Man",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Automatic_Man_-_Visitors_(1977).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Camel_-_Mirage_(1974).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Camel_-_Mirage_(1974).jpeg",
    title: "Mirage",
    album: "Mirage", 
    year: 1974,
    artist: "Camel",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Camel_-_Mirage_(1974).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Casey_And_The_Pressure_Group_-_Powerhouse_(1970).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Casey_And_The_Pressure_Group_-_Powerhouse_(1970).jpeg",
    title: "Powerhouse",
    album: "Powerhouse", 
    year: 1970,
    artist: "Casey And The Pressure Group",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Casey_And_The_Pressure_Group_-_Powerhouse_(1970).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Casiopea_-_Crosspoint_(1981).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Casiopea_-_Crosspoint_(1981).jpeg",
    title: "Crosspoint",
    album: "Crosspoint", 
    year: 1981,
    artist: "Casiopea",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Casiopea_-_Crosspoint_(1981).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Casiopea_-_Mint_Jams_(1982).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Casiopea_-_Mint_Jams_(1982).jpeg",
    title: "Mint Jams",
    album: "Mint Jams", 
    year: 1982,
    artist: "Casiopea",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Casiopea_-_Mint_Jams_(1982).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Chu_Kosaka_-_Arigato_(1971).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Chu_Kosaka_-_Arigato_(1971).jpeg",
    title: "Arigato",
    album: "Arigato", 
    year: 1971,
    artist: "Chu Kosaka",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Chu_Kosaka_-_Arigato_(1971).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Chu_Kosaka_-_Horo_(1975).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Chu_Kosaka_-_Horo_(1975).jpeg",
    title: "Horo",
    album: "Horo", 
    year: 1975,
    artist: "Chu Kosaka",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Chu_Kosaka_-_Horo_(1975).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Chu_Kosaka_-_Morning_(1977).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Chu_Kosaka_-_Morning_(1977).jpeg",
    title: "Morning",
    album: "Morning", 
    year: 1977,
    artist: "Chu Kosaka",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Chu_Kosaka_-_Morning_(1977).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Crypto_-_Crypto_(1975).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Crypto_-_Crypto_(1975).jpeg",
    title: "Crypto",
    album: "Crypto", 
    year: 1975,
    artist: "Crypto",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Crypto_-_Crypto_(1975).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Cymande_-_Promised_Heights_(1974).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Cymande_-_Promised_Heights_(1974).jpeg",
    title: "Promised Heights",
    album: "Promised Heights", 
    year: 1974,
    artist: "Cymande",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Cymande_-_Promised_Heights_(1974).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Daisuke_Tanabe_-_Before_I_Forget_(2010).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Daisuke_Tanabe_-_Before_I_Forget_(2010).jpeg",
    title: "Before I Forget",
    album: "Before I Forget", 
    year: 2010,
    artist: "Daisuke Tanabe",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Daisuke_Tanabe_-_Before_I_Forget_(2010).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Daisuke_Tanabe_-_Cat_Steps_(2018).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Daisuke_Tanabe_-_Cat_Steps_(2018).jpeg",
    title: "Cat Steps",
    album: "Cat Steps", 
    year: 2018,
    artist: "Daisuke Tanabe",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Daisuke_Tanabe_-_Cat_Steps_(2018).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Daisuke_Tanabe_-_Ten_(2020).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Daisuke_Tanabe_-_Ten_(2020).jpeg",
    title: "Ten",
    album: "Ten", 
    year: 2020,
    artist: "Daisuke Tanabe",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Daisuke_Tanabe_-_Ten_(2020).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Dimension_-_Eighth_Dimension_(1996).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Dimension_-_Eighth_Dimension_(1996).jpeg",
    title: "Eighth Dimesnion",
    album: "Eighth Dimesnion", 
    year: 1996,
    artist: "Dimesnion",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Dimension_-_Eighth_Dimension_(1996).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Dutch_Treat_-_Tranquility_(1977).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Dutch_Treat_-_Tranquility_(1977).jpeg",
    title: "Tranquility",
    album: "Tranquility", 
    year: 1977,
    artist: "Dutch Treat",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Dutch_Treat_-_Tranquility_(1977).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Eloy_-_Colours.jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Eloy_-_Colours.jpeg",
    title: "Colours",
    album: "Colours", 
    year: 9999,
    artist: "Eloy",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Eloy_-_Colours.mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Eloy_-_Ocean_(1977).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Eloy_-_Ocean_(1977).jpeg",
    title: "Ocean",
    album: "Ocean", 
    year: 1977,
    artist: "Eloy",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Eloy_-_Ocean_(1977).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Eloy_-_Planets_(1981).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Eloy_-_Planets_(1981).jpeg",
    title: "Planets",
    album: "Planets", 
    year: 1981,
    artist: "Eloy",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Eloy_-_Planets_(1981).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Eloy_-_Time_to_turn_(1982).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Eloy_-_Time_to_turn_(1982).jpeg",
    title: "Time to turn",
    album: "Time to turn", 
    year: 1982,
    artist: "Eloy",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Eloy_-_Time_to_turn_(1982).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Eloy_-_Visionary.jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Eloy_-_Visionary.jpeg",
    title: "Visionary",
    album: "Visionary", 
    year: 9999,
    artist: "Eloy",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Eloy_-_Visionary.mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Emphasis_-_Emphasis_(1975).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Emphasis_-_Emphasis_(1975).jpeg",
    title: "Emphasis",
    album: "Emphasis", 
    year: 1975,
    artist: "Emphasis",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Emphasis_-_Emphasis_(1975).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Fela_Kuti_-_Gentleman_(1973).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Fela_Kuti_-_Gentleman_(1973).jpeg",
    title: "Gentleman",
    album: "Gentleman", 
    year: 1973,
    artist: "Fela Kuti",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Fela_Kuti_-_Gentleman_(1973).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Fela_Kuti_-_He_Miss_Road_(1975).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Fela_Kuti_-_He_Miss_Road_(1975).jpeg",
    title: "He Miss Road",
    album: "He Miss Road", 
    year: 1975,
    artist: "Fela Kuti",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Fela_Kuti_-_He_Miss_Road_(1975).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Friendship_&_Lee_Ritenour_-_Friendship_(1979).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Friendship_&_Lee_Ritenour_-_Friendship_(1979).jpeg",
    title: "Friendship",
    album: "Friendship", 
    year: 1979,
    artist: "Friendship & Lee Ritenour",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Friendship_&_Lee_Ritenour_-_Friendship_(1979).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Gabor_Szabo_-_Dreams_(1968).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Gabor_Szabo_-_Dreams_(1968).jpeg",
    title: "Dreams",
    album: "Dreams", 
    year: 1968,
    artist: "Gabor Szabo",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Gabor_Szabo_-_Dreams_(1968).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Hako_Yamasaki_-_Human_Nature_(1979).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Hako_Yamasaki_-_Human_Nature_(1979).jpeg",
    title: "Human Nature",
    album: "Human Nature", 
    year: 1979,
    artist: "Hako Yamasaki",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Hako_Yamasaki_-_Human_Nature_(1979).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Hako_Yamasaki_-_Tobimasu_(1975).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Hako_Yamasaki_-_Tobimasu_(1975).jpeg",
    title: "Tobimasu",
    album: "Tobimasu", 
    year: 1975,
    artist: "Hako Yamasaki",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Hako_Yamasaki_-_Tobimasu_(1975).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Hiromasa_Suzuki_&_Jiro_Inagaki_Big_Soul_Media_-_By_The_Red_Stream_(1973).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Hiromasa_Suzuki_&_Jiro_Inagaki_Big_Soul_Media_-_By_The_Red_Stream_(1973).jpeg",
    title: "By The Red Stream",
    album: "By The Red Stream", 
    year: 1973,
    artist: "Hiromasa Suzuki & Jiro Inagaki Big Soul Media",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Hiromasa_Suzuki_&_Jiro_Inagaki_Big_Soul_Media_-_By_The_Red_Stream_(1973).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Ian_Carr's_Nucleus_-_In_Flagranti_Delicto_(1977).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Ian_Carr's_Nucleus_-_In_Flagranti_Delicto_(1977).jpeg",
    title: "In Flagranti Delicto",
    album: "In Flagranti Delicto", 
    year: 1977,
    artist: "Ian Carr's Nucleus",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Ian_Carr's_Nucleus_-_In_Flagranti_Delicto_(1977).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Ice_-_Each_Man_Makes_His_Destiny_(1974).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Ice_-_Each_Man_Makes_His_Destiny_(1974).jpeg",
    title: "Each Man Makes His Destiny",
    album: "Each Man Makes His Destiny", 
    year: 1974,
    artist: "Ice",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Ice_-_Each_Man_Makes_His_Destiny_(1974).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Jiro_Inagaki_Big_Soul_Media_-_Funky_Stuff_(1975).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Jiro_Inagaki_Big_Soul_Media_-_Funky_Stuff_(1975).jpeg",
    title: "Funky Stuff",
    album: "Funky Stuff", 
    year: 1975,
    artist: "Jiro Inagaki Big Soul Media",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Jiro_Inagaki_Big_Soul_Media_-_Funky_Stuff_(1975).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Jun_Fukamachi_-_The_Sea_Of_Dirac_(1977).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Jun_Fukamachi_-_The_Sea_Of_Dirac_(1977).jpeg",
    title: "The Sea Of Dirac",
    album: "The Sea Of Dirac", 
    year: 1977,
    artist: "Jun Fukamachi",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Jun_Fukamachi_-_The_Sea_Of_Dirac_(1977).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Kazumi_Watanabe_&_Manhattan_Blaze_-_Village_In_Bubbles_(1978).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Kazumi_Watanabe_&_Manhattan_Blaze_-_Village_In_Bubbles_(1978).jpeg",
    title: "Village In Bubbles",
    album: "Village In Bubbles", 
    year: 1978,
    artist: "Kazumi Watanabe & Manhattan Blaze",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Kazumi_Watanabe_&_Manhattan_Blaze_-_Village_In_Bubbles_(1978).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Kazumi_Watanabe_-_The_Spice_Of_Life_Too_(1988).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Kazumi_Watanabe_-_The_Spice_Of_Life_Too_(1988).jpeg",
    title: "The Spice Of Life Too",
    album: "The Spice Of Life Too", 
    year: 1988,
    artist: "Kazumi Watanabe",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Kazumi_Watanabe_-_The_Spice_Of_Life_Too_(1988).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Kazumi_Watanabe_Quartet_-_Milky_Shade_(1976).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Kazumi_Watanabe_Quartet_-_Milky_Shade_(1976).jpeg",
    title: "Milky Shade",
    album: "Milky Shade", 
    year: 1976,
    artist: "Kazumi Watanabe Quartet",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Kazumi_Watanabe_Quartet_-_Milky_Shade_(1976).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Känguru_-_Känguru_(1981).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Känguru_-_Känguru_(1981).jpeg",
    title: "Känguru",
    album: "Känguru", 
    year: 1981,
    artist: "Känguru",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Känguru_-_Känguru_(1981).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Kumi_Miyasato_-_I_Only_Have_Eyes_For_You_(1985).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Kumi_Miyasato_-_I_Only_Have_Eyes_For_You_(1985).jpeg",
    title: "I Only Have Eyes For You",
    album: "I Only Have Eyes For You", 
    year: 1985,
    artist: "Kumi Miyasato",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Kumi_Miyasato_-_I_Only_Have_Eyes_For_You_(1985).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Lamp_-_Gensou_(2008).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Lamp_-_Gensou_(2008).jpeg",
    title: "Gensou",
    album: "Gensou", 
    year: 2008,
    artist: "Lamp",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Lamp_-_Gensou_(2008).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Lamp_-_Tokyo_Utopia_Tsushin_(2011).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Lamp_-_Tokyo_Utopia_Tsushin_(2011).jpeg",
    title: "Tokyo Utopia Tsushin",
    album: "Tokyo Utopia Tsushin", 
    year: 2011,
    artist: "Lamp",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Lamp_-_Tokyo_Utopia_Tsushin_(2011).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Lamp_-_恋人へ_(2004).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Lamp_-_恋人へ_(2004).jpeg",
    title: "恋人へ",
    album: "恋人へ", 
    year: 2004,
    artist: "Lamp",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Lamp_-_恋人へ_(2004).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Lift_-_Caverns_Of_Your_Brain_(1977).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Lift_-_Caverns_Of_Your_Brain_(1977).jpeg",
    title: "Caverns Of Your Brain",
    album: "Caverns Of Your Brain", 
    year: 1977,
    artist: "Lift",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Lift_-_Caverns_Of_Your_Brain_(1977).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Mamadou_Diabaté_-_Griot_classique_(2014).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Mamadou_Diabaté_-_Griot_classique_(2014).jpeg",
    title: "Griot Classique",
    album: "Griot Classique", 
    year: 2014,
    artist: "Mamadou Diabaté",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Mamadou_Diabaté_-_Griot_classique_(2014).mp3",
  },
  {
    backgroundImage: "https://cdn.randommeaninglesscharacters.com/music-albums/Mamadou_Diabaté_-_Tunga_(2000).jpeg",
    posterUrl: "https://cdn.randommeaninglesscharacters.com/music-albums/Mamadou_Diabaté_-_Tunga_(2000).jpeg",
    title: "Tunga",
    album: "Tunga", 
    year: 2000,
    artist: "Mamadou Diabaté",
    musicPath: "https://cdn.randommeaninglesscharacters.com/music-albums/Mamadou_Diabaté_-_Tunga_(2000).mp3",
  },

];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
          <!-- <span style="color:white;font-size:10pt;">${musicData[i].title}</span> -->
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
     playerSeekRange.value = audioSource.currentTime;
     skipNext();
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);