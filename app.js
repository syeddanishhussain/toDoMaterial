/**
 * Created by dell1 on 04/01/2016.
 */
var app = angular.module("myToDo",["ngMaterial","ngMessages","ngMdIcons"]);
app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')

});
app.controller("AppController",function(){
    

    this.allItem = [];




    this.addItem = function()
    {
        this.allItem.push(
            {
                todo: this.todoItem,
                check:false
            });
        this.todoItem = "";
    }
    this.delete = function()
    {
        console.log("delete function")
        for(var i = 0;i<this.allItem.length;i++)
        {
            if(this.allItem[i].check == true)
            {
                this.allItem.splice(i,1);
                i--;
                this.counter--;
            }

        }
    };



    this.counter = 0;


    this.selected= function(a)
    {
        if(this.allItem[a].check == true)
        {
            this.counter--;
        }
        else
        {
            this.counter++;
        }

    }
});






