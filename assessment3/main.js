import { fetchQuestion } from './modules/question.api.js';
import { createQuestion } from './modules/question.component.js';

const questions = await fetchQuestion();

const data=questions[0];
const { category, question, correctAnswer, incorrectAnswers }=data;
const $question = createQuestion(data);




const $app = document.getElementById('app');
$app.innerHTML = '';
$app.appendChild($question);
