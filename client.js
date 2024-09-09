const { createApp, ref } = Vue;

createApp({
    data() {
        const citas = [];
        const cc = "";
        const fecha = "";
        const response = null;
        const imageFile = null;
        const codigoCita = "";
        const codeToSearch = "";
        const fechaInicio = "";
        const fechaFin = "";
        const codigoEliminar = "";
        return {
            citas,
            cc,
            fecha,
            response,
            imageFile,
            codigoCita,
            codeToSearch,
            fechaInicio,
            fechaFin,
            codigoEliminar
        };
    },
    methods: {
        onFileChange(event) {
            this.imageFile = event.target.files[0];
        },
        async enviarCita() {
            const formData = new FormData();
            formData.append("cc", this.cc);
            formData.append("fecha", this.fecha);
            formData.append("autorizacion", this.imageFile);

            const requestOptions = {
                method: "POST",
                body: formData,
            };
            const response = await fetch("http://localhost:3000/citas", requestOptions);
            this.response = response.status;
            const data = await response.json();
            this.codigoCita = data.codigo;
            alert(`Cita creada exitosamente. Código de la cita: ${this.codigoCita}`);
        },
        async buscarCitas() {
            fetch(`http://localhost:3000/citas?fechaInicio=${this.fechaInicio}&fechaFin=${this.fechaFin}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((data) => (this.citas = data.map(cita => ({
                    ...cita, cancelada: cita.cancelada,autorizacion: `http://localhost:3000/${cita.autorizacion}`
                }))))
        },
        async cancelarCita(){
            fetch(`http://localhost:3000/citas/${this.codigoEliminar}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((data) =>  alert(data.message))
        }
    }
}).mount("#app");