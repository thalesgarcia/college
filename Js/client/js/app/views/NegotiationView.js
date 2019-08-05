class NegotiationView extends View{
    constructor(el){
        super(el)
    }

   template(mod){
    return  `
    <table class="table table-hover table-bordered table-striped">
        <thead>
            <tr>
                <th>DATE</th>
                <th>QUANTITY</th>
                <th>VALUE</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
        </tbody>
            ${mod.negotiations.map((n)=>{
                return `
                <tr>
                    <td>${DateHelper.dateToText(n.date)}</td>
                    <td>${n.quantity}</td>
                    <td>${n.value}</td> 
                    <td>${n.volume}</td>                
                </tr>`
            }).join('')}
        <tfoot>
            <td colspan="3"<td>
            <td>${
                mod.negotiations.reduce((tot,n)=>tot+n.volume ,0.0)
            }</td> 
        </tfoot>
    </table>`;
    /*
    ${(function(){
                let tot=0;
                mod.negotiations.forEach(n=> tot+=n.volume)

                return tot
            })()}
    */
   }
   
    
}