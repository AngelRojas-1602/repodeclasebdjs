function codigodeprueba() {
	var i;
	var n = new Number();
	var base = new Number();
	var altura = new Number();
	var area = new Number();
	do {
		document.write(("Proporcione la cantidad de triangulos a Calcular"),'<BR/>');
		n = Number(prompt());
		if ((n<=0)) {
			document.write(("Error: n debe de ser >0, Porfavor verifique"),'<BR/>');
		}
	} while ((n<=0));
	for (i=1;i<=n;i++) {
		do {
			document.write(("Proporcione la Base: "),'<BR/>');
			base = Number(prompt());
			if ((base<=0)) {
				document.write(("Error: la Base debe de ser >0, Porfavor verifique"),'<BR/>');
			}
		} while ((base<=0));
		do {
			document.write(("Proporcione la Altura"),'<BR/>');
			altura = Number(prompt());
			if ((altura<=0)) {
				document.write(("Error: la Altura debe de ser >0, Porfavor verifique"),'<BR/>');
			}
		} while ((altura<=0));
	}
	area = ((base*altura)/2);
	document.write("Area= ",area,'<BR/>');
}

