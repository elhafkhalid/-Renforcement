<?php
require_once 'Document.php';

class Livre extends Document
{
    private $isbn;
    public function  __construct($titre, $auteur, $prix, $isbn)
    {
        parent::__construct($titre, $auteur, $prix);
        $this->isbn = $isbn;
    }

    public function getISBN()
    {
        return $this->isbn;
    }

    public function getDescription()
    {
        return '[livre]' . $this->getTitre() . " - " . $this->getAuteur() . ' ( ' . $this->getPrix() . ' ) ' . ' | ' . $this->getISBN() . "\n";
    }
}

//$l = new Livre('titre1', 'auteur1', 'prix1','ISBN1');

// echo $l->getDescription();
// echo $l->estDisponibile();

