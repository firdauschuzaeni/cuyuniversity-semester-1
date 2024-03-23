// Saklar Ruang Keluarga
function ksaklar() {
    let ktoggle1 = document.getElementById("default-toggle1-keluarga");
    let ktoggle2 = document.getElementById("default-toggle2-keluarga");
    let ktoggle3 = document.getElementById("default-toggle3-keluarga");
  
    let klampu1 = document.getElementById("lampu1-keluarga");
    let klampu2 = document.getElementById("lampu2-keluarga");
    let klampu3 = document.getElementById("lampu3-keluarga");
  
    if (ktoggle1.checked) {
      klampu1.src = "assets/image/on.gif"
    } else {
      klampu1.src = "assets/image/off.gif";
    }
  
    if (ktoggle2.checked) {
      klampu2.src = "assets/image/on.gif"
    } else {
      klampu2.src = "assets/image/off.gif";
    }
  
    if (ktoggle3.checked) {
      klampu3.src = "assets/image/on.gif"
    } else {
      klampu3.src = "assets/image/off.gif";
    }
  }

function ksaklarGroup() {
    let ktoggle = document.getElementById("default-toggle-keluarga");
    let ktoggle1 = document.getElementById("default-toggle1-keluarga");
    let ktoggle2 = document.getElementById("default-toggle2-keluarga");
    let ktoggle3 = document.getElementById("default-toggle3-keluarga");

    let klampu1 = document.getElementById("lampu1-keluarga");
    let klampu2 = document.getElementById("lampu2-keluarga");
    let klampu3 = document.getElementById("lampu3-keluarga");

    if (ktoggle.checked) {
        ktoggle1.checked = true;
        ktoggle2.checked = true;
        ktoggle3.checked = true;
        klampu1.src = "assets/image/on.gif";
        klampu2.src = "assets/image/on.gif";
        klampu3.src = "assets/image/on.gif";
    } else {
        ktoggle1.checked = false;
        ktoggle2.checked = false;
        ktoggle3.checked = false;
        klampu1.src = "assets/image/off.gif";
        klampu2.src = "assets/image/off.gif";
        klampu3.src = "assets/image/off.gif";
    }
}

// Saklar Ruang Makan
function msaklar() {
    let mtoggle = document.getElementById("default-toggle-makan");

    let mlampu = document.getElementById("lampu-makan");

    if (mtoggle.checked) {
        mlampu.src = "assets/image/on.gif";
    } else {
        mlampu.src = "assets/image/off.gif";
    }
}

// Saklar Utama
function saklar() {
    let toggle = document.getElementById("default-toogle");
    let ktoggle = document.getElementById("default-toggle-keluarga");
    let mtoggle = document.getElementById("default-toggle-makan");

    if (toggle.checked) {
        ktoggle.checked = true;
        mtoggle.checked = true;
    } else {
        ktoggle.checked = false;
        mtoggle.checked = false;
    }
}