// JavaScript Document
// este arquivo contas as caixinhas marcadas, de acordo com cada estilo de aprendizagem
//CHK é uma lista com 4 itens. chkbi´s são as tags de cada checkbox
 var i, CHK,pragmatico,ativo,reflexivo,teorico;
	  CHK = {
         	"Pragm" :[chkb4,chkb6,chkb11,chkb13,chkb19],
         	"Teori" :[chkb2,chkb8,chkb10,chkb16,chkb18],
         	"Refle" :[chkb3,chkb5,chkb12,chkb14,chkb17],
         	"Ativo" :[chkb1,chkb7,chkb9,chkb15,chkb20]
        	};
      function EstiloPredominante()
      	{
      		pragmatico = 0
    	    ativo = 0
    		reflexivo = 0
    		teorico = 0
    		document.getElementById("prag").innerHTML = "Pragmático: "+pragmatico;
    		document.getElementById("teor").innerHTML =  "Teórico: "+teorico;
    		document.getElementById("refl").innerHTML =  "Reflexivo: "+reflexivo;
    		document.getElementById("ativ").innerHTML =  "Ativo: "+ativo;
    		for (i in CHK.Pragm)
    			{
     				if (CHK.Pragm[i].checked == true)//conta apenas os checkbox pragmáticos
	  					{
	 						pragmatico=pragmatico+1
      						document.getElementById("prag").innerHTML = "Pragmático: "+pragmatico;
      					}
    			}
     		for (i in CHK.Teori)
    			{
     				if (CHK.Teori[i].checked == true)
	  					{
	 						teorico=teorico+1
      						document.getElementById("teor").innerHTML =  "Teórico: "+teorico;
      					}
    			}
    		for (i in CHK.Refle)
    			{
     				if (CHK.Refle[i].checked == true)
	  					{
	 						reflexivo=reflexivo+1
      						document.getElementById("refl").innerHTML =  "Reflexivo: "+reflexivo;
      					}
    			}
    		for (i in CHK.Ativo)
    			{
     				if (CHK.Ativo[i].checked == true)
	  					{
	 						ativo=ativo+1
      						document.getElementById("ativ").innerHTML =  "Ativo: "+ativo;
      					}
    			}
 		}
 	  function NovoEstilo()//desmarca todos os checkbox
      	{
      		for (i in CHK.Pragm)
    			{
     				CHK.Pragm[i].checked = false
     			}
     		for (i in CHK.Teori)
    			{
     				CHK.Teori[i].checked = false
     			}
     		for (i in CHK.Refle)
    			{
     				CHK.Refle[i].checked = false
     			}
     		for (i in CHK.Ativo)
    			{
     				CHK.Ativo[i].checked = false
     			}
     		document.getElementById("prag").innerHTML =  "";
     		document.getElementById("teor").innerHTML =  "";
     		document.getElementById("refl").innerHTML =  "";
     		document.getElementById("ativ").innerHTML =  "";
     	}