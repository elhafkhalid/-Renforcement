<?php

// abstract class Contenu
// {
//     private $titre;
//     private $dureé;

//     public function __construct($titre, $dureé)
//     {
//         $this->titre = $titre;
//         $this->dureé = $dureé;
//     }

//     public function getTitre()
//     {
//         return $this->titre;
//     }

//     public function getDuree()
//     {
//         return $this->dureé;
//     }

//     abstract public function lire();
// }

// class Film extends Contenu
// {
//     public function lire()
//     {
//         echo "\n lecture film : " ;
//     }
// }

// class Serie extends Contenu
// {
//     public function lire()
//     {
//         echo "\n lecture serie : " ;
//     }
// }

// class Documentaire extends Contenu
// {
//     public function lire()
//     {
//         echo "\n lecture documentaire : ";
//     }
// }

// $contenus = [
//     new Film("inception","4h"),
//     new Serie("Game of thrones","10h"),
//     new Documentaire("documentaire1","12h"),
// ];

// foreach($contenus as $c) {
//     echo $c->lire() . " => " . $c->getTitre() . " => " . $c->getDuree();
// }