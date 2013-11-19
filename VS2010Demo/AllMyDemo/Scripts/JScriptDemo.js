/// <reference path="jquery-1.5.1-vsdoc.js" />
$(document).ready(
function () {
    
})
//上面的简写，document元素加载完成就执行
$(function () {


})

//页面元素完全加载完成才执行
window.onload = function () {
    alert("aaa");
}
$().wrapInner();
