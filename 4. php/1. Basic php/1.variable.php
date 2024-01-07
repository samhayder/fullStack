<?php

// Variable Types:
// 1. Null
$nullValue = NULL;
echo $nullValue;
var_dump($nullValue);

// 2. Boolean
var_dump((bool) "");
var_dump((bool) "False");
var_dump((bool) 0);
var_dump((bool) 125);

// 3. Integer (int)
$intNum = 365987;
var_dump($intNum);

// 4. Float (float)
$floatNum = 3.14159;
var_dump($floatNum);

// 5. String
// 5.1. Single Quote String ''
echo 'This is single quote string';

// 5.2. Double Quote String ""
echo "This is Double quote String";
$doubleStr = "I'll Back";
echo "Salim {$doubleStr}";

// 5.3. heredoc Syntext
echo <<<END
   1
      2
         3
END;

// 5.4. nowdoc Syntext
echo <<<'EOD'
   a
      b
         c
EOD;

/* Const Variable */
const PI = 3.14;
echo PI;

$emoji = '😂';
echo $emoji;
?>