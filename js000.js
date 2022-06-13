var cel = document.getElementById("cels");
var fah = document.getElementById("fah");

cel.addEventListener('input', function () {
    let cl = this.value;
    let f = (cl * 9 / 5) + 32;
    fah.value = f;
});

fah.addEventListener('input', function () {

});