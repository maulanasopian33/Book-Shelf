function getdata(){
  let daftar = [];
  let daftar2 = [];
  if(localStorage.getItem("belum-dibaca") !== null){
    let getdata = localStorage.getItem("belum-dibaca");    
    if(getdata !== ""){
      daftar = JSON.parse(getdata);
      dataterakhir(JSON.parse(daftar[daftar.length - 1]));
      for (var i = daftar.length - 1; i >= 0; i--) {
        itembelumdibaca(daftar[i]);
      }  
    }
  }

  if(localStorage.getItem("sudah-dibaca") !== null){
    let getdata2 = localStorage.getItem("sudah-dibaca");
      
    if(getdata !== "{}"){
      daftar2 = JSON.parse(getdata2);
      for (var i = daftar2.length - 1; i >= 0; i--) {
        itemsudahdibaca(daftar2[i]);
      }  
    }
  }
}


function dataterakhir(val){
  document.getElementById('judul').innerText = val['judul'];
  document.getElementById('penulis').innerText = val['penulis'];
  document.getElementById('tahun').innerText = val['tahun'];
}

function itembelumdibaca(val){
  daftar = JSON.parse(val);

  // console.log(document.getElementById('conB'));
  
  document.getElementById('conB').innerHTML += '<div class="item"><div class="book-card"><img src="img/book.jpg" alt=""  height="200px" width="150px"><div class="content-book"><h3 id="belumdibaca-judul">'+daftar["judul"]+'</h3><p>'+daftar["penulis"]+'</p><p> Terbit Tahun '+daftar["tahun"]+'</p><button class="btn" onclick="dibaca('+daftar["id"]+')">Sudah Dibaca</button><button class="btn2" onclick="hapus('+daftar["id"]+')">Hapus</button></div></div></div>';
}

function itemsudahdibaca(val){
  daftar = JSON.parse(val);
  // console.log(document.getElementById('conB'));
  
  document.getElementById('conC').innerHTML += '<div class="item"><div class="book-card"><img src="img/book.jpg" alt=""  height="200px" width="150px"><div class="content-book"><h3>'+daftar["judul"]+'</h3><p>'+daftar["penulis"]+'</p><h3> Terbit Tahun '+daftar["tahun"]+'</h3><button class="btn" onclick="belumdibaca('+daftar["id"]+')">Tandai Belum Dibaca</button><button class="btn2" onclick="hapus2('+daftar["id"]+')">Hapus</button></div></div></div>';
}



function dibaca(val){
 let getdata = localStorage.getItem("belum-dibaca");    
    if(getdata !== ""){
      let hasil = [];
      daftar = JSON.parse(getdata);
      localStorage.removeItem("belum-dibaca");
      for (var i = daftar.length - 1; i >= 0; i--) {
        let data = JSON.parse(daftar[i]);
        if (data['id'] != val ) {
          hasil.push(JSON.stringify(data));
          localStorage.setItem('belum-dibaca',JSON.stringify(hasil));
        }else{
          pushsudahdibaca(data);
        }
      }
      location.reload();
    }
}

function belumdibaca(val){
 let getdata = localStorage.getItem("sudah-dibaca");    
    if(getdata !== ""){
      let hasil = [];
      daftar = JSON.parse(getdata);
      localStorage.removeItem("sudah-dibaca");
      for (var i = daftar.length - 1; i >= 0; i--) {
        let data = JSON.parse(daftar[i]);
        if (data['id'] != val ) {
          hasil.push(JSON.stringify(data));
          localStorage.setItem('sudah-dibaca',JSON.stringify(hasil));
        }else{
          pushbelumdibaca(data);
        }
      }
      location.reload();
    }
}

function hapus(val){  
   let getdata = localStorage.getItem("belum-dibaca"); 
    if(getdata !== ""){
      let hasil = [];
      daftar = JSON.parse(getdata);
      localStorage.removeItem("belum-dibaca");
      for (var i = daftar.length - 1; i >= 0; i--) {
        let data = JSON.parse(daftar[i]);
        if (data['id'] != val ) {
          hasil.push(JSON.stringify(data));
          localStorage.setItem('belum-dibaca',JSON.stringify(hasil));
        }
      } 
    }
    location.reload();
}

function hapus2(val){  
   let getdata = localStorage.getItem("sudah-dibaca"); 
    if(getdata !== ""){
      let hasil = [];
      daftar = JSON.parse(getdata);
      localStorage.removeItem("sudah-dibaca");
      for (var i = daftar.length - 1; i >= 0; i--) {
        let data = JSON.parse(daftar[i]);
        if (data['id'] != val ) {
          hasil.push(JSON.stringify(data));
          localStorage.setItem('sudah-dibaca',JSON.stringify(hasil));
        }
      } 
    }
    location.reload();
}


function pushsudahdibaca(val){
  let hasil = [];
  let getdata = localStorage.getItem("sudah-dibaca");
  if(getdata != null ){
    hasil = JSON.parse(getdata);  
  }
  
  hasil.push(JSON.stringify(val));
  localStorage.setItem('sudah-dibaca',JSON.stringify(hasil));
}

function pushbelumdibaca(val){
  let hasil = [];
  let getdata = localStorage.getItem("belum-dibaca");
  if(getdata != null ){
    hasil = JSON.parse(getdata);  
  }
  
  hasil.push(JSON.stringify(val));
  localStorage.setItem('belum-dibaca',JSON.stringify(hasil));
}