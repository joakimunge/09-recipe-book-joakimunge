<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client as GuzzleHttpClient;
use GuzzleHttp\Promise;
use Psr\Http\Message\ResponseInterface;
use GuzzleHttp\Exception\RequestException;
// use App\User;
// use Tymon\JWTAuth\JWTAuth;

class RecipeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->yummly = new GuzzleHttpClient([
            'base_uri' => 'http://api.yummly.com/v1/api/',
            'headers' => 
            [
                'Accept-Encoding' => 'gzip',
                'X-Yummly-App-ID' => env('YUMMLY_APP_ID'),
                'X-Yummly-App-Key' => env('YUMMLY_APP_KEY'), 

            ]
        ]);
    }

    public function index() {
        // $promise = $this->yummly->getAsync('recipes?q=pasta');  
        
            $promise = $this->yummly->getAsync('recipes?q=pasta')->then(
            function(ResponseInterface $response) {
                return json_decode((string) $response->getBody()->getContents(), true);
            },
            function(RequestException $exception) {
                return json_decode((string) $exception->getBody()->getContents(), true);
            }
        );

        $res = $promise->wait();
        dd($res);
        // return $res;
    }

    //
}
