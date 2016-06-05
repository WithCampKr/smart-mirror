(function(angular) {
  'use strict';

  angular.module('SmartMirror')
    .constant('currentQuiz', {})
    .factory('QuizService', QuizService);
  
  function QuizService(QUIZ_LIST, currentQuiz) {
    var service = {
      getQuiz: getQuiz,
      checkAnswer: checkAnswer
    };

    function getQuiz() {
      var random = parseInt( Math.random() * QUIZ_LIST.length );
      var quiz = QUIZ_LIST[random];
      currentQuiz.quiz = quiz.quiz;
      currentQuiz.answer = quiz.answer;
      
      return quiz.quiz;
    }

    function checkAnswer( answer ) {
      return currentQuiz.answer == answer
    }

    return service;
  }
}(window.angular));
