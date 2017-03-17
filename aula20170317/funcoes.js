dias=["Segunda","Teça","quarta","quinta","sexta","sabado","domingo"];
function calcula(){
		 n1=parseInt(document.getElementById("n1").value);
		 n2=parseInt(document.getElementById("n2").value);
		 m=(n1+n2)/2;
		 document.getElementById("media").value=m;
		 if(m>7){
		 s="Aprovado";
		 }
		 else{
		 s="reprovado";
		 }
		 document.getElementById("sit").value=s;
		 }
		 
		function valida(){
		if (document.getElementById("nome").value==""){
		alert("Nome não pode ser vazio!")
		}
		
		}