<?php

date_default_timezone_set('America/Los_Angeles');

require("/var/www/html/vendor/autoload.php");

$fw = \Base::instance();

// For all page requests that are not API requests, we want to load the compiled frontend
$fw->route(["GET /", "GET /*"], function(\Base $fw) {
    if (strpos($fw->PATH, "/api/") === 0) {
        $fw->error(404);
    }
    echo file_get_contents("/var/www/html/dist/index.html");
});

$fw->run();

?>