const html = document.body.parentNode;
const body = document.querySelector('body');

window.addEventListener("load", () => {
  // Remove the preload class from the body element
  body.classList.remove("preload");

  // Scroll to the top of the page
  $('html, body').animate({scrollTop:0}, 100);

  if (window.location.pathname === 'https://www.seanode.io'){
    navSlide.classList.add('fixed_nav');
    setTimeout(() => { 
      navSlide.classList.remove('fixed_nav');
    },1000);
  }

  // Uncheck all checkboxes on the page
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(checkbox => checkbox.checked = false);

  // Replace dots with line breaks in all elements with the break-line class
  const breakLines = document.querySelectorAll('.break-line');
  breakLines.forEach(el => {
    el.innerHTML = el.textContent.replace(/\./g, '.<br>').trim();

    if (el.querySelector('br:last-child') != null){
      el.querySelector('br:last-child').remove();
    }

  });

}, {passive: true});
// //


/* OPEN & CLOSE MENU/NAV */ 
const openmenu = document.getElementById('nav_footer');
const cadre_hamburger = document.querySelector('.cadre_hamburger');
const MenuBurger = document.getElementById('sous_menu2');
const hamburger_in = document.querySelector('.hamburger_in');
const Blocker = document.querySelector('.blocker');

function toggleMenu() {
  cadre_hamburger.addEventListener('click', () => {
    openmenu.classList.add('show-nav');
    MenuBurger.style.willChange = "transform";
    html.style.overflow = "hidden";
  }, { passive: true }, false);

  Blocker.addEventListener('click', () => {
    openmenu.classList.remove('show-nav');
    html.style.overflow = "";
    resetMenu();
  }, { passive: true }, false);

  hamburger_in.addEventListener('click', () => {
    openmenu.classList.remove('show-nav');
    html.style.overflow = "";
    resetMenu();
  }, { passive: true }, false);
}

function resetMenu() {
  sous_menu2title.innerHTML = "Menu";
  sous_menu_bg.classList.remove('rotate_menu_close');
  sous_menu_bg.classList.add('rotate_menu_open');

  btns.forEach(btn => {
    btn.classList.add('rotate_menu_close');
    btn.classList.remove('rotate_menu_open');
  });
}

toggleMenu();
// //


/* Scroll-padding */ 
const navigationHeight = openmenu.offsetHeight;

document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 1 + "px");
// //


// SEARCH ANIM //
const searchSubmit = document.getElementById('panel-search');
const _search = document.getElementById('_search');
const menu = document.querySelector('.menu');

document.addEventListener('mouseup', e => {
  if (!searchSubmit.contains(e.target) && !_search.contains(e.target)) {
    document.getElementById('btnsearch').checked = false;
    menu.classList.remove('searchapper');
    searchSubmit.reset();
  }
});

searchSubmit.addEventListener('submit', event => {
  /*event.preventDefault();*/
  
  searchSubmit.reset();
  menu.classList.remove('searchapper');
});

////////////////////////////

/* Menu & searchbar open/hide */
function searchMenu() {
  const menu = document.querySelector('.menu');
  const search = document.getElementById('btnsearch');
  const _search = document.getElementById('_search');

  search.addEventListener('click', () => {
    menu.classList.toggle('searchapper');
    _search.value = '';
  }, { passive: true }, false);
}
searchMenu();

/* REVEAL PAGE SCROLL + navbar scroll*/
const btnScroll = document.getElementById('btnscroll');
const navSlide = document.getElementById('nav-slide');

const reveals = document.querySelectorAll(".slide_scroll");
const SlideBoost = [...document.querySelectorAll('#_main, #_OptslideBox1')];

var windowHeight = window.innerHeight;
let elementTop, elementVisible;

function reveal() {
  reveals.forEach((reveal, i) => {
    elementTop = reveals[i].getBoundingClientRect().top;
    elementVisible = 0;

    reveal.classList.toggle("active", elementTop < windowHeight - elementVisible);
    SlideBoost[i].style.willChange = elementTop < windowHeight - elementVisible ? "transform, opacity" : "auto";
  });
}

window.addEventListener("scroll", reveal, { passive: true }, false);
reveal();

function fixNav() {
  navSlide.classList.toggle('fixed_nav', window.scrollY > 50);
  btnScroll.classList.toggle('active', window.scrollY > 250);
}

window.addEventListener('scroll', (event) => {
  event.preventDefault();
  fixNav();
}, false);
fixNav();

//////////////////
//////////

btnScroll.addEventListener('click', () => {
  window.scrollTo({
  top: 0,
  behavior: "smooth"
}), {
  passive: true
}
},false);
//////////////// /* SCROLL INFO*/ //////////////

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

var random_list = () => {
  
let unshuffled = Array.from(marqueeContent.children);

let shuffled = unshuffled
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
   

  marqueeContent.innerHTML = shuffled.map(element => element.outerHTML).join('');

}
random_list();


////////////////////
////////////////////////
function close_menu () {

   var nav_title = document.querySelectorAll('a.btn_mobile');
   var nav_sub = document.querySelectorAll('ul.sous_menu');
   var menu_mobile = document.querySelectorAll('.menu_title_bar');

     
   for (let i = 0; i < nav_sub.length; i++){

      nav_title[i].onclick = function(e){e.preventDefault();}
      nav_title[i].addEventListener("touchstart", (e) => {

        
      menu_mobile[i].classList.toggle('touchend');
      nav_sub[i].classList.toggle('sous_menu_touch');

    },{
      passive: true
    },false)

    window.addEventListener("touchstart", (e) => {
      
      if (!menu_mobile[i].contains(e.target)){ 
        nav_sub[i].classList.remove('sous_menu_touch');
      }

    },{ passive: true });
    
   };    
}
close_menu();


//////* MENU BURGER SLIDER OPEN*/////

var sous_menu2title = document.getElementById('sous_menu2title');

var  sub_slider = () => {
 
  var sous_menu_bg = document.getElementById('bg');
 
  
        var lien_sub = Array.from(document.querySelectorAll('.bg2'));
        var menu_sub = Array.from(document.querySelectorAll('.sub_lien a'));

        sous_menu2title.innerHTML = "Menu";

          for ( var i=0; i < menu_sub.length; i++){
            
            menu_sub[i].addEventListener('click', bindClick(i));  
          
          }
          
          function bindClick(i) {
      
            return function(menu_btn, sous_menu_btn) {

              menu_btn = menu_sub[i].getAttribute("href");
              sous_menu_btn = lien_sub[i].getAttribute('id');

              
              sous_menu2title.innerHTML = sous_menu_btn.replace('_', "  ");
              
              sous_menu2title.classList.add('text_anim');

              setTimeout(function(){
                sous_menu2title.classList.remove('text_anim')
            },1000)

              id = "#" + sous_menu_btn;
        
              if (id == menu_btn) {

                sous_menu_bg.style.willChange = "transform"
                document.querySelector(id).style.willChange = "transform";
                setTimeout(() => {
                  sous_menu_bg.style.willChange = "auto"
                  document.querySelector(id).style.willChange = "auto";
                }, 1000);

                sous_menu_bg.classList.add('rotate_menu_close');
                sous_menu_bg.classList.remove('rotate_menu_open');
                document.querySelector(id).classList.add('rotate_menu_open'); 
                document.querySelector(id).classList.remove('rotate_menu_close'); 
              }      
         }
      }   
}
sub_slider();

//////* MENU BURGER SLIDER BACK*/////

var btns = document.querySelectorAll('.bg2');
var btn_sous_menu2_down = document.querySelectorAll('.btn_sous_menu2_slide_down');
var sous_menu_bg = document.getElementById('bg');

function sub_close (){

  for (let j = 0; j < btn_sous_menu2_down.length; j++){

    btn_sous_menu2_down[j].addEventListener('click', bind_return(j));
}
   function bind_return() {
    
  return function() {
    
    $('#submenu_calq').animate({scrollTop:0})
    
    sous_menu2title.innerHTML = "Menu";
    sous_menu2title.classList.add('text_anim');
    
    setTimeout(function(){
      sous_menu2title.classList.remove('text_anim')
  },1000)

    sous_menu_bg.classList.remove('rotate_menu_close');
    sous_menu_bg.classList.add('rotate_menu_open');


    sous_menu_bg.style.willChange = "transform"
    document.querySelector(id).style.willChange = "transform";

    setTimeout(() => {
      sous_menu_bg.style.willChange = "auto"
      document.querySelector(id).style.willChange = "auto";
    }, 1000);
    

    btns.forEach(btn => {
      btn.classList.add('rotate_menu_close');
      btn.classList.remove('rotate_menu_open');   
    });
  }
}
}
sub_close ();

////* SCROLL TABLE */////
function scrolling_snap_effect (){

  const sections = [...document.querySelectorAll(".tr_scroll")];
  
  let options = {
    rootMargin: "0px",
    threshold: 0.75,
  };
  
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      const { target } = entry;
  
      if (entry.intersectionRatio >= 0.75) {
        target.classList.add("active");
      } else {
        target.classList.remove("active");
      }
     
    });
  };
  
  const observer = new IntersectionObserver(callback, options);
  
  sections.forEach((section, index) => {

    const sectionChildren = [...section.querySelector("td").children];
 
    sectionChildren.forEach((el, index) => {
      el.style.setProperty("--delay", `${index * 250}ms`);
    });
  
    observer.observe(section);
  
  });
  
}
 
scrolling_snap_effect();
  



////* SCROLL BAR PERCENT */////
const BUTTON_NEWS = Array.from(document.querySelectorAll('#btn_bitcoin, #btn_nft, #btn_web3'));

const table = document.querySelector('.table_info');
const wrapp_table = document.querySelector('.table_calq');

const wrapp_New = document.querySelector('.block_section_news');
var wrapp_News = document.querySelectorAll('.block_section_news');

const wrapp_children = document.querySelectorAll('.info-group');

let bar_wrapper = document.querySelector('.progress_wrapper');
let bar_loading = document.querySelector(".progress_bar");

function onScroll() {

  function scroll_object_1 (){

  var pixelsFromTop = wrapp_table.scrollTop;
 
  var table_height =  table.clientHeight;
  var windowHeight = wrapp_table.getBoundingClientRect().height;

  let difference = table_height - windowHeight;

  var percentage = (pixelsFromTop * 100) / difference;

    bar_loading.style.transform = "scaleX(" + percentage + "%)";

    if (percentage <= 0){

      return percentage = 0;
      
    }else if (percentage >= 100){
      
      return percentage = 100;
    }
  }   

  function scroll_object_2 (){

  
    wrapp_News.forEach(el => {

    pixelsFromTop = el.scrollTop;
   
    for (i = 0; i < wrapp_News.length; i++){

      var isNotDisplay = wrapp_News[i];
      var chillisNotDisplay = wrapp_News[i].children.length;
      
      // Number of element calcule //
     if (isNotDisplay.style.display === 'grid'){
      const tableElementsDisplayed = getComputedStyle(root).getPropertyValue("--table-elements-displayed");
      table_height = el.clientHeight * chillisNotDisplay / tableElementsDisplayed;
     }
     if (isNotDisplay.style.display === 'none' || isNotDisplay.style.display === ''){
     }
     
    }

    windowHeight = el.getBoundingClientRect().height

    difference = table_height - windowHeight;

    if(difference < 0){
      return 0;
    }
    
    percentage = (pixelsFromTop / difference) * 100;

    bar_loading.style.transform = "scaleX(" + percentage + "%)";
    
    BUTTON_NEWS.forEach(calc =>{ calc.addEventListener('click', () => {
      bar_loading.style.transform = "scaleX(0)";
      })
    });

});
};


  if (wrapp_table){
    wrapp_table.addEventListener('scroll', scroll_object_1)
  }else if(wrapp_News){
    wrapp_News.forEach(item =>{ item.addEventListener('scroll', scroll_object_2)})
  }

};


if(wrapp_table){
  onScroll();
}else if(wrapp_News){
  onScroll();
}else{
  function onScroll(){};
}

const box_table_article_synthese = document.querySelectorAll('.box_info_table')

function hastag_Anim () {


       box_table_article_synthese.forEach(el => el.addEventListener('scroll', () => {

        var box_table_article_Hastag = el.querySelector('span:nth-of-type(2)');

           var position_article_synthese = el.scrollTop;
           var scroll_Height_table_article = el.scrollHeight - 280;

            if (position_article_synthese >= 50 && position_article_synthese <= scroll_Height_table_article){
                 box_table_article_Hastag.classList.add('hide');
           }else{
                 box_table_article_Hastag.classList.remove('hide');
               }
             
  })
);

}
hastag_Anim () 


////* BOX MORE INFO */////
const window_info = [...document.querySelectorAll('.window_info')];
const caret_calq = document.querySelectorAll('.caret_clq');
const scroll_custom = document.getElementsByClassName('scroll-bar');
const scroll_content = document.getElementsByClassName('scroll-content');
const scroll_Wrapper = document.getElementsByClassName('scroll-wrapper');


  function window_info_Open (){

    const table_anchor = [...document.querySelectorAll('td a')];
    const cross = [...document.querySelectorAll('.window_info .closing_cross')];
    const btn_inside = [...document.querySelectorAll('.btn-close_info')];
    const href_inside = [...document.querySelectorAll('.window_info a')];
    var scroll_Even_Click = 0;
    
         for (let i=0; i < table_anchor.length; i++){

          window_info[i].style.display = "none";
          
        table_anchor[i].addEventListener('click', (e) => {

        scroll_Even_Click = wrapp_table.scrollTop;
     
          e.preventDefault();
          
            $(window_info[i])
            .css("display", "flex")
            .hide()
            .fadeIn();
            
            
            if (window_info[i].style.display = "flex"){
              caret_calq.forEach(caret_index => {
                caret_index.style.visibility = "hidden";
              });
              bar_wrapper.style.visibility = "hidden";
              wrapp_table.scrollTop = 0;
              wrapp_table.style.overflowY = "hidden";
              scroll_custom[1].style.visibility = "hidden";
              table.style.visibility = "hidden";
              table.style.opacity = "0";
            }
            return scroll_Even_Click;
        })
  
             btn_inside[i].addEventListener('click', gotoUrl);

             function gotoUrl () {
              window.location.assign(href_inside[i].href)
              /*window.open(href_inside[i].href) ;*/
             }

      };

    
        for (let j = 0; j < cross.length; j++){

          cross[j].addEventListener('click', () => {

          $(window_info[j]).fadeOut(0);


          if (window_info[j].style.display = "none"){
            caret_calq.forEach(caret_index => {
              caret_index.style.visibility = "";
            });
            bar_wrapper.style.visibility = "visible";
            wrapp_table.scrollTop = scroll_Even_Click;
            wrapp_table.style.overflowY = "scroll";
            scroll_custom[1].style.visibility = "";
            table.style.visibility = "visible";
            table.style.opacity = "1";
          }

        })
      }    

}
if (window_info.length > 0){window_info_Open();}else{void(0)};



////* SCROLL userAgent */////
 function scroller (){
 

 var scrollableElement = document.body;
    scrollableElement.addEventListener("wheel", checkScrollDirection);

    function checkScrollDirection(event) {
      if (checkScrollDirectionIsUp(event)) {

        wrapp_table.scrollTop += 3;
      } else {
        wrapp_table.scrollTop += 3;
      }
    }

    function checkScrollDirectionIsUp(event) {
       if (event.wheelDelta) {
        return event.wheelDelta > 0;
     }
        return event.deltaY < 0;
   }
   
}

////* BUTTON SCROLL */////
const btn_up_down = document.getElementsByClassName('btn_up_down');

function scroll_button () {

  var tr_height = document.querySelector('tr.tr_scroll');
  wrapp_table.scrollTop = 0;

  let scrollTop = window.pageYOffset || tr_height.getBoundingClientRect().height * 4;

  const finalOffset = scrollTop / 4; 

   btn_up_down[1].addEventListener('click', () => {
    wrapp_table.scrollBy({
              top: finalOffset,
              behavior: 'smooth'
            });
    });
    btn_up_down[0].addEventListener('click', () => {
      wrapp_table.scrollBy({ 
                top: -finalOffset,
                behavior: 'smooth'
                
              });  
      });

}
if (typeof(wrapp_table) != 'undefined' && wrapp_table != null){
  scroll_button ();
}else{
  scroll_button = function(){};
}


const btn_left_right = document.querySelectorAll('.Arrow_button');

function scroll_left_right () {


  var scrollLeft = 0;

  var Calcule_Height = (value) => {

    if (wrapp_News){

        /*var height_Value =  [...document.querySelectorAll('.block_section_news')].map(el => el.getBoundingClientRect().height * 4);*/
        var height_Value =  $(wrapp_News).outerHeight() * 4; 
        value =  height_Value / 4;
        scrollLeft = value;   
       
        return scrollLeft;
          
       }    

};

scrollLeft = Calcule_Height();
window.addEventListener('resize', Calcule_Height);

  document.querySelectorAll('.block_section_news').forEach(element_Scrolls => {

    btn_left_right[0].addEventListener('click', () => {
      
      element_Scrolls.scrollBy({ 
         top: -scrollLeft,
         behavior: 'smooth'  
    });  
    
});

     btn_left_right[1].addEventListener('click', () => {

      element_Scrolls.scrollBy({ 
          top: scrollLeft,
          behavior: 'smooth'         
    });  
   })
  
});
}

if (typeof(btn_left_right[0]) === 'undefined' && typeof(btn_left_right) !== null){
  scroll_left_right = function(){}
}else{
  scroll_left_right();
}

 

////* USERAGENT */////
if (wrapp_table === null){
  scroller = function(){};
}else if(!! navigator.userAgent.match(/(Opera|OPR)\//i)){
  scroller = function(){};
}else if(!! navigator.userAgent.match(/(Firefox)\//i)){
  scroller = function(){};
}
else{
  scroller ();
}


////* FLOW IMAGE */////
/*
const btn_get_open = document.getElementsByClassName('btn_free_crypto')[0];
const btn_get_close = document.getElementsByClassName('btn_free_button')[0];

function btn_free () {
  
  var show_get = function () {
    btn_get_open.classList.remove('btn_open');
    btn_get_close.classList.remove('btn_hide');
  }

  var hide_get = function () {
    btn_get_open.classList.add('btn_open');
    btn_get_close.classList.add('btn_hide');
  }

  

  $(document).on('click', '.btn_free_button', function() {
    if (!$(btn_get_close).hasClass('btn_hide')) {
        return;
    }
    show_get();

});

$(document).on('click', '.btn_free_crypto', function() {
    if ($(btn_get_close).hasClass('btn_open')) {
        return;
    }
    hide_get();

});
}
btn_free ();
*/

////* LOGIN REGISTER */////
var icon_eyes = document.querySelectorAll('.password_icon');

function password_view() {

  var password_input = document.querySelector("#_password-login");

  icon_eyes[0].style.visibility = "hidden";


  icon_eyes.forEach(icon => {
    icon.addEventListener('click', () => {
      password_input.type = password_input.type === "password" ? "text" : "password";
      icon_eyes[0].style.visibility = icon_eyes[0].style.visibility === "hidden" ? "visible" : "hidden";
      icon_eyes[1].style.visibility = icon_eyes[1].style.visibility === "hidden" ? "visible" : "hidden";
    });

  });

}
if (icon_eyes.length > 0){password_view();}else{void(0)};



const copy_box = document.querySelectorAll('.button_cop');

function copyfunction() {

  var copyText = Array.from(document.querySelectorAll('.copy'));

  for (i=0; i < copy_box.length; i++){

    copy_box[i].addEventListener('click', copyclick(i));  
}

        function copyclick(i) {
          
        let copyTexts = copyText[i].textContent;
         return function() {
        
          var copyContent = async () => {
            try {
              await navigator.clipboard.writeText(copyTexts);  
            } catch (err) {
              return err;
            }
          }
          copyContent();
    }
   }   

   function copy_anim (){
    copy_box.forEach(calc =>{ calc.addEventListener('click', () => {
      calc.classList.add('cop_anim');
      setTimeout(() => {
        calc.classList.remove('cop_anim');
      }, 500);
      })
    })
  }
  copy_anim()

}
copyfunction();

$(".link_table").click(function() {
  var url = $(this).find("a").attr("href"); 
  window.open(url, '_blank')
  return false;
});


const CRYPTO_NEWS =  Array.from(document.querySelectorAll('#Bitcoin_news, #nft_news, #web3_news'));
const blog_Textual = Array.from(document.querySelectorAll('.Paraph_all_news'));
var caroussel_Info = () => {

  CRYPTO_NEWS.forEach(element => element.style.display = "none");
  CRYPTO_NEWS[0].style.display = "grid";
  BUTTON_NEWS[0].style.cssText = `
  position: absolute;
  opacity: 1`;


for (i = 0; i < BUTTON_NEWS.length; i++){

  BUTTON_NEWS[i].addEventListener('click', bind_button_new(i), false);
}

function bind_button_new(i) {
 
  return function(e) {
    e.preventDefault();

    CRYPTO_NEWS.forEach(element => {
      element.classList.add('hide_news');
      element.classList.remove('show_news');
    });
 
    $(CRYPTO_NEWS).stop().fadeOut(0);
    $(CRYPTO_NEWS[i])
    .css("display", "grid")
    .hide()
    .stop()
    .fadeIn(0);
    CRYPTO_NEWS[i].classList.remove('hide_news');
    CRYPTO_NEWS[i].classList.add('show_news');
    $('.block_section_news').animate({scrollTop: 0});
    

    
    blog_Textual.forEach(el => {
        el.classList.add('hide');
        el.classList.remove('active');
    })

    $(blog_Textual).stop().fadeOut(0);
    $(blog_Textual[i])
    .css("display", "block")
    .hide()
    .stop()
    .fadeIn(0);
    blog_Textual[i].classList.add('active');
    if (blog_Textual[i].classList.contains('hide')){
      blog_Textual[i].classList.remove('hide');
    }

    BUTTON_NEWS.forEach(element => {

      element.classList.add('categorie_close');
      element.classList.remove('categorie_open');
      element.classList.remove('abso_button');
      element.style.position = "relative";
    });
 

    BUTTON_NEWS[i].classList.add('categorie_open');
    BUTTON_NEWS[i].classList.remove('categorie_close');
    BUTTON_NEWS[i].style.opacity = "0";
    BUTTON_NEWS[i].style.position = "";
    
    var transition_width = document.querySelectorAll('.categorie_open')

    transition_width.forEach(el => {

      el.addEventListener('transitionend', (e) => {

        if (!BUTTON_NEWS[i].classList.contains('categorie_close') && e.propertyName === 'color'){
          BUTTON_NEWS[i].classList.add('abso_button'); 
        }
     
     })
    });
    
    var BUTTON_NEWS_Child = BUTTON_NEWS[i].children;
   
    BUTTON_NEWS_Child = BUTTON_NEWS_Child[0].href;
   
    window.location.assign(BUTTON_NEWS_Child);
    
  }
}

}
if (BUTTON_NEWS.length === 0){
  var caroussel_Info = {}
}else{
  caroussel_Info();
}

function animateScroll_Info() {

  const callback = (entries) => {

            entries.forEach(
                (entry) => {
                    if (entry.isIntersecting) {
                      $(entry.target)
                      entry.target.classList.add('animatescroll');
                    } else {    
                      $(entry.target)
                      entry.target.classList.remove('animatescroll');
                    }
                }
            );       
        }

        let observer = new IntersectionObserver(callback);

        const animationItems = document.querySelectorAll('.table_crypto_news');  

          animationItems.forEach(item => {
            observer.observe(item)         
        })

}

animateScroll_Info();

function Arow_fixed() {
  
  let reveals = document.querySelector(".block_Arrow");
  let info_group = document.querySelector('#fake_sticky');


  if(info_group){
    var elementTop = info_group.getBoundingClientRect().top;
  }else{
    return
  }
   
     if(elementTop < -90){
      reveals.classList.add("fixed_nav");
     }else{
      reveals.classList.remove("fixed_nav");
     }
    
}


window.addEventListener("scroll", Arow_fixed,{passive: true},false);


function Anim_Show_More_Info () {

  const calq_img = document.querySelectorAll('.crypto_new_img_calq');
  var anchor_show_more = document.querySelectorAll('.table_crypto_news a');
  

    for (i = 0; i < anchor_show_more.length; i++){ 

     calq_img[i].setAttribute('title', anchor_show_more[i])
     calq_img[i].addEventListener('click', gotoUrl2(i));

     ['mouseover', 'mouseout'].forEach(e => calq_img[i].addEventListener(e, anchor_hover(i)));
     ['mouseover', 'mouseout'].forEach(e => anchor_show_more[i].addEventListener(e, anchor_hover(i)));

    }

    function  anchor_hover (i) {
      return function (e) {
        
        let type = e.type;

        if (type === 'mouseover'){
           calq_img[i].classList.add('show_more_info_anim');
        }else{
           calq_img[i].classList.remove('show_more_info_anim');
        }
     
      }
    }
    function gotoUrl2 (i) {
      return function (e){
        e.preventDefault()
  
       window.open(anchor_show_more[i].href);

      }
      } 

}

Anim_Show_More_Info ()

//////////////////////////////////////////////////

/////////////////////////////////////////////////

const boitier_courbe_calq = document.querySelector('.boitier_courbe_calq')
const percent_info = [...document.querySelectorAll('.percent_info')];
const boitier_courbe_info = document.querySelectorAll('.boitier_courbe_info');

function Scroll_auto ()  { 

const percent_info_InnerHTML = Array.from(document.querySelectorAll('.percent_info')).map(el => el.textContent.replace(/ |\n/g,''));
 

let id = null;
let lastScrollValue = 0
let double_lastScrollValue = 0
let boitier_courbe_height;

  boitier_courbe_height = boitier_courbe_info[1].getBoundingClientRect().height;


let scrollOptions = { top: boitier_courbe_height, behavior: 'smooth' }

let intScroll = window.setInterval(() => {
  double_lastScrollValue = lastScrollValue;
  lastScrollValue = boitier_courbe_calq.scrollTop;

  if (double_lastScrollValue > 0 && double_lastScrollValue == lastScrollValue) {
    boitier_courbe_calq.scrollBy({ top: boitier_courbe_calq.scrollHeight * -1, behavior: 'smooth' });
  } else if (boitier_courbe_calq.scrollTop == 0) {
    boitier_courbe_calq.scrollBy({ top: boitier_courbe_height, behavior: 'smooth' });
  } else {
    boitier_courbe_calq.scrollBy(scrollOptions);
  }
}, 4000);

boitier_courbe_calq.addEventListener('scroll', () => {clearInterval(id)});

 for (var i = 0; i < percent_info_InnerHTML.length; i++){
    
  if (percent_info_InnerHTML[i].includes("-")){
    percent_info[i].classList.add('negative_')
  }else{
    percent_info[i].classList.add('positive_')
  }

 }


 const callback = (entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting){
      entry.target.classList.add('active');
      entry.target.classList.remove('hidden');
    }else{
      entry.target.classList.add('hidden')
      entry.target.classList.remove('active')

    }
  
  });
};

 const observer = new IntersectionObserver(callback);

 boitier_courbe_info.forEach(intersection => {
 
  observer.observe(intersection);

 });

}

if (typeof(boitier_courbe_calq) != 'undefined' && boitier_courbe_calq != null){
  Scroll_auto ();
}else{
  Scroll_auto = function(){};
}


const counters = document.querySelectorAll('.counter');
const speed = 100;

counters.forEach((counter) => {
  const value = +counter.getAttribute('data-count');
  const time = value / speed;
  let currentValue = 0;

  const animate = () => {
    currentValue += time;
    if (currentValue >= value) {
      counter.innerText = value;
      return;
    }
    counter.innerText = Math.ceil(currentValue);
    setTimeout(animate, 1);
  }
  
  animate();
});


