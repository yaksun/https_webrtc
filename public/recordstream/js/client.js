window.onload = function(){
    var buffer=[];
    var mediaRecorder;
    var oRecord = document.querySelector('button#record')
    var oPlay = document.querySelector('button#play')
    var oDownload = document.querySelector('button#download')
    var oStopRecord = document.querySelector('button#stopRecord')
    var recvideo = document.querySelector('video#outputVideo')
    if(!navigator.mediaDevices && !navigator.mediaDevices.getUserMedia){
        console.log('不支持这个模式');
        return
    }

    navigator.mediaDevices.getUserMedia({
        video:true,
        audio:true 
    }).then(getStream).catch(handleErr)

    function getStream(stream){
        window.stream = stream
    }

    function handleErr(){

    }

    oRecord.onclick=function(){
        var options = {
            mimeType:'video/webm;codecs=vp8'
        }
        if(!MediaRecorder.isTypeSupported(options.mimeType)){
            console.log('没有这个格式')
            return;
        }
        
        try{
            mediaRecorder = new MediaRecorder(window.stream,options)
        }
        catch(err){
                console.log('创建失败');
        }

        //绑定回调函数,当有数据的时候触发
        mediaRecorder.ondataavailable=handleDataAvailable
        mediaRecorder.start(10);
    }


    function handleDataAvailable(e){
        if(e && e.data && e.data.size>0){
            buffer.push(e.data)
        }
    }

    oPlay.onclick = function(){
        var blob = new Blob(buffer,{type:'video/webm'})
        recvideo.src= window.URL.createObjectURL(blob);
        recvideo.srcObject=null;
        recvideo.controls = true;
        recvideo.play();
    }

    oDownload.onclick = function(){
        var blob = new Blob(buffer,{type:'video/webm'});
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');

        a.href = url;
        a.style.display = 'none';
        a.download = 'aaa.webm';
        a.click();
    }

    oStopRecord.onclick = function(){
        mediaRecorder.stop()
    }
    

   
}