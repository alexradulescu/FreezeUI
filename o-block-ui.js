(() => {
    "use strict";

    // Setup the element to be appended
    let blockHtml = document.createElement('div');
        blockHtml.classList.add('o-block-ui');
        blockHtml.setAttribute('data-text', 'Loading');

    // Setup style and append it to the head
    let s = document.createElement('style');
        s.innerHTML = `
            @keyframes load {
                0% { transform: translate3d(-50%, -50%, 0) rotate(0deg); }
                100% { transform: translate3d(-50%, -50%, 0) rotate(360deg); }
            }

            .o-block-ui { position:absolute; top:0; left:0; width:100%; height:100%; z-index:999999999; background-color:rgba(255, 255, 255, .5); }
                .o-block-ui:before { content: attr(data-text); display:block; max-width:75px; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); font-size:16px; font-family:sans-serif; }
                .o-block-ui:after { content:''; display:block; width:100px; height:100px; border-radius:50%; border-width: 2px; border-style: solid; border-color: transparent blue blue blue; position:absolute; top:50%; left:50%; animation: load .85s infinite linear; }
        `;
    document.head.appendChild(s);

    window.blockUI = (selector) => {
        const parentElement = selector ? document.querySelector(selector) ? document.querySelector(selector) : document.body : document.body;
        parentElement.appendChild(blockHtml);
    };
    
    window.unblockUI = () => {
        const element = document.querySelector('.o-block-ui');
        element.parentElement.removeChild(element);
    };
})();