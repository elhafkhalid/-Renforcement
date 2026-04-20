<?php
require_once 'Document.php';

class Magazin extends Document
{
    private $numero;
    public function __construct($titre, $auteur, $prix, $numero)
    {
        parent::__construct($titre, $auteur, $prix);
        $this->numero = $numero;
    }

    public function getNumero()
    {
        return $this->numero;
    }

    public function getDescription()
    {
        return '[magazin]' . $this->getTitre() . " - " . $this->getAuteur() . ' ( ' . $this->getPrix() . ' ) ' . ' | ' . $this->getNumero() . "\n";
    }
}

//$m = new Magazin('Nat. Geographic', 'NGS', 5.99, 312);


// echo $m->getDescription();//
// echo $m->estDisponibile();//1
// $m->emprunter();
// echo $m->estDisponibile();//0
