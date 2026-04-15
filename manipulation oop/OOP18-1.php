<?php

abstract class Commande {
    private $client;

    public function __construct($client)
    {
        $this->client = $client;
    }

    public function getClient(){
        return $this->client;
    }

    abstract public function calculerPrix();
}

class Standard extends Commande {
    public function calculerPrix()
    {
        return 50;
    }
}

class Premium extends Commande {
    public function calculerPrix()
    {
        return 100;
    }
}

class Vip extends Commande {
    public function calculerPrix()
    {
        return 200;
    }
}

$commandes = [
    new Standard("client1"),
    new Premium("client2"),
    new Vip("client3"),
];

foreach($commandes as $c) {
    echo $c->calculerPrix() . " client : => " . $c->getClient() . "\n";
}



