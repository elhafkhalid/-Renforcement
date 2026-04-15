<?php

interface Moteeur {
    public function demarer();
}

class Voiture {
    private $moteur;
    public function __construct($moteur)
    {
        $this->moteur = $moteur;
    }

    public function demarer(){
        return $this->moteur->demarer();
    }
}

class MoteurEssence implements Moteeur {
    public function demarer()
    {
        echo "\nmoteur essence";
    }
}

class MoteurDiesel implements Moteeur {
    public function demarer(){
        echo "\nmoteur diesel";
    }
}

$v1 = new Voiture(new MoteurEssence());
$v2 = new Voiture(new MoteurDiesel());

$voitues = [
    $v1,
    $v2,
];

foreach($voitues as $v){
    echo $v->demarer();
}
