<?php

abstract class Paiement
{
    private $montant;
    public function __construct($montant)
    {
        $this->montant = $montant;
    }

    public function getMontant()
    {
        return $this->montant;
    }

    abstract public function payer();
}

class CarteBancaire extends Paiement
{
    public function payer()
    {
        return "\n paiement par carte " . " montant => : " . $this->getMontant() . "$";
    }
}

class Paypal extends Paiement
{
    public function payer()
    {
        return "\n paiement par paypal " . " montant => : " . $this->getMontant() . "$";
    }
}

class Cash extends Paiement
{
    public function payer()
    {
        return "\n paiement par cash " . " montant => : " . $this->getMontant() . "$";
    }
}

$paiements = [
    new CarteBancaire(100),
    new Paypal(200),
    new Cash(300),
];

foreach($paiements as $p){
    echo $p->payer();
}


