import Swal from "sweetalert2";

import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

export const savePropietario = (data) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const resp = await fetchSinToken("propietario/agregar", data, "POST");
        const body = await resp.json();
        if (body.ok) {
            Swal.fire({
                icon: "success",
                title: "Propietario agregado correctamnete",
                showConfirmButton: false,
                timer: 1500,
            });
            setTimeout(() => {
                window.location.href = `${import.meta.env.VITE_WINDOW_URL}/#/loign`;
            }, 1000);
        } else {
            Swal.fire({
                icon: "error",
                title: body.msg,
                showConfirmButton: false,
                timer: 1500,
            });
        }

        dispatch(finishLoading())
    };
};

export const updatePropietario = (data) => {
    return async (dispatch) => {
        dispatch(startLoading);

        const resp = await fetchSinToken("propietario/actualizar", data, "POST");
        const body = await resp.json();

        if (body.ok) {
            Swal.fire({
                icon: "success",
                title: "Propietario actualizado correctamnete",
                showConfirmButton: false,
                timer: 1500,
            });
            setTimeout(() => {
                window.location.href = `${import.meta.env.VITE_WINDOW_URL}/#/login`;
            }, 1000);
            // dispatch(cleanPropietarioActive());
        } else {
            console.log(body);
            Swal.fire({
                icon: "error",
                title: body.msg,
                showConfirmButton: false,
                timer: 1500,
            });
        }

        dispatch(finishLoading())
    };
};

export const getPropietarios = () => {
    return async (dispatch) => {
        dispatch(startLoading());

        const resp = await fetchSinToken("propietario/todos");
        const body = await resp.json();

        dispatch(savePropietarios(body));

        dispatch(finishLoading());
    };
};

const savePropietarios = ({ propietarios }) => ({
    type: types.savingPropietarios,
    payload: {
        propietarios,
    },
});

export const setPropietarioActive = (data) => ({
    type: types.propietarioActive,
    payload: {
        ...data,
    },
});

export const cleanPropietarioActive = () => ({ type: types.emptyPropietarioActive });