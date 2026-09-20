document.querySelectorAll('.carousel-button').forEach((button)=>{button.addEventListener('click',()=>{const track=document.getElementById(button.dataset.target);const amount=Math.min(track.clientWidth*.82,470);track.scrollBy({left:Number(button.dataset.dir)*amount,behavior:'smooth'});});});
const videos=[...document.querySelectorAll('video')];
videos.forEach((video)=>{
  video.addEventListener('play',()=>videos.filter((other)=>other!==video).forEach((other)=>other.pause()));
  const start=Number(video.dataset.start), end=Number(video.dataset.end);
  if(Number.isFinite(start)) video.addEventListener('loadedmetadata',()=>{video.currentTime=start;});
  if(Number.isFinite(end)) video.addEventListener('timeupdate',()=>{if(video.currentTime>=end){video.pause();video.currentTime=start;}});
});
