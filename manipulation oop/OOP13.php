<?php

class user {
    public  $count = 0;
    public function __construct()
    {
        return $this->count++;
    }
}

$u1 = new user();
echo $u1->count . "\n";
$u2 = new user();
echo $u2->count . "\n";
$u3 = new user();
echo $u3->count . "\n";





