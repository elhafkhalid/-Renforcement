<?php

// interface FraisStrategy
// {
//     public function calculer();
// }

// class Livraison
// {
//     private $client;
//     private $adresse;
//     private $startegy;


//     public function __construct($client, $adresse, FraisStrategy $startegy)
//     {
//         $this->client = $client;
//         $this->adresse = $adresse;
//         $this->startegy = $startegy;
//     }

//     public function getClient()
//     {
//         return $this->client;
//     }

//     public function getAdresse()
//     {
//         return $this->adresse;
//     }

//     public function calculerFrais()
//     {
//         return $this->startegy->calculer();
//     }
// }


// class LivraisonStandard implements FraisStrategy
// {
//     public function calculer()
//     {
//         return 10;
//     }
// }

// class LivraisonExpress implements FraisStrategy
// {
//     public function calculer()
//     {
//         return 20;
//     }
// }

// class LivraisonInternational implements FraisStrategy
// {
//     public function calculer()
//     {
//         return 50;
//     }
// }

// class RapideOption implements FraisStrategy
// {
//     private $strategy;
//     public function __construct($strategy)
//     {
//         $this->strategy = $strategy;
//     }

//     public function calculer()
//     {
//         return $this->strategy->calculer() + 5;
//     }
// }

// class FragileOption implements FraisStrategy
// {
//     private $strategy;
//     public function __construct($strategy)
//     {
//         $this->strategy = $strategy;
//     }

//     public function calculer()
//     {
//         return $this->strategy->calculer() + 7;
//     }
// }

// class AssurerOption implements FraisStrategy
// {
//     private $strategy;
//     public function __construct($strategy)
//     {
//         $this->strategy = $strategy;
//     }

//     public function calculer(){
//         return $this->strategy->calculer() + 10;
//     }
// }
// $livraisons = [
//     new Livraison("client1", "@1", new AssurerOption(new FragileOption(new RapideOption(new LivraisonStandard())))),
//     new Livraison("client2", "@2", new FragileOption(new RapideOption(new LivraisonExpress()))),
// ];

// foreach ($livraisons as $l) {
//     echo $l->getClient() . " " . $l->getAdresse() . " " . " => frais " . $l->calculerFrais() . "\n";
// }
