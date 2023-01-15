---
layout: "../Blog.astro"
---
这篇博客介绍使用span元素和absolute positiong构建一个汉堡包按钮(hamburger menu)，并使用transform来设计一个从汉堡包按钮到关闭按钮的一个转换。其实一直以来在心底觉得可以很顺利的设计这样的按钮，但是从没有真正练习过，之前也都是借助fontawesome或者svg图标来实现。

使用开发者工具看互联网企业网站的代码已经成为我的日常，今天看Netlify网站，有注意到他们在菜单栏上面有使用details和summary，然后netlify网站的汉堡包按钮（需要将浏览器宽度缩小至移动端宽度才能看到，或者用手机访问netlify.com）是包裹在 <code>summary</code> 元素里面，点击summary，details元素会增加一个open属性，借助这个属性来控制汉堡包按钮svg元素的形状。