window.onload = function(){
    var audioInput = document.querySelector('select#audioInput')
    var audioOutput = document.querySelector('select#audioOutput')
    var vedioInput = document.querySelector('select#vedioInput')

    if(navigator.mediaDevices){
        navigator.mediaDevices.enumerateDevices().then(getDevices)
        .catch(handleError)
    }

    function handleError(){

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
