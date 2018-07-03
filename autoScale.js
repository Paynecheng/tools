/*
*

htmlWidth                       htmlFontSize
----------------      =         -----------------------
设计稿宽度（750px）                100px(750下的rem的像素值)

htmlFontSize = (htmlWidth/750)*100

使用实例：

div{
    width: 7.5rem;  (750px)
    height: 4rem;   (400px)
}

* */
(function () {
    document.getElementsByTagName('html')[0].style.fontSize = (document.documentElement.getBoundingClientRect().width/750)*100 + 'px';
})();
