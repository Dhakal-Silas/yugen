// Yugen — all content.
// v = distance from sea level in metres; dir = 'up' | 'down'.
// danger: 0 none, 1 hazard to boats/gear, 2 can injure, 3 can kill.

const ZONES = [
 {
  "dir": "up",
  "v": 1,
  "name": "Troposphere",
  "sub": "0–12 km · where all weather happens and 75% of the air's mass lives"
 },
 {
  "dir": "up",
  "v": 12000,
  "name": "Stratosphere",
  "sub": "12–50 km · calm, dry air and the ozone layer"
 },
 {
  "dir": "up",
  "v": 50000,
  "name": "Mesosphere",
  "sub": "50–85 km · the coldest place on Earth, around −90 °C"
 },
 {
  "dir": "up",
  "v": 85000,
  "name": "Thermosphere",
  "sub": "85–600 km · auroras, the ISS, and gas hotter than 1,500 °C"
 },
 {
  "dir": "up",
  "v": 600000,
  "name": "Exosphere & near space",
  "sub": "600–10,000 km · the last wisps of atmosphere fade out"
 },
 {
  "dir": "up",
  "v": 10000000.0,
  "name": "Earth–Moon space",
  "sub": "Satellites, radiation, and the long quiet road to the Moon"
 },
 {
  "dir": "up",
  "v": 4000000000.0,
  "name": "The Solar System",
  "sub": "Distances now in millions and billions of kilometres"
 },
 {
  "dir": "up",
  "v": 2000000000000000.0,
  "name": "Interstellar space",
  "sub": "Beyond the Sun's reach — distances in light-years"
 },
 {
  "dir": "up",
  "v": 1e+18,
  "name": "The Milky Way",
  "sub": "Our galaxy: 100–400 billion stars, 100,000 light-years across"
 },
 {
  "dir": "up",
  "v": 1e+21,
  "name": "Intergalactic space",
  "sub": "Galaxies, clusters, and the edge of what light allows us to see"
 },
 {
  "dir": "down",
  "v": 0.3,
  "name": "Sunlight zone",
  "sub": "Epipelagic · 0–200 m · enough light for photosynthesis"
 },
 {
  "dir": "down",
  "v": 200,
  "name": "Twilight zone",
  "sub": "Mesopelagic · 200–1,000 m · a dim blue fade, no plants"
 },
 {
  "dir": "down",
  "v": 1000,
  "name": "Midnight zone",
  "sub": "Bathypelagic · 1,000–4,000 m · no sunlight; the only light is made by animals"
 },
 {
  "dir": "down",
  "v": 4000,
  "name": "Abyssal zone",
  "sub": "Abyssopelagic · 4,000–6,000 m · near freezing, crushing pressure"
 },
 {
  "dir": "down",
  "v": 6000,
  "name": "Hadal zone",
  "sub": "6,000–11,000 m · the ocean trenches, named after Hades"
 },
 {
  "dir": "down",
  "v": 11500,
  "name": "Beneath the seafloor",
  "sub": "The ocean is a thin film. Below it: rock, then fire"
 },
 {
  "dir": "down",
  "v": 410000,
  "name": "The mantle, deep",
  "sub": "Hot rock that flows like very slow syrup"
 },
 {
  "dir": "down",
  "v": 2890000,
  "name": "Outer core",
  "sub": "2,890–5,150 km · a sea of liquid iron"
 },
 {
  "dir": "down",
  "v": 5150000,
  "name": "Inner core",
  "sub": "5,150–6,371 km · a solid iron ball as hot as the Sun's surface"
 }
];

const ITEMS = [
 {
  "id": "draupner",
  "dir": "up",
  "v": 25.6,
  "name": "The Draupner rogue wave",
  "kind": "Phenomenon",
  "danger": 1,
  "wiki": "Draupner_wave",
  "blurb": "On New Year's Day 1995 a wave 25.6 m tall slammed into a gas platform in the North Sea — the first rogue wave ever measured by an instrument.",
  "facts": [
   "The surrounding waves were only about 12 m high; this one came out of nowhere at more than twice that.",
   "Before Draupner, many scientists treated sailors' stories of 'walls of water' as exaggeration.",
   "Rogue waves are now thought to sink or badly damage ships every year.",
   "The platform's laser sensor captured it — and the platform survived with only minor damage."
  ]
 },
 {
  "id": "hyperion",
  "dir": "up",
  "v": 116,
  "name": "Hyperion, the tallest tree",
  "kind": "Living thing",
  "danger": 0,
  "wiki": "Hyperion_(tree)",
  "blurb": "A coast redwood in northern California about 116 m tall — the tallest known living tree on Earth.",
  "facts": [
   "It was found in 2006 by two naturalists hiking off-trail in Redwood National Park.",
   "It is taller than the Statue of Liberty including its pedestal (93 m).",
   "Its exact location is kept secret; the park warns visitors who go off-trail to find it can face fines of up to $5,000 and jail time.",
   "Redwoods pull fog straight out of the air through their needles to help water their tops."
  ]
 },
 {
  "id": "lituya",
  "dir": "up",
  "v": 524,
  "name": "Lituya Bay megatsunami",
  "kind": "Phenomenon",
  "danger": 3,
  "wiki": "1958_Lituya_Bay_earthquake_and_megatsunami",
  "blurb": "In 1958 an earthquake in Alaska dropped a mountainside into a narrow bay, and the water surged 524 m up the opposite slope — the tallest wave ever recorded.",
  "facts": [
   "About 30 million cubic metres of rock fell into Gilbert Inlet in a single moment.",
   "The water stripped trees and soil off the mountain up to 524 m (1,720 ft) — taller than the Empire State Building.",
   "A father and his young son on a fishing boat rode the wave out and survived.",
   "It was a splash, not a tsunami from the open ocean, which is why it could be so tall."
  ]
 },
 {
  "id": "burj",
  "dir": "up",
  "v": 828,
  "name": "Burj Khalifa",
  "kind": "Human-made",
  "danger": 0,
  "wiki": "Burj_Khalifa",
  "blurb": "The tallest building in the world since 2010, rising 828 m above Dubai.",
  "facts": [
   "It has 163 floors above ground.",
   "Its spire can be seen from roughly 95 km away on a clear day.",
   "The air at the top is noticeably cooler than at the base — around 6 °C on a typical day.",
   "Its Y-shaped footprint was inspired by the desert flower Hymenocallis and helps it shed wind."
  ]
 },
 {
  "id": "cumulus",
  "dir": "up",
  "v": 1500,
  "name": "Fair-weather clouds",
  "kind": "Phenomenon",
  "danger": 0,
  "wiki": "Cumulus_cloud",
  "blurb": "Puffy cumulus clouds usually float with their flat bases between 600 and 2,000 m up.",
  "facts": [
   "A typical small cumulus cloud holds around 500 tonnes of water.",
   "It floats because that water is spread out as trillions of tiny droplets held up by rising warm air.",
   "Their flat bottoms mark the exact height where rising air cools enough for water vapour to condense.",
   "They look white because droplets scatter all colours of sunlight equally."
  ]
 },
 {
  "id": "goose",
  "dir": "up",
  "v": 7290,
  "name": "Bar-headed goose",
  "kind": "Creature",
  "danger": 0,
  "wiki": "Bar-headed_goose",
  "blurb": "These geese migrate straight over the Himalayas between Central Asia and India. Tracked birds have been recorded at 7,290 m.",
  "facts": [
   "The air up there holds less than half the oxygen of sea level.",
   "Their haemoglobin grabs oxygen more strongly than ours, and they have extra-large lungs.",
   "They often fly at night and early morning, when air is colder, denser and gives more lift.",
   "Stories of them flying over the summit of Everest have never been confirmed by tracking."
  ]
 },
 {
  "id": "everest",
  "dir": "up",
  "v": 8849,
  "name": "Mount Everest",
  "kind": "Place",
  "danger": 3,
  "wiki": "Mount_Everest",
  "blurb": "The highest point on Earth's surface, 8,849 m above sea level — and its summit rock was once the bottom of a sea.",
  "facts": [
   "The summit is made of limestone containing fossils of sea creatures like trilobites and crinoids, laid down on an ancient ocean floor.",
   "The height of 8,848.86 m was measured jointly by China and Nepal in 2020.",
   "At the top, each breath carries only about a third of the oxygen it would at sea level.",
   "Edmund Hillary and Tenzing Norgay first reached the summit on 29 May 1953."
  ]
 },
 {
  "id": "airliner",
  "dir": "up",
  "v": 10700,
  "name": "Airliners at cruise",
  "kind": "Human-made",
  "danger": 0,
  "wiki": "Jet_airliner",
  "blurb": "Passenger jets cruise around 10–12 km (35,000–39,000 ft), where the thin air means less drag and better fuel economy.",
  "facts": [
   "Outside your window it's usually around −55 °C.",
   "The cabin is pressurised to feel like being 1,800–2,400 m up a mountain.",
   "On a busy day there are well over 10,000 flights in the air at the same moment worldwide.",
   "Contrails are clouds made from the water vapour in engine exhaust freezing instantly."
  ]
 },
 {
  "id": "vulture",
  "dir": "up",
  "v": 11300,
  "name": "Rüppell's vulture",
  "kind": "Creature",
  "danger": 0,
  "wiki": "Rüppell's_vulture",
  "blurb": "The highest-flying bird ever recorded: one was sucked into a jet engine 11,300 m above Ivory Coast in 1973.",
  "facts": [
   "The collision happened on 29 November 1973 over Abidjan; the plane landed safely.",
   "They have a special form of haemoglobin that works in extremely thin air.",
   "They ride thermals for hours, barely flapping, scanning the savanna for carcasses.",
   "The species is now critically endangered, mostly because of poisoning."
  ]
 },
 {
  "id": "cumulonimbus",
  "dir": "up",
  "v": 13000,
  "name": "Thunderstorm towers",
  "kind": "Phenomenon",
  "danger": 3,
  "wiki": "Cumulonimbus_cloud",
  "blurb": "Cumulonimbus clouds can boil up 12–18 km, taller than Everest, until they hit the top of the weather layer and spread into an anvil.",
  "facts": [
   "The flat anvil top forms where the storm hits the tropopause and can't rise any further.",
   "Updrafts inside can exceed 150 km/h — strong enough to grow hailstones bigger than a grapefruit.",
   "Pilots route around them; the turbulence inside can tear aircraft apart.",
   "They produce almost all of the world's lightning — about 45 flashes every second across the planet."
  ]
 },
 {
  "id": "concorde",
  "dir": "up",
  "v": 18300,
  "name": "Concorde",
  "kind": "Human-made",
  "danger": 0,
  "wiki": "Concorde",
  "blurb": "The supersonic airliner cruised at 18,300 m (60,000 ft) at twice the speed of sound, high enough for passengers to see the curve of the Earth.",
  "facts": [
   "It crossed from London to New York in about 3.5 hours.",
   "Friction heated the airframe so much that it stretched by up to 25 cm in flight.",
   "The sky outside looked dark blue, almost violet, at cruising height.",
   "It flew passengers from 1976 until retirement in 2003."
  ]
 },
 {
  "id": "armstrong",
  "dir": "up",
  "v": 19000,
  "name": "The Armstrong limit",
  "kind": "Danger line",
  "danger": 3,
  "wiki": "Armstrong_limit",
  "blurb": "Around 19 km up, air pressure is so low that water boils at body temperature. Above this line, an unprotected human cannot survive.",
  "facts": [
   "Pressure here is only about 6% of sea level.",
   "Saliva, tears and the moisture in your lungs would boil away — though blood in your veins stays liquid because of blood pressure.",
   "Above this altitude, a full pressure suit is the only way to survive, even inside a cockpit that loses pressure.",
   "It's named after Harry George Armstrong, a US Air Force physician who studied flying at altitude."
  ]
 },
 {
  "id": "ozone",
  "dir": "up",
  "v": 25000,
  "name": "The ozone layer",
  "kind": "Layer",
  "danger": 0,
  "wiki": "Ozone_layer",
  "blurb": "A band of ozone gas 15–35 km up that absorbs most of the Sun's harmful ultraviolet light.",
  "facts": [
   "If you squeezed all of it down to sea-level pressure, the whole layer would be only about 3 mm thick.",
   "The Antarctic 'ozone hole' was discovered in 1985.",
   "The 1987 Montreal Protocol banned the chemicals destroying it — it's now slowly healing.",
   "The Antarctic hole is expected to recover to 1980 levels around 2066."
  ]
 },
 {
  "id": "sr71",
  "dir": "up",
  "v": 25929,
  "name": "SR-71 Blackbird",
  "kind": "Human-made",
  "danger": 0,
  "wiki": "Lockheed_SR-71_Blackbird",
  "blurb": "The spy plane set a sustained-flight altitude record of 25,929 m (85,069 ft) in 1976 and remains the fastest crewed jet ever.",
  "facts": [
   "It flew above Mach 3 — faster than a rifle bullet.",
   "It leaked fuel on the runway; its panels only sealed tight once the heat of flight expanded them.",
   "Its crews wore full pressure suits, similar to astronauts'.",
   "No SR-71 was ever shot down; it simply outran missiles."
  ]
 },
 {
  "id": "stratos",
  "dir": "up",
  "v": 38969,
  "name": "Felix Baumgartner's jump",
  "kind": "Human",
  "danger": 3,
  "wiki": "Red_Bull_Stratos",
  "blurb": "In October 2012 Felix Baumgartner stepped out of a balloon capsule 38,969 m up and fell faster than the speed of sound.",
  "facts": [
   "He reached 1,357.6 km/h — the first person to break the sound barrier in freefall.",
   "His freefall lasted 4 minutes 19 seconds before he opened his parachute.",
   "Around 8 million people watched it live on YouTube, a record at the time.",
   "He went into a dangerous flat spin during the fall before recovering control."
  ]
 },
 {
  "id": "eustace",
  "dir": "up",
  "v": 41422,
  "name": "Alan Eustace's jump",
  "kind": "Human",
  "danger": 3,
  "wiki": "Alan_Eustace",
  "blurb": "Two years later, Google executive Alan Eustace quietly beat that record, jumping from 41,422 m with no capsule at all.",
  "facts": [
   "He hung directly beneath the balloon in a pressure suit for the more-than-two-hour ascent.",
   "He hit about 1,320 km/h and created a small sonic boom heard on the ground.",
   "The project was kept secret until after the jump on 24 October 2014.",
   "He was cut free from the balloon with a small explosive device."
  ]
 },
 {
  "id": "bu60",
  "dir": "up",
  "v": 53000,
  "name": "The highest balloon",
  "kind": "Human-made",
  "danger": 0,
  "wiki": "BU60-1",
  "blurb": "In 2002, Japan's space agency flew an uncrewed balloon to 53 km — higher than any balloon before or since.",
  "facts": [
   "Its plastic film was only 3.4 micrometres thick — thinner than kitchen cling film.",
   "Fully inflated, it held 60,000 cubic metres of helium.",
   "Ordinary weather balloons swell to many times their launch size before bursting around 30–35 km up.",
   "At 53 km, the air is less than 1/1,000 as dense as at sea level."
  ]
 },
 {
  "id": "meteor",
  "dir": "up",
  "v": 80000,
  "name": "Shooting stars",
  "kind": "Phenomenon",
  "danger": 0,
  "wiki": "Meteoroid",
  "blurb": "Most meteors burn up 76–100 km overhead. The bright streak is usually a grain smaller than a pea.",
  "facts": [
   "They hit the atmosphere at 11–72 km per second.",
   "The glow comes mostly from the air around the grain heating up, not the grain itself.",
   "A 2021 study estimated about 5,200 tonnes of space dust reach Earth's surface every year.",
   "Meteor showers happen when Earth passes through the dusty trail left behind by a comet."
  ]
 },
 {
  "id": "noctilucent",
  "dir": "up",
  "v": 83000,
  "name": "Noctilucent clouds",
  "kind": "Phenomenon",
  "danger": 0,
  "wiki": "Noctilucent_cloud",
  "blurb": "The highest clouds on Earth, around 80 km up, glow electric blue in the dark after sunset.",
  "facts": [
   "They are made of ice crystals that form on specks of meteor dust.",
   "They are only visible in summer twilight, when the Sun lights them from below the horizon.",
   "They were first reported in 1885, two years after the huge Krakatoa eruption.",
   "They seem to be appearing more often and further from the poles than they used to."
  ]
 },
 {
  "id": "karman",
  "dir": "up",
  "v": 100000,
  "name": "The Kármán line — space",
  "kind": "Boundary",
  "danger": 0,
  "wiki": "Kármán_line",
  "blurb": "By international convention, space begins 100 km above sea level — roughly an hour's drive, if you could drive straight up.",
  "facts": [
   "Above it, the air is too thin for wings to hold up an aircraft at any practical speed.",
   "It's named after Theodore von Kármán, the engineer who worked out where that happens.",
   "The US military and NASA award astronaut wings from 80 km (50 miles), so the line isn't universally agreed.",
   "There's no physical edge — the atmosphere just gradually fades."
  ]
 },
 {
  "id": "aurora",
  "dir": "up",
  "v": 150000,
  "name": "Auroras",
  "kind": "Phenomenon",
  "danger": 0,
  "wiki": "Aurora",
  "blurb": "Northern and southern lights glow 100–300 km up, where particles from the Sun crash into oxygen and nitrogen.",
  "facts": [
   "Green light comes from oxygen at about 100–250 km; the rarer red glow comes from oxygen higher up.",
   "Earth's magnetic field funnels the Sun's particles towards the poles.",
   "During the great solar storm of May 2024, auroras were seen as far south as Florida and Mexico.",
   "Jupiter and Saturn have auroras too — Jupiter's are bigger than the entire Earth."
  ]
 },
 {
  "id": "iss",
  "dir": "up",
  "v": 415000,
  "name": "International Space Station",
  "kind": "Human-made",
  "danger": 0,
  "wiki": "International_Space_Station",
  "blurb": "The ISS orbits about 415 km up at 28,000 km/h, circling the planet every 90 minutes.",
  "facts": [
   "Its crew sees about 16 sunrises and 16 sunsets every day.",
   "People have lived on board continuously since 2 November 2000.",
   "It's about the size of an American football field and easily visible from the ground.",
   "It's planned to be steered into the Pacific Ocean around 2030."
  ]
 },
 {
  "id": "hubble",
  "dir": "up",
  "v": 530000,
  "name": "Hubble Space Telescope",
  "kind": "Human-made",
  "danger": 0,
  "wiki": "Hubble_Space_Telescope",
  "blurb": "Since 1990 Hubble has orbited around 530 km up, above the blurring air, taking some of the most famous pictures in history.",
  "facts": [
   "When it launched, its mirror was ground to the wrong shape; astronauts fitted corrective optics in 1993.",
   "It has made more than 1.5 million observations.",
   "Its orbit is slowly sinking because of faint drag from the upper atmosphere.",
   "It helped show that the expansion of the universe is speeding up."
  ]
 },
 {
  "id": "vanallen",
  "dir": "up",
  "v": 3000000,
  "name": "Van Allen radiation belts",
  "kind": "Danger zone",
  "danger": 2,
  "wiki": "Van_Allen_radiation_belt",
  "blurb": "Two doughnut-shaped belts of fast-moving charged particles, trapped by Earth's magnetic field, wrap the planet thousands of kilometres up.",
  "facts": [
   "They were discovered in 1958 by the first US satellite, Explorer 1, and named after scientist James Van Allen.",
   "Satellites that cross them need shielding; the radiation damages electronics.",
   "Apollo astronauts passed through them quickly on the way to the Moon to limit their dose.",
   "In 2012, NASA's Van Allen Probes spotted a temporary third belt."
  ]
 },
 {
  "id": "gps",
  "dir": "up",
  "v": 20200000,
  "name": "GPS satellites",
  "kind": "Human-made",
  "danger": 0,
  "wiki": "Global_Positioning_System",
  "blurb": "The satellites that tell your phone where you are orbit 20,200 km up, each circling Earth twice a day.",
  "facts": [
   "Their clocks tick about 38 microseconds a day faster than clocks on the ground, because of Einstein's relativity.",
   "Without correcting for that, GPS positions would drift by around 10 km every day.",
   "Your phone needs signals from at least four satellites to fix your position.",
   "The system is run by the US Space Force."
  ]
 },
 {
  "id": "geo",
  "dir": "up",
  "v": 35786000,
  "name": "Geostationary orbit",
  "kind": "Orbit",
  "danger": 0,
  "wiki": "Geostationary_orbit",
  "blurb": "At exactly 35,786 km, a satellite circles Earth once a day — so it seems to hang still in the sky. Satellite TV dishes point here.",
  "facts": [
   "Science-fiction writer Arthur C. Clarke popularised the idea in 1945.",
   "Dead satellites are boosted about 300 km higher into a 'graveyard orbit' to free up space.",
   "A phone call bounced via a satellite here has a noticeable delay of about half a second round trip.",
   "Weather satellites here take the full-disk pictures of Earth you see on the news."
  ]
 },
 {
  "id": "moon",
  "dir": "up",
  "v": 384400000,
  "name": "The Moon",
  "kind": "World",
  "danger": 0,
  "wiki": "Moon",
  "blurb": "Our Moon, on average 384,400 km away. Light makes the trip in about 1.3 seconds.",
  "facts": [
   "Every other planet in the Solar System could fit side by side in the gap between Earth and the Moon.",
   "It drifts about 3.8 cm further from Earth every year.",
   "Only 12 people have ever walked on it, all between 1969 and 1972.",
   "Its gravity raises the ocean tides — the sea you started from is pulled by it twice a day."
  ]
 },
 {
  "id": "jwst",
  "dir": "up",
  "v": 1500000000,
  "name": "James Webb Space Telescope",
  "kind": "Human-made",
  "danger": 0,
  "wiki": "James_Webb_Space_Telescope",
  "blurb": "Webb works 1.5 million km from Earth, about four times further than the Moon, looking back at the first galaxies.",
  "facts": [
   "Its 6.5 m mirror is made of 18 gold-coated hexagons.",
   "A sunshield the size of a tennis court keeps it colder than −220 °C.",
   "It sees infrared light, which lets it peer through dust and see extremely distant, ancient galaxies.",
   "It launched on 25 December 2021."
  ]
 },
 {
  "id": "mars",
  "dir": "up",
  "v": 55760000000,
  "name": "Mars",
  "kind": "World",
  "danger": 0,
  "wiki": "Mars",
  "blurb": "At its closest, in 2003, Mars came within 55.8 million km — nearer than at any time in almost 60,000 years.",
  "facts": [
   "Olympus Mons, its largest volcano, is about 22 km tall — two and a half times Everest.",
   "Radio signals take between 3 and 22 minutes to get there, so rovers can't be driven in real time.",
   "Rovers have found dried riverbeds and lake deposits; Mars may once have had a northern ocean.",
   "Its red colour is rust — iron oxide in the dust."
  ]
 },
 {
  "id": "sun",
  "dir": "up",
  "v": 149600000000,
  "name": "The Sun",
  "kind": "Star",
  "danger": 3,
  "wiki": "Sun",
  "blurb": "149.6 million km away. The sunlight on the sea at the start of this page left the Sun 8 minutes and 20 seconds earlier.",
  "facts": [
   "It holds 99.86% of all the mass in the Solar System.",
   "About 1.3 million Earths would fit inside it.",
   "Its core is about 15 million °C.",
   "It evaporates about 1 metre of ocean water per year over the tropics, driving the planet's weather."
  ]
 },
 {
  "id": "jupiter",
  "dir": "up",
  "v": 630000000000,
  "name": "Jupiter and Europa",
  "kind": "World",
  "danger": 0,
  "wiki": "Europa_(moon)",
  "blurb": "Around 630 million km away at its closest, Jupiter has a moon, Europa, hiding a salty ocean under its ice — with about twice the water of all Earth's oceans.",
  "facts": [
   "Europa's ocean is thought to be 60–150 km deep, beneath an ice shell several kilometres thick.",
   "NASA's Europa Clipper, launched in 2024, is on its way to study whether it could support life.",
   "Jupiter's Great Red Spot is a storm wider than Earth that has raged for centuries.",
   "Jupiter has nearly 100 known moons."
  ]
 },
 {
  "id": "voyager",
  "dir": "up",
  "v": 25600000000000,
  "name": "Voyager 1",
  "kind": "Human-made",
  "danger": 0,
  "wiki": "Voyager_1",
  "blurb": "Launched in 1977, Voyager 1 is the most distant human-made object — about 25.6 billion km away and still sending data home.",
  "facts": [
   "Its radio signal now takes nearly a full day to reach us; it's due to cross one light-day of distance in November 2026.",
   "It crossed into interstellar space in August 2012.",
   "It carries the Golden Record: sounds, music and greetings in 55 languages, in case anyone finds it.",
   "Its radio transmitter is about as powerful as a refrigerator light bulb."
  ]
 },
 {
  "id": "oort",
  "dir": "up",
  "v": 7500000000000000,
  "name": "The Oort cloud",
  "kind": "Region",
  "danger": 0,
  "wiki": "Oort_cloud",
  "blurb": "A vast, never-seen shell of icy bodies thought to surround the Solar System, reaching perhaps halfway to the nearest star.",
  "facts": [
   "It may contain trillions of objects, but they are too small and dark to see directly.",
   "Long-period comets are thought to fall inward from here.",
   "Voyager 1 will take about 300 years to reach its inner edge — and perhaps 30,000 years to pass through it.",
   "It's named after Dutch astronomer Jan Oort, who proposed it in 1950."
  ]
 },
 {
  "id": "proxima",
  "dir": "up",
  "v": 40113368000000000,
  "name": "Proxima Centauri",
  "kind": "Star",
  "danger": 0,
  "wiki": "Proxima_Centauri",
  "blurb": "The nearest star to the Sun, 4.24 light-years away. Its light left it more than four years ago.",
  "facts": [
   "It's a small red dwarf and too faint to see without a telescope.",
   "It has at least one planet, Proxima b, in the zone where liquid water could exist.",
   "At Voyager 1's speed, getting there would take about 73,000 years.",
   "It frequently throws out powerful flares that could strip a nearby planet's atmosphere."
  ]
 },
 {
  "id": "betelgeuse",
  "dir": "up",
  "v": 5203385000000000000,
  "name": "Betelgeuse",
  "kind": "Star",
  "danger": 0,
  "wiki": "Betelgeuse",
  "blurb": "The red shoulder of Orion, roughly 550 light-years away, is a dying supergiant star.",
  "facts": [
   "If it sat where the Sun is, its surface would reach beyond the orbit of Mars.",
   "It dimmed dramatically in 2019–2020 after puffing out a huge cloud of dust.",
   "It will explode as a supernova some time in the next 100,000 years.",
   "When it does, it will be bright enough to see in daylight for weeks."
  ]
 },
 {
  "id": "sgra",
  "dir": "up",
  "v": 245978200000000000000,
  "name": "Sagittarius A*",
  "kind": "Black hole",
  "danger": 3,
  "wiki": "Sagittarius_A*",
  "blurb": "At the centre of our galaxy, 26,000 light-years away, sits a black hole four million times the mass of the Sun.",
  "facts": [
   "The first image of it was released in May 2022 by the Event Horizon Telescope.",
   "Stars near it whip around at thousands of kilometres per second.",
   "The Sun takes about 230 million years to orbit the galactic centre once.",
   "Proving it was a black hole earned the 2020 Nobel Prize in Physics."
  ]
 },
 {
  "id": "andromeda",
  "dir": "up",
  "v": 2.365175e+22,
  "name": "Andromeda Galaxy",
  "kind": "Galaxy",
  "danger": 0,
  "wiki": "Andromeda_Galaxy",
  "blurb": "2.5 million light-years away, Andromeda is the most distant thing most people can see with the naked eye.",
  "facts": [
   "It holds roughly a trillion stars — more than the Milky Way.",
   "It's moving towards us at about 110 km per second.",
   "A 2025 study put the chance of it merging with the Milky Way in the next 10 billion years at about 50%.",
   "The light you see from it left before modern humans existed."
  ]
 },
 {
  "id": "universe",
  "dir": "up",
  "v": 4.3992255e+26,
  "name": "Edge of the observable universe",
  "kind": "Boundary",
  "danger": 0,
  "wiki": "Observable_universe",
  "blurb": "The furthest we can ever see: about 46.5 billion light-years in every direction. Beyond that, light hasn't had time to reach us.",
  "facts": [
   "The universe is 13.8 billion years old, but the edge is further than 13.8 billion light-years because space itself has expanded.",
   "The oldest light we can detect, the cosmic microwave background, was released 380,000 years after the Big Bang.",
   "It contains somewhere between hundreds of billions and 2 trillion galaxies.",
   "A little of the static on an old analogue TV came from this ancient light."
  ]
 },
 {
  "id": "manowar",
  "dir": "down",
  "v": 0.5,
  "name": "Portuguese man o' war",
  "kind": "Creature",
  "danger": 2,
  "range": "Floats at the surface",
  "wiki": "Portuguese_man_o'_war",
  "blurb": "It looks like a jellyfish, but it's a colony of many small organisms working as one, dragging stinging tentacles beneath a gas-filled sail.",
  "facts": [
   "Its tentacles are usually about 10 m long but can reach 30 m.",
   "Tentacles keep stinging even after the animal washes up dead on the beach.",
   "Stings are extremely painful and occasionally fatal.",
   "Some sail to the left of the wind and some to the right, so storms can't wipe out the whole population."
  ]
 },
 {
  "id": "boxjelly",
  "dir": "down",
  "v": 2,
  "name": "Box jellyfish",
  "kind": "Creature",
  "danger": 3,
  "range": "0–20 m, coastal waters",
  "wiki": "Chironex_fleckeri",
  "blurb": "The Australian box jellyfish is often called the most venomous animal in the sea. A severe sting can kill an adult within minutes.",
  "facts": [
   "It has up to 15 tentacles on each corner, each up to 3 m long, covered in millions of stinging cells.",
   "It has 24 eyes, and some of them have lenses and corneas.",
   "It actively swims — up to about 1.5 m per second — rather than drifting.",
   "Australian beaches keep vinegar on hand: it stops unfired stinging cells from triggering."
  ]
 },
 {
  "id": "blueringed",
  "dir": "down",
  "v": 5,
  "name": "Blue-ringed octopus",
  "kind": "Creature",
  "danger": 3,
  "range": "0–50 m, reefs and tide pools",
  "wiki": "Blue-ringed_octopus",
  "blurb": "Golf-ball-sized and beautiful, but its bite carries tetrodotoxin — there is no antivenom.",
  "facts": [
   "It is often said to carry enough venom to kill 26 adults.",
   "The bite can be painless; victims may not notice until they struggle to breathe.",
   "People survive if someone keeps them breathing artificially until the toxin wears off.",
   "The blue rings only flash bright when it feels threatened."
  ]
 },
 {
  "id": "stonefish",
  "dir": "down",
  "v": 8,
  "name": "Stonefish",
  "kind": "Creature",
  "danger": 3,
  "range": "0–30 m, reefs",
  "wiki": "Synanceia_verrucosa",
  "blurb": "The most venomous fish in the world is also the best disguised: it looks exactly like a lump of rock or coral.",
  "facts": [
   "13 spines along its back inject venom when stepped on.",
   "The pain is described as among the worst a human can experience.",
   "An antivenom exists, and hot water can help break down the venom.",
   "It can survive out of water for hours when stranded by the tide."
  ]
 },
 {
  "id": "coral",
  "dir": "down",
  "v": 15,
  "name": "Coral reefs",
  "kind": "Habitat",
  "danger": 0,
  "range": "0–50 m, warm clear water",
  "wiki": "Coral_reef",
  "blurb": "Reefs cover less than 1% of the ocean floor but shelter about a quarter of all marine species.",
  "facts": [
   "Corals are animals; the colours come from algae living inside their tissue.",
   "The Great Barrier Reef is the largest structure built by living things and can be seen from space.",
   "In 2024 NOAA confirmed the fourth global coral bleaching event on record.",
   "Most reefs grow only a few millimetres to a couple of centimetres per year."
  ]
 },
 {
  "id": "orca",
  "dir": "down",
  "v": 30,
  "name": "Orca",
  "kind": "Creature",
  "danger": 1,
  "range": "Surface to about 1,000 m",
  "wiki": "Orca",
  "blurb": "The ocean's top predator hunts great white sharks, whales and seals — and since 2020, some off Spain and Portugal have been ramming sailing boats.",
  "facts": [
   "Iberian orcas have damaged hundreds of boats' rudders and sunk several vessels since 2020.",
   "There are no confirmed cases of wild orcas killing a human.",
   "Different groups have their own diets, hunting techniques and 'dialects' of calls.",
   "They are the largest member of the dolphin family."
  ]
 },
 {
  "id": "scuba",
  "dir": "down",
  "v": 40,
  "name": "Recreational diving limit",
  "kind": "Human limit",
  "danger": 2,
  "wiki": "Scuba_diving",
  "blurb": "Recreational scuba divers stop at 40 m. Here the water pushes on you with five times the pressure of the air at the surface.",
  "facts": [
   "Pressure increases by one atmosphere every 10 m of seawater.",
   "Below about 30 m, nitrogen narcosis can make divers feel drunk and make bad decisions.",
   "Coming up too fast can cause 'the bends' as dissolved nitrogen fizzes out of the blood.",
   "Red light is almost completely absorbed by this depth, so everything looks blue-green."
  ]
 },
 {
  "id": "greatwhite",
  "dir": "down",
  "v": 60,
  "name": "Great white shark",
  "kind": "Creature",
  "danger": 3,
  "range": "Surface to 1,200 m",
  "wiki": "Great_white_shark",
  "blurb": "The largest predatory fish, up to about 6 m long. It usually hunts near the surface but has been tracked diving past 1,000 m.",
  "facts": [
   "It has around 300 serrated teeth arranged in rows, constantly replaced.",
   "It can launch its entire body out of the water when ambushing seals from below.",
   "It can keep parts of its body warmer than the surrounding water.",
   "Sharks kill around 5–10 people a year worldwide; people kill tens of millions of sharks a year."
  ]
 },
 {
  "id": "bluewhale",
  "dir": "down",
  "v": 100,
  "name": "Blue whale",
  "kind": "Creature",
  "danger": 0,
  "range": "Usually 0–100 m, up to about 500 m",
  "wiki": "Blue_whale",
  "blurb": "The largest animal known to have ever lived — up to 30 m long and heavier than any dinosaur.",
  "facts": [
   "Its heart alone weighs around 180 kg.",
   "Its low-frequency calls can travel hundreds of kilometres through the water.",
   "It can eat around 16 tonnes of krill a day while feeding.",
   "A newborn calf gains roughly 90 kg a day on its mother's milk."
  ]
 },
 {
  "id": "nitsch",
  "dir": "down",
  "v": 214,
  "name": "Deepest freedive",
  "kind": "Human",
  "danger": 3,
  "wiki": "Herbert_Nitsch",
  "blurb": "In 2007 Herbert Nitsch rode a weighted sled to 214 m on a single breath and came back up — the official no-limits freediving record.",
  "facts": [
   "At that depth the water pressure squeezes the lungs to about 1/22 of their surface size.",
   "The mammalian dive reflex slows the heart and shifts blood to the core to protect organs.",
   "In 2012 he attempted 253 m and suffered severe decompression sickness and multiple strokes.",
   "He had to relearn how to walk and talk, but later returned to diving."
  ]
 },
 {
  "id": "gabr",
  "dir": "down",
  "v": 332,
  "name": "Deepest scuba dive",
  "kind": "Human",
  "danger": 3,
  "wiki": "Ahmed_Gabr",
  "blurb": "In 2014, Egyptian diver Ahmed Gabr reached 332 m in the Red Sea on scuba — the deepest scuba dive on record.",
  "facts": [
   "The descent took about 12 minutes.",
   "The ascent took more than 13 hours of slow decompression stops.",
   "He used special gas mixtures, because breathing normal air at that depth would be poisonous.",
   "Several divers have died attempting similar depths."
  ]
 },
 {
  "id": "humboldt",
  "dir": "down",
  "v": 300,
  "name": "Humboldt squid",
  "kind": "Creature",
  "danger": 2,
  "range": "200–700 m",
  "wiki": "Humboldt_squid",
  "blurb": "Called 'red devils' by fishermen, these 1.5 m squid hunt in packs and flash red and white as they attack.",
  "facts": [
   "They can hunt in groups of more than a thousand.",
   "They have attacked divers, and are strong enough to pull a person down.",
   "Their suckers are ringed with tiny sharp teeth.",
   "They grow fast and live only about one to two years."
  ]
 },
 {
  "id": "lanternfish",
  "dir": "down",
  "v": 500,
  "name": "Lanternfish",
  "kind": "Creature",
  "danger": 0,
  "range": "300–1,500 m by day, near the surface at night",
  "wiki": "Myctophidae",
  "blurb": "Small glowing fish that may be the most numerous vertebrates on Earth, making the largest daily migration on the planet.",
  "facts": [
   "Every night billions rise hundreds of metres to feed near the surface, then sink back at dawn.",
   "Their dense layer reflected WWII sonar so strongly that it was mistaken for the seafloor — a 'false bottom'.",
   "They may make up around 65% of all deep-sea fish biomass.",
   "Rows of light organs along their bellies hide their silhouette against the faint light from above."
  ]
 },
 {
  "id": "emperor",
  "dir": "down",
  "v": 564,
  "name": "Emperor penguin",
  "kind": "Creature",
  "danger": 0,
  "range": "Record dive 564 m",
  "wiki": "Emperor_penguin",
  "blurb": "A bird that dives deeper than most submarines of the Second World War: emperor penguins have been recorded at 564 m.",
  "facts": [
   "They can hold their breath for over 20 minutes.",
   "Males keep the egg on their feet through the Antarctic winter for about two months, eating nothing.",
   "They huddle in thousands to survive wind chills below −60 °C.",
   "Their solid bones, unlike those of flying birds, help with deep diving."
  ]
 },
 {
  "id": "siphonophore",
  "dir": "down",
  "v": 625,
  "name": "Giant siphonophore",
  "kind": "Creature",
  "danger": 2,
  "range": "Around 600–700 m",
  "wiki": "Siphonophorae",
  "blurb": "In 2020 scientists filmed a spiralling siphonophore off Western Australia estimated to be around 120 m long — possibly the longest animal ever seen.",
  "facts": [
   "It was found by the Schmidt Ocean Institute in the Ningaloo Canyons at about 625 m.",
   "Its outer ring alone was about 47 m long.",
   "Like the man o' war, a siphonophore is a colony of clones, each specialised for eating, moving or reproducing.",
   "It fishes by hanging stinging tentacles like a giant living curtain."
  ]
 },
 {
  "id": "barreleye",
  "dir": "down",
  "v": 700,
  "name": "Barreleye fish",
  "kind": "Creature",
  "danger": 0,
  "range": "600–800 m",
  "wiki": "Macropinna_microstoma",
  "blurb": "A fish with a transparent head. Its glowing green eyes sit inside the see-through dome and rotate to look straight up.",
  "facts": [
   "The two 'eyes' at the front are actually nostrils; the real eyes are the green domes inside.",
   "Its fragile dome was destroyed in nets, so nobody knew about it until MBARI filmed a living one.",
   "It looks up to spot the silhouettes of prey against the faint light from above.",
   "The green pigment in its eyes may filter out sunlight to help it spot bioluminescence."
  ]
 },
 {
  "id": "frilled",
  "dir": "down",
  "v": 750,
  "name": "Frilled shark",
  "kind": "Creature",
  "danger": 0,
  "range": "500–1,000 m",
  "wiki": "Frilled_shark",
  "blurb": "An eel-like shark with 300 needle teeth in 25 rows. Its lineage goes back to the age of the dinosaurs.",
  "facts": [
   "Its teeth point backwards, so slippery squid can't escape once caught.",
   "Its pregnancy may last up to three and a half years — possibly the longest of any animal.",
   "It may strike like a snake, lunging forward to catch prey.",
   "It is very rarely seen alive; most knowledge comes from fishing by-catch."
  ]
 },
 {
  "id": "vampire",
  "dir": "down",
  "v": 800,
  "name": "Vampire squid",
  "kind": "Creature",
  "danger": 0,
  "range": "600–1,200 m",
  "wiki": "Vampire_squid",
  "blurb": "Despite the name, it's neither a squid nor an octopus, and it doesn't hunt. It eats 'marine snow' — drifting flakes of dead matter.",
  "facts": [
   "It lives in the oxygen-minimum zone, where almost nothing else can breathe.",
   "When threatened it turns its cloak inside out, becoming a spiky-looking ball.",
   "Instead of ink, it squirts a cloud of glowing mucus to confuse predators.",
   "It is the last surviving member of its entire order."
  ]
 },
 {
  "id": "giantsquid",
  "dir": "down",
  "v": 900,
  "name": "Giant squid",
  "kind": "Creature",
  "danger": 0,
  "range": "300–1,000 m",
  "wiki": "Giant_squid",
  "blurb": "The real kraken: up to about 12 m long, with eyes the size of dinner plates. It wasn't filmed alive in the deep until 2012.",
  "facts": [
   "Its eyes, up to 27 cm across, are among the largest in the animal kingdom.",
   "Sperm whales often carry sucker-shaped scars from fighting them.",
   "The first footage of one alive in its habitat was recorded off Japan in 2012.",
   "Its blood is blue, because it uses copper instead of iron to carry oxygen."
  ]
 },
 {
  "id": "blobfish",
  "dir": "down",
  "v": 1000,
  "name": "Blobfish",
  "kind": "Creature",
  "danger": 0,
  "range": "600–1,200 m",
  "wiki": "Blobfish",
  "blurb": "Voted the world's ugliest animal — but at home in the deep it looks like a normal fish. The 'blob' is what decompression does to it.",
  "facts": [
   "Its body is jelly-like and just slightly lighter than water, so it floats without a swim bladder.",
   "It barely moves, eating whatever drifts into its path.",
   "It won the Ugly Animal Preservation Society's vote in 2013.",
   "In 2025 it was also crowned New Zealand's Fish of the Year."
  ]
 },
 {
  "id": "goblin",
  "dir": "down",
  "v": 1100,
  "name": "Goblin shark",
  "kind": "Creature",
  "danger": 0,
  "range": "270–1,300 m",
  "wiki": "Goblin_shark",
  "blurb": "A pink shark with a long snout and jaws that catapult out of its face to snatch prey.",
  "facts": [
   "Its jaws can shoot forward several centimetres in a fraction of a second.",
   "The pink colour comes from blood vessels visible through its skin.",
   "Its lineage stretches back about 125 million years.",
   "Its long snout is covered in sensors that detect the electric fields of prey."
  ]
 },
 {
  "id": "viperfish",
  "dir": "down",
  "v": 1300,
  "name": "Viperfish",
  "kind": "Creature",
  "danger": 0,
  "range": "200–1,500 m",
  "wiki": "Chauliodus_sloani",
  "blurb": "Its fangs are so long they don't fit inside its mouth — they curve up outside its head, almost to its eyes.",
  "facts": [
   "It has a glowing lure at the tip of a long ray on its back.",
   "It can open its jaws extremely wide to swallow large prey.",
   "It rises towards the surface at night to hunt.",
   "It is only about 30 cm long."
  ]
 },
 {
  "id": "anglerfish",
  "dir": "down",
  "v": 1500,
  "name": "Humpback anglerfish",
  "kind": "Creature",
  "danger": 0,
  "range": "100–4,500 m, mostly 1,000–2,000 m",
  "wiki": "Melanocetus_johnsonii",
  "blurb": "The classic deep-sea monster: a glowing lure dangles in front of a mouth full of glassy teeth. It's about the size of your hand.",
  "facts": [
   "The light comes from bioluminescent bacteria living inside the lure.",
   "In some anglerfish species, tiny males fuse permanently to the female and share her blood.",
   "MBARI filmed one alive at depth for the first time in 2014.",
   "In February 2025, a rare black seadevil was filmed swimming at the surface off Tenerife."
  ]
 },
 {
  "id": "fangtooth",
  "dir": "down",
  "v": 1700,
  "name": "Fangtooth",
  "kind": "Creature",
  "danger": 0,
  "range": "500–2,000 m",
  "wiki": "Anoplogaster_cornuta",
  "blurb": "Relative to its size, it has the largest teeth of any fish in the ocean.",
  "facts": [
   "Its fangs are so long that it has sockets beside its brain to hold them when its mouth closes.",
   "It is only about 16 cm long.",
   "It has been found as deep as 5,000 m.",
   "Young fangtooths look so different they were once thought to be another species."
  ]
 },
 {
  "id": "gulper",
  "dir": "down",
  "v": 1800,
  "name": "Gulper eel",
  "kind": "Creature",
  "danger": 0,
  "range": "500–3,000 m",
  "wiki": "Eurypharynx",
  "blurb": "Mostly mouth: its loosely hinged jaws open like a pelican's pouch, far larger than the rest of its body.",
  "facts": [
   "Despite the huge mouth, it mostly eats small shrimp and other crustaceans.",
   "The tip of its whip-like tail glows pink or red.",
   "It has tiny eyes and probably can only sense light and dark.",
   "It is also called the pelican eel."
  ]
 },
 {
  "id": "isopod",
  "dir": "down",
  "v": 1900,
  "name": "Giant isopod",
  "kind": "Creature",
  "danger": 0,
  "range": "170–2,140 m",
  "wiki": "Bathynomus_giganteus",
  "blurb": "A relative of the woodlouse that grows up to 50 cm long, scavenging on whatever falls from above.",
  "facts": [
   "It can go years without eating — one in a Japanese aquarium refused food for over five years.",
   "It can roll into an armoured ball, like a pill bug.",
   "Growing huge in cold deep water is called deep-sea gigantism.",
   "It has about 4,000 facets in each compound eye."
  ]
 },
 {
  "id": "blackswallower",
  "dir": "down",
  "v": 2000,
  "name": "Black swallower",
  "kind": "Creature",
  "danger": 0,
  "range": "700–2,745 m",
  "wiki": "Black_swallower",
  "blurb": "A 25 cm fish that can swallow prey twice its length and ten times its weight.",
  "facts": [
   "Its stomach stretches enormously to hold the meal.",
   "Sometimes the prey is too big to digest before it rots — the gas floats the dead swallower to the surface.",
   "That's how most known specimens were found.",
   "It has no scales and hinged jaws that can open very wide."
  ]
 },
 {
  "id": "colossal",
  "dir": "down",
  "v": 2100,
  "name": "Colossal squid",
  "kind": "Creature",
  "danger": 0,
  "range": "Down to 2,200 m",
  "wiki": "Colossal_squid",
  "blurb": "The heaviest invertebrate on Earth. A specimen caught in 2007 weighed 495 kg.",
  "facts": [
   "Its eyes, up to 27 cm across, are the largest known in the animal kingdom.",
   "Its tentacles carry swivelling hooks, not just suckers.",
   "The first confirmed footage of a live one — a 30 cm juvenile — was filmed in March 2025 by the Schmidt Ocean Institute.",
   "It lives in the icy Southern Ocean around Antarctica."
  ]
 },
 {
  "id": "greenland",
  "dir": "down",
  "v": 2200,
  "name": "Greenland shark",
  "kind": "Creature",
  "danger": 0,
  "range": "0–2,200 m, Arctic waters",
  "wiki": "Greenland_shark",
  "blurb": "The longest-lived vertebrate known. Some alive today were probably born before the United States existed.",
  "facts": [
   "A 2016 study estimated one shark's age at around 400 years, possibly more.",
   "They grow about 1 cm per year and may not mature until around 150 years old.",
   "Their meat is toxic when fresh; Iceland ferments it into a dish called hákarl.",
   "They swim at about 1 km/h — one of the slowest fish for their size."
  ]
 },
 {
  "id": "yeti",
  "dir": "down",
  "v": 2228,
  "name": "Yeti crab",
  "kind": "Creature",
  "danger": 0,
  "range": "Hydrothermal vents, around 2,200 m",
  "wiki": "Kiwa_hirsuta",
  "blurb": "A blind, furry-armed crab discovered in 2005 near hot springs on the Pacific seafloor, south of Easter Island.",
  "facts": [
   "The 'fur' is bristles covered in bacteria, which may be a source of food.",
   "A related species waves its arms rhythmically, possibly to feed its bacteria with oxygen and minerals.",
   "It was found at 2,228 m by the submersible Alvin.",
   "It was so new that scientists created a new family of animals for it."
  ]
 },
 {
  "id": "tubeworm",
  "dir": "down",
  "v": 2500,
  "name": "Giant tube worms",
  "kind": "Creature",
  "danger": 0,
  "range": "Hydrothermal vents, around 2,500 m",
  "wiki": "Riftia_pachyptila",
  "blurb": "Worms up to 2.4 m long living around volcanic vents, with no mouth and no gut at all.",
  "facts": [
   "Bacteria inside them turn chemicals from the vents into food — life powered without sunlight.",
   "Their bright red plumes get that colour from haemoglobin.",
   "Vents can spew water above 400 °C; the pressure stops it from boiling.",
   "The discovery of vent life in 1977 changed ideas about where life can exist — and where it might exist on other worlds."
  ]
 },
 {
  "id": "thresher",
  "dir": "down",
  "v": 2560,
  "name": "USS Thresher",
  "kind": "Wreck",
  "danger": 3,
  "wiki": "USS_Thresher_(SSN-593)",
  "blurb": "In 1963 a US nuclear submarine sank during a deep-diving test off Cape Cod and was crushed by the pressure. All 129 people aboard died.",
  "facts": [
   "It lies in pieces at about 2,560 m (8,400 ft).",
   "It remains the deadliest submarine disaster in history.",
   "It led to the US Navy's SUBSAFE safety programme.",
   "No submarine certified under SUBSAFE has been lost since."
  ]
 },
 {
  "id": "cuvier",
  "dir": "down",
  "v": 2992,
  "name": "Cuvier's beaked whale",
  "kind": "Creature",
  "danger": 0,
  "range": "Dives to 2,992 m",
  "wiki": "Cuvier's_beaked_whale",
  "blurb": "The deepest-diving mammal known, recorded at 2,992 m — almost three kilometres down on one breath.",
  "facts": [
   "One was recorded holding its breath for 222 minutes — 3 hours and 42 minutes.",
   "It collapses its lungs during dives to avoid the bends.",
   "It hunts squid in total darkness using echolocation.",
   "Loud naval sonar has been linked to mass strandings of the species."
  ]
 },
 {
  "id": "dumbo",
  "dir": "down",
  "v": 3000,
  "name": "Dumbo octopus",
  "kind": "Creature",
  "danger": 0,
  "range": "3,000–4,000 m, seen to 6,957 m",
  "wiki": "Grimpoteuthis",
  "blurb": "Named after Disney's flying elephant for the ear-like fins it flaps to 'fly' above the seafloor.",
  "facts": [
   "One filmed at 6,957 m in the Java Trench in 2020 is the deepest octopus ever seen.",
   "It swallows its prey whole instead of tearing it apart.",
   "It has no ink sac — in the dark, there's no point.",
   "It's usually 20–30 cm long."
  ]
 },
 {
  "id": "titan",
  "dir": "down",
  "v": 3300,
  "name": "Titan submersible implosion",
  "kind": "Disaster",
  "danger": 3,
  "wiki": "Titan_submersible_implosion",
  "blurb": "On 18 June 2023, the submersible Titan imploded roughly 3,300 m down while diving to the Titanic. All five people aboard were killed instantly.",
  "facts": [
   "At that depth the water presses with about 330 times surface pressure — roughly 4,800 psi on every square inch of hull.",
   "Its hull was made of carbon-fibre composite and was never certified by an independent classification agency.",
   "Contact was lost about 1 hour 45 minutes into the descent; the collapse itself took milliseconds, faster than the brain can register pain.",
   "The debris was found on 22 June, about 500 m from the Titanic's bow. A 2025 US Coast Guard report concluded the disaster was preventable."
  ]
 },
 {
  "id": "avgdepth",
  "dir": "down",
  "v": 3688,
  "name": "Average ocean depth",
  "kind": "Benchmark",
  "danger": 0,
  "wiki": "Ocean",
  "blurb": "The average depth of the whole ocean is about 3,688 m. Most of the seafloor is here, far below where light reaches.",
  "facts": [
   "The ocean covers about 71% of Earth's surface.",
   "More than 75% of the seafloor has still not been mapped in high detail.",
   "The ocean holds about 97% of all the water on Earth.",
   "If Earth were smoothed flat, the ocean would cover it all to a depth of about 2.7 km."
  ]
 },
 {
  "id": "titanic",
  "dir": "down",
  "v": 3800,
  "name": "The Titanic",
  "kind": "Wreck",
  "danger": 0,
  "wiki": "Wreck_of_the_Titanic",
  "blurb": "The Titanic sank on 15 April 1912. Its wreck lies about 3,800 m down in the North Atlantic, split into two main pieces.",
  "facts": [
   "About 1,500 people died; roughly 700 survived.",
   "The wreck was found on 1 September 1985 by Robert Ballard and Jean-Louis Michel.",
   "The bow and stern lie about 600 m apart, with a debris field between them.",
   "Iron-eating bacteria are slowly turning the ship into 'rusticles'; parts may collapse within decades."
  ]
 },
 {
  "id": "seapig",
  "dir": "down",
  "v": 4200,
  "name": "Sea pig",
  "kind": "Creature",
  "danger": 0,
  "range": "1,000–6,000 m",
  "wiki": "Scotoplanes",
  "blurb": "A sea cucumber that walks across the abyssal mud on legs pumped up with water.",
  "facts": [
   "Its 'legs' are tube feet inflated with seawater.",
   "It eats mud, picking out bits of organic matter that have sunk from above.",
   "Herds of hundreds can gather around a fresh food fall, like a whale carcass.",
   "Small crabs often ride on or under it for protection."
  ]
 },
 {
  "id": "nodules",
  "dir": "down",
  "v": 4500,
  "name": "Manganese nodules",
  "kind": "Seafloor",
  "danger": 0,
  "range": "4,000–6,000 m",
  "wiki": "Manganese_nodule",
  "blurb": "Potato-sized lumps of metal covering huge areas of the deep Pacific floor — the target of proposed deep-sea mining.",
  "facts": [
   "They grow only a few millimetres every million years.",
   "They contain manganese, nickel, cobalt and copper — metals used in batteries.",
   "A 2024 study reported that they may produce oxygen in total darkness, dubbed 'dark oxygen'. The finding is still debated.",
   "Mining them would disturb ecosystems that take thousands of years to recover."
  ]
 },
 {
  "id": "bismarck",
  "dir": "down",
  "v": 4791,
  "name": "The Bismarck",
  "kind": "Wreck",
  "danger": 0,
  "wiki": "German_battleship_Bismarck",
  "blurb": "Germany's largest battleship sank in May 1941 after a three-day chase by the Royal Navy. It lies 4,791 m down.",
  "facts": [
   "More than 2,000 men died; only about 114 survived.",
   "It was found in 1989 by Robert Ballard, the same explorer who found the Titanic.",
   "It landed on an underwater volcano and slid down its slope, triggering a landslide.",
   "Its hull is mostly intact, which fuelled a long debate over whether its crew scuttled it."
  ]
 },
 {
  "id": "abyssalplain",
  "dir": "down",
  "v": 5000,
  "name": "Abyssal plains",
  "kind": "Seafloor",
  "danger": 0,
  "range": "3,000–6,000 m",
  "wiki": "Abyssal_plain",
  "blurb": "Flat, silent plains of fine mud that cover more than half of Earth's surface — more area than all the continents combined.",
  "facts": [
   "They are among the flattest places on the planet.",
   "Sediment builds up only a few centimetres every thousand years.",
   "The mud is made largely of the microscopic shells of plankton.",
   "Water here is just above freezing, around 1–3 °C."
  ]
 },
 {
  "id": "roberts",
  "dir": "down",
  "v": 6865,
  "name": "USS Samuel B. Roberts",
  "kind": "Wreck",
  "danger": 0,
  "wiki": "USS_Samuel_B._Roberts_(DE-413)",
  "blurb": "The deepest shipwreck ever found, 6,865 m down in the Philippine Sea. It was located in 2022.",
  "facts": [
   "The small destroyer escort was sunk on 25 October 1944 in the Battle off Samar.",
   "It fought far larger Japanese warships and was called 'the destroyer escort that fought like a battleship'.",
   "89 of its 224 crew were killed.",
   "Explorer Victor Vescovo found it in his submersible Limiting Factor."
  ]
 },
 {
  "id": "snailfish",
  "dir": "down",
  "v": 8000,
  "name": "Mariana snailfish",
  "kind": "Creature",
  "danger": 0,
  "range": "6,000–8,000 m",
  "wiki": "Pseudoliparis_swirei",
  "blurb": "The deepest-living fish: a pale, soft, almost see-through fish that thrives where the pressure is 800 times that at the surface.",
  "facts": [
   "Its skull isn't fully closed, and much of its skeleton is flexible, helping it cope with the pressure.",
   "A chemical called TMAO helps stop pressure from crushing the proteins in its cells.",
   "In 2022 a juvenile snailfish was filmed at 8,336 m in the Izu–Ogasawara Trench — the deepest fish ever seen.",
   "Scientists think fish can't survive much below about 8,200–8,400 m."
  ]
 },
 {
  "id": "amphipod",
  "dir": "down",
  "v": 10000,
  "name": "Hadal amphipods",
  "kind": "Creature",
  "danger": 0,
  "range": "6,000–11,000 m",
  "wiki": "Hirondellea_gigas",
  "blurb": "Shrimp-like scavengers that swarm the bottom of the deepest trenches, including the Challenger Deep.",
  "facts": [
   "They make an enzyme that digests wood and plant debris sinking from far above.",
   "They coat themselves in an aluminium gel that may help protect against the pressure.",
   "Some caught in the Mariana Trench had industrial pollutants and microplastics in their bodies.",
   "Their guts contain chemicals banned in the 1970s — proof that pollution reaches everywhere."
  ]
 },
 {
  "id": "cameron",
  "dir": "down",
  "v": 10908,
  "name": "Deepsea Challenger",
  "kind": "Vehicle",
  "danger": 0,
  "wiki": "Deepsea_Challenger",
  "blurb": "In 2012 filmmaker James Cameron made the first solo dive to the Challenger Deep in this vertical, torpedo-shaped submersible.",
  "facts": [
   "It reached 10,908 m on 26 March 2012.",
   "It was 7.3 m long and dived upright to sink faster.",
   "He spent about three hours on the bottom.",
   "It was the first crewed dive to the Challenger Deep since 1960."
  ]
 },
 {
  "id": "trieste",
  "dir": "down",
  "v": 10916,
  "name": "Trieste bathyscaphe",
  "kind": "Vehicle",
  "danger": 0,
  "wiki": "Trieste_(bathyscaphe)",
  "blurb": "The first vessel to reach the Challenger Deep, carrying Jacques Piccard and Don Walsh on 23 January 1960.",
  "facts": [
   "The descent took almost five hours.",
   "A window cracked at around 9,000 m, and they kept going.",
   "They spent only about 20 minutes on the bottom, and the silt they stirred up blocked their view.",
   "Its float was filled with petrol, which is lighter than water and doesn't compress."
  ]
 },
 {
  "id": "challenger",
  "dir": "down",
  "v": 10935,
  "name": "Challenger Deep",
  "kind": "Place",
  "danger": 3,
  "wiki": "Challenger_Deep",
  "blurb": "The deepest known point in the ocean, about 10,935 m down in the Mariana Trench. If you dropped Everest in, its peak would still be two kilometres under water.",
  "facts": [
   "The pressure is over 1,000 times that at the surface — NOAA compares it to one person holding up 50 jumbo jets.",
   "The water is only 1–4 °C and completely dark.",
   "A plastic bag was spotted here in footage analysed in 2018 — the deepest known piece of plastic litter.",
   "Thanks to Victor Vescovo's repeated dives, more people have now been here than have walked on the Moon."
  ]
 },
 {
  "id": "kola",
  "dir": "down",
  "v": 12262,
  "name": "Kola Superdeep Borehole",
  "kind": "Human-made",
  "danger": 0,
  "wiki": "Kola_Superdeep_Borehole",
  "blurb": "The deepest hole humans have ever dug: 12,262 m into the Russian Arctic, only 23 cm wide. It never got through the crust.",
  "facts": [
   "Drilling ran from 1970 to 1989 and stopped when the rock reached 180 °C — far hotter than expected.",
   "Microscopic fossils of plankton were found 6 km down.",
   "The rock was so hot and pliable that it behaved more like plastic than stone.",
   "Online stories of a 'well to hell' recording of screams are a hoax."
  ]
 },
 {
  "id": "moho",
  "dir": "down",
  "v": 20000,
  "name": "The Moho",
  "kind": "Boundary",
  "danger": 0,
  "wiki": "Mohorovičić_discontinuity",
  "blurb": "The boundary where Earth's crust ends and the mantle begins. Under the ocean it lies only 5–10 km below the seafloor.",
  "facts": [
   "Croatian scientist Andrija Mohorovičić found it in 1909 by noticing earthquake waves suddenly speed up.",
   "Project Mohole in 1961 tried to drill down to it through the seafloor. It never got there.",
   "No drill has ever reached the mantle.",
   "In 2023 a drill ship pulled up a 1,268 m core of mantle rock that had been pushed up near the Mid-Atlantic Ridge."
  ]
 },
 {
  "id": "ringwoodite",
  "dir": "down",
  "v": 520000,
  "name": "A hidden ocean in rock",
  "kind": "Layer",
  "danger": 0,
  "wiki": "Ringwoodite",
  "blurb": "410–660 km down, a mineral called ringwoodite can trap water inside its crystals — maybe as much as all the oceans put together.",
  "facts": [
   "It isn't a liquid ocean — the water is locked into the rock's crystal structure.",
   "In 2014 a diamond from Brazil was found carrying a speck of ringwoodite containing about 1.5% water.",
   "Estimates suggest this zone could hold as much water as all surface oceans, maybe several times more.",
   "This water may slowly cycle between the deep Earth and the surface over hundreds of millions of years."
  ]
 },
 {
  "id": "outercore",
  "dir": "down",
  "v": 2890000,
  "name": "The outer core",
  "kind": "Layer",
  "danger": 3,
  "wiki": "Earth's_outer_core",
  "blurb": "2,890 km down, the rock gives way to a churning ocean of molten iron and nickel, around 4,000–5,000 °C.",
  "facts": [
   "Its swirling currents generate Earth's magnetic field.",
   "That field shields us from the solar wind — and steers it into the auroras you passed on the way up.",
   "The field has flipped many times; the last full reversal was about 780,000 years ago.",
   "Earthquake shear waves can't pass through it, which is how we know it's liquid."
  ]
 },
 {
  "id": "innercore",
  "dir": "down",
  "v": 5150000,
  "name": "The inner core",
  "kind": "Layer",
  "danger": 3,
  "wiki": "Earth's_inner_core",
  "blurb": "A solid ball of iron about 2,440 km across, as hot as the surface of the Sun but squeezed solid by pressure.",
  "facts": [
   "It's about 5,200 °C.",
   "The pressure is over 3 million times that at the surface.",
   "Recent studies suggest its spin relative to the rest of the planet has slowed and may have reversed slightly.",
   "It was discovered in 1936 by Danish seismologist Inge Lehmann."
  ]
 },
 {
  "id": "center",
  "dir": "down",
  "v": 6371000,
  "name": "The centre of the Earth",
  "kind": "Place",
  "danger": 3,
  "wiki": "Structure_of_Earth",
  "blurb": "6,371 km below sea level. The end of the line. Go any further and you're coming up the other side.",
  "facts": [
   "At the very centre you would be weightless — the planet pulls equally from every direction.",
   "Falling through a tunnel from one side of Earth to the other would take about 38 minutes.",
   "The deepest any human has physically gone underground is about 4 km, in a South African gold mine — less than 0.1% of the way here.",
   "Almost everything we know about this place comes from studying earthquake waves."
  ]
 },
 {
  "id": "sherman",
  "dir": "up",
  "v": 84,
  "name": "General Sherman Tree",
  "kind": "Plant",
  "danger": 0,
  "wiki": "General_Sherman_Tree",
  "blurb": "The largest single-stem tree on Earth: a giant sequoia in California holding roughly 1,487 cubic metres of wood.",
  "facts": [
   "It stands 83.8 m tall with a trunk 7.7 m across at the base.",
   "Its estimated age is 2,300–2,700 years, old enough to predate the Roman Empire.",
   "In 2006 a single branch broke off: over 2 m thick and 30 m long, bigger than most whole trees.",
   "It is not the tallest tree, the widest or the oldest, but by volume nothing living beats it."
  ]
 },
 {
  "id": "liberty",
  "dir": "up",
  "v": 93,
  "name": "Statue of Liberty",
  "kind": "Human-made",
  "danger": 0,
  "wiki": "Statue_of_Liberty",
  "blurb": "From the ground to the tip of the torch, Liberty reaches 93 m over New York Harbor; the figure alone is 46 m.",
  "facts": [
   "The copper skin is only about 2.4 mm thick, roughly the thickness of two coins.",
   "Its internal iron framework was engineered by Gustave Eiffel, who built the Paris tower three years later.",
   "It was a gift from the people of France and was dedicated on 28 October 1886.",
   "The copper was once shiny brown; decades of weathering turned it the green of patina."
  ]
 },
 {
  "id": "eiffel",
  "dir": "up",
  "v": 330,
  "name": "Eiffel Tower",
  "kind": "Human-made",
  "danger": 0,
  "wiki": "Eiffel_Tower",
  "blurb": "Paris's iron lattice tower reaches 330 m to the tips of its antennas, and it sways and stretches with the weather.",
  "facts": [
   "Built for the 1889 World's Fair, it was meant to be dismantled after twenty years.",
   "It is made of about 7,300 tonnes of puddled iron held together by some 2.5 million rivets.",
   "Heat expansion can make it grow around 15 cm taller on a hot summer day.",
   "It was the tallest human-made structure in the world until New York's Chrysler Building in 1930."
  ]
 },
 {
  "id": "skytree",
  "dir": "up",
  "v": 634,
  "name": "Tokyo Skytree",
  "kind": "Human-made",
  "danger": 0,
  "wiki": "Tokyo_Skytree",
  "blurb": "At 634 m, the tallest tower in the world: a broadcast mast over Tokyo with observation decks at 350 m and 450 m.",
  "facts": [
   "The height 634 was chosen as a pun: 6–3-4 reads mu-sa-shi, the old name of the region.",
   "A reinforced concrete core, borrowed from the shinbashira pillar of pagodas, moves out of step with the steel frame in an earthquake.",
   "Its damping system is designed to absorb about half the energy of a quake.",
   "It reached full height in March 2011 and opened to the public in May 2012."
  ]
 },
 {
  "id": "bennevis",
  "dir": "up",
  "v": 1345,
  "name": "Ben Nevis",
  "kind": "Place",
  "danger": 2,
  "wiki": "Ben_Nevis",
  "blurb": "The highest point in the British Isles, a collapsed volcano whose summit spends most of the winter inside cloud.",
  "facts": [
   "The mountain is the eroded remnant of a Devonian volcano that imploded about 350 million years ago.",
   "A manned weather observatory stood on the summit from 1883 to 1904.",
   "Its records showed fog on the summit almost 80% of the time from November to January.",
   "Work at that observatory inspired C. T. R. Wilson to invent the cloud chamber, which later revealed subatomic particles."
  ]
 },
 {
  "id": "machu",
  "dir": "up",
  "v": 2430,
  "name": "Machu Picchu",
  "kind": "Place",
  "danger": 0,
  "wiki": "Machu_Picchu",
  "blurb": "The Inca citadel sits on a ridge 2,430 m above sea level — that is the site's elevation, not the height of its walls.",
  "facts": [
   "It was built around 1450, most likely as an estate for the emperor Pachacuti.",
   "Its finest walls are dry-stone: blocks cut so precisely that no mortar was needed.",
   "It was abandoned roughly a century later, around the time of the Spanish conquest.",
   "Hiram Bingham brought it to international attention in 1911; UNESCO listed it in 1983."
  ]
 },
 {
  "id": "bristlecone",
  "dir": "up",
  "v": 3000,
  "name": "Great Basin bristlecone pine",
  "kind": "Plant",
  "danger": 0,
  "range": "Grows 3,000–3,400 m in California's White Mountains",
  "wiki": "Pinus_longaeva",
  "blurb": "Gnarled pines clinging to dry limestone ridges near the treeline, and the longest-lived single organisms known.",
  "facts": [
   "The tree named Methuselah has been ring-counted at 4,858 years old.",
   "In the Ancient Bristlecone Pine Forest they grow between about 3,000 and 3,400 m above sea level.",
   "They rarely exceed 15 m in height, trading growth for endurance in thin, cold, nearly rainless air.",
   "They often dominate high dolomite soils where almost nothing else can root."
  ]
 },
 {
  "id": "potala",
  "dir": "up",
  "v": 3700,
  "name": "Potala Palace",
  "kind": "Human-made",
  "danger": 1,
  "wiki": "Potala_Palace",
  "blurb": "The former winter palace of the Dalai Lamas stands on a hill in Lhasa at about 3,700 m — the site's elevation, not its wall height.",
  "facts": [
   "Construction of the present palace began in 1645 under the 5th Dalai Lama.",
   "Thirteen storeys hold more than 1,000 rooms and some 200,000 statues.",
   "Its sloping stone walls average 3 m thick, with molten copper poured into the foundations against earthquakes.",
   "The building itself rises 119 m above the hill and over 300 m above the valley floor."
  ]
 },
 {
  "id": "fuji",
  "dir": "up",
  "v": 3776,
  "name": "Mount Fuji",
  "kind": "Place",
  "danger": 1,
  "wiki": "Mount_Fuji",
  "blurb": "Japan's highest peak and an active stratovolcano whose near-perfect cone is visible from Tokyo, about 100 km away.",
  "facts": [
   "Its last eruption, the Hōei event, began in December 1707 and dusted Edo with ash.",
   "The official climbing season lasts only from July to early September.",
   "It was inscribed by UNESCO in 2013 as a cultural, not natural, World Heritage site.",
   "The summit crater is about 780 m across and 240 m deep."
  ]
 },
 {
  "id": "puya",
  "dir": "up",
  "v": 4000,
  "name": "Puya raimondii",
  "kind": "Plant",
  "danger": 0,
  "range": "Grows 2,400–4,200 m in the Andes",
  "wiki": "Puya_raimondii",
  "blurb": "The Queen of the Andes: the world's largest bromeliad, which waits decades to flower once, then dies.",
  "facts": [
   "In bloom the whole plant can reach 15 m, topped by a flower spike several metres tall.",
   "It grows mostly between 2,400 and 4,200 m in Peru and Bolivia, with a few plants as high as 4,460 m.",
   "Its life cycle in the wild lasts 40 to 100 years and ends with a single flowering.",
   "One plant may release around 12 million winged seeds, each just 3–5 mm across."
  ]
 },
 {
  "id": "maunakea",
  "dir": "up",
  "v": 4207,
  "name": "Mauna Kea",
  "kind": "Place",
  "danger": 2,
  "wiki": "Mauna_Kea",
  "blurb": "Hawai‘i's dormant white mountain rises 4,207 m above the sea — and about 9,300 m above its own base on the ocean floor.",
  "facts": [
   "Measured from its seafloor base, it is taller than Mount Everest is above sea level.",
   "Thirteen telescopes funded by eleven countries sit on the summit.",
   "The name is short for Mauna a Wākea, ‘white mountain’, for its winter snow.",
   "It last erupted somewhere between 6,000 and 4,000 years ago and is considered dormant, not extinct."
  ]
 },
 {
  "id": "montblanc",
  "dir": "up",
  "v": 4806,
  "name": "Mont Blanc",
  "kind": "Place",
  "danger": 3,
  "wiki": "Mont_Blanc",
  "blurb": "The roof of the Alps and of western Europe, capped by an ice dome that is re-measured every couple of years.",
  "facts": [
   "Its official height shifts by metres because the summit is snow and ice, not rock.",
   "The rock beneath the summit ice is roughly 4,792 m high.",
   "The first ascent was made on 8 August 1786 by Jacques Balmat and Michel-Gabriel Paccard.",
   "The Mont Blanc Tunnel, 11.6 km long, runs under the massif between France and Italy."
  ]
 },
 {
  "id": "alma",
  "dir": "up",
  "v": 5050,
  "name": "ALMA observatory",
  "kind": "Human-made",
  "danger": 2,
  "wiki": "Atacama_Large_Millimeter_Array",
  "blurb": "Sixty-six radio dishes on the Chajnantor plateau in Chile, about 5,000 m up, where the air is dry enough to see millimetre waves.",
  "facts": [
   "At roughly US$1.4 billion it is the most expensive ground-based telescope in operation.",
   "The antennas are driven around the plateau by giant transporters and can be spread up to 16 km apart.",
   "Staff live and work at a support facility near 2,900 m because the array site is too thin-aired to sleep at.",
   "It began science observations in 2011 and has been fully operational since March 2013."
  ]
 },
 {
  "id": "rinconada",
  "dir": "up",
  "v": 5100,
  "name": "La Rinconada",
  "kind": "Place",
  "danger": 2,
  "wiki": "La_Rinconada,_Peru",
  "blurb": "A Peruvian gold-mining town beneath a glacier, and the highest sizeable permanent settlement in the world.",
  "facts": [
   "The town spreads from about 4,900 m to 5,100 m on the flank of Mount Ananea.",
   "The average annual temperature is 1.3 °C and nights freeze all year round.",
   "Under the cachorreo system miners work 30 unpaid days for the right to keep whatever ore they can carry on the 31st.",
   "Mercury used to refine the gold contaminates the drinking water and the glacier above."
  ]
 },
 {
  "id": "kilimanjaro",
  "dir": "up",
  "v": 5895,
  "name": "Mount Kilimanjaro",
  "kind": "Place",
  "danger": 2,
  "wiki": "Mount_Kilimanjaro",
  "blurb": "Africa's highest point, a dormant volcano rising alone from the Tanzanian plains to an icy summit called Uhuru Peak.",
  "facts": [
   "It is the tallest free-standing mountain on Earth, not part of any range.",
   "It has three volcanic cones: Kibo, Mawenzi and Shira.",
   "Hans Meyer and Ludwig Purtscheller made the first recorded ascent in 1889.",
   "Its summit ice has shrunk by more than 80% since it was first surveyed in 1912."
  ]
 },
 {
  "id": "sandwort",
  "dir": "up",
  "v": 6180,
  "name": "Eremogone bryophylla",
  "kind": "Plant",
  "danger": 0,
  "wiki": "Eremogone_bryophylla",
  "blurb": "A tiny Himalayan cushion plant recorded at 6,180 m — the highest-growing flowering plant known.",
  "facts": [
   "It belongs to the sandwort group in the carnation family, Caryophyllaceae.",
   "It grows in the Himalaya of China, Tibet, Nepal and India.",
   "It flowers more than 800 m higher than Everest Base Camp, which sits at about 5,360 m.",
   "Hugging the ground in a dense mat is what lets it survive wind, frost and fierce ultraviolet light."
  ]
 },
 {
  "id": "chimborazo",
  "dir": "up",
  "v": 6263,
  "name": "Chimborazo",
  "kind": "Place",
  "danger": 3,
  "wiki": "Chimborazo",
  "blurb": "Ecuador's highest volcano: far lower than Everest, yet its summit is the point on Earth's surface farthest from the planet's centre.",
  "facts": [
   "The equatorial bulge lifts it about 2 km farther from Earth's centre than Everest's summit.",
   "Peru's Huascarán is a very close second by the same measure.",
   "Alexander von Humboldt tried for the summit in 1802 and turned back near 5,900 m, a height record at the time.",
   "Edward Whymper reached the top on 4 January 1880, then climbed it again by another route because nobody believed him."
  ]
 },
 {
  "id": "chough",
  "dir": "up",
  "v": 6500,
  "name": "Alpine chough",
  "kind": "Creature",
  "danger": 0,
  "wiki": "Alpine_chough",
  "blurb": "A glossy black crow with a yellow bill that nests higher than any other bird and begs for scraps at Himalayan camps.",
  "facts": [
   "Nests have been found at 6,500 m, a record for any bird species.",
   "Choughs have been seen following climbers on Everest at 8,200 m.",
   "Their eggs are adapted to thin air, taking up oxygen more easily and losing less water.",
   "In the Himalaya they normally breed between 3,500 and 5,000 m."
  ]
 },
 {
  "id": "k2",
  "dir": "up",
  "v": 8611,
  "name": "K2",
  "kind": "Place",
  "danger": 3,
  "wiki": "K2",
  "blurb": "The second-highest mountain on Earth and far deadlier than the first — steep, storm-raked, and nicknamed the Savage Mountain.",
  "facts": [
   "It stands 8,611 m high on the China–Pakistan border in the Karakoram.",
   "Its blunt name comes from a 19th-century survey notation for Karakoram peaks: K1 through K5.",
   "Achille Compagnoni and Lino Lacedelli made the first ascent on 31 July 1954.",
   "It resisted a winter ascent until 16 January 2021, when a team of Nepali climbers reached the top together."
  ]
 },
 {
  "id": "piccard",
  "dir": "up",
  "v": 15781,
  "name": "Piccard's stratosphere flight",
  "kind": "Record",
  "danger": 3,
  "wiki": "Auguste_Piccard",
  "blurb": "On 27 May 1931 Auguste Piccard and Paul Kipfer rode a hydrogen balloon to 15,781 m, the first humans to reach the stratosphere.",
  "facts": [
   "They travelled in a pressurised aluminium sphere, the ancestor of every high-altitude cabin since.",
   "The flight started at Augsburg in Germany and ended on a glacier in Austria.",
   "Piccard later inverted the idea and built the bathyscaphe, diving to 3,150 m in 1953 with his son Jacques.",
   "Hergé modelled Professor Calculus in Tintin on him, only shorter, so he would fit in the panels."
  ]
 },
 {
  "id": "nacreous",
  "dir": "up",
  "v": 20000,
  "name": "Nacreous clouds",
  "kind": "Phenomenon",
  "danger": 1,
  "range": "Roughly 15–25 km up",
  "wiki": "Polar_stratospheric_cloud",
  "blurb": "Mother-of-pearl clouds that glow in polar twilight, lit from below by a sun that has already set for the ground.",
  "facts": [
   "They form only where the stratosphere drops below about −78 °C.",
   "Their height lets them catch sunlight well before dawn and long after dusk.",
   "Their particles host reactions that release active chlorine, helping tear open the ozone hole each spring.",
   "In the Antarctic, temperatures below −88 °C build clouds of pure water ice."
  ]
 },
 {
  "id": "u2",
  "dir": "up",
  "v": 21336,
  "name": "Lockheed U-2",
  "kind": "Vehicle",
  "danger": 2,
  "wiki": "Lockheed_U-2",
  "blurb": "A glider-winged spy plane that has cruised above 21,000 m since 1955, flown by pilots in full pressure suits.",
  "facts": [
   "Early models had to fly within a narrow band between stall and overspeed, known as the coffin corner.",
   "The cockpit is only partly pressurised, to the equivalent of 8,500 m, so the pilot wears a space suit.",
   "Gary Powers was shot down in one over the Soviet Union on 1 May 1960 and captured alive.",
   "It is still in front-line service more than seventy years after its first flight."
  ]
 },
 {
  "id": "helios",
  "dir": "up",
  "v": 29524,
  "name": "Helios Prototype",
  "kind": "Vehicle",
  "danger": 1,
  "wiki": "AeroVironment_Helios_Prototype",
  "blurb": "A solar-powered flying wing that climbed to 29,524 m in 2001 — the altitude record for sustained horizontal winged flight.",
  "facts": [
   "Its wingspan was 75 m, wider than a Boeing 747, yet it weighed about as much as a small car.",
   "Fourteen propellers ran on sunlight alone during the record flight of 13 August 2001.",
   "It steered by speeding up motors on one wing and slowing those on the other.",
   "It broke apart over the Pacific near Kauai on 26 June 2003 after turbulence deformed the wing."
  ]
 },
 {
  "id": "kittinger",
  "dir": "up",
  "v": 31300,
  "name": "Kittinger's jump",
  "kind": "Record",
  "danger": 3,
  "wiki": "Joseph_Kittinger",
  "blurb": "On 16 August 1960 Joseph Kittinger stepped from an open balloon gondola at 31,300 m and fell for four and a half minutes.",
  "facts": [
   "He fell 4 minutes 36 seconds, reaching about 988 km/h before opening his main parachute at 5,500 m.",
   "His right glove lost pressure on the way up and his hand swelled to twice its size; he jumped anyway.",
   "His altitude and speed records stood for 52 years, until Felix Baumgartner in 2012.",
   "Kittinger, aged 84, was the voice in Baumgartner's ear as capsule communicator for that jump."
  ]
 },
 {
  "id": "mig25",
  "dir": "up",
  "v": 37650,
  "name": "MiG-25 altitude record",
  "kind": "Record",
  "danger": 2,
  "wiki": "Mikoyan-Gurevich_MiG-25",
  "blurb": "On 31 August 1977 Aleksandr Fedotov zoom-climbed a modified MiG-25 to 37,650 m, still the height record for a jet under its own power.",
  "facts": [
   "The record was set by a ballistic zoom climb, far above the aircraft's normal ceiling of about 27 km.",
   "The MiG-25 was built from 80% nickel steel, not titanium, because welded titanium kept cracking.",
   "It could exceed Mach 3.2, but doing so wrecked the engines, so pilots were limited to Mach 2.83.",
   "In 1976 pilot Viktor Belenko defected with one to Japan, letting the West examine it in detail."
  ]
 },
 {
  "id": "bluejet",
  "dir": "up",
  "v": 50000,
  "name": "Blue jets",
  "kind": "Phenomenon",
  "danger": 1,
  "range": "Shoot from cloud tops to about 50 km",
  "wiki": "Upper-atmospheric_lightning",
  "blurb": "Narrow blue cones of lightning that spear upward out of thunderstorm tops and fade around 50 km, lasting a fraction of a second.",
  "facts": [
   "They climb at roughly 100–140 km per second and last only 200 to 300 milliseconds.",
   "They are brighter than red sprites but far rarer.",
   "The first recording came from a Space Shuttle video over Australia on 21 October 1989.",
   "Weaker versions, called blue starters, fizzle out by about 20 km."
  ]
 },
 {
  "id": "hunga",
  "dir": "up",
  "v": 57000,
  "name": "Hunga Tonga eruption plume",
  "kind": "Phenomenon",
  "danger": 3,
  "wiki": "2022_Hunga_Tonga–Hunga_Haʻapai_eruption_and_tsunami",
  "blurb": "On 15 January 2022 an undersea volcano in Tonga threw an ash column about 57 km high — the tallest plume ever recorded.",
  "facts": [
   "The column punched clear through the stratosphere and into the mesosphere.",
   "The blast was heard in Anchorage, Alaska, some 9,300 km away, and in Yukon, Canada.",
   "It injected water vapour equal to about 10% of the stratosphere's normal stock, which may linger for years.",
   "Estimates of its energy run from around 61 megatons of TNT upward — more than the largest nuclear test."
  ]
 },
 {
  "id": "sprite",
  "dir": "up",
  "v": 75000,
  "name": "Red sprites",
  "kind": "Phenomenon",
  "danger": 1,
  "range": "Flicker between 50 and 90 km",
  "wiki": "Sprite_(lightning)",
  "blurb": "Vast red jellyfish of light that flash above big thunderstorms for a few thousandths of a second, upside-down lightning.",
  "facts": [
   "They are usually triggered by rare positive lightning strikes from cloud to ground far below.",
   "Their red glow comes from nitrogen excited in the thin air of the upper mesosphere.",
   "High-speed cameras show them start as balls of ionisation near 80 km that race downward at a tenth of light speed.",
   "The first one was photographed by accident on 6 July 1989 by University of Minnesota researchers testing a camera."
  ]
 },
 {
  "id": "tiangong",
  "dir": "up",
  "v": 390000,
  "name": "Tiangong space station",
  "kind": "Human-made",
  "danger": 0,
  "range": "about 340–450 km",
  "wiki": "Tiangong_space_station",
  "blurb": "China's 'Heavenly Palace': a T-shaped station of three modules, crewed around the clock since 2021 and lapping Earth every 90 minutes or so.",
  "facts": [
   "Its core module, Tianhe, launched in April 2021, followed by the Wentian and Mengtian labs in 2022.",
   "With visiting spacecraft docked it weighs about 100 tonnes and moves at about 7.7 km/s.",
   "Its pressurised volume of 340 cubic metres is just over a third of the ISS's.",
   "A new species of bacterium, Niallia tiangongensis, was discovered aboard it in 2023."
  ]
 },
 {
  "id": "starlink",
  "dir": "up",
  "v": 550000,
  "name": "Starlink satellites",
  "kind": "Human-made",
  "danger": 1,
  "range": "roughly 340–570 km",
  "wiki": "Starlink",
  "blurb": "More than ten thousand flat-packed internet satellites, the largest fleet ever flown, criss-crossing the sky in orbital shells.",
  "facts": [
   "SpaceX began launching Starlink satellites in 2019, 60 at a time.",
   "By mid-2026 the network had more than 10,000 satellites in low Earth orbit.",
   "Starlink makes up roughly three quarters of all active manoeuvrable satellites around Earth.",
   "Astronomers have criticised the constellation for streaking across telescope images and crowding orbits."
  ]
 },
 {
  "id": "artemis2",
  "dir": "up",
  "v": 406771000,
  "name": "Artemis II: farthest humans",
  "kind": "Human",
  "danger": 0,
  "wiki": "Artemis_II",
  "blurb": "In April 2026 four astronauts swung around the far side of the Moon and reached 406,771 km from Earth, farther than any people before them.",
  "facts": [
   "The crew of Reid Wiseman, Victor Glover, Christina Koch and Jeremy Hansen flew from April 1 to 11, 2026.",
   "They beat the record of 400,171 km set by Apollo 13 in 1970, which had stood for 56 years.",
   "It was the first crewed flight beyond low Earth orbit since Apollo 17 in 1972.",
   "Their Orion capsule, named Integrity, followed a free-return path around the Moon much like Apollo 13's."
  ]
 },
 {
  "id": "venus",
  "dir": "up",
  "v": 38000000000,
  "name": "Venus",
  "kind": "World",
  "danger": 3,
  "range": "closest approach; up to about 261 million km",
  "wiki": "Venus",
  "blurb": "Our nearest planetary neighbour, shown here at its closest approach: a cloud-wrapped furnace hot enough to melt lead.",
  "facts": [
   "At its closest, Venus comes within about 38 million km of Earth, nearer than any other planet.",
   "Its surface is about 465 C with air pressure around 90 times Earth's, like being 900 m under the sea.",
   "Venus spins backwards, and its day (243 Earth days) is longer than its year (225 days).",
   "The Soviet Venera 7 made the first soft landing on another planet here in 1970."
  ]
 },
 {
  "id": "ceres",
  "dir": "up",
  "v": 240000000000,
  "name": "Ceres and the asteroid belt",
  "kind": "World",
  "danger": 1,
  "range": "closest approach, about 1.6 AU",
  "wiki": "Ceres_(dwarf_planet)",
  "blurb": "The largest body in the asteroid belt, a 940 km dwarf planet of rock, ice and salty mud, shown at its closest approach to Earth.",
  "facts": [
   "Giuseppe Piazzi discovered Ceres on 1 January 1801, and it was first hailed as a new planet.",
   "It is the only dwarf planet whose orbit lies inside Neptune's.",
   "NASA's Dawn probe orbited Ceres from 2015 and found bright salt deposits and a lone ice volcano, Ahuna Mons.",
   "Asteroids in the belt are so widely spread that spacecraft cross it without having to dodge anything."
  ]
 },
 {
  "id": "saturn",
  "dir": "up",
  "v": 1200000000000,
  "name": "Saturn",
  "kind": "World",
  "danger": 3,
  "range": "closest approach; up to about 1.66 billion km",
  "wiki": "Saturn",
  "blurb": "The ringed giant, shown at its closest approach of about 1.2 billion km. Its rings are wider than 250,000 km yet mostly only tens of metres thick.",
  "facts": [
   "Saturn is less dense than water: on average, a cubic metre of it would weigh less than a cubic metre of water.",
   "A six-sided jet stream, the hexagon, circles its north pole; each side is wider than Earth.",
   "Its moon Titan is bigger than the planet Mercury and has lakes of liquid methane.",
   "The Cassini probe orbited Saturn for 13 years before diving into it on 15 September 2017."
  ]
 },
 {
  "id": "uranus",
  "dir": "up",
  "v": 2600000000000,
  "name": "Uranus",
  "kind": "World",
  "danger": 3,
  "range": "closest approach, about 17.3 AU",
  "wiki": "Uranus",
  "blurb": "The sideways planet, shown at its closest approach: an ice giant tipped about 98 degrees, so it rolls around the Sun like a ball.",
  "facts": [
   "William Herschel discovered it in 1781, the first planet found with a telescope.",
   "A Uranian year lasts 84 Earth years, so each pole gets about 42 years of sunlight followed by 42 years of darkness.",
   "Its atmosphere has the coldest temperatures measured on any planet, down to about minus 224 C.",
   "Only one spacecraft has ever visited: Voyager 2, which flew past in January 1986."
  ]
 },
 {
  "id": "neptune",
  "dir": "up",
  "v": 4300000000000,
  "name": "Neptune",
  "kind": "World",
  "danger": 3,
  "range": "closest approach, about 28.8 AU",
  "wiki": "Neptune",
  "blurb": "The deep-blue outermost planet, found by mathematics before anyone saw it, where winds blow faster than anywhere else in the Solar System.",
  "facts": [
   "In 1846 Urbain Le Verrier predicted its position from wobbles in Uranus's orbit, and Johann Galle found it within a degree of the spot.",
   "Its winds reach about 2,100 km/h, the fastest measured on any planet.",
   "One Neptunian year lasts about 165 Earth years, so it completed its first orbit since discovery only in 2011.",
   "Its largest moon, Triton, orbits backwards and is probably a captured object from the Kuiper belt."
  ]
 },
 {
  "id": "pluto",
  "dir": "up",
  "v": 5300000000000,
  "name": "Pluto",
  "kind": "World",
  "danger": 2,
  "range": "about 35 AU in 2026, varies about 28–50 AU",
  "wiki": "Pluto",
  "blurb": "The famous dwarf planet, with a vast heart-shaped glacier of nitrogen ice, now more than 5 billion km away and still drifting outward.",
  "facts": [
   "Clyde Tombaugh discovered Pluto in 1930; it was reclassified as a dwarf planet in 2006.",
   "It is about 2,380 km across, smaller than Earth's Moon.",
   "Its moon Charon is about half Pluto's width, so the two circle a point in the space between them.",
   "Sunlight takes nearly five hours to reach Pluto, and one Pluto year lasts 248 Earth years."
  ]
 },
 {
  "id": "newhorizons",
  "dir": "up",
  "v": 9700000000000,
  "name": "New Horizons",
  "kind": "Human-made",
  "danger": 0,
  "range": "about 65 AU in 2026 and rising",
  "wiki": "New_Horizons",
  "blurb": "The piano-sized probe that gave us our first close look at Pluto, now coasting through the Kuiper belt about 65 times farther out than the Sun.",
  "facts": [
   "It launched on 19 January 2006 at about 16 km/s, the fastest launch of any spacecraft from Earth.",
   "On 14 July 2015 it flew 12,500 km above Pluto's surface.",
   "On 1 January 2019 it passed Arrokoth, the most distant object ever explored up close.",
   "It carries a small portion of the ashes of Clyde Tombaugh, who discovered Pluto."
  ]
 },
 {
  "id": "sedna",
  "dir": "up",
  "v": 12400000000000,
  "name": "Sedna",
  "kind": "World",
  "danger": 2,
  "range": "83 AU in 2026; orbit reaches 937 AU",
  "wiki": "Sedna_(dwarf_planet)",
  "blurb": "A red, icy world about 1,000 km wide on one of the longest orbits known: one lap of the Sun takes about 11,400 years.",
  "facts": [
   "Sedna was discovered in 2003 and is roughly 1,000 km across.",
   "Even at its closest to the Sun it stays 76 AU away, far beyond Neptune's reach.",
   "At its farthest it swings out to 937 AU, about 19 times farther than Pluto's farthest point.",
   "Its reddish surface is coated in tholins, organic compounds made when sunlight bakes methane ice."
  ]
 },
 {
  "id": "heliopause",
  "dir": "up",
  "v": 17900000000000,
  "name": "Heliopause",
  "kind": "Boundary",
  "danger": 0,
  "range": "about 120 AU",
  "wiki": "Heliosphere",
  "blurb": "Where the Sun's wind finally stalls against the gas between the stars: the edge of the Sun's bubble and the start of interstellar space.",
  "facts": [
   "The solar wind leaves the Sun at around 400 km/s and blows a vast bubble called the heliosphere.",
   "Voyager 1 crossed the heliopause in August 2012, about 121 AU from the Sun.",
   "Voyager 2 crossed on 5 November 2018 at 119.7 AU, confirming the boundary is real.",
   "The Sun's gravity still rules far beyond it, out through the Oort cloud."
  ]
 },
 {
  "id": "voyager2",
  "dir": "up",
  "v": 21500000000000,
  "name": "Voyager 2",
  "kind": "Human-made",
  "danger": 0,
  "range": "about 143 AU in 2026 and rising",
  "wiki": "Voyager_2",
  "blurb": "The only spacecraft ever to visit Uranus and Neptune, still sending faint signals home from interstellar space almost 50 years after launch.",
  "facts": [
   "It launched on 20 August 1977, 16 days before its twin Voyager 1.",
   "It flew past Jupiter (1979), Saturn (1981), Uranus (1986) and Neptune (1989).",
   "It was about 143 AU from Earth in February 2026, so its radio signals take around 20 hours to arrive.",
   "Only one dish on Earth, DSS 43 near Canberra, can command it, because its path heads far to the south."
  ]
 },
 {
  "id": "alphacen",
  "dir": "up",
  "v": 41100000000000000,
  "name": "Alpha Centauri A and B",
  "kind": "Star",
  "danger": 0,
  "wiki": "Alpha_Centauri",
  "blurb": "Two Sun-like stars 4.34 light-years away that blend into the third-brightest point in the night sky. Our nearest stellar twins.",
  "facts": [
   "The pair are the nearest stars visible to the naked eye, and together shine at magnitude minus 0.27.",
   "Alpha Centauri A has 1.1 times the Sun's mass; B is a bit smaller and cooler, at 0.9.",
   "They orbit each other every 79 years, closing to 11.2 AU and swinging out to 35.6 AU.",
   "Their small companion, Proxima Centauri, circles about 13,000 AU away."
  ]
 },
 {
  "id": "sirius",
  "dir": "up",
  "v": 81400000000000000,
  "name": "Sirius",
  "kind": "Star",
  "danger": 0,
  "wiki": "Sirius",
  "blurb": "The brightest star in the night sky, a blazing white sun 8.6 light-years away with a tiny, dense dead star in orbit around it.",
  "facts": [
   "At magnitude minus 1.46 it is almost twice as bright as Canopus, the next brightest star.",
   "Its companion, Sirius B, is a white dwarf about the size of Earth but with roughly the mass of the Sun.",
   "The two stars circle each other every 50 years.",
   "Sirius is slowly approaching us and will stay the brightest star in the sky for about 210,000 more years."
  ]
 },
 {
  "id": "vega",
  "dir": "up",
  "v": 237000000000000000,
  "name": "Vega",
  "kind": "Star",
  "danger": 0,
  "wiki": "Vega",
  "blurb": "A brilliant blue-white star 25 light-years away, spinning so fast it bulges at the middle. It was the pole star 14,000 years ago.",
  "facts": [
   "Vega was the first star other than the Sun to be photographed, in 1850.",
   "It spins at 236 km/s at its equator, flattening it into a squashed ball.",
   "Earth's wobbling axis made Vega the northern pole star around 12,000 BCE, and will again around the year 13,700.",
   "It was long the reference point for the astronomical brightness scale, defined as magnitude zero."
  ]
 },
 {
  "id": "trappist1",
  "dir": "up",
  "v": 385000000000000000,
  "name": "TRAPPIST-1",
  "kind": "Star",
  "danger": 0,
  "wiki": "TRAPPIST-1",
  "blurb": "A tiny, cool red star 40.7 light-years away with seven rocky Earth-sized planets packed closer than Mercury is to the Sun.",
  "facts": [
   "The star is only slightly larger than Jupiter and has about 9% of the Sun's mass.",
   "Its seven planets each orbit in 1.5 to 19 days.",
   "Up to four of them, d, e, f and g, lie where liquid water might exist.",
   "At about 7.6 billion years old, it is older than our Solar System."
  ]
 },
 {
  "id": "polaris",
  "dir": "up",
  "v": 4100000000000000000,
  "name": "Polaris",
  "kind": "Star",
  "danger": 0,
  "wiki": "Polaris",
  "blurb": "The North Star: a pulsing yellow supergiant about 430 light-years away, sitting less than a degree from the sky's north pole.",
  "facts": [
   "Because it barely moves across the sky, sailors have used it for centuries to find north and their latitude.",
   "It is not especially bright; dozens of stars outshine it.",
   "What looks like one star is really three: a supergiant with two smaller companions.",
   "It is the nearest Cepheid variable, a type of pulsing star used to measure distances across the universe."
  ]
 },
 {
  "id": "pleiades",
  "dir": "up",
  "v": 4200000000000000000,
  "name": "Pleiades",
  "kind": "Star cluster",
  "danger": 0,
  "wiki": "Pleiades",
  "blurb": "The Seven Sisters: a young family of hot blue stars 444 light-years away, one of the most famous sights in the night sky.",
  "facts": [
   "The cluster holds more than 1,000 stars, though only six or seven are easy to see without a telescope.",
   "Its stars formed within the last 100 million years, long after the dinosaurs appeared.",
   "The blue haze around them is an unrelated dust cloud the cluster happens to be passing through.",
   "In Japanese the cluster is called Subaru, and it appears in the car maker's logo."
  ]
 },
 {
  "id": "orionnebula",
  "dir": "up",
  "v": 12000000000000000000,
  "name": "Orion Nebula",
  "kind": "Nebula",
  "danger": 0,
  "wiki": "Orion_Nebula",
  "blurb": "A glowing stellar nursery 1,300 light-years away, visible to the naked eye as the fuzzy middle 'star' in Orion's sword.",
  "facts": [
   "It is the closest region of massive star formation to Earth, about 1,270 light-years away.",
   "The nebula is about 25 light-years across and holds about 2,000 times the Sun's mass.",
   "Hubble has photographed discs of dust around newborn stars inside it, the raw material of planets.",
   "Four hot young stars called the Trapezium light up the whole cloud."
  ]
 },
 {
  "id": "crab",
  "dir": "up",
  "v": 61500000000000000000,
  "name": "Crab Nebula",
  "kind": "Nebula",
  "danger": 3,
  "wiki": "Crab_Nebula",
  "blurb": "The shattered remains of a star seen exploding in 1054, still flying apart at 1,500 km/s around a city-sized spinning neutron star.",
  "facts": [
   "Chinese astronomers recorded the supernova as a 'guest star' in 1054.",
   "It was the first astronomical object matched to a historically recorded supernova.",
   "The cloud is about 11 light-years across and lies about 6,500 light-years away.",
   "At its heart is the Crab Pulsar, a neutron star 28 to 30 km wide spinning 30 times a second."
  ]
 },
 {
  "id": "etacarinae",
  "dir": "up",
  "v": 71000000000000000000,
  "name": "Eta Carinae",
  "kind": "Star",
  "danger": 3,
  "wiki": "Eta_Carinae",
  "blurb": "A monster star system 7,500 light-years away, shining over five million times brighter than the Sun and expected to explode as a supernova.",
  "facts": [
   "Its main star started with an estimated 150 to 250 times the Sun's mass and has shed at least 30 solar masses since.",
   "In the 'Great Eruption' it became the second-brightest star in the sky in March 1843, then faded from view.",
   "That outburst threw off the Homunculus Nebula, the twin clouds that now hide the star.",
   "It is the only star known to produce ultraviolet laser light."
  ]
 },
 {
  "id": "lmc",
  "dir": "up",
  "v": 1.54e+21,
  "name": "Large Magellanic Cloud",
  "kind": "Galaxy",
  "danger": 0,
  "wiki": "Large_Magellanic_Cloud",
  "blurb": "A satellite galaxy 163,000 light-years away that hangs like a detached piece of the Milky Way in the southern sky.",
  "facts": [
   "It is about 32,000 light-years across and has roughly a hundredth of the Milky Way's mass.",
   "It appears about 20 times wider than the full Moon to the naked eye from a dark site.",
   "Supernova 1987A exploded here, the nearest supernova seen since the invention of the telescope.",
   "It is predicted to collide and merge with the Milky Way in about 2.4 billion years."
  ]
 },
 {
  "id": "triangulum",
  "dir": "up",
  "v": 2.72e+22,
  "name": "Triangulum Galaxy",
  "kind": "Galaxy",
  "danger": 0,
  "wiki": "Triangulum_Galaxy",
  "blurb": "A loose spiral of about 40 billion stars, 2.9 million light-years away, and the third-largest galaxy in our Local Group.",
  "facts": [
   "It lies about 2.88 million light-years away and spans about 61,000 light-years.",
   "Under very dark skies some people can glimpse it without a telescope, among the most distant things the eye can see.",
   "It may be a satellite of the nearby Andromeda Galaxy.",
   "Its giant star-forming cloud NGC 604 is about 1,500 light-years across."
  ]
 },
 {
  "id": "whirlpool",
  "dir": "up",
  "v": 2.93e+23,
  "name": "Whirlpool Galaxy",
  "kind": "Galaxy",
  "danger": 0,
  "wiki": "Whirlpool_Galaxy",
  "blurb": "A textbook spiral 31 million light-years away, its arms stirred up by a smaller galaxy tugging at one end.",
  "facts": [
   "It was the first galaxy recognised as a spiral, sketched by Lord Rosse in 1845.",
   "It is about 77,000 light-years across.",
   "Its companion, NGC 5195, is passing behind it and helps shape the sharp spiral arms.",
   "The pair can be picked out with binoculars under dark skies."
  ]
 },
 {
  "id": "m87",
  "dir": "up",
  "v": 5.01e+23,
  "name": "Messier 87",
  "kind": "Galaxy",
  "danger": 3,
  "wiki": "Messier_87",
  "blurb": "A giant ball of trillions of stars 53 million light-years away, home to the first black hole ever photographed.",
  "facts": [
   "In April 2019 the Event Horizon Telescope released the first image of a black hole, the one at M87's centre.",
   "That black hole weighs about 6.5 billion times the mass of the Sun.",
   "M87 has about 15,000 globular star clusters; the Milky Way has 150 to 200.",
   "A jet of plasma at least 4,900 light-years long shoots from its core at nearly the speed of light."
  ]
 },
 {
  "id": "stephan",
  "dir": "up",
  "v": 2.8e+24,
  "name": "Stephan's Quintet",
  "kind": "Galaxy",
  "danger": 0,
  "range": "about 210–340 million ly",
  "wiki": "Stephan's_Quintet",
  "blurb": "Five galaxies in a tight huddle, four of them locked in a slow-motion collision about 290 million light-years away.",
  "facts": [
   "Édouard Stephan discovered the group in 1877; it was the first compact galaxy group ever found.",
   "One of the five, NGC 7320, is an impostor in the foreground, only about 40 million light-years away.",
   "One galaxy is plunging through the group at several million kilometres per hour, driving a shock wave through its gas.",
   "It was among the first images released by the James Webb Space Telescope in July 2022."
  ]
 },
 {
  "id": "3c273",
  "dir": "up",
  "v": 2.08e+25,
  "name": "3C 273",
  "kind": "Black hole",
  "danger": 3,
  "wiki": "3C_273",
  "blurb": "The first quasar ever identified: a feeding black hole so bright it can be seen in a backyard telescope from over 2 billion light-years away.",
  "facts": [
   "Its light has travelled about 2 billion years; the expansion of space puts it about 2.2 billion light-years away today.",
   "In 1963 Maarten Schmidt measured its redshift and realised this 'star' was incredibly far away.",
   "It is the brightest quasar in our sky, outshining its entire host galaxy.",
   "The black hole powering it holds about 900 million times the Sun's mass."
  ]
 },
 {
  "id": "ton618",
  "dir": "up",
  "v": 1.73e+26,
  "name": "TON 618",
  "kind": "Black hole",
  "danger": 3,
  "wiki": "TON_618",
  "blurb": "A blazing quasar powered by one of the most massive black holes known, tens of billions of times heavier than the Sun.",
  "facts": [
   "Its black hole is estimated at about 40 billion solar masses; older estimates said 66 billion.",
   "Its event horizon alone would be roughly 1,600 AU wide, about 40 times Pluto's distance from the Sun.",
   "Its light set out about 10.8 billion years ago; space has since stretched so it now lies about 18 billion light-years away.",
   "It was first catalogued in 1957 as a faint blue star in a survey from Tonantzintla, Mexico."
  ]
 },
 {
  "id": "gnz11",
  "dir": "up",
  "v": 3.01e+26,
  "name": "GN-z11",
  "kind": "Galaxy",
  "danger": 0,
  "wiki": "GN-z11",
  "blurb": "A young galaxy seen as it was just 400 million years after the Big Bang, hosting the earliest black hole yet found.",
  "facts": [
   "Hubble discovered it in 2015; it was the most distant galaxy known until 2022.",
   "We see it as it was about 13.4 billion years ago, but it is now about 32 billion light-years away because space has expanded.",
   "In 2024 astronomers found a black hole of about 1.6 million solar masses at its core, the earliest known.",
   "Webb measured its redshift precisely in 2023: z = 10.6."
  ]
 },
 {
  "id": "jadesz14",
  "dir": "up",
  "v": 3.19e+26,
  "name": "JADES-GS-z14-0",
  "kind": "Galaxy",
  "danger": 0,
  "wiki": "JADES-GS-z14-0",
  "blurb": "One of the most distant galaxies ever seen, shining just 300 million years after the Big Bang, when the universe was 2% of its age.",
  "facts": [
   "The James Webb Space Telescope found it in 2024 in the constellation Fornax.",
   "Its redshift of about 14.2 means its light has travelled about 13.5 billion years.",
   "Space has expanded so much that it now lies roughly 34 billion light-years away (comoving distance).",
   "It was surprisingly bright and large for so early a galaxy, puzzling astronomers."
  ]
 },
 {
  "id": "cmb",
  "dir": "up",
  "v": 4.28e+26,
  "name": "Cosmic microwave background",
  "kind": "Boundary",
  "danger": 0,
  "wiki": "Cosmic_microwave_background",
  "blurb": "The farthest light there is: the afterglow of the Big Bang, released 380,000 years after the beginning. Beyond it, the young universe was opaque.",
  "facts": [
   "The glow was released when the universe cooled enough for atoms to form, making space transparent.",
   "The matter that gave off this light is now about 45 billion light-years away, though the light travelled 13.8 billion years.",
   "It has cooled to 2.725 degrees above absolute zero and is almost perfectly even, varying by about 1 part in 100,000.",
   "Arno Penzias and Robert Wilson found it by accident in 1964–65, first suspecting pigeon droppings in their antenna."
  ]
 },
 {
  "id": "phyto",
  "dir": "down",
  "v": 0.5,
  "name": "Phytoplankton",
  "kind": "Plant",
  "danger": 0,
  "range": "Sunlit top ~200 m of every ocean",
  "wiki": "Phytoplankton",
  "blurb": "Drifting specks of plant-like life, too small to see alone, that turn sunlight into food for almost everything else in the sea.",
  "facts": [
   "Phytoplankton carry out roughly half of all photosynthesis on Earth and release about half of the oxygen we breathe.",
   "Diatoms, a major group, build their cell walls from silica, the same material as glass.",
   "Blooms can grow so large that satellites photograph them as swirls of green and turquoise.",
   "They form the base of the ocean food web: krill eat them, and blue whales eat the krill."
  ]
 },
 {
  "id": "sargassum",
  "dir": "down",
  "v": 1,
  "name": "Sargassum",
  "kind": "Plant",
  "danger": 0,
  "range": "Floating at the surface, tropical Atlantic",
  "wiki": "Sargassum",
  "blurb": "A golden-brown seaweed that never touches the seabed, floating on tiny gas-filled bladders in rafts that can stretch for kilometres.",
  "facts": [
   "The Sargasso Sea is named after it and is the only sea defined by ocean currents rather than coastlines.",
   "Each frond is kept afloat by small berry-like gas bladders called pneumatocysts.",
   "In 2018 satellites tracked a belt of sargassum over 20 million tonnes, stretching about 8,850 km from West Africa to the Gulf of Mexico.",
   "Baby sea turtles, crabs and fish shelter in the floating mats, and European and American eels travel there to spawn."
  ]
 },
 {
  "id": "mangrove",
  "dir": "down",
  "v": 1.5,
  "name": "Mangrove forest",
  "kind": "Plant",
  "danger": 0,
  "range": "Intertidal, tropical and subtropical coasts",
  "wiki": "Mangrove",
  "blurb": "Trees that stand in salt water on stilt-like roots, holding coastlines together and sheltering young fish among their tangled legs.",
  "facts": [
   "Mangroves are among very few trees that can grow in salt water, filtering salt at their roots or pushing it out through their leaves.",
   "Some species send up snorkel-like roots called pneumatophores to breathe air when the mud is flooded.",
   "The Sundarbans in India and Bangladesh is the largest mangrove forest on Earth, covering about 10,000 square kilometres.",
   "Many mangrove seeds sprout while still hanging on the parent tree, then drop and float away ready to root."
  ]
 },
 {
  "id": "seaotter",
  "dir": "down",
  "v": 2,
  "name": "Sea otter",
  "kind": "Creature",
  "danger": 0,
  "range": "Surface to about 100 m, North Pacific coasts",
  "wiki": "Sea_otter",
  "blurb": "A furry diver that floats on its back, cracking shellfish on a rock balanced on its chest.",
  "facts": [
   "Sea otters have the densest fur of any animal, up to about 150,000 hairs per square centimetre.",
   "Unlike whales and seals they have no blubber, so that trapped air in their fur is what keeps them warm.",
   "They are among the few mammals that use tools, smashing clams and urchins open with stones.",
   "By eating sea urchins they protect kelp forests, which urchins would otherwise graze bare."
  ]
 },
 {
  "id": "manatee",
  "dir": "down",
  "v": 3,
  "name": "West Indian manatee",
  "kind": "Creature",
  "danger": 0,
  "range": "0–6 m, warm coasts, rivers and springs",
  "wiki": "West_Indian_manatee",
  "blurb": "A slow, gentle 'sea cow' that grazes seagrass in warm shallows and surfaces every few minutes to breathe.",
  "facts": [
   "Adults are typically about 3 m long and weigh 400 to 550 kg.",
   "Their closest living relatives on land are elephants.",
   "Worn teeth move forward and fall out while new ones grow in at the back, all through their lives.",
   "Collisions with boats are one of the biggest threats; many manatees carry propeller scars used to identify them."
  ]
 },
 {
  "id": "clownfish",
  "dir": "down",
  "v": 5,
  "name": "Clownfish",
  "kind": "Creature",
  "danger": 0,
  "range": "1–15 m, Indo-Pacific reefs",
  "wiki": "Ocellaris_clownfish",
  "blurb": "Bright orange fish that live safely among the stinging tentacles of sea anemones, protected by a special mucus coat.",
  "facts": [
   "Every clownfish is born male; the largest fish in a group becomes the breeding female.",
   "If the female dies, the biggest male changes sex and takes her place.",
   "A layer of mucus on their skin stops the anemone's stinging cells from firing.",
   "The 2003 film Finding Nemo made the ocellaris clownfish one of the most recognised fish on Earth."
  ]
 },
 {
  "id": "seahorse",
  "dir": "down",
  "v": 8,
  "name": "Seahorse",
  "kind": "Creature",
  "danger": 0,
  "range": "Shallow seagrass, reefs and mangroves",
  "wiki": "Seahorse",
  "blurb": "A fish that swims upright, grips seagrass with its tail, and whose fathers, not mothers, give birth.",
  "facts": [
   "The female lays her eggs in a pouch on the male's belly, and he carries them until they hatch.",
   "A single birth can release hundreds of tiny young, up to around 1,000 in some species.",
   "The dwarf seahorse is among the slowest fish, moving at about 1.5 metres per hour.",
   "Each eye can move independently, so a seahorse can look forward and backward at the same time."
  ]
 },
 {
  "id": "greenturtle",
  "dir": "down",
  "v": 10,
  "name": "Green sea turtle",
  "kind": "Creature",
  "danger": 0,
  "range": "Surface to about 40 m, tropical seas",
  "wiki": "Green_sea_turtle",
  "blurb": "A large sea turtle that grazes seagrass meadows like an underwater cow and crosses oceans to nest on the beach where it hatched.",
  "facts": [
   "It is named for the greenish colour of its body fat, not its shell.",
   "Adults are mostly vegetarian, eating seagrass and algae.",
   "The temperature of the sand decides the sex of the hatchlings: warmer nests produce more females.",
   "Some swim over 2,000 km between feeding grounds off Brazil and nesting beaches on Ascension Island."
  ]
 },
 {
  "id": "arizona",
  "dir": "down",
  "v": 12,
  "name": "USS Arizona",
  "kind": "Wreck",
  "danger": 0,
  "range": "About 12 m, Pearl Harbor, Hawaii",
  "wiki": "USS_Arizona",
  "blurb": "A battleship sunk in the attack on Pearl Harbor on 7 December 1941, still resting where it fell beneath a white memorial.",
  "facts": [
   "1,177 of her crew were killed, nearly half of all American deaths in the attack.",
   "Most of those who died are still inside the hull, which is treated as a war grave.",
   "Small drops of fuel oil still rise to the surface, known to visitors as 'black tears'.",
   "The USS Arizona Memorial, which spans the wreck without touching it, opened in 1962."
  ]
 },
 {
  "id": "posidonia",
  "dir": "down",
  "v": 13,
  "name": "Posidonia seagrass",
  "kind": "Plant",
  "danger": 0,
  "range": "1–40 m, Mediterranean Sea",
  "wiki": "Posidonia_oceanica",
  "blurb": "Neptune grass: a flowering plant, not a seaweed, that carpets the Mediterranean seabed in slow-growing meadows.",
  "facts": [
   "It grows only in the Mediterranean and is found nowhere else in the world.",
   "One clone near Ibiza and Formentera stretches about 8 km and may be up to 100,000 years old.",
   "In very clear water its meadows grow down to about 40 m deep.",
   "Its fibres roll into brown balls called Neptune balls, which wash up on Mediterranean beaches."
  ]
 },
 {
  "id": "seadragon",
  "dir": "down",
  "v": 14,
  "name": "Leafy seadragon",
  "kind": "Creature",
  "danger": 0,
  "range": "4–50 m, southern Australian coasts",
  "wiki": "Leafy_seadragon",
  "blurb": "A relative of the seahorse draped in leaf-shaped frills, drifting unseen among kelp and seagrass.",
  "facts": [
   "It lives only off the southern and western coasts of Australia.",
   "The leafy flaps are purely camouflage; it swims with nearly see-through fins on its neck and back.",
   "As with seahorses, the male carries the eggs, up to about 250 of them stuck to the underside of his tail.",
   "It is the official marine emblem of the state of South Australia."
  ]
 },
 {
  "id": "christabyss",
  "dir": "down",
  "v": 17,
  "name": "Christ of the Abyss",
  "kind": "Human-made",
  "danger": 0,
  "range": "17 m, San Fruttuoso, Italy",
  "wiki": "Christ_of_the_Abyss",
  "blurb": "A bronze statue of Christ with arms raised toward the surface, standing on the seabed off the Italian Riviera since 1954.",
  "facts": [
   "The 2.5 m statue was placed at 17 m in the bay of San Fruttuoso, near Portofino, in 1954.",
   "Sculptor Guido Galletti made it partly in memory of Dario Gonzatti, an Italian diving pioneer who died in 1947.",
   "Casts of the same statue stand underwater off Grenada and Key Largo, Florida.",
   "Divers traditionally lay wreaths at its base to remember those lost at sea."
  ]
 },
 {
  "id": "aquarius",
  "dir": "down",
  "v": 19,
  "name": "Aquarius Reef Base",
  "kind": "Human-made",
  "danger": 0,
  "range": "19 m, off Key Largo, Florida",
  "wiki": "Aquarius_Reef_Base",
  "blurb": "The world's only working undersea laboratory, where scientists live for days on the seabed beside a coral reef.",
  "facts": [
   "It sits on the sea floor 19 m down, about 8.7 km off Key Largo in the Florida Keys.",
   "Crews called aquanauts live inside at seabed pressure, so they can dive for hours each day without returning to the surface.",
   "NASA has used it since 2001 for NEEMO missions, training astronauts for life in space.",
   "In 2014 Fabien Cousteau, grandson of Jacques Cousteau, lived aboard for 31 days."
  ]
 },
 {
  "id": "kelp",
  "dir": "down",
  "v": 22,
  "name": "Giant kelp forest",
  "kind": "Plant",
  "danger": 0,
  "range": "2–40 m, cool coastal waters",
  "wiki": "Kelp_forest",
  "blurb": "Swaying underwater forests of brown algae that rise from the seabed to the surface, full of fish, otters and seals.",
  "facts": [
   "Giant kelp is one of the fastest-growing organisms on Earth, adding up to about 60 cm in a single day.",
   "A single giant kelp can reach about 45 m long, held upright by gas-filled floats.",
   "Kelp is a brown alga, not a true plant: it has no roots, just a holdfast that grips rock.",
   "Kelp forests need cold, nutrient-rich water and fade when the sea warms."
  ]
 },
 {
  "id": "yongala",
  "dir": "down",
  "v": 28,
  "name": "SS Yongala",
  "kind": "Wreck",
  "danger": 0,
  "range": "14–28 m, off Queensland, Australia",
  "wiki": "SS_Yongala",
  "blurb": "A passenger steamer lost with everyone aboard in a 1911 cyclone, now one of the world's great wreck dives.",
  "facts": [
   "She sank on 23 March 1911 off Queensland, killing all 122 passengers and crew.",
   "She had no wireless radio, so she could not be warned that a cyclone was coming.",
   "The wreck was not found until 1958, 47 years after she vanished.",
   "Today the 109 m hull is covered in coral and visited by giant groupers, turtles, rays and sea snakes."
  ]
 },
 {
  "id": "lionfish",
  "dir": "down",
  "v": 35,
  "name": "Red lionfish",
  "kind": "Creature",
  "danger": 2,
  "range": "1–300 m, reefs",
  "wiki": "Red_lionfish",
  "blurb": "A showy striped fish with fans of venomous spines, native to the Indo-Pacific and now invading the Atlantic.",
  "facts": [
   "A sting from its spines is extremely painful but very rarely deadly to people.",
   "Probably released from home aquariums, lionfish spread along the US east coast and across the Caribbean from the 1980s onward.",
   "A single female can release around two million eggs a year.",
   "Divers have been encouraged to catch them, and lionfish is now served in restaurants to help control them."
  ]
 },
 {
  "id": "mantaray",
  "dir": "down",
  "v": 45,
  "name": "Manta ray",
  "kind": "Creature",
  "danger": 0,
  "range": "Surface to over 1,000 m, warm seas",
  "wiki": "Manta_ray",
  "blurb": "A giant, gentle ray that glides like a bird and filters plankton from the water through its wide mouth.",
  "facts": [
   "The giant oceanic manta can measure up to about 7 m from wingtip to wingtip.",
   "Mantas have one of the largest brains relative to body size of any fish.",
   "They visit 'cleaning stations' on reefs, where small fish pick parasites off their skin.",
   "Tagged giant mantas have dived beyond 1,000 m, although they usually feed near the surface."
  ]
 },
 {
  "id": "gpoctopus",
  "dir": "down",
  "v": 65,
  "name": "Giant Pacific octopus",
  "kind": "Creature",
  "danger": 0,
  "range": "Intertidal to deep shelf, North Pacific",
  "wiki": "Giant_Pacific_octopus",
  "blurb": "The largest octopus in the world, with arms spanning several metres and a mind clever enough to open jars.",
  "facts": [
   "Adults commonly weigh around 15 kg with an arm span of about 4 m; the largest recorded weighed 71 kg.",
   "Its eight arms carry roughly 2,000 suckers, each able to taste what it touches.",
   "It lives only 3 to 5 years, and a mother guards her eggs for about six months without eating, then dies.",
   "In aquarium studies, they have learned to tell individual people apart."
  ]
 },
 {
  "id": "whaleshark",
  "dir": "down",
  "v": 70,
  "name": "Whale shark",
  "kind": "Creature",
  "danger": 0,
  "range": "Surface to about 1,900 m, warm seas",
  "wiki": "Whale_shark",
  "blurb": "The biggest fish in the sea: a spotted, bus-sized shark that eats nothing larger than tiny plankton and small fish.",
  "facts": [
   "The largest confirmed whale shark measured about 18.8 m long.",
   "Its mouth can be about 1.5 m wide, and it feeds by filtering huge volumes of water.",
   "Each shark's pattern of pale spots is unique, so researchers identify individuals from photographs.",
   "Although often seen at the surface, one tagged whale shark dived to about 1,900 m."
  ]
 },
 {
  "id": "lusitania",
  "dir": "down",
  "v": 93,
  "name": "RMS Lusitania",
  "kind": "Wreck",
  "danger": 0,
  "range": "93 m, off southern Ireland",
  "wiki": "RMS_Lusitania",
  "blurb": "A great Atlantic liner torpedoed by a German U-boat in 1915, now lying on her side off the coast of Ireland.",
  "facts": [
   "She was hit by a torpedo from U-20 on 7 May 1915 off the Old Head of Kinsale and sank in about 18 minutes.",
   "Nearly 1,200 people died, including 128 Americans.",
   "The sinking turned American opinion against Germany, two years before the United States entered the war.",
   "When she entered service in 1907 she was briefly the largest ship in the world."
  ]
 },
 {
  "id": "britannic",
  "dir": "down",
  "v": 120,
  "name": "HMHS Britannic",
  "kind": "Wreck",
  "danger": 0,
  "range": "About 120 m, Aegean Sea, Greece",
  "wiki": "HMHS_Britannic",
  "blurb": "Titanic's younger sister, sunk by a mine while serving as a hospital ship, and the largest ship lost in the First World War.",
  "facts": [
   "She struck a German mine near the Greek island of Kea on 21 November 1916 and sank in 55 minutes.",
   "30 of the 1,066 people aboard were killed; the rest were rescued.",
   "Stewardess Violet Jessop survived both the Titanic and the Britannic sinkings.",
   "Jacques Cousteau found the wreck in 1975, lying on her starboard side at about 120 m."
  ]
 },
 {
  "id": "bluehole",
  "dir": "down",
  "v": 124,
  "name": "Great Blue Hole",
  "kind": "Place",
  "danger": 0,
  "range": "124 m deep, 318 m across, Belize",
  "wiki": "Great_Blue_Hole",
  "blurb": "A near-perfect circle of deep blue in a turquoise reef: a giant sinkhole that was a dry cave when sea levels were lower.",
  "facts": [
   "It is 318 m across and 124 m deep, off the coast of Belize.",
   "Stalactites inside show it was once a cave on dry land, flooded as the ice ages ended and the sea rose.",
   "Jacques Cousteau brought it worldwide fame in 1971 aboard his ship Calypso.",
   "It is part of the Belize Barrier Reef Reserve System, a UNESCO World Heritage Site."
  ]
 },
 {
  "id": "hammerhead",
  "dir": "down",
  "v": 150,
  "name": "Scalloped hammerhead",
  "kind": "Creature",
  "danger": 2,
  "range": "Surface to over 500 m, warm coasts",
  "wiki": "Scalloped_hammerhead",
  "blurb": "A shark with a hammer-shaped head that gathers in schools of hundreds by day and dives into the dark to hunt at night.",
  "facts": [
   "Its eyes and nostrils sit at the tips of the 'hammer', giving it a wide view and helping it track scents.",
   "The head is packed with sensors that detect the weak electric fields of prey hidden in the sand.",
   "Huge daytime schools gather around seamounts and islands such as Galápagos and Cocos Island.",
   "It has been listed as Critically Endangered since 2019, mainly because of fishing for its fins."
  ]
 },
 {
  "id": "coelacanth",
  "dir": "down",
  "v": 180,
  "name": "Coelacanth",
  "kind": "Creature",
  "danger": 0,
  "range": "About 100–500 m, western Indian Ocean",
  "wiki": "West_Indian_Ocean_coelacanth",
  "blurb": "A 'living fossil' known only from ancient rocks until a fishing boat hauled one up off South Africa in 1938.",
  "facts": [
   "Scientists thought coelacanths had died out about 66 million years ago, with the dinosaurs.",
   "Museum curator Marjorie Courtenay-Latimer spotted the first living specimen in a fisherman's catch in December 1938.",
   "Its fleshy, lobed fins move in a pattern similar to the legs of a walking animal.",
   "Coelacanths may live for about 100 years, and a pregnancy can last around five years."
  ]
 },
 {
  "id": "deansbluehole",
  "dir": "down",
  "v": 202,
  "name": "Dean's Blue Hole",
  "kind": "Place",
  "danger": 0,
  "range": "202 m deep, Long Island, Bahamas",
  "wiki": "Dean's_Blue_Hole",
  "blurb": "A sheltered sea cave that drops straight down from a sandy beach, one of the deepest blue holes on Earth.",
  "facts": [
   "It plunges 202 m, making it the world's third-deepest known blue hole.",
   "The opening is only about 30 m wide, but it widens below into a chamber about 100 m across.",
   "Calm, clear water and a sheer drop make it a favourite place for freediving world records.",
   "It hosts the Vertical Blue freediving competition, where many world records have been set."
  ]
 },
 {
  "id": "oarfish",
  "dir": "down",
  "v": 250,
  "name": "Giant oarfish",
  "kind": "Creature",
  "danger": 0,
  "range": "About 200–1,000 m, worldwide",
  "wiki": "Giant_oarfish",
  "blurb": "The longest bony fish alive: a silver ribbon with a red crest, and a likely source of old sea serpent tales.",
  "facts": [
   "The longest confirmed specimen was about 8 m, with unconfirmed reports of 11 m.",
   "It swims by rippling the long red fin that runs the whole length of its back.",
   "Living oarfish are rarely seen; most records come from dead or dying fish washed ashore.",
   "In Japanese folklore, oarfish on the shore are said to warn of earthquakes, although studies have found no link."
  ]
 },
 {
  "id": "nautilus",
  "dir": "down",
  "v": 300,
  "name": "Chambered nautilus",
  "kind": "Creature",
  "danger": 0,
  "range": "About 100–500 m, Indo-Pacific reef slopes",
  "wiki": "Chambered_nautilus",
  "blurb": "A shelled cousin of the octopus that rises and sinks by adjusting gas in the sealed chambers of its spiral shell.",
  "facts": [
   "Its shell is divided into chambers; the animal lives in the newest and largest one.",
   "A tube called the siphuncle moves fluid and gas between chambers to change buoyancy, like a submarine.",
   "It has about 90 tentacles with no suckers.",
   "Its shell implodes at around 800 m, so it rarely goes much deeper than 500 m."
  ]
 },
 {
  "id": "yamato",
  "dir": "down",
  "v": 340,
  "name": "Battleship Yamato",
  "kind": "Wreck",
  "danger": 0,
  "range": "340 m, East China Sea",
  "wiki": "Japanese_battleship_Yamato",
  "blurb": "The biggest battleship ever built, sunk by American aircraft in 1945 and now lying broken in two far below the surface.",
  "facts": [
   "Fully loaded she displaced about 72,000 tonnes, more than any other battleship in history.",
   "Her nine 46 cm guns were the largest ever mounted on a warship.",
   "She was sunk on 7 April 1945 on a one-way mission to Okinawa; about 3,000 of her crew died.",
   "The wreck lies at 340 m southwest of Kyushu, split into two main pieces."
  ]
 },
 {
  "id": "bluefin",
  "dir": "down",
  "v": 450,
  "name": "Atlantic bluefin tuna",
  "kind": "Creature",
  "danger": 0,
  "range": "Surface to about 1,000 m, Atlantic and Mediterranean",
  "wiki": "Atlantic_bluefin_tuna",
  "blurb": "A torpedo-shaped, warm-bodied giant that crosses the Atlantic and dives into cold, dark water to hunt.",
  "facts": [
   "The largest recorded weighed about 679 kg, caught off Nova Scotia in 1979.",
   "It can keep its muscles much warmer than the surrounding water, unlike most fish.",
   "Tagged fish have crossed the whole Atlantic and dived to around 1,000 m.",
   "Its fatty meat is so prized for sushi that bluefin stocks collapsed from overfishing in the 20th century."
  ]
 },
 {
  "id": "swordfish",
  "dir": "down",
  "v": 550,
  "name": "Swordfish",
  "kind": "Creature",
  "danger": 0,
  "range": "Surface to 600 m and beyond, worldwide",
  "wiki": "Swordfish",
  "blurb": "A fast hunter with a flat, sword-like bill that dives deep by day and rises toward the surface at night.",
  "facts": [
   "A special heater organ keeps its eyes and brain warm, sharpening its vision in cold, deep water.",
   "Adults can reach about 4.5 m long and 650 kg.",
   "Adults have no scales and no teeth; they slash at prey with the bill.",
   "They often spend daylight hours at 500 m or deeper, following squid and fish."
  ]
 },
 {
  "id": "bathysphere",
  "dir": "down",
  "v": 923,
  "name": "Bathysphere",
  "kind": "Vehicle",
  "danger": 0,
  "range": "Record dive 923 m, off Bermuda, 1934",
  "wiki": "Bathysphere",
  "blurb": "A steel ball on a cable in which William Beebe and Otis Barton became the first people to see the deep sea alive.",
  "facts": [
   "On 15 August 1934 Beebe and Barton reached 923 m, a human depth record that stood until 1949.",
   "The sphere had no engine; it hung from a steel cable lowered from a ship.",
   "Beebe described the glowing animals he saw live over a telephone line, broadcast on NBC radio in 1932.",
   "The original Bathysphere is now displayed at the New York Aquarium on Coney Island."
  ]
 },
 {
  "id": "whalefall",
  "dir": "down",
  "v": 1240,
  "name": "Whale fall",
  "kind": "Habitat",
  "danger": 0,
  "range": "First one found at 1,240 m",
  "wiki": "Whale_fall",
  "blurb": "A dead whale hits the seafloor and becomes an oasis: bone-eating worms, crabs and bacteria feed on one carcass for decades.",
  "facts": [
   "The first whale-fall community was found in 1987 by the submersible Alvin at 1,240 m in the Catalina Basin.",
   "A typical 40-tonne carcass delivers about two tonnes of carbon to the seabed in one go.",
   "That single pulse equals roughly 2,000 years of normal food fall onto the 50 square metres beneath it.",
   "Researchers estimate about 690,000 great-whale carcasses are decomposing on the seafloor at any moment."
  ]
 },
 {
  "id": "leatherback",
  "dir": "down",
  "v": 1280,
  "name": "Leatherback turtle",
  "kind": "Creature",
  "danger": 0,
  "range": "Recorded at 1,280 m",
  "wiki": "Leatherback_sea_turtle",
  "blurb": "The largest turtle alive swaps a hard shell for oily, leathery skin, and follows jellyfish deeper than almost any other air-breather.",
  "facts": [
   "Individuals have been recorded diving to 1,280 m, beyond the limit of every diving tetrapod except beaked and sperm whales.",
   "It reaches 2.7 m long and 500 kg, the heaviest reptile that is not a crocodilian.",
   "Instead of a bony shell it has interlocking osteoderms under leathery skin, so its chest can squash as it descends.",
   "One turtle was filmed hunting in water of 0.4 °C, then returning to 17.5 °C surface water to rewarm."
  ]
 },
 {
  "id": "brooder",
  "dir": "down",
  "v": 1400,
  "name": "Brooding deep-sea octopus",
  "kind": "Creature",
  "danger": 0,
  "range": "Broods at 1,200–2,000 m",
  "wiki": "Graneledone_boreopacifica",
  "blurb": "A pale octopus that guarded her eggs on a canyon wall for 53 months without ever leaving them, the longest brood known in any animal.",
  "facts": [
   "One female was watched in Monterey Canyon brooding the same clutch for 53 months, about four and a half years.",
   "Females of this species brood between roughly 1,200 and 2,000 m deep.",
   "There is no evidence a female ever feeds again after she lays her eggs.",
   "Most octopuses live only one or two years, which this one beats with her brooding alone."
  ]
 },
 {
  "id": "eseal",
  "dir": "down",
  "v": 1735,
  "name": "Northern elephant seal",
  "kind": "Creature",
  "danger": 2,
  "range": "Females dive to 1,735 m",
  "wiki": "Northern_elephant_seal",
  "blurb": "A seal that spends most of the year at sea, diving almost non-stop, day and night, in water black enough to hunt lanternfish.",
  "facts": [
   "Females dive deeper than males, to a recorded 1,735 m, though most dives are around 500 m.",
   "Tagged females dive nearly continuously for 20 hours or more a day.",
   "During a dive the spleen contracts to about a fifth of its size, squeezing stored red blood cells into the blood.",
   "Hunted almost to nothing by 1900, the species recovered from perhaps a few dozen animals to over 200,000."
  ]
 },
 {
  "id": "smoker",
  "dir": "down",
  "v": 2100,
  "name": "Black smoker",
  "kind": "Phenomenon",
  "danger": 3,
  "range": "Typically 2,000–3,000 m",
  "wiki": "Hydrothermal_vent",
  "blurb": "Seawater sinks into the crust, is heated past 400 °C, and blasts back out as a black cloud of metal sulfides that builds stone chimneys.",
  "facts": [
   "Black smokers cluster at depths of 2,500 to 3,000 m, with an average of about 2,100 m.",
   "Vent water can exceed 400 °C yet stays liquid because the pressure is hundreds of times atmospheric.",
   "They were first seen in 1979 on the East Pacific Rise from the submersible Alvin.",
   "The deepest known vents, at Beebe in the Cayman Trough, sit about 5,000 m down."
  ]
 },
 {
  "id": "spermwhale",
  "dir": "down",
  "v": 2250,
  "name": "Sperm whale",
  "kind": "Creature",
  "danger": 2,
  "range": "Dives to 2,250 m",
  "wiki": "Sperm_whale",
  "blurb": "The largest toothed predator on Earth, hunting squid in total darkness two kilometres down on a single breath.",
  "facts": [
   "Dives reach 2,250 m and can last up to 120 minutes, though a typical dive is 400 m and 35 minutes.",
   "Its brain is the largest of any animal, more than five times the weight of a human brain.",
   "Its clicks reach 236 decibels underwater, the loudest sound made by any animal.",
   "Much of what we know about giant and colossal squid came from the stomachs of sperm whales."
  ]
 },
 {
  "id": "mponeng",
  "dir": "down",
  "v": 2500,
  "name": "Mponeng gold mine",
  "kind": "Human-made",
  "danger": 3,
  "range": "~2.5 km below sea level",
  "wiki": "Mponeng_Gold_Mine",
  "blurb": "The deepest place people work: a South African gold mine over 4 km below the surface. Its headgear stands high inland, not at the sea.",
  "facts": [
   "Workings reach more than 4 km below ground, but the surface sits about 1.5 km above sea level, so the deepest levels are roughly 2.5 km below sea level.",
   "The trip from the surface to the deepest point takes over an hour.",
   "Rock stress at these depths can reach 80 to 100 megapascals, like being 10 km under water.",
   "Mining-induced earthquakes are routine; a magnitude 2 event in March 2020 killed three miners."
  ]
 },
 {
  "id": "pompeii",
  "dir": "down",
  "v": 2520,
  "name": "Pompeii worm",
  "kind": "Creature",
  "danger": 0,
  "range": "Vent chimneys at ~2,500 m",
  "wiki": "Alvinella_pompejana",
  "blurb": "A bristle worm that builds paper tubes on the flanks of hot vent chimneys and wears a living fleece of bacteria on its back.",
  "facts": [
   "It lives only on active high-temperature vents of the East Pacific Rise, at about 2,500 m.",
   "Its 'hair' is a colony of bacteria up to 1 cm thick that may insulate the worm.",
   "French biologists discovered it in the early 1980s off the Galapagos Islands.",
   "The worm and its bacteria live on sulfide pumped out by the vent, with no help from sunlight."
  ]
 },
 {
  "id": "scalyfoot",
  "dir": "down",
  "v": 2780,
  "name": "Scaly-foot snail",
  "kind": "Creature",
  "danger": 0,
  "range": "2,400–2,900 m",
  "wiki": "Scaly-foot_gastropod",
  "blurb": "The only animal known to armour itself in iron: a vent snail whose foot is covered in scales plated with iron sulfides.",
  "facts": [
   "It is known only from three Indian Ocean vent fields, at depths of about 2,400 to 2,900 m.",
   "All three sites together cover less than 0.02 square kilometres, about a fifth of a football pitch.",
   "Its gill is enormous, roughly 15.5 percent of the animal's body volume, to feed its symbiotic bacteria.",
   "In 2019 it became the first species listed as endangered because of the threat of deep-sea mining."
  ]
 },
 {
  "id": "endurance",
  "dir": "down",
  "v": 3008,
  "name": "Wreck of Endurance",
  "kind": "Wreck",
  "danger": 0,
  "range": "Found at 3,008 m",
  "wiki": "Endurance_(1912_ship)",
  "blurb": "Shackleton's ship, crushed by Weddell Sea ice in 1915, found upright in 2022 with her name still legible on the stern.",
  "facts": [
   "The wreck was located on 5 March 2022, nearly 107 years after she sank.",
   "She lies 3,008 m down in the Weddell Sea, in what searchers called a brilliant state of preservation.",
   "Her true position was within about 10 km of the spot captain Frank Worsley calculated by sextant in 1915.",
   "The wreck is protected as a historic site and monument under the Antarctic Treaty."
  ]
 },
 {
  "id": "coldseep",
  "dir": "down",
  "v": 3200,
  "name": "Cold seep",
  "kind": "Habitat",
  "danger": 0,
  "range": "Discovered at 3,200 m",
  "wiki": "Cold_seep",
  "blurb": "No heat here: methane and sulfide simply ooze from the seabed, and whole meadows of tubeworms, clams and mussels live off the leak.",
  "facts": [
   "Seeps were discovered in 1983 on the Florida Escarpment in the Gulf of Mexico at 3,200 m.",
   "They are now known in every major ocean, including under Antarctic ice shelves.",
   "The deepest known seep community sits at 7,326 m in the Japan Trench.",
   "Seep tubeworms grow slowly and some are thought to live for more than a century."
  ]
 },
 {
  "id": "chicken",
  "dir": "down",
  "v": 3500,
  "name": "Headless chicken monster",
  "kind": "Creature",
  "danger": 0,
  "range": "Deep seafloor worldwide",
  "wiki": "Enypniastes",
  "blurb": "A swimming sea cucumber, semi-transparent and pinkish, that flaps off the seabed with a veil-like sail when it has finished feeding.",
  "facts": [
   "It can rise as much as 1,000 m off the seafloor into open water, probably to move on and to escape predators.",
   "Adults are 11 to 25 cm long, bright pink when small and reddish-brown when large.",
   "Its body is see-through enough that you can watch the sediment move through its gut.",
   "It touches down to eat for at most 64 seconds at a time, then swims away again."
  ]
 },
 {
  "id": "tripod",
  "dir": "down",
  "v": 4000,
  "name": "Tripod fish",
  "kind": "Creature",
  "danger": 0,
  "range": "878–4,720 m",
  "wiki": "Bathypterois_grallator",
  "blurb": "A nearly blind fish that stands on three stilt-like fin rays on the abyssal mud, facing the current and waiting for dinner to drift in.",
  "facts": [
   "Its stilts are extended fin rays up to a metre long, roughly three times its body length.",
   "The stilts are floppy while swimming and stiffen, probably by pumping in fluid, when it stands.",
   "It has very poor eyesight and feels for prey with sensitive pectoral fin tips that also funnel water to its mouth.",
   "It lives from 878 to 4,720 m in the Atlantic, Pacific and Indian oceans."
  ]
 },
 {
  "id": "yellow",
  "dir": "down",
  "v": 5000,
  "name": "Yellowstone magma reservoir",
  "kind": "Phenomenon",
  "danger": 3,
  "range": "5–8 km under the caldera",
  "wiki": "Yellowstone_Caldera",
  "blurb": "Not ocean but rock: a pool of partly molten rhyolite under Yellowstone, its ceiling a few kilometres below the park's forests.",
  "facts": [
   "Magma before the Mesa Falls eruption was stored about 5 to 8 km below the surface at 750 to 800 °C.",
   "The park's plateau stands roughly 2.4 km above sea level, so that magma sits only about 3 to 6 km below sea level.",
   "Earthquake data suggest the shallow chamber is 80 km long and 20 km wide, holding some 4,000 cubic km of rock.",
   "Only about 6 to 8 percent of it is actually molten, too little for another supereruption right now."
  ]
 },
 {
  "id": "indy",
  "dir": "down",
  "v": 5500,
  "name": "Wreck of USS Indianapolis",
  "kind": "Wreck",
  "danger": 0,
  "range": "Found at ~5,500 m",
  "wiki": "USS_Indianapolis_(CA-35)",
  "blurb": "The cruiser that delivered the first atomic bomb's components, torpedoed days later and lost with most of her crew, found in 2017.",
  "facts": [
   "She was torpedoed on 30 July 1945 and sank in 12 minutes.",
   "Of 1,195 crew, about 300 went down with the ship and only 316 of the rest survived four days in the water.",
   "No US warship sunk at sea has lost more sailors.",
   "A search team financed by Paul Allen found the wreck in the Philippine Sea in 2017, about 5,500 m down."
  ]
 },
 {
  "id": "johnston",
  "dir": "down",
  "v": 6469,
  "name": "Wreck of USS Johnston",
  "kind": "Wreck",
  "danger": 0,
  "range": "Wreck at ~6,460 m",
  "wiki": "USS_Johnston_(DD-557)",
  "blurb": "A destroyer that charged a Japanese battle fleet to shield escort carriers, and now lies upright in a trench, hull number still white.",
  "facts": [
   "She was sunk on 25 October 1944 in the Battle off Samar, with 186 of her 327 crew lost.",
   "The wreck was identified in March 2021 at a depth of about 6,460 m in the Philippine Trench.",
   "Until USS Samuel B. Roberts was found in 2022, she was the deepest shipwreck ever surveyed.",
   "Her forward hull still stands upright with the 5-inch guns trained towards the enemy."
  ]
 },
 {
  "id": "jiaolong",
  "dir": "down",
  "v": 7062,
  "name": "Jiaolong",
  "kind": "Vehicle",
  "danger": 0,
  "range": "Dived to 7,062 m",
  "wiki": "Jiaolong_(submersible)",
  "blurb": "China's crewed research submersible, named for a flood dragon, which carried three people to 7 km down in the Mariana Trench.",
  "facts": [
   "On 27 June 2012 Jiaolong reached 7,062 m in the Mariana Trench.",
   "It carries a crew of three and was developed from the Sea Pole-class bathyscaphe design.",
   "Its first sea trial, in 2010, took it to 3,759 m in the South China Sea.",
   "Only Trieste, Archimede, Deepsea Challenger and Limiting Factor have carried people deeper."
  ]
 },
 {
  "id": "prtrench",
  "dir": "down",
  "v": 8376,
  "name": "Puerto Rico Trench",
  "kind": "Place",
  "danger": 3,
  "range": "Deepest point 8,376 m",
  "wiki": "Puerto_Rico_Trench",
  "blurb": "The Atlantic's deepest hole, an 810 km gash north of Puerto Rico where plates grind past and under each other.",
  "facts": [
   "Its deepest point, the Milwaukee or Brownson Deep, is measured at 8,376 m.",
   "Victor Vescovo made the first crewed dive to the bottom on 19 December 2018.",
   "The trench is 810 km long and marks a complex mix of subduction and sideways sliding of plates.",
   "Quakes on this boundary can raise tsunamis, as in 1918 when one struck Puerto Rico."
  ]
 },
 {
  "id": "oceancrust",
  "dir": "down",
  "v": 10000,
  "name": "Base of the oceanic crust",
  "kind": "Layer",
  "danger": 0,
  "range": "Crust only 7–10 km thick",
  "wiki": "Oceanic_crust",
  "blurb": "Under the abyssal mud the seafloor is a thin skin of basalt and gabbro, made at mid-ocean ridges and swallowed again at trenches.",
  "facts": [
   "Oceanic crust is generally under 10 km thick, against 25 to 70 km for continental crust.",
   "It is layered: thin sediment on top, then pillow basalt, then sheeted dykes, then about 5 km of gabbro.",
   "It is denser than continental crust, about 3.0 against 2.7 grams per cubic centimetre.",
   "Almost none of it is old: the oldest large-scale oceanic crust dates to about 180 million years ago."
  ]
 },
 {
  "id": "xeno",
  "dir": "down",
  "v": 10600,
  "name": "Xenophyophore",
  "kind": "Creature",
  "danger": 0,
  "range": "500–10,600 m",
  "wiki": "Xenophyophorea",
  "blurb": "A single cell the size of a fist: these giant seabed amoebae glue mineral grains into fragile tests, some 20 cm across.",
  "facts": [
   "They have been found from 500 m down to 10,600 m, including hadal trenches.",
   "Syringammina fragilissima reaches 20 cm across, among the largest single cells known.",
   "In places there are 2,000 individuals per 100 square metres, dominating the abyssal plain.",
   "Areas with xenophyophores hold three to four times more crustaceans, molluscs and echinoderms than bare seabed nearby."
  ]
 },
 {
  "id": "horizon",
  "dir": "down",
  "v": 10800,
  "name": "Horizon Deep",
  "kind": "Place",
  "danger": 0,
  "range": "10,800 m, second deepest",
  "wiki": "Tonga_Trench",
  "blurb": "The bottom of the Tonga Trench and the deepest water in the Southern Hemisphere, second only to the Challenger Deep.",
  "facts": [
   "Horizon Deep measures 10,800 metres, give or take 10 m.",
   "It is named after the research vessel Horizon, whose crew found it in December 1952.",
   "The Pacific plate dives into the Tonga Trench at the fastest plate motion measured anywhere on Earth.",
   "Victor Vescovo made the first crewed descent in June 2019 and logged 10,823 m."
  ]
 },
 {
  "id": "contcrust",
  "dir": "down",
  "v": 35000,
  "name": "Base of the continental crust",
  "kind": "Layer",
  "danger": 0,
  "range": "Crust 25–70 km thick",
  "wiki": "Continental_crust",
  "blurb": "The buoyant granite raft we live on ends here, floating on denser mantle like a slab of ice on water.",
  "facts": [
   "Continental crust is 25 to 70 km thick, thickest as a keel beneath big mountain ranges.",
   "At about 2.83 grams per cubic centimetre it is lighter than the mantle's 3.3, which is why continents ride high.",
   "It covers about 41 percent of Earth's surface but holds roughly 70 percent of the crust's volume.",
   "Because it rarely subducts, it preserves the oldest rocks known, including 4.01-billion-year-old Acasta Gneiss."
  ]
 },
 {
  "id": "lab",
  "dir": "down",
  "v": 100000,
  "name": "Lithosphere-asthenosphere boundary",
  "kind": "Boundary",
  "danger": 0,
  "range": "~100 km down",
  "wiki": "Lithosphere–asthenosphere_boundary",
  "blurb": "The underside of a tectonic plate: below this level the mantle is still solid rock, but weak enough to creep and let the plates slide.",
  "facts": [
   "Beneath younger continental crust the boundary lies roughly 100 km down.",
   "Under old cratons the plate is far thicker, with the boundary estimated at 200 to 250 km.",
   "Beneath ocean basins it ranges from about 50 to 140 km and deepens as the plate ages and cools.",
   "Seismic shear waves slow by 5 to 10 percent below it, which is how the boundary is detected at all."
  ]
 },
 {
  "id": "diamond",
  "dir": "down",
  "v": 180000,
  "name": "Where diamonds form",
  "kind": "Mineral",
  "danger": 0,
  "range": "150–250 km down",
  "wiki": "Diamond",
  "blurb": "Carbon turns to diamond only in the cool, thick roots of old continents, then rides to the surface in a volcanic express lift.",
  "facts": [
   "Most gem diamonds crystallise 150 to 250 km down, in the keels of ancient cratons.",
   "Diamond becomes stable under continents at about 950 °C and 4.5 gigapascals of pressure.",
   "Stored in non-convecting mantle, crystals can sit unchanged for billions of years until a kimberlite eruption samples them.",
   "A rare few, identified by their mineral inclusions, come from 330 to 800 km, in and below the transition zone."
  ]
 },
 {
  "id": "lowmantle",
  "dir": "down",
  "v": 660000,
  "name": "Top of the lower mantle",
  "kind": "Boundary",
  "danger": 0,
  "range": "660 km down",
  "wiki": "Lower_mantle",
  "blurb": "At 660 km the mineral ringwoodite collapses into a denser form, and seismic waves speed up sharply. Below is more than half of Earth.",
  "facts": [
   "The lower mantle runs from 660 km to 2,890 km and makes up about 56 percent of Earth's volume.",
   "The boundary is where ringwoodite breaks down into bridgmanite plus magnesiowustite.",
   "Pressures here rise from 24 to 127 gigapascals and temperatures from about 1,600 to 2,300 °C.",
   "This rock is solid but flows, creeping at roughly 1 cm per year."
  ]
 },
 {
  "id": "deepquake",
  "dir": "down",
  "v": 736000,
  "name": "Deepest earthquakes",
  "kind": "Phenomenon",
  "danger": 3,
  "range": "Down to ~735 km",
  "wiki": "Deep-focus_earthquake",
  "blurb": "Rock this deep should squash rather than snap, yet earthquakes keep happening inside cold slabs sinking towards the lower mantle.",
  "facts": [
   "The deepest confirmed earthquake was a magnitude 4.2 under Vanuatu in 2004, at 735.8 km.",
   "An unconfirmed aftershock of the 2015 Ogasawara quake may have been even deeper, at 751 km.",
   "The strongest was magnitude 8.3 under the Sea of Okhotsk in 2013, 609 km down.",
   "All deep-focus quakes occur in subducted slabs, along the dipping Wadati-Benioff zone."
  ]
 },
 {
  "id": "hawaii",
  "dir": "down",
  "v": 2000000,
  "name": "Roots of the Hawaii plume",
  "kind": "Phenomenon",
  "danger": 1,
  "range": "Imaged to ~2,000 km",
  "wiki": "Hawaii_hotspot",
  "blurb": "A column of hot mantle rising from deep inside Earth, burning a line of volcanoes into the Pacific plate as it drifts overhead.",
  "facts": [
   "Seismic tomography images the plume as 500 to 600 km wide and up to 2,000 km deep.",
   "Its magma is about 1,500 °C where it feeds Hawaii's volcanoes.",
   "In at least 85 million years it has built some 750,000 cubic km of rock.",
   "The Hawaiian-Emperor chain it left behind stretches 6,200 km, with over 120 extinct volcanoes."
  ]
 },
 {
  "id": "llsvp",
  "dir": "down",
  "v": 2600000,
  "name": "Large low-shear-velocity province",
  "kind": "Layer",
  "danger": 0,
  "range": "Up to 1,000 km above the core",
  "wiki": "Large_low-shear-velocity_provinces",
  "blurb": "Two continent-sized blobs sit on the core, one under Africa and one under the Pacific, slowing seismic waves for reasons still argued over.",
  "facts": [
   "The two provinces are nicknamed Tuzo, under Africa, and Jason, under the Pacific.",
   "They rise as much as 1,000 km above the core-mantle boundary and spread thousands of kilometres across.",
   "Together they make up about 8 percent of the mantle's volume, or 6 percent of the whole Earth.",
   "Jason is 3,000 km across and underlies four hotspots where plumes appear to reach the surface."
  ]
 },
 {
  "id": "dynamo",
  "dir": "down",
  "v": 4000000,
  "name": "The geodynamo",
  "kind": "Phenomenon",
  "danger": 0,
  "range": "Molten outer core",
  "wiki": "Dynamo_theory",
  "blurb": "Churning liquid iron, stirred by heat and Earth's spin, works as a self-sustaining dynamo and makes the magnetic field that shields us.",
  "facts": [
   "A rotating, convecting, electrically conducting fluid can keep a magnetic field alive for billions of years.",
   "Earth's field is generated in the liquid iron outer core, between about 2,890 and 5,150 km deep.",
   "The same mechanism is thought to power the magnetic fields of Mercury and the giant planets.",
   "The field it produces has flipped polarity hundreds of times in Earth's history."
  ]
 },
 {
  "id": "imic",
  "dir": "down",
  "v": 5971000,
  "name": "Innermost inner core",
  "kind": "Layer",
  "danger": 0,
  "range": "A sphere ~300–400 km across",
  "wiki": "Innermost_inner_core",
  "blurb": "Seismologists argue over a ball at the very centre, solid iron packed in a different way from the inner core around it.",
  "facts": [
   "It was proposed by Adam Dziewonski and Miaki Ishii to explain oddities in seismic travel times.",
   "Estimates of its radius differ: about 300 km in one model, about 400 km in another.",
   "Its existence would imply the inner core froze in two distinct episodes.",
   "Other seismologists argue the data are better explained by differences between the inner core's two hemispheres."
  ]
 }
];

if (typeof module !== 'undefined') module.exports = { ZONES, ITEMS };
