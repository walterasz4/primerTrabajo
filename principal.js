let cursos = [{
				idCurso: 1,				
				nombre: 'Matematicas',
				duracion: '1 Meses',
				valor: 100000
			},
			{
				idCurso: 2,				
				nombre: 'Ingles',
				duracion: '2 Meses',
				valor: 550000
			},
			{
				idCurso: 3,				
				nombre: 'Nodejs',
				duracion: '1 Meses',
				valor: 300000
			}
			];
const fs = require('fs');

var id = 0;

let listarCurso=(curso,tiempo)=>
{
	setTimeout(function(){
		console.log('Curso de : ' + cursos[curso].nombre + " - id Curso:" + cursos[curso].idCurso + " - Durecaión: " + cursos[curso].duracion + " - Valor: " + cursos[curso].valor);
	},tiempo);	
}

function findCurso(curso) { 
    return curso.idCurso == id;
}


let inscripcion=(idCurso,nombre,cedula,inscribir)=> setTimeout( function()
{
	if(inscribir)
	{
		console.log('##############################################');
		id = idCurso;
		resultado = cursos.find(findCurso);	
		if (resultado != null )
		{
			texto = 'El estudiante : ' + nombre + ' identificado con C.C. : ' + cedula + ', se ha inscrito al siguiente curso: ' + '\n' + 
				'NOMBRE: ' + resultado.nombre + ' - ID CURSO: ' + resultado.idCurso + '\n' + 
				'DURACIÓN: ' + resultado.duracion + ' - VALOR: ' + resultado.valor;
			console.log(texto);	
			fs.writeFile('incripcion.txt',texto,(err) => {
				if (err) throw (err);
				console.log('Se ha creado el archivo');
			})
		}
		else
		{
			console.log('El curso ingresado no existe');
		}
	}
},6000);


console.log('Lista de cursos');
listarCurso(0,0);
listarCurso(1,2000);
listarCurso(2,4000);
inscripcion(3,'Walter','123456789',true);




