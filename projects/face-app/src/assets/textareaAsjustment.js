let textarea;

function onBodyLoad() {
  textarea = document.querySelector('textarea');
}

function textAreaAdjust(element) {
  element.style.height = "1px";
  element.style.height = (25+element.scrollHeight)+"px";
}


