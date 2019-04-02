let one =new Vue({
    el:'#root',
    data:{
        name:"",
        company:"",
        greet: function(name="Default"){
            return 'Good Morning '+name
        },
        website:'http://www.thenetninja.co.uk',
        websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja</a>',
        age:24,
        add:function(a){
            this.age+=a
        },
        subtract:function(a){
            this.age-=a
        },
        
        x:0,
        y:0,
        
        updateXY:function(event){
            
            this.x = event.offsetX
            this.y = event.offsetY
            console.log(this.x)
            console.log(this.y)
        },
        logName: function(){
            console.log("You entered your name")
        },
        logAge: function(){
            console.log("You enterd yoour age")
        },
        error:false,
        success:false,
        ninjas:[
            {name:"Abrar", age:"24"},
            {name:"Farhad", age:"24"},
            {name:"Nirjhar", age:"24"},
            {name:"AF", age:"24"},
        ],
        title:"App one"

    },
    

})


let two = new Vue({
    el:'#app',
    data:{
        title:"New Vue",
        myfunc:function(newtitle='hello'){
            one.title = this.happen
        },
        happen:""
    },
    
})