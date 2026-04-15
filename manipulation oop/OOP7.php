<?php

interface SalaryStrategy
{
    public function calculer($base);
}

class Manager implements SalaryStrategy
{
    public function calculer($base)
    {
        return $base + 2000;
    }
}

class Developeur implements SalaryStrategy
{
    public function calculer($base)
    {
        return $base + 1000;
    }
}

class BonnusStrategy implements SalaryStrategy
{
    private $baseStrategy;
    public function __construct($baseStrategy)
    {
        $this->baseStrategy = $baseStrategy;
    }

    public function calculer($base)
    {
        return $this->baseStrategy->calculer($base) + 800;
    }
}

class Employe
{
    private $nom;
    private $base;
    private $strategy;
    public function __construct($nom, $base, SalaryStrategy $strategy)
    {
        $this->nom = $nom;
        $this->base = $base;
        $this->strategy = $strategy;
    }

    public function calculerSalary()
    {
        return $this->strategy->calculer($this->base);
    }
}

$elements = [
    new Employe("khalid", 4000, new Manager()),
    new Employe("youns", 1000, new Developeur()),
    new Employe("jalil", 4000, new BonnusStrategy((new Manager()))),
];

foreach ($elements as $e) {
    echo $e->calculerSalary() . "\n";
}
