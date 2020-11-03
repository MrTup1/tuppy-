const Discord = require('discord.js');
const db = require('quick.db');
const ms = require(`parse-ms`);

let questions = [
  {
    title: "Who was the Prime Minister of France that signed the Treaty of Versailles ",
    options: ["Woodrow Wilson", "Aristide Briand", "Lexandre Ribot", "Georges Clemenceau"],
    correct: 4,
  },
  {
    title: "Who was the Premier of the Soviet Union in 1940",
    options: ["Joseph Stalin", "Vladimir Lenin", "Mikhail Gorbachev", "Rasputin"],
    correct: 1,
  },
  {
    title: "Which general got fired because he wanted to fire nukes at China in the Korean War?",
    options: ["Dwight D Eisenhower", "Georgy Zhukov", "George S Patton", "Douglas McArthur"],
    correct: 4,
  },
  {
    title: "Which battle happened directly as a result of the bombings in Pearl Harbour during 1941",
    options: ["D-Day", "Battle of Midway", "Battle of Berlin", "Battle of The Buldge"],
    correct: 2,
  },
  {
    title: "Which battle in WW2 resulted in the most casualties?",
    options: ["Battle of Normandy", "Battle of Stalingrad", "Siege of Paris", "Battle of Okinawa"],
    correct: 2,
  },
  {
    title: "Who was the president of the United States when the two atomic bombs were dropped in Japan in 1945?",
    options: ["Dwight D Eisenhower", "John F Kennedy", "Harry S Truman", "Franklin D Roosevelt"],
    correct: 3,
  },
  {
    title: "Which country suffered the most casualties during WW2?",
    options: ["The United States of America", "Nazi Germany", "The Soviet Union", "Republic of China"],
    correct: 3,
  },
  {
    title: "Which country was neutral during WW2?",
    options: ["Romania", "Hungary", "Australia", "Sweden"],
    correct: 4,
  },
  {
    title: "Which country was neutral during WW2?",
    options: ["Romania", "Hungary", "Australia", "Sweden"],
    correct: 4,
  },
  {
    title: "Which country launched the first person into space? ",
    options: ["The Soviet Union", "The United States of America", "China", "United Kingdom"],
    correct: 1,
  },
  {
    title: "What were the Nazi 'lightning war' tactics which conquered Denmark, Norway, Holland, Belgium and France in April-June 1940 called? ",
    options: ["The Blitz", "Blitzkrieg", "Operation Barbarossa", "The Shield"],
    correct: 2,
  },
  {
    title: "What was the Phoney War? ",
    options: ["The Nazis conquered Denmark", "The quiet period between September 1939 and April 1940", "Chamberlain and Daladier negotiated with Hitler", "When The Japanese bombed Pearl Harbour"],
    correct: 2,
  },
  {
    title: "Which war did the USSR fought in 1939",
    options: ["The Winter War", "The Siege of Leningrad", "Battle of Berlin", "Battle of Moscow"],
    correct: 1,
  },
  {
    title: "What happened at Dunkirk in May 1940?",
    options: ["British forces retreated across the English Channel", "The French army lost a major battle", "German forces were defeated in a large naval battle", "American forces invaded France"],
    correct: 1,
  },
  {
    title: "What was Italy’s primary role in WW2?",
    options: ["It helped Germany in accomplishing its main objectives", "It was helpful to Britain", "It caused problems for Japan", "It distracted Germany from accomplishing its main objectives"],
    correct: 4,
  },

  
];

module.exports = {
  name: "historytrivia",
  description: "Test your knowledge!",

  async execute (message, args) {

    let timeout = 30000;
    let user = message.author
    let historytrivia= await db.fetch(`historytrivia_${message.guild.id}_${user.id}`);


    if(historytrivia !== null && timeout - (Date.now() - historytrivia) > 0 ) {
      let time = ms(timeout - (Date.now() - historytrivia));

      return message.channel.send(`You big brain gotta calm down. Come back in ${time.hours}h, ${time.minutes}m, and ${time.seconds}s`)

    } else {
      let q = questions[Math.floor(Math.random() * questions.length)];
      let i = 0;
      const Embed = new Discord.MessageEmbed()
        .setTitle(q.title)
        .setDescription(
          q.options.map((opt) => {
            i++;
            return `${i} - ${opt}\n`;
          })
        )
        .setColor(`GREEN`)
        .setFooter(
          `Reply to this message with the correct question number! You have 15 seconds.`
        );
      await message.channel.send(Embed);
      let msgs = await message.channel.awaitMessages(

        () => { return true; },

        { time: 15000, max: 1, errors: ["time"] }

      )
      .then(msgs => {
        if (msgs.first().content == q.correct) {
          let amount = Math.floor(Math.random() * 250) + 1;

          message.channel.send(`Wow you lightning smart!`);
          db.add(`money_${message.guild.id}_${user.id}`, amount);
          db.set(`historytrivia_${message.guild.id}_${user.id}`, Date.now());
          message.channel.send(`Successfully earned **${amount}** coins just from learning some history, nice bucks you got there`)

        } else {
          message.channel.send(`I'm sorry my dude, you got it wrong`);
          db.set(`historytrivia_${message.guild.id}_${user.id}`, Date.now());
        }
      })
      .catch(() => {

        return message.channel.send(`Seriously, slowpoke?`);

      });

      
    }

    
  },
};