var questions = [
    {
        q: '1. Сколько быдут 1+1?',
        answer1: 1,
        answer2: 2,
        answer3: 3,
        answer4: 4,
        correct: '2'
    },
    {
        q: '2. ',
        answer1: 1,
        answer2: 2,
        answer3: 3,
        answer4: 4,
        correct: '2'
    },
    {
        q: 3,
        answer1: 1,
        answer2: 2,
        answer3: 3,
        answer4: 4,
        correct: '2'
    },
    {
        q: 4,
        answer1: 1,
        answer2: 2,
        answer3: 3,
        answer4: 4,
        correct: '2'
    },
    {
        q: 5,
        answer1: 1,
        answer2: 2,
        answer3: 3,
        answer4: 4,
        correct: '2'
    },
    {
        q: 6,
        answer1: 1,
        answer2: 2,
        answer3: 3,
        answer4: 4,
        correct: '2'
    },
    {
        q: 7,
        answer1: 1,
        answer2: 2,
        answer3: 3,
        answer4: 4,
        correct: '2'
    },
    {
        q: 8,
        answer1: 1,
        answer2: 2,
        answer3: 3,
        answer4: 4,
        correct: '2'
    },
    {
        q: 9,
        answer1: 1,
        answer2: 2,
        answer3: 3,
        answer4: 4,
        correct: '2'
    },
    {
        q: 10,
        answer1: 1,
        answer2: 2,
        answer3: 3,
        answer4: 4,
        correct: '2'
    },
    {
        q: 11,
        answer1: 1,
        answer2: 2,
        answer3: 3,
        answer4: 4,
        correct: '2'
    },
    {
        q: 12,
        answer1: 1,
        answer2: 2,
        answer3: 3,
        answer4: 4,
        correct: '2'
    },
    {
        q: 13,
        answer1: 1,
        answer2: 2,
        answer3: 3,
        answer4: 4,
        correct: '2'
    },
    {
        q: 14,
        answer1: 1,
        answer2: 2,
        answer3: 3,
        answer4: 4,
        correct: '2'
    },
    {
        q: 15,
        answer1: 1,
        answer2: 2,
        answer3: 3,
        answer4: 4,
        correct: '3'
    }
]
console.log(questions.length)

function hwoWantBeMillioner() {
    var i = 1;
    for (var question of questions) {
        do {
            j = prompt(question.q + '\nВарианты ответа\n' + question.answer1 + '\n' + question.answer2 + '\n' + question.answer3 + '\n' + question.answer4);
            if (j == question.correct && i < questions.length) {
                alert('Верный ответ! Продолжаем.');
                break;
            } else if (j != question.correct) {
                alert('Ответ не верный! Игра окончена.');
                break;
            } else {
                alert('Верный ответ! Игра окончена.');
                break;
            }
            i++;
        } while (i <= questions.length || j != question.correct);
        if (i == questions.length || j != question.correct) {
            break;
        }
        i++;
    }
}

hwoWantBeMillioner();