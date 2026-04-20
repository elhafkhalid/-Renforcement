<?php
require "./model/product.php";
require "./interface.php";


class repo2 implements methodRepo
{
    public function repo()
    {
        return  [
            new product("nom10"),
            new product("nom20"),
            new product("nom30"),
        ];
    }
}

