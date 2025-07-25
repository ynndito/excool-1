@extends('layouts.guest')

@section('content')
    <header class="header">
        <div class="container">
            @include('guest.dashboard.partials.layouts.navbar')
        </div>
    </header>

    @include('guest.dashboard.partials.layouts.bottom-nav')

    @include('guest.dashboard.partials.hero')

    <main class="main">
        <div class="container">
            @include('guest.dashboard.partials.stats')
            @include('guest.dashboard.partials.data.activities')
        </div>
    </main>

    @include('guest.dashboard.partials.modal.login')
    @include('guest.dashboard.partials.modal.register')
    @include('guest.dashboard.partials.modal.join-activity')

    <!-- Enhanced Notification Container -->
    <div id="notificationContainer" class="notification-container">
        <!-- Notifications will be dynamically added here -->
    </div>
@endsection