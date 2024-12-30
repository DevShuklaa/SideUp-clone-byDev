var cursor=document.querySelector("#dot");
var blur=document.querySelector("#dotBlur");
var hover=document.querySelectorAll(".hoverCards");
var cards=document.querySelector("#cards");

document.addEventListener("mousemove",function(dets){
    // console.log(delt.x);
    cursor.style.left = dets.x+ "px";
    cursor.style.top = dets.y +  "px";
    blur.style.left=dets.x - 180 +"px";
    blur.style.top=dets.y -180 +"px"
})

gsap.to("#black",{
  backgroundColor:"#000",
  scrollTrigger:{
    trigger:"#black",
    scroller:"body",
    // markers:true,
    start:"top -25%",
    end:"top -60%",
    scrub:2     
  }
})
var cle=document.querySelectorAll("#nav h4,#nav img,#Follow");
console.log(cle);
cle.forEach(function(e){
  e.addEventListener("mouseenter",function(){
    cursor.style.scale=4;
    // cursor.style.left=dets.x+40+"px";
    cursor.style.zIndex=30;
    cursor.style.border="0.1px solid #fff";
    cursor.style.backgroundColor="transparent";
  })
})
cle.forEach(function(e){
  e.addEventListener("mouseleave",function(){
    cursor.style.scale=1;
    cursor.style.zIndex=99;
    cursor.style.border="0px solid #fff";
    cursor.style.backgroundColor="#9ece18";
  })
})
gsap.to(".page2",{
  // y:90,
  opacity:1,
  // duration:1,
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 90%",
    scrub: 1,
  }
})
gsap.from(".aboutUs h1,.page img,.page h4",{
  y: 90,
  opacity: 0,
  duration: 1,
  stagger:1,
  scrollTrigger: {
    trigger: ".aboutUs",
    scroller: "body",
    // markers:true,
    start: "top 60%",
    end: "top 62%",
    scrub: 2,
  },
})
gsap.from("#cards",{
  y: 150,
  opacity: 0,
  duration: 5,
  stagger:2,
  scrollTrigger: {
    trigger: "#cards",
    scroller: "body",
    // markers:true,
    start: "top 85%",
    end: "top 100%",
    scrub: 2,
  },
})
gsap.from("#colon1",{
  y:-90,
  x:-50,
  // duration:20,
  scrollTrigger:{
    trigger:"#MidText",
    scrolller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 75%",
    scrub:3,
  },
})
gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    // width:"200px",
    height: "110px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
    //   markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });


function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp :0.07
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}