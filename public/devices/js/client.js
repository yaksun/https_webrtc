window.onload = function(){
    var audioInput = document.querySelector('select#audioInput')
    var audioOutput = document.querySelector('select#audioOutput')
    var vedioInput = document.querySelector('select#vedioInput')
    var sourceVideo = document.querySelector('video#sourceVideo')

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

}
