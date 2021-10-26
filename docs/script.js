function documentReady() {

  // on key press
  document.addEventListener('keypress', logKey);
  function logKey(e) {

    // clean up key
    key = e.code.replace('Key', '') // !!! e.code is QWERTY not AZERTY !!!
    console.log('Key pressed:', key)

    // redirect
    if     (key == 'W') { window.location.replace("https://bazandpoort.smartschool.be/"); }         // w = zandpoort
    else if(key == 'P') { window.location.replace("https://bapitzemburg.smartschool.be/"); }        // p = pitzemburg
    else if(key == 'D') { window.location.replace("https://drive.google.com/drive/u/1/my-drive"); } // d = drive
  }

}