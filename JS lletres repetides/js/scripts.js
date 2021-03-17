// variables i arrays
var nom=['A','D','R','I','A','3']
var cognom=['L', 'O', 'P', 'E', 'Z']
var abc = /[A-Z]/i;
var vocal = /[aeiou]/i;
var correu= /([\w\.\-\u00f1\u00E0-\u00FC]+)@([\w\.\-\u00f1\u00E0-\u00FC]*)/g
var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';
var letters_Found=[];
var repe=[];
var contador=0;

// exercici 1
for(i=0;i<nom.length;i++){
        bulb = nom[i];
        console.log(bulb);  
}  
// exercici 2
for(i=0;i<nom.length;i++){
        lletres = nom[i];
        var coincideix = abc.test(lletres);
        if(coincideix){
                if(coincideix==vocal.test(lletres)){
                        var ivy1= "He trobat la vocal: " + nom[i];
                        console.log("He trobat la vocal: " + nom[i]);
                        letters_Found.push(ivy1);
                        
                }
                else{   
                        var ivy2= "He trobat la consonant: " + nom[i];
                        console.log("He trobat la consonant: " + nom[i]) ; 
                        letters_Found.push(ivy2);
                }
        }
      else{
        var ivy3= "Els noms de persones no contenen números com el: " + nom[i];     
        console.log("Els noms de persones no contenen números com el: " + nom[i]);
        letters_Found.push(ivy3);
}    

}
// exercici 3
var mapa_nom = nom.map( a=> a )
        console.log(mapa_nom);

// exercici 3.2
var repetides = nom.map(a=>a).reduce((x, y=0)=>{ x[y]=(x[y] || 0) + 1; 
        return x; } ,{});
console.log(repetides)


for (var i = 0; i < nom.length; i++){
        caracter = nom[i];
        for (var j = 0; j <nom.length; j++){
            if (nom[j] == caracter) {
                contador++;
            }
        }
        repe.push(nom[i]+ "->"+ contador);
        contador = 0;
    }
repe= [...new Set(repe)];
 

// exercici 4
var fullName= nom.concat("", cognom);
console.log(fullName);

// exercici 5
var emails= str.match(correu);
console.log(emails);

var mails_ordenats= [...new Set(emails)]
console.log(mails_ordenats);



// funcions per escriure
function ex_1(){
        document.getElementById('pant_1').innerHTML= nom.join('<br>');  
}
function ex_2(){
        document.getElementById('pant_2').innerHTML= letters_Found.join('<br>');
}
function ex_3(){
        document.getElementById('pant_3').innerHTML= mapa_nom.join('<br>');
}
function ex_3_2(){
        document.getElementById('pant_3').innerHTML= repe.join('<br>');
}
function ex_4(){
        document.getElementById('pant_4').innerHTML=nom.concat(" ", cognom).join('');
}

function ex_5(){
       document.getElementById('pant_5').innerHTML=mails_ordenats.join('<br>');
}
function del(){
        document.getElementById('pant_1').innerHTML=('');
        document.getElementById('pant_2').innerHTML=('');
        document.getElementById('pant_3').innerHTML=('');
        document.getElementById('pant_4').innerHTML=('');
        document.getElementById('pant_5').innerHTML=('');
}
