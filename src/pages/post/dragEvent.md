---
layout: ../../layouts/blog.astro
---
HTML5为所有HTML元素规定了一个`draggable`属性，表示元素是否可以拖动。
图像和链接的`draggable`属性自动被设置成了true，而其他元素这个属性的默认值都是false。

## 准备好HTML和一张背景图(图片由纯色背景代替)

<section class="demo-code-border">
    <div class="demo-container">
        <div class="demo-box">
            <div class="demo-image"></div>
        </div>
        <div class="demo-box"></div>
        <div class="demo-box"></div>
        <div class="demo-box"></div>
    </div>
</section>
<style>
.demo-code-border{
display: flex;
align-items: center;
justify-content: center;
border:1px solid #ccc;
margin:5px 0;
padding:10px 0
}
.demo-container{
display: flex;
justify-content: center;
gap: 10px;
flex-wrap: wrap;
width: 420px;
}
.demo-container .demo-box{
width: 160px;
height: 160px;
border: 2px solid var(--dark-box-border, #333);
border-radius: 12px;
}
.demo-box .demo-image{
height: 100%;
width: 100%;
/* background-image: url(../../../../public/images/girl.jpg); */
background-color:#8661fc;
background-size: cover;
background-position: center;
border-radius: 10px;
}
body.dark-mode{
--dark-box-border:#ccc
}
</style>

## html:  

```html
    <div class="container">
        <div class="box">
            <div class="image" draggable="true"></div>
        </div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
     </div>
```

## css:
```css
section{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f6f7fb;
}
.container{
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    width: 420px;
}
.container .box{
    width: 160px;
    height: 160px;
    border: 2px solid #333;
    border-radius: 12px;
}
.box .image{
    height: 100%;
    width: 100%;
    background-image: url(girl.jpg);
    background-size: cover;
    background-position: center;
    border-radius: 10px;
}

```
## 设置元素为可拖放
```html
<div class="image" draggable="true"></div>
```
## JS部分：
```js
// 获取DOM元素
const boxs = document.querySelectorAll(".box");
const image = document.querySelector(".image");

//为每个box添加事件
boxs.forEach((box) => {
  //当元素被拖动到box上时
  box.addEventListener("dragover", (e) => {
    e.preventDefault(); //阻止默认事件,默认事件会使image松手后回到原位
    box.classList.add("hovered");
  });
  //当元素离开时
  box.addEventListener("dragleave", (e) => {
    e.preventDefault();
    box.classList.remove("hovered");
  });
  //当元素被放在box上时
  box.addEventListener("drop", () => {
    box.appendChild(image);
    box.classList.remove("hovered");
  });
});
```
再为box添加 hovered 样式：

```css
.box.hovered{
    border:2px dashed #333;
}
```
## 最终效果：
<section class="code-border">
    <div class="container">
        <div class="box">
            <div class="image" draggable="true"></div>
        </div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
</section>
<script>
const boxs = document.querySelectorAll(".box");
const image = document.querySelector(".image");
boxs.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault(); 
    box.classList.add("hovered");
  });
  box.addEventListener("dragleave", (e) => {
    e.preventDefault();
    box.classList.remove("hovered");
  });
  box.addEventListener("drop", () => {
    box.appendChild(image);
    box.classList.remove("hovered");
  });
});
</script>
<style>
.code-border{
display: flex;
align-items: center;
justify-content: center;
border:1px solid #ccc;
margin:5px 0;
padding:10px 0
}
.container{
display: flex;
justify-content: center;
gap: 10px;
flex-wrap: wrap;
width: 420px;
}
.container .box{
width: 160px;
height: 160px;
border: 2px solid var(--dark-box-border, #333);
border-radius: 12px;
}
.box .image{
height: 100%;
width: 100%;
/* background-image: url(../../../../public/images/girl.jpg); */
background-color:#8661fc;
background-size: cover;
background-position: center;
border-radius: 10px;
}
.box.hovered{
border:2px dashed var(--dark-box-border, #333);
}
body.dark-mode{
--dark-box-border:#ccc
}
</style>

主要用到了**dragover**与**dragleave**两个事件，需要注意的是在添加这两个事件时，需要<code>e.preventDefault()</code>来阻止默认事件,否则默认事件会使image松手后回到原位。






