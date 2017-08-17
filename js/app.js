(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	angular
		.module('todoApp', [])
		.controller('TodoController', ['$scope', function ($scope) {
            var vm=$scope;
			// 1.展示数据：
			// name 表示任务名称
			// isCompleted 表示任务是否完成的状态
			// id 唯一标识
			var todoList = [
				{ id: 1, name: '抽烟', isCompleted: false },
				{ id: 2, name: '喝酒', isCompleted: true },
				{ id: 3, name: '烫头', isCompleted: false },
			];

			//2.添加任务
			vm.todoList=todoList;
			vm.todoName="";
			vm.add=function(){
				//名字为空格，直接结束
				if(vm.todoName.trim()===""){
					return;
				}
				var id;
				id=todoList.length===0?1:todoList.length+1;
				todoList.push({id:id,name:vm.todoName,isCompleted:false});
				vm.todoName="";
			};

            //3.删除任务
			vm.del=function(id){
				for(var i=0;i<todoList.length;i++){
					if(todoList[i].id===id){
						todoList.splice(i,1);
						break;
					}
				}
			};

			//4.修改任务
			vm.editId=-1;
			vm.edit=function(id){
                 vm.editId=id;
			};
			vm.update=function(id){
				vm.editId=-1;
			};

			//5.切换任务选中状态
			vm.checkAll=false;
			//5.1点击全选中，全不选中
            vm.changeAll=function(){
				for (var i = 0; i < todoList.length; i++) {
					todoList[i].isCompleted=vm.checkAll;
				}
			};
			//5.2全选中，上面按钮选中，一个不选中就不选中
			vm.changeOne=function(){
				for (var i = 0; i < todoList.length; i++) {
					//有一个没完成，就不选中
					if(todoList[i].isCompleted==false){
						vm.checkAll=false;
					}else{
						vm.checkAll=true;
					}

				}
			};

		}]);

})(angular);
