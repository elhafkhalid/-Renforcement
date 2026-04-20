<?php
require "./interface.php";

class repo1 implements methodRepo
{
    public function repo()
    {
        return  [
            new product("nom1"),
            new product("nom2"),
            new product("nom3"),
        ];
    }
}


