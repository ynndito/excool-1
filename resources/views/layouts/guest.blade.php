<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=5, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{ asset('styles/guest.css') }}">
</head>
<body>
    @yield('content')
    <script>
        const sampleActivities = @json($ekskuls);
    </script>
    <script src="{{ asset('scripts/guest.js') }}"></script>
</body>
</html>