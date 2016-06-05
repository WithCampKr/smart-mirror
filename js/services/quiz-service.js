(function(angular) {
  'use strict';

  angular.module('SmartMirror')
    .constant('CURRENT_QUIZ', {})
    .factory('QuizService', QuizService);
  
  function QuizService(QUIZ_LIST, CURRENT_QUIZ) {
    var service = {
      getQuiz: getQuiz,
      checkAnswer: checkAnswer
    };
    return service;

    function getQuiz() {
      var random = parseInt( Math.random() * QUIZ_LIST.length );
      var quiz = QUIZ_LIST[random];
      CURRENT_QUIZ.quiz = quiz.quiz;
      CURRENT_QUIZ.answer = quiz.answer;
      
      return quiz.quiz;
    }

    function checkAnswer( answer ) {
      return CURRENT_QUIZ.answer == answer
    }
  }

}(window.angular));
