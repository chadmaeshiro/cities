const cities = [
  { name: 'Urban Honolulu', population: 351554, island: 'Oahu' },
  { name: 'East Honolulu', population: 50076, island: 'Oahu' },
  { name: 'Hilo', population: 46559, island: 'Hawaii' },
  { name: 'Pearl City', population: 45941, island: 'Oahu' },
  { name: 'Kailua', population: 40402, island: 'Oahu' },
  { name: 'Waipahu', population: 39927, island: 'Oahu' },
  { name: 'Kaneohe', population: 34509, island: 'Oahu' },
  { name: 'Ewa Gentry', population: 28125, island: 'Oahu' },
  { name: 'Mililani Town', population: 27974, island: 'Oahu' },
  { name: 'Kahului', population: 27938, island: 'Maui' },
  { name: 'Kapolei', population: 23248, island: 'Oahu' },
  { name: 'Kihei', population: 22840, island: 'Maui' },
  { name: 'Mililani Mauka', population: 21657, island: 'Oahu' },
  { name: 'Kailua Kona', population: 21460, island: 'Hawaii' },
  { name: 'Makakilo', population: 20862, island: 'Oahu' },
  { name: 'Schofield Barracks', population: 18255, island: 'Oahu' },
  { name: 'Wahiawa', population: 17357, island: 'Oahu' },
  { name: 'Ocean Pointe', population: 16676, island: 'Oahu' },
  { name: 'Wailuku', population: 15670, island: 'Maui' },
  { name: 'Halawa', population: 14990, island: 'Oahu' },
  { name: 'Ewa Beach', population: 14614, island: 'Oahu' },
  { name: 'Royal Kunia', population: 14390, island: 'Oahu' },
  { name: 'Waianae', population: 14152, island: 'Oahu' },
  { name: 'Waimalu', population: 13818, island: 'Oahu' },
  { name: 'Lahaina', population: 13261, island: 'Maui' },
  { name: 'Maili', population: 13245, island: 'Oahu' },
  { name: 'Nanakuli', population: 12587, island: 'Oahu' },
  { name: 'Hawaiian Paradise Park', population: 11942, island: 'Hawaii' },
  { name: 'Kaneohe Base', population: 11829, island: 'Oahu' },
  { name: 'Kaiminani', population: 11557 },
  { name: 'Kapaa', population: 11516, island: 'Kauai' },
  { name: 'Waihee - Waiehu', population: 11059, island: 'Maui' },
  { name: 'Waipio', population: 10989, island: 'Oahu' },
  { name: 'Waimea', population: 10422, island: 'Hawaii' },
  { name: 'Hickam Housing', population: 10022, island: 'Oahu' },
  { name: 'Makaha', population: 9710, island: 'Oahu' },
  { name: 'Aiea', population: 9527, island: 'Oahu' },
  { name: 'Haiku - Pauwela', population: 9347, island: 'Maui' },
  { name: 'Ahuimanu', population: 8943, island: 'Oahu' },
  { name: 'Lihue', population: 8371, island: 'Kauai' },
  { name: 'Makawao', population: 7670, island: 'Maui' },
  { name: 'Waikoloa Village', population: 7519, island: 'Hawaii' },
  { name: 'Kula', population: 7495, island: 'Maui' },
  { name: 'Waikele', population: 7495, island: 'Oahu' },
  { name: 'Pukalani', population: 7315, island: 'Maui' },
  { name: 'Kahaluu - Keauhou', population: 7236, island: 'Oahu' },
  { name: 'Napili - Honokowai', population: 6762, island: 'Maui' },
  { name: 'Ewa Villages', population: 6657, island: 'Oahu' },
  { name: 'Wailua Homesteads', population: 6634, island: 'Kauai' },
  { name: 'Wailea', population: 6546, island: 'Maui' },
  { name: 'Laie', population: 6436, island: 'Oahu' },
  { name: 'West Loch Estate', population: 6239, island: 'Oahu' },
  { name: 'Iroquois Point', population: 5737, island: 'Oahu' },
  { name: 'Waipio Acres', population: 5618, island: 'Oahu' },
  { name: 'Waimanalo', population: 5371, island: 'Oahu' },
  { name: 'Kahaluu', population: 5006, island: 'Oahu' },
  { name: 'Heeia', population: 4777, island: 'Oahu' },
  { name: 'Kalaheo', population: 4776, island: 'Kauai' },
  { name: 'Haleiwa', population: 4651, island: 'Oahu' },
  { name: 'Hanamaulu', population: 4435, island: 'Kauai' },
  { name: 'Pupukea', population: 4416, island: 'Oahu' },
  { name: 'Waimanalo Beach', population: 4389, island: 'Oahu' },
  { name: 'Hawaiian Beaches', population: 4213, island: 'Hawaii' },
  { name: 'Puhi', population: 4154, island: 'Kauai' },
  { name: 'Captain Cook', population: 4087, island: 'Hawaii' },
  { name: 'Waikapu', population: 4002, island: 'Maui' },
  { name: 'Ainaloa', population: 3963, island: 'Hawaii' },
  { name: 'Whitmore Village', population: 3881, island: 'Oahu' },
  { name: 'Hauula', population: 3869, island: 'Oahu' },
  { name: 'Hawaiian Ocean View', population: 3851, island: 'Hawaii' },
  { name: 'East Kapolei', population: 3610, island: 'Oahu' },
  { name: 'Mountain View', population: 3467, island: 'Hawaii' },
  { name: 'Helemano', population: 3404, island: 'Oahu' },
  { name: 'Kilauea', population: 3349, island: 'Kauai' },
  { name: 'Kaunakakai', population: 3263, island: 'Maui' },
  { name: 'Waialua', population: 3222, island: 'Oahu' },
  { name: 'Kurtistown', population: 3115, island: 'Hawaii' },
  { name: 'Hawaiian Acres', population: 3093, island: 'Hawaii' },
  { name: 'Lanai City', population: 3079, island: 'Lanai' },
  { name: 'Kekaha', population: 3014, island: 'Kauai' },
  { name: 'Kalaeloa', population: 2808, island: 'Oahu' },
  { name: 'Anahola', population: 2787, island: 'Kauai' },
  { name: 'Orchidlands Estates', population: 2749, island: 'Hawaii' },
  { name: 'Lawai', population: 2733, island: 'Kauai' },
  { name: 'Holualoa', population: 2710, island: 'Hawaii' },
  { name: 'Keokea', population: 2645, island: 'Maui' },
  { name: 'Wailua', population: 2630, island: 'Kauai' },
  { name: 'Honaunau - Napoopoo', population: 2538, island: 'Hawaii' },
  { name: 'Hanapepe', population: 2456, island: 'Kauai' },
  { name: 'Paia', population: 2410, island: 'Maui' },
  { name: 'Kahuku', population: 2371, island: 'Oahu' },
  { name: 'Wheeler AFB', population: 2353, island: 'Oahu' },
  { name: 'Koloa', population: 2348, island: 'Kauai' },
  { name: 'Eleele', population: 2329, island: 'Kauai' },
  { name: 'Pahala', population: 2210, island: 'Hawaii' },
  { name: 'Kealakekua', population: 2128, island: 'Hawaii' },
  { name: 'Maunawili', population: 2071, island: 'Oahu' },
  { name: 'Kapaau', population: 2044, island: 'Hawaii' },
  { name: 'Kualapuu', population: 2024, island: 'Maui' },
  { name: 'Princeville', population: 1969, island: 'Kauai' },
];


function averagePopulation(pCities) {
  let count = 0;
  let total = 0;
  _.each(pCities, function avgPop(lmnt) {
    total += lmnt.population;
    count++;
  });
  console.log(total / count);
}

averagePopulation(cities);

function biggestAndSmallest(pCities){
  let smallest = _.min(pCities.population);
  let biggest = _.max(pCities.population);
  let sCity = "";
  let bCity = "";
  let final = _.reduce(pCities, function find(lmnt){
    if(lmnt.population==smallest){
      sCity = lmnt.name;
    }else if(lmnt.population==biggest){
      bCity = lmnt.name;
    }
  });
  console.log(smallest);
}
