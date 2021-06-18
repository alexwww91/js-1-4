function num(min, max) {
    var a = String(Math.round(Math.random() * (max - min)) + min);
    var arr = Array.from(a);
    return arr;
}

var arr = num(0, 999);
if (arr.length == 3) {
    function Arr(Сотни, Десятки, Еденицы) {
        this.Сотни = Сотни;
        this.Десятки = Десятки;
        this.Еденицы = Еденицы;
    }
    var arr = new Arr(arr[0], arr[1], arr[2]);
} else if (arr.length == 2) {
    function Arr(Десятки, Еденицы) {
        this.Десятки = Десятки;
        this.Еденицы = Еденицы;
    }
    var arr = new Arr(arr[0], arr[1]);
} else if (arr.length == 1) {
    function Arr(Еденицы) {
        this.Еденицы = Еденицы;
    }
    var arr = new Arr(arr[0]);
}

console.log(arr);