


const form = document.querySelector("#inputBook");
let data = [];
let lokasi ='';
form.addEventListener("submit", function (event) {
  // stop form submission
  event.preventDefault();
  if(form.elements["status"].checked){
    if(localStorage.getItem("sudah-dibaca") !== null){
      let getdata = localStorage.getItem("sudah-dibaca");
      data2 = JSON.parse(getdata);  
    }
    lokasi = 'sudah-dibaca';
  }else{
      if(localStorage.getItem("belum-dibaca") !== null){
        let getdata = localStorage.getItem("belum-dibaca");
        data = JSON.parse(getdata);  
      }
      lokasi = 'belum-dibaca';
  }
  
  let data2={
    'id'  : makeid(),
    'judul' :form.elements["judul"].value,
    'penulis' :form.elements["penulis"].value,
    'tahun' :form.elements["tahun"].value,
    'status' : form.elements["status"].checked
  }

  data.push(JSON.stringify(data2));

  localStorage.setItem(lokasi,JSON.stringify(data));
  window.location.replace("./index.html");
});





function makeid() {
  var text = "";
  var possible = "0987654321";

  for (var i = 0; i < 20; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}



