<?php

interface StrategyBoisson {
    public function calculer();
}

class Boisson
{
    private $nom;
    private $strategy;
    public function __construct($nom,StrategyBoisson $strategy)
    {
        $this->nom = $nom;
        $this->strategy = $strategy;
    }

    public function getNom()
    {
        return $this->nom;
    }

    public function calculerPrix(){
       return $this->strategy->calculer();
    }
}

class Cafe implements StrategyBoisson
{
    public function calculer()
    {
        return 10;
    }
}

class the implements StrategyBoisson
{
    public function calculer()
    {
        return 8;
    }
}

class chocolat implements StrategyBoisson
{
    public function calculer()
    {
        return 12;
    }
}

class ScureOption implements StrategyBoisson {
    private $strategy;
    public function __construct(StrategyBoisson $strategy)
    {
        $this->strategy= $strategy;
    }

    public function calculer()
    {
        return $this->strategy->calculer() + 1;
    }
}

class CaramelOption implements StrategyBoisson {
    private $strategy;
    public function __construct($strategy)
    {
        $this->strategy = $strategy;
    }

    public function calculer(){
        return $this->strategy->calculer() + 3;
    }
}

class ReductionOption implements StrategyBoisson{
    private $strategy;
    public function __construct(StrategyBoisson $strategy){
        $this->strategy = $strategy;
    }

    public function calculer(){
        return $this->strategy->calculer() * 0.1;
    }
}

$boissons = [
    new Boisson("espreso",new ScureOption(new cafe())),
    new Boisson("the1",new ScureOption(new the())),
    new Boisson("chocolat", new ReductionOption(new CaramelOption(new ScureOption(new chocolat())))),
];


foreach($boissons as $b){
    echo $b->getNom() . " prix => : " . $b->calculerPrix() . "\n";
}

