
let desc = document.querySelector("#desc");
let alt1 = document.querySelector("#button_text");
let alt2 = document.querySelector("#button_text2");
let background = document.querySelector("#BackBody");
let visitedRooms = [];

let currentRoom = 0;


let rooms = [
    {
        id: 0,
        background: "url(img/Camp.jpg)",
        desc:`<strong>T</strong>he camp is tucked away in the wild west's remote corner, bathed in the fading sun's fiery orange and red hues. Stars dot the night sky, twinkling above the rugged, expansive landscape. Dry desert air carries the scent of earth and echoes with distant wildlife calls.
        <br><br>
        Around the crackling campfire, gang members sit on worn logs and makeshift seats. Shadows dance on their weathered faces as the fire spits and pops. The wilderness whispers secrets, and silence hangs in the air, broken only by hushed conversations and occasional gusts of wind, promising adventure and peril.
        <br><br>
        The Van Der Linde gang huddled around the campfire, deciding their next heist. Arthur and Hosea advocated for a train robbery, while Dutch and Micah favored a daring bank hit. As a new member, all eyes turned to you for the deciding vote. The stakes were high, riches or ruin, and your choice would echo through the lawless land, sealing the gang's fate. With resolve, you make your decision, igniting a new chapter in the gang's relentless pursuit of fortune.
        `,
        exitTexts: [`Rob the bank`, `Under construction`],
        exitIds: [1,1]
    },
    /*1st*/
    {/* Bank */
        id: 1,
        background: "url(img/crossroads.jpg)",
        desc: `<strong>A</strong>s the flames danced in the dark of the night, the gang's collective decision was clear. The intoxicating allure of a daring bank heist was too much for you to resist, and you spoke up, "Let's hit the bank. It's time we make a statement that'll echo through these lands. The riches there will set us up for a long time to come."
        <br><br>
        Dutch's eyes gleamed with approval, his charismatic smile widening. Micah, always ready for chaos, chuckled with anticipation. Arthur exchanged a concerned look with Hosea but nodded in resignation.
        <br><br>
        With the decision made, the gang set their sights on the bank. The campfire's warmth now fueled by determination, they began to meticulously plan every detail, from the timing to the getaway route. The atmosphere buzzed with excitement and tension, and you could feel the weight of your choice settling in.
        <br><br><br>
        <strong>Crossroads</strong>
        <br><br>
        <strong>T</strong>he moon hung low in the night sky, casting a pale glow over the Van Der Linde gang as they stood at the crossroads, their options laid out before them. The choice between the treacherous river route and the safer, but longer, valley route would determine the success or failure of their (daring bank heist / train robbery).
        <br><br>
        Dutch, with his eyes shining with ambition, voiced his opinion first. Taking into account the speed that the river route offers he thinks that it would be the more beneficial choice. Micah, always one to embrace risk, nodded eagerly.
        <br><br>
        On the other side, Arthur, the voice of reason and experience. He shared his concerns stating that the river is risky because of its unpredictable nature, so he votes for the valley route. Hosea, the gang's strategist and mediator, added his wisdom to the discussion saying that the safety might cost extra time but that it will be worth it. 
        <br><br>
        All eyes turned to you once again, as the deciding vote rested on your shoulders. The tension in the air was palpable, and the fate of the gang hung in the balance. What would you choose?
        `,
        exitTexts: ["Take the valley", "Take the River"],
        exitIds: [3,4]
    },
    {
        id: 2,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Take the valley", "Take the River"],
        exitIds: [5,6]
    },
    /*2nd*/
    {/* Valley */
        id: 3,
        background: "url(img/Valley.webp)",
        desc: `<strong>W</strong>ith a deep breath, you made your decision. "We'll take the valley route," you declared firmly. "It's a safer bet, and we can't afford to risk everything we've worked for on a dangerous river crossing."
        <br><br>
        Dutch and Micah exchanged disappointed glances, but they knew the decision was made. The gang set out on the longer but safer path, their resolve unwavering as they moved forward.
        <br><br><br>
        <strong>Valley</strong>
        <br><br>
        <strong>A</strong>s the gang settled into their camp in the valley, the moonlight casting a gentle glow over the surroundings, a decision needed to be made regarding how to spend the night. Dutch and Micah were in favor of loosening up the nerves with alcohol and fooling around, while Hosea and Arthur believed that careful planning for the bank heist should take precedence.

        `,
        exitTexts: ["Plan the heist", "Loosen the nerves"],
        exitIds: [7,8]
    },
    {/* River */
        id: 4,
        background: "url(img/River.jpg)",
        desc: `<strong>"W</strong>e're taking the river route," you declared firmly. "Speed is our advantage, and we can handle whatever challenges come our way."
        <br><br>
        Dutch's eyes gleamed with excitement, his charismatic grin spreading. Micah nodded enthusiastically, his impulsive nature thrilled by the prospect. Arthur exchanged a concerned look with Hosea but nodded in resignation, emphasizing that they needed to be prepared for anything.
        <br><br><br>
        <strong>River</strong>
        <br><br>
        <strong>A</strong>s the Van Der Linde gang emerged from the treacherous river route, the horses were exhausted, and the night had grown darker. The decision whether to press on or set up camp now rested upon your shoulders.
        <br><br>
        Dutch, not wanting to waste anymore time, insisted that the gang keep moving. Micah, eager for the thrill of the chase, chimed in. On the other hand, Arthur, ever the voice of reason, voiced his concerns. Stating that the horses and they themselves were tired and needed a chance to recover to ensure a safe journey. Hosea, the gang's strategist, added his support to Arthur's argument. Mentioning that they’ll have a better chance at making a clean getaway white rested minds and horses.
        <br><br>
        The gang looked to you, their newest member, to break the tie and make the final decision. The choice between pushing forward and setting up camp was critical, and it would have a direct impact on the gang's ability to execute the bank heist successfully. What would you decide?
        `,
        exitTexts: ["Keep going", "Set up Camp"],
        exitIds: [9,10]
    },
    {
        id: 5,
        background: "url(img/Bank_outside.webp)",
        desc: `<strong></strong>`,
        exitTexts: ["Plan the heist", "Loosen the nerves"],
        exitIds: [9,10]
    },
    {
        id: 6,
        background: "url(img/Bank_outside.webp)",
        desc: `<strong></strong>`,
        exitTexts: ["Keep going", "Set up Camp"],
        exitIds: [9,10]
    },
    /*3rd*/
    {/* Valley, Plan */
        id: 7,
        background: "url(img/Bank_outside.webp)",
        desc: `<strong>A</strong>s the gang settled into their camp in the valley, the moonlight casting a gentle glow over the surroundings, a decision needed to be made regarding how to spend the night. Dutch and Micah were in favor of loosening up the nerves with alcohol and fooling around, while Hosea and Arthur believed that careful planning for the bank heist should take precedence.
        <br><br>
        Considering the gravity of the upcoming heist, you felt it was crucial to side with Hosea and Arthur's more prudent approach. You spoke up, "I think we should focus on planning for the heist tonight. We can't afford to be careless, and a well-thought-out plan will make all the difference."
        <br><br>
        Hosea, the gang's strategist, nodded appreciatively. Arthur, always the voice of reason, added that a clear head and a solid plan would be their best allies. Dutch and Micah exchanged disappointed glances but ultimately agreed to the more cautious approach. With everyone on the same page, the gang gathered around the campfire to discuss and refine their plan for the bank heist.
        <br><br>
        The night was filled with intense discussions, strategizing, and meticulous planning. Every possible scenario was considered, and the gang felt more prepared and focused as the hours passed.
        <br><br><br>
        <strong>Outside of the Bank</strong>
        <br><br>
        <strong>A</strong>rriving at the bank, the gang was faced with a critical decision: whether to enter through the front doors or try to find an alternative route through the back.
        <br><br>
        Dutch, known for his charismatic leadership and daring nature, suggested going through the front. Micah, always eager for action, agreed. Arthur, the seasoned and cautious member of the gang, was more inclined to seek an alternative route. Hosea, the strategist of the gang, supported Arthur's suggestion.
        <br><br>
        With the decision at hand, you needed to choose between the bold but risky front entrance or the potentially safer back route. What would be your decision at this critical moment?        
        `,
        exitTexts: ["Go from the front", "Go from the back"],
        exitIds: [11,12]
    },
    {/* Valley, Party */
        id: 8,
        background: "url(img/Bank_outside.webp)",
        desc: `<strong>A</strong>s the gang settled into their camp in the valley, the moonlight casting a gentle glow over the surroundings, a decision needed to be made regarding how to spend the night. Dutch and Micah were in favor of loosening up the nerves with alcohol and fooling around, while Hosea and Arthur believed that careful planning for the bank heist should take precedence.
        <br><br>
        Feeling the weight of the upcoming heist and wanting to relieve some of the tension in the camp, you decided to side with Dutch and Micah in their desire to unwind and indulge in some alcohol-fueled relaxation. You spoke up, "I think Dutch and Micah have a point. We could all use a little break to loosen up and boost our spirits before the big heist."
        <br><br>
        Dutch, always charismatic and persuasive, flashed a grin of approval. Micah, eager for some fun, chimed in enthusiastically. Arthur and Hosea exchanged concerned glances but reluctantly agreed to join in the revelry. The gang opened bottles of whiskey, and laughter and camaraderie filled the night air as you all shared stories and enjoyed each other's company.
        <br><br>
        As the night wore on, the gang's nerves were indeed eased, and you all found a moment of respite from the looming heist. However, it was important to remember that the bank job still awaited, and the success of the operation would ultimately depend on the decisions made during the heist itself.
        <br><br><br>
        <strong>Outside of the Bank</strong>
        <br><br>
        <strong>A</strong>rriving at the bank, the gang was faced with a critical decision: whether to enter through the front doors or try to find an alternative route through the back.
        <br><br>
        Dutch, known for his charismatic leadership and daring nature, suggested going through the front. Micah, always eager for action, agreed. Arthur, the seasoned and cautious member of the gang, was more inclined to seek an alternative route. Hosea, the strategist of the gang, supported Arthur's suggestion.
        <br><br>
        With the decision at hand, you needed to choose between the bold but risky front entrance or the potentially safer back route. What would be your decision at this critical moment?
        `,
        exitTexts: ["Go from the front", "Go from the back"],
        exitIds: [11,12]
    },
     {/* River, Continue */
        id: 9,
        background: "url(img/Bank_outside.webp)",
        desc: `<strong>A</strong>s the Van Der Linde gang emerged from the treacherous river route, the horses were exhausted, and the night had grown darker. The decision whether to press on or set up camp now rested upon your shoulders.
        <br><br>
        Dutch, not wanting to waste anymore time, insisted that the gang keep moving. Micah, eager for the thrill of the chase, chimed in. On the other hand, Arthur, ever the voice of reason, voiced his concerns. Stating that the horses and they themselves were tired and needed a chance to recover to ensure a safe journey. Hosea, the gang's strategist, added his support to Arthur's argument. Mentioning that they’ll have a better chance at making a clean getaway white rested minds and horses.
        <br><br>
        The gang looked to you, their newest member, to break the tie and make the final decision. The choice between pushing forward and setting up camp was critical, and it would have a direct impact on the gang's ability to execute the bank heist successfully. What would you decide?
        <br><br>
        The gang's horses were weary, the night dark and treacherous, but the decision was made. With Dutch and Micah advocating for pushing forward and your agreement, you decided to continue the journey instead of setting up camp.
        <br><br>
        Dutch nodded in approval, his resolve unwavering. Micah, always eager for action, grinned with excitement.  Arthur and Hosea exchanged concerned glances but accepted the decision, understanding the need to press on.
        <br><br>
        With renewed determination, the gang pushed forward through the dark and rugged terrain. The night was filled with uncertainty, and the horses' tiredness was palpable. Yet, you all continued, knowing that the bank heist awaited and that every moment counted.
        <br><br><br>
        <strong>Outside of the Bank</strong>
        <br><br>
        <strong>A</strong>rriving at the bank, the gang was faced with a critical decision: whether to enter through the front doors or try to find an alternative route through the back.
        <br><br>
        Dutch, known for his charismatic leadership and daring nature, suggested going through the front. Micah, always eager for action, agreed. Arthur, the seasoned and cautious member of the gang, was more inclined to seek an alternative route. Hosea, the strategist of the gang, supported Arthur's suggestion.
        <br><br>
        With the decision at hand, you needed to choose between the bold but risky front entrance or the potentially safer back route. What would be your decision at this critical moment?        
        `,
        exitTexts: ["Go from the front", "Go from the back"],
        exitIds: [11,12]
    },
    {/* River, Camp */
        id: 10,
        background: "url(img/Bank_outside.webp)",
        desc: `<strong>A</strong>s the Van Der Linde gang emerged from the treacherous river route, the horses were exhausted, and the night had grown darker. The decision whether to press on or set up camp now rested upon your shoulders.
        <br><br>
        Dutch, not wanting to waste anymore time, insisted that the gang keep moving. Micah, eager for the thrill of the chase, chimed in. On the other hand, Arthur, ever the voice of reason, voiced his concerns. Stating that the horses and they themselves were tired and needed a chance to recover to ensure a safe journey. Hosea, the gang's strategist, added his support to Arthur's argument. Mentioning that they’ll have a better chance at making a clean getaway white rested minds and horses.
        <br><br>
        The gang looked to you, their newest member, to break the tie and make the final decision. The choice between pushing forward and setting up camp was critical, and it would have a direct impact on the gang's ability to execute the bank heist successfully. What would you decide?
        <br><br>
        After careful consideration, you chose to side with Arthur and Hosea, opting to set up camp. "We need to rest and let the horses recover," you said firmly. "It'll give us a better chance of escaping any pursuit and executing the heist smoothly."
        <br><br>
        Dutch and Micah exchanged frustrated glances but ultimately acquiesced. The gang set up camp in a hidden spot, tending to the horses and settling in for a few hours of much-needed rest.
        <br><br><br>
        <strong>Outside of the Bank</strong>
        <br><br>
        <strong>A</strong>rriving at the bank, the gang was faced with a critical decision: whether to enter through the front doors or try to find an alternative route through the back.
        <br><br>
        Dutch, known for his charismatic leadership and daring nature, suggested going through the front. Micah, always eager for action, agreed. Arthur, the seasoned and cautious member of the gang, was more inclined to seek an alternative route. Hosea, the strategist of the gang, supported Arthur's suggestion.
        <br><br>
        With the decision at hand, you needed to choose between the bold but risky front entrance or the potentially safer back route. What would be your decision at this critical moment?        
        `,
        exitTexts: ["Go from the front", "Go from the back"],
        exitIds: [11,12]
    },
    /*4th*/
    {/* Front */
        id: 11,
        background: "url(img/Bank_Front.jpg)",
        desc: `<strong>E</strong>mboldened by Dutch and Micah's daring approach, you decided to go in through the front doors of the bank. The gang prepared themselves, weapons at the ready, as you pushed through the heavy entrance.
        <br><br>
        As you entered, the bank's interior was dimly lit, with customers and bank employees startled and frozen in place. The atmosphere was tense, but your group pressed forward, determined to seize control of the situation.
        <br><br>
        Dutch barked orders shouting everybody down to the ground and warning them not to sound the alarm. The bank's patrons and staff complied, their fear evident in their eyes. Meanwhile Micah kept watch near the entrance, ensuring no one made a sudden move, while Arthur and Hosea focused on approaching the bank's counters and vault.
        <br><br>
        The tension in the room was palpable as you all proceeded to execute your carefully planned heist. The success of this operation now hinged on the precise execution of every move, as well as your ability to control the situation and make a clean getaway with the loot.
        <br><br><br>
        <strong>Inside of the Bank</strong>
        <br><br>
        <strong>H</strong>aving entered the bank through the front and with hostages secured, you now faced a pivotal decision: should you help Dutch and Micha with the hostages, or should you go with Hosea and Arthur to the back where the vault was located?
        <br><br>
        Assisting Dutch and Micha with the hostages would involve maintaining control over them, potentially discouraging any sudden resistance or escape attempts. This role would require a strong presence and quick thinking to ensure the safety of both the gang and the hostages.
        <br><br>
        Accompanying Hosea and Arthur to the back where the vault was located would mean actively participating in securing the stolen riches. While this choice might contribute to the immediate success of the heist, it could also mean leaving Dutch and Micha to handle the hostages alone, which might pose risks.
        `,
        exitTexts: ["Go around back to the vault", "Take care of the hostages"],
        exitIds: [15,16]
    },
    {/* Back */
        id: 12,
        background: "url(img/Bank_Back.png.jpg)",
        desc: `<strong>O</strong>pting for a more discreet and potentially safer approach, you chose to enter the bank through the back. The gang carefully made their way to the rear of the building, keeping a low profile to avoid drawing unnecessary attention.
        <br><br>
        Once at the back entrance, you assessed the situation. It seemed less crowded and more secluded than the front, and there was a chance of catching the bank's employees off guard.
        <br><br>
        Hosea, with his keen eye for strategy, took the lead in finding a way inside through the back. After some careful examination, he discovered a slightly ajar door that led into the bank's storage area. With silent gestures, he signaled for the gang to follow him.
        <br><br>
        As you entered the storage area, you could hear the muffled sounds of activity coming from the main bank floor. The employees were likely unaware of your presence so far.
        <br><br>
        Arthur, always composed under pressure, whispered to move carefully and quietly. Hosea nodded in agreement, and the gang members advanced with their weapons at the ready. The bank's interior was dimly lit, and the element of surprise was on your side.
        <br><br>
        As you approached the bank floor, you could see the customers and employees going about their business, completely unaware of your presence. The tension was palpable, but with a coordinated effort, you hoped to seize control of the situation and execute the heist smoothly.
        <br><br><br>
        <strong>Inside of the Bank</strong>
        <br><br>
        <strong>F</strong>aced with the critical decision of whether to secure hostages or attempt to take the vault silently, you considered the options carefully.
        <br><br>
        Choosing to secure hostages would give the gang additional leverage and control over the situation. Hostages could serve as a deterrent to law enforcement or trigger-happy guards, potentially buying you more time to access the vault or negotiate with authorities.
        <br><br>
        On the other hand, attempting to take the vault silently would prioritize stealth and minimize the chances of drawing attention. It could reduce the risk of a violent confrontation and increase the chances of a clean getaway.
        .
        `,
        exitTexts: ["Go to the vault", "Take hostages"],
        exitIds: [17,18]
    },
    {
        id: 13,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Take care of the train condoctor", "Help searching the train"],
        exitIds: [19,20]
    },
    {
        id: 14,
        background: "url(img/Bank_Vault.png)",
        desc: `<strong>At The Vault</strong>
        <br><br>
        <strong>F</strong>aced with the choice of either trying to crack the code to open the vault or using explosives to blow the vault door open, the gang members gathered to deliberate their next move.
        <br><br>
        Attempting to crack the code required finesse, precision, and a certain level of expertise with safecracking. If successful, it would allow you to access the vault without drawing attention from the loud explosion of explosives. However, it was a time-consuming and delicate process, and failure could jeopardize the heist.
        <br><br>
        Using explosives to blow the vault door open offered a more forceful and quick entry into the vault. It had the advantage of speed, potentially catching anyone inside off guard. However, it was also loud and destructive, which could attract immediate attention from law enforcement and increase the risk of violence.
        `,
        exitTexts: ["Try to crack the code", "Use explosives"],
        exitIds: [22,23]
    },
    /*5th*/
    /*Bank*/
    {/* Front, Vault */
        id: 15,
        background: "url(img/Bank_Vault.png)",
        desc: `<strong>R</strong>ecognizing the urgency of securing the stolen riches and ensuring the success of the heist, you chose to go with Hosea and Arthur to the back where the vault was located.
        <br><br>
        With determined steps, you followed Hosea and Arthur as they led the way to the vault. The tension in the bank was palpable, and every moment counted as the gang members worked to access the valuable loot.
        <br><br>
        Hosea, the gang's strategist, remained focused on the task at hand. Arthur, always composed under pressure, watched for any potential obstacles or security measures.
        <br><br>
        As you reached the vault, your heart raced with anticipation. The riches inside were within arm's reach, but the success of the heist depended on your ability to efficiently secure the loot and execute a seamless getaway.
        <br><br><br>
        <strong>At The Vault</strong>
        <br><br>
        <strong>F</strong>aced with the choice of either trying to crack the code to open the vault or using explosives to blow the vault door open, the gang members gathered to deliberate their next move.
        <br><br>
        Attempting to crack the code required finesse, precision, and a certain level of expertise with safecracking. If successful, it would allow you to access the vault without drawing attention from the loud explosion of explosives. However, it was a time-consuming and delicate process, and failure could jeopardize the heist.
        <br><br>
        Using explosives to blow the vault door open offered a more forceful and quick entry into the vault. It had the advantage of speed, potentially catching anyone inside off guard. However, it was also loud and destructive, which could attract immediate attention from law enforcement and increase the risk of violence.
        `,
        exitTexts: ["Try to crack the code", "Use explosives"],
        exitIds: [22,23]
    },
    {/* Front, Hostage */
        id: 16,
        background: "url(img/Bank_Hostages.webp)",
        desc: `<strong>R</strong>ecognizing the importance of maintaining control over the hostages and keeping the situation inside the bank in check, you chose to help Dutch and Micha with the hostages.
        <br><br>
        You positioned yourself alongside Dutch and Micha, ready to assist in ensuring the hostages' compliance and safety during the heist. The tension in the bank was palpable as the hostages remained on the ground, their fear and anxiety evident.
        <br><br>
        Dutch, with his charismatic leadership, maintained control over the situation. Micha, always eager for action, kept a vigilant eye on the hostages.
        <br><br>
        Your presence and assistance helped reinforce the gang's control over the hostages, preventing any unexpected resistance or escape attempts. As the gang members worked to secure the stolen riches, you maintained your role in keeping the situation inside the bank as calm as possible.
        <br><br><br>
        <strong>Inside the Front of the Bank</strong>
        <br><br>
        <strong>W</strong>ith the police outside demanding the release of a hostage every five minutes, a difficult decision lay before you and the gang inside the bank. The choices were clear: comply with the demands and release a hostage periodically, or ignore the demands and hold onto the hostages as leverage.
        <br><br>
        Choosing to comply with the police demands and release a hostage every five minutes might create a temporary sense of cooperation and reduce the immediate threat of a police assault. It could also be seen as a gesture of goodwill, potentially leading to negotiations or a less aggressive response from law enforcement.
        <br><br>
        Opting to ignore the police demands and hold onto the hostages could be a means of maintaining control and leverage during the heist. It might discourage law enforcement from making any hasty moves but could also escalate tensions and increase the risk of a violent confrontation.
        `,
        exitTexts: ["Comply with the police", "Ignore their demands"],
        exitIds: [25,26]
    },
    {/* Back, Vault */
        id: 17,
        background: "url(img/Bank_Vault.png)",
        desc: `<strong>R</strong>ecognizing the importance of stealth and avoiding unnecessary attention, the gang decided to attempt to take the vault silently. With calculated steps, you moved deeper into the bank, keeping an eye out for any security measures or personnel that might pose a threat.
        <br><br>
        As you progressed through the bank's interior, you remained vigilant, searching for any signs of alarm systems or guards. The tension in the air was palpable as the gang members relied on their training and experience to navigate the bank's layout.
        <br><br>
        Hosea, the gang's strategist, took the lead in scouting for potential obstacles or security measures. Arthur, always composed under pressure, focused on ensuring the gang members stayed coordinated and silent. Dutch, with his charismatic leadership, encouraged the group with a hushed tone. 
        <br><br>
        As you approached the vault's location, you encountered a security door that stood between you and the coveted loot. It appeared to be electronic and required a code or keycard for access. The gang members huddled together, considering their options.
        <br><br>
        As you progressed through the bank's interior, you remained vigilant, searching for any signs of alarm systems or guards. The tension in the air was palpable as the gang members relied on their training and experience to navigate the bank's layout.
        <br><br>
        Hosea, the gang's strategist, took the lead in scouting for potential obstacles or security measures. Arthur, always composed under pressure, focused on ensuring the gang members stayed coordinated and silent. Dutch, with his charismatic leadership, encouraged the group with a hushed tone. 
        <br><br>
        As you approached the vault's location, you encountered a security door that stood between you and the coveted loot. It appeared to be electronic and required a code or key for access. The gang members huddled together, considering their options.
        <br><br><br>
        <strong>At The Vault</strong>
        <br><br>
        <strong>F</strong>aced with the choice of either trying to crack the code to open the vault or using explosives to blow the vault door open, the gang members gathered to deliberate their next move.
        <br><br>
        Attempting to crack the code required finesse, precision, and a certain level of expertise with safecracking. If successful, it would allow you to access the vault without drawing attention from the loud explosion of explosives. However, it was a time-consuming and delicate process, and failure could jeopardize the heist.
        <br><br>
        Using explosives to blow the vault door open offered a more forceful and quick entry into the vault. It had the advantage of speed, potentially catching anyone inside off guard. However, it was also loud and destructive, which could attract immediate attention from law enforcement and increase the risk of violence.
        `,
        exitTexts: ["Try to crack the code", "Use explosives"],
        exitIds: [31,24]
    },
    {/* Back, Hostage */
        id: 18,
        background: "url(img/Take_Hostages.jpg)",
        desc: `<strong>R</strong>ecognizing the potential advantage of having hostages as a means of control, you decided to secure hostages within the bank. It was a risky move, but it could deter law enforcement from taking immediate action and give the gang some leverage during negotiations.
        <br><br>
        Dutch and Micah quickly moved to assert control over the bank's occupants, ordering them to the ground and making it clear that any attempts to resist would result in dire consequences. The customers and employees, clearly frightened, complied with the gang's demands.
        <br><br>
        With hostages secured and subdued, the gang members could focus on their objective: gaining access to the vault. However, it was crucial to handle the hostages with care to avoid any unnecessary harm or attention.
        <br><br>
        Arthur, with his level-headed demeanor, took charge of monitoring the hostages and ensuring they remained compliant. Hosea, the gang's strategist, nodded in agreement.
        <br><br>
        With the hostage under control, the gang moved toward the vault, mindful of the delicate balance between maintaining control and minimizing the risk of violence.`,
        exitTexts: ["Keep the hostage", " Kill the hostage and go to the vault"],
        exitIds: [27,14]
    },
    /*Train*/
    /*Train stopped--------------------------------------------------------*/
    {
        id: 19,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Kick the train condoctor off the train", "Hold the train condoctor hostage"],
        exitIds: [28,29]
    },
    {
        id: 20,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Focus on looking for valuables", "Hold the exits"],
        exitIds: [30,31]
    },
    /*Train still moving*/
    {
        id: 21,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Stop the train", "Keep the train going"],
        exitIds: [33,34]
    },
    /*6th-----------------------------------------------------------------------------------------------------------------------------------*/
    {/* Front, Vault, Code */
        id: 22,
        background: "url(img/Bank_robbing.jpg)",
        desc: `<strong>O</strong>pting for a more discreet and methodical approach, the gang decided to attempt to crack the code on the vault door. It was a risky endeavor that required finesse and precision, but it would allow them to access the vault without drawing attention from a loud explosion.
        <br><br>
        Hosea, with his experience in safecracking, stepped forward to examine the vault's lock. The gang members gathered around Hosea, their eyes fixed on his skilled hands as he delicately manipulated the lock. The atmosphere was tense, and every tick of the clock seemed to echo in the quiet room.
        <br><br>
        Arthur, always the voice of reason, reminded everyone to stay focused. As Hosea continued to work on the lock, the gang's anticipation grew. The success of the heist now depended on his skill and precision, and every passing moment brought them closer to their goal.
        <br><br>
        After what felt like an eternity, there was a faint click, and the vault door swung open. A collective sigh of relief swept through the gang as they realized that their patience and the careful decision to crack the code had paid off.        
        <br><br><br>
        <strong>Inside of the Vault</strong>
        <br><br>
        <strong>F</strong>acing the open vault door and the police presence outside, you were confronted with a critical decision that could determine the outcome of the heist. The options were clear: make a run for it and leave the gold behind, or attempt to gather as much gold as you could carry before making your escape.`,
        exitTexts: ["Get the gold", "Save your gang"],
        exitIds: [32,33]
    },
    {/* Front, Vault, Explo */
        id: 23,
        background: "url(img/Bank_robbing.jpg)",
        desc: `<strong>I</strong>n a bold and decisive move, the gang decided to use explosives to blow open the vault door. The decision promised a quick entry but came with the risk of drawing immediate attention from law enforcement or anyone nearby.
        <br><br>
        Arthur prepared the charges while the rest of the gang members took cover behind various obstacles within the bank. Tension filled the room as the countdown to the explosion began.
        <br><br>
        Arthur, with his pragmatic nature, reminded everyone to stay focused.  As the countdown reached its final moments, a deafening explosion echoed through the bank. Smoke billowed, and dust filled the air as the vault door was blown open, revealing the riches within.
        <br><br>
        The gang moved quickly to secure the loot, but the loud explosion had undoubtedly drawn attention. Sirens wailed in the distance, signaling the approach of law enforcement.
        <br><br><br>
        <strong>Inside of the Vault</strong>
        <br><br>
        <strong>F</strong>acing the open vault door and the police presence outside, you were confronted with a critical decision that could determine the outcome of the heist. The options were clear: make a run for it and leave the gold behind, or attempt to gather as much gold as you could carry before making your escape.`,
        exitTexts: ["Get the gold", "Save your gang"],
        exitIds: [32,33]
    },
    {/* Back, Vault, Explo */
        id: 24,
        background: "url(img/cropped-Bank_Explo.png)",
        desc: `<strong>I</strong>n a bold and decisive move, the gang decided to use explosives to blow open the vault door. The decision promised a quick entry but came with the risk of drawing immediate attention from law enforcement or anyone nearby.
        <br><br>
        Micah, known for his affinity for explosives, eagerly prepared the charges while the rest of the gang members took cover behind various obstacles within the bank. Tension filled the room as the countdown to the explosion began.
        <br><br>
        Dutch, always charismatic under pressure, reassured the gang members. Arthur, with his pragmatic nature, reminded everyone to stay focused.  As the countdown reached its final moments, a deafening explosion echoed through the bank. Smoke billowed, and dust filled the air as the vault door was blown open, revealing the riches within.
        <br><br>
        The gang moved quickly to secure the loot, but the loud explosion had undoubtedly drawn attention. Sirens wailed in the distance, signaling the approach of law enforcement.
        <br><br><br>
        <strong>Inside of the Vault</strong>
        <br><br>
        <strong>W</strong>ith the police now alerted to your presence and the explosives having shattered any semblance of stealth, a critical decision loomed before the gang. The options were clear: save your own skin by attempting to escape solo or stick together with the gang and make a collective effort to flee.
        `,
        exitTexts: ["Escape on your own", "Save your gang"],
        exitIds: [34,35]
    },
    {/* Front, Hostage, Comply */
        id: 25,
        background: "url(img/Bank_Comply.webp)",
        desc: `<strong>R</strong>ecognizing the potential danger and wanting to avoid a violent confrontation with the police, you made the difficult decision to comply with their demands. The safety of the hostages and the gang members inside the bank was paramount.
        <br><br>
        Following the police's demands, you, Dutch, and Micha began releasing a hostage every five minutes. This act of cooperation was intended to create a sense of goodwill and reduce the immediate threat of a police assault.
        <br><br>
        As each hostage was released, they were ushered to safety, and the tension inside the bank slowly began to ease. Law enforcement officers outside observed the hostages' release, and a temporary sense of cooperation was established.
        <br><br><br>
        <strong>At the Front of the Bank</strong>
        <br><br>
        <strong>W</strong>ith all the hostages released and law enforcement outside, Hosea and Arthur came to the front of the bank to deliver the grim news that the heist had failed. The situation inside the bank had become increasingly untenable, and a violent confrontation with the police was imminent.
        <br><br>
        Faced with the divided opinions within the gang, you now had to choose between staying with Dutch and Micha, who wanted to stubbornly pursue the gold despite the odds, or siding with Arthur and Hosea, who advocated for a hasty escape while there was still a chance.
        `,
        exitTexts: ["Escape with Hosea and Arthur", "Take the gold with Micha and Dutch"],
        exitIds: [36,37]
    },
    {/* Front, Hostage, Ignore */
        id: 26,
        background: "url(img/Bank_Ignore.jpg)",
        desc: `<strong>F</strong>aced with the police's demands to release a hostage every five minutes, you chose to ignore their ultimatum and continued to hold the hostages. This decision signaled the gang's determination to maintain control over the situation and use the hostages as leverage during the heist.
        <br><br>
        Inside the bank, tension remained high as the hostages were kept under close watch by Dutch, Micha, and yourself. The police outside were growing increasingly impatient, and the risk of a violent confrontation loomed.
        <br><br>
        Ignoring the demands was a bold move, and it came with risks. The police could escalate their response, potentially leading to a siege or a breach of the bank's defenses. The gang's ability to hold out and make a successful escape with the stolen loot depended on their resolve and strategy.
        <br><br><br>
        <strong>At the Front of the Bank</strong>
        <br><br>
        <strong>W</strong>ith your choice of ignoring the police’s demands, the situation escalated dramatically. With the police now pushing into the bank and the situation rapidly deteriorating, you found yourself facing a critical decision: should you escape with Arthur and Hosea, who were making a run for it, or join Dutch and Micha in a desperate attempt to secure valuables from the vault?`,
        exitTexts: ["Fight for the money", "Escape with your gang"],
        exitIds: [38,39]
    },
    {/* Back, Hostage, Maintain */
        id: 27,
        background: "url(img/Bank_Maintain.webp)",
        desc: `<strong>W</strong>ith the stolen gold in hand and hostages under your control, you faced a critical decision that could determine the gang's fate and the success of the heist. The options were clear: you could attempt to use a hostage as a human shield to facilitate your escape, or you could abandon the hostage and make a run for it with the gold.`,
        exitTexts: ["Use the hostages to get out", "Try to escape with the gold out back"],
        exitIds: [40,41]
    },
    {
        id: 28,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Tell the gang about the police", "Escape on your own"],
        exitIds: [13,14]
    },
    {
        id: 29,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["", "Keep the train going"],
        exitIds: [15,16]
    },
    {
        id: 30,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Focus on looking for valuables", "Help out holding the hostages"],
        exitIds: [17,18]
    },
    {
        /* Back, Vault, Code */
        id: 31, //Silent bank, perfect end
        background: "url(img/Bank_robbing.jpg)",
        desc: `<strong>O</strong>pting for a more discreet and methodical approach, the gang decided to attempt to crack the code on the vault door. It was a risky endeavor that required finesse and precision, but it would allow them to access the vault without drawing attention from a loud explosion.
        <br><br>
        Hosea, with his experience in safecracking, stepped forward to examine the vault's lock. The gang members gathered around Hosea, their eyes fixed on his skilled hands as he delicately manipulated the lock. The atmosphere was tense, and every tick of the clock seemed to echo in the quiet room.
        <br><br>
        Arthur, always the voice of reason, reminded everyone to stay focused. Dutch, who had chosen this quieter approach, paced nervously, waiting for Hosea's expertise to yield results. As Hosea continued to work on the lock, the gang's anticipation grew. The success of the heist now depended on his skill and precision, and every passing moment brought them closer to their goal.
        <br><br>
        After what felt like an eternity, there was a faint click, and the vault door swung open. A collective sigh of relief swept through the gang as they realized that their patience and the careful decision to crack the code had paid off.
        <br><br><br>
        <strong>Inside of the Vault</strong>
        <br><br>
        <strong>W</strong>ith the vault door successfully opened through your careful efforts to crack the code, you now had a critical choice to make: should you take on the role of lookout to ensure the gang's safety during the heist, or should you join the gang in collecting the gold?
        <br><br>
        Choosing to go on lookout would mean keeping a watchful eye for any potential threats or unexpected surprises, helping to ensure that the gang could execute the heist smoothly without interference. This role would require vigilance and quick thinking.
        <br><br>
        On the other hand, opting to help the gang collect the gold would involve actively participating in securing the stolen riches. While this choice might contribute to the immediate success of the heist, it could also mean dividing your attention and potentially leaving the gang vulnerable to unexpected dangers.
        `,
        exitTexts: ["Go on lookout", "Get the gold"],//Escape or stay new
        exitIds: [42,43]
    },
    


    /*7th*/
    {/* Front, Vault, Explo/Code, Gold */
        id: 32,
        background: "url(img/Death2.jpg)",
        desc: `<strong>A</strong>s you made the decision to gather as much gold as possible from the vault, your determination to secure the riches was evident. However, the police's relentless pursuit and their swift entry into the bank and the vault led to a tragic outcome.
        <br><br>
        As law enforcement officers confronted you and your gang members, a violent confrontation erupted. Gunfire filled the vault as the police opened fire, and in the chaos that ensued, you and your fellow gang members were shot down.
        <br><br>
        The heist had come to a devastating end, leaving a trail of violence and tragedy in its wake. The stolen gold remained unrecovered, and the fate of the Van Der Linde gang members was sealed in this ill-fated endeavor. The decisions made during the heist had irrevocably shaped their destinies in the unforgiving and lawless land they called home.
        `,
        exitTexts: ["Play Again", "End"],
        exitIds: [0,0]
    },
    {/* Front, Vault, Explo/Code, Gang */
        id: 33,
        background: "url(img/Death2.jpg)",
        desc: `<strong>A</strong>s you left the gold behind and attempted to make a swift escape from the bank, the police outside wasted no time in opening fire. The hail of gunfire was relentless, and in the chaotic and violent confrontation that followed, you and your fellow gang members were tragically cut down.
        <br><br>
        The heist had ended in a devastating and fatal encounter with law enforcement, leaving no room for escape or survival. The stolen gold remained within the vault, and the future of the Van Der Linde gang had been abruptly and irreversibly altered by the tragic events that had unfolded.
        <br><br>
        The decisions made during the heist had led to a grim outcome, leaving a lasting mark on the lawless land in which the gang had operated, and sealing their fate in a violent and unforgiving world.
        `,
        exitTexts: ["Play Again", "End"],
        exitIds: [0,0]
    },
    {/* Back, Vault, Explo, Selfish */
        id: 34,
        background: "url(img/Death2.jpg)",
        desc: `<strong>F</strong>eeling the weight of the police response closing in and recognizing the danger of staying with the gang, you made the difficult decision to prioritize your own escape and survival. You knew that the situation was dire and that the chances of getting caught were high if you stayed with the gang.
        <br><br>
        With a heavy heart, you broke away from the group and made a frantic dash for the nearest exit, leaving the bank and the gang members behind. The sirens grew louder, and the flashing police lights painted the streets with an ominous glow as you desperately sought refuge.
        <br><br>
        Your heart raced as you navigated the labyrinthine streets, trying to elude the law enforcement officers in pursuit. The decision to save your own skin had been a difficult one, and you could only hope that the others would find a way to escape as well.
        <br><br>
        With the police hot on your tail, you lost your balance and stumbled, allowing the officers to quickly apprehend you.
        <br><br>
        However, the shock and horror awaited you as you were transported to a holding cell. There, you discovered the lifeless bodies of your fellow gang members on a cart, a grim reminder of the tragic consequences of the failed heist.
        <br><br>
        The sight of your dead comrades served as a haunting and sobering testament to the price paid for the relentless pursuit of wealth and the choices made during the heist. The future of the Van Der Linde gang had been shattered, and the road ahead looked bleak and uncertain in this unforgiving and lawless world.
        `,
        exitTexts: ["Play Again", "End"],
        exitIds: [0,0]
    },
    {/* Back, Vault, Explo, Gang */
        id: 35,
        background: "url(img/Death2.jpg)",
        desc: `<strong>U</strong>nderstanding that splitting up might increase the chances of some gang members getting caught, you chose to prioritize the gang's unity and safety. "We stick together," you declared firmly. "We've come this far as a team, and we'll get out of this together."
        <br><br>
        Dutch, the gang's charismatic leader, nodded in agreement. Arthur, always pragmatic, added, that they will have a better chance of escaping if they have each others backs
        <br><br>
        With the decision made to stick together, the gang members gathered the stolen loot and made a swift and coordinated exit from the bank. The sirens grew louder, and the police response was imminent, but the gang's determination to evade capture remained unwavering.
        <br><br>
        A few minutes later, the situation had taken a dire turn as you and the gang attempted to escape from the police, only to find yourselves cornered in a narrow alley. Desperation set in as you realized there was no way out.
        <br><br>
        Micha's plea for cooperation in exchange for the rest of the Van Der Linde gang's location had enraged Dutch, and in a shocking turn of events, Dutch coldly executed Micha with a gunshot to the head.
        <br><br>
        The gunshot acted as a signal for the police, who wasted no time in opening fire, ending the lives of you and your fellow gang members in an instant. The heist had come to a tragic and violent conclusion, with no escape and no chance for survival.
        <br><br>
        The decisions made during this fateful heist had led to devastating consequences, forever altering the course of the Van Der Linde gang and leaving an indelible mark on the history of this unforgiving and lawless land.
        `,
        exitTexts: ["Play Again", "End"],
        exitIds: [0,0]
    },
    {/* Front, Hostage, Comply, Escape */
        id: 36,
        background: "url(img/Death2.jpg)",
        desc: `<strong>C</strong>onsidering the escalating danger and the need for a swift and safe getaway, you made the difficult decision to go with Arthur and Hosea. Their more pragmatic approach seemed to offer the best chance of avoiding capture and preserving the gang's members' lives.
        <br><br>
        Hosea, the gang's strategist, nodded appreciatively. Arthur, always the voice of reason, added that it was the only sensible choice. Dutch and Micha, though enraged by the decision, ultimately relented and followed suit. The gang members made a swift exit from the bank, leaving the unattainable gold behind but with hopes of avoiding a catastrophic confrontation with law enforcement.
        <br><br>
        The fate of the Van Der Linde gang remained uncertain, but for now, your priority was survival and ensuring that you lived to fight another day in the lawless land you called home.
        <br><br>
        The decisions made during this heist had far-reaching consequences, and the path you chose would influence the gang's future and the course of your own journey in this unforgiving world.
        `,
        exitTexts: ["Play Again", "End"],
        exitIds: [0,0]
    },
     {/* Front, Hostage, Comply, Gold */
        id: 37,
        background: "url(img/Death2.jpg)",
        desc: `<strong>F</strong>eeling compelled to stick with Dutch and Micha despite the odds, you made the difficult decision to stay with them and pursue the gold despite the failed heist. Your loyalty to the gang and its leadership was unwavering.
        <br><br>
        Hosea and Arthur, disappointed but understanding, moved forward with their plan to escape. They knew the risks involved in remaining behind and chose the safer path. "Take care," Hosea told you as they departed.
        <br><br>
        The tension inside the bank remained high as Dutch and Micha were determined to stay and attempt to secure the gold, despite the police presence outside and the looming threat of a violent confrontation.
        <br><br>
        As the footsteps drew nearer, the tension in the vault was palpable. Dutch and Micha were determined to make the most of this opportunity, even as the police closed in. The prospect of riches was too alluring to pass up, and you knew the risks involved.
        <br><br>
        However, as the police entered the vault and discovered your presence, the situation quickly turned fatal. Without hesitation, the police officers opened fire, and in an instant, your life was cut short. The heist had come to a tragic and violent end, leaving the stolen gold behind and sealing your fate in this lawless and unforgiving world.
        <br><br>
        The decisions made during this heist had led to a devastating outcome, forever altering the course of the Van Der Linde gang and leaving an indelible mark on the history of this perilous land.
        `,
        exitTexts: ["Play Again", "End"],
        exitIds: [0,0]
    },
    {/* Front, Hostage, Ignore, Fight */
        id: 38,
        background: "url(img/Death2.jpg)",
        desc: `<strong>I</strong>n a high-stakes gamble for riches and loyalty, you chose to stay with Dutch and Micha in their desperate attempt to secure valuables from the vault. The allure of potential wealth was too tempting to resist, even in the face of imminent danger and the encroaching police presence.
        <br><br>
        As you joined Dutch and Micha in their pursuit of riches, the tension inside the bank reached its zenith. The police were closing in, and every second counted as you hurried to gather as many valuables as you could carry from the vault.
        <br><br>
        With the decision to gather as much gold as possible from the vault, your determination to secure the riches was evident. However, the police's relentless pursuit and their swift entry into the bank and the vault led to a tragic outcome.
        <br><br>
        As law enforcement officers confronted you and your gang members, a violent confrontation erupted. Gunfire filled the vault as the police opened fire, and in the chaos that ensued, you and your fellow gang members were shot down.
        <br><br>
        The heist had come to a devastating end, leaving a trail of violence and tragedy in its wake. The stolen gold remained unrecovered, and the fate of the Van Der Linde gang members was sealed in this ill-fated endeavor. The decisions made during the heist had irrevocably shaped their destinies in the unforgiving and lawless land they called home.        
        `,
        exitTexts: ["Play Again", "End"],
        exitIds: [0,0]
    },
    {/* Front, Hostage, Ignore, Escape */
        id: 39,
        background: "url(img/End_Escape1.webp)",
        desc: `<strong>R</strong>ecognizing the escalating danger and the need for a swift and safe escape, you made the difficult decision to prioritize your safety and join Arthur and Hosea in their escape from the bank.
        <br><br>
        As you followed Arthur and Hosea, you left behind Dutch and Micha in their desperate attempt to secure valuables from the vault. The police were closing in, and your focus was on avoiding capture and preserving your freedom.
        <br><br>
        The fate of the Van Der Linde gang remained uncertain, but for now, your priority was survival and ensuring that you lived to fight another day in the lawless land you called home.
        <br><br>
        The decisions made during this heist had far-reaching consequences, and the path you chose would influence the gang's future and the course of your own journey in this unforgiving world.        
        `,
        exitTexts: ["Play Again", "End"],
        exitIds: [0,0]
    },
    {/* Back, Hostage, Keep, Use */
        id: 40,
        background: "url(img/Death2.jpg)",
        desc: `<strong>I</strong>n a desperate and morally fraught attempt to use a hostage as a shield, you and the gang found yourselves in a perilous standoff with the police. The situation escalated rapidly, and the police, unwilling to negotiate, made the tragic decision to open fire.
        <br><br>
        The deafening sound of gunshots filled the air as a violent confrontation erupted. The police's determination to end the standoff resulted in dire consequences, and you and the gang were shot down in the midst of the chaos.
        <br><br>
        As the gunfire subsided, the bank's interior was marred by violence and tragedy. The stolen gold remained unclaimed, and the fate of the hostages and the gang members hung in the balance. The decisions made during the heist had led to a devastating outcome, shaping the future of the Van Der Linde gang and leaving an indelible mark on the lawless land in which they operated.            
        `,
        exitTexts: ["Play Again", "End"],
        exitIds: [0,0]
    },
    {/* Back, Hostage, Keep, Lose */
        id: 41,
        background: "url(img/End_Escape2.jpg)",
        desc: `<strong>W</strong>ith a heavy heart and the stolen gold in hand, you made the difficult decision to abandon the hostage and attempt a swift escape from the bank. However, as you exited the building, you were met with a grim reality—the police were waiting outside, ready for your gang's desperate exit.
        <br><br>
        A hail of gunfire erupted as law enforcement officers opened fire on your fleeing figure. The situation had escalated into a violent confrontation, and the bullets found their mark, bringing down your fellow gang members one by one.
        <br><br>
        Despite the chaos and the loss of your comrades, you managed to elude the police's relentless pursuit, making a desperate solo escape. The stolen gold was now your sole possession, and your fate in the unforgiving and lawless land remained uncertain.
        <br><br>
        The decisions made during the heist had led to a devastating outcome, leaving the Van Der Linde gang shattered and forever altered by the tragic events that had unfolded.                    
        `,
        exitTexts: ["Play Again", "End"],
        exitIds: [0,0]
    },
    {/* Back, Vault, Code, Lookout */
        id: 42,
        background: "url(img/Van_der_linde_gang.webp)",
        desc: `<strong>A</strong>fter considering the options, you decided to take on the role of lookout. Your priority was to safeguard the gang's safety and ensure that the heist proceeded without any interruptions or unwanted surprises. Hosea, the gang's strategist, gave you a nod of approval.
        <br><br>
        Positioned strategically, you kept a vigilant watch over the surroundings, your senses heightened for any signs of trouble. The gang members worked efficiently, collecting the stolen gold and securing it for a hasty getaway.
        <br><br>
        The heist was underway, and the weight of the riches within the vault beckoned. Time seemed to stretch on endlessly as you kept watch, the minutes feeling like hours.
        <br><br>
        Suddenly, a reassuring pat on your back brought you out of your intense focus. You turned to see Hosea and the rest of the gang, each carrying bags full of gold and riches. It was a moment of silent triumph as you realized the heist had been a success.
        <br><br>
        Without uttering a word, you all made your way out of the bank, careful not to draw any attention. The stolen loot was heavy, but it was a weight you were willing to bear for the promise of fortune.
        <br><br>
        As you rode off into the sunset with your gang, the stolen riches in tow, you couldn't help but feel a sense of satisfaction and relief. The decisions made during the heist had paid off, and for now, you had eluded the law and secured your ill-gotten gains in this lawless land, setting the stage for new adventures and challenges for the Van Der Linde gang.                            
        `,
        exitTexts: ["Play Again", "End"],
        exitIds: [0,0]
    },
    {/* Back, Vault, Code, Gold */
    id: 43,
    background: "url(img/Bank_Vault_Inside.jpg)",
    desc: `<strong>Inside the Vault</strong>
    <br><br>
    <strong>W</strong>ith the sound of approaching footsteps signaling your discovery, you faced a critical decision that could determine your fate in this high-stakes heist. The options were clear: escape with Arthur and Hosea for a chance at survival, or stay with Dutch and Micha in a desperate attempt to secure the gold.                            
    `,
    exitTexts: ["Escape with Hosea and Arthur", "Take the gold with Micha and Dutch"],
    exitIds: [44,45]
},
{/* Back, Vault, Code, Gold, Escape */
id: 44,
background: "url(img/End_Escape1.webp)",
desc: `<strong>R</strong>ecognizing the escalating danger and the need for a swift escape, you made the difficult decision to prioritize your safety and join Arthur and Hosea in their escape from the bank.
<br><br>
As you followed Arthur and Hosea, leaving behind Dutch and Micha in their desperate attempt to secure the gold, the sirens wailed in the distance, and the fate of the stolen riches remained uncertain.                 
`,
exitTexts: ["Play Again", "End"],
exitIds: [0,0]
},
{/* Back, Vault, Code, Gold, Gold */
id: 45,
background: "url(img/Death2.jpg)",
desc: `<strong>I</strong>n a high-stakes gamble for wealth and loyalty, you made the daring decision to stay with Dutch and Micha in their desperate attempt to secure the gold, despite the imminent danger and the approaching law enforcement.
<br><br>
As the footsteps drew nearer, the tension in the vault was palpable. Dutch and Micha were determined to make the most of this opportunity, even as the police closed in. The prospect of riches was too alluring to pass up, and you knew the risks involved.
<br><br>
However, as the police entered the vault and discovered your presence, the situation quickly turned fatal. Without hesitation, the police officers opened fire, and in an instant, your life was cut short. The heist had come to a tragic and violent end, leaving the stolen gold behind and sealing your fate in this lawless and unforgiving world.
<br><br>
The decisions made during this heist had led to a devastating outcome, forever altering the course of the Van Der Linde gang and leaving an indelible mark on the history of this perilous land.                         
`,
exitTexts: ["Play Again", "End"],
exitIds: [0,0]
},
{/* TB, u suck! */
id: 46,
background: "url(img/Death2.jpg)",
desc: `<strong>Y</strong>ou suddenly collapsed to the ground, wracked by a violent fit of coughing.
<br><br>
The gang gathered around you, their expressions filled with concern and fear. It was a scene of utter helplessness as you struggled to breathe, your body wracked by the debilitating effects of tuberculosis.
<br><br>
Your fellow gang members, who had faced danger and adversity together, now watched in shock as you succumbed to this deadly disease. Despite their efforts to provide comfort and aid, there was nothing they could do to save you from the relentless grip of tuberculosis.
<br><br>
In this unforgiving and lawless land, even the strongest and most determined could fall victim to the merciless forces of nature and illness. Your sudden and untimely death served as a stark reminder of the harsh realities faced by the Van Der Linde gang, a group bound together by loyalty and the pursuit of fortune, but ultimately vulnerable to the whims of fate..                         
`,
exitTexts: ["Play Again", "End"],
exitIds: [0,0]
},


    
    
];

let TB = false;
showRoom();


function showRoom() {
    if(TB == true){
        currentRoom = 46;
        TB = false;
    }
    desc.innerHTML = rooms[currentRoom].desc;
    alt1.innerHTML = rooms[currentRoom].exitTexts[0];
    alt2.innerHTML = rooms[currentRoom].exitTexts[1];
    document.getElementById("BackBody").style.backgroundImage = rooms[currentRoom].background;
    
    if(Math.floor(Math.random() * (501)) == 13){
        TB = true;
    }
    visitedRooms.push(currentRoom);
    console.log(visitedRooms);
    console.log(currentRoom);
    if (currentRoom == 0) {
        visitedRooms = [0];
    }
}

function displayCurrentElement() {
    let currentIndex = visitedRooms.length - 2;
    currentRoom = visitedRooms.length - 2;


    console.log(visitedRooms);
    if (currentIndex >= 0) {


        desc.innerHTML = rooms[visitedRooms[currentIndex]].desc;
        alt1.innerHTML = rooms[visitedRooms[currentIndex]].exitTexts[0];
        alt2.innerHTML = rooms[visitedRooms[currentIndex]].exitTexts[1];
        document.getElementById("BackBody").style.backgroundImage = rooms[visitedRooms[currentIndex]].background;
        visitedRooms.pop(currentIndex);

    console.log(visitedRooms[currentIndex]);
    }


}

function displayStats() {
    console.log(currentRoom, currentStatus);

}

function room1() {
    console.log("Left");
    currentRoom = rooms[currentRoom].exitIds[0];
    showRoom();
    
}

function room2() {
    console.log("Right")
    currentRoom = rooms[currentRoom].exitIds[1];
    showRoom();
}

















































































