window.onload = function(){
    var sourceInput = document.querySelector('video#sourceInput')

    if(!navigator.mediaDevices && !navigator.mediaDevices.getUserMedia){
        console.log('不支持这个模式')
        return 
    }

    navigator.mediaDevices.getUserMedia({vidio:true,audio:true}).then(handleInfo)
    .catch(handleerr)

    function handleInfo(stream){
        sourceInput.srcObject = stream 
    }

    function handleerr(){

    }
}