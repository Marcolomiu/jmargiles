<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 
    <title>JMA</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/styles.css') }}" rel="stylesheet">
    <!--<link rel="stylesheet" type="text/css" href="{{ asset('css/header.css') }}" >-->
</head>

<body>
    <!-- React root DOM -->
    <div id="index"></div>

    <!-- React JS -->
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>