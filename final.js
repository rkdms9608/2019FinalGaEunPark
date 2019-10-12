Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@rkdms9608 
Code Issues 0 Pull requests 0 Projects 0 Wiki Security Pulse Community
2019FinalGaEunPark/final.js / 
@HenryBcit HenryBcit i
ef3cf2c 2 hours ago
Executable File  45 lines (39 sloc)  1.6 KB
  
 You're using jump to definition to discover and navigate code.  Beta
Learn more or give us feedback
document.body.onmousemove = function(ev){
    //make a trail of stars
    var size = Math.round(Math.random()*50);
    var trailStar = CreateStar(ev.pageX, ev.pageY, size, size);
    trailStar.style.opacity = Math.random();
    trailStar.style.pointerEvents = "none";
    var deg = Math.round(Math.random()*360);
    trailStar.style.webkitFilter = "hue-rotate("+deg+"deg)";
    trail.push(trailStar);
    if(trail.length > 50){
        /*for(var i = 0; i<trail.length; i++){
            sky.removeChild(trail[i]);
        }
        trail = [];*/
        sky.removeChild(trail[0]);
        trail.splice(0,1);
    }

    setTimeout(function(){
        trailStar.style.left = Math.round(Math.random()*window.innerWidth) +"px";
        trailStar.style.top = Math.round(Math.random()*window.innerHeight) +"px";
    }, 100)
}

setInterval(function(){
    var size = Math.round(Math.random()*50);

    var trailStar = CreateStar(Math.round(Math.random()*window.innerWidth), Math.round(Math.random()*window.innerHeight), size, size);
    var deg = Math.round(Math.random()*360);
    trailStar.style.webkitFilter = "hue-rotate("+deg+"deg)";
    trailStar.style.opacity = Math.random();
    setTimeout(function(){
        trailStar.style.left = Math.round(Math.random()*window.innerWidth) +"px";
        trailStar.style.top = Math.round(Math.random()*window.innerHeight) +"px";
    }, 100);

    stars.push(trailStar);

    if(stars.length > 100){
        sky.removeChild(stars[0]);
        stars.splice(0,1);
    }

    document.body.style.background = "rgb(0,0,"+Math.round(Math.random()*100)+")";
}, 100);
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
document.body.onmousemove = function(ev){
    //make a trail of stars
    var size = Math.round(Math.random()*50);
    var trailStar = CreateStar(ev.pageX, ev.pageY, size, size);
    trailStar.style.opacity = Math.random();
    trailStar.style.pointerEvents = "none";
    var deg = Math.round(Math.random()*360);
    trailStar.style.webkitFilter = "hue-rotate("+deg+"deg)";
    trail.push(trailStar);
    if(trail.length > 50){
        /*for(var i = 0; i<trail.length; i++){
            sky.removeChild(trail[i]);
        }
        trail = [];*/
        sky.removeChild(trail[0]);
        trail.splice(0,1);
    }

    setTimeout(function(){
        trailStar.style.left = Math.round(Math.random()*window.innerWidth) +"px";
        trailStar.style.top = Math.round(Math.random()*window.innerHeight) +"px";
    }, 100)
}

setInterval(function(){
    var size = Math.round(Math.random()*50);

    var trailStar = CreateStar(Math.round(Math.random()*window.innerWidth), Math.round(Math.random()*window.innerHeight), size, size);
    var deg = Math.round(Math.random()*360);
    trailStar.style.webkitFilter = "hue-rotate("+deg+"deg)";
    trailStar.style.opacity = Math.random();
    setTimeout(function(){
        trailStar.style.left = Math.round(Math.random()*window.innerWidth) +"px";
        trailStar.style.top = Math.round(Math.random()*window.innerHeight) +"px";
    }, 100);

    stars.push(trailStar);

    if(stars.length > 100){
        sky.removeChild(stars[0]);
        stars.splice(0,1);
    }

    document.body.style.background = "rgb(0,0,"+Math.round(Math.random()*100)+")";
}, 100);
