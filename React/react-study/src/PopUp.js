import M from 'materialize-css';

let PopUp={
    showMessage:(status,msg)=>{
        if(status==='success'){
            M.toast({
                html:msg,
                classes:'green',
                displayLength:2000
            })
        }
        if(status==='error'){
            M.toast({
                html:msg,
                classes:'red',
                displayLength:2000
            })
        }
        if(status==='remove'){
            M.toast({
                html:msg,
                classes:'blue',
                displayLength:2000
            })
        }
    }
}
export default PopUp;