<?php

interface CommadeStrategy {
    public function calculer();
}

class Commande {
    private $client;
    private $strategy;
    private $id;

    private static $count = 0;
    private static $nextId = 1;

    public function __construct($client,CommadeStrategy $strategy)
    {
        $this->client = $client;
        $this->strategy = $strategy;

        $this->id = self::$nextId;
        self::$nextId++;
        self::$count++;
    }

    public function getClient(){
        return $this->client;
    }

    public function calculer(){
        return $this->strategy->calculer();
    }

    public static function getTotalCommades(){
        return self::$count;
    }

    public function getId(){
        return $this->id;
    }
}


class Standard implements CommadeStrategy {
    public function calculer()
    {
        return 50;
    }
}

class Premium implements CommadeStrategy {
    public function calculer()
    {
        return 100;
    }
}

class Vip implements CommadeStrategy {
    public function calculer()
    {
        return 200;
    }
}

class ExpressOption implements CommadeStrategy{
    private $strategy ;
    public function __construct(CommadeStrategy $strategy)
    {
        $this->strategy = $strategy;
    }

    public function calculer()
    {
        return $this->strategy->calculer() + 10;
    }
}

class EmballageOption implements CommadeStrategy{
    private $strategy ;
    public function __construct(CommadeStrategy $strategy)
    {
        $this->strategy = $strategy;
    }

    public function calculer()
    {
        return $this->strategy->calculer() + 5;
    }
}

class PromoOption implements CommadeStrategy{
    private $strategy ;
    public function __construct(CommadeStrategy $strategy)
    {
        $this->strategy = $strategy;
    }

    public function calculer()
    {
        return $this->strategy->calculer() - 20;
    }
}
$commades = [
    new Commande("client1",new PromoOption(new EmballageOption(new ExpressOption(new Standard())))),
    new Commande("client2",new PromoOption(new EmballageOption(new ExpressOption(new Vip())))),
    new Commande("client3",new PromoOption(new EmballageOption(new ExpressOption(new Premium())))),
    new Commande("client4",(new EmballageOption(new ExpressOption(new Premium())))),
];

foreach($commades as $c){
    echo  " prix => : " . $c->calculer() . ", client => : " . $c->getClient() . ", id  => : " . $c->getId() . "\n";
}

echo " total commades => : " . Commande::getTotalCommades();




