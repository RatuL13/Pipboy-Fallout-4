$(document).ready(function(){
    var weapons=[
        {
            "name": "44_Pistol",
            "damage": 48,
            "fire-rate": 6,
            "range": 119,
            "accuracy": 56,
            "weight": 4.2,
            "value": 99
        },
        {
            "name": "10mm_Pistol",
            "damage": 18,
            "fire-rate": 46,
            "range": 119,
            "accuracy": 61,
            "weight": 4.2,
            "value": 53
        },
        {
            "name": "Assault_Rifle",
            "damage": 30,
            "fire-rate": 40,
            "range": 119,
            "accuracy": 72,
            "weight": 13.1,
            "value": 144
        }
    ];
    $(".item-list a").on("click",function(e){
        $(".item-list a").removeClass("active");
        $(e.currentTarget).addClass("active");
    });
    $("item-list a").on("mouseenter", function(e){
   var current_item=$(e.currentTarget).attr("class");
   console.log(current_item);
   for(item in weapons){
   if(weapons[item].name==current_item){
       console.log(weapons[item]);
       var container=$(".item-stats");
       container.find(".damage").html(weapons[item].damage);
   }
   }
    });
});