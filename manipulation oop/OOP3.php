<?php

interface PaymentMethod
{
    public function payer();
}

class  Cash implements PaymentMethod
{
    private $montant;
    public function __construct($montant)
    {
        $this->montant = $montant;
    }
    public function payer()
    {
        echo "payment cash : $this->montant \n";
    }
}

class CreditCard implements PaymentMethod
{
    private $montant;
    public function __construct($montant)
    {
        $this->montant = $montant;
    }
    public function payer()
    {
        echo "payment CreditCard $this->montant \n";
    }
}


$payments = [
    new Cash(100),
    new CreditCard(300),
];

foreach ($payments as $p) {
    $p->payer();
}

