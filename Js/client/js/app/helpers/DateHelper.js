class DateHelper{

    constructor(){
        throw new Error('DateHelper cannot be instanciated');
    }

   static textToDate(tex){
    if(!/^\d{4}-\d{2}-\d{2}$/.test(tex)) throw new Error('Date format incorrect(yyyy-mm-dd)')
        return new Date(...tex.split('-').map((item,index) => item - index % 2)) ;
    }

    static dateToText(dd){
        return `${dd.getDate()}/${(dd.getMonth()+1)}/${dd.getFullYear()}`;
    }
}