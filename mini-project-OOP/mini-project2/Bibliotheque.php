<?php
require_once 'Livre.php';
require_once 'Magazin.php';

class Bibliotheque
{
    private $documents = [];
    private $tarifRetardJour;
    public function __construct($tarifRetardJour)
    {
        $this->tarifRetardJour = $tarifRetardJour;
    }

    public function ajouteDocuments(Document $d)
    {
        $this->documents[] = $d;
    }

    public function getDisponibiles()
    {
        $filterT = [];
        foreach ($this->documents as $d) {
            if ($d->estDisponible())  array_push($filterT,$d);
        }
        return $filterT;
    }

    public function calaculerRetard(Document $d, $jourRetard)
    {
        if ($d->estDisponible() === false) return $jourRetard * $this->tarifRetardJour;
        else return 0;
    }
 
}

$b = new Bibliotheque(0.5);

$l1 = new Livre('titre1', 'auteur1', 'prix1', 'ISBN1');
$l2 = new Livre('titre2', 'auteur2', 'prix2', 'ISBN2');
$m1 = new Magazin('Mag1', 'auteur1', 'prix1', 'numero1');
$m2 = new Magazin('Mag2', 'auteur2', 'prix2', 'numero2');

$b->ajouteDocuments($l1);
$b->ajouteDocuments($l2);
$b->ajouteDocuments($m1);
$b->ajouteDocuments($m2);

echo "\n" . $b->calaculerRetard($l2, 5);
$l2->emprunter();
echo "\n" . $b->calaculerRetard($l2, 5);

echo "\n" . count($b->getDisponibiles());//0 ?? 
