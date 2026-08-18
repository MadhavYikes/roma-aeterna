const commons=(name,w=1200)=>`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}?width=${w}`;
async function resolveImages(){
 const imgs=[...document.querySelectorAll("img[data-search]")];
 for(const im of imgs){
   const exact=im.dataset.file;
   if(exact){im.src=commons(exact); im.onerror=()=>searchCommons(im);}
   else await searchCommons(im);
 }
}
async function searchCommons(im){
 try{
  const q=encodeURIComponent(im.dataset.search);
  const u=`https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${q}&gsrnamespace=6&gsrlimit=1&prop=imageinfo&iiprop=url&iiurlwidth=1200&format=json&origin=*`;
  const d=await fetch(u).then(r=>r.json());
  const p=d.query&&d.query.pages?Object.values(d.query.pages)[0]:null;
  const url=p&&p.imageinfo&&p.imageinfo[0]&&(p.imageinfo[0].thumburl||p.imageinfo[0].url);
  if(url) im.src=url; else im.classList.add("missing");
 }catch(e){im.classList.add("missing")}
}
document.querySelector("#menu")?.addEventListener("click",()=>document.querySelector("#nav")?.classList.toggle("open"));
resolveImages();
