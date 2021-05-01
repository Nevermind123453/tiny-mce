tinymce.init({
    selector: '#mytextarea',
    plugins: 'advlist autolink lists link image charmap print preview hr anchor pagebreak code'
});
let out = document.querySelector(".out");
let text = document.querySelector('#mytextarea');
document.querySelector("button").onclick = function(){
    let data = tinymce.get("mytextarea").getContent();
    console.log(data);
    let data1=tinymce.get("mytextarea").getContent({format:"text"});
    console.log(data1);
    out.innerHTML=data;
}
