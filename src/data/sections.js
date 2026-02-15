export const SECTIONS = [
  {
    id: "predeparture",
    title: "Before We Leave",
    icon: "📋",
    subtitle: "Get these done before March 27",
    content: [
      { label: "Flights", text: "Confirm all flight bookings. Print or save e-tickets offline. Check Peach MM105 baggage allowance (budget airline — extra bags cost extra)." },
      { label: "Passport & Visa", text: "Ensure all passports are valid for at least 6 months with 2 blank pages. Filipino citizens need a tourist visa for Japan — apply at the Japan Visa Application Center (VFS Global) in Metro Manila, Cebu, or Davao. Processing takes ~1 week. Bring: passport, photo, birth certificate, ITR or bank statements, flight booking, and hotel/Airbnb confirmation. Apply early!", links: [{ text: "VFS Global Japan Visa", url: "https://visa.vfsglobal.com/phl/en/jpn/" }] },
      { label: "eSIM / Pocket WiFi", text: "Pre-order an eSIM (Ubigi, Airalo, or Mobal) or reserve a pocket WiFi for pickup at Kansai Airport. Coverage needed Mar 27–Apr 3.", links: [{ text: "Airalo eSIM", url: "https://www.airalo.com/japan" }, { text: "Ubigi eSIM", url: "https://www.ubigi.com/en/japan" }, { text: "Klook eSIM", url: "https://www.klook.com/en-US/activity/109393-japan-esim-high-speed-internet-qr-code-voucher/" }] },
      { label: "ICOCA Card", text: "Can be bought at Kansai Airport upon arrival (¥2,000 = ¥500 deposit + ¥1,500 credit). Works on all trains, subways, buses, and convenience stores in Osaka AND Sapporo. If physical cards are unavailable (occasional chip shortages), ask about a Welcome Suica or PASMO Passport (28-day tourist cards) at the airport. Digital ICOCA on iPhone requires a Japan-region Apple ID, so physical cards are our safest bet.", links: [{ text: "Klook ICOCA Card", url: "https://www.klook.com/en-US/activity/1508-icoca-card-osaka/" }] },
      { label: "Apps to Download", text: "Google Maps (works great for Japan transit), Navitime or Japan Travel (route planners), Google Translate (download Japanese offline pack), Tabelog or Google Maps for restaurant reviews.", links: [{ text: "Google Translate", url: "https://translate.google.com/?sl=en&tl=ja" }, { text: "Navitime for Japan Travel", url: "https://www.navitime.co.jp/inbound/" }] },
      { label: "Cash", text: "Exchange some PHP to JPY before departure. Japan is increasingly card-friendly but smaller shops, temples, and street food stalls are cash-only. Budget ~¥10,000–15,000 per person per day." },
      { label: "Quick Money Guide", text: "Roughly: ¥100 ≈ PHP 38 (as of Feb 2026 — check current rate before departure). So ¥1,000 ≈ PHP 380, ¥5,000 ≈ PHP 1,900. A konbini lunch is ~¥500 (PHP 190). A nice restaurant dinner is ~¥2,000–3,000 (PHP 760–1,140). Check xe.com or our bank's rate before departure.", links: [{ text: "Check exchange rate", url: "https://www.xe.com/currencyconverter/convert/?From=JPY&To=PHP" }] },
      { label: "USJ Tickets (if going)", text: "Buy Universal Studios Japan tickets + Express Pass online in advance. They sell out, especially Express Passes.", links: [{ text: "USJ Official Site", url: "https://www.usj.co.jp/" }] },
      { label: "Pokémon Café (Mar 30)", text: "Located at Daimaru Shinsaibashi 9F. Requires advance online reservation — slots open 31 days before at 6 PM JST. Book ASAP.", links: [{ text: "Reserve Pokémon Café", url: "https://www.pokemon-cafe.jp/en/cafe/reservation.html" }] },
      { label: "Packing", text: "Osaka ~12–18°C (light jacket). Sapporo ~5–10°C (warm coat, layers). Rain gear. Comfy walking shoes for everyone. For Clei: stroller if needed, snacks, tablet for flights, favorite toy." },
      { label: "Traveling with Clei", text: "Kids under 6 ride trains and subways for FREE in Japan — no ticket needed! Strollers are welcome but fold up during rush hour (8-9 AM, 5-7 PM). Most stations have elevators (look for wheelchair signs). Keep konbini snacks stocked at all times. Build in rest breaks every 2-3 hours." },
      { label: "Airport Lounge Access", text: "Check our credit cards for Priority Pass, LoungeKey, or Mastercard Travel Pass perks before the trip. NAIA T3: PAGSS lounge is under renovation and no longer accepts credit card access (as of 2025). Kansai Airport: Peach departs from Terminal 2, which has NO lounge — use KIX NODOKA Lounge (Aeroplaza 2F, 24 hrs, accepts Priority Pass + credit cards) at Terminal 1 before taking the T2 shuttle. Hong Kong: Plaza Premium Lounge accepts walk-ins, Priority Pass, and LoungeKey — book on Klook for a discount (~HKD 360/3hrs). New Chitose: No traditional lounge, but has an airport onsen (~¥1,800) for relaxing before the flight.", links: [{ text: "KIX NODOKA Lounge", url: "https://www.kansai-airport.or.jp/en/service/business/03.html" }, { text: "Book HK Lounge on Klook", url: "https://www.klook.com/en-HK/activity/5265-international-airport-lounge-hong-kong/" }, { text: "Priority Pass Lounges", url: "https://www.prioritypass.com/airport-lounges" }] },
      { label: "Travel Insurance", text: "Recommended for our group including Clei. Cover medical, flight delays, and lost luggage.", links: [{ text: "Klook Travel Insurance", url: "https://www.klook.com/en-US/insurance/" }, { text: "SafetyWing", url: "https://safetywing.com/" }] },
      { label: "Visit Japan Web", text: "Register before the trip. Enter passport, flight info, and customs declaration for each adult. We'll get a QR code that speeds up immigration and customs. Not mandatory but practically everyone uses it now.", links: [{ text: "Visit Japan Web", url: "https://services.digital.go.jp/visit-japan-web/" }] },
    ]
  },
  {
    id: "arrival",
    title: "When We Land in Osaka",
    icon: "🛬",
    subtitle: "First things first",
    content: [
      { label: "Immigration", text: "Register on Visit Japan Web before departure — enter passport info, flight details, and customs declaration for each adult. We'll get a QR code to scan at the airport instead of waiting in the paper form line. Saves 20-30 minutes. Do this for all adults at least 3 days before departure.", links: [{ text: "Visit Japan Web", url: "https://services.digital.go.jp/visit-japan-web/" }] },
      { label: "Buy ICOCA Cards", text: "At JR ticket office (Green Window) or vending machines in the airport station. Buy ICOCA cards for everyone (¥2,000 each = ¥500 deposit + ¥1,500 balance). Top up as needed at any station." },
      { label: "Pocket WiFi Pickup", text: "If pre-ordered, collect at the designated counter in the arrivals hall (usually near the exit gates)." },
      { label: "Currency", text: "ATMs in the airport (7-Bank ATMs in 7-Eleven accept international cards). Withdraw JPY if needed." },
      { label: "Transport to Airbnb", text: "See Day 1 transport guide below. Nankai train to Namba → Yotsubashi Line to Hanazono-cho is the best route." },
    ]
  },
  {
    id: "etiquette",
    title: "Japan Basics & Etiquette",
    icon: "🇯🇵",
    subtitle: "Quick rules so we don't accidentally offend anyone",
    content: [
      { label: "No Tipping", text: "Never tip in Japan — not at restaurants, taxis, or hotels. It can actually be considered rude. Service charge is always included." },
      { label: "Shoes Off", text: "Remove shoes when entering temples, some restaurants, and the Airbnb. Look for shoe racks or a raised floor at the entrance. Wear easy on/off shoes." },
      { label: "Trash Cans", text: "Almost no public trash cans anywhere. Carry a small plastic bag for wrappers. Konbini (convenience stores) have bins we can use." },
      { label: "Escalator Rule", text: "Stand on the RIGHT in Osaka (opposite of Tokyo!). Left side is for walking." },
      { label: "Train Manners", text: "No loud talking or phone calls on trains. Set phones to silent mode. No eating on local trains (okay on express trains). Give up priority seats for elderly or pregnant passengers." },
      { label: "Queueing", text: "Japanese people queue for everything — orderly and patiently. Never cut in line, even at crosswalks." },
      { label: "Chopstick Rules", text: "Never stick chopsticks upright in rice (it resembles a funeral ritual). Don't pass food chopstick-to-chopstick. Rest them on the chopstick holder when not eating." },
    ]
  },
  {
    id: "emergency",
    title: "Emergency Contacts",
    icon: "🆘",
    subtitle: "Save these in our phones just in case",
    content: [
      { label: "Police", text: "110 (free from any phone)" },
      { label: "Fire / Ambulance", text: "119 (free from any phone)" },
      { label: "Japan Visitor Hotline", text: "050-3816-2787 — English support 24/7 for tourists. Covers medical, safety, and general help." },
      { label: "Philippine Consulate (Osaka)", text: "Tel: 06-6910-7881. Twin 21 MID Tower 24F, 2-1-61 Shiromi, Chuo-ku, Osaka." },
      { label: "Airbnb Host", text: "Save the host's phone number and LINE ID before departure — they're our best local contact.", links: [{ text: "Download LINE App", url: "https://line.me/en/" }] },
      { label: "Travel Insurance", text: "Save our provider's 24/7 claim number in our phones before we leave." },
    ]
  }
];
