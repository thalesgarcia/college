function MaiorMEnor(){
    let maior;
    let menor;
     var aux={
         encontra: function(nums){
             console.log(nums);
             menor=Number.MAX_VALUE;
             maior=Number.MIN_VALUE;
             console.log(menor, maior);
             nums.forEach(num => {console.log(num)
                 if(num<menor) {menor=num; console.log("M",menor,num)}
                 if(num>maior){maior=num; console.log("a",maior,num )}
             });
         },
         pegaMenor: function(){console.log("MENOR" , menor);return menor},
         pegaMaior: function(){console.log("MAIOR" , maior);return maior}
     };
     return aux;
 }
 