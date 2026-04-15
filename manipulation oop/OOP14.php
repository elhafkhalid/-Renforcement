<?php

class User
{

    private $name;
    private $id;

    private static $count = 0;
    private static $nextId = 1;

    public function __construct($name)
    {
        $this->name = $name;
        $this->id = self::$nextId++;
        self::$count++;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getId()
    {
        return $this->id;
    }

    public static function  getCount()
    {
        return self::$count;
    }

    public static function reset()
    {
        self::$count = 0;
        self::$nextId = 1;
    }
}


$u1 = new user("khalid");
$u2 = new user("sara");
echo user::getCount() . "\n"; // 2
echo $u1->getName() . " => id : " .  $u1->getId() . "\n"; // 1
echo $u2->getName() . " => id : " .  $u2->getId() . "\n"; // 2
user::reset();
echo user::getCount() ."\n"; // 0
$u3 = new user("ahmed");
echo user::getCount() . "\n"; // 1
echo $u3->getName() . " => id : " .  $u3->getId() . "\n"; // 1

