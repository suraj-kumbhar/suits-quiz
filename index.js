let readlineSync = require('readline-sync');
let chalk = require('chalk');
const log = console.log
const headingLog = chalk.magenta.bold;
const questionLog = chalk.bold.cyan;
const correctLog = chalk.green;
const wrongLog = chalk.red;
const questionLogBlue = chalk.blue.bold;




let questions = [
    {
        'id': 1,
        'question': 'Suits is set in a fictional law firm in ________?',
        'options': ['Atlanta',
            'New York City',
            'Austin',
            'Chicago',],
        'answer': 'New York City',
        'fact': 'There are more lawyers than there are jobs for lawyers in NYC and beyond.',
        'hint': 'In the Big Apple!'
    },
    {
        'id': 2,
        'question': "Who is the female shark in charge of the 'Suits' law firm?",
        'options': ['Rachel Zane',
            'Donna Paulsen',
            'Donna Paulsen',
            'Jessica Pearson'],
        'answer': 'Jessica Pearson',
        'fact': 'Before she became named partner at Pearson Hardman, she was an associate at Gordon Schmidt Van Dyke.',
        'hint': 'Jessica is her first name.'
    },
    {
        'id': 3,
        'question': 'Who lands an interview with Harvey Specter after he runs from a drug deal gone bad?',
        'options': ['Jack Soloff',
            'Sean Cahill',
            'Mike Ross',
            'Jeff Malone'],
        'answer': 'Mike Ross',
        'fact': 'Mike is a brilliant college drop-out who growing up, lived with his grandmother after his parents died in a car crash.',
        'hint': 'Mike is the right pick!'
    },
    {
        'id': 4,
        'question': 'The firm hires law graduates from ________?',
        'options': ['Columbia',
            'Yale',
            'Harvard',
            'Stanford'],
        'answer': 'Harvard',
        'fact': 'Founded in 1817, Harvard Law School is one of the preeminent centers of legal education in the world.',
        'hint': 'Harvard is the correct university.'
    },
    {
        'id': 5,
        'question': "_____ is the firm's expert on all financial matters?",
        'options': ['Robert Zane',
            'Charles Forstman',
            'Jeff Malone',
            'Louis Litt'],
        'answer': 'Louis Litt',
        'fact': 'Louis is overly pedantic, jealous to the point of paranoia, highly suspicious, snobbish, and cruel. However, he is very loyal to those he loves.',
        'hint': 'Litt it up!'
    },
    {
        'id': 6,
        'question': 'Louis has a rivalry with _______?',
        'options': ['Harvey',
            'Jack',
            'Jenny',
            'Charles'],
        'answer': 'Harvey',
        'fact': "Louis is particularly jealous of Harvey's success and feels that his own contributions to the firm have been overlooked as a result.",
        'hint': 'Harvey raises his hand!'
    },
    {
        'id': 7,
        'question': 'Mike Ross is not an actual ________?',
        'options': ['Lawyer',
            'Detective',
            'Financial consultant',
            'Doctor'],
        'answer': 'Lawyer',
        'fact': 'Mike dropped out of college and never passed the bar in his own name.',
        'hint': 'Mike never went to law school.'
    },
    {
        'id': 8,
        'question': 'Harvey Specter is a brilliant __________ lawyer?',
        'options': ['Corporate litigation',
            'Trial',
            'Consumer',
            'Criminal'],
        'answer': 'Corporate litigation',
        'fact': 'A lawyer starting out in corporate litigation can make an average of $160,000/year.',
        'hint': 'Big business is where he makes his money.'
    },
    {
        'id': 9,
        'question': "'Suits' first aired in _____?",
        'options': ['2011',
            '2012',
            '2013',
            '2014'],
        'answer': '2011',
        'fact': "'Suits' premiered on June 23, 2011.",
        'hint': '2012 is too late!'
    },
    {
        'id': 10,
        'question': "Harvey's unusual middle name is _______?",
        'options': ['Eugene',
            'Martha',
            'Reginald',
            'Sidwell'],
        'answer': "Reginald",
        'fact': "Harvey doesn't like to use his middle name.",
        'hint': 'It starts with an "R."'
    },
    {
        'id': 11,
        'question': "Who is Harvey's 'in the know' assistant?",
        'options': ['Rachel Zane',
            'Jessica Pearson',
            'Donna Paulsen',
            'Dana Scott'],
        'hint': 'Patrick won the role!',
        'answer': 'Donna Paulsen',
        'fact': 'Donna is extremely perceptive, with the inside scoop of all the comings and goings at the firm and a razor sharp wit, she is admired and feared by both associates and partners alike.',
    },
    {
        'id': 12,
        'question': 'Who plays Mike Ross?',
        'options': ['D.B. Woodside',
            'Patrick J. Adams',
            'Wendell Pierce',
            'Gary Cole'],
        'hint': 'Patrick won the role!',
        'answer': 'Patrick J. Adams',
        'fact': "'Patrick can be seen as Rex Tyler/Hourman in the TV series 'Legends of Tomorrow.'",
    },
    {
        'id': 13,
        'question': 'After working 12 years for Harvey, Donna briefly goes to work for __________?',
        'options': ['Louis Litt',
            'Robert Zane',
            'Ava Hessington',
            'Logan Sanders'],
        'hint': 'Louis loves Donna.',
        'answer': 'Louis Litt',
        'fact': 'Louis fires Donna so that she could go back to work for Harvey.',
    },
    {
        'id': 14,
        'question': "How does Louis figure out that Mike didn't attend Harvard?",
        'options': ['Order of the Coif key',
            'Pudding',
            'Knight of Columbus',
            'Key Largo'],
        'hint': "It's in the Coif!",
        'answer': 'Order of the Coif key',
        'fact': "Mike didn't recognize Louis's Order of the Coif key and that set Louis off on a mission to prove that Mike is a fraud.",
    },
    {
        'id': 15,
        'question': "What is Louis's catchphrase?",
        'options': ['Got ya.',
            'Litt My Fire.',
            'You Just Got Litt Up.',
            'Get A Lawyer.'],
        'hint': 'Litt Up is the right one!',
        'answer': 'You Just Got Litt Up.',
        'fact': 'In episode "Bad Faith" he got it registered as a trademark and also received mugs with printing You Just Got Litt Up.',
    },
    {
        'id': 16,
        'question': 'Whose ashes does Louis have in his office?',
        'options': ['Donna',
            'Jessica',
            'Norma',
            'Harvey'],
        'hint': 'Norma never left his side!',
        'answer': 'Norma',
        'fact': "Norma became Louis's executive assistant when he was a junior partner. After Norma dies taking care of her sister, her wishes were to have Louis keep her ashes.",
    },
    {
        'id': 17,
        'question': 'Mike Ross is engaged to _________?',
        'options': ['Sheila Sazs',
            'Jenny Griffith',
            'Anita Gibbs',
            'Rachel Zane'],
        'hint': "When they meet she's a paralegal.",
        'answer': 'Rachel Zane',
        'fact': 'Rachel worked as a paralegal for five years before finally achieving an LSAT score high enough for Columbia Law School.',
    },
    {
        'id': 18,
        'question': 'Who plays Harvey Specter?',
        'options': ['Paul Schulze',
            'Erik Palladino',
            'Gabriel Macht',
            'Glenn Plummer'],
        'hint': 'Gabriel is the one!',
        'answer': 'Gabriel Macht',
        'fact': "Gabriel got his first break in show business at age eight by playing Jeorge in 'Why Would I Lie?'",
    },
    {
        'id': 19,
        'question': 'Who is the senior SEC official that Harvey butts head with on more than one occasion?',
        'options': ['Edward Darby',
            'Travis Tanner',
            'Sean Cahill',
            'Tony Gionopoulos'],
        'hint': 'Sean for the win!',
        'answer': 'Sean Cahill',
        'fact': "Sean Cahill is played by Neal McDonough who can be heard voicing Charles Sumner in 'The Gettysburg Address.'",
    },
    {
        'id': 20,
        'question': 'Five years before the events in the series, who embezzles money from the firm?',
        'options': ['Daniel Hardman',
            'Tony Gionopoulos',
            'Nigel Nesbitt',
            'Travis Tanner'],
        'hint': 'Hardman is the crook!',
        'answer': 'Daniel Hardman',
        'fact': 'Daniel Hardman is the co-founder of Pearson Hardman, former managing partner, and former mentor of Jessica. He embezzled the money for his affair with a colleague while his wife was dying of cancer.',
    },
    {
        'id': 21,
        'question': 'How did the firm get Daniel to resign?',
        'options': ['A bribe.',
            'A death.',
            'A threat.',
            'A paper.'],
        'hint': 'Threat is it!',
        'answer': 'A threat.',
        'fact': "Harvey forced Daniel to resign and name Jessica as his successor by threatening to tell Alicia about the affair. Daniel resigns to prevent his wife's distress.",
    },
    {
        'id': 22,
        'question': 'Whose father is a named partner in a competing firm?',
        'options': ['Travis Tanner',
            'Mike Ross',
            'Donna Paulsen',
            'Rachel Zane'],
        'hint': 'Rachel is the lucky one.',
        'answer': 'Rachel Zane',
        'fact': "Rachel's father, Robert Zane, is a name partner at Rand, Calder, and Zane.",
    },
    {
        'id': 23,
        'question': 'Who plays Louis Litt?',
        'options': ['Gabriel Macht',
            'Rick Hoffman',
            'Patrick J. Adams',
            'Max Topplin'],
        'hint': 'Rick smile!',
        'answer': 'Rick Hoffman',
        'fact': "Before playing Louis, Rick played Jerry Best in 'The Bernie Mac Show,' and Chase Chapman in 'Samantha Who?'",
    },
    {
        'id': 24,
        'question': 'What law exam did Mike charge to take for others?',
        'options': ['LSAT',
            'SAT',
            'ACT',
            'GRE'],
        'hint': '"L" is for law.',
        'answer': 'LSAT',
        'fact': 'The Law School Admission Test is a half-day standardized test administered four times each year that when passed, students can apply to law schools.',
    },
    {
        'id': 25,
        'question': "Who was Mike's best friend and the drug dealer that sent him on the deal that went bad?",
        'options': ['Trevor Evans',
            'Harold Gunderson',
            'Logan Sanders',
            'Edward Darby'],
        'hint': 'Trevor is the sneaky one.',
        'answer': 'Trevor Evans',
        'fact': 'When the series first starts, Trevor is a marijuana dealer and a computer programmer of dubious skill. After Mike works with Harvey. Trevor and Mike part ways.',
    },
    {
        'id': 26,
        'question': 'Who plays Donna Paulsen?',
        'options': ['Diane Neal',
            'Tricia Helfer',
            'Carly Pope',
            'Sarah Rafferty'],
        'hint': 'Sarah is Donna!',
        'answer': 'Sarah Rafferty',
        'fact': "Sarah got her start on TV in 1998 by playing Sarah in the movie 'Trinity.'",
    },
    {
        'id': 27,
        'question': "When Mike's arrested for not being a lawyer, he's charged with ________?",
        'options': ['Conspiracy to commit fraud',
            'Assault',
            'Murder',
            'Racketeering'],
        'hint': 'Fraud is it!',
        'answer': 'Conspiracy to commit fraud',
        'fact': 'In criminal law, a conspiracy is an agreement between two or more persons to commit a crime at some time in the future.',
    },
    {
        'id': 28,
        'question': "How long is Mike's prison sentence?",
        'options': ['1 year',
            '2 years',
            '3 years',
            '4 years'],
        'hint': 'Meghan raises her hand!',
        'answer': '2 years',
        'fact': "Mike doesn't last two years in prison. Harvey works it out so that Mike's sprung early.",
    },
    {
        'id': 29,
        'question': 'Who plays Rachel Zane?',
        'options': ['Tricia Helfer',
            'Gina Holden',
            'Amy Acker',
            'Meghan Markle'],
        'hint': 'Meghan raises her hand!',
        'answer': 'Meghan Markle',
        'fact': "Before playing Rachel Zane, Meghan played Jill in 'General Hospital' and Junior FBI Agent Amy Jessup in 'Fringe.'",
    },
    {
        'id': 30,
        'question': 'Who is the inmate that gives Mike a rough time in prison?',
        'options': ['Nick Rinaldi',
            'Frank Gallo',
            'Victor',
            'Thomas Walsh'],
        'hint': 'Frank is one nasty guy.',
        'answer': 'Frank Gallo',
        'fact': 'Harvey put away Frank for racketeering even though he should have been put away for murder.',
    },
]

let leaderBoard = [
    {
        'name': 'Suraj',
        'score': 120
    },
    {
        'name': 'Shivam',
        'score': 75
    },
    {
        'name': 'Abhinav',
        'score': 105
    },
    {
        'name': 'Tej',
        'score': 15
    },
    {
        'name': 'Sunhy',
        'score': 20
    },
    {
        'name': 'Jacky',
        'score': 25
    },
    {
        'name': 'Ashish',
        'score': 70
    },
    {
        'name': 'Tanay',
        'score': 80
    },
    {
        'name': 'Jane',
        'score': 95
    },
    {
        'name': 'Mary',
        'score': 10
    },
]

let play = (name) => {

    let score = 0;
    let askQuestion = (questionSet) => {
        question = questionSet['question'];
        answer = questionSet['answer'];
        options = questionSet['options'];
        hint = questionSet['hint'];
        fact = questionSet['fact'];

        console.log(correctLog(`Score : ${score}\n`))
        console.log(`---- Question ----\n`)
        console.log(`${questionLog(question)}`);
        console.log();
        for (let i = 0; i < 4; i++) {
            console.log(`[${String.fromCharCode(i + 'a'.charCodeAt(0))}] ${options[i]}`)
        }
        console.log();
    }

    let compare = (object1, object2) => {
        if (object1.score > object2.score) {
            return -1;
        }
        else if (object1.score < object2.score) {
            return 1;
        }
        return 0;
    }

    let scoreDisplay = (name, round = 2) => {
        console.clear();
        log(headingLog(`🕴  ---- SUITS QUIZ ---- 🕴  \n`));
        console.log(`\n🥳  Thank you ${questionLog(name)} for trying the game! 🥳\n`);
        if (round === 0) {
            log(`Minimum Score required to qualify to ${wrongLog(`Round 2`)} is ${correctLog(`25`)}\n`);
        }
        else if (round === 1) {
            log(`Minimum Score required to qualify to ${wrongLog(`Round 3`)} is ${correctLog(`55`)}\n`);
        }
        newScore = {}
        newScore['name'] = name;
        newScore['score'] = score;
        leaderBoard[leaderBoard.length] = newScore;
        leaderBoard.sort(compare);
        let flag = false
        for (let k = 0; k < leaderBoard.length && k < 5; k++) {
            if (name === leaderBoard[k].name && score === leaderBoard[k].score) {
                console.log(`Your score is 🎉  ${correctLog(score)} 🎉\nYou are our new ${k + 1}${k === 0 ? `st` : k === 1 ? `nd` : k === 2 ? `rd` : `th`} high scorer.`);
                flag = true;
                break;
            }
        }
        if (!flag) {
            console.log(`Your score is 🎉  ${correctLog(score)} 🎉`);
        }
        log(headingLog(`\n🎯  ---- LEADER BOARD ---- 🎯\n`));
        for (let k = 0; k < leaderBoard.length && k < 5; k++) {
            console.log(`${k + 1}.    ${wrongLog(leaderBoard[k].name)} => ${correctLog(leaderBoard[k].score)} ${k === 0 ? `👑 👑 👑` : k === 1 ? `👑 👑` : k === 2 ? '👑' : ``}\n`);
        }
        console.log(`\n${wrongLog(`Note :`)} The leader board is non presistent. Please reachout to ${correctLog(`surajkannankumbhar@gmail.com`)} with the screenshot of the your score to get featured permanently on the leader board.`)
        return;
    }

    let questionIdList = []
    abort = false
    for (let i = 0; i < 3 && !abort; i++) {
        for (let j = 0; j < (5 - i) && !abort; j++) {
            console.clear();
            log(headingLog(`🕴  ---- SUITS QUIZ ---- 🕴  \n`));
            console.log(`\nRound ${i + 1} | Question ${j + 1}                                       ${wrongLog(`[x]=Exit`)}\n`);
            let questionId = Math.floor(Math.random() * (30));
            while (questionIdList.includes(questionId)) {
                questionId = Math.floor(Math.random() * (30));
            }
            questionIdList[questionIdList.length] = questionId;
            questionSet = questions[questionId];
            askQuestion(questionSet);
            let input = readlineSync.question(questionLogBlue('Please enter the correct option : '));
            if (input === 'x') {
                scoreDisplay(name, 2);
                abort = true;
                return;
            }
            else if (options[input.charCodeAt(0) - 97] === questionSet['answer']) {
                console.log(correctLog(`\n✅  Correct Answer 🎉\n`));
                console.log(`Fun Fact : ${questionSet['fact']}\n`)
                score += 10;
            }
            else {
                console.log(`${wrongLog(`\n❌  Oops Wrong Answer`)}\n${correctLog(`The correct Answer is : ${questionSet['answer']}`)}\n`)
                console.log(`Fun Fact : ${questionSet['fact']}\n`)
                score -= 5;
            }
            if (i === 2 && j === 2) {
                scoreDisplay(name, 2);
                abort = true;
                return;
            }
            console.log(wrongLog(`[c]=Continue                                                  [x]=Exit`));
            let lastInput = readlineSync.question(questionLogBlue('Please enter your choice : '));
            if (lastInput === 'x') {
                scoreDisplay(name, 2);
                abort = true;
                return;
            }
        }
        if (i === 0 && score < 25) {
            scoreDisplay(name, 0);
            abort = true;
            return;
        }
        else if (i === 1 && score < 55) {
            scoreDisplay(name, 1);
            abort = true;
            return;
        }
    }
}

let intro = () => {
    log(headingLog(`🕴  ---- SUITS QUIZ ---- 🕴  \n`));
    let name = readlineSync.question(questionLogBlue('May I have your name: '));
    console.clear();
    log(headingLog(`🕴  ---- SUITS QUIZ ---- 🕴  \n`));
    log(`Hey ${questionLog(name)}, Welcome to the game. \n`)
    console.log(`🚨  _________________Rules____________________ 🚨\n`)
    console.log(`✅  +10 for every correct answer.\n✅  -5 for every wrong answer.\n✅  Hit [x] to exit the game.\n✅  Minimum score of 25 required to continue to Round 2.\n✅  Minimum score of 55 required to continue to Round 3.\n`)
    log(wrongLog(`[c]=Continue                                                  [x]=Exit`))
    let input = readlineSync.question(questionLogBlue('Please enter your choice : '));
    if (input === 'x') {
        console.clear();
        log(headingLog(`🕴  ---- SUITS QUIZ ---- 🕴  \n`));
        console.log(`\n🥳  Thank you ${headingLog(name)} for trying the game! 🥳\n`);
        return;
    }
    else {
        play(name);
    }
}

intro();