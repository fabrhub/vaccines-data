
//Gestore click mappa
function hoCliccatoSullaMappa(regione) {
    switch (regione) {
        case "ABR":
            for (var item of document.querySelectorAll('tr')) {
                item.classList.remove('tr-selected');
            }
            document.getElementById("tr-abruzzo").classList.toggle("tr-selected");
            break;
        case "BAS":
            for (var item of document.querySelectorAll('tr')) {
                item.classList.remove('tr-selected');
            }
            document.getElementById("tr-basilicata").classList.toggle("tr-selected");
            break;
        case "CAL":
            for (var item of document.querySelectorAll('tr')) {
                item.classList.remove('tr-selected');
            }
            document.getElementById("tr-calabria").classList.toggle("tr-selected");
            break;
        case "CAM":
            for (var item of document.querySelectorAll('tr')) {
                item.classList.remove('tr-selected');
            }
            document.getElementById("tr-campania").classList.toggle("tr-selected");
            break;
        case "EMR":
            for (var item of document.querySelectorAll('tr')) {
                item.classList.remove('tr-selected');
            }
            document.getElementById("tr-emilia").classList.toggle("tr-selected");
            break;
        case "FVG":
            for (var item of document.querySelectorAll('tr')) {
                item.classList.remove('tr-selected');
            }
            document.getElementById("tr-fvg").classList.toggle("tr-selected");
            break;
        case "LAZ":
            for (var item of document.querySelectorAll('tr')) {
                item.classList.remove('tr-selected');
            }
            document.getElementById("tr-lazio").classList.toggle("tr-selected");
            break;
        case "LIG":
            for (var item of document.querySelectorAll('tr')) {
                item.classList.remove('tr-selected');
            }
            document.getElementById("tr-liguria").classList.toggle("tr-selected");
            break;
        case "LOM":
            for (var item of document.querySelectorAll('tr')) {
                item.classList.remove('tr-selected');
            }
            document.getElementById("tr-lombardia").classList.toggle("tr-selected");
            break;
        case "MAR":
            for (var item of document.querySelectorAll('tr')) {
                item.classList.remove('tr-selected');
            }
            document.getElementById("tr-marche").classList.toggle("tr-selected");
            break;
        case "MOL":
            for (var item of document.querySelectorAll('tr')) {
                item.classList.remove('tr-selected');
            }
            document.getElementById("tr-molise").classList.toggle("tr-selected");
            break;
        case "TRN":
            for (var item of document.querySelectorAll('tr')) {
                item.classList.remove('tr-selected');
            }
            document.getElementById("tr-trento").classList.toggle("tr-selected");
            document.getElementById("tr-bolzano").classList.toggle("tr-selected");
            break;
        case "PIE":
            for (var item of document.querySelectorAll('tr')) {
                item.classList.remove('tr-selected');
            }
            document.getElementById("tr-piemonte").classList.toggle("tr-selected");
            break;
        case "PUG":
            for (var item of document.querySelectorAll('tr')) {
                item.classList.remove('tr-selected');
            }
            document.getElementById("tr-puglia").classList.toggle("tr-selected");
            break;
        case "SAR":
            for (var item of document.querySelectorAll('tr')) {
                item.classList.remove('tr-selected');
            }
            document.getElementById("tr-sardegna").classList.toggle("tr-selected");
            break;
        case "SIC":
            for (var item of document.querySelectorAll('tr')) {
                item.classList.remove('tr-selected');
            }
            document.getElementById("tr-sicilia").classList.toggle("tr-selected");
            break;
        case "TOS":
            for (var item of document.querySelectorAll('tr')) {
                item.classList.remove('tr-selected');
            }
            document.getElementById("tr-toscana").classList.toggle("tr-selected");
            break;
        case "UMB":
            for (var item of document.querySelectorAll('tr')) {
                item.classList.remove('tr-selected');
            }
            document.getElementById("tr-umbria").classList.toggle("tr-selected");
            break;
        case "VDA":
            for (var item of document.querySelectorAll('tr')) {
                item.classList.remove('tr-selected');
            }
            document.getElementById("tr-vda").classList.toggle("tr-selected");
            break;
        case "VEN":
            for (var item of document.querySelectorAll('tr')) {
                item.classList.remove('tr-selected');
            }
            document.getElementById("tr-veneto").classList.toggle("tr-selected");
            break;
        default:
            for (var item of document.querySelectorAll('tr')) {
                item.classList.remove('tr-selected');
            }
            break;
    }
}

//Mostra percentuale sulla barra
function calcola_perc(totale_vaccinati){
    perc = (totale_vaccinati * 100) / 60000000;
    document.getElementById("now-color").style.width = perc + '%';
    document.getElementById("percentuale").innerHTML = perc.toFixed(1).replace('.',',') + '%' ;
}

//Mostra le dosi somministrate sulla card dei fornitori
function mostra_dosi_tabella(prima, seconda){
    for( var key in prima){
        switch (key){
            case 'Pfizer/BioNTech':
                document.getElementById("pd_pfz").innerHTML = prima[key].toLocaleString();
                document.getElementById("sd_pfz").innerHTML = seconda[key].toLocaleString();
                document.getElementById("ds_pfz").innerHTML = (prima[key] + seconda[key]).toLocaleString();
                break;
            case 'Moderna':
                document.getElementById("pd_mod").innerHTML = prima[key].toLocaleString();
                document.getElementById("sd_mod").innerHTML = seconda[key].toLocaleString();
                document.getElementById("ds_mod").innerHTML = (prima[key] + seconda[key]).toLocaleString();
                break;
            case 'Vaxzevria (AstraZeneca)':
                document.getElementById("pd_vax").innerHTML = prima[key].toLocaleString();
                document.getElementById("sd_vax").innerHTML = seconda[key].toLocaleString();
                document.getElementById("ds_vax").innerHTML = (prima[key] + seconda[key]).toLocaleString();
                break;
            case 'Janssen':
                document.getElementById("pd_jan").innerHTML = prima[key].toLocaleString();
                document.getElementById("ds_jan").innerHTML = (prima[key]).toLocaleString();
                document.getElementById("sd_jan").innerHTML = "Monodose";
                break;
            default:
                //Niente
        }
    }
}

//Mostra le dosi consegnate per fornitore
function mostra_dosi_consegnate(risposta){
    pfizer = 0;
    moderna = 0;
    janssen = 0;
    vaxzevria = 0;
    for (i = 0; i < risposta.data.length; i++) {
        switch (risposta.data[i].fornitore){

            case 'Pfizer/BioNTech':
                pfizer += risposta.data[i].numero_dosi;

                break;
            case 'Moderna':
                moderna += risposta.data[i].numero_dosi;
                break;
            case 'Vaxzevria (AstraZeneca)':
                vaxzevria += risposta.data[i].numero_dosi;
                break;
            case 'Janssen':
                janssen += risposta.data[i].numero_dosi;
                break;
            default:
        }
    }
    document.getElementById("dc_mod").innerHTML = moderna.toLocaleString();
    document.getElementById("dc_jan").innerHTML = janssen.toLocaleString();
    document.getElementById("dc_pfz").innerHTML = pfizer.toLocaleString();
    document.getElementById("dc_vax").innerHTML = vaxzevria.toLocaleString();

}

//Riempe la tabella delle regioni

function fill_regioni_tab(risposta){
    let somministrazioni_totali = 0;

    for (i = 0; i < risposta.data.length; i++) {
        somministrazioni_totali += risposta.data[i].dosi_somministrate;

        switch (risposta.data[i].area) {
            case "ABR":
                document.getElementById("dc-abruzzo").innerHTML = risposta.data[i].dosi_consegnate.toLocaleString();
                document.getElementById("ds-abruzzo").innerHTML = risposta.data[i].dosi_somministrate.toLocaleString();
                document.getElementById("pc-abruzzo").innerHTML = risposta.data[i].percentuale_somministrazione.toLocaleString() + "%";
                break;
            case "BAS":
                document.getElementById("dc-basilicata").innerHTML = risposta.data[i].dosi_consegnate.toLocaleString();
                document.getElementById("ds-basilicata").innerHTML = risposta.data[i].dosi_somministrate.toLocaleString();
                document.getElementById("pc-basilicata").innerHTML = risposta.data[i].percentuale_somministrazione.toLocaleString() + "%";
                break;
            case "CAL":
                document.getElementById("dc-calabria").innerHTML = risposta.data[i].dosi_consegnate.toLocaleString();
                document.getElementById("ds-calabria").innerHTML = risposta.data[i].dosi_somministrate.toLocaleString();
                document.getElementById("pc-calabria").innerHTML = risposta.data[i].percentuale_somministrazione.toLocaleString() + "%";
                break;
            case "CAM":
                document.getElementById("dc-campania").innerHTML = risposta.data[i].dosi_consegnate.toLocaleString();
                document.getElementById("ds-campania").innerHTML = risposta.data[i].dosi_somministrate.toLocaleString();
                document.getElementById("pc-campania").innerHTML = risposta.data[i].percentuale_somministrazione.toLocaleString() + "%";
                break;
            case "EMR":
                document.getElementById("dc-emilia").innerHTML = risposta.data[i].dosi_consegnate.toLocaleString();
                document.getElementById("ds-emilia").innerHTML = risposta.data[i].dosi_somministrate.toLocaleString();
                document.getElementById("pc-emilia").innerHTML = risposta.data[i].percentuale_somministrazione.toLocaleString() + "%";
                break;
            case "FVG":
                document.getElementById("dc-fvg").innerHTML = risposta.data[i].dosi_consegnate.toLocaleString();
                document.getElementById("ds-fvg").innerHTML = risposta.data[i].dosi_somministrate.toLocaleString();
                document.getElementById("pc-fvg").innerHTML = risposta.data[i].percentuale_somministrazione.toLocaleString() + "%";
                break;
            case "LAZ":
                document.getElementById("dc-lazio").innerHTML = risposta.data[i].dosi_consegnate.toLocaleString();
                document.getElementById("ds-lazio").innerHTML = risposta.data[i].dosi_somministrate.toLocaleString();
                document.getElementById("pc-lazio").innerHTML = risposta.data[i].percentuale_somministrazione.toLocaleString() + "%";
                break;
            case "LIG":
                document.getElementById("dc-liguria").innerHTML = risposta.data[i].dosi_consegnate.toLocaleString();
                document.getElementById("ds-liguria").innerHTML = risposta.data[i].dosi_somministrate.toLocaleString();
                document.getElementById("pc-liguria").innerHTML = risposta.data[i].percentuale_somministrazione.toLocaleString() + "%";
                break;
            case "LOM":
                document.getElementById("dc-lombardia").innerHTML = risposta.data[i].dosi_consegnate.toLocaleString();
                document.getElementById("ds-lombardia").innerHTML = risposta.data[i].dosi_somministrate.toLocaleString();
                document.getElementById("pc-lombardia").innerHTML = risposta.data[i].percentuale_somministrazione.toLocaleString() + "%";
                break;
            case "MAR":
                document.getElementById("dc-marche").innerHTML = risposta.data[i].dosi_consegnate.toLocaleString();
                document.getElementById("ds-marche").innerHTML = risposta.data[i].dosi_somministrate.toLocaleString();
                document.getElementById("pc-marche").innerHTML = risposta.data[i].percentuale_somministrazione.toLocaleString() + "%";
                break;
            case "MOL":
                document.getElementById("dc-molise").innerHTML = risposta.data[i].dosi_consegnate.toLocaleString();
                document.getElementById("ds-molise").innerHTML = risposta.data[i].dosi_somministrate.toLocaleString();
                document.getElementById("pc-molise").innerHTML = risposta.data[i].percentuale_somministrazione.toLocaleString() + "%";
                break;
            case "PAB":
                document.getElementById("dc-bolzano").innerHTML = risposta.data[i].dosi_consegnate.toLocaleString();
                document.getElementById("ds-bolzano").innerHTML = risposta.data[i].dosi_somministrate.toLocaleString();
                document.getElementById("pc-bolzano").innerHTML = risposta.data[i].percentuale_somministrazione.toLocaleString() + "%";
                break;
            case "PAT":
                document.getElementById("dc-trento").innerHTML = risposta.data[i].dosi_consegnate.toLocaleString();
                document.getElementById("ds-trento").innerHTML = risposta.data[i].dosi_somministrate.toLocaleString();
                document.getElementById("pc-trento").innerHTML = risposta.data[i].percentuale_somministrazione.toLocaleString() + "%";
                break;
            case "PIE":
                document.getElementById("dc-piemonte").innerHTML = risposta.data[i].dosi_consegnate.toLocaleString();
                document.getElementById("ds-piemonte").innerHTML = risposta.data[i].dosi_somministrate.toLocaleString();
                document.getElementById("pc-piemonte").innerHTML = risposta.data[i].percentuale_somministrazione.toLocaleString() + "%";
                break;
            case "PUG":
                document.getElementById("dc-puglia").innerHTML = risposta.data[i].dosi_consegnate.toLocaleString();
                document.getElementById("ds-puglia").innerHTML = risposta.data[i].dosi_somministrate.toLocaleString();
                document.getElementById("pc-puglia").innerHTML = risposta.data[i].percentuale_somministrazione.toLocaleString() + "%";
                break;
            case "SAR":
                document.getElementById("dc-sardegna").innerHTML = risposta.data[i].dosi_consegnate.toLocaleString();
                document.getElementById("ds-sardegna").innerHTML = risposta.data[i].dosi_somministrate.toLocaleString();
                document.getElementById("pc-sardegna").innerHTML = risposta.data[i].percentuale_somministrazione.toLocaleString() + "%";
                break;
            case "SIC":
                document.getElementById("dc-sicilia").innerHTML = risposta.data[i].dosi_consegnate.toLocaleString();
                document.getElementById("ds-sicilia").innerHTML = risposta.data[i].dosi_somministrate.toLocaleString();
                document.getElementById("pc-sicilia").innerHTML = risposta.data[i].percentuale_somministrazione.toLocaleString() + "%";
                break;
            case "TOS":
                document.getElementById("dc-toscana").innerHTML = risposta.data[i].dosi_consegnate.toLocaleString();
                document.getElementById("ds-toscana").innerHTML = risposta.data[i].dosi_somministrate.toLocaleString();
                document.getElementById("pc-toscana").innerHTML = risposta.data[i].percentuale_somministrazione.toLocaleString() + "%";
                break;
            case "UMB":
                document.getElementById("dc-umbria").innerHTML = risposta.data[i].dosi_consegnate.toLocaleString();
                document.getElementById("ds-umbria").innerHTML = risposta.data[i].dosi_somministrate.toLocaleString();
                document.getElementById("pc-umbria").innerHTML = risposta.data[i].percentuale_somministrazione.toLocaleString() + "%";
                break;
            case "VDA":
                document.getElementById("dc-vda").innerHTML = risposta.data[i].dosi_consegnate.toLocaleString();
                document.getElementById("ds-vda").innerHTML = risposta.data[i].dosi_somministrate.toLocaleString();
                document.getElementById("pc-vda").innerHTML = risposta.data[i].percentuale_somministrazione.toLocaleString() + "%";
                break;
            case "VEN":
                document.getElementById("dc-veneto").innerHTML = risposta.data[i].dosi_consegnate.toLocaleString();
                document.getElementById("ds-veneto").innerHTML = risposta.data[i].dosi_somministrate.toLocaleString();
                document.getElementById("pc-veneto").innerHTML = risposta.data[i].percentuale_somministrazione.toLocaleString() + "%";
                break;
            default:
            // code block
        }
    }
    document.getElementById("tot-somministrazioni").innerHTML = somministrazioni_totali.toLocaleString();
}
