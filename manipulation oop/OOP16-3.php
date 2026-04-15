<?php

interface StrategyPaiement
{
    public function payer($montant);
}

class Paiement
{
    private $id;
    private $strategy;
    private $montant;

    private static $nextId = 1;
    private static $count = 0;

    public function __construct($montant, StrategyPaiement $strategy)
    {
        $this->montant = $montant;
        $this->strategy = $strategy;

        $this->id = self::$nextId++;
        self::$count++;
    }

    public function payer()
    {
        return $this->strategy->payer($this->montant);
    }

    public static function getTotalPaiements()
    {
        return self::$count;
    }

    public function getId()
    {
        return $this->id;
    }
}

class CarteBancaire implements StrategyPaiement
{
    public function payer($montant)
    {
        return $montant;
    }
}

class Paypal implements StrategyPaiement
{
    public function payer($montant)
    {
        return $montant;
    }
}

class FraisService implements StrategyPaiement
{
    private $strategy;
    public function __construct(StrategyPaiement $strategy)
    {
        $this->strategy = $strategy;
    }
    public function payer($montant)
    {
        return $this->strategy->payer($montant) + 2;
    }
}

class TaxOption implements StrategyPaiement
{
    private $strategy;
    public function __construct(StrategyPaiement $strategy)
    {
        $this->strategy = $strategy;
    }

    public function payer($montant)
    {
        $base = $this->strategy->payer($montant);
        return $base + 0.1 * $base;
    }
}

$p1 = new Paiement(300, new TaxOption(new FraisService(new Paypal())));
$p2 = new Paiement(600, new FraisService(new CarteBancaire()));


echo $p1->payer() . "\n"; //332.2
echo $p2->payer() . "\n";  // 602
echo $p1->getId() . "\n"; //1
echo $p2->getId() . "\n"; //2
echo Paiement::getTotalPaiements(); //2
