// hh-tenses-play: verbs.js
// Updated: 2026-04-21T14:36:31.309Z

const VERBS = [
  {
    present: "be", past: "was/were", pp: "been",
    icon: "🔤", zh: "係",
    sentences: [
      { tense:"present", verb:"be", text:"I am a student." },
      { tense:"past", verb:"was", text:"I was a student." },
      { tense:"participle", verb:"been", text:"I have been a student." }
    ]
  },
  {
    present: "become", past: "became", pp: "become",
    icon: "🔀", zh: "變成",
    sentences: [
      { tense:"present", verb:"become", text:"She will become a doctor when she grows up." },
      { tense:"past", verb:"became", text:"He became very tired after the long trip." },
      { tense:"participle", verb:"become", text:"They have become friends over the years." }
    ]
  },
  {
    present: "begin", past: "began", pp: "begun",
    icon: "🚀", zh: "開始",
    sentences: [
      { tense:"present", verb:"begin", text:"School begins at eight o'clock every morning." },
      { tense:"past", verb:"began", text:"The concert began with a beautiful song." },
      { tense:"participle", verb:"begun", text:"The rainy season has begun." }
    ]
  },
  {
    present: "break", past: "broke", pp: "broken",
    icon: "💔", zh: "打破",
    sentences: [
      { tense:"present", verb:"break", text:"Please be careful not to break the glass." },
      { tense:"past", verb:"broke", text:"She broke her pencil while drawing." },
      { tense:"participle", verb:"broken", text:"The window has been broken since Monday." }
    ]
  },
  {
    present: "bring", past: "brought", pp: "brought",
    icon: "🎒", zh: "帶來",
    sentences: [
      { tense:"present", verb:"bring", text:"Please bring your homework to class." },
      { tense:"past", verb:"brought", text:"She brought cookies to share with everyone." },
      { tense:"participle", verb:"brought", text:"He has brought his pet hamster to school." }
    ]
  },
  {
    present: "build", past: "built", pp: "built",
    icon: "🏗️", zh: "建造",
    sentences: [
      { tense:"present", verb:"build", text:"We build block towers in free play time." },
      { tense:"past", verb:"built", text:"They built a treehouse in the garden." },
      { tense:"participle", verb:"built", text:"The new library has been built next to our school." }
    ]
  },
  {
    present: "buy", past: "bought", pp: "bought",
    icon: "🛍️", zh: "買",
    sentences: [
      { tense:"present", verb:"buy", text:"Mum buys fruit at the market every week." },
      { tense:"past", verb:"bought", text:"Dad bought a new bicycle yesterday." },
      { tense:"participle", verb:"bought", text:"I have bought a gift for you." }
    ]
  },
  {
    present: "catch", past: "caught", pp: "caught",
    icon: "🧤", zh: "抓住",
    sentences: [
      { tense:"present", verb:"catch", text:"I catch the bus at half past seven." },
      { tense:"past", verb:"caught", text:"The goalkeeper caught the ball perfectly." },
      { tense:"participle", verb:"caught", text:"She has caught a cold from the rain." }
    ]
  },
  {
    present: "choose", past: "chose", pp: "chosen",
    icon: "🎯", zh: "選擇",
    sentences: [
      { tense:"present", verb:"choose", text:"She always chooses the window seat on the bus." },
      { tense:"past", verb:"chose", text:"He chose the biggest slice of cake." },
      { tense:"participle", verb:"chosen", text:"She has been chosen as the class captain." }
    ]
  },
  {
    present: "come", past: "came", pp: "come",
    icon: "🚪", zh: "來",
    sentences: [
      { tense:"present", verb:"come", text:"They come home at six o'clock every day." },
      { tense:"past", verb:"came", text:"She came to my party last Saturday." },
      { tense:"participle", verb:"come", text:"Has he come back from his trip yet?" }
    ]
  },
  {
    present: "cost", past: "cost", pp: "cost",
    icon: "💰", zh: "成本 (còuhn)",
    sentences: [
      { tense:"present", verb:"cost", text:"The book costs five dollars." },
      { tense:"past", verb:"cost", text:"The tickets cost twenty dollars last week." },
      { tense:"participle", verb:"cost", text:"The repair has cost us a lot of time." }
    ]
  },
  {
    present: "cut", past: "cut", pp: "cut",
    icon: "✂️", zh: "剪 / 切",
    sentences: [
      { tense:"present", verb:"cut", text:"I cut the paper into stars for decoration." },
      { tense:"past", verb:"cut", text:"Mum cut the birthday cake into ten pieces." },
      { tense:"participle", verb:"cut", text:"The ribbon has been cut to open the shop." }
    ]
  },
  {
    present: "do", past: "did", pp: "done",
    icon: "emoji", zh: "Traditional Chinese Cantonese",
    sentences: [
      { tense:"present", verb:"do", text:"I do my homework." },
      { tense:"past", verb:"did", text:"He did well in the test." },
      { tense:"participle", verb:"done", text:"She has done her chores." }
    ]
  },
  {
    present: "draw", past: "drew", pp: "drawn",
    icon: "🎨", zh: "畫畫",
    sentences: [
      { tense:"present", verb:"draw", text:"I draw a picture in my art class every Friday." },
      { tense:"past", verb:"drew", text:"She drew a portrait of her grandmother." },
      { tense:"participle", verb:"drawn", text:"He has drawn the same superhero a hundred times." }
    ]
  },
  {
    present: "drink", past: "drank", pp: "drunk",
    icon: "🥤", zh: "喝",
    sentences: [
      { tense:"present", verb:"drink", text:"He drinks a glass of milk every morning." },
      { tense:"past", verb:"drank", text:"He drank two cups of tea after school." },
      { tense:"participle", verb:"drunk", text:"She has drunk all the orange juice." }
    ]
  },
  {
    present: "drive", past: "drove", pp: "driven",
    icon: "🚗", zh: "駕駛",
    sentences: [
      { tense:"present", verb:"drive", text:"Dad drives us to school when it rains." },
      { tense:"past", verb:"drove", text:"She drove all the way to Sai Kung last Sunday." },
      { tense:"participle", verb:"driven", text:"He has driven that old car for ten years." }
    ]
  },
  {
    present: "eat", past: "ate", pp: "eaten",
    icon: "🍽️", zh: "吃",
    sentences: [
      { tense:"present", verb:"eat", text:"We eat rice for lunch every day." },
      { tense:"past", verb:"ate", text:"We ate pizza for dinner last night." },
      { tense:"participle", verb:"eaten", text:"I have eaten all my vegetables." }
    ]
  },
  {
    present: "fall", past: "fell", pp: "fallen",
    icon: "🍂", zh: "跌倒 / 下落",
    sentences: [
      { tense:"present", verb:"fall", text:"Leaves fall from the trees in autumn." },
      { tense:"past", verb:"fell", text:"He fell off his bike but was not hurt." },
      { tense:"participle", verb:"fallen", text:"The rain has fallen for three days." }
    ]
  },
  {
    present: "feel", past: "felt", pp: "felt",
    icon: "❤️", zh: "感覺",
    sentences: [
      { tense:"present", verb:"feel", text:"I feel happy when I help others." },
      { tense:"past", verb:"felt", text:"She felt nervous before the performance." },
      { tense:"participle", verb:"felt", text:"He has felt much better since resting." }
    ]
  },
  {
    present: "fight", past: "fought", pp: "fought",
    icon: "🥊", zh: "打鬥",
    sentences: [
      { tense:"present", verb:"fight", text:"The children fight over the last piece of cake." },
      { tense:"past", verb:"fought", text:"The boys fought fiercely during recess." },
      { tense:"participle", verb:"fought", text:"She has fought many challenges with determination." }
    ]
  },
  {
    present: "find", past: "found", pp: "found",
    icon: "🔍", zh: "找到",
    sentences: [
      { tense:"present", verb:"find", text:"I always find my keys on the table." },
      { tense:"past", verb:"found", text:"We found a baby turtle on the beach." },
      { tense:"participle", verb:"found", text:"He has found his missing library book." }
    ]
  },
  {
    present: "fly", past: "flew", pp: "flown",
    icon: "✈️", zh: "飛",
    sentences: [
      { tense:"present", verb:"fly", text:"Birds fly south in the winter." },
      { tense:"past", verb:"flew", text:"We flew to Japan for the holiday." },
      { tense:"participle", verb:"flown", text:"He has flown over 100 times." }
    ]
  },
  {
    present: "forget", past: "forgot", pp: "forgotten",
    icon: "🤔", zh: "唔記得",
    sentences: [
      { tense:"present", verb:"forget", text:"I often forget my keys." },
      { tense:"past", verb:"forgot", text:"I forgot my keys yesterday." },
      { tense:"participle", verb:"forgotten", text:"I have forgotten my keys." }
    ]
  },
  {
    present: "get", past: "got", pp: "got",
    icon: "💡", zh: "得到",
    sentences: [
      { tense:"present", verb:"get", text:"I get a sticker when I finish my homework." },
      { tense:"past", verb:"got", text:"She got full marks on the spelling test." },
      { tense:"participle", verb:"got", text:"He has got a new puppy." }
    ]
  },
  {
    present: "give", past: "gave", pp: "given",
    icon: "🎁", zh: "給予",
    sentences: [
      { tense:"present", verb:"give", text:"Grandma gives us pocket money on birthdays." },
      { tense:"past", verb:"gave", text:"The teacher gave us a fun project to do." },
      { tense:"participle", verb:"given", text:"She has given me a lovely present." }
    ]
  },
  {
    present: "go", past: "went", pp: "gone",
    icon: "🚶", zh: "去 / 走",
    sentences: [
      { tense:"present", verb:"go", text:"They go to school by bus every day." },
      { tense:"past", verb:"went", text:"They went to school by bus yesterday." },
      { tense:"participle", verb:"gone", text:"They have gone to school by bus." }
    ]
  },
  {
    present: "grow", past: "grew", pp: "grown",
    icon: "🌱", zh: "生長 / 種植",
    sentences: [
      { tense:"present", verb:"grow", text:"We grow tomatoes in our garden." },
      { tense:"past", verb:"grew", text:"The sunflower grew very tall this summer." },
      { tense:"participle", verb:"grown", text:"The baby has grown so much in a year." }
    ]
  },
  {
    present: "have", past: "had", pp: "had",
    icon: "👐", zh: "有",
    sentences: [
      { tense:"present", verb:"have", text:"I have a blue notebook." },
      { tense:"past", verb:"had", text:"She had a tasty snack yesterday." },
      { tense:"participle", verb:"had", text:"They have had many adventures together." }
    ]
  },
  {
    present: "hear", past: "heard", pp: "heard",
    icon: "👂", zh: "聽到",
    sentences: [
      { tense:"present", verb:"hear", text:"I can hear music coming from next door." },
      { tense:"past", verb:"heard", text:"We heard thunder in the distance." },
      { tense:"participle", verb:"heard", text:"Have you heard the good news?" }
    ]
  },
  {
    present: "hide", past: "hid", pp: "hidden",
    icon: "🙈", zh: "藏起來",
    sentences: [
      { tense:"present", verb:"hide", text:"We hide eggs around the garden at Easter." },
      { tense:"past", verb:"hid", text:"The cat hid under the bed during the storm." },
      { tense:"participle", verb:"hidden", text:"The treasure has been hidden in a secret place." }
    ]
  },
  {
    present: "hold", past: "held", pp: "held",
    icon: "🤗", zh: "拿著 / 舉辦",
    sentences: [
      { tense:"present", verb:"hold", text:"Please hold the handrail on the stairs." },
      { tense:"past", verb:"held", text:"The school held a fun sports day last week." },
      { tense:"participle", verb:"held", text:"She has held onto that memory forever." }
    ]
  },
  {
    present: "hurt", past: "hurt", pp: "hurt",
    icon: "🤕", zh: "受傷",
    sentences: [
      { tense:"present", verb:"hurt", text:"I hurt my knee while playing." },
      { tense:"past", verb:"hurt", text:"I hurt my knee yesterday." },
      { tense:"participle", verb:"hurt", text:"I have hurt my knee before." }
    ]
  },
  {
    present: "keep", past: "kept", pp: "kept",
    icon: "🔒", zh: "保持",
    sentences: [
      { tense:"present", verb:"keep", text:"I keep my books organized." },
      { tense:"past", verb:"kept", text:"I kept my books organized." },
      { tense:"participle", verb:"kept", text:"I have kept my books organized." }
    ]
  },
  {
    present: "know", past: "knew", pp: "known",
    icon: "🧠", zh: "知道",
    sentences: [
      { tense:"present", verb:"know", text:"I know all the planets in our solar system." },
      { tense:"past", verb:"knew", text:"She knew the answer straight away." },
      { tense:"participle", verb:"known", text:"This trick has been known for years." }
    ]
  },
  {
    present: "learn", past: "learnt", pp: "learnt",
    icon: "📚", zh: "學習",
    sentences: [
      { tense:"present", verb:"learn", text:"I learn new words every day." },
      { tense:"past", verb:"learned", text:"I learned new words yesterday." },
      { tense:"participle", verb:"learned", text:"I have learned many new words." }
    ]
  },
  {
    present: "leave", past: "left", pp: "left",
    icon: "🚶", zh: "離開",
    sentences: [
      { tense:"present", verb:"leave", text:"They leave the school every day." },
      { tense:"past", verb:"left", text:"They left the school yesterday." },
      { tense:"participle", verb:"left", text:"They have left the school." }
    ]
  },
  {
    present: "lose", past: "lost", pp: "lost",
    icon: "😢", zh: "失去 / 丟失",
    sentences: [
      { tense:"present", verb:"lose", text:"Our team sometimes loses but we never give up." },
      { tense:"past", verb:"lost", text:"She lost her favourite eraser yesterday." },
      { tense:"participle", verb:"lost", text:"He has lost his water bottle again." }
    ]
  },
  {
    present: "make", past: "made", pp: "made",
    icon: "🍪", zh: "製作",
    sentences: [
      { tense:"present", verb:"make", text:"We make sandwiches for the picnic." },
      { tense:"past", verb:"made", text:"They made a sandcastle on the beach." },
      { tense:"participle", verb:"made", text:"She has made a beautiful card for Mum." }
    ]
  },
  {
    present: "mean", past: "meant", pp: "meant",
    icon: "🔤", zh: "意思",
    sentences: [
      { tense:"present", verb:"mean", text:"I mean what I say." },
      { tense:"past", verb:"meant", text:"She meant to call you yesterday." },
      { tense:"participle", verb:"meant", text:"He has always meant well." }
    ]
  },
  {
    present: "meet", past: "met", pp: "met",
    icon: "🤝", zh: "見面 / 認識",
    sentences: [
      { tense:"present", verb:"meet", text:"We meet our friends at the playground after school." },
      { tense:"past", verb:"met", text:"I met my best friend on the first day of school." },
      { tense:"participle", verb:"met", text:"Have you met the new student yet?" }
    ]
  },
  {
    present: "pay", past: "paid", pp: "paid",
    icon: "💰", zh: "付錢",
    sentences: [
      { tense:"present", verb:"pay", text:"I pay the bus fare every day." },
      { tense:"past", verb:"paid", text:"She paid the bill yesterday." },
      { tense:"participle", verb:"paid", text:"They have paid the tuition for the whole year." }
    ]
  },
  {
    present: "put", past: "put", pp: "put",
    icon: "📥", zh: "放",
    sentences: [
      { tense:"present", verb:"put", text:"She puts the book on the shelf." },
      { tense:"past", verb:"put", text:"He put the keys in his pocket yesterday." },
      { tense:"participle", verb:"put", text:"They have put away the toys after playtime." }
    ]
  },
  {
    present: "read", past: "read", pp: "read",
    icon: "📚", zh: "閱讀",
    sentences: [
      { tense:"present", verb:"read", text:"I read a book before bed every night." },
      { tense:"past", verb:"read", text:"She read the whole chapter last night." },
      { tense:"participle", verb:"read", text:"Have you read this story before?" }
    ]
  },
  {
    present: "ride", past: "rode", pp: "ridden",
    icon: "🚴", zh: "騎（車/馬）",
    sentences: [
      { tense:"present", verb:"ride", text:"I ride my bicycle to the park every weekend." },
      { tense:"past", verb:"rode", text:"We rode horses at the farm last holiday." },
      { tense:"participle", verb:"ridden", text:"Have you ridden a horse before?" }
    ]
  },
  {
    present: "ring", past: "rang", pp: "rung",
    icon: "🔔", zh: "響",
    sentences: [
      { tense:"present", verb:"ring", text:"The school bell rings every hour." },
      { tense:"past", verb:"rang", text:"The school bell rang yesterday." },
      { tense:"participle", verb:"rung", text:"The school bell has rung many times today." }
    ]
  },
  {
    present: "run", past: "ran", pp: "run",
    icon: "🏃", zh: "跑步",
    sentences: [
      { tense:"present", verb:"run", text:"She runs in the park every morning." },
      { tense:"past", verb:"ran", text:"She ran very fast at the race yesterday." },
      { tense:"participle", verb:"run", text:"He has run five kilometres today." }
    ]
  },
  {
    present: "say", past: "said", pp: "said",
    icon: "🗣️", zh: "說 / 講",
    sentences: [
      { tense:"present", verb:"say", text:"He always says please and thank you." },
      { tense:"past", verb:"said", text:"She said she would be here at noon." },
      { tense:"participle", verb:"said", text:"The magic words have been said three times." }
    ]
  },
  {
    present: "see", past: "saw", pp: "seen",
    icon: "👀", zh: "看見",
    sentences: [
      { tense:"present", verb:"see", text:"I see many stars in the sky at night." },
      { tense:"past", verb:"saw", text:"We saw a rainbow after the rain." },
      { tense:"participle", verb:"seen", text:"Have you seen that new film?" }
    ]
  },
  {
    present: "sell", past: "sold", pp: "sold",
    icon: "🏪", zh: "賣",
    sentences: [
      { tense:"present", verb:"sell", text:"The bakery sells fresh bread every morning." },
      { tense:"past", verb:"sold", text:"They sold homemade cookies at the fair." },
      { tense:"participle", verb:"sold", text:"All the tickets have been sold." }
    ]
  },
  {
    present: "send", past: "sent", pp: "sent",
    icon: "📮", zh: "發送",
    sentences: [
      { tense:"present", verb:"send", text:"I send postcards to my friends when I travel." },
      { tense:"past", verb:"sent", text:"She sent a birthday card to her grandma." },
      { tense:"participle", verb:"sent", text:"The homework has been sent to the teacher." }
    ]
  },
  {
    present: "shake", past: "shook", pp: "shaken",
    icon: "🤝", zh: "搖晃",
    sentences: [
      { tense:"present", verb:"shake", text:"We shake hands to greet new people." },
      { tense:"past", verb:"shook", text:"She shook the bottle before opening it." },
      { tense:"participle", verb:"shaken", text:"The old bridge has been shaken by the wind." }
    ]
  },
  {
    present: "shine", past: "shone", pp: "shone", pastAlt:"shined", ppAlt:"shined",
    icon: "☀️", zh: "閃耀",
    sentences: [
      { tense:"present", verb:"shine", text:"The sun always shines brightly in the morning." },
      { tense:"past", verb:"shone", text:"The stars shone brilliantly last night." },
      { tense:"participle", verb:"shone", text:"The diamonds have shone ever since they were set in the crown." }
    ]
  },
  {
    present: "show", past: "showed", pp: "shown",
    icon: "📊", zh: "顯示",
    sentences: [
      { tense:"present", verb:"show", text:"She shows her artwork." },
      { tense:"past", verb:"showed", text:"She showed her artwork." },
      { tense:"participle", verb:"shown", text:"She has shown her artwork." }
    ]
  },
  {
    present: "shut", past: "shut", pp: "shut",
    icon: "emoji", zh: "Traditional Chinese Cantonese",
    sentences: [
      { tense:"present", verb:"shut", text:"Please shut the door." },
      { tense:"past", verb:"shut", text:"She shut the book after reading." },
      { tense:"participle", verb:"shut", text:"They have shut the shop early today." }
    ]
  },
  {
    present: "sing", past: "sang", pp: "sung",
    icon: "🎤", zh: "唱歌",
    sentences: [
      { tense:"present", verb:"sing", text:"She sings in the school choir." },
      { tense:"past", verb:"sang", text:"They sang a beautiful song together." },
      { tense:"participle", verb:"sung", text:"That song has been sung many times." }
    ]
  },
  {
    present: "sit", past: "sat", pp: "sat",
    icon: "🪑", zh: "坐",
    sentences: [
      { tense:"present", verb:"sit", text:"We sit in rows during assembly." },
      { tense:"past", verb:"sat", text:"He sat next to his best friend at lunch." },
      { tense:"participle", verb:"sat", text:"She has sat here since morning." }
    ]
  },
  {
    present: "sleep", past: "slept", pp: "slept",
    icon: "😴", zh: "睡覺",
    sentences: [
      { tense:"present", verb:"sleep", text:"I sleep for nine hours every night." },
      { tense:"past", verb:"slept", text:"The baby slept the whole afternoon." },
      { tense:"participle", verb:"slept", text:"She has slept through the alarm twice." }
    ]
  },
  {
    present: "smell", past: "smelled", pp: "smelled",
    icon: "👃", zh: "聞",
    sentences: [
      { tense:"present", verb:"smell", text:"The flower smells sweet." },
      { tense:"past", verb:"smelled", text:"The flower smelled sweet." },
      { tense:"participle", verb:"smelled", text:"The flower has smelled sweet." }
    ]
  },
  {
    present: "speak", past: "spoke", pp: "spoken",
    icon: "💬", zh: "說話",
    sentences: [
      { tense:"present", verb:"speak", text:"She speaks three languages fluently." },
      { tense:"past", verb:"spoke", text:"The principal spoke to us about kindness." },
      { tense:"participle", verb:"spoken", text:"Have you spoken to your teacher yet?" }
    ]
  },
  {
    present: "stand", past: "stood", pp: "stood",
    icon: "🧍", zh: "站立",
    sentences: [
      { tense:"present", verb:"stand", text:"Please stand when the teacher enters." },
      { tense:"past", verb:"stood", text:"We stood in line for the bus." },
      { tense:"participle", verb:"stood", text:"He has stood at the top of the queue." }
    ]
  },
  {
    present: "steal", past: "stole", pp: "stolen",
    icon: "🛍️", zh: "偷",
    sentences: [
      { tense:"present", verb:"steal", text:"He steals the cookies." },
      { tense:"past", verb:"stole", text:"He stole the cookies." },
      { tense:"participle", verb:"stolen", text:"He has stolen the cookies." }
    ]
  },
  {
    present: "swim", past: "swam", pp: "swum",
    icon: "🏊", zh: "游泳",
    sentences: [
      { tense:"present", verb:"swim", text:"The children swim in the pool on weekends." },
      { tense:"past", verb:"swam", text:"They swam across the river last summer." },
      { tense:"participle", verb:"swum", text:"She has swum here many times." }
    ]
  },
  {
    present: "take", past: "took", pp: "taken",
    icon: "🤲", zh: "拿 / 帶走",
    sentences: [
      { tense:"present", verb:"take", text:"He takes the bus to school every day." },
      { tense:"past", verb:"took", text:"She took many photos on the school trip." },
      { tense:"participle", verb:"taken", text:"The test has been taken by all students." }
    ]
  },
  {
    present: "teach", past: "taught", pp: "taught",
    icon: "👩‍🏫", zh: "教導",
    sentences: [
      { tense:"present", verb:"teach", text:"Mr Chan teaches us English and Science." },
      { tense:"past", verb:"taught", text:"She taught us how to fold origami cranes." },
      { tense:"participle", verb:"taught", text:"He has taught at this school for fifteen years." }
    ]
  },
  {
    present: "tell", past: "told", pp: "told",
    icon: "📣", zh: "告訴",
    sentences: [
      { tense:"present", verb:"tell", text:"Mum tells me a bedtime story every night." },
      { tense:"past", verb:"told", text:"He told us a very funny joke." },
      { tense:"participle", verb:"told", text:"She has told me all about her trip." }
    ]
  },
  {
    present: "think", past: "thought", pp: "thought",
    icon: "🤔", zh: "想 / 思考",
    sentences: [
      { tense:"present", verb:"think", text:"I think dinosaurs are very cool." },
      { tense:"past", verb:"thought", text:"She thought the film was exciting." },
      { tense:"participle", verb:"thought", text:"Have you thought about your answer?" }
    ]
  },
  {
    present: "throw", past: "threw", pp: "thrown",
    icon: "⚾", zh: "拋 / 投擲",
    sentences: [
      { tense:"present", verb:"throw", text:"I throw the ball to my dog every afternoon." },
      { tense:"past", verb:"threw", text:"She threw the ball over the fence by mistake." },
      { tense:"participle", verb:"thrown", text:"The old shoes have been thrown away." }
    ]
  },
  {
    present: "understand", past: "understood", pp: "understood",
    icon: "🤔", zh: "明白",
    sentences: [
      { tense:"present", verb:"understand", text:"I understand the lesson." },
      { tense:"past", verb:"understood", text:"She understood the problem." },
      { tense:"participle", verb:"understood", text:"They have understood the instructions." }
    ]
  },
  {
    present: "wake", past: "woke", pp: "woken",
    icon: "⏰", zh: "醒來",
    sentences: [
      { tense:"present", verb:"wake", text:"I wake up at seven o'clock every school day." },
      { tense:"past", verb:"woke", text:"The loud noise woke everyone in the house." },
      { tense:"participle", verb:"woken", text:"She has woken up early all week." }
    ]
  },
  {
    present: "wear", past: "wore", pp: "worn",
    icon: "👕", zh: "著",
    sentences: [
      { tense:"present", verb:"wear", text:"She wears a hat every day." },
      { tense:"past", verb:"wore", text:"He wore his new shoes to school yesterday." },
      { tense:"participle", verb:"worn", text:"They have worn those uniforms for many years." }
    ]
  },
  {
    present: "win", past: "won", pp: "won",
    icon: "🏆", zh: "贏得",
    sentences: [
      { tense:"present", verb:"win", text:"Our school team wins many trophies each year." },
      { tense:"past", verb:"won", text:"She won first prize in the art competition." },
      { tense:"participle", verb:"won", text:"He has won three medals this term." }
    ]
  },
  {
    present: "write", past: "wrote", pp: "written",
    icon: "✏️", zh: "寫字",
    sentences: [
      { tense:"present", verb:"write", text:"I write in my diary every night." },
      { tense:"past", verb:"wrote", text:"She wrote a long letter to her friend." },
      { tense:"participle", verb:"written", text:"He has written three books already." }
    ]
  }
];
