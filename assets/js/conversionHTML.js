const form = document.querySelector("#form_converion_html")
form.addEventListener("submit", hanldeHtml)


function hanldeHtml(e) {
    e.preventDefault()

    const data = new FormData(this)
    const text = data.get('text')

    const result = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/á/g, '&aacute;').replace(/é/g, '&eacute;').replace(/í/g, '&iacute;').replace(/ó/g, '&oacute;').replace(/ú/g, '&uacute;').replace(/“/g,'&quot;').replace(/”/g,'&quot;');
    document.getElementById("result").innerText = "Converión a html: "+ result; 
}