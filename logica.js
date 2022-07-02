/*
Usar para la lógica

                        Variables a usar la lógica
buffer:
El contenido de cada buffer es el siguiente:
bufer{"concepto":x,"piso":y, "id":z};
siendo:
concepto= ascensor, arriba, Abajo. Si es ascensor es porque se tocaron los
numeros de 1 a 10 o las letras C y E dentro del ascensor, si es arriba es porque
fue tocada la flecha para arriba y abajo la flecha para abajo.
piso= numero de piso en donde se llamó al ascensor, o el precionado dentro de este.
id= id del boton en el html para modificarlo usando javascript

Tiempo_para_empezar_a_correr_logica= por defecto comienza en 2 segundos. esto quiere
    decir que se podrá usar recien 2 segundos después de que cargo la página.(en milisegundos)

tiempo_entre_subidas_o_bajadas= velocidad del ascensor dado en milisegundos.

piso_asc= Piso actual en el que está el ascensor. Usar este de solo lectura para no
        romper el código.

                        Funciones a usar
subir_piso()= Sube un piso el ascensor desde la posicion en donde se encuentra
bajar_piso()= Baja un piso el asensor desde la posicion en la que se encuentra
abrir_puerta(piso)= abre la puerta correspondiente al piso que uno le manda.
cerrar_puerta(piso)= cierra la puerta del piso que uno le manda
ir_al_piso(piso)= manda al asensor al piso que uno le manda
*/
var estado=0;



function logica()
{
/******************Escriba su logica aca ******************************* */
/****En este ejemplo va al piso cinco, abrem cierra la puerta vuelve al 1*/
/****para abrir y cerar devuelta la puerta********************************/
/*********************************************************************** */
    if(continuar==0)
    {
        console.log(continuar);
        switch (estado) 
        {
            case 0:
                ir_al_piso(5);
                if(piso_asc==5)
                {
                    estado=1;
                    setTimeout(logica,2000);
                }
                else
                {
                    setTimeout(logica,2000);
                }
                break;
            case 1:
                abrir_puerta(5);
                estado=2;
                setTimeout(logica,2000);
                break;
            case 2:
                cerrar_puerta(5);
                estado=3;
                setTimeout(logica,3000);
            case 3:
                console.log("ir a 1");
                ir_al_piso(1);
                if(piso_asc==1)
                {
                    estado=4;
                    setTimeout(logica,2000);
                }
                else
                {
                    setTimeout(logica,2000);
                }
                break;
            case 4:
                abrir_puerta(1);
                estado=5;
                setTimeout(logica,3000);
                break;
            case 5:
                cerrar_puerta(1);
                break;
        }
    }
    else
    {
        setTimeout(logica,2000);
    }
/******************termina su logica aca ******************************* */
}