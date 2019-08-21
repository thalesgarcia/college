import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let PopUp={
    showMessage:(status,msg)=>{
        if(status==='success'){
            toast.success(`${msg}`,{
                draggablePercent: 60,
                className: 'black-background',
                bodyClassName: "grow-font-size",
                progressClassName: 'fancy-progress-bar',
                closeButton: true,
                autoClose: 5000,
                position: toast.POSITION.TOP_RIGHT
              })
        }
        if(status==='error'){
            toast.error(`${msg}`,{
                draggablePercent: 60,
                className: 'black-background',
                bodyClassName: "grow-font-size",
                progressClassName: 'fancy-progress-bar',
                closeButton: true,
                autoClose: 5000,
                position: toast.POSITION.TOP_RIGHT
              })
        }
        if(status==='warn'){
            toast.warn(`${msg}`,{
                draggablePercent: 60,
                className: 'black-background',
                bodyClassName: "grow-font-size",
                progressClassName: 'fancy-progress-bar',
                closeButton: true,
                autoClose: 5000,
                position: toast.POSITION.TOP_RIGHT
              })
        }
    }
} 
export default PopUp;