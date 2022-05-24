function blurit() {
    document.querySelector('#bod').style.filter = 'blur(30px)';
}

var count = 0;

function unblur() {
    count += 1;

    if (isMinimized() && count == 3) {
        document.querySelector('#bod').style.filter = 'blur(0px)';
    }

}

function isMinimized() {
    return (window.screenX < -window.screen.availWidth) &&
    (window.screenY < -window.screen.availHeight);
  }