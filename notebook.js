function changeFontType(font) {
    document.getElementById('text-box').style.fontFamily = font.value;
}

function changeFontSize(size) {
    document.getElementById('text-box').style.fontSize = size.value + "px";
}

function makeBold() {
    var isBold = document.getElementById('text-box').style.fontWeight;

    if (isBold == 'normal') {
        document.getElementById('text-box').style.fontWeight = 'bold';
    } else {
        document.getElementById('text-box').style.fontWeight = 'normal';
    }
}

function makeItalic() {
    var isItalic = document.getElementById('text-box').style.fontStyle;

    if (isItalic == 'normal') {
        document.getElementById('text-box').style.fontStyle = 'Italic';
    } else {
        document.getElementById('text-box').style.fontStyle = 'normal';
    }
}

function makeUnderline() {
    var isUnderline = document.getElementById('text-box').style.textDecoration;

    if (isUnderline !== 'underline') {
        document.getElementById('text-box').style.textDecoration = 'underline';
    } else {
        document.getElementById('text-box').style.textDecoration = 'none';
    }
}

function resetText() {
    var text = document.getElementById('text-box').style;

    text.textDecoration = 'none';
    text.fontStyle = 'normal';
    text.fontWeight = 'normal';
    text.fontFamily = 'Arial';
    text.fontSize = '16px';
}