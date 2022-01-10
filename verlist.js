var ver = [{
  name: "Alpha 1", date: "210401",
  content: ["文理科切换", "倒计时", "进度条"],
}, {
  name: "Alpha 2", date: "210502",
  content: ["文字亮度优化", "调整科目和计时器的位置", "测试SPA、时钟及全屏", "使用CDN字体"],
}, {
  name: "Alpha 3", date: "210529",
  content: ["正式启用SPA、时钟及全屏", "删除原页面", "网页样式调整选项", "科目调试(检查)功能"],
}, {
  name: "Beta 1", date: "210724",
  content: ["过渡动画", "禁止右键和键盘", "美化下拉菜单样式"],
}, {
  name: "Beta 2", date: "210801",
  content: ["增加欢迎气泡", "IE适配页面(/ie.html)", "希沃屏保提醒"],
}, {
  name: "Beta 3", date: "210828",
  content: ["增加帮助菜单", "计时方式优化"],
}, {
  name: "Beta 3.1", date: "210905",
  content: ["关闭屏保提醒", "优化欢迎文案"],
}, {
  name: "Beta 3.2", date: "210919",
  content: ["修复bug"],
}, {
  name: "Beta 4", date: "211006",
  content: ["增加右键菜单", "官网验证"],
}, {
  name: "Beta 5", date: "211023",
  content: ["美化菜单样式"],
}, {
  name: "Beta 5.1", date: "211102",
  content: ["美化样式", "优化文案"],
}, {
  name: "Beta 6", date: "211104",
  content: ["更换秋季背景", "增加收藏菜单"],
}, {
  name: "Beta 6.1", date: "211111",
  content: ["优化过渡动画", "增加投稿提示"],
}, {
  name: "Beta 6.2", date: "211125",
  content: ["一期背景测试"],
}, {
  name: "Beta 7", date: "211225",
  content: ["正式启用背景", "增加换背景菜单及文案", "冬雪限定彩蛋", "调整字体"],
}, {
  name: "Beta 7.1", date: "211231",
  content: ["优化页脚文案", "更换背景托管商", "新年烟花视频背景(已失效)"],
}, {
  name: "Beta 8", date: "220110",
  content: ["重构源代码", "优化性能", "美化选中样式"],
},];
verlist = "";
for (var i = 0; i < ver.length; i++) {
  verlist += "<div>\n  <div class='sb'>\n    <div>\n      <h2>" + ver[i].name + "</h2>\n      <p class='dim'>更新日期: " + ver[i].date + "</p>\n    </div>\n    <a href='./" + ver[i].date + "/' class='pribtn'>访问</a>\n  </div>\n  <p>";
  for (var j = 0; j < ver[i].content.length; j++) {
    verlist += ver[i].content[j] + "<br>";
  }
  verlist += "</p>\n</div>\n";
}
// console.log(verlist);
document.getElementById("verlist").innerHTML = verlist;