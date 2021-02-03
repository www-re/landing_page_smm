<?php
// работа с данным скриптом показана в видео на сайте http://rek9.ru/otpravka-zayavok-v-google-forms/
// формируем запись в таблицу google (изменить)
$url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc5VsxkZAf44NgpTTOLMXKl-r61tjc3bFrRWsD3Dqk5dDklhQ/formResponse";
// сохраняем url, с которого была отправлена форма в переменную utm
$utm = $_SERVER["HTTP_REFERER"];
// ссылка для переадресации (изменить)
$link = "./feedback.html";

// массив данных (изменить entry, draft и fbzx)
$post_data = array (
 "entry.311535038" => $_POST['name'],
 "entry.343778497" => $_POST['contact'],
 "entry.87314357" => $_POST['email'],
//  "entry.444444444" => $utm,
 "draftResponse" => "[null,null,'283241765923742073']
",
 "pageHistory" => "0",
 "fbzx" => "283241765923742073"
);

// Далее не трогать
// с помощью CURL заносим данные в таблицу google
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// указываем, что у нас POST запрос
curl_setopt($ch, CURLOPT_POST, 1);
// добавляем переменные
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
//заполняем таблицу google
$output = curl_exec($ch);
curl_close($ch);

//перенаправляем браузер пользователя на скачивание оффера по нашей ссылке
header('Location: '.$link);
?>