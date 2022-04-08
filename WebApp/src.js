

   mainForm.onsubmit = async (e) => {
    e.preventDefault();
       let file = document.getElementById("fileupload");
       var formData = new FormData();
       formData.append("image",file.files[0])
       axios.post('http://127.0.0.1:5000/', formData, {
           headers: {
               'Content-Type': 'multipart/form-data'
           }
       }).then((data) => {
           //console.log(data);
           document.getElementById('resultImage').src = 'data:image/gif;base64,' + data.data;
       });



   
  };


