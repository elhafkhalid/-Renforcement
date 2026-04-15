<?php
// abstract class Vehicule
// {
//     private $marque;
//     private $vitesse = 0;

//     public function __construct($marque, $vitesse)
//     {
//         $this->marque = $marque;
//         $this->vitesse = $vitesse;
//     }

//     public function accelerer($valeur)
//     {
//         $this->vitesse += $valeur;
//     }

//     public function getVitesse()
//     {
//         return $this->vitesse;
//     }

//     public function getMarque()
//     {
//         return $this->marque;
//     }

//     abstract public function calculerConsommation();
// }

// class Voiture extends Vehicule
// {
//     public function calculerConsommation()
//     {
//         return $this->getVitesse() * 0.5;
//     }
// }

// class Moto extends vehicule
// {
//     public function calculerConsommation()
//     {
//         return $this->getVitesse() * 0.2;
//     }
// }


// $v1 = new Voiture("bmw", 300);
// $v2 = new Moto("c90", 100);

// $vehicules = [$v1, $v2];

// foreach ($vehicules as $v) {
//     echo $v->getMarque() . " : " . $v->calculerConsommation() . "\n";
// }
