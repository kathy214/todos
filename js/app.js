(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	angular
		.module('todoApp', [])
		.controller('TodoController', ['$scope', function ($scope) {
            var vm=$scope;
			// 数据：
			// name 表示任务名称
			// isCompleted 表示任务是否完成的状态
			// id 唯一标识
			var todoList = [
				{ id: 1, name: '抽烟', isCompleted: false },
				{ id: 2, name: '喝酒', isCompleted: true },
				{ id: 3, name: '烫头', isCompleted: false },
			];

			vm.todoList=todoList;
			vm.todoName="";
			vm.add=function(){
				
			}


		}]);

})(angular);
