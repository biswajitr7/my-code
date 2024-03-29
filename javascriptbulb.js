function light(Switch) {
    var pic;
    if (Switch==0){
        pic="off.jpeg"
    }
    else{
        pic="on.jpeg"
    }
    document.getElementById('Bulb').src=pic;
}

