var requestURL = "https://api.kcg.gov.tw/api/service/get/9c8e1450-e833-499c-8320-29b36b7ace5c"
$.ajax({
    url: requestURL,
    method: 'GET',
    dataType: 'json',
    data:"data",
    async: true,

    success: res =>{
        console.log(res)
    },
    error: err =>{
        console.log(err)
    }
});
