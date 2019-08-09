class HttpService{
    get(url){
        return new Promise((resolve,reject)=>{
            let xhr= new XMLHttpRequest();
            let ret;
            xhr.open('get', url);
            xhr.onreadystatechange=()=>{
                if(xhr.readyState==4){
                    if(xhr.status==200){
                        ret=JSON.parse(xhr.responseText);
                        console.log("A" ,ret)
                        resolve(JSON.parse(xhr.responseText))
                    }else{
                        console.log("Request error.")
                        console.log(xhr.responseText);
                        reject(xhr.responseText)
                    }
                }
            }
            xhr.send()
        })
    }
    post(url, dado) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr.responseText);
                    }
                }
            };
            xhr.send(JSON.stringify(dado)); // usando JSON.stringifly para converter objeto em uma string no formato JSON.
        });
    }
}