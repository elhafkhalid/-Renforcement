<?php
// abstract class Employe
// {
//     private $nom;
//     private $salaireBase;

//     public function __construct($nom, $salaireBase)
//     {
//         $this->nom = $nom;
//         $this->salaireBase = $salaireBase;
//     }

//     public function getNom()
//     {
//         return $this->nom;
//     }

//     public function getSalaireBase()
//     {
//         return $this->salaireBase;
//     }

//     abstract public function calculerSalaire();
// }

// class Manager extends Employe
// {
//     private $bonus = 2000;

//     public function calculerSalaire()
//     {
//         return $this->getSalaireBase() + $this->bonus;
//     }
// }

// class Developeurr extends Employe
// {
//     private $heures;
//     private $prix;

//     public function __construct($nom, $salaireBase, $heures, $prix)
//     {
//         parent::__construct($nom, $salaireBase);
//         $this->heures = $heures;
//         $this->prix = $prix;
//     }
//     public function calculerSalaire()
//     {
//         return $this->getSalaireBase() + ($this->heures * $this->prix);
//     }
// }

// class Technicien extends Employe{
//     private $prime = 500;
//     public function calculerSalaire()
//     {
//         return $this->getSalaireBase() + $this->prime;
//     }
// }

// $employes = [
//     new Manager("khalid",4000),
//     new Developeurr("jalil",3000,4,200),
//     new Technicien("mustapha",5000),
// ];

// foreach($employes as $e){
//     echo $e->getNom() . " : " . $e->calculerSalaire() . "\n";
// }

