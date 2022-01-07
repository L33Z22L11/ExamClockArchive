!function (t) {
  var k = ~~((new Date() - 1617235200000) / 315532800000 * t.length);
  document.getElementById("slogan").innerHTML = "<mark>" + t.slice(0, k - t.length) + "</mark>" + t.slice(k);
}("Examined what we've been trying hard, Clock concerns you with what's witnessed our growth.");
