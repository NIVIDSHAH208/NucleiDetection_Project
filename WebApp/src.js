//    mainForm.onsubmit = async (e) => {
//     e.preventDefault();
//        let file = document.getElementById("fileupload");
//        var formData = new FormData();
//        formData.append("image",file.files[0])
//     let response = await fetch('http://127.0.0.1:5000/', {
//       method: 'POST',
//         body: formData,
      
//     });

//        let result = await response;
//        //window.location.href(result);

   
//   };


   mainForm.onsubmit = async (e) => {
    e.preventDefault();
       let file = document.getElementById("fileupload");
       var formData = new FormData();
       formData.append("image",file.files[0])
       axios.post('http://localhost:5000/', formData, {
           headers: {
               'Content-Type': 'multipart/form-data'
           }
       }).then((data) => {
           console.log(data);
           document.getElementById('resultImage').src = 'data:image/png;,' + btoa(data);
       });

      
      

//        //window.location.href(result);

   
  };


