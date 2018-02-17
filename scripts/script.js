function replaceText()
  {
    var a = this, b = a.innerHTML;
    a.innerHTML = a.name;
    a.name = b;
  }

window.onload = function()
  {
    var a = document.getElementsByTagName('a'), b;
    for(i=0; i<a.length; i++) if(a[i].name)

    {
      a[i].onmouseover = replaceText;
      a[i].onmouseout = replaceText;
    }
}
