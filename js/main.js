
function calcularNegocio() {

    const opcion = parseInt(
        prompt(
            "¿Qué querés hacer?\n\n" +
            "1 - Vender un producto\n" +
            "2 - Alquilar un producto"
        )
    );


    switch (opcion) {

        case 1:

            const productoVenta = prompt(
                "¿Qué producto querés vender?"
            );

            const costo = parseFloat(
                prompt(
                    "¿Cuánto te cuesta cada unidad?"
                )
            );

            const precioVenta = parseFloat(
                prompt(
                    "¿A qué precio lo vas a vender?"
                )
            );

            const unidades = parseInt(
                prompt(
                    "¿Cuántas unidades estimás vender por semana?"
                )
            );

            const gananciaUnidad =
                precioVenta - costo;

            const gananciaSemanal =
                gananciaUnidad * unidades;

            const gananciaMensual =
                gananciaSemanal * 4;


            alert(
                "¿RINDE?\n\n" +
                "Producto: " + productoVenta +
                "\nGanancia por unidad: $" +
                gananciaUnidad +
                "\nGanancia semanal: $" +
                gananciaSemanal +
                "\nGanancia mensual estimada: $" +
                gananciaMensual
            );

            break;


        case 2:

            const productoAlquiler = prompt(
                "¿Qué producto querés alquilar?"
            );

            const inversion = parseFloat(
                prompt(
                    "¿Cuánto te cuesta comprarlo?"
                )
            );

            const precioAlquiler = parseFloat(
                prompt(
                    "¿Cuánto vas a cobrar por cada alquiler?"
                )
            );

            const frecuencia = parseInt(
                prompt(
                    "¿Cuántos alquileres estimás hacer?\n\n" +
                    "1 - Por día\n" +
                    "2 - Por semana"
                )
            );

            let alquileresMes;

            if (frecuencia === 1) {

                const alquileresDia = parseInt(
                    prompt(
                        "¿Cuántos alquileres estimás hacer por día?"
                    )
                );

                alquileresMes =
                    alquileresDia * 30;

            } else {

                const alquileresSemana = parseInt(
                    prompt(
                        "¿Cuántos alquileres estimás hacer por semana?"
                    )
                );

                alquileresMes =
                    alquileresSemana * 4;
            }


            const ingresoMensual =
                precioAlquiler * alquileresMes;

            const alquileresRecuperar =
                inversion / precioAlquiler;


            alert(
                "¿RINDE?\n\n" +
                "Producto: " + productoAlquiler +
                "\nAlquileres estimados por mes: " +
                alquileresMes +
                "\nIngreso mensual estimado: $" +
                ingresoMensual +
                "\nAlquileres para recuperar la inversión: " +
                alquileresRecuperar.toFixed(1)
            );

            break;

    }


    const tieneLocal = prompt(
        "¿Tenés un local físico?\n\n" +
        "Sí / No"
    );


    if (
        tieneLocal.toLowerCase() === "sí" ||
        tieneLocal.toLowerCase() === "si"
    ) {

        const alquilerLocal = parseFloat(
            prompt(
                "¿Cuánto pagás de alquiler por mes?"
            )
        );

        alert(
            "Costo de alquiler del local: $" +
            alquilerLocal
        );
    }

}