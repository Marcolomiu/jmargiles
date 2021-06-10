<?php

namespace App\Http\Controllers\Budget;

use App\Http\Controllers\Controller;
use App\Models\CommercialPremisesBudget;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class CommercialPremisesBudgetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $budget = CommercialPremisesBudget::all();
        return $budget;
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
        $budget = new CommercialPremisesBudget();

                // Personal info
                $budget->nom = $request->nom;
                $budget->telefon = $request->telf;
                $budget->email = $request->email;
                $budget->descripcio = $request->descripcio;
                
                // Zona públic
                $budget->zona_public_illuminacio = $request->zona_public_illuminacio;
                $budget->zona_public_preses_corrent = $request->zona_public_preses_corrent;
                $budget->zona_public_dades_ordinador = $request->zona_public_dades_ordinador;
                $budget->zona_public_calefaccio = $request->zona_public_calefaccio;
                $budget->zona_public_pintura = $request->zona_public_pintura;
                $budget->zona_public_aire_condicionat = $request->zona_public_aire_condicionat;
                
                // Mostrador individual
                $budget->mostrador_individual_illuminacio = $request->mostrador_individual_illuminacio;
                $budget->mostrador_individual_preses_corrent = $request->mostrador_individual_preses_corrent;
                $budget->mostrador_individual_dades_ordinador = $request->mostrador_individual_dades_ordinador;
                $budget->mostrador_individual_pintura = $request->mostrador_individual_pintura;
                
                // Zona cuina
                $budget->zona_cuina_illuminacio = $request->zona_cuina_illuminacio;
                $budget->zona_cuina_preses_corrent = $request->zona_cuina_preses_corrent;
                $budget->zona_cuina_aigua = $request->zona_cuina_aigua;
                $budget->zona_cuina_gas = $request->zona_cuina_gas;
                $budget->zona_cuina_calefaccio = $request->zona_cuina_calefaccio;
                $budget->zona_cuina_pintura = $request->zona_cuina_pintura;
                $budget->zona_cuina_aire_condicionat = $request->zona_cuina_aire_condicionat;
        
                // Magatzem
                $budget->magatzem_illuminacio = $request->magatzem_illuminacio;
                $budget->magatzem_preses_corrent = $request->magatzem_preses_corrent;
                $budget->magatzem_dades_ordinador = $request->magatzem_dades_ordinador;
                $budget->magatzem_pintura = $request->magatzem_pintura;
        
                // Bany
                $budget->bany_illuminacio = $request->bany_illuminacio;
                $budget->bany_preses_corrent = $request->bany_preses_corrent;
                $budget->bany_aigua = $request->bany_aigua;
                $budget->bany_pintura = $request->bany_pintura;
        
                // Aigua Calenta Sanitaria (ACS)
                $budget->acs_aigua = $request->acs_aigua;
                $budget->acs_gas = $request->acs_gas;
        
                // Videoporter
                $budget->videoporter_illuminacio = $request->videoporter_illuminacio;
                
                // Persiana eléctrica (només part elèctrica)
                $budget->persiana_electrica_illuminacio = $request->persiana_electrica_illuminacio;
        
                //return response($request);
                $budget->save();
                
                // Start Email
                $data = [
                    'Nom'  => $budget->nom,
                    'Telf' => $budget->telefon,
                    'Email' => $budget->email,
                    'Descripcio' => $budget->descripcio
                ];
        
                // Mail Function
                Mail::send('email.contactEmail', ['data1' => $data], function ($m) {
        
                    $m->to('marcargiles1@hotmail.com')->subject('Correu Formulari Web');
                });
        
                // End Email
        
                return response()->json(
                    [
                        "message" => "Bugdet created successfully", 
                        "data" => $data
                    ]
                );
                
                
                // return response()->json(["message" => "Bugdet created & email sent successfully."]);
                return response()->json(["message" => "Bugdet created successfully"]);
                
                //echo($request);
                //return response()->json([$request->all()]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CommercialPremisesBudget  $commercialPremisesBudget
     * @return \Illuminate\Http\Response
     */
    public function show(CommercialPremisesBudget $commercialPremisesBudget)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CommercialPremisesBudget  $commercialPremisesBudget
     * @return \Illuminate\Http\Response
     */
    public function edit(CommercialPremisesBudget $commercialPremisesBudget)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CommercialPremisesBudget  $commercialPremisesBudget
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CommercialPremisesBudget $commercialPremisesBudget)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CommercialPremisesBudget  $commercialPremisesBudget
     * @return \Illuminate\Http\Response
     */
    public function destroy(CommercialPremisesBudget $commercialPremisesBudget)
    {
        //
    }
}
