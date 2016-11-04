// code snippet
window.codeRun = function codeRun() {
  var snippets = document.querySelectorAll('.code-sample');
  for (var i = 0; i < snippets.length; i++) {
    var newSnippet = snippets[i].innerHTML;
    newSnippet = newSnippet.replace(/\</g, '&lt;').replace(/\>/g, '&gt;').replace(/\t/g, '&nbsp;&nbsp;');
    snippets[i].innerHTML = newSnippet;
  }
}; codeRun();
