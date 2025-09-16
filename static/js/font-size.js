 function changeFontSize(step) {
    const elements = document.querySelectorAll('body, body *:not(script):not(style)');
    elements.forEach(el => {
        const currentSize = parseFloat(window.getComputedStyle(el).fontSize);
        if (!isNaN(currentSize)) {
            const newSize = currentSize + step;
            if (newSize >= 12 && newSize <= 24) { // ограничения 12px-24px
                el.style.fontSize = newSize + 'px';
            }
        }
    });
}

function resetFontSize() {
    const elements = document.querySelectorAll('body, body *');
    elements.forEach(el => {
        el.style.fontSize = '';
    });
}