var res=document.createElement("div");
document.body.append(res);

var play=document.querySelectorAll("div");
res.innerHTML="start";
var interval=setTimeout(()=>{
    res.innerHTML = 10;
    setTimeout(()=>{
        res.innerHTML = 9;
        setTimeout(()=>{
            res.innerHTML = 8;
            setTimeout(()=>{
                res.innerHTML = 7;
                setTimeout(()=>{
                    res.innerHTML = 6;
                    setTimeout(()=>{
                        res.innerHTML = 5;
                        setTimeout(()=>{
                            res.innerHTML = 4;
                            setTimeout(()=>{
                                res.innerHTML = 3;
                                setTimeout(()=>{
                                    res.innerHTML = 2;
                                    setTimeout(()=>{
                                        res.innerHTML = 1;
                                        setTimeout(()=>{
                                            res.innerHTML = "Happy Independence Day";
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);
// clearInterval(interval);