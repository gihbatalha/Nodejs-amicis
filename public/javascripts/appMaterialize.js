/*angular.module('datepickerBasicUsage',
    ['ngMaterial', 'ngMessages']).controller('AppCtrl', function($scope) {
  $scope.myDate = new Date();
  $scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() - 2,
      $scope.myDate.getDate());
  $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());
  $scope.onlyWeekendsPredicate = function(date) {
    var day = date.getDay();
    return day === 0 || day === 6;
  }
});*/

$( document ).ready(function(){
  $(".button-collapse").sideNav();

  $('.modal-trigger').leanModal({
    dismissible: false
  });

  $('.carousel.carousel-slider').carousel({full_width: true});

  $(document).ready(function() {
    $('select').material_select();
  });
})

