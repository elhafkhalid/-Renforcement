<?php

require "./service/service.php";

$service = new service(new repo2());

$service->print(); 

