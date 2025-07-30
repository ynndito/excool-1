<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if(Auth::attempt($credentials)){
            $request->session()->regenerate();
            return response()->json(['status' => 'success', 'message' => 'Login berhasil', 'user' => Auth::user()]);
        }

        return response()->json(['status' => 'error', 'message' => 'Email atau password salah'], 401);
    }

    public function logout()
    {
        Auth::logout();
    }

    public function register()
    {
        
    }
}
