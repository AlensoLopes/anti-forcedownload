const url = 'https://ecampus.unicaen.fr/'

setInterval(() => {
  if(!window.location.href.startsWith(url)) 
    return;
  document.querySelectorAll('a')
    .forEach(a => {
      if(a.href.includes('forcedownload=1')){
        a.href = a.href.replace('forcedownload=1', '');
        a.target = '_blank';
      }
    });
}, 1000);
