<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactEmailController extends Controller
{
    /*...*/

    public function mail(Request $request)
    {

        $data = [
                'Nom'  => $request->input('nom'),
                'Telf' => $request->input('telf'),
                'Email' => $request->input('email'),
                'Descripcio' => $request->input('descripcio')
                ];

        //Mail Function
        Mail::send('email.contactEmail', ['data1' => $data], function ($m) {

            $m->to('marcargiles1@hotmail.com')->subject('Correu Formulari Web');
        });

        //Json Response For Angular frontend
        return response()->json(["message" => "Email sent successfully."]);
    }
}
