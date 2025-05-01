var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "80% 60%",
    scrub: true,
}})
tl.to("#can",{
    top: "145%",
    left: "77%",
    width: "30%",
    rotate: "-30deg",
},'can')
tl.to("#leaf",{
    top: "153%",
    rotate: "0deg",
    left: "75%",
    width: "12%",
},'can')
tl.to("#blackberry1",{
    top: "114%",
    rotate: "100deg",
    left: "5%",
    width: "5%",
},'can')
tl.to("#blackberry2",{
    top: "125%",
    rotate: "100deg",
    left: "83%",
    width: "12%",
},'can')
tl.to("#blackberry3",{
    top: "163%",
    rotate: "60deg",
    left: "70%",
    width: "5%",
},'can')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
}})
tl2.to("#can",{
    top: "235%",
    left: "50%",
    width: "30%",
    rotate: "0deg",
},'can')