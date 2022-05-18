const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    // const node = document.querySelector(element);
    const node = element;
    if (node.classList.contains('has-animated')) {
      return;
    }
    
    const animations = Array.isArray(animation) ? [`${prefix}animated`, ...animation] : [`${prefix}animated`, animation];
    node.classList.add(...animations);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(...animations);
      node.classList.add('has-animated');
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, { once: true });
  });

// animate speed
// animate__slow	2s
// animate__slower	3s
// animate__fast	800ms
// animate__faster	500ms
// animate repeat
// animate__repeat-1	1
// animate__repeat-2	2
// animate__repeat-3	3
// animate__infinite	infinite
// animate delay
// animate__delay-2s	2s
// animate__delay-3s	3s
// animate__delay-4s	4s
// animate__delay-5s	5s
// animate configs
const animateList = [
  {
    domSelector: '.left-ad',
    enter: ['animate__backInLeft'],
    exit: [],
  },
  {
    domSelector: '.right-ad',
    enter: 'animate__backInRight',
    exit: '',
  },
  {
    domSelector: '.ad_text',
    enter: 'animate__backInUp',
  },
  {
    domSelector: '.section-title',
    enter: 'animate__rubberBand',
  },
  {
    domSelector: '.feature-item:nth-child(2n + 1) .title',
    enter: 'animate__bounceInLeft',
  },
  {
    domSelector: '.feature-item:nth-child(2n + 1) .content',
    enter: 'animate__bounceInLeft',
  },
  {
    domSelector: '.feature-item:nth-child(2n) .title',
    enter: 'animate__bounceInRight',
  },
  {
    domSelector: '.feature-item:nth-child(2n) .content',
    enter: 'animate__bounceInRight',
  },
  {
    domSelector: '.market-features .item:nth-child(2n + 1) .main-img',
    enter: 'animate__fadeInTopLeft',
  },
  {
    domSelector: '.market-features .item:nth-child(2n) .main-img',
    enter: 'animate__fadeInTopRight',
  },
  {
    domSelector: '.market-features .item:nth-child(2n) .introduce',
    enter: 'animate__fadeInTopLeft',
  },
  {
    domSelector: '.market-features .item:nth-child(2n + 1) .introduce',
    enter: 'animate__fadeInTopRight',
  },
  {
    domSelector: '.nft-item',
    enter: 'animate__rotateIn',
  },
  {
    domSelector: '.nft-bg-line',
    enter: 'nft-bg-line',
  },
  {
    domSelector: '.nft-remark',
    enter: 'animate__swing',
  },
  {
    domSelector: '.echarts-title-wrap',
    enter: 'animate__heartBeat',
  },
  {
    domSelector: '.right-colors',
    enter: 'animate__fadeInRightBig',
  },
  {
    domSelector: '.left-title',
    enter: 'animate__flipInY',
  },
  {
    domSelector: '.time-line-item',
    enter: 'animate__zoomInRight',
  },
  {
    domSelector: '.partner-item .partner-img',
    enter: 'animate__flipInX',
  },
  {
    domSelector: '.partner-item .partner-name',
    enter: 'animate__flipInY',
  },
  {
    domSelector: '.team-introduce',
    enter: 'animate__heartBeat',
  },
  {
    domSelector: '.partner-item',
    enter: 'animate__headShake',
  },
  {
    domSelector: '.link-item',
    enter: 'animate__flipInY',
  },
];

// get the distance of element to page top
function getPageTop(element) {   
  var realTop = element.offsetTop;
  var parent = element.offsetParent;
  while (parent !== null) {
      realTop += parent.offsetTop;
      parent = parent.offsetParent;
  }
  return realTop;
}

function handleBodyScroll() {
  animateList.forEach(item => {
    const domList = document.querySelectorAll(item.domSelector);
    [].forEach.call(domList, dom => {
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const pageTop = getPageTop(dom);
      if (pageTop >= scrollTop - 50 && pageTop <= scrollTop + clientHeight) {
        animateCSS(dom, item.enter);
      }
    });
  });
}

function throttle(fn, delay = 300) {
  var timer = null;
  return function (...args) {
    if (timer) {
      return;
    }
    fn(...args);
    timer = setTimeout(function () {
      clearTimeout(timer);
      timer = null;
    }, delay);
  }
}

function debounce(fn, delay = 300) {
  var timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn(...args);
    }, delay);
  }
}

const timeLineNode = document.querySelector('.time-line-wrap');
const progressNode = document.querySelector('.axis-progress');
function handleScrollProgress() {
  const pageTop = getPageTop(timeLineNode) - 400;
  const offsetHeight = timeLineNode.offsetHeight;
  const scrollTop = document.documentElement.scrollTop;
  const diff = scrollTop - pageTop;
  if (diff < 0 || diff > offsetHeight) return;
  progressNode.style.height = Math.ceil(diff / offsetHeight * 100) + '%';
}

const navLinks = document.querySelectorAll(".nav-link");
[...navLinks].forEach(nav => {
  nav.onclick = function (e) {
    e.preventDefault();
    const link = this.getAttribute('href');
    const dom = document.querySelector(link); // ! pay attention: only class or id is supported to supply in href
    if (!dom) return;
    const domPageTop = getPageTop(dom);
    window.scrollTo({
      top: domPageTop - 100, // 100 is the height of header
      behavior: 'smooth',
    })
  }
});

window.addEventListener('scroll', throttle(handleBodyScroll), false);
window.addEventListener('scroll', handleScrollProgress, false);
window.addEventListener('ready', handleBodyScroll, false);
