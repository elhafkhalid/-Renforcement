<?php

interface LectureStrategy
{
    public function lire();
    public function getPrix();
}

class Contenu
{
    private $titre;
    private $duree;
    private $strategy;

    public function __construct($titre, $duree, LectureStrategy $strategy)
    {
        $this->titre = $titre;
        $this->duree = $duree;
        $this->strategy = $strategy;
    }

    public function getTitre()
    {
        return $this->titre;
    }

    public function getDuree()
    {
        return $this->duree;
    }

    public function lire()
    {
        return $this->strategy->lire();
    }

    public function getPrix()
    {
        return $this->strategy->getPrix();
    }
}


class Film implements LectureStrategy
{
    public function lire()
    {
        return "\n lecture film : " ;
    }

    public function getPrix(){
        return 10;
    }
}

class Serie implements LectureStrategy
{
    public function lire()
    {
        return "\n lecture serie : ";
    }

    public function getPrix(){
        return 15;
    }
}

class Documentaire implements LectureStrategy
{
    public function lire()
    {
        return "\n lecture documentaire : ";
    }

    public function getPrix(){
        return 100;
    }
}

class HdOption implements LectureStrategy
{
    private $strategy;
   
    public function __construct(LectureStrategy $strategy)
    {
        $this->strategy = $strategy;
    }

    public function lire()
    {
        return $this->strategy->lire();
    }

    public function getPrix(){
        return $this->strategy->getPrix() + 2;
    }
}

class Option4K implements LectureStrategy {
    private $strategy;
    public function __construct(LectureStrategy $strategy)
    {
        $this->strategy = $strategy;
    }

    public function lire(){
       return $this->strategy->lire();
    }

    public function getPrix(){
       return $this->strategy->getPrix() + 10;
    }
}

$c = new Contenu("inception", "12h", new Option4K(new Film()));

echo $c->lire() . " titre => : " . $c->getTitre() . " duree => : " . $c->getDuree() . " prix => : " . $c->getPrix();

