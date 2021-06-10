<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommercialPremisesBudgetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('local_comercial', function (Blueprint $table) {
            
            $table->id();
            
            // Personal info
            $table->string('nom');
            $table->integer('telefon');
            $table->string('email');
            $table->string('descripcio')->nullable();

            // Zona públic
            $table->string('zona_public_illuminacio', 10)->nullable();
            $table->string('zona_public_preses_corrent', 10)->nullable();
            $table->string('zona_public_dades_ordinador', 10)->nullable();
            $table->string('zona_public_calefaccio', 10)->nullable();
            $table->string('zona_public_pintura', 10)->nullable();
            $table->string('zona_public_aire_condicionat', 10)->nullable();
            
            // Mostrador individual
            $table->string('mostrador_individual_illuminacio', 10)->nullable();
            $table->string('mostrador_individual_preses_corrent', 10)->nullable();
            $table->string('mostrador_individual_dades_ordinador', 10)->nullable();
            $table->string('mostrador_individual_pintura', 10)->nullable();
            
            // Zona cuina
            $table->string('zona_cuina_illuminacio', 10)->nullable();
            $table->string('zona_cuina_preses_corrent', 10)->nullable();
            $table->string('zona_cuina_aigua', 10)->nullable();
            $table->string('zona_cuina_gas', 10)->nullable();
            $table->string('zona_cuina_calefaccio', 10)->nullable();
            $table->string('zona_cuina_pintura', 10)->nullable();
            $table->string('zona_cuina_aire_condicionat', 10)->nullable();

            // Magatzem
            $table->string('magatzem_illuminacio', 10)->nullable();
            $table->string('magatzem_preses_corrent', 10)->nullable();
            $table->string('magatzem_dades_ordinador', 10)->nullable();
            $table->string('magatzem_pintura', 10)->nullable();

            // Bany
            $table->string('bany_illuminacio', 10)->nullable();
            $table->string('bany_preses_corrent', 10)->nullable();
            $table->string('bany_aigua', 10)->nullable();
            $table->string('bany_pintura', 10)->nullable();

            // Aigua Calenta Sanitaria (ACS)
            $table->string('acs_aigua', 10)->nullable();
            $table->string('acs_gas', 10)->nullable();

            // Videoporter
            $table->string('videoporter_illuminacio', 10)->nullable();
            
            // Persiana eléctrica (només part elèctrica)
            $table->string('persiana_electrica_illuminacio', 10)->nullable();

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
        Schema::dropIfExists('local_comercial');
    }
}
