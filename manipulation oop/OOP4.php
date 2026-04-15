<?php

interface Notifier {
    public function envoyer();
}

class Sms implements Notifier {
    private $message;
    public function __construct($message)
    {
        $this->message = $message;
    }
    public function envoyer()
    {
        echo "SMS envoyer : $this->message \n";
    }
}

class Whatsap implements Notifier {
    private $message;
    public function __construct($message)
    {
        $this->message = $message;
    }
    public function envoyer()
    {
        echo "whatsap envoyer : $this->message \n";
    }
}

class Email implements Notifier {
    private $message;
    public function __construct($message)
    {
        $this->message = $message;
    }
    public function envoyer(){
        echo "email envoyer $this->message \n";
    }
}


$Notifies = [
    new Sms("bonjour"),
    new Whatsap("salut"),
    new Email("hello"),
];

foreach($Notifies as $n){
    $n->envoyer();
}


