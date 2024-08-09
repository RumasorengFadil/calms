<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class userController extends Controller
{
    public function register(){
        User::register();
    }
    public function login(){
        User::login();
    }
}
