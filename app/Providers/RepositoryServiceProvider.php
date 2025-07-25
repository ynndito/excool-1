<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class RepositoryServiceProvider extends ServiceProvider
{
    public function register()
    {
        $path = app_path('Repositories/Contracts');

        foreach(File::allFiles($path) as $file){
            $interface = 'App\\Repositories\\Contracts\\' . $file->getFilenameWithoutExtension();
            $class = 'App\\Repositories\\' . Str::replace('Interface', '', $file->getFilenameWithoutExtension());

            if(class_exists($class)){
                $this->app->bind($interface, $class);
            }
        }
    }

    public function boot(){}
}