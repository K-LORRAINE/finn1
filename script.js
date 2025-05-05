function printCertOnly() {
  const certSection = document.querySelector("#certifications").innerHTML;
  const win = window.open('', '', 'height=700,width=900');
  win.document.write('<html><head><title>Print Certificate</title>');
  win.document.write('<style>body{font-family:sans-serif;padding:20px;} img{max-width:100%;height:auto;}</style>');
  win.document.write('</head><body>');
  win.document.write(certSection);
  win.document.write('</body></html>');
  win.document.close();
  win.focus();
  win.print();
  win.close();
}
