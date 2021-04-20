<?php

namespace App\Http\Controllers\Budget;

use App\Http\Controllers\Controller;
use App\Models\HomeBudget;
use Illuminate\Http\Request;

class HomeBudgetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        /*
        HomeBudget::insert([
            'nom' => $request->input('nom'),
            'telefon' => $request->input('telf'),
            'email' => $request->input('email'),
            'descripcio' => $request->input('descripcio'),
        ]);
    
        $response['message'] = "Guardo exitosamente";
        $response['success'] = true;
    
        return $response;
        */
        
        $budget = new HomeBudget();
        $budget->nom = $request->nom;
        $budget->telefon = $request->telf;
        $budget->email = $request->email;
        $budget->descripcio = $request->descripcio;
        
        

        $budget->save();
        return response()->json(["message" => "Bugdet created successfully."]);
        
        //echo($request);
        //return response()->json([$request->all()]);
    }

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




    /**
     * Display the specified resource.
     *
     * @param  \App\Models\HomeBudget  $homeBudget
     * @return \Illuminate\Http\Response
     */
    public function show(HomeBudget $homeBudget)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\HomeBudget  $homeBudget
     * @return \Illuminate\Http\Response
     */
    public function edit(HomeBudget $homeBudget)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\HomeBudget  $homeBudget
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, HomeBudget $homeBudget)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\HomeBudget  $homeBudget
     * @return \Illuminate\Http\Response
     */
    public function destroy(HomeBudget $homeBudget)
    {
        //
    }
}
