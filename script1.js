function AlumnosController($scope){
	$scope.alumnos=[
		{nombre:"olga",telefono:"345",curso:"2eso"},
		{nombre:"juana",telefono:"325",curso:"2eso"},
		{nombre:"paola",telefono:"333",curso:"3eso"},
	];
$scope.Save=function(){

	$scope.alumnos.push({nombre:$scope.nuevoAlumno.nombre, telefono:$scope.nuevoAlumno.telefono, curso:$scope.nuevoAlumno.curso})
	$scope.formVisibility=false;
	console.log($scope.formVisibility)
}

$scope.formVisibility=false;
$scope.ShowForm=function(){
	$scope.formVisibility=true;
	console.log($scope.formVisibility)

}



}

