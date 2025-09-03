const gameData = {
    elements: [
        {name: "ברזל (Fe)", symbol: "⚙️"},
        {name: "חמצן (O₂)", symbol: "💨"},
        {name: "מים (H₂O)", symbol: "💧"},
        {name: "פחמן (C)", symbol: "◼️"},
        {name: "זהב (Au)", symbol: "✨"},
        {name: "כסף (Ag)", symbol: "🌟"},
        {name: "נחושת (Cu)", symbol: "🟫"},
        {name: "אלומיניום (Al)", symbol: "🔲"},
        {name: "גופרית (S)", symbol: "🟡"},
        {name: "מגנזיום (Mg)", symbol: "⚪"}
    ],
    
    processes: [
        {name: "חימום", symbol: "🔥"},
        {name: "חימצון", symbol: "🌬️"},
        {name: "קירור", symbol: "❄️"},
        {name: "הקפאה", symbol: "🧊"},
        {name: "התכה", symbol: "♨️"}
    ],

    reactions: {
        "ברזל (Fe)": {
            "חימום": "הברזל מתרחב ונשאר מוצק",
            "חימצון": "נוצרת חלודה כתומה לאורך זמן",
            "קירור": "הברזל מתכווץ",
            "הקפאה": "הברזל הופך קשה יותר",
            "התכה": "מותך - הופך לנוזל"
        },
        "חמצן (O₂)": {
            "חימום": "הגז מתרחב",
            "חימצון": "גורם לחימצון של חומרים אחרים",
            "קירור": "הגז מתכווץ",
            "הקפאה": "הופך לחמצן נוזלי כחול",
            "התחממות": "הגז מתרחב עוד יותר",
            "התכה": "לא רלוונטי - כבר גז"
        },
        "מים (H₂O)": {
            "חימום": "רותחים - הופכים לאדי מים",
            "חימצון": "לא מתחמצן",
            "קירור": "הטמפרטורה יורדת",
            "הקפאה": "הופך לקרח",
            "התחממות": "הטמפרטורה עולה",
            "התכה": "קרח הופך למים"
        },
        "פחמן (C)": {
            "חימום": "מתרחב ויכול להפוך ליהלום",
            "חימצון": "נוצר פחמן דו-חמצני",
            "קירור": "הפחמן מתכווץ",
            "הקפאה": "הופך קשה מאוד",
            "התחממות": "מתרחב ומשנה מבנה",
            "התכה": "מותך בטמפרטורה גבוהה מאוד"
        },
        "זהב (Au)": {
            "חימום": "מתרחב ונשאר מוצק",
            "חימצון": "לא מתחמצן",
            "קירור": "מתכווץ מעט",
            "הקפאה": "הופך קשה יותר",
            "התחממות": "מתרחב ורך יותר",
            "התכה": "מותך - הופך לנוזל זהוב"
        },
        "כסף (Ag)": {
            "חימום": "מתרחב ונשאר מוצק",
            "חימצון": "מתחמצן לאט - משחיר",
            "קירור": "מתכווץ",
            "הקפאה": "מתפרק",
            "התכה": "מותך בטמפרטורה גבוהה"
        },
        "נחושת (Cu)": {
            "חימום": "מתרחבת ונשארת מוצקת",
            "חימצון": "נוצרת שכבה ירוקה (פטינה)",
            "קירור": "מתכווצת",
            "הקפאה": "הופכת קשה יותר",
            "התכה": "מותכת בטמפרטורה גבוהה"
        },
        "אלומיניום (Al)": {
            "חימום": "מתרחב ויכול להישרף",
            "חימצון": "נוצרת שכבה דקה מגנה",
            "קירור": "מתכווץ",
            "הקפאה": "הופך קשה יותר",
            "התכה": "מותך בטמפרטורה נמוכה יחסית"
        },
        "גופרית (S)": {
            "חימום": "נשרפת עם ריח חזק",
            "חימצון": "נוצרת גופרית דו-חמצנית",
            "קירור": "מתקשה",
            "הקפאה": "הופכת למוצק יציב",
            "התכה": "מותכת - הופכת לנוזל"
        },
        "מגנזיום (Mg)": {
            "חימום": "נשרף באור לבן בוהק",
            "חימצון": "מתחמצן מהר ונוצרת אבקה לבנה",
            "קירור": "מתכווץ",
            "הקפאה": "הופך קשה מאוד",
            "התכה": "מותך בטמפרטורה גבוהה"
        }
    },
    
    explanations: {
        "ברזל (Fe)": {
            "חימום": "כשמחממים ברזל, המולקולות שלו נעות מהר יותר והמתכת מתרחבת. הברזל נשאר במצב מוצק אבל תופס יותר מקום. זהו שינוי פיזיקלי הפיך.",
            "חימצון": "חימצון של ברזל באוויר הוא תהליך איטי שמתרחש לאורך זמן. הברזל מגיב עם חמצן ולחות ויוצר חלודה כתומה (תחמוצת ברזל לחה). זהו סוג של קורוזיה שהורס את המתכת.",
            "קירור": "כשמקררים ברזל, המולקולות שלו נעות לאט יותר והמתכת מתכווצת. זהו שינוי פיזיקלי - הברזל נשאר ברזל, רק בנפח קטן יותר.",
            "הקפאה": "ברזל הופך קשה יותר בטמפרטורות נמוכות מאוד. המבנה הגבישי שלו הופך יציב יותר והמתכת חזקה יותר מכיוון שהתנועה המולקולרית מאטה.",
            "התכה": "בטמפרטורה של 1538°C הברזל נמס והופך לנוזל. זהו שינוי מצב צבירה מוצק לנוזל. הברזל המותך משמש לייצור פלדה ויציקות."
        },
        "חמצן (O₂)": {
            "חימום": "כשמחממים חמצן (גז), המולקולות שלו נעות מהר יותר והגז מתרחב. הנפח גדל באותו לחץ, או שהלחץ עולה באותו נפח.",
            "חימצון": "חמצן הוא החומר שגורם לחימצון של חומרים אחרים. הוא מתחבר לחומרים ויוצר תחמוצות - כמו חלודה בברזל או השחרה בכסף.",
            "קירור": "כשמקררים חמצן, המולקולות שלו נעות לאט יותר והגז מתכווץ. הנפח קטן יותר באותו לחץ.",
            "הקפאה": "בטמפרטורה של -218°C החמצן הופך לנוזל כחול יפה. זהו שינוי מצב מגז לנוזל - תופעה שמשמשת בתעשייה לייצור חמצן נוזלי.",
            "התכה": "חמצן בטמפרטורת החדר הוא כבר גז, אז המושג 'התכה' לא רלוונטי. הוא עובר ישירות מגז לנוזל בקירור קיצוני."
        },
        "מים (H₂O)": {
            "חימום": "כשמחממים מים מעל 100°C, הם רותחים והופכים לאדי מים (גז). זהו שינוי מצב צבירה מנוזל לגז - התאיידות.",
            "חימצון": "מים לא עוברים חימצון בתנאים רגילים. הם יציבים כימית ולא מגיבים עם חמצן באוויר. זו אחת הסיבות שהם נחשבים בטוחים.",
            "קירור": "כשמקררים מים, הטמפרטורה שלהם יורדת. המולקולות נעות לאט יותר והמים הופכים קרים יותר, אך נשארים נוזליים עד 0°C.",
            "הקפאה": "בטמפרטורה של 0°C מים הופכים לקרח. זהו שינוי מצב מנוזל למוצק, והנפח גדל ב-9% כי מבנה הקרח תופס יותר מקום.",
            "התכה": "כשקרח נמס, הוא הופך חזרה למים נוזלים. זהו שינוי מצב ממוצק לנוזל - התהליך ההפוך להקפאה."
        },
        "פחמן (C)": {
            "חימום": "כשמחממים פחמן בלחץ גבוה, הוא יכול לעבור שינוי מבנה ולהפוך ליהלום. זהו שינוי במבנה הגבישי של אותו יסוד.",
            "חימצון": "פחמן מתחמצן ונוצר פחמן דו-חמצני (CO₂) - הגז שאנו נושמים החוצה. זוהי תגובת בעירה הפולטת אנרגיה.",
            "קירור": "קירור גורם לפחמן להתכווץ. המולקולות נעות לאט יותר והחומר תופס פחות מקום.",
            "הקפאה": "בטמפרטורות נמוכות מאוד הפחמן הופך קשה מאוד ויציב. המבנה הגבישי שלו מתחזק.",
            "התכה": "פחמן נמס רק בטמפרטורה גבוהה מאוד (מעל 3500°C) והופך לנוזל. זהו תהליך המתרחש רק בתנאים קיצוניים."
        },
        "זהב (Au)": {
            "חימום": "כשמחממים זהב, הוא מתרחב אך נשאר במצב מוצק. זהו שינוי פיזיקלי הפיך - הזהב חוזר לגודלו המקורי בקירור.",
            "חימצון": "זהב הוא מתכת אצילה שלא מתחמצנת באוויר. זו הסיבה שתכשיטי זהב לא משתנים עם הזמן ונשארים בוהקים.",
            "קירור": "קירור גורם לזהב להתכווץ מעט. זהו שינוי פיזיקלי קטן שמתרחש בכל המתכות.",
            "הקפאה": "בטמפרטורות נמוכות מאוד הזהב הופך קשה יותר. המבנה הגבישי שלו הופך יציב יותר.",
            "התכה": "זהב נמס בטמפרטורה של 1064°C והופך לנוזל זהוב מבריק. צורפים משתמשים בתהליך זה ליצירת תכשיטים."
        },
        "כסף (Ag)": {
            "חימום": "חימום גורם לכסף להתרחב ולהישאר במצב מוצק. זהו שינוי פיזיקלי הפיך.",
            "חימצון": "כסף מתחמצן לאט באוויר ונוצרת שכבה כהה של תחמוצת כסף. זו הסיבה שכסף משחיר עם הזמן.",
            "קירור": "קירור גורם לכסף להתכווץ. המולקולות נעות לאט יותר והמתכת תופסת פחות מקום.",
            "הקפאה": "בטמפרטורות קיצוניות הכסף יכול להתפרק או להישבר בגלל שינויים במבנה הגבישי.",
            "התכה": "כסף נמס בטמפרטורה של 962°C והופך לנוזל מבריק. זהו שינוי מצב צבירה ממוצק לנוזל."
        },
        "נחושת (Cu)": {
            "חימום": "חימום גורם לנחושת להתרחב ולהישאר מוצקת. זהו שינוי פיזיקלי שמתרחש בכל המתכות.",
            "חימצון": "נחושת מתחמצנת באוויר ונוצרת שכבה ירוקה הנקראת פטינה (תחמוצת נחושת). זו הסיבה שגגות נחושת הופכים ירוקים.",
            "קירור": "קירור גורם לנחושת להתכווץ. זהו שינוי פיזיקלי הפיך.",
            "הקפאה": "בטמפרטורות נמוכות מאוד הנחושת הופכת קשה יותר ויציבה יותר.",
            "התכה": "נחושת נמסת בטמפרטורה של 1085°C והופכת לנוזל כתום-אדמדם. זהו תהליך הנעשה בייצור חפצי נחושת."
        },
        "אלומיניום (Al)": {
            "חימום": "חימום גורם לאלומיניום להתרחב. בטמפרטורות גבוהות מאוד הוא יכול גם להישרף באוויר.",
            "חימצון": "אלומיניום מתחמצן מהר באוויר אך נוצרת שכבה דקה של תחמוצת אלומיניום שמגנה על המתכת מחמצון נוסף.",
            "קירור": "קירור גורם לאלומיניום להתכווץ. זהו שינוי פיזיקלי הפיך.",
            "הקפאה": "בטמפרטורות נמוכות מאוד האלומיניום הופך קשה יותר ויציב יותר.",
            "התכה": "אלומיניום נמס בטמפרטורה נמוכה יחסית של 660°C. זו הסיבה שהוא נפוץ בייצור - קל להתיך ולעבד."
        },
        "גופרית (S)": {
            "חימום": "כשמחממים גופרית היא נשרפת ונוצרת גופרית דו-חמצנית (SO₂) עם ריח חזק ולא נעים של ביצים רקובות.",
            "חימצון": "גופרית מתחמצנת באוויר ונוצרת גופרית דו-חמצנית (SO₂). זוהי תגובה שפולטת אנרגיה ויוצרת גז עם ריח חריף.",
            "קירור": "קירור גורם לגופרית להתקשות ולהתכווץ. היא הופכת יציבה יותר.",
            "הקפאה": "בטמפרטורות נמוכות הגופרית הופכת למוצק יציב וקשה.",
            "התכה": "גופרית מותכת בטמפרטורה נמוכה של 115°C והופכת לנוזל צהוב. זהו שינוי מצב צבירה ממוצק לנוזל."
        },
        "מגנזיום (Mg)": {
            "חימום": "כשמחממים מגנזיום הוא נשרף באור לבן בוהק מאוד ונוצרת תחמוצת מגנזיום (אבקה לבנה). זוהי בעירה עזה מאוד.",
            "חימצון": "מגנזיום מתחמצן מהר מאוד באוויר ונוצרת אבקה לבנה של תחמוצת מגנזיום (MgO). זוהי תגובה חזקה ומהירה.",
            "קירור": "קירור גורם למגנזיום להתכווץ. זהו שינוי פיזיקלי הפיך.",
            "הקפאה": "בטמפרטורות נמוכות מאוד המגנזיום הופך קשה מאוד ושביר.",
            "התכה": "מגנזיום נמס בטמפרטורה של 650°C והופך לנוזל כסוף בוהק. זהו שינוי מצב צבירה."
        }
    }
};

let currentQuestion = {};
let score = 0;
let gameQuestions = [];
let questionCount = 0;
const totalQuestions = 20;

function generateQuestions() {
    gameQuestions = [];
    for (let element of gameData.elements) {
        for (let process of gameData.processes) {
            gameQuestions.push({
                element: element.name,
                process: process.name,
                correct: gameData.reactions[element.name][process.name]
            });
        }
    }
    gameQuestions = gameQuestions.sort(() => Math.random() - 0.5);
}

function generateWrongAnswers(correct) {
    const allAnswers = [];
    for (let element in gameData.reactions) {
        for (let process in gameData.reactions[element]) {
            allAnswers.push(gameData.reactions[element][process]);
        }
    }
    
    const wrongAnswers = allAnswers.filter(answer => answer !== correct);
    const selectedWrong = [];
    
    while (selectedWrong.length < 3 && wrongAnswers.length > 0) {
        const randomIndex = Math.floor(Math.random() * wrongAnswers.length);
        const answer = wrongAnswers.splice(randomIndex, 1)[0];
        if (!selectedWrong.includes(answer)) {
            selectedWrong.push(answer);
        }
    }
    
    return selectedWrong;
}

function displayQuestion(questionData) {
    currentQuestion = questionData;
    
    document.getElementById('current-element').textContent = questionData.element;
    document.getElementById('current-process').textContent = questionData.process;
    document.getElementById('element-in-question').textContent = questionData.element;
    document.getElementById('process-in-question').textContent = questionData.process;
    
    const wrongAnswers = generateWrongAnswers(questionData.correct);
    const allAnswers = [questionData.correct, ...wrongAnswers];
    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);
    
    const buttonsContainer = document.getElementById('answer-buttons');
    buttonsContainer.innerHTML = '';
    
    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.onclick = () => checkAnswer(answer, button);
        buttonsContainer.appendChild(button);
    });
    
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('feedback').style.display = 'none';
}

function checkAnswer(selectedAnswer, buttonElement) {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.disabled = true);
    
    const feedbackDiv = document.getElementById('feedback');
    const explanation = gameData.explanations[currentQuestion.element] && 
                       gameData.explanations[currentQuestion.element][currentQuestion.process] 
                       ? gameData.explanations[currentQuestion.element][currentQuestion.process]
                       : "תהליך כימי/פיזיקלי מעניין שמשנה את תכונות החומר.";
    
    if (selectedAnswer === currentQuestion.correct) {
        buttonElement.classList.add('correct');
        score += 10;
        document.getElementById('score').textContent = score;
        feedbackDiv.innerHTML = `<strong>כל הכבוד! ✅</strong><br><strong>התשובה נכונה:</strong> ${selectedAnswer}<br><br><strong>הסבר:</strong> ${explanation}`;
        feedbackDiv.style.background = '#e6fffa';
        feedbackDiv.style.borderColor = '#38b2ac';
    } else {
        buttonElement.classList.add('incorrect');
        buttons.forEach(btn => {
            if (btn.textContent === currentQuestion.correct) {
                btn.classList.add('correct');
            }
        });
        feedbackDiv.innerHTML = `<strong>לא נכון ❌</strong><br><strong>התשובה הנכונה היא:</strong> ${currentQuestion.correct}<br><br><strong>הסבר:</strong> ${explanation}`;
        feedbackDiv.style.background = '#fed7d7';
        feedbackDiv.style.borderColor = '#f56565';
    }
    
    feedbackDiv.style.display = 'block';
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    questionCount++;
    
    if (questionCount > totalQuestions || gameQuestions.length === 0) {
        const percentage = Math.round((score / (totalQuestions * 10)) * 100);
        alert(`המשחק הסתיים! 
הניקוד הסופי שלך: ${score} מתוך ${totalQuestions * 10} 
אחוז הצלחה: ${percentage}%
        
${percentage >= 80 ? 'מצוין! 🏆' : percentage >= 60 ? 'טוב מאוד! 👍' : 'המשך להתרגל 💪'}`);
        goHome();
        return;
    }
    
    const nextQ = gameQuestions.pop();
    displayQuestion(nextQ);
    
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('correct', 'incorrect');
    });
    
    document.querySelector('.header h1').textContent = `🧪 משחק התהליכים הכימיים 🧪 (שאלה ${questionCount}/${totalQuestions})`;
}

function goHome() {
    window.location.href = 'index.html';
}

generateQuestions();
nextQuestion();
