const fileData = ["https://ecampus.unicaen.fr", "https://foad.ensicaen.fr"];

setInterval(() => {
  fileData.forEach(url => {
    if (!window.location.href.startsWith(url))
      return;
    document.querySelectorAll('a')
      .forEach(a => {
        if (a.href.includes('forcedownload=1')) {
          a.href = a.href.replace('forcedownload=1', '');
          a.target = '_blank';
        }
      });
  });
}, 250);
