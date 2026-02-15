export const CHECKLIST = [
  {
    phase: "Weeks Before (Do Now!)",
    icon: "📋",
    items: [
      { id: "visa", text: "Apply for Japan tourist visa at VFS Global (processing ~1 week)" },
      { id: "passports", text: "Check all passports — valid 6+ months from Mar 27, with 2 blank pages" },
      { id: "travel-insurance", text: "Buy travel insurance (medical, flight delay, lost luggage)" },
      { id: "vjw-register", text: "Register Visit Japan Web — create accounts, enter passport + flight info for all adults" },
      { id: "esim-order", text: "Pre-order eSIM (Airalo/Ubigi) or reserve pocket WiFi for KIX pickup" },
      { id: "usj-tickets", text: "Buy USJ tickets + Express Pass online (if going — sells out fast)" },
      { id: "pokemon-cafe", text: "Reserve Pokémon Café (slots open 31 days before at 6 PM JST)" },
      { id: "peach-baggage", text: "Add checked bags to Peach MM105 booking ONLINE (half the price of airport counter)" },
      { id: "park-n-fly", text: "Book Park N Fly parking online (Holy Week fills up fast!)" },
      { id: "belmont-hotel", text: "Book Belmont Hotel for Clei Group (night of Mar 26)" },
      { id: "osaka-airbnb", text: "Confirm Osaka Airbnb booking — save host's phone + LINE ID" },
      { id: "sapporo-accom", text: "Confirm Sapporo accommodation" },
      { id: "hk-lounge", text: "Book Plaza Premium Lounge at HK airport on Klook (for the 5-hour layover)" },
      { id: "apps-download", text: "Download apps: Google Maps, Google Translate (Japanese offline), Navitime" },
      { id: "grab-app", text: "Make sure Grab app is installed + payment method set up" },
      { id: "credit-cards", text: "Check credit cards for Priority Pass / LoungeKey / travel perks" },
      { id: "travel-tax", text: "Check if travel tax is included in PR410 ticket — if not, pay online at TIEZA" },
    ]
  },
  {
    phase: "3 Days Before (Mar 24–26)",
    icon: "📝",
    items: [
      { id: "etravel", text: "Register eTravel (etravel.gov.ph) for all adults — needed for Cebu international departure" },
      { id: "vjw-qr", text: "Generate Visit Japan Web QR codes (immigration + customs) for all adults" },
      { id: "exchange-money", text: "Exchange PHP to JPY — budget ~¥10,000–15,000 per person per day" },
      { id: "print-docs", text: "Print/save offline: e-tickets, hotel confirmations, visa copies, insurance policy" },
      { id: "check-weather", text: "Check weather forecast — Osaka ~12–18°C, Sapporo ~5–10°C" },
    ]
  },
  {
    phase: "Night Before (Mar 26)",
    icon: "🌙",
    items: [
      { id: "online-checkin-pr1851", text: "Online check-in PR1851 Manila→Cebu (opens 24hrs before = ~6:35 AM Mar 26)" },
      { id: "online-checkin-pr410", text: "Online check-in PR410 Cebu→Osaka (opens 24hrs before = ~11:45 AM Mar 26)" },
      { id: "pack-carryon", text: "Pack carry-on: passport, boarding passes, snacks for Clei, tablet, charger, warm layers" },
      { id: "pack-checked", text: "Pack checked bags — weigh them! PAL: check fare type. Peach: max 20 kg/bag" },
      { id: "sapporo-layers", text: "Pack Sapporo warm layers in accessible bag (coat, layers — it's 5–10°C)" },
      { id: "clei-bag", text: "Clei's bag: snacks, tablet (with downloaded shows), toy, change of clothes, wipes" },
      { id: "set-alarms", text: "Set alarms: Clei Group 3:00 AM / Duda Group ~12:30 AM (leaving Batangas ~1:00 AM)" },
      { id: "charge-devices", text: "Charge all phones, tablets, power banks" },
    ]
  },
  {
    phase: "Manila → Cebu (Mar 27 AM)",
    icon: "✈️",
    items: [
      { id: "clei-group-grab", text: "Clei Group: Grab to NAIA T2 by 3:15–3:30 AM" },
      { id: "duda-group-drive", text: "Duda Group: Leave Batangas ~1:00 AM, arrive T2 ~3:30–4:00 AM" },
      { id: "duda-parking", text: "Duda Group: Park at Park N Fly (keep ticket safe for return!)" },
      { id: "bag-drop", text: "Drop checked bags at PAL counter (North Wing). Gate-check stroller" },
      { id: "security-mnl", text: "Clear security screening (no immigration for domestic)" },
    ]
  },
  {
    phase: "Cebu Connection (Mar 27 Mid-day)",
    icon: "🔄",
    items: [
      { id: "collect-bags-ceb", text: "Collect ALL checked bags at Cebu T1 (separate bookings = no auto-transfer)" },
      { id: "walk-t1-t2", text: "Walk from T1 to T2 via covered walkway (~10–15 min) — faster than shuttle bus" },
      { id: "checkin-pr410", text: "Check in for PR410 at CEB T2 (counters close 11:00 AM!)" },
      { id: "travel-tax-ceb", text: "Pay travel tax if not included in ticket (PHP 1,620/adult)" },
      { id: "immigration-ceb", text: "Clear immigration — have passport, boarding pass, eTravel QR ready" },
      { id: "security-ceb", text: "Clear security, head to gate" },
    ]
  },
  {
    phase: "Arriving in Osaka (Mar 27 Evening)",
    icon: "🇯🇵",
    items: [
      { id: "vjw-scan", text: "Scan Visit Japan Web QR at immigration (must be live page, NOT screenshot)" },
      { id: "customs-scan", text: "Scan customs QR at e-gate" },
      { id: "buy-icoca", text: "Buy ICOCA cards at JR West Ticket Office (1F arrivals, ¥2,000 each)" },
      { id: "pickup-wifi", text: "Pick up pocket WiFi / activate eSIM" },
      { id: "withdraw-jpy", text: "Withdraw extra JPY at 7-Bank ATM if needed" },
      { id: "train-to-airbnb", text: "Nankai train to Namba → Yotsubashi Line to Hanazono-cho" },
    ]
  },
  {
    phase: "Osaka Days (Mar 28–30)",
    icon: "🏯",
    items: [
      { id: "osaka-amazing-pass", text: "Consider Osaka Amazing Pass (¥3,500/day) — free castle entry + unlimited subway" },
      { id: "reload-icoca", text: "Top up ICOCA cards as needed (any station or konbini)" },
      { id: "konbini-snacks", text: "Stock up on konbini snacks for Clei (ongoing!)" },
      { id: "pack-for-sapporo", text: "Mar 30 evening: Pack bags for Sapporo, check Peach baggage weight" },
    ]
  },
  {
    phase: "Osaka → Sapporo (Mar 31)",
    icon: "❄️",
    items: [
      { id: "wake-530am", text: "Wake up ~5:30 AM — Peach departs 8:40 AM" },
      { id: "checkout-airbnb", text: "Final check of Airbnb — nothing left behind" },
      { id: "train-to-kix", text: "Train to KIX T1 station — arrive by ~6:15 AM" },
      { id: "shuttle-t2", text: "Take free shuttle bus from Aeroplaza 1F to Terminal 2 (~8 min)" },
      { id: "peach-checkin", text: "Check in at Peach kiosks (opens 7:10 AM, CLOSES 8:10 AM SHARP)" },
      { id: "peach-bagdrop", text: "Drop checked bags at Peach counter" },
      { id: "jr-rapid-sapporo", text: "At New Chitose: JR Rapid Airport to Sapporo Station (¥1,230, ~37 min)" },
    ]
  },
  {
    phase: "Sapporo Days (Apr 1–2)",
    icon: "🍜",
    items: [
      { id: "meet-others", text: "Meet up with the 2 joining in Sapporo" },
      { id: "reload-icoca-sapporo", text: "Reload ICOCA at JR stations or konbini (Sapporo subway machines can't reload ICOCA)" },
      { id: "souvenir-shopping", text: "Buy Hokkaido souvenirs — Shiroi Koibito, Royce, LeTAO (cheaper at airport)" },
      { id: "tax-free-receipts", text: "Keep tax-free purchase receipts — need them at departure customs" },
    ]
  },
  {
    phase: "Sapporo → HK → Home (Apr 3–4)",
    icon: "🏠",
    items: [
      { id: "pack-final", text: "Final packing — separate tax-free items for customs inspection" },
      { id: "train-chitose", text: "JR Rapid Airport to New Chitose (~37 min, ¥1,230) — arrive by ~1:00 PM" },
      { id: "royce-world", text: "Visit Royce' Chocolate World at airport (free, 3F) before check-in" },
      { id: "taxfree-customs", text: "Tax-free customs counter (International Terminal) — show receipts + items" },
      { id: "checkin-hb881", text: "Check in for Greater Bay HB881 (counter opens ~1:00 PM)" },
      { id: "immigration-cts", text: "Clear security + immigration at New Chitose" },
      { id: "hk-transit", text: "At HKG: follow Transfer signs (same booking) or collect bags + re-check in" },
      { id: "hk-lounge-go", text: "Head to Plaza Premium Lounge (Gate 1 or 60, 24hrs) — let Clei sleep" },
      { id: "gate-hb231", text: "Be at HB231 gate by 12:55 AM (departs 1:40 AM)" },
      { id: "duda-parking-return", text: "Duda Group: Grab from T3 to Park N Fly — validate parking (ticket + boarding pass)" },
    ]
  },
];
