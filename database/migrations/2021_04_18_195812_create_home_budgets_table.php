<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHomeBudgetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vivenda', function (Blueprint $table) {
            
            $table->id();
            //Personal info
            $table->string('nom');
            $table->integer('telefon');
            $table->string('email');
            $table->string('descripcio');

            //Kitchen
            $table->string('cuina_electricitat', 10)->nullable();
            $table->string('cuina_aigua', 10)->nullable();
            $table->string('cuina_mobles240', 10)->nullable();
            $table->string('cuina_encimera_gas', 10)->nullable();
            $table->string('cuina_encimera_vitroceramica', 10)->nullable();
            $table->string('cuina_encimera_induccio', 10)->nullable();
            $table->string('cuina_rentaplats', 10)->nullable();
            $table->string('cuina_forn', 10)->nullable();
            $table->string('cuina_fregadora', 10)->nullable();
            $table->string('cuina_campana', 10)->nullable();
            $table->string('cuina_aixeta', 10)->nullable();
            $table->string('cuina_rentadora', 10)->nullable();
            $table->string('cuina_caldera', 10)->nullable();
            $table->string('cuina_sostre_pladur', 10)->nullable();
            $table->string('cuina_sostre_alumini', 10)->nullable();
            $table->string('cuina_alicatat', 10)->nullable();
            $table->string('cuina_pintura', 10)->nullable();
            
            //Bathroom 1
            $table->string('bany1_electricitat', 10)->nullable();
            $table->string('bany1_aigua', 10)->nullable();
            $table->string('bany1_moble_rentamans', 10)->nullable();
            $table->string('bany1_rentamans', 10)->nullable();
            $table->string('bany1_mirall', 10)->nullable();
            $table->string('bany1_mampara_banyera', 10)->nullable();
            $table->string('bany1_mampara_dutxa', 10)->nullable();
            $table->string('bany1_aixeta_dutxa', 10)->nullable();
            $table->string('bany1_aixeta_bany', 10)->nullable();
            $table->string('bany1_accesoris_bany', 10)->nullable();
            $table->string('bany1_tovalloler', 10)->nullable();
            $table->string('bany1_wc', 10)->nullable();
            $table->string('bany1_bidet', 10)->nullable();
            $table->string('bany1_banyera', 10)->nullable();
            $table->string('bany1_dutxa', 10)->nullable();
            $table->string('bany1_sostre_pladur', 10)->nullable();
            $table->string('bany1_sostre_alumini', 10)->nullable();
            $table->string('bany1_alicatat', 10)->nullable();
            $table->string('bany1_pintura', 10)->nullable();
            
            //Living room
            $table->string('salo_interruptors_endolls', 10)->nullable();
            $table->string('salo_tv', 10)->nullable();
            $table->string('salo_dades_internet', 10)->nullable();
            $table->string('salo_aire_condicionat', 10)->nullable();
            $table->string('salo_calefaccio', 10)->nullable();
            $table->string('salo_sostre_fals', 10)->nullable();
            $table->string('salo_pintura', 10)->nullable();

            //Double room 1
            $table->string('hb_mat1_interruptors_endolls', 10)->nullable();
            $table->string('hb_mat1_tv', 10)->nullable();
            $table->string('hb_mat1_dades_internet', 10)->nullable();
            $table->string('hb_mat1_aire_condicionat', 10)->nullable();
            $table->string('hb_mat1_calefaccio', 10)->nullable();
            $table->string('hb_mat1_sostre_fals', 10)->nullable();
            $table->string('hb_mat1_pintura', 10)->nullable();

            //Single room 1
            $table->string('hb_ind1_interruptors_endolls', 10)->nullable();
            $table->string('hb_ind1_tv', 10)->nullable();
            $table->string('hb_ind1_dades_internet', 10)->nullable();
            $table->string('hb_ind1_aire_condicionat', 10)->nullable();
            $table->string('hb_ind1_calefaccio', 10)->nullable();
            $table->string('hb_ind1_sostre_fals', 10)->nullable();
            $table->string('hb_ind1_pintura', 10)->nullable();

            //Single room 2
            $table->string('hb_ind2_interruptors_endolls', 10)->nullable();
            $table->string('hb_ind2_tv', 10)->nullable();
            $table->string('hb_ind2_dades_internet', 10)->nullable();
            $table->string('hb_ind2_aire_condicionat', 10)->nullable();
            $table->string('hb_ind2_calefaccio', 10)->nullable();
            $table->string('hb_ind2_sostre_fals', 10)->nullable();
            $table->string('hb_ind2_pintura', 10)->nullable();

            //Entrance hall / corridor
            $table->string('rebedor_interruptors_endolls', 10)->nullable();
            $table->string('rebedor_calefaccio', 10)->nullable();
            $table->string('rebedor_sostre_fals', 10)->nullable();
            $table->string('rebedor_pintura', 10)->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vivenda');
    }
}