window.onload = function(){
    var audioInput = document.querySelector('#audioInput')
    var audioOutput = document.querySelector('#audioOutput')
    var vedioInput = document.querySelector('#vedioInput')

    if(navigator && navigator.mediaDevices){
        navigator.mediaDevices.enumerateDevices().then(getDevices)
        .catch(handleError)
    }

    function handleError(){

    }

    function getDevices(deviceInfos){
        deviceInfos.forEach(function(deviceInfo){
            var option = document.createElement('option')
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