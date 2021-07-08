function num(a){
    document.getElementById('screen').value += a
}

function empty(){
    document.getElementById('screen').value = "";
}
function back() {
    var value = document.getElementById('screen').value;
    document.getElementById('screen').value = value.substr(0, value.length - 1);
}

function result(){
    var reslt = document.getElementById("screen")
    reslt.value = eval(reslt.value)
}