const username = ["@annebataanne","@peekaboo_", "@winterbear02","@annyeongie__", "@Jjayjayeee", "@neoncolors", "@kaydenn", "@suhooya", "@jinwoonim","@jayjoooe","@PhilippineTravelGurl", "@peekaboo_", "@TTGuy", "@TheGuyThatTravels", "@PhilTravels", "@peekaboo_","@TheTravelGuy","@astroboi", "@pogi__","@araAaAa","@peekaboo_","@astwour","@raiden","@itsyaboii"];
// 1 11 15 20
const title_arr = ["BATAAN EXPERIENCE", "ME TIME; A TRIP TO CLARK PARADE GROUNDS", "Exploring \"City of Pines\"", "Visiting South Korea in an alternative way", "MANILA!", "JAPAN !!", "LAKESHORE UNSURE", "Incredible Experience in BOHOL", "UNFORGETTABLE TRIP TO BALER", "ZAMBALES TRIP!","Okinawa Japan!", "Slovenia Coastal Towns are Stunning!", "Azerbaijan Coolest city I’ve ever been to!", "A Disastrous Molo Church Experience", "A Vigan Nightmare", "MY FABULOUS EXPERIENCE AT THE SAGRADA FAMILIA","BREATHTAKING EXPERIENCE AT THE TAROKO NATIONAL PARK","TRYING THE PLACE CALLED \"RED SOLES AND RED WINE ON CHICAGO\"", "A VERY GREAT PLACE CALLED MAASIN RIVER PALM TREE IN SIARGAO","JUST A BAD EXPERIENCE ON GOING TO KALANGGAMAN ISLAND ON LEYTE","EXPERIENCE ON TWIN LAGOON IN CORON, PALAWAN","EIFFEL TOWER EXPERIENCE","LAGUNA BEACH TRIP ON CALIFORNIA","TAJ MAHAL BAD EXPERIENCE"];

const country = ["","","","","","","","","","","","","","","","","","","","","","","",""];

const date = ["March 7, 2023", "February 17, 2022", "May 8, 2019", "December 1, 2022", "May 7, 2023", "April 9, 2023","February 16, 2023", "June 19, 2013","August 27, 2019", "January 29, 2022", "July 6, 2021, February 6, 2022", "November 28, 2022","June 13, 2021","July 2019", "July 2019", "SEPTEMBER 2022","MARCH 2021","MARCH 2021","JULY 2022","AUGUST 2022","JUNE 2021","DECEMBER 2022","APRIL 2022","FEBRUARY 2022"];

const ratings = [5, 5, 5, 4, 4, 5, 2, 5, 4, 5, 5, 5, 5, 1, 1, 5, 5, 5, 5, 2, 4, 5, 5, 2];

const type = ["Nature", "Nature", "Nature", "Town", "City Trip", "Traditional", "Nature", "Nature", "Nature", "Nature","Beach", "City", "City", "CHURCH","HISTORIC CITY","HOLY LANDMARK","NATIONAL PARK","TOURIST SHOP / DINING AND BAR", "NATURE/BEACH","NATURE / BEACH", "NATURE / BEACH","LANDMARK PLACE ","HOTEL / BEACH / ART / OUTDOOR ACTIVITIES / DINING","ISLAMIC RELIGIOUS BUILDING / MOSQUE"];

const expenses = ["8,000 - 10,000 (Family)", "1,000 - 2,000 (Solo)", "10,000–15,000 (Family)","1,000 -2,000 per head", "2500 - 3000", "¥99,927 - ¥124,909", "500PHP", "5,000 - 6,000 PESO", "6,000 - 7,000 PESO", "3,000 - 4,000 (SOLO)","$117", "€1,306","", "2,000 (Solo)", "$4,179", "€ 33.80","1 Day pass NT$250","$1000","₱15,000","12,000 PHP","10,000 PHP","€20.80","$680","₹50000"];

const description = ["A long trip to Bataan is a must in every traveler\'s life. Bataan is known for being rich in natural wonders such as stunning beaches, majestic mountains, and grandiose waterfalls. That\'s how we decided to go on a 2-day and 1-night trip.\n\nFor our first stop we stayed at Lucky Haven Beach Resort for our accommodations, and I can say that the rooms were well cleaned and neat (I\'ll be putting their FB Page on the links so you can see their rates). The NIGHT BEACH i must say, for me it was the highlight of our trip. I spent my whole night looking at the beach waves and feeling the cold air while drinking coffee; that was really perfect for me.\n\nThe next day, we went to the very famous tourist spot in Bataan, which is Mount Samat. Exploring Mount Samat was a very educational experience; despite the hot weather while climbing, the scenery and museum there made it all worth it.\n\nAfter experiencing the whole trip, it made me feel the true value and essence of our culture. I suggest that you plan this trip well so that you can fully enjoy it!", "I have been to Clark, Pampanga, many times already. It's true that it really gives off those calm and peaceful vibes inside—the cafes, open grounds, convenience stores, and more. One of the famous spots there was the Clark Parade Grounds, also known as CDC Clark. Personally, I just like the feeling of open grounds; I do love spending time looking at a spacious area full of trees, a windy atmosphere, and a pretty sunset while eating my go-to food. But of course I would love to share my experiences with you so that maybe we have the same taste in terms of traveling and enjoying your own precious time. Here's how I planned my peaceful trip to CDC Clark:\n\nPrepare your things. Blankets, small pillows, a tiny basket (if needed), lunchboxes, a bubble maker or blower, a camera (a phone camera can be a dupe for it), essentials, and your personal bag—plus, don't forget your extra money, just in case! Pack them lightly.\n\nIn addition to your food, you can make your own since you're aiming for that picnic thing. But still, there are convenience stores (7/11, Uncle John's (Ministop), fast food chains (Jolibee, Burger King, and Chowking), and coffee shops (Starbucks, etc.) there. The distance was 15–17 minutes' walk from the CDC to food chains; that's why you should prioritize your needs first before going to your destination.", "Hi everyone! So here's how my trip to Baguio went! I\'ve been to Baguio twice already. As for my first-time experience, since I was just 10 by that time, I have no ideas aside from liking the view and the strawberries there. And for the second time (2019), I was knowledgeable enough to analyze the activities we\'ve done there. We went to the most famous attractions, such as Burnham Park, Strawberry Park, Mines View Observation, and more. When it came to bookings and accommodations, we didn\'t really plan this trip well; we went there on the spot. It\'s kind of funny since I looked for booking websites when our trip had already ended. One of the best booking sites that I can recommend is \"trivago.com.ph\". It includes the prices of hotels, transportation, and more. Based on my calculations, your expenses will really depend on your time and the activities you plan to do. As for ours, we had a 3-day trip, and our expenses maybe went around 10,000–15,000 for a family of 7–10.", "Visiting Korea would definitely be a dream come true for some of you, but luckily, a town was created here in the Philippines that showcases the food, vibe, and feel of South Korea. I present to you, Korean Town in Angeles City!\n\nThe moment I visited Korean Town, I felt overwhelmed by the vibe it contained, but take note of this: I highly suggest going there at night. Going there in the morning might be too unfamiliar, and I can't guarantee that it would be nice there when the sun is out. I think I can compare it to 'Itaewon', They actually had the same vibe. There are some cafes and restaurants that you guys might want to try out.\n\nI won't say that this was the best trip ever, but I would say that it's a good starting point for those who are planning to really visit South Korea.", "Manila most travelers see it only as a jump off point to the country’s stunning islands. Outsiders may find it inexplicable, but I love Manila.\n\nBig, crowded, and wild describe Metro Manila. You become lost in the crowd, choke on pollution, or drown in her relentless nagging just as you are beginning your exploration. Those who manage to get past her faults, however, are rewarded with the chance to admire her qualities. So, in order to assist you get to know this underappreciated city better, here is a travel guide.\n\nI suggest you to visit Intramuros. If Manila had a soul, you’d find it hiding inside any ancient structure in Intramuros. The historic core of the capital, it was built in 1571, making it the oldest district in the city. It has survived waves of foreign invasions, a world war, and even booming, unrelenting threats of overdevelopment. But it continues to stand silently amidst the roaring metropolis outside its fortified walls. You can explore Intramuros on your own, but if you want to appreciate it better, it’s best to join a guided tour. Klook has two Intramuros offers: a walking tour and a bamboo bicycle tour.\n\nAfter that, go to Ayala Museum. Private museums abound in Metro Manila, but I prefer the Ayala Museum for its GOLD. The museum, which was founded in 1967, has been holding significant cultural and historical items that will alter the way you view earlier Philippine societies. In addition to countless works of art, its most priceless collection is the 'Gold of Ancestors' exhibition, which features over a thousand gold artifacts and provides indisputable evidence of our ancestors' highly developed way of life, which grew and flourished in the 16th century, even before the Spanish era.", "tropolis where tradition meets innovation. Explore the historic Asakusa district with its famous Senso-ji Temple and Nakamise shopping street. Visit the Imperial Palace, stroll through the upscale neighborhoods of Ginza and Omotesando, and immerse yourself in the bustling atmosphere of Shibuya Crossing.\n\nKyoto - A Glimpse into Japan's Ancient Soul:\nIn Kyoto, we step back in time and enter a world of sublime beauty and Zen tranquility. The enchanting Kinkaku-ji, or Golden Pavilion, leaves us awe-struck, while the mesmerizing Fushimi Inari Shrine enthralls us with its endless rows of vibrant torii gates. We delve into the rich history of geisha culture in the Gion district, savoring matcha tea in traditional tea houses.\n\nSuggestions: Don't just stay in Tokyo. It can be tempting to set your sights on Tokyo and not aim to explore much further. But if you want to get a real sense of what Japan is like, you've got to cast a wider net!\n\nPrepare: Figure out transportation in advance, get a SIM card or pocket wifi, practice English, and understand the culture.", "Our class has been suspended, so my friends and I decided to enjoy our day by going to Lakeshore. We wanted to have a picnic while enjoying the view there. I had high expectations going there because I saw my other friends go there and it made me want to go as well.\n\nHowever, it didn't go as I expected. The place was very meticulous to the point where you wanted to capture the moments, but they didn't allow the use of cameras inside. Additionally, the place was quite dirty. I don't know if we came at the wrong time or day, or if it's always like this.\n\nIt's not that it's a bad place, but it's really not what I expected it to be. That's why I'm so disappointed.", "Bohol holds incredible sights and dive spots that can easily capture anyone's heart. And I deem myself fortunate to have seen its beauty, albeit for a short time.\n\nNow, as you can see, the Chocolate Hills (or as we Filipinos would call it: Tsokolateng Burol) is a unique geological formation comprised of cone-shaped hills that all look identical — almost. From what I've learned, there are at least 1,200 of them that span an area of more than 20 square miles! To be more precise though, these 'hills' are actually made of limestone covered with grass, and they vary in sizes from 30 up to 120 meters in height.\n\nYou might be wondering why they are called as such, and well, they are called that because during the dry season, between the months of December and May, the grass that covers these limestone hills would dry up and turn into a browner color.\n\nMuch like the Chocolate Hills, I was also very excited about the chance of finally witnessing the world-famous tarsier that is said to be the 2nd smallest primate in the world. They are predominantly found in certain parts of Southeast Asia only, one of which is here in Bohol in the Philippines (yep, we're absolutely lucky to have them!)\n\nAs based on my books back in school — and as you can see in the photo — they also look so cute; so naturally, I was looking forward to it a lot!\n\nIf you're looking for a place to stay, I recommend the following:\n· Budget: Alexis Cliff Dive Resort\n· Mid: Panglao Homes Resort & Villas\n· Luxury: Henann Resort Alona Beach\n\nHow to get there:\nCar rentals are also possible, of course, and the rental shops are mainly found in Tagbilaran with a starting cost of $31~ (Php 1,500).","My trip to Baler was a truly unforgettable experience. Baler is a coastal town located in the province of Aurora and known for its stunning beaches, scenic views, and vibrant local culture. Here's a glimpse of what you can expect on your trip.\n\nMy trip started when I was 18; it was my birthday, and I told my family that I really wanted to go to Baler. I was so happy that they agreed.\n\nOur trip started at 4:00 am in the morning, and I was still sleepy but excited at the same time. I love traveling at midnight, but I easily get nauseous due to long drives. This is where the challenge started.\n\nIf you are like me and easily get dizzy due to long drives, I suggest you bring medicine like Biogesic and Bonamine, because on your way to Baler, you will encounter a zigzag road that is really long. This road made me vomit, but I tried hard to hold back because I didn't want to interrupt our trip.\n\nThen our tire got flat; our trip became truly memorable.\n\nWe arrived at 6 or 7 am in Baler, and after all the struggle, seeing Baler made me realize that this trip was really worth it. Just by looking at and hearing the waves of the beach gave me a calm and peaceful vibe that I wanted.\n\nI suggest you go to the Millennium Tree, which is the BIGGEST BALETE TREE IN ASIA. That tree is over 600 years old and over 65 meters in height. Then we went to Museo de Baler, which gives you a cultural vibe. The people there are very welcoming. Since we were not familiar with the place, we hired a guide to help us tour and enjoy Museo de Baler.\n\nThen we bought some food at the mall and went to the beach. It was already night. I suggest you bring some tents, blankets, a camera, and small pillows. We set up the tents near the beach and enjoyed the view. Don't forget to take pictures as you enjoy the moment.\n\nPrepare things like tents, blankets, pillows, a camera, and don't forget to bring extra money!", "If you're planning a trip to Zambales, here are some specific suggestions to make the most of your visit:\n\n1. Visit Anawangin Cove: This picturesque cove is one of the most popular destinations in Zambales. Surrounded by pine trees and with its unique ash-gray sand, it offers a tranquil atmosphere for camping, swimming, and enjoying the scenic beauty. You can also hike to nearby peaks for breathtaking views.\n\n2. If you're a surfing enthusiast or want to try it out, head to San Felipe. The coastline here offers consistent waves that are perfect for both beginners and experienced surfers. Liw-Liwa Beach is a popular spot for surfing, with several surf camps and rental shops available.\n\n3. You can also visit Subic Bay, which is not technically part of Zambales, but it is worth a visit. You can explore attractions like Ocean Adventure, Subic Safari, and the Treetop Adventure Park. Additionally, you can enjoy water sports, go-karting, and shopping in this vibrant area.\n\nI suggest checking the weather conditions and planning your activities accordingly. Zambales offers a mix of natural wonders and adventure opportunities, allowing you to create an unforgettable trip filled with beautiful landscapes and exciting experiences.\n\nMake sure to pack appropriate clothing, water and snacks, extra money, and follow any safety guidelines or protocols in place.","Hello, Peeps! Itsyagurl here with another great tourist recommendation. This time I visited Okinawa, Japan's beautiful beaches. One of my favorites was Naminoue Beach, which boasts a stunning white sandy beach. It offers a wide range of water sports activities to participate in, and the best part is, it's very affordable! I highly recommend visiting Okinawa, Japan, Peeps!! BYEEEEEE","Slovenia is a beautiful country with a stunning coastline along the Adriatic Sea. One of the cities I visited during my travels in this beautiful country is Portorož, also known as 'The City of Roses.' This charming town offers a perfect blend of natural beauty and modern amenities, making it a must-visit destination for tourists. Explore the picturesque coastline, enjoy the sandy beaches, indulge in spa treatments, and savor delicious cuisine. Portorož is sure to leave you enchanted with its unique charm and unforgettable experiences. Don't miss out on this gem in Slovenia!","Hey, people! Have you ever considered visiting Baku, Azerbaijan? This fascinating city is renowned for its rich history and stunning architecture. Baku offers a plethora of experiences for tourists, from exploring its ancient sites and medieval old town to enjoying modern attractions and vibrant nightlife. Notably, Baku has been hosting the European GP since 2016, adding an exciting motorsport event to its list of attractions. Don't miss out on the chance to explore this captivating city. Make sure to add Baku, Azerbaijan to your bucket list!","You might be wondering why it didn't cost me much money for this trip. Well, I was fortunate enough to be treated by my friend, and I only had to pay for my plane ticket.\n\nVisiting historical and cultural sites during our travels is usually an enriching experience, but sometimes things don't go as planned. In this article, we'll take you through a particularly disastrous visit to the famous Molo Church in Iloilo City, Philippines. Join us as we recount a series of unfortunate events that unfolded during what was supposed to be a pleasant tourist excursion.\n\nOur misadventure began as we approached Molo Church, only to be met with chaotic traffic conditions. The narrow streets leading to the church were filled with honking vehicles, creating a stressful and unpleasant atmosphere.\n\nWhen visiting tourist sites, we often rely on informational signs, brochures, or knowledgeable guides to understand the historical and cultural significance of the place. Unfortunately, Molo Church fell short in this aspect.","You would think visiting the historic city of Vigan is usually a delightful experience, even with its well-preserved Spanish colonial architecture and rich cultural heritage. For us it’s not worth the trip, However, not all trips go as planned, and this account details a particularly unfortunate and disappointing tourist experience in Vigan. Upon arriving at the local airport, our group was shocked to find that the transportation services to Vigan were incredibly scarce. Expecting comfortable lodgings, we had booked a guesthouse online, but the reality was far from what we had anticipated. One of the highlights of any travel experience is the opportunity to interact with the locals and learn about their culture. However, in Vigan, we encountered a surprising lack of hospitality.","Welcome to the enchanting city of Barcelona, to where I very much enjoyed my time here, feasting my eyes on these architectural marvels that blend seamlessly with vibrant culture. Amongst its many treasures, the Sagrada Familia stands tall as a testament to human creativity and devotion. This iconic basilica, designed by the visionary architect Antoni Gaudí, promises an unforgettable tourist experience that combines awe-inspiring architecture, rich history, and spiritual enlightenment. Let's embark on a journey through the captivating beauty of the Sagrada Familia and discover why it is an absolute must-visit destination in Spain.","I Loved my experience at the Taroko National Park, truly a breathtaking natural wonderland nestled in the heart of Taiwan. From dramatic marble cliffs and turquoise rivers to lush forests and serene trails, Taroko offers a remarkable tourist experience for nature lovers and adventure enthusiasts alike. Let's embark on an unforgettable journey through this magnificent park and discover the best it has to offer.","My day tour experience went by indulging in some retail therapy at high-end fashion boutiques in Chicago. One renowned brand known for its red-soled shoes is Christian Louboutin. Visit their store on Oak Street in Chicago's Gold Coast neighborhood to explore their exquisite collection of designer footwear. After finding your perfect pair of red-soled shoes, head to a wine bar to enjoy some fine red wine. Chicago has numerous wine bars that offer a wide selection of wines.","I was welcomed by an incredible sight as soon as I got at Maasin River Palm Tree in Siargao. A natural paradise that appeared to be straight out of a dream was created by the canopy of tall palm trees that lined the gorgeous river.\n\nI made the decision to cool off by swimming in the lush, green river that was crystal clear. The cooling water was a welcome reprieve from the sweltering heat. I leisurely drifted downstream, taking in the beauty of the landscape as the light current carried me.\n\nFurther exploration led me to secluded areas along the riverbank where I could unwind and take in the tranquil atmosphere. The peaceful sounds of nature surrounded me as I settled into a space under a palm tree, giving me a sense of calm that was quite reviving.\n\nI caved in to the pressure to attempt the well-known palm tree swing. I climbed up the strong branch with eager expectation, letting myself soar through the air. It was an event I'll never forget because of the thrilling rush and the breathtaking sights of the river and the surrounding palm trees.\n\nAfter enjoying the river, I decided to indulge in some local delicacies. Nearby, there were small stalls selling delicious street food and refreshing drinks. I treated myself to a plate of freshly grilled seafood, paired with a refreshing coconut juice straight from the palm trees that surrounded me. The flavors were exquisite, and I savored each bite, taking in the authentic taste of Siargao.\n\nAs the day drew to a close, I sat on the riverbank, watching the vibrant hues of the sunset paint the sky in a stunning display. The tranquil atmosphere, coupled with the beauty of the surrounding nature, created a moment of pure serenity and appreciation.\n\nLeaving Maasin River Palm Tree, I felt a sense of gratitude for having experienced such a remarkable place. The combination of the palm trees, the pristine river, and the warm hospitality of the locals made it an unforgettable adventure, leaving me with memories that I would cherish for a lifetime.","Upon arriving at Kalanggaman Island, I was immediately disappointed by the lack of proper facilities and amenities. The island felt overcrowded, with tourists everywhere, and it was challenging to find a quiet spot to enjoy the natural beauty.\n\nAs I walked along the beach, I noticed a significant amount of litter and debris scattered around, detracting from the picturesque scenery. It was disheartening to see such a pristine island marred by the negligence of visitors and the absence of proper waste management.\n\nFinding a place to relax was another hurdle. The limited shaded areas were already occupied, and the scorching sun made it unbearable to stay on the beach for an extended period. There were no beach umbrellas or loungers available, leaving visitors to fend for themselves under the intense heat.\n\nAs I attempted to go for a swim, I realized that the water quality was not up to my expectations. The once-clear turquoise waters were murky and littered with floating debris. It made me question the commitment to maintaining the island's natural beauty and preserving its fragile marine ecosystem.\n\nAdditionally, the lack of basic amenities such as clean restrooms and freshwater showers made the experience even more challenging. It was difficult to find a suitable place to freshen up after a day under the scorching sun.\n\nFurthermore, the island lacked proper information boards or signage, making it confusing to navigate and fully appreciate the unique features and points of interest. It felt like a missed opportunity to learn about the island's history, geography, and biodiversity.\n\nOverall, my visit to Kalanggaman Island left me disappointed and frustrated. The lack of proper facilities, the overcrowding, the pollution, and the absence of amenities made it difficult to enjoy the natural beauty and tranquility that I had anticipated.","During my visit to Twin Lagoons in Coron, Palawan, I was immediately captivated by the sheer beauty of the surroundings. The crystal-clear turquoise waters stretched out before me, contrasting against the lush greenery of the towering limestone cliffs.\n\nAs our boat entered the first lagoon, I marveled at the calmness and serenity that enveloped the area. The water was so clear that I could see the vibrant coral reefs below, teeming with colorful fish darting in and out of their hiding spots. It was like stepping into a hidden oasis, far away from the hustle and bustle of daily life.\n\nTaking a deep breath, I decided to dive into the inviting water. The temperature was refreshing, and as I swam, I felt completely at one with nature. Exploring the lagoon, I discovered hidden nooks and crannies, with each turn revealing a new breathtaking view.\n\nAfter a leisurely swim, I made my way to the second lagoon, which was just as enchanting as the first. This time, I opted to kayak, gliding through the narrow passageway that connected the two lagoons. The towering cliffs on either side created a sense of awe and wonder, making me feel as though I had entered a secret world.\n\nAs I reached the second lagoon, I was greeted by a sense of tranquility. The calm waters and the silence around me allowed me to truly appreciate the untouched beauty of this natural gem. I found a small stretch of sandy beach and basked in the warmth of the sun, taking in the stunning vistas around me.\n\nTime seemed to stand still as I immersed myself in the peacefulness of Twin Lagoons. I marveled at the wonders of nature and felt a deep sense of gratitude for being able to witness such natural splendor.\n\nAs the day drew to a close, I reluctantly bid farewell to Twin Lagoons, knowing that the memories of this incredible experience would stay with me forever. It was a reminder of the beauty that exists in our world and the importance of preserving these precious natural treasures.","As I approached the Eiffel Tower, its majestic silhouette against the Parisian skyline took my breath away. The warm glow of the setting sun cast a beautiful golden hue on the wrought-iron structure, adding to the enchantment.\n\nI decided to take the elevator to the top, eager to witness the panoramic views of the city. As I ascended, the anticipation grew. When I stepped onto the observation deck, I was greeted by an awe-inspiring sight. Paris sprawled out before me, revealing its timeless beauty and iconic landmarks.\n\nFrom the Eiffel Tower, I could see the River Seine winding its way through the heart of the city, with its charming bridges connecting the different neighborhoods. The rooftops of Paris were adorned with a sea of terracotta tiles, creating a picturesque view that was straight out of a postcard.\n\nAs the evening approached, the lights of the city began to twinkle, transforming Paris into a magical wonderland. The Eiffel Tower itself came alive, adorned with thousands of glittering lights, creating a spectacle that was both romantic and mesmerizing. I stood in awe, witnessing the hourly light show that illuminated the tower, making it a true beacon of beauty.\n\nDescending from the observation deck, I took a leisurely stroll through the Champ de Mars, the park surrounding the Eiffel Tower. I found a cozy spot on the grass, surrounded by Parisians and visitors alike, all captivated by the grandeur of the landmark.\n\nTo complete my experience, I decided to indulge in some French delicacies. I found a charming café nearby and savored a delectable croissant paired with a rich cup of coffee. Sitting at a sidewalk table, I watched the world go by, feeling the vibrant energy of Paris enveloping me.\n\nAs the night grew darker, I looked back at the Eiffel Tower one last time. Its lights continued to illuminate the city, a symbol of love, romance, and the allure of Paris. It was a truly magical experience, one that will forever hold a special place in my heart.","My best experience is at the Main Beach central hub with a boardwalk, volleyball courts, and easy access to nearby shops and restaurants. Other notable beaches include Thousand Steps Beach, Crescent Bay Beach, and Victoria Beach with its iconic tower. Laguna Beach has a thriving arts community and is home to numerous art galleries. Take a stroll through the Laguna Art Museum, showcasing California artists, or explore the galleries along Gallery Row and the Laguna Canyon Road. Take advantage of the beautiful coastal setting by engaging in outdoor activities. Go snorkeling or scuba diving in the crystal-clear waters, rent a kayak or paddleboard to explore the coastline, or go hiking in the nearby Laguna Coast Wilderness Park. Laguna Beach boasts a vibrant culinary scene with a variety of dining options. From seafood restaurants with ocean views to upscale eateries and cozy cafes, there's something to satisfy every palate.","During my visit to the Taj Mahal, I was utterly disappointed by the state of the monument. As I approached the entrance, the air was thick with pollution, obscuring the grandeur of the structure. The once-pristine white marble was now marred by layers of grime and neglect, making it difficult to appreciate its true beauty. Upon entering, I was immediately overwhelmed by the sheer number of tourists. The crowds were chaotic, with people jostling and pushing, making it nearly impossible to move freely or find a quiet spot to admire the surroundings. The atmosphere felt more like a busy market than a serene and contemplative place. Inside the Taj Mahal, the lack of maintenance was evident. The carpets were worn and stained, and the walls were in dire need of restoration. It was disheartening to see such a significant monument left in a state of neglect. To make matters worse, the tour guides were disinterested and provided minimal information about the historical and cultural significance of the Taj Mahal. Their lack of enthusiasm and knowledge added to my overall disappointment. As I attempted to capture a photograph, I realized that the once-iconic view of the Taj Mahal reflected in the reflecting pool was spoiled. The pool was murky and filled with debris, completely obscuring the picture-perfect reflection that I had seen in countless images. In the end, my visit to the Taj Mahal left me feeling disillusioned and saddened. The combination of poor maintenance, overwhelming crowds, and a lack of reverence for the monument's importance turned what should have been a memorable experience into a deeply disappointing one."];

const links = ["https://www.facebook.com/luckyhavenbeachresort", "", "https://www.trivago.com/", "", "https://www.thepoortraveler.net/2018/01/places-to-visit-in-manila-attractions/", "https://www.thepoortraveler.net/2018/01/places-to-visit-in-manila-attractions/","","","","","https://bucketlistseekers.com/off-the-beaten-path-japan-hidden-gems/","https://thebesttravelplaces.com/coastal-towns-slovenia/","","","","https://www.barcelona-tourist-guide.com/en/gaudi/sagrada-familia.html"," https://hoponworld.com/visiting-taroko-gorge-how-to-plan-the-perfect-trip/","","","","","","https://www.visitlagunabeach.com/",""];

const hashtag = ["#bataan #BeachTour #whereinbataan #travelinabudget", "#pampanga #clark #CLarkParadeGrounds #travelinabudget", "#trivago #philippines #BaguioCity #travelinabudget","#KoreanTown #cafe #food #travel", "#manila #philippines #travel #tour","#japan#Tanoshimi #happytravel","#lakeshore #dissapointed #expectation", "#BOHOL #triptoBOHOL #traveler","#baler #museodebaler #travel #enjoy", "#zambales #safetrip #satisfied","#Naminoue #Okinawa #Japan #LUVIT!!!","# Portorož #CityofRoses #Lovely","#BAKU #AZERBAIJAN #GP","#NotWorthTheTrip #JustNo #Church","#NotWorthIt #Vigone #1Star","#SagradaFamilia #Barcelona #WorthIT","#Taroko #LoveIT #Tai1","#chicago #redsolesandredwine #bestplaceinchicago","#palmtrees #maasirriverpalmtree #siargao #greatexperience","#unhappy #notenjoyable","#twinlagoons #coronpalawan #enjoy #happy #memories", "#eiffeltower #paris #greatplace","#lagunabeachcalifornia  #california #bestplaceforme","#tajmahal #dissappointed"];





console.log("username", username.length, "title", title_arr.length, "date", date.length, "ratings", ratings.length, "type", type.length, "expenses", expenses.length, "description", description.length, "links", links.length, "hashtag", hashtag.length, "country", country.length);





































































let popup = document.getElementById("popup");

function open_popup() {
    popup.classList.add("openpop");
}

function open_popup_login() {
    setTimeout(function () { window.location.assign("../pages/feed.html") }, 1000);
    popup.classList.add("openpop");
}

function see_more(seemore, num ,lastpage) {

    localStorage.setItem("picsrc", seemore);
    localStorage.setItem("username", username[num]);
    localStorage.setItem("desc", description[num]);
    localStorage.setItem("title", title_arr[num]);
    localStorage.setItem("date", date[num]);
    localStorage.setItem("type", type[num]);
    localStorage.setItem("expenses", expenses[num]);
    localStorage.setItem("links", links[num]);
    localStorage.setItem("hashtag", hashtag[num]);
    localStorage.setItem("country", country[num]);
    localStorage.setItem("rating", ratings[num]);
    localStorage.setItem("lastpage", lastpage);

}

function change_pic() {
    document.getElementById("username").textContent = localStorage.getItem("username");
    document.getElementById("desc").textContent = localStorage.getItem("desc");
    document.getElementById("title").textContent = "Title: " + localStorage.getItem("title");
    document.getElementById("country").textContent = "Country & Place: " + localStorage.getItem("country");
    document.getElementById("type").textContent = "Type: " + localStorage.getItem("type");
    document.getElementById("expenses").textContent = "Price Range: " + localStorage.getItem("expenses");
    document.getElementById("links").textContent = "Links: " +localStorage.getItem("links");
    document.getElementById("hashtag").textContent = "Hashtags: " + localStorage.getItem("hashtag");
    document.getElementById("date").textContent = "Date: " + localStorage.getItem("date");
    document.getElementById("see").src = localStorage.getItem("picsrc");

    let rating = localStorage.getItem("rating");
    r1 = document.getElementsByName("star-radio");

    if (rating == 5) {
        r1[0].checked = true;
    }
    else if (rating == 4) {
        r1[1].checked = true;
    }
    else if (rating == 3) {
        r1[2].checked = true;
    }
    else if (rating == 2) {
        r1[3].checked = true;
    }
    else if (rating == 1) {
        r1[4].checked = true;
    }
}

console.log(localStorage.getItem("lastpage"));
function lastpage() {
    var update_lastpage = localStorage.getItem("lastpage");

    setTimeout(function () { window.location.assign(update_lastpage) }, 0);
}

if (document.getElementById("see") != null) {
    change_pic();
}

let menubox = document.getElementById("pop-m");

function menu() {
    menubox.classList.add("menu-show");
}
function menu_close() {
    menubox.classList.remove("menu-show");
}

if (menubox != null) {
    menubox.addEventListener('mouseleave', () => {
        menubox.classList.remove("menu-show");
    }, false);
}


let abtus = document.getElementById("box-anim");
function aboutus() {
    abtus.classList.add("box-in");
}


let sett = document.getElementById("drop-visibi");

if (sett != null) {
    
    function setti_off() {
        sett.classList.remove("visibi");
    }
    function setti() {
        sett.classList.add("visibi");
    }
    
    sett.addEventListener('mouseleave', () => {
        sett.classList.remove("visibi");
        settingmen.classList.remove("invis")
    }, false);
}


let settingmen = document.getElementById("btn-settings");

if (settingmen != null) {
    settingmen.classList.add("btn-settings");
    settingmen.addEventListener('mouseover', () => {
        setti();
        settingmen.classList.add("invis")
    }, false);
}

let feed_title = document.getElementsByClassName("Ftitle_img");
let feed_desc = document.getElementsByClassName("Ftext_desc");
if (feed_title.length != 0) {
    
    for(let i = 0; i<feed_title.length; i++) {
        feed_title[i].textContent = title_arr[i];
    }
    for(let i = 0; i<feed_desc.length; i++) {
        feed_desc[i].textContent = description[i];
    }
    
}
let later_title = document.getElementsByClassName("title_img");
let later_desc = document.getElementsByClassName("text_desc");
if (later_title.length != 0) {
    let add = 12
    for(let i = 0; i<later_title.length; i++) {
        later_title[i].textContent = title_arr[i+add];
    }
    for(let i = 0; i<later_desc.length; i++) {
        later_desc[i].textContent = description[i+add];
    }
    
}
let ulater_title = document.getElementsByClassName("utitle_img");
let ulater_desc = document.getElementsByClassName("utext_desc");
if (ulater_title.length != 0) {


    ulater_title[0].textContent = title_arr[1];
    ulater_desc[0].textContent = description[1];

    ulater_title[1].textContent = title_arr[11];
    ulater_desc[1].textContent = description[11];

    ulater_title[2].textContent = title_arr[15];
    ulater_desc[2].textContent = description[15];

    ulater_title[3].textContent = title_arr[20];
    ulater_desc[3].textContent = description[20];
    
}