/**
 * Created by dell1 on 04/01/2016.
 */
var app = angular.module("myToDo",["ngMaterial","ngMessages","ngMdIcons"]);
app.controller("AppController",function(){
    

    this.allItem = [];



    //Add todos
    this.addItem = function()
    {
        this.allItem.push(
            {
                todo: this.todoItem,
                check:false
            });
        this.todoItem = "";
    }
})