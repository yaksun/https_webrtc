window.onload = function(){
    var audioInput = document.querySelector('select#audioInput')
    var audioOutput = document.querySelector('select#audioOutput')
    var vedioInput = document.querySelector('select#vedioInput')
    var sourceVideo = document.querySelector('video#sourceVideo')
    var takePic = document.querySelector('button#takePic')
    var picture = document.querySelector('canvas#picture')
    var filter = document.querySelector('select#filter')

    picture.width = 320
    picture.height = 240

    if(!navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
        return 
    }

    navigator.mediaDevices.getUserMedia({video:true,audio:false})
    .then(handleInfo)
    .then(getDevices)
    .catch(handleError)

    

   
    function handleError(){

    }


    function handleInfo(stream){
        sourceVideo.srcObject = stream 
        return navigator.mediaDevices.enumerateDevices()
    }

    function getDevices(deviceInfos){
        deviceInfos.forEach(function(deviceInfo){
            var option = document.createElement('option')
		option.label = deviceInfo.label
		option.id = deviceInfo.deviceId
            if(deviceInfo.kind === 'audioinput'){
                audioInput.appendChild(option)
            }else if(deviceInfo.kind === 'audiooutput'){
                audioOutput.appendChild(option)
            }else if(deviceInfo.kind === 'videoinput'){
                vedioInput.appendChild(option)
            }
        })
    }

    takePic.onclick = function(){
        // 截取视频图片
        picture.getContext('2d').drawImage(sourceVideo,0,0,picture.width,picture.height)
    }

    filter.onchange = function(){
        sourceVideo.className = filter.value 
    }

}
