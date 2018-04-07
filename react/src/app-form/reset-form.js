import $ from 'jquery';

export function reset(){
    $("input[type='text']").val("");
    $("input[type='number']").val("");
}