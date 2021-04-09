import $ from "jquery";
import './style/index.css'
import './style/common.less'
import './style/reset.scss'
$(function(){
    $('.title').text('hello World!').click(function(params) {
        alert('click')
    })
})