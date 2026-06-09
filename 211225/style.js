console.log("%c\n加入Techaos! 混技\nQQ群: 169994096\n", "font:3em Montserrat,sans-serif;");
console.log("%c\n野生技协(混技分部)\nQQ群: 894656456\n", "font:3em Montserrat,sans-serif;");
search = location.search;
setInterval(function () {
  try { if (!location.host.match("exam.thisis.host")) document.getElementById("verify").style.display = "flex"; }
  catch (e) { alert("检测到意外修改内容的考试时钟！\n" + e); location.href = "https://exam.thisis.host"; }
}(), 2000);
eleMain = document.getElementById("main");
eleMenu = document.getElementById("menu");
// eleForewarn = document.getElementById("forewarn");
eleMsg = document.getElementById("msg");
gallery = [
  { phase: "默认", list: [{ name: "campus", xwzbid: "e6e5b4e8e80debb10e61f854696cef7f" }, { name: "autumn", xwzbid: "da07a39c238357f9c39e5717b8a9c8f9" }] },
  { phase: "2021年11月", list: [{ name: "211101_绩笑_窗边", xwzbid: "ad57061c5331004aa903a538e60ce6f6" }, { name: "211102_绩笑_书堆", xwzbid: "3e3c8cfccf6f1fbd5dca012da616f94a" }, { name: "211103_绩笑_讲台", xwzbid: "c10719e3cf6fb335b3be8bf91fb91da3" }, { name: "211104_绩笑_课桌", xwzbid: "84ebd03a1fa73c3cf8c545adf7a61003" }, { name: "211105_绩笑_商店", xwzbid: "c8030ebcf54a299ec68a0d7714c3079e" }, { name: "211106_绩笑_云层", xwzbid: "8c02d70150f0d44bd12c8dd78cfe8e0b" }, { name: "211107_绩笑_蒲公英", xwzbid: "06a9213ddf6c271efb5f362599c3a0a7" }] },
  { phase: "2021年12月上", list: [{ name: "211201_純粋な_校门", xwzbid: "ffe43161091c3e086c0c757513938708" }, { name: "211202_純粋な_楼顶", xwzbid: "8e10d9dd4dfe9673813fd3380e45d174" }, { name: "211203_純粋な_操场", xwzbid: "79d1d64ad68cc39a4f4f658cc1c86dd4" }, { name: "211204_純粋な_广场", xwzbid: "655996e17525aec70a552349bbff0158" }, { name: "211205_齐天_书桌", xwzbid: "9f1f737065468006c5b38ab3b16684b7" }, { name: "211206_云山_环道", xwzbid: "d689b757ce6c36ead44ab44d7680f387" }, { name: "211207_Echo_云海", xwzbid: "16a660a4e4151664fabcd933830fc66b" }, { name: "211208_Echo_楼顶", xwzbid: "f0347b55687558faedf4fcef68bd198d" }, { name: "211209_Echo_杨树林", xwzbid: "183f64fe28824c645f25d31a65bfb9a3" }, { name: "211210_Echo_操场", xwzbid: "def64788d6b39f9317a1138df0f1e3b9" }, { name: "211211_Echo_楼道", xwzbid: "c637b572159025a80ac59ea89daddfa1" }, { name: "211212_Echo_水杉", xwzbid: "283b282532369cff4dc08cbab06728eb" }, { name: "211213_凌球_雪松", xwzbid: "8f63d50aaf96d9f6ad0ec95e8f85f4a5" }] },
  { phase: "2021年12月下", list: [{ name: "211214_北盼城南烟花繁_日落", xwzbid: "90c10f637fe3b7300f34fe093e625cd7" }, { name: "211215_北盼城南烟花繁_楼道", xwzbid: "50a6aac0b92c42889c502c450089c5d4" }, { name: "211216_北盼城南烟花繁_兼程", xwzbid: "0f0c9d868e6c1fd2a421daaab42d40c3" }, { name: "211217_小佗_山桃", xwzbid: "3dd9e1d14e00d30be6788c3c7e791825" }, { name: "211218_小佗_银杏", xwzbid: "d3e1e44a52d431c3db18956ac0e9bb5a" }, { name: "211219_小佗_复羽叶栾树", xwzbid: "9c3bf1777cbae93cd8fd2ea4be6c0882" }, { name: "211220_小佗_云海", xwzbid: "e0b08330ddb922b237d5abfeac533d8a" }, { name: "211221_小佗_合欢花", xwzbid: "62883665ddfa464d974a26e71f14a785" }, { name: "211222_小佗_梅", xwzbid: "837ea0c0bcf79ff942eb7a5207371b6a" }, { name: "211223_小佗_合欢", xwzbid: "f7aa6954c006e7aec0f27f165860a08c" }, { name: "211224_小佗_紫叶李", xwzbid: "493d51e87092698ede2d60e7b163c054" }, { name: "211225_小佗_操场", xwzbid: "b211467545e5f09e693849584c052a98" }, { name: "211226_小佗_幕墙与树", xwzbid: "96b4ecbb376b43e757f4cba5e9014e97" }, { name: "211227_小佗_篮球架", xwzbid: "d7b20ec4149b9a021382969fabae8a2e" }, { name: "211228_小佗_永远热爱", xwzbid: "d90dff621e86a8823fad14e10a0e19cd" }, { name: "211229_姚小瑶_云", xwzbid: "73ef8cf22f34cb1cce637858ebe6f823" }, { name: "211230_姚小瑶_运动会", xwzbid: "0dbb9156e678aa0ff5d69bec04918279" }] }
];
for (bglist = '<!-- 通过style.js生成的历史背景树状目录 -->\n', gallerynum = 0; gallerynum < gallery.length; gallerynum++) {
  bglist += '  <div class="dropdown">' + gallery[gallerynum].phase + '\n    <div style="min-width:15em;max-height:15em;overflow-y:scroll;">\n';
  for (let listnum = 0; listnum < gallery[gallerynum].list.length; listnum++) {
    bglist += '      <a onclick="bg(' + gallerynum + ',' + listnum + ')">' + gallery[gallerynum].list[listnum].name + '</a>\n'
  }
  bglist += '    </div>\n </div>\n';
}
document.getElementById("bglist").innerHTML = bglist;
// 随便选一张壁纸
bg();
// 定时换壁纸（康总加成🙏）
setInterval(bg, 2004 * 0411);
// 希沃屏保预警
// “屏保都统一关闭了，注释掉，白写个功能”
// !location.href.match("noforewarn") ? setInterval(updateForewarn, 600) : 0;
// 希沃屏保剩余时间
// forewarntime = 45;
// onmousemove = onclick = function () { forewarntime = 45; };
// 键盘功能函数
onkeydown = function (e) {
  // forewarntime = 45;
  switch (e.key) {
    // 隐藏右键菜单
    case "Escape": eleMenu.style.display = "none"; break;
    case "F12": if (confirm("若要访问GitHub上的源代码仓库来研究代码，请点击“确定”。")) { open("https://github.com/L33Z22L11/ExamClock"); }
    else if (confirm("确认要使用F12工具吗？由于本时钟的DOM元素属于异步加载、定时更新，你对网页所做的更改很可能会被随时覆盖。")) {
      alert("欢迎使用调试工具，若有问题或申请加入我项目组可与我联系，你将对自己所做的行为承担一切可能后果。");
    } else e.preventDefault(); break;
    case ";": relStyle("fontSize", -0.05, "em", 0.75, 1.25); break;
    case "'": relStyle("fontSize", +0.05, "em", 0.75, 1.25); break;
    case ",": relStyle("opacity", -0.05, "", 0.5, 1); break;
    case ".": relStyle("opacity", +0.05, "", 0.5, 1); break;
  }
};
// 展示右键菜单
eleMain.oncontextmenu = function (e) {
  if (!e.ctrlKey) {
    e.preventDefault();
    eleMenu.style.display = "block";
    eleMenu.style.left = e.clientX + "px";
    eleMenu.style.top = e.clientY + "px";
  }
};
// 隐藏右键菜单
eleMain.onclick = function () { eleMenu.style.display = "none"; };
// 关闭通知气泡
// eleForewarn.onclick = 
eleMsg.onclick = function () { this.style.display = ""; };
// 希沃屏保预警，2021-09屏保已经更换内容且被信息中心关闭
function updateForewarn() {
  forewarntime -= 1;
  output("forewarntime", "在" + forewarntime + "分钟后");
  if (forewarntime < 0) {
    eleForewarn.style.backgroundColor = "rgba(255,255,255,.2)";
    output("forewarntime", "已经");
  } else if (forewarntime < 10) {
    eleForewarn.style.display = "flex";
    eleForewarn.style.backgroundColor = "#f52";
  } else {
    eleForewarn.style.display = "";
  }
}
// 发送气泡通知
function send(msg) {
  eleMsg.style.display = "flex";
  output("msgcontent", msg);
  // “变量不定义也不会报错了，妙啊”
  try { clearInterval(msgnum); } catch (e) { }
  msgnum = setInterval(function () { eleMsg.style.display = ""; }, 15000);
}
// 向页内元素输出值
function output(id, value) { document.getElementById(id).innerHTML = value; }
// 主体元素样式调节
function relStyle(prop, delta, unit, minVal, maxVal) {
  propVal = eleMain.style[prop].replace(unit, "") * 1 + delta;
  propVal = Math.round(Math.min(Math.max(propVal, minVal), maxVal) * 1E2) / 1E2;
  eleMain.style[prop] = propVal + unit;
  // 保留两位小数，然而toFixed()有精度问题
  output(prop, propVal);
  send(prop + "增加了" + delta + "，调节为" + propVal);
}
// 更换背景
function bg(phasenum, seed) {
  if (!phasenum) phasenum = new Date() % gallery.length || gallery.length - 1;
  if (!seed) seed = new Date() % 20030924;
  document.getElementsByTagName("html")[0].style.backgroundImage =
    "url(https://images.xuewuzhibu.cn/" + gallery[phasenum].list[seed % (gallery[phasenum].list.length)].xwzbid + ".jpg)";
  send("背景已更换为" + gallery[phasenum].phase + gallery[phasenum].list[seed % (gallery[phasenum].list.length)].name);
  output("bg", gallery[phasenum].phase + gallery[phasenum].list[seed % (gallery[phasenum].list.length)].name);
}
function oldBg(phase, seed) {
  eleMain.style.background = "rgba(0,0,0,0.75)";
  if (phase == 0) document.getElementsByTagName('html')[0].style.backgroundImage =
    'url(' + prompt('输入背景url') + ')';
  else if (phase == 1) document.getElementsByTagName("html")[0].style.backgroundImage =
    "url(https://bu.dusays.com/2021/11/23/" + ['9dd5f0f9ae39c', '86f0354849ead', 'aef07ee202d3c', 'a3676bbf32d4e', '4b347391fec34', 'b1a6b10044d7e', '10f58d6677aeb'][seed % 7] + ".jpg)";
  else if (phase == 2) document.getElementsByTagName("html")[0].style.backgroundImage =
    "url(https://bu.dusays.com/2021/12/19/" + ['0e34aef718e53', 'cbb7ca9f47a46', 'd9daedc01bca6', '2ecfe0c8ff887', '8a1d489af0279', '12479fb170d16', '9b17e5fffdb73', 'cad676f747c56', 'eaf02f09741ea', 'c03de66f3cef0', '84a92ddf8c5c8', '6b4b98bd96ee2', '0b91c8d48bbb0'][seed % 13] + ".jpg)";
  else document.getElementsByTagName("html")[0].style.backgroundImage = eleMain.style.background = "";
}
// 全屏
function fullscreen() {
  try {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen(); output("fullscreen", "退出");
    } else { document.exitFullscreen(); output("fullscreen", "全屏"); }
  } catch (e) { send("该浏览器不支持此操作，请手动最大化窗口或全屏。"); }
}
