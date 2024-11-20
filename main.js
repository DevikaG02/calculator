// function to display content
function displayContent(content) {
    result.value += content
}
// clear input
function clearInput() {
    result.value = ""
}
// result
function calOutput(){
result.value = eval(result.value)
}
// backspace
function removeLastDigit(){
    result.value = result.value.slice(0, -1)
}