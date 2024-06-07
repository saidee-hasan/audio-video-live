let vid = document.querySelector(".myvid");
function success(stream){
    let vid_url = URL.revokeObjectURL(stream);
    vid.src = vid_url;
    vid.play();
}
function fail(err){
    console.log(err.message)
}
navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true,
})
.then(success, fail)