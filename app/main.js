

function MainController($scope) {





    $scope.item = {};

    $scope.itens = [

    {
        indice:1,
        titulo: 'Batman',
        ano: 2008,
        calificacion: 8.5,
        ganancias:'200 millones',
        director:'Nolan' ,
        genero:'accion',
        elenco:[{nombre:"Christian Bale"},{nombre:"Michael Keaton"}],
        imgurl:'http://www.cinepremiere.com.mx/assets/images/noticias/2013/04-abril/batman.jpg'
    },
        {

            indice:2,
            titulo: 'Avengers',
            ano: 2010,
            calificacion: 8,
            ganancias:'200 millones',
            director:'Marvel' ,
            genero:'accion',
            elenco:[{nombre:"Ironman"},{nombre:"Hulk"}],
             imgurl:'http://screencrush.com/442/files/2013/10/avengers-cast.jpg'

    },

    {

            indice:3,
            titulo: 'Titanic',
            ano: 1991,
            calificacion: 8,
            ganancias:'200 millones',
            director:'Nose Sabe' ,
            genero:'drama',
            elenco:[{nombre:"Leonardo Dicaprio"},{nombre:"Rose"}],
             imgurl:'http://ichef.bbci.co.uk/news/624/cpsprodpb/02BC/production/_83800700_titanic_rex.jpg'

    }
    ];

     $scope.actor = {};

    $scope.actores = [

    {
        indice:1,
        nombre: 'Christian Bale',
        genero: 'Masculino',
        fechaNac: '20/05/1960',
        peliculas:[{titulo:"Batman"},{titulo:"El Maquinista"}],

    },
    {
        indice:2,
        nombre: 'Robert Downey',
        genero: 'Masculino',
        fechaNac: '20/05/1960',
        peliculas:[{titulo:"Batman"},{titulo:"El Maquinista"}],

    }
    ];


    $scope.adicionaItem = function () {
        $scope.itens.push({
            titulo: $scope.item.titulo,
            ano: $scope.item.ano,
            calificacion:$scope.item.calificacion,
             elenco:[{nombre:""}],
             imgurl: $scope.item.imgurl,
             ganancias: $scope.item.ganancias,
             director:$scope.item.director,
              genero:$scope.item.genero




               });
        $scope.item.titulo= $scope.item.genero= $scope.item.imgurl=$scope.item.director=$scope.item.ganancias= $scope.item.ano = $scope.item.calificacion= '';


    };
    $scope.adicionaActor = function () {
        $scope.actores.push({
         nombre: $scope.actor.nombre,
         fechaNac: $scope.actor.fechaNac,
          genero:$scope.actor.genero ,
          Peliculas:[{titulo:""}]


      });
        $scope.actor.nombre = $scope.actor.genero = $scope.actor.fechaNac= '';
    };
    $scope.agregarElenco = function () {

        $scope.item.elenco.push({nombre:$scope.item.elenco.nombre });
        $scope.item.elenco.nombre ='';





    };
    $scope.agregarObras = function () {

        $scope.actor.peliculas.push({titulo:$scope.actor.peliculas.titulo });
        $scope.actor.peliculas.titulo ='';

    };


 $scope.lookItem = function (item) {
  var index = $scope.itens.indexOf(item);

   $scope.item = $scope.itens[index];
   $scope.edit = false;

};

$scope.lookActor = function (item) {
  var index = $scope.actores.indexOf(item);
  console.log(item);

   $scope.actor = $scope.actores[index];
   $scope.edit = false;

};
$scope.lookActorByName = function (item) {
  var index = $scope.actores.indexOf(item);
console.log(index);
   $scope.actor = $scope.actores[index];
   $scope.edit = false;

};

$scope.editarItem = function (item) {
  var index = $scope.itens.indexOf(item);

   $scope.item = $scope.itens[index];
   $scope.edit = true;

};

$scope.editarActor = function (item) {
  var index = $scope.actores.indexOf(item);

   $scope.actor = $scope.actores[index];
   $scope.edit = true;

};




$scope.deleteItem  = function (item) {
  var index = $scope.itens.indexOf(item);
    $scope.itens.splice(index, 1);

};

$scope.deleteActor  = function (item) {
  var index = $scope.actores.indexOf(item);
    $scope.actores.splice(index, 1);


};

    $scope.applyChanges = function(){
        $scope.item = $scope.actor={};
        $scope.edit = false;
    };


// RATING

$scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };



}