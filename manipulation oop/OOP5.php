<?php

// interface Payable
// {
//     public function calculerSalaire();
// }

// abstract class Employe implements Payable
// {
//     protected $nom;
//     protected $baseSaialre;

//     public function __construct($nom, $baseSaialre)
//     {
//         $this->nom = $nom;
//         $this->baseSaialre = $baseSaialre;
//     }
// }

// class Developeur extends Employe 
// {
//     public function calculerSalaire()
//     {
//         return $this->baseSaialre + 1000;
//     }
// }

// class Manager extends Employe
// {
//     public function calculerSalaire()
//     {
//         return $this->baseSaialre + 2000;
//     }
// }


// class Freelance implements Payable
// {
//     public function calculerSalaire()
//     {
//         return 5000;
//     }
// }

// $elements = [
//     new Manager("khalid", 4000),
//     new Developeur("younes",4004),
//     new Freelance(),
// ];


// foreach($elements as $e){
//     echo $e->calculerSalaire() . "\n";
// }