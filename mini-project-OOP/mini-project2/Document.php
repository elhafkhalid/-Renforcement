<?php
require_once 'Empruntable.php';


abstract class Document implements Empruntable
{
    private $titre;
    private $auteur;
    private $prix;
    private $disponible = true;
    public function __construct($titre, $auteur, $prix)
    {
        $this->titre = $titre;
        $this->auteur = $auteur;
        $this->prix = $prix;
    }

    public function getTitre()
    {
        return $this->titre;
    }
    public function getAuteur()
    {
        return $this->auteur;
    }
    public function getPrix()
    {
        return $this->prix;
    }

    public function estDisponible()
    {
        return $this->disponible;
    }

    public function emprunter() {
         $this->disponible = false;
    }

    abstract public function getDescription();
}
