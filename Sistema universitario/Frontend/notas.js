const materias = {

    "Calculo I": {
        notaFinal: 53,
        notas: [
            { tipo: "Parcial", numero: 1, calificacion: 42 },
            { tipo: "Parcial", numero: 2, calificacion: 51 },
            { tipo: "Parcial", numero: 3, calificacion: 54 },
            { tipo: "Examen Final", numero: 1, calificacion: 49 },
            { tipo: "Ayudantía", numero: 1, calificacion: 68 },
            { tipo: "Ayudantía", numero: 2, calificacion: 70 },
            { tipo: "Ayudantía", numero: 3, calificacion: 72 },
            { tipo: "Evaluación Continua", numero: 1, calificacion: 58 }
        ]
    },

    "Algebra": {
        notaFinal: 52,
        notas: [
            { tipo: "Parcial", numero: 1, calificacion: 40 },
            { tipo: "Parcial", numero: 2, calificacion: 49 },
            { tipo: "Parcial", numero: 3, calificacion: 53 },
            { tipo: "Examen Final", numero: 1, calificacion: 48 },
            { tipo: "Ayudantía", numero: 1, calificacion: 65 },
            { tipo: "Ayudantía", numero: 2, calificacion: 68 },
            { tipo: "Ayudantía", numero: 3, calificacion: 70 },
            { tipo: "Evaluación Continua", numero: 1, calificacion: 56 }
        ]
    },

    "Fisica basica": {
        notaFinal: 56,
        notas: [
            { tipo: "Parcial", numero: 1, calificacion: 50 },
            { tipo: "Parcial", numero: 2, calificacion: 55 },
            { tipo: "Parcial", numero: 3, calificacion: 60 },
            { tipo: "Examen Final", numero: 1, calificacion: 52 },
            { tipo: "Ayudantía", numero: 1, calificacion: 75 },
            { tipo: "Ayudantía", numero: 2, calificacion: 78 },
            { tipo: "Ayudantía", numero: 3, calificacion: 80 },
            { tipo: "Evaluación Continua", numero: 1, calificacion: 60 }
        ]
    },

    "Lab.Fisica Basica I": {
        notaFinal: 56,
        notas: [
            { tipo: "Parcial", numero: 1, calificacion: 49 },
            { tipo: "Parcial", numero: 2, calificacion: 54 },
            { tipo: "Parcial", numero: 3, calificacion: 58 },
            { tipo: "Examen Final", numero: 1, calificacion: 53 },
            { tipo: "Ayudantía", numero: 1, calificacion: 74 },
            { tipo: "Ayudantía", numero: 2, calificacion: 76 },
            { tipo: "Ayudantía", numero: 3, calificacion: 78 },
            { tipo: "Evaluación Continua", numero: 1, calificacion: 59 }
        ]
    },

    "Dibujo Mecanico": {
        notaFinal: 57,
        notas: [
            { tipo: "Parcial", numero: 1, calificacion: 52 },
            { tipo: "Parcial", numero: 2, calificacion: 56 },
            { tipo: "Parcial", numero: 3, calificacion: 60 },
            { tipo: "Examen Final", numero: 1, calificacion: 55 },
            { tipo: "Ayudantía", numero: 1, calificacion: 78 },
            { tipo: "Ayudantía", numero: 2, calificacion: 80 },
            { tipo: "Ayudantía", numero: 3, calificacion: 82 },
            { tipo: "Evaluación Continua", numero: 1, calificacion: 61 }
        ]
    },

    "QUIMICA GENERAL": {
        notaFinal: 51,
        notas: [
            { tipo: "Parcial", numero: 1, calificacion: 40 },
            { tipo: "Parcial", numero: 2, calificacion: 48 },
            { tipo: "Parcial", numero: 3, calificacion: 51 },
            { tipo: "Examen Final", numero: 1, calificacion: 47 },
            { tipo: "Ayudantía", numero: 1, calificacion: 66 },
            { tipo: "Ayudantía", numero: 2, calificacion: 68 },
            { tipo: "Ayudantía", numero: 3, calificacion: 70 },
            { tipo: "Evaluación Continua", numero: 1, calificacion: 55 }
        ]
    },

    "Lab.Quimica General": {
        notaFinal: 53,
        notas: [
            { tipo: "Parcial", numero: 1, calificacion: 44 },
            { tipo: "Parcial", numero: 2, calificacion: 50 },
            { tipo: "Parcial", numero: 3, calificacion: 55 },
            { tipo: "Examen Final", numero: 1, calificacion: 49 },
            { tipo: "Ayudantía", numero: 1, calificacion: 70 },
            { tipo: "Ayudantía", numero: 2, calificacion: 72 },
            { tipo: "Ayudantía", numero: 3, calificacion: 74 },
            { tipo: "Evaluación Continua", numero: 1, calificacion: 58 }
        ]
    }

};

const parametros = new URLSearchParams(window.location.search);
const nombreMateria = parametros.get("materia");

const titulo = document.getElementById("nombreMateria");
const tabla = document.getElementById("tablaNotas");
const notaFinal = document.getElementById("notaFinal");

if (materias[nombreMateria]) {

    titulo.textContent = nombreMateria;
    tabla.innerHTML = "";

    materias[nombreMateria].notas.forEach((nota, i) => {

        tabla.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${nota.tipo}</td>
                <td>${nota.numero}</td>
                <td>${nota.calificacion}</td>
            </tr>
        `;

    });

    notaFinal.textContent = materias[nombreMateria].notaFinal;

    if (materias[nombreMateria].notaFinal >= 51) {
        notaFinal.style.color = "green";
    } else {
        notaFinal.style.color = "red";
    }

} else {

    titulo.textContent = "Materia no encontrada";
    tabla.innerHTML = `
        <tr>
            <td colspan="4">No existen notas para esta materia.</td>
        </tr>
    `;
    notaFinal.textContent = "--";

}
