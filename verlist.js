var ver = [{
  name: "Alpha 1", date: "210401",
  content: "公测第一版<br>进度条",
}, {
  name: "Alpha 2", date: "210502",
  content: "卡片样式测试<br>调整了科目和计时器的位置<br>字体",
}, {
  name: "Alpha 3", date: "210529",
  content: "卡片样式<br>网页样式调整选项<br>调试功能",
}, {
  name: "Beta 1", date: "210724",
  content: "过渡动画<br>美化下拉菜单样式",
}, {
  name: "Beta 2", date: "210801",
  content: "蓝色欢迎气泡<br>IE适配<br>希沃屏保提醒",
}, {
  name: "Beta 3", date: "210828",
  content: "帮助菜单<br>计时方式优化",
}, {
  name: "Beta 3.1", date: "210905",
  content: "关闭屏保提醒<br>优化欢迎文案",
}, {
  name: "Beta 3.2", date: "210919",
  content: "修复bug",
}, {
  name: "Beta 4", date: "211006",
  content: "增加右键菜单<br>官网验证",
}, {
  name: "Beta 5", date: "211023",
  content: "美化菜单样式",
}, {
  name: "Beta 5.1", date: "211102",
  content: "美化样式<br>优化文案",
}, {
  name: "Beta 6", date: "211104",
  content: "更改壁纸<br>增加收藏菜单",
}, {
  name: "Beta 6.1", date: "211111",
  content: "优化过渡动画<br>增加投稿",
}, {
  name: "Beta 6.2", date: "211125",
  content: "测试背景",
}, {
  name: "Beta 7", date: "211225",
  content: "正式启用背景<br>冬雪限定彩蛋<br>更正字体",
}, {
  name: "Beta 7.1", date: "211231",
  content: "背景服务器升级扩容<br>新年烟花视频背景",
}, {
  name: "Beta 8", date: "220105",
  content: "重构源代码<br>优化性能",
},];
verlist = "";
for (var i = 0; i < ver.length; i++) {
  verlist += "<div>\n  <div class='sb'>\n    <div>\n      <h2>" + ver[i].name + "</h2>\n      <p class='dim'>更新日期: " + ver[i].date + "</p>\n    </div>\n    <a href='./" + ver[i].date + "' class='pribtn'>访问</a>\n  </div>\n  <p>" + ver[i].content + "</p>\n</div>\n";
}
console.log(verlist);
document.getElementById("verlist").innerHTML = verlist;