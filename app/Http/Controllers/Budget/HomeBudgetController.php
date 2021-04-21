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
        
        //Personal info
        $budget->nom = $request->nom;
        $budget->telefon = $request->telf;
        $budget->email = $request->email;
        $budget->descripcio = $request->descripcio;
        
        //Kitchen
        $budget->cuina_electricitat = $request->cuina_electricitat;
        $budget->cuina_aigua = $request->cuina_aigua;
        $budget->cuina_mobles240 = $request->cuina_mobles240;
        $budget->cuina_encimera_gas = $request->cuina_encimera_gas;
        $budget->cuina_encimera_vitroceramica = $request->cuina_encimera_vitroceramica;
        $budget->cuina_encimera_induccio = $request->cuina_encimera_induccio;
        $budget->cuina_rentaplats = $request->cuina_rentaplats;
        $budget->cuina_forn = $request->cuina_forn;
        $budget->cuina_fregadora = $request->cuina_fregadora;
        $budget->cuina_campana = $request->cuina_campana;
        $budget->cuina_aixeta = $request->cuina_aixeta;
        $budget->cuina_rentadora = $request->cuina_rentadora;
        $budget->cuina_caldera = $request->cuina_caldera;
        $budget->cuina_sostre_pladur = $request->cuina_sostre_pladur;
        $budget->cuina_sostre_alumini = $request->cuina_sostre_alumini;
        $budget->cuina_alicatat = $request->cuina_alicatat;
        $budget->cuina_pintura = $request->cuina_pintura;
        
        //Bathroom 1 ok
        $budget->bany1_electricitat = $request->bany1_electricitat;
        $budget->bany1_aigua = $request->bany1_aigua;
        $budget->bany1_moble_rentamans = $request->bany1_moble_rentamans;
        $budget->bany1_rentamans = $request->bany1_rentamans;
        $budget->bany1_mirall = $request->bany1_mirall;
        $budget->bany1_mampara_banyera = $request->bany1_mampara_banyera;
        $budget->bany1_mampara_dutxa = $request->bany1_mampara_dutxa;
        $budget->bany1_aixeta_dutxa = $request->bany1_aixeta_dutxa;
        $budget->bany1_aixeta_bany = $request->bany1_aixeta_bany;
        $budget->bany1_accesoris_bany = $request->bany1_accesoris_bany;
        $budget->bany1_tovalloler = $request->bany1_tovalloler;
        $budget->bany1_wc = $request->bany1_wc;
        $budget->bany1_bidet = $request->bany1_bidet;
        $budget->bany1_banyera = $request->bany1_banyera;
        $budget->bany1_dutxa = $request->bany1_dutxa;
        $budget->bany1_sostre_pladur = $request->bany1_sostre_pladur;
        $budget->bany1_sostre_alumini = $request->bany1_sostre_alumini;
        $budget->bany1_alicatat = $request->bany1_alicatat;
        $budget->bany1_pintura = $request->bany1_pintura;
        
        //Living room ok
        $budget->salo_interruptors_endolls = $request->salo_interruptors_endolls;
        $budget->salo_tv = $request->salo_tv;
        $budget->salo_dades_internet = $request->salo_dades_internet;
        $budget->salo_aire_condicionat = $request->salo_aire_condicionat;
        $budget->salo_calefaccio = $request->salo_calefaccio;
        $budget->salo_sostre_fals = $request->salo_sostre_fals;
        $budget->salo_pintura = $request->salo_pintura;

        //Double room 1 ok
        $budget->hb_mat1_interruptors_endolls = $request->hb_mat1_interruptors_endolls;
        $budget->hb_mat1_tv = $request->hb_mat1_tv;
        $budget->hb_mat1_dades_internet = $request->hb_mat1_dades_internet;
        $budget->hb_mat1_aire_condicionat = $request->hb_mat1_aire_condicionat;
        $budget->hb_mat1_calefaccio = $request->hb_mat1_calefaccio;
        $budget->hb_mat1_sostre_fals = $request->hb_mat1_sostre_fals;
        $budget->hb_mat1_pintura = $request->hb_mat1_pintura;

        //Single room 1 ok
        $budget->hb_ind1_interruptors_endolls = $request->hb_ind1_interruptors_endolls;
        $budget->hb_ind1_tv = $request->hb_ind1_tv;
        $budget->hb_ind1_dades_internet = $request->hb_ind1_dades_internet;
        $budget->hb_ind1_aire_condicionat = $request->hb_ind1_aire_condicionat;
        $budget->hb_ind1_calefaccio = $request->hb_ind1_calefaccio;
        $budget->hb_ind1_sostre_fals = $request->hb_ind1_sostre_fals;
        $budget->hb_ind1_pintura = $request->hb_ind1_pintura;

        //Single room 2 ok
        $budget->hb_ind2_interruptors_endolls = $request->hb_ind2_interruptors_endolls;
        $budget->hb_ind2_tv = $request->hb_ind2_tv;
        $budget->hb_ind2_dades_internet = $request->hb_ind2_dades_internet;
        $budget->hb_ind2_aire_condicionat = $request->hb_ind2_aire_condicionat;
        $budget->hb_ind2_calefaccio = $request->hb_ind2_calefaccio;
        $budget->hb_ind2_sostre_fals = $request->hb_ind2_sostre_fals;
        $budget->hb_ind2_pintura = $request->hb_ind2_pintura;

        //Entrance hall / corridor ok
        $budget->rebedor_interruptors_endolls = $request->rebedor_interruptors_endolls;
        $budget->rebedor_calefaccio = $request->rebedor_calefaccio;
        $budget->rebedor_sostre_fals = $request->rebedor_sostre_fals;
        $budget->rebedor_pintura = $request->rebedor_pintura;


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
