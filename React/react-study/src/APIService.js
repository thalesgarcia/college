let APIService={
    AutohersList:()=>{
        return fetch('http://localhost:8000/api/autor');
    },

    CreateAuthor:(author)=>{
        return fetch('http://localhost:8000/api/autor',{method:'post', headers:{'content-type':'application/json'},
        body:author});
    },
    ListNames:()=>{
        return fetch('http://localhost:8000/api/autor/nome');
    },
    ListBooks:()=>{
        return fetch('http://localhost:8000/api/autor/livro');
    },
    RemoveAuthor:(id)=>{
        return fetch(`http://localhost:8000/api/autor/livro/${id}`,{method:'delete', headers:{'content-type':'application/json'},
        })
    },
    errorTreatment:res=>{
        if(!res.ok)
            throw Error(res.responseText);

        return res.json();
    }
}
export default APIService;