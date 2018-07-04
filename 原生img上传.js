/**
 * 1. 原生input type=file pc 原样式上传
 * 2. 点击按钮模拟上传 
 * 
 *  <div @click="fileClick">
        <img src="../assets/imgs/123.png" alt="" v-if="!img">
        <input @change="onFileChange($event)" type="file" id="upload_file" style="display: none"/>
    </div>
 */


function fileClick(){
    // 点击事件  激活input的点击事件
    document.getElementById('upload_file').click()
}

function onFileChange(e) {
    // 文件获取   代码可优化 createImage 可放入此方法中
    var files = e.target.files || e.dataTransfer.files;
    if (!files.length)  return;
    createImage(files[0]);
}

function createImage(file) {
    var control = document.getElementById('upload_file');

    var image = new Image();
    var reader = new FileReader();
    var vm = this;

    reader.onload = (e) => {
        var formData = new FormData();
        formData.append('file',control.files[0]);
        this.axios.post(`/****/***`,formData,{
            // 设置请求超时 时间
            timeout:5000,
            headers: {
                'Content-Type':'multipart/form-data;'
            }
        }).then(res =>{
            console.log(res);
            
        }).catch(error =>{
            
        })
    };
    reader.readAsDataURL(file);
}
