(() => {
    "use strict";

    // Setup the freeze element to be appended
    let freezeHtml = document.createElement('div');
        freezeHtml.classList.add('freeze-ui');

    // Setup style and append it to the head
    let styleDom = document.createElement('style');
        styleDom.innerHTML = `
            @keyframes load {
                0% { transform:translate3d(-50%, -50%, 0) rotate(0deg); }
                100% { transform:translate3d(-50%, -50%, 0) rotate(360deg); }
            }

            .freeze-ui { position:absolute; top:0; left:0; width:100%; height:100%; z-index:999999999; background-color:rgba(255, 255, 255, .8); }
                .freeze-ui:before { content:attr(data-text); display:block; max-width:125px; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); font-size:20px; font-family:sans-serif; color:#343a40; text-align:center; text-transform:uppercase; }
                .freeze-ui:after { content:''; display:block; width:150px; height:150px; border-radius:50%; border-width:2px; border-style:solid; border-color:transparent #1c7cd6 #1c7cd6 #1c7cd6; position:absolute; top:50%; left:50%; animation:load .85s infinite linear; }
        `;
    document.head.appendChild(styleDom);

    /* Freeze function. Can pass options parameter as follows:
        options = { 
            selector: '.class-name' -> Choose an element where to limit the freeze or leave empty to freeze the whole body. Make sure the element has position relative or absolute,
            text: 'Magic is happening' -> Choose any text to show or use the default "Loading". Be careful for long text as it will break the design.
        }
    */
    window.FreezeUI = (options = { text: 'Loading'}) => {
        let parent = document.querySelector(options.selector) || document.body;
        freezeHtml.setAttribute('data-text', options.text);
        parent.appendChild(freezeHtml);
    };
    
    // The unfreeze function. No parameter needed as it will find by itself where the freezing happens and remove it.
    window.UnFreezeUI = () => {
        let element = document.querySelector('.freeze-ui');
        element.parentElement.removeChild(element);
    };
})();