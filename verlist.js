const versions = [{
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
  name: "Gamma 1", date: "220112",
  content: ["重构源代码", "增设时光局", "更换主色"],
}, {
  name: "Gamma 2", date: "220210",
  content: ["再次重构源代码", "增设控制中心", "更换图标及对齐样式"],
}, {
  name: "Gamma 3", date: "220312",
  content: ["更换字体及图标源", "增加疫情及学校专栏", "优化交互"],
},];

document.querySelector('#verlist').innerHTML = versions.map(version => `
  <div>
    <div class="sb">
      <div>
        <h3>${version.name}</h3>
        <p class="dim">更新日期: ${version.date}</p>
      </div>
      <a href="./${version.date}/" class="pribtn">访问</a>
    </div>
    ${version.content.map(para => `<p>${para}</p>`).join('\n')}
  </div>
`).join('\n');