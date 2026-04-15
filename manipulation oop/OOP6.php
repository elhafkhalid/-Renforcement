<?php

interface Reparable
{
    public function reparer();
}

interface ReparationStrategy
{
    public function reparer($objet);
}

class ReparationSimple implements ReparationStrategy
{
    public function reparer($objet)
    {
        echo "\nreparation simple du voiture : " . $objet->getMarque() . "  " . $objet->getVitesse();
    }
}

class ReparationUrgent implements ReparationStrategy
{
    public function reparer($objet)
    {
        echo "\nreparation urgent du voiture : " . $objet->getMarque() . "  " . $objet->getVitesse();
    }
}

class ReparationAvance implements ReparationStrategy
{
    public function reparer($objet)
    {
        echo "\nreparation avance du voiture : " . $objet->getMarque() . "  " . $objet->getVitesse();
    }
}

class ReparationRapide implements ReparationStrategy
{
    private $strategy;
    public function __construct($strategy)
    {
        $this->strategy = $strategy;
    }

    public function reparer($objet)
    {
        $this->strategy->reparer($objet);
        echo " reparation rapide";
    }
}

abstract class Vehicule
{
    private $marque;
    private $vitesse;


    public function __construct($marque, $vitesse)
    {
        $this->marque = $marque;
        $this->vitesse = $vitesse;
    }

    public function getMarque()
    {
        return $this->marque;
    }

    public function getVitesse()
    {
        return $this->vitesse;
    }
}


class Voiture extends Vehicule implements Reparable
{
    private $strategy;
    public function __construct($marque, $vitesse, ReparationStrategy $strategy)
    {
        parent::__construct($marque, $vitesse);
        $this->strategy = $strategy;
    }

    public function reparer()
    {
        return $this->strategy->reparer($this);
    }
}


class Moto extends Vehicule implements Reparable
{
    private $strategy;
    public function __construct($marque, $vitesse, ReparationStrategy $strategy)
    {
        parent::__construct($marque, $vitesse);
        $this->strategy = $strategy;
    }

    public function reparer()
    {
        return $this->strategy->reparer($this);
    }
}


class Machine implements Reparable
{
    private $nom;
    public function __construct($nom)
    {
        $this->nom = $nom;
    }
    public function reparer()
    {
        echo "\nreparation machine : $this->nom";
    }
}


$elements = [
    new Voiture("bmw", 300, new ReparationRapide(new ReparationSimple())),
    // new Voiture("rono", 400, new ReparationUrgent()),
    // new Voiture("pego", 900, new ReparationAvance()),
    new Moto("c90", 100, new ReparationSimple()),
    new Moto("c50", 100, new ReparationAvance()),
    new Machine("machine1"),
];


foreach ($elements as $e) {
    $e->reparer();
}
