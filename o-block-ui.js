(() => {
    "use strict";
    let blockHtml = document.createElement('div');
    blockHtml.classList.add('o-block-ui');
    blockHtml.setAttribute('data-text', 'Loading');

    var styleDom = document.createElement('style');
    styleDom.innerHtml = "@keyframes load{0%{transform:translate3d(-50%,-50%,0) rotate(0)}100%{transform:translate3d(-50%,-50%,0) rotate(360deg)}}.o-block-ui{position:absolute;top:0;left:0;width:100%;height:100%;z-index:999999999;background-color:rgba(255,255,255,.5)}.o-block-ui:after,.o-block-ui:before{display:block;position:absolute;top:50%;left:50%}.o-block-ui:before{content:attr(data-text);width:50px;transform:translate(-50%,-50%);font-size:16px}.o-block-ui:after{content:'';width:100px;height:100px;border-radius:50%;border-width:2px;border-style:solid;border-color:transparent #00f #00f;animation:load 1.1s infinite linear}";
    document.head.appendChild(styleDom);

    window.blockUI = (selector) => {
        const parentElement = selector ? document.querySelector(selector) ? document.querySelector(selector) : document.body : document.body;
        parentElement.appendChild(blockHtml);
    };
    
    window.unblockUI = () => {
        const element = document.querySelector('.o-block-ui');
        element.parentElement.removeChild(element);
    };
})();