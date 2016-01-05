/**
 * Created by dell1 on 04/01/2016.
 */
var app = angular.module("myToDo",["ngMaterial","ngMessages","ngMdIcons"]);
app.controller("AppController",function(){
    var vm = this;

    vm.allTodo = [];



    //Add todos
    vm.addTodo = function()
    {
        vm.allTodo.push(
            {
                todo: vm.todoItem,
                check:false
            });
        vm.todoItem = "";
    }
})