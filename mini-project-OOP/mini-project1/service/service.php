<?php
require "./repo/repository1.php";
require "./repo/repository2.php";

class service
{
    private $repo;
    public function __construct(methodRepo $repo)
    {
        $this->repo = $repo;
    }

    public function print()
    {
        foreach ($this->repo->repo() as $a) {
            echo $a->getNom() . "\n";
        }
    }
}

//abstraction hiding complexite