import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { BsFileEarmarkExcel, BsFileEarmarkPdf } from "react-icons/bs";
import { useSelector } from "react-redux";

import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import { useEffect, useRef, useState } from "react";

export const DataTableComponent = ({ columns, data }) => {

    const { checking } = useSelector((state) => state.ui);

    const tabla = useRef();

    const [info, setInfo] = useState(data);

    useEffect(() => {
        setInfo(data);
    }, [data]);

    const handleFilter = (e) => {
        setInfo(data.filter((el) => el.nombre.props.textBtn.toLowerCase().includes(e.target.value.toLowerCase())));
    };

    const header = (
        <div className="d-flex mx-2 pb-3 row">
            <input className="form-control col-md-12 w-25 mx-2" type="search" placeholder="Buscar..." onChange={handleFilter} />
        </div>
    );

    return (
        <DataTable ref={tabla} id="data-table" resizableColumns columnResizeMode="fit" showGridlines loading={checking} header={header} rows={10} value={info} responsiveLayout="scroll" dataKey="id" emptyMessage="No hay información para mostrar." paginator rowsPerPageOptions={[10, 20, 50, 100]} currentPageReportTemplate="Mostrando {first} - {last} de {totalRecords} registros" paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown">
            {columns.map((col, index) => (
                <Column key={index} alignHeader="center" align="center" field={col.selector} header={col.name} style={{ width: "auto", textAlign: "center" }} />
            ))}
        </DataTable>
    );
};
