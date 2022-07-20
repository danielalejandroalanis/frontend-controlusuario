import Swal from "sweetalert2";


const fireSwal = (tittle, text, html, icon, successMessage, successPromise, denyButton, confirmButtonColor) => {
  Swal.fire({
    title: tittle,
    text: text,
    icon: icon,
    showDenyButton: denyButton,
    denyButtonText: "Cancelar",
    denyButtonColor: "red",
    confirmButtonText: "Confirmar",
    confirmButtonColor: "green"
  }).then((res) => {
    if (res.isConfirmed) {
      if(successPromise) {
        successPromise()
      }
    }
    if (res.isDenied) {
      return
    }
  });
};

export default fireSwal;
