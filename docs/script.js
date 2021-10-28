function documentReady() {

  // on key press
  document.addEventListener('keypress', logKey);
  function logKey(e) {

    // clean up key
    key = e.code.replace('Key', '') // !!! e.code is QWERTY not AZERTY !!!
    console.log('Key pressed:', key)

    // redirect
    if     (key == 'W') { window.location.replace("https://bazandpoort.smartschool.be/"); }                                          // w = zandpoort
    else if(key == 'P') { window.location.replace("https://bapitzemburg.smartschool.be/"); }                                         // p = pitzemburg
    else if(key == 'D') { window.location.replace("https://drive.google.com/drive/u/0/folders/1AuZJmhj_dJzCn33X3rmpsi9Edi3hf2I1"); } // d = drive
    else if(key == 'L') { window.location.replace("http://lessenrooster.hannemaes.be/"); }                                           // l = lessenrooster
  }

}
