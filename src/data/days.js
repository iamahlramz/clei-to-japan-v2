export const DAYS = [
  {
    date: "Fri, Mar 27",
    title: "We're Here! Welcome to Osaka",
    city: "travel",
    badge: "✈️ Travel",
    transport: {
      title: "Kansai Airport → Hanazono-cho Airbnb",
      icon: "🚃",
      steps: [
        "Exit arrivals, follow signs to 'Trains' on 2nd floor",
        "Option A (Recommended): Nankai Airport Express to Namba (~45 min, ¥970). At Namba, transfer to Osaka Metro Yotsubashi Line → Hanazono-cho (2 stops south, ~4 min, ¥190). Total: ~55 min, ~¥1,160",
        "Option B (Fastest): Nankai Rapi:t Limited Express to Namba (~34 min, ¥1,490). Same transfer at Namba to Yotsubashi Line. Total: ~45 min, ~¥1,680",
        "Option C (Bus): Limousine Bus to Namba OCAT (~50 min, ¥1,100). Walk to Namba Metro station, take Yotsubashi Line south to Hanazono-cho",
        "Tip for group of 6: With luggage + a child, the Rapi:t is worth the extra cost — reserved seats, spacious, luggage racks"
      ]
    },
    items: [
      { time: "6:35 AM", text: "Depart Manila → Cebu (PR1851)", icon: "✈️", type: "flight" },
      { time: "11:45 AM", text: "Depart Cebu → Osaka Kansai (PR410)", icon: "✈️", type: "flight" },
      { time: "~5:10 PM", text: "Arrive Kansai International Airport. Buy ICOCA cards, pick up WiFi, withdraw cash", icon: "🛬", type: "arrival" },
      { time: "~6:30 PM", text: "Train to Namba → Yotsubashi Line to Hanazono-cho. Check in to Airbnb, drop bags", icon: "🚃", type: "transport" },
      {
        time: "~7:30 PM", text: "Dinner in Dotonbori (~12 min subway from Hanazono-cho via Namba)", icon: "🍜", type: "food",
        food: [
          { name: "Takoyaki Doraku Wanaka", desc: "Iconic Dotonbori takoyaki — crispy outside, creamy inside. Get the variety box to try 4 flavors. Walk-up stand, cheap and fast. ~¥600", vibe: "Walk & eat", pick: true, mapLink: "https://www.google.com/maps/search/Takoyaki+Doraku+Wanaka+Dotonbori+Osaka+Japan" },
          { name: "Chibo Dotonbori", desc: "Popular okonomiyaki restaurant — cooked on hotplate in front of you. Kids love watching. Try the signature Dotonboriyaki (¥1,300–1,800). Can get crowded after 5pm, go early or expect a short wait.", vibe: "Sit-down, family-friendly", mapLink: "https://www.google.com/maps/search/Chibo+Dotonbori+Osaka+Japan" },
          { name: "Kushikatsu Daruma", desc: "Osaka's most famous kushikatsu chain — deep-fried skewers of meat and vegetables. Fun interactive dining, easy to order. Remember: no double-dipping in the communal sauce! ~¥1,500–2,500/person", vibe: "Fun atmosphere", mapLink: "https://www.google.com/maps/search/Kushikatsu+Daruma+Dotonbori+Osaka+Japan" },
          { name: "Konbini (7-Eleven, Lawson, FamilyMart)", desc: "Don't underestimate Japan's convenience stores! Great onigiri (rice balls), sandwiches, fried chicken, and desserts. Perfect for the tired child. Open 24/7", vibe: "Quick & cheap" },
        ]
      },
    ],
    tips: [
      "We'll be tired from travel — keep the first evening simple and just enjoy Dotonbori's atmosphere",
      "Hanazono-cho to Namba is just 2 stops on the Yotsubashi Line (~4 min, ¥190)",
      "Hanazono-cho is near Shinsekai — we can walk to Tsutenkaku Tower area in ~10 min",
    ],
  },
  {
    date: "Sat, Mar 28",
    title: "Castle, Sakura & Shopping",
    city: "osaka",
    badge: "🌸 Sakura + 🛍️ Shopping",
    transport: {
      title: "Getting Around Today",
      icon: "🚃",
      steps: [
        "Hanazono-cho → Osaka Castle: Yotsubashi Line to Hommachi (3 stops), transfer to Chuo Line → Tanimachi 4-chome or Morinomiya (~20 min total, ~¥280)",
        "Osaka Castle → Shinsaibashi: Chuo Line/Tanimachi Line to Shinsaibashi or walk via Nagahoribashi (~25 min subway)",
        "Shinsaibashi → Dotonbori/Namba: Walk south along the arcade (~10 min stroll)",
        "Namba → Hanazono-cho: Yotsubashi Line, 2 stops (~4 min, ¥190)",
        "Consider: Osaka Amazing Pass (1-day ¥3,500/adult) — unlimited subway + free entry to Osaka Castle and 40+ attractions"
      ]
    },
    items: [
      { time: "8:30 AM", text: "Breakfast near Airbnb or grab from konbini", icon: "☕", type: "food",
        food: [
          { name: "Lawson/FamilyMart near Hanazono-cho", desc: "Egg sandwich (tamago sando), onigiri, coffee. Quick, cheap (~¥300–500/person), and surprisingly delicious", vibe: "Quick grab" },
          { name: "Komeda's Coffee (various locations)", desc: "Popular Japanese coffee chain — famous for generous morning sets. Order a drink and get free thick toast + egg. Kid-friendly, spacious seating", vibe: "Sit-down breakfast", pick: true, mapLink: "https://www.google.com/maps/search/Komeda+Coffee+Osaka+Japan" },
          { name: "Shinsekai area cafés (10-min walk)", desc: "Walk to Shinsekai for a local morning vibe. Small kissaten (retro coffee shops) serve toast sets and coffee for ~¥500", vibe: "Local, atmospheric" },
        ]
      },
      { time: "9:30 AM", text: "Osaka Castle Park — explore the grounds amid early cherry blossoms. Wide paths for the stroller, open lawns for the 5yo to run. Castle tower entry: ¥1,200/adult, free for junior high & younger", icon: "🏯", type: "see" },
      { time: "10:30 AM", text: "Nishinomaru Garden (¥200, or ¥350 during evening illumination) — best sakura spot with ~300 cherry trees framing the castle. Perfect for photos", icon: "🌸", type: "see" },
      { time: "12:00 PM", text: "Lunch near Osaka Castle / en route to Shinsaibashi", icon: "🍱", type: "food",
        food: [
          { name: "Jo-Terrace Osaka (at castle park entrance)", desc: "Modern food court complex right at the castle. Multiple restaurants — udon, curry, rice bowls. Easy with a group since everyone can pick different food. ~¥800–1,200/person", vibe: "Food court, convenient", mapLink: "https://www.google.com/maps/search/Jo-Terrace+Osaka+Castle+Japan" },
          { name: "Picnic under the cherry blossoms", desc: "Grab bentos and drinks from a nearby konbini or the food stalls around the park. Eating under sakura trees (hanami) is a classic Japanese spring experience", vibe: "Picnic, authentic", pick: true },
          { name: "Yoshinoya or Matsuya (chain)", desc: "Reliable Japanese fast-food chains near any station — beef bowl (gyudon) sets from ~¥500. Quick, filling, kid-approved. Menu has pictures for easy ordering", vibe: "Quick & cheap" },
        ]
      },
      { time: "1:30 PM", text: "Subway to Shinsaibashi-suji — Osaka's main covered shopping arcade. Japanese fashion, UNIQLO, local boutiques", icon: "🛍️", type: "shop" },
      { time: "2:30 PM", text: "Daimaru Shinsaibashi — stunning department store. Fashion, cosmetics, rooftop garden", icon: "🏬", type: "shop" },
      { time: "4:00 PM", text: "Walk south into Dotonbori — neon canal strip, souvenir shops, Glico Running Man photo op", icon: "📸", type: "see" },
      { time: "5:00 PM", text: "Don Quijote (Dotonbori) — multi-floor discount store. Souvenirs, snacks, cosmetics, toys. Tax-free", icon: "🎪", type: "shop" },
      { time: "6:30 PM", text: "Dinner in Dotonbori/Namba area", icon: "🍽️", type: "food",
        food: [
          { name: "CREO-RU Dotonbori", desc: "All Osaka specialties in one place — takoyaki, okonomiyaki, and kushikatsu. 120 seats, great for big groups. ~¥1,500–3,000/person. 5 min from Namba Station", vibe: "All-in-one, family-friendly", pick: true, mapLink: "https://www.google.com/maps/search/CREO-RU+Dotonbori+Osaka+Japan" },
          { name: "Kukuru Dotonbori", desc: "30+ year old takoyaki specialty shop — super soft gooey takoyaki with huge octopus chunks. Terrace seats overlooking the canal. Can also order octopus shabu-shabu. ~¥600–1,500", vibe: "Casual, scenic", mapLink: "https://www.google.com/maps/search/Kukuru+Takoyaki+Dotonbori+Osaka+Japan" },
          { name: "Honke Ootako", desc: "Dotonbori's oldest takoyaki shop (since 1972). Extra-large takoyaki with chunky octopus. Spacious eat-in area, serves beer too. Open late. ~¥600–800", vibe: "Classic, late-night", mapLink: "https://www.google.com/maps/search/Honke+Ootako+Dotonbori+Osaka+Japan" },
          { name: "Gyozaoh! Dotonbori", desc: "Delicious pan-fried gyoza with vegan options available. Counter and table seats. Can get busy on weekends — go at 5pm to avoid wait. ~¥800–1,500", vibe: "Casual, tasty", mapLink: "https://www.google.com/maps/search/Gyozaoh+Dotonbori+Osaka+Japan" },
        ]
      },
    ],
    tips: [
      "Osaka Amazing Pass (1-day ¥3,500) pays for itself with free castle entry + unlimited subway",
      "Don Quijote is open until late (usually midnight+) — can always return after dinner",
      "Everything today flows south along one corridor — no backtracking",
      "Late March in Osaka is early bloom season — we might catch 30-70% cherry blossoms. Still beautiful! Nishinomaru Garden is our best spot for photos",
    ],
  },
  {
    date: "Sun, Mar 29",
    title: "Deer Park Day + Evening Stroll",
    city: "nara",
    badge: "🦌 Day Trip + 🛍️ Shopping",
    transport: {
      title: "Getting to Nara and Back",
      icon: "🚃",
      steps: [
        "Hanazono-cho → Namba: Yotsubashi Line (2 stops, ~4 min)",
        "Namba → Kintetsu-Nara: Kintetsu Railway from Osaka-Namba Station (~35 min, ~¥680). Take the Express (急行) — it's the same price as local but much faster",
        "Important: Kintetsu Namba Station is underground, connected to Osaka Metro Namba. Follow signs for 'Kintetsu Nara Line'",
        "Kintetsu-Nara Station → Nara Park: Walk east ~5 min. Deer will greet us almost immediately",
        "Return: Same route in reverse. Last express trains run until ~11pm so no rush",
        "Evening: Tenjinbashisuji is on the Sakaisuji Line — from Namba, take Midosuji Line to Dobutsuen-mae, transfer to Sakaisuji Line northbound"
      ]
    },
    items: [
      { time: "8:00 AM", text: "Breakfast before heading out", icon: "☕", type: "food",
        food: [
          { name: "Konbini breakfast", desc: "Grab onigiri, tamago sando, and coffee from the nearest 7-Eleven or Lawson. Eat on the train or at the station. ~¥300–500/person", vibe: "Quick", pick: true },
          { name: "Doutor Coffee (Namba area)", desc: "Japanese coffee chain — morning set with toast, egg, and coffee for ~¥500. Multiple branches near Namba station", vibe: "Sit-down, fast" },
          { name: "Café at Kintetsu-Nara Station", desc: "Small cafés inside and around the station if we prefer to eat after arriving in Nara", vibe: "On arrival" },
        ]
      },
      { time: "9:30 AM", text: "Nara Park — buy shika senbei (deer crackers, ¥200) and feed the bowing deer! Gentle but enthusiastic", icon: "🦌", type: "see" },
      { time: "10:30 AM", text: "Todai-ji Temple — Japan's largest bronze Buddha (15m!). The pillar with a nostril-sized hole is fun for kids to crawl through. Entry: ¥600/adult, ¥300/child", icon: "🛕", type: "see" },
      { time: "12:00 PM", text: "Lunch in Nara", icon: "🍡", type: "food",
        food: [
          { name: "Nakatanidou (Higashimuki Street)", desc: "Famous for live mochi pounding — watch the incredible speed! Fresh mochi is ¥150 per piece. The yomogi (mugwort) flavor is the signature. A must-see performance even if you don't eat it", vibe: "Street food, spectacle", pick: true, mapLink: "https://www.google.com/maps/search/Nakatanidou+Nara+Japan" },
          { name: "Kakinoha-zushi shops (Nara specialty)", desc: "Sushi wrapped in persimmon leaves — a Nara original. Tanaka is a popular shop near the park. Light, clean flavors. ~¥800–1,200 for a set", vibe: "Local specialty", mapLink: "https://www.google.com/maps/search/Kakinoha+zushi+Tanaka+Nara+Japan" },
          { name: "Maguro Koya (near Kintetsu-Nara)", desc: "Affordable and popular tuna rice bowls. Generous portions, quick service. ~¥800–1,000. Kid-friendly with simple rice bowl options", vibe: "Quick, filling", mapLink: "https://www.google.com/maps/search/Maguro+Koya+Nara+Japan" },
          { name: "Higashimuki Shopping Street stalls", desc: "The covered arcade near the station has various food options — udon shops, karaage (fried chicken) stands, soft-serve ice cream, and souvenir snacks", vibe: "Varied, walkable" },
        ]
      },
      { time: "1:00 PM", text: "Kasuga Grand Shrine — mystical path through forest lined with thousands of stone lanterns", icon: "⛩️", type: "see" },
      { time: "2:30 PM", text: "Train back to Osaka. Rest at Airbnb — recharge the 5yo before evening", icon: "🚃", type: "transport" },
      { time: "4:30 PM", text: "Tenjinbashisuji Shopping Street — Japan's longest covered arcade (2.6km). More local, less touristy, independent shops + street food", icon: "🛍️", type: "shop" },
      { time: "6:30 PM", text: "Dinner in Shinsekai (walkable from Airbnb, ~10 min)", icon: "🍢", type: "food",
        food: [
          { name: "Kushikatsu Daruma Shinsekai", desc: "The original kushikatsu restaurant in Osaka — the Shinsekai branch is the flagship. Deep-fried skewers from ~¥100 each. Lively retro atmosphere. No double-dipping!", vibe: "Iconic, must-try", pick: true, mapLink: "https://www.google.com/maps/search/Kushikatsu+Daruma+Shinsekai+Osaka+Japan" },
          { name: "Janjan Yokocho Stalls", desc: "The retro alley next to Shinsekai has tiny yakitori, oden, and grilled skewer stalls. Old-school Osaka atmosphere, rock-bottom prices. ~¥500–1,000", vibe: "Walk & eat", mapLink: "https://www.google.com/maps/search/Janjan+Yokocho+Shinsekai+Osaka+Japan" },
          { name: "Grill Maruyoshi", desc: "Old-school yoshoku (Japanese Western food) — hambagu (hamburger steak), omurice (omelette rice), and cream croquettes. Comfort food the whole family will love. ~¥800–1,200", vibe: "Retro comfort food, kid-friendly", mapLink: "https://www.google.com/maps/search/Grill+Maruyoshi+Shinsekai+Osaka+Japan" },
        ]
      },
    ],
    tips: [
      "Bring hand wipes — deer will lick our hands and grab paper items",
      "Nara is very walkable — all major sights within 15 min of Kintetsu station",
      "Shinsekai is right near our Airbnb — great for easy evening outings",
    ],
  },
  {
    date: "Mon, Mar 30",
    title: "Last Day in Osaka — Shop & Sunset",
    city: "osaka",
    badge: "🛍️ Shopping + 🌅 Views",
    transport: {
      title: "Getting to Umeda",
      icon: "🚃",
      steps: [
        "Hanazono-cho → Nishi-Umeda: Yotsubashi Line direct, northbound to the terminus (~18 min, ~¥280)",
        "Nishi-Umeda Station is connected underground to Umeda/Osaka Station area. Follow signs for 'Grand Front Osaka' or 'JR Osaka Station'",
        "Everything today (Grand Front, Hankyu, Osaka Station City, Sky Building) is walkable within the Umeda area — no more trains needed",
        "Umeda Sky Building is ~10 min walk northwest from Grand Front",
        "Return: Yotsubashi Line from Nishi-Umeda direct to Hanazono-cho (~18 min)"
      ]
    },
    items: [
      { time: "9:00 AM", text: "Breakfast in Umeda after arriving", icon: "☕", type: "food",
        food: [
          { name: "Bills Osaka Station", desc: "Australian brunch restaurant — famous for ricotta pancakes, avocado toast, and scrambled eggs. Kid-friendly menu. ~¥1,200–1,800/person. Opens 8:30am", vibe: "Trendy brunch", pick: true, mapLink: "https://www.google.com/maps/search/Bills+Osaka+Station+Umeda+Japan" },
          { name: "Hankyu Bakery (B1 Hankyu Dept Store)", desc: "The depachika (basement food hall) at Hankyu opens early. Incredible pastries, sandwiches, and Japanese baked goods. Grab and go. ~¥300–600", vibe: "Quick, high-quality", mapLink: "https://www.google.com/maps/search/Hankyu+Department+Store+Umeda+Osaka+Japan" },
          { name: "Whity Umeda underground mall", desc: "The vast underground network has multiple cafés and morning set options. Komeda's Coffee and Doutor both have branches here", vibe: "Underground, convenient" },
        ]
      },
      { time: "10:00 AM", text: "Nintendo Osaka at Daimaru Umeda 13F — official Nintendo store with exclusive merch. Grand Front Osaka next door for upscale shops", icon: "🎮", type: "shop" },
      { time: "11:30 AM", text: "Hankyu Department Store — Kansai's fashion flagship. Cosmetics, Japanese fashion, and the famous depachika basement food hall", icon: "🏬", type: "shop" },
      { time: "1:00 PM", text: "Lunch in Umeda area", icon: "🍽️", type: "food",
        food: [
          { name: "Grand Front Osaka food court area", desc: "Multiple cuisines under one roof — sushi, gyoza, pizza, rice bowls. Perfect for a group where everyone wants something different. Each person can pick their own. ~¥800–1,500", vibe: "Food court, group-friendly", pick: true },
          { name: "Ohatsutenjin-dori Shotengai", desc: "Covered arcade near the station packed with local eateries and izakayas. More authentic feel than the malls. Great for udon, ramen, or set meals. ~¥700–1,200", vibe: "Local arcade, varied" },
          { name: "Takimi-Koji (Umeda Sky Building B1)", desc: "Retro food street recreating 1920s Osaka in the Sky Building basement. Multiple restaurants — chicken, Chinese, Japanese course meals. ~¥800–3,000. Save this for later if doing Sky Building at sunset", vibe: "Themed, atmospheric", mapLink: "https://www.google.com/maps/search/Takimi-Koji+Umeda+Sky+Building+Osaka+Japan" },
        ]
      },
      { time: "2:30 PM", text: "Osaka Station City / Lucua / Lucua 1100 — massive complex with ~600 stores. Mid-range to high-end fashion and souvenirs", icon: "🛍️", type: "shop" },
      { time: "4:30 PM", text: "Last souvenir runs — Japanese snack boxes, beauty products, character goods", icon: "🎁", type: "shop" },
      { time: "5:30 PM", text: "Umeda Sky Building — floating garden observatory for sunset over Osaka. Stunning farewell views. Entry: ¥2,000/adult, ¥500 for ages 4-12", icon: "🌅", type: "see" },
      { time: "7:00 PM", text: "Farewell Osaka dinner", icon: "🍽️", type: "food",
        food: [
          { name: "Takimi-Koji (Sky Building B1)", desc: "If we didn't eat here for lunch — the retro food alley is perfect for a final Osaka meal. Multiple small restaurants with different specialties. ~¥1,000–3,000", vibe: "Atmospheric, varied", pick: true, mapLink: "https://www.google.com/maps/search/Takimi-Koji+Umeda+Sky+Building+Osaka+Japan" },
          { name: "Kani Doraku (various Umeda branches)", desc: "Famous crab restaurant chain — full crab course meals. A splurge-worthy farewell dinner. ~¥4,000–8,000/person for courses. Book ahead if possible", vibe: "Special occasion, splurge", mapLink: "https://www.google.com/maps/search/Kani+Doraku+Umeda+Osaka+Japan" },
          { name: "Yakiniku near Umeda", desc: "Japanese BBQ restaurants are scattered around Umeda. Grill our own wagyu beef at the table — fun, interactive, and kids love the cooking. ~¥2,000–5,000/person", vibe: "Interactive, celebration", mapLink: "https://www.google.com/maps/search/Yakiniku+Umeda+Osaka+Japan" },
        ]
      },
      { time: "9:00 PM", text: "Back to Airbnb. Pack bags — Peach flight at 8:40 AM tomorrow!", icon: "🧳", type: "prep" },
    ],
    tips: [
      "Everything today is walkable from Nishi-Umeda station — just one subway ride from Hanazono-cho",
      "Pokémon Café is at Daimaru Shinsaibashi 9F (not Umeda) — needs advance reservation at pokemon-cafe.jp. Nintendo Osaka is at Daimaru Umeda 13F — free to browse",
      "Pack Sapporo layers in carry-on — it's 5–10°C vs Osaka's 12–18°C",
      "Check Peach Airlines baggage rules tonight — weigh bags to avoid airport surprises",
    ],
  },
  {
    date: "Tue, Mar 31",
    title: "Off to Sapporo — Hello, Hokkaido!",
    city: "travel",
    badge: "✈️ Travel",
    transport: {
      title: "Hanazono-cho → Kansai Airport (Early Morning)",
      icon: "🚃",
      steps: [
        "Wake up by ~5:30 AM. Peach departs 8:40 AM — need to be at airport by ~7:00 AM",
        "Option A: Hanazono-cho → Namba (Yotsubashi Line, 4 min) → Nankai Airport Express to Kansai Airport (~45 min, ¥970). First trains start ~5:30 AM. Total ~55 min",
        "Option B: Book a jumbo taxi/minivan from Airbnb to Kansai Airport (~40 min, ~¥18,000–20,000 — try MK Taxi or Yasake Taxi). Regular taxis only fit 4 passengers, so we'd need two. A jumbo taxi fits all 6 of us + luggage. Split among 5 adults = ~¥3,600–4,000 each",
        "IMPORTANT: Peach uses Terminal 2 at Kansai Airport — it's separate from Terminal 1. If taking train, we arrive at T1 and need a free shuttle bus to T2 (~10 min). Factor this into our timing!",
        "At New Chitose Airport (Sapporo): JR Rapid Airport train to Sapporo Station (~37 min, ¥1,230). Runs every 15 min"
      ]
    },
    items: [
      { time: "~5:30 AM", text: "Wake up, final check of Airbnb, head to station or taxi pickup", icon: "⏰", type: "prep" },
      { time: "~6:00 AM", text: "Depart for Kansai Airport. Grab breakfast from konbini on the way", icon: "🚃", type: "transport" },
      { time: "8:40 AM", text: "Depart Osaka → Sapporo New Chitose (Peach MM105)", icon: "✈️", type: "flight" },
      { time: "10:40 AM", text: "Arrive New Chitose Airport → JR Rapid Airport to Sapporo Station (~37 min, ¥1,230)", icon: "🛬", type: "transport" },
      { time: "12:00 PM", text: "Check in to Sapporo accommodation. Sapporo itinerary managed separately from here", icon: "🏨", type: "transport" },
      { time: "", text: "Sapporo planner takes over! See suggested activities in the Sapporo section below", icon: "📋", type: "note" },
    ],
    tips: [
      "Peach = budget airline. Meals not included, baggage may cost extra",
      "Terminal 2 shuttle from T1 takes ~10 min — don't forget this!",
      "ICOCA cards work in Sapporo on JR trains and subways, but we can't reload them at Sapporo subway stations — reload at JR stations, konbini, or 7-Bank ATMs instead",
      "Peach charges ¥1,500–4,500 per checked bag — book baggage online before the flight (cheaper than at the airport). Carry-on limited to 10kg total (bag + personal item combined)",
    ],
  },
  {
    date: "Apr 1–2",
    title: "Sapporo Days — See You There!",
    city: "sapporo",
    badge: "❄️ Hokkaido",
    items: [
      { time: "", text: "Sapporo itinerary managed by another group member. See Sapporo suggestions section below!", icon: "📋", type: "note" },
    ],
    tips: [],
  },
  {
    date: "Thu, Apr 3",
    title: "Last Morning in Japan",
    city: "travel",
    badge: "✈️ Home",
    transport: {
      title: "Sapporo → New Chitose Airport",
      icon: "🚃",
      steps: [
        "JR Rapid Airport from Sapporo Station → New Chitose Airport (~37 min, ¥1,230)",
        "Trains run every 15 min. Aim to arrive at airport by ~2:00 PM for 4:05 PM flight",
        "Don't rush — New Chitose Airport has Doraemon Sky Park, Royce Chocolate World, and even an onsen (hot spring bath!) to enjoy while waiting"
      ]
    },
    items: [
      { time: "Morning", text: "Final Sapporo activities + souvenir shopping at JR Sapporo Station", icon: "🛍️", type: "shop" },
      { time: "~12:30 PM", text: "Head to New Chitose Airport", icon: "🚃", type: "transport" },
      { time: "~1:30 PM", text: "Explore New Chitose Airport — Doraemon Sky Park, Royce Chocolate World, airport onsen", icon: "🍫", type: "see" },
      { time: "4:05 PM", text: "Depart Sapporo → Hong Kong (Greater Bay HB881)", icon: "✈️", type: "flight" },
      { time: "8:35 PM", text: "Arrive Hong Kong — transit at HK airport", icon: "🛬", type: "flight" },
    ],
    tips: [
      "New Chitose Airport is one of Japan's best airports for kids — budget 1–2 hours to enjoy it",
      "We have a ~5-hour layover at Hong Kong airport (8:35 PM to 1:40 AM). No visa needed for transit. The airport has 24-hour food courts and rest areas. Consider paying for a lounge (~HKD 400–500/person) for the little one to sleep — Plaza Premium Lounge accepts walk-ins",
    ],
  },
  {
    date: "Sat, Apr 4",
    title: "Home Sweet Home",
    city: "travel",
    badge: "🏠 Arrival",
    items: [
      { time: "1:40 AM", text: "Depart Hong Kong → Manila (Greater Bay HB231)", icon: "✈️", type: "flight" },
      { time: "3:50 AM", text: "Arrive Manila — welcome home!", icon: "🏠", type: "flight" },
    ],
    tips: ["Neck pillow + tablet for the little one on the red-eye"],
  },
];

export const themes = {
  travel: { accent: "#6366F1", bg: "#EEF2FF", border: "#C7D2FE", header: "linear-gradient(135deg, #4338CA, #6366F1)", light: "#E0E7FF" },
  osaka: { accent: "#E11D48", bg: "#FFF1F2", border: "#FECDD3", header: "linear-gradient(135deg, #BE123C, #F43F5E)", light: "#FFE4E6" },
  nara: { accent: "#B45309", bg: "#FFFBEB", border: "#FDE68A", header: "linear-gradient(135deg, #92400E, #D97706)", light: "#FEF3C7" },
  sapporo: { accent: "#0891B2", bg: "#ECFEFF", border: "#A5F3FC", header: "linear-gradient(135deg, #155E75, #0891B2)", light: "#CFFAFE" },
};

export const typeColors = {
  flight: "#6366F1",
  transport: "#6366F1",
  food: "#EA580C",
  shop: "#16A34A",
  see: "#D97706",
  prep: "#7C3AED",
  note: "#64748B",
  arrival: "#6366F1",
};
