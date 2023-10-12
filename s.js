function Add(txt) {
    document.forms[0].elements[0].focus();
    document.execCommand('insertHTML', false, txt);
    document.forms[0].requestSubmit();
}

for (var word in words) {
    Add(words[word]);
}
