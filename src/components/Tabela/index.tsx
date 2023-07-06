import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses } from "@mui/material";
import IConsulta from "../../types/IConsulta";
import styled from "@emotion/styled";

const CelulaEstilizada = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]:{
        color: "var(--azul-escuro)",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "var(--fonte-principal)"
    },
    [`&.${tableCellClasses.body}`]:{
        fontSize: 16,
        fontFamily: "var(--fonte-principal)"
    }
}))

const LinhaEstilizada = styled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]: {
        backgroundColor: "var(--cinza-claro)",
        align: "right"
    }

}))

// const CabecalhoEstilizado = styled(TableHead)(() => ({
//     backgroundColor: ‘lightblue’
// }));

// A constante CabecalhoEstilizado está estilizando o componente TableHead do MUI, 
// passando a regra CSS backgroundColor: ‘lightblue’ 
// para o objeto passado como argumento da função anônima do styled-components.




function Tabela({consultas} : { consultas: IConsulta[] | null }){
    return (
        <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidht: 700}} aria-label="tabela-customizada">
                <TableHead>
                    <LinhaEstilizada>
                        <CelulaEstilizada>Data</CelulaEstilizada>
                        <CelulaEstilizada>Horário</CelulaEstilizada>
                        <CelulaEstilizada>Profissional</CelulaEstilizada>
                        <CelulaEstilizada>Especialidade</CelulaEstilizada>
                        <CelulaEstilizada>Paciente</CelulaEstilizada>
                        <CelulaEstilizada>Modalidade</CelulaEstilizada>
                    </LinhaEstilizada>
                </TableHead>
                <TableBody>
                    {consultas?.map((linha) => {
                        return (
                            <LinhaEstilizada>
                                <CelulaEstilizada component="th" scope="row"> {new Date (linha.data).toLocaleDateString()}</CelulaEstilizada>
                                <CelulaEstilizada>{linha.horario}</CelulaEstilizada>
                                <CelulaEstilizada>{linha.profissional[0].nome}</CelulaEstilizada>
                                <CelulaEstilizada>{linha.profissional[0].especialidade}</CelulaEstilizada>
                                <CelulaEstilizada>{linha.paciente}</CelulaEstilizada>
                                <CelulaEstilizada>{linha.modalidade}</CelulaEstilizada>
                            </LinhaEstilizada>

                        )
                    })}
                    
                </TableBody>
                
            </Table>
        
        </TableContainer>
        </>
    )
}
export default Tabela;