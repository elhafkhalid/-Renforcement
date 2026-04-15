<?php

interface StrategyPaiement
{
    public function payer();
}

class Paiement
{
    private $strategy;

    public function __construct(StrategyPaiement $strategy)
    {
        $this->strategy = $strategy;
    }

    public function payer()
    {
        return $this->strategy->payer();
    }
}

class CarteBancaire implements StrategyPaiement
{
    private $montant;
    public function __construct($montant)
    {
        $this->montant = $montant;
    }

    public function payer()
    {
        return $this->montant;
    }

}

class Paypal implements StrategyPaiement
{
    private $montant;
    public function __construct($montant)
    {
        $this->montant = $montant;
    }

    public function payer()
    {
        return $this->montant;
    }
}

class FraisService implements StrategyPaiement
{
    private $strategy;
    public function __construct(StrategyPaiement $strategy)
    {
        $this->strategy = $strategy;
    }

    public function payer()
    {
        return $this->strategy->payer() + 2;
    }
}



$p = new Paiement(new FraisService(new CarteBancaire(300)));

echo $p->payer();