<?php

interface StrategyLivraison
{
    public function calculer();
}

class Livraison {
    private $strategy;
    private $adresse;
    
    public function __construct(StrategyLivraison $strategy, $adresse)
    {
        $this->strategy = $strategy;
        $this->adresse = $adresse;
    }

    public function getAdreese()
    {
        return $this->adresse;
    }

    public function calculer()
    {
        return $this->strategy->calculer();
    }
}

class Standard implements StrategyLivraison
{
    public function calculer()
    {
        return 10;
    }
}

class Express implements StrategyLivraison
{
    public function calculer()
    {
        return 20;
    }
}

class International implements StrategyLivraison{
    public function calculer()
    {
        return 50;
    }
}

class RapidOption implements StrategyLivraison{
    private $strategy;
    public function __construct(StrategyLivraison $strategy)
    {
        $this->strategy = $strategy;
    }

    public function calculer()
    {
        return $this->strategy->calculer() + 5;
    }
}

class AssuranceOption implements StrategyLivraison{
    private $strategy;
    public function __construct(StrategyLivraison $strategy)
    {
        $this->strategy = $strategy;
    }

    public function calculer()
    {
        return $this->strategy->calculer() + 10;
    }
}

class FragileOption implements StrategyLivraison{
    private $strategy;
    public function __construct(StrategyLivraison $strategy)
    {
        $this->strategy = $strategy;
    }

    public function calculer()
    {
        return $this->strategy->calculer() + 7;
    }
}


$L1 = new Livraison(new FragileOption(new AssuranceOption(new RapidOption( new Standard()))),"@1");
echo $L1->calculer();

