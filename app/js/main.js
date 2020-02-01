$(function(){

$('.menu__slider').slick({
	nextArrow: false,
	prevArrow: false,
  infinite: false,
  nextArrow: '<button type="button" class="slick-btn slick-next">next</button>',
  prevArrow: '<button type="button" class="slick-btn slick-prev">prev</button>',
	dots: false
	});


});

// start scroll
/*!function(e,t,a,n){var l,s,i,r,o,c,u,g,h,f,d,p="mPageScroll2id",_="mPS2id",C=".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id'],._ps2id",v={scrollSpeed:1300,autoScrollSpeed:!0,scrollEasing:"easeInOutExpo",scrollingEasing:"easeInOutCirc",pageEndSmoothScroll:!0,layout:"vertical",offset:0,highlightSelector:!1,clickedClass:_+"-clicked",targetClass:_+"-target",highlightClass:_+"-highlight",forceSingleHighlight:!1,keepHighlightUntilNext:!1,highlightByNextTarget:!1,disablePluginBelow:!1,clickEvents:!0,onStart:function(){},onComplete:function(){},defaultSelector:!1,live:!0},m=0,I={init:function(n){var n=e.extend(!0,{},v,n);if(e(a).data(_,n),s=e(a).data(_),!this.selector){var c="__"+_;this.each(function(){var t=e(this);t.hasClass(c)||t.addClass(c)}),this.selector="."+c}l=l?l+","+this.selector:this.selector,s.defaultSelector&&("object"!=typeof e(l)||0===e(l).length)&&(l=C),s.clickEvents&&e(a).undelegate("."+_).delegate(l,"click."+_,function(t){if(O._isDisabled.call(null))return void O._removeClasses.call(null);var a=e(this),n=a.attr("href"),l=a.prop("href");n&&-1!==n.indexOf("#/")||(O._reset.call(null),f=a.data("ps2id-offset")||0,O._isValid.call(null,n,l)&&O._findTarget.call(null,n)&&(t.preventDefault(),r="selector",o=a,O._setClasses.call(null,!0),O._scrollTo.call(null)))}),e(t).unbind("."+_).bind("scroll."+_+" resize."+_,function(){if(O._isDisabled.call(null))return void O._removeClasses.call(null);var t=e("._"+_+"-t");t.each(function(a){var n=e(this),l=n.attr("id"),s=O._findHighlight.call(null,l);O._setClasses.call(null,!1,n,s),a==t.length-1&&O._extendClasses.call(null)})}),i=!0,O._setup.call(null),O._live.call(null)},scrollTo:function(t,a){if(O._isDisabled.call(null))return void O._removeClasses.call(null);if(t&&"undefined"!=typeof t){O._isInit.call(null);var n={layout:s.layout,offset:s.offset,clicked:!1},a=e.extend(!0,{},n,a);O._reset.call(null),g=a.layout,h=a.offset,t=-1!==t.indexOf("#")?t:"#"+t,O._isValid.call(null,t)&&O._findTarget.call(null,t)&&(r="scrollTo",o=a.clicked,o&&O._setClasses.call(null,!0),O._scrollTo.call(null))}},destroy:function(){e(t).unbind("."+_),e(a).undelegate("."+_).removeData(_),e("._"+_+"-t").removeData(_),O._removeClasses.call(null,!0)}},O={_isDisabled:function(){var e=t,n="inner",l=s.disablePluginBelow instanceof Array?[s.disablePluginBelow[0]||0,s.disablePluginBelow[1]||0]:[s.disablePluginBelow||0,0];return"innerWidth"in t||(n="client",e=a.documentElement||a.body),e[n+"Width"]<=l[0]||e[n+"Height"]<=l[1]},_isValid:function(e,a){if(e){a=a?a:e;var n=-1!==a.indexOf("#/")?a.split("#/")[0]:a.split("#")[0],l=t.location.toString().split("#")[0];return"#"!==e&&-1!==e.indexOf("#")&&(""===n||n===l)}},_setup:function(){var t=O._highlightSelector(),a=1,n=0;return e(t).each(function(){var l=e(this),i=l.attr("href"),r=l.prop("href");if(O._isValid.call(null,i,r)){var o=-1!==i.indexOf("#/")?i.split("#/")[1]:i.split("#")[1],c=e("#"+o);if(c.length>0){s.highlightByNextTarget&&c!==n&&(n?n.data(_,{tn:c}):c.data(_,{tn:"0"}),n=c),c.hasClass("_"+_+"-t")||c.addClass("_"+_+"-t"),c.data(_,{i:a}),l.hasClass("_"+_+"-h")||l.addClass("_"+_+"-h");var u=O._findHighlight.call(null,o);O._setClasses.call(null,!1,c,u),m=a,a++,a==e(t).length&&O._extendClasses.call(null)}}})},_highlightSelector:function(){return s.highlightSelector&&""!==s.highlightSelector?s.highlightSelector:l},_findTarget:function(t){var a=-1!==t.indexOf("#/")?t.split("#/")[1]:t.split("#")[1],n=e("#"+a);if(n.length<1||"fixed"===n.css("position")){if("top"!==a)return;n=e("body")}return c=n,g||(g=s.layout),h=O._setOffset.call(null),u=[(n.offset().top-h[0]).toString(),(n.offset().left-h[1]).toString()],u[0]=u[0]<0?0:u[0],u[1]=u[1]<0?0:u[1],u},_setOffset:function(){h||(h=s.offset?s.offset:0),f&&(h=f);var t,a,n,l;switch(typeof h){case"object":case"string":t=[h.y?h.y:h,h.x?h.x:h],a=[t[0]instanceof jQuery?t[0]:e(t[0]),t[1]instanceof jQuery?t[1]:e(t[1])],a[0].length>0?(n=a[0].height(),"fixed"===a[0].css("position")&&(n+=a[0][0].offsetTop)):n=!isNaN(parseFloat(t[0]))&&isFinite(t[0])?parseInt(t[0]):0,a[1].length>0?(l=a[1].width(),"fixed"===a[1].css("position")&&(l+=a[1][0].offsetLeft)):l=!isNaN(parseFloat(t[1]))&&isFinite(t[1])?parseInt(t[1]):0;break;case"function":t=h.call(null),t instanceof Array?(n=t[0],l=t[1]):n=l=t;break;default:n=l=parseInt(h)}return[n,l]},_findHighlight:function(a){var n=t.location.toString().split("#")[0],l=e("._"+_+"-h[href='#"+a+"']"),s=e("._"+_+"-h[href='"+n+"#"+a+"']"),i=e("._"+_+"-h[href='#/"+a+"']"),r=e("._"+_+"-h[href='"+n+"#/"+a+"']");return l=l.length>0?l:s,i=i.length>0?i:r,i.length>0?i:l},_setClasses:function(t,a,n){var l=s.clickedClass,i=s.targetClass,r=s.highlightClass;t&&l&&""!==l?(e("."+l).removeClass(l),o.addClass(l)):a&&i&&""!==i&&n&&r&&""!==r&&(O._currentTarget.call(null,a)?(a.addClass(i),n.addClass(r)):(!s.keepHighlightUntilNext||e("."+r).length>1)&&(a.removeClass(i),n.removeClass(r)))},_extendClasses:function(){var t=s.targetClass,a=s.highlightClass,n=e("."+t),l=e("."+a),i=t+"-first",r=t+"-last",o=a+"-first",c=a+"-last";e("._"+_+"-t").removeClass(i+" "+r),e("._"+_+"-h").removeClass(o+" "+c),s.forceSingleHighlight?s.keepHighlightUntilNext&&n.length>1?(n.slice(0,1).removeClass(t),l.slice(0,1).removeClass(a)):(n.slice(1).removeClass(t),l.slice(1).removeClass(a)):(n.slice(0,1).addClass(i).end().slice(-1).addClass(r),l.slice(0,1).addClass(o).end().slice(-1).addClass(c))},_removeClasses:function(t){e("."+s.clickedClass).removeClass(s.clickedClass),e("."+s.targetClass).removeClass(s.targetClass+" "+s.targetClass+"-first "+s.targetClass+"-last"),e("."+s.highlightClass).removeClass(s.highlightClass+" "+s.highlightClass+"-first "+s.highlightClass+"-last"),t&&(e("._"+_+"-t").removeClass("_"+_+"-t"),e("._"+_+"-h").removeClass("_"+_+"-h"))},_currentTarget:function(a){var n=s["target_"+a.data(_).i],l=a.data("ps2id-target"),i=l?e(l)[0].getBoundingClientRect():a[0].getBoundingClientRect();if("undefined"!=typeof n){var r=a.offset().top,o=a.offset().left,c=n.from?n.from+r:r,u=n.to?n.to+r:r,g=n.fromX?n.fromX+o:o,h=n.toX?n.toX+o:o;return i.top>=u&&i.top<=c&&i.left>=h&&i.left<=g}var f=e(t).height(),d=e(t).width(),p=l?e(l).height():a.height(),C=l?e(l).width():a.width(),v=1+p/f,m=v,I=f>p?v*(f/p):v,O=1+C/d,S=O,b=d>C?O*(d/C):O,M=[i.top<=f/m,i.bottom>=f/I,i.left<=d/S,i.right>=d/b];if(s.highlightByNextTarget){var y=a.data(_).tn;if(y){var k=y[0].getBoundingClientRect();"vertical"===s.layout?M=[i.top<=f/2,k.top>f/2,1,1]:"horizontal"===s.layout&&(M=[1,1,i.left<=d/2,k.left>d/2])}}return M[0]&&M[1]&&M[2]&&M[3]},_scrollTo:function(){s.scrollSpeed=parseInt(s.scrollSpeed),u=s.pageEndSmoothScroll?O._pageEndSmoothScroll.call(null):u;var a=e("html,body"),n=s.autoScrollSpeed?O._autoScrollSpeed.call(null):s.scrollSpeed,l=a.is(":animated")?s.scrollingEasing:s.scrollEasing,i=e(t).scrollTop(),r=e(t).scrollLeft();switch(g){case"horizontal":r!=u[1]&&(O._callbacks.call(null,"onStart"),a.stop().animate({scrollLeft:u[1]},n,l).promise().then(function(){O._callbacks.call(null,"onComplete")}));break;case"auto":if(i!=u[0]||r!=u[1])if(O._callbacks.call(null,"onStart"),navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){var o;a.stop().animate({pageYOffset:u[0],pageXOffset:u[1]},{duration:n,easing:l,step:function(e,a){"pageXOffset"==a.prop?o=e:"pageYOffset"==a.prop&&t.scrollTo(o,e)}}).promise().then(function(){O._callbacks.call(null,"onComplete")})}else a.stop().animate({scrollTop:u[0],scrollLeft:u[1]},n,l).promise().then(function(){O._callbacks.call(null,"onComplete")});break;default:i!=u[0]&&(O._callbacks.call(null,"onStart"),a.stop().animate({scrollTop:u[0]},n,l).promise().then(function(){O._callbacks.call(null,"onComplete")}))}},_pageEndSmoothScroll:function(){var n=e(a).height(),l=e(a).width(),s=e(t).height(),i=e(t).width();return[n-u[0]<s?n-s:u[0],l-u[1]<i?l-i:u[1]]},_autoScrollSpeed:function(){var n=e(t).scrollTop(),l=e(t).scrollLeft(),i=e(a).height(),r=e(a).width(),o=[s.scrollSpeed+s.scrollSpeed*Math.floor(Math.abs(u[0]-n)/i*100)/100,s.scrollSpeed+s.scrollSpeed*Math.floor(Math.abs(u[1]-l)/r*100)/100];return Math.max.apply(Math,o)},_callbacks:function(e){if(s)switch(this[_]={trigger:r,clicked:o,target:c,scrollTo:{y:u[0],x:u[1]}},e){case"onStart":s.onStart.call(null,this[_]);break;case"onComplete":s.onComplete.call(null,this[_])}},_reset:function(){g=h=f=!1},_isInit:function(){i||I.init.apply(this)},_live:function(){d=setTimeout(function(){s.live?e(O._highlightSelector()).length!==m&&O._setup.call(null):d&&clearTimeout(d),O._live.call(null)},1e3)},_easing:function(){e.easing.easeInQuad=e.easing.easeInQuad||function(e,t,a,n,l){return n*(t/=l)*t+a},e.easing.easeOutQuad=e.easing.easeOutQuad||function(e,t,a,n,l){return-n*(t/=l)*(t-2)+a},e.easing.easeInOutQuad=e.easing.easeInOutQuad||function(e,t,a,n,l){return(t/=l/2)<1?n/2*t*t+a:-n/2*(--t*(t-2)-1)+a},e.easing.easeInCubic=e.easing.easeInCubic||function(e,t,a,n,l){return n*(t/=l)*t*t+a},e.easing.easeOutCubic=e.easing.easeOutCubic||function(e,t,a,n,l){return n*((t=t/l-1)*t*t+1)+a},e.easing.easeInOutCubic=e.easing.easeInOutCubic||function(e,t,a,n,l){return(t/=l/2)<1?n/2*t*t*t+a:n/2*((t-=2)*t*t+2)+a},e.easing.easeInQuart=e.easing.easeInQuart||function(e,t,a,n,l){return n*(t/=l)*t*t*t+a},e.easing.easeOutQuart=e.easing.easeOutQuart||function(e,t,a,n,l){return-n*((t=t/l-1)*t*t*t-1)+a},e.easing.easeInOutQuart=e.easing.easeInOutQuart||function(e,t,a,n,l){return(t/=l/2)<1?n/2*t*t*t*t+a:-n/2*((t-=2)*t*t*t-2)+a},e.easing.easeInQuint=e.easing.easeInQuint||function(e,t,a,n,l){return n*(t/=l)*t*t*t*t+a},e.easing.easeOutQuint=e.easing.easeOutQuint||function(e,t,a,n,l){return n*((t=t/l-1)*t*t*t*t+1)+a},e.easing.easeInOutQuint=e.easing.easeInOutQuint||function(e,t,a,n,l){return(t/=l/2)<1?n/2*t*t*t*t*t+a:n/2*((t-=2)*t*t*t*t+2)+a},e.easing.easeInExpo=e.easing.easeInExpo||function(e,t,a,n,l){return 0==t?a:n*Math.pow(2,10*(t/l-1))+a},e.easing.easeOutExpo=e.easing.easeOutExpo||function(e,t,a,n,l){return t==l?a+n:n*(-Math.pow(2,-10*t/l)+1)+a},e.easing.easeInOutExpo=e.easing.easeInOutExpo||function(e,t,a,n,l){return 0==t?a:t==l?a+n:(t/=l/2)<1?n/2*Math.pow(2,10*(t-1))+a:n/2*(-Math.pow(2,-10*--t)+2)+a},e.easing.easeInSine=e.easing.easeInSine||function(e,t,a,n,l){return-n*Math.cos(t/l*(Math.PI/2))+n+a},e.easing.easeOutSine=e.easing.easeOutSine||function(e,t,a,n,l){return n*Math.sin(t/l*(Math.PI/2))+a},e.easing.easeInOutSine=e.easing.easeInOutSine||function(e,t,a,n,l){return-n/2*(Math.cos(Math.PI*t/l)-1)+a},e.easing.easeInCirc=e.easing.easeInCirc||function(e,t,a,n,l){return-n*(Math.sqrt(1-(t/=l)*t)-1)+a},e.easing.easeOutCirc=e.easing.easeOutCirc||function(e,t,a,n,l){return n*Math.sqrt(1-(t=t/l-1)*t)+a},e.easing.easeInOutCirc=e.easing.easeInOutCirc||function(e,t,a,n,l){return(t/=l/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+a:n/2*(Math.sqrt(1-(t-=2)*t)+1)+a},e.easing.easeInElastic=e.easing.easeInElastic||function(e,t,a,n,l){var s=1.70158,i=0,r=n;if(0==t)return a;if(1==(t/=l))return a+n;if(i||(i=.3*l),r<Math.abs(n)){r=n;var s=i/4}else var s=i/(2*Math.PI)*Math.asin(n/r);return-(r*Math.pow(2,10*(t-=1))*Math.sin(2*(t*l-s)*Math.PI/i))+a},e.easing.easeOutElastic=e.easing.easeOutElastic||function(e,t,a,n,l){var s=1.70158,i=0,r=n;if(0==t)return a;if(1==(t/=l))return a+n;if(i||(i=.3*l),r<Math.abs(n)){r=n;var s=i/4}else var s=i/(2*Math.PI)*Math.asin(n/r);return r*Math.pow(2,-10*t)*Math.sin(2*(t*l-s)*Math.PI/i)+n+a},e.easing.easeInOutElastic=e.easing.easeInOutElastic||function(e,t,a,n,l){var s=1.70158,i=0,r=n;if(0==t)return a;if(2==(t/=l/2))return a+n;if(i||(i=.3*l*1.5),r<Math.abs(n)){r=n;var s=i/4}else var s=i/(2*Math.PI)*Math.asin(n/r);return 1>t?-.5*r*Math.pow(2,10*(t-=1))*Math.sin(2*(t*l-s)*Math.PI/i)+a:r*Math.pow(2,-10*(t-=1))*Math.sin(2*(t*l-s)*Math.PI/i)*.5+n+a},e.easing.easeInBack=e.easing.easeInBack||function(e,t,a,l,s,i){return i==n&&(i=1.70158),l*(t/=s)*t*((i+1)*t-i)+a},e.easing.easeOutBack=e.easing.easeOutBack||function(e,t,a,l,s,i){return i==n&&(i=1.70158),l*((t=t/s-1)*t*((i+1)*t+i)+1)+a},e.easing.easeInOutBack=e.easing.easeInOutBack||function(e,t,a,l,s,i){return i==n&&(i=1.70158),(t/=s/2)<1?l/2*t*t*(((i*=1.525)+1)*t-i)+a:l/2*((t-=2)*t*(((i*=1.525)+1)*t+i)+2)+a},e.easing.easeInBounce=e.easing.easeInBounce||function(t,a,n,l,s){return l-e.easing.easeOutBounce(t,s-a,0,l,s)+n},e.easing.easeOutBounce=e.easing.easeOutBounce||function(e,t,a,n,l){return(t/=l)<1/2.75?7.5625*n*t*t+a:2/2.75>t?n*(7.5625*(t-=1.5/2.75)*t+.75)+a:2.5/2.75>t?n*(7.5625*(t-=2.25/2.75)*t+.9375)+a:n*(7.5625*(t-=2.625/2.75)*t+.984375)+a},e.easing.easeInOutBounce=e.easing.easeInOutBounce||function(t,a,n,l,s){return s/2>a?.5*e.easing.easeInBounce(t,2*a,0,l,s)+n:.5*e.easing.easeOutBounce(t,2*a-s,0,l,s)+.5*l+n}}};O._easing.call(),e.fn[p]=function(t){return I[t]?I[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):I.init.apply(this,arguments)},e[p]=function(t){return I[t]?I[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):I.init.apply(this,arguments)},e[p].defaults=v}(jQuery,window,document);



    $(function(){
      $("nav a").mPageScroll2id({
        // offset: ".nav",
        scrollSpeed: 900,
        scrollEasing: "easeInOutExpo",
        scrollingEasing: "easeInOutCirc", // Устанавливает easing, который будет проигрываться если вызвать её уже во время изинга(кликнуть по ссылке во время прокрутки)
        // clickedClass: "active-item", // Устанавливает класс для ссылки, при клике на неё
        targetClass: "color-block", // Устанавливает класс для блока, при его появлении во время скролла
        highlightClass: "active-item",  // Устанавливает класс для ссылки, при скролле до привязанного к нему блоку
        keepHighlightUntilNext: false  // Один эллемент всегда будет выделен
      });

    });*/