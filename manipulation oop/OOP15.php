<?php

class Animal {
    public static function who(){
        return "\n Animal";
    }

    public static function testSelf(){
        return self::who();
    }

    public static function testStatic(){
        return static::who();
    }
}


class Dog extends Animal {
    public static function who(){
        return "\n DOG";
    }
}

echo DOG::testSelf() . "\n"; // Animal
echo DOG::testStatic(); // DOG

