import React from 'react';
import Pdf1 from "./COVID-19 Yetkilendirilmiş Tanı Laboratuvarları Listesi.pdf"
import Pdf2 from "./Destek Hat Bilgileri.pdf"
import Pdf3 from "./Günlük Covid19 Tablosu.pdf"
import { PDFReader } from 'reactjs-pdf-reader';

class Pdf extends React.Component {
    render() {
        if(this.props.match.params.id ==="1"){
            return(
                <div style={{overflow:'scroll'}}>
                    <PDFReader url={Pdf2}/>
                </div>
            )
        }
        else if(this.props.match.params.id ==="2"){
            return(
                <div style={{overflow:'scroll'}}>
                    <PDFReader url={Pdf1}/>
                </div>
            )
        }
        else{
            return(
                <div style={{overflow:'scroll'}}>
                    <PDFReader url={Pdf3}/>
                </div>
            )
        }
    }
}
export default Pdf;