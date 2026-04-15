<?php
require "product.php";

class Repo {
    public function getProduct(){
        return  [
          new Product("nom1"),
          new Product("nom2"),
          new Product("nom3"),
        ];
    }
}

