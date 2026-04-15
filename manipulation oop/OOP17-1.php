<?php

abstract class Livraison {
    private $adresse;
    private $poid;

    public function __construct($adresse,$poid)
    {
        $this->adresse = $adresse;
        $this->poid = $poid;
    }
     
    public function getAdresse(){
        return $this->adresse;
    }

    public function getPoid(){
        return $this->poid;
    }


    abstract public function calculerFrais();
}

class Standard extends Livraison{
    public function calculerFrais()
    {
        return 10 . "$";
    }
}

class Express extends Livraison{
    public function calculerFrais()
    {
        return 20 . "$";
    }
}

class International extends Livraison{
    public function calculerFrais()
    {
        return 50 . "$";
    }
}

$livraisons = [
    new Standard("@1",100),
    new Express("@2",200),
    new International("@3",300),
];

foreach($livraisons as $l){
    echo "\nfrais => : " . $l->calculerFrais() . " adresse => : " . $l->getAdresse() . " poid => : " . $l->getPoid();
}



