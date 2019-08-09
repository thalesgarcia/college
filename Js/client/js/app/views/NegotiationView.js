class NegotiationView extends View{
    constructor(el){
        super(el)
    }

   template(mod){
       
    return  `
    <table class="table table-hover table-bordered table-striped">
        <thead>
            <tr>
                <th onclick="nc1.order('date')">DATE</th>
                <th onclick="nc1.order('quantity')">QUANTITY</th>
                <th onclick="nc1.order('value')">VALUE</th>
                <th onclick="nc1.order('volume')">VOLUME</th>
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
                mod.totalVol
            }</td> 
        </tfoot>
    </table>
    `;
    /*
    ${(function(){
                let tot=0;
                mod.negotiations.forEach(n=> tot+=n.volume)

                return tot
            })()}
    */
   }
   
    
}