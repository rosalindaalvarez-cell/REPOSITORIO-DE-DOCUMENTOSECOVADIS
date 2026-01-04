import React, { useState, useEffect } from 'react';

const FACTOR_MENSUAL = 30.41667;

interface SalaryCalculatorProps {
  logo: string | null;
}

const SalaryCalculator: React.FC<SalaryCalculatorProps> = ({ logo }) => {
  // State for logic toggle
  const [schemeType, setSchemeType] = useState<'bono' | 'comision' | 'mixto'>('bono');

  // State for editable fields
  const [formData, setFormData] = useState({
    candidateName: '',
    rfc: '',
    nss: '',
    sede: 'SALTILLO',
    area: 'COMERCIAL',
    level: 'OPERATIVO B',
    position: 'IN HOUSE',
    entryDate: '2026-01-05',
    mobilityType: 'propio',
    gasAmount: 0,
    
    // Calculation base inputs
    promesaTotal: 14005.88,
    salarioDiario: 310.72,
    nominal: 9451.00,
    despensa: 1357.68,
    
    // Variable inputs
    bonoTrimestral: 0, 
    // comisionMensual removed from calculation logic as it is not estimated anymore
  });

  // State for calculated results
  const [results, setResults] = useState({
    puntualidad: 0,
    asistencia: 0,
    isr: 0,
    imss: 0,
    netoFiscal: 0,
    productividadAjuste: 0,
    smfFinal: 0,
    totalFijoMasBeneficios: 0, // Sueldo + Beneficios (Sin variable)
    variableMensualPromedio: 0, // Solo Bono Promedio (Comisión es 100% variable externa)
    granTotalIntegrado: 0, // Todo sumado (Sin comisión)
    bonoTrimestral80: 0, // Changed to Quarterly calculation
    bonoTrimestral120: 0 // Changed to Quarterly calculation
  });

  // Calculation Logic
  const calculateISR = (base: number) => {
    const brackets = [
      { limit: 0.01, fixed: 0, rate: 0.0192 },
      { limit: 895.25, fixed: 17.15, rate: 0.064 },
      { limit: 7598.02, fixed: 446.10, rate: 0.1088 },
      { limit: 13346.51, fixed: 1071.32, rate: 0.16 },
      { limit: 15572.29, fixed: 1427.42, rate: 0.1792 },
      { limit: 18646.36, fixed: 1977.75, rate: 0.2136 },
      { limit: 35057.41, fixed: 5482.29, rate: 0.2352 },
      { limit: 67298.36, fixed: 13054.14, rate: 0.30 }
    ];
    let bracket = [...brackets].reverse().find(b => base >= b.limit);
    if (!bracket) return 0;
    const isrSinSubsidio = bracket.fixed + (base - bracket.limit) * bracket.rate;
    
    let subsidio = 0;
    if (base <= 9081) subsidio = 390.00;
    
    return Math.max(0, isrSinSubsidio - subsidio);
  };

  useEffect(() => {
    const nominal = formData.nominal;
    
    // Bonos fijos 10%
    const puntualidad = nominal * 0.10;
    const asistencia = nominal * 0.10;

    // IMSS & ISR
    const sbc_estimado = nominal * 1.0452;
    const imss = sbc_estimado * 0.0245;
    const isr = calculateISR(nominal);

    const totalImpuestos = isr + imss;
    const netoFiscal = (nominal + puntualidad + asistencia + formData.despensa) - totalImpuestos;

    // Ajuste Productividad
    let productividadAjuste = formData.promesaTotal - netoFiscal;
    if (productividadAjuste < 0) productividadAjuste = 0;

    const smfFinal = netoFiscal + productividadAjuste;
    
    // Costo Beneficios Superiores (Hardcoded sum of Section IV items)
    const costoBeneficios = 166.58 + 1783.00 + 420.00 + 868.49;
    
    const totalFijoMasBeneficios = smfFinal + costoBeneficios;

    // Variable Logic
    let variableMensualPromedio = 0;
    let bonoTrimestral80 = 0;
    let bonoTrimestral120 = 0;
    
    const bonoMensual = formData.bonoTrimestral / 3;

    if (schemeType === 'bono' || schemeType === 'mixto') {
        variableMensualPromedio = bonoMensual;
        // Calculated on the full quarterly amount as requested
        bonoTrimestral80 = formData.bonoTrimestral * 0.80;
        bonoTrimestral120 = formData.bonoTrimestral * 1.20;
    } 
    // NOTE: If schemeType is 'comision', variableMensualPromedio remains 0.

    const granTotalIntegrado = totalFijoMasBeneficios + variableMensualPromedio;

    setResults({
      puntualidad,
      asistencia,
      isr,
      imss,
      netoFiscal,
      productividadAjuste,
      smfFinal,
      totalFijoMasBeneficios,
      variableMensualPromedio,
      granTotalIntegrado,
      bonoTrimestral80,
      bonoTrimestral120
    });

  }, [
      formData.nominal, 
      formData.despensa, 
      formData.promesaTotal, 
      formData.bonoTrimestral, 
      schemeType
  ]);

  // Handlers
  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDailyChange = (val: number) => {
    const newNominal = val * FACTOR_MENSUAL;
    setFormData(prev => ({
      ...prev,
      salarioDiario: val,
      nominal: parseFloat(newNominal.toFixed(2))
    }));
  };

  const handleNominalChange = (val: number) => {
    const newDaily = val / FACTOR_MENSUAL;
    setFormData(prev => ({
      ...prev,
      nominal: val,
      salarioDiario: parseFloat(newDaily.toFixed(2))
    }));
  };

  // Styles adjusted for 2cm margins (20mm) on Letter paper (215.9mm x 279.4mm)
  const styles = {
    sheet: "bg-white w-[215.9mm] mx-auto p-[20mm] shadow-lg relative h-[279.4mm] overflow-hidden pdf-item salary-sheet flex flex-col box-border",
    table: "w-full border-collapse table-fixed",
    td: "border border-slate-400 px-1 py-0.5 text-[9px] h-[19px] align-middle",
    headerBlue: "bg-blue-800 text-white font-black uppercase text-center text-[8px]",
    labelGray: "bg-slate-100 font-bold text-slate-600",
    input: "w-full bg-[#fffbeb] font-bold text-blue-900 border-none outline-none px-1 h-full",
    inputLabel: "w-full bg-slate-100 font-bold text-slate-600 border-none outline-none text-[9px]",
    formula: "bg-slate-50 font-black text-slate-900 text-right pr-1",
    signatureBox: "h-24 flex flex-col justify-end text-[6px] font-bold uppercase text-center"
  };

  const formatMoney = (num: number) => num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const getMobilityText = () => {
    switch(formData.mobilityType) {
      case 'util': return 'Se asigna vehículo utilitario propiedad de la empresa. El mantenimiento y combustible corren por cuenta de PROVEIN. El usuario es responsable de multas y limpieza.';
      case 'propio': return 'El colaborador utiliza su vehículo propio. Se otorga un apoyo económico para mantenimiento preventivo sujeto a bitácora de kilometraje.';
      case 'gas': return 'Se otorga tarjeta de gasolina mensual por el monto estipulado en la carátula. Su uso es exclusivo para labores comerciales y requiere comprobación fiscal.';
      default: return 'Esta posición no contempla asignación de herramientas de movilidad por la naturaleza de sus funciones en sitio.';
    }
  };

  const SignatureBlock: React.FC<{ label: string }> = ({ label }) => (
    <div className={styles.signatureBox}>
        <div className="border-t border-slate-800 pt-1">
            {label}
        </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-8 salary-container">
      
      {/* PAGE 1 */}
      <div className={styles.sheet}>
        {/* Header */}
        <div className="flex justify-between items-center mb-4 border-b border-slate-200 pb-2 flex-shrink-0">
          <div className="flex items-center gap-4 text-left">
             {logo ? (
                <img src={logo} alt="Logo" className="h-10 object-contain" />
             ) : (
                <div className="text-xl font-black text-blue-600 italic tracking-tighter">PROVEIN</div>
             )}
             <div className="text-[7px] font-bold text-slate-400 border-l border-slate-300 pl-3 uppercase leading-tight">
                CONSUMIBLES PROVEIN S.A.P.I. DE C.V.<br/>TALENTO HUMANO
             </div>
          </div>
          <div className="text-right">
             <h2 className="text-sm font-black text-slate-800 uppercase tracking-tight">Propuesta de Remuneración 2026</h2>
             <div className="text-[8px] font-mono text-slate-500 uppercase">PRO-TH-FOR-001-V108.0 | PÁGINA 1 DE 2</div>
          </div>
        </div>

        <div className="flex-grow">
            <table className={styles.table}>
            {/* SECTION I */}
            <tbody>
                <tr><td colSpan={4} className={styles.headerBlue}>I. Datos Generales de Identificación y Puesto</td></tr>
                <tr>
                <td className={`${styles.td} ${styles.labelGray} w-1/4`}>
                    <input className={styles.inputLabel} defaultValue="Nombre del Candidato" />
                </td>
                <td colSpan={3} className={styles.td}>
                    <input 
                        className={styles.input} 
                        placeholder="ESCRIBIR NOMBRE COMPLETO" 
                        value={formData.candidateName}
                        onChange={(e) => handleChange('candidateName', e.target.value)}
                    />
                </td>
                </tr>
                <tr>
                <td className={`${styles.td} ${styles.labelGray}`}>
                    <input className={styles.inputLabel} defaultValue="R.F.C." />
                </td>
                <td className={styles.td}>
                    <input 
                        className={styles.input} 
                        placeholder="RFC CON HOMOCLAVE" 
                        value={formData.rfc}
                        onChange={(e) => handleChange('rfc', e.target.value)}
                    />
                </td>
                <td className={`${styles.td} ${styles.labelGray} w-1/4`}>
                    <input className={styles.inputLabel} defaultValue="N.S.S. (IMSS)" />
                </td>
                <td className={styles.td}>
                    <input 
                        className={styles.input} 
                        placeholder="11 DÍGITOS" 
                        value={formData.nss}
                        onChange={(e) => handleChange('nss', e.target.value)}
                    />
                </td>
                </tr>
                <tr>
                <td className={`${styles.td} ${styles.labelGray}`}>
                    <input className={styles.inputLabel} defaultValue="Sede / Ubicación" />
                </td>
                <td className={styles.td}>
                    <input 
                        className={styles.input} 
                        value={formData.sede}
                        onChange={(e) => handleChange('sede', e.target.value)}
                    />
                </td>
                <td className={`${styles.td} ${styles.labelGray}`}>
                    <input className={styles.inputLabel} defaultValue="Área / Departamento" />
                </td>
                <td className={styles.td}>
                    <input 
                        className={styles.input} 
                        value={formData.area}
                        onChange={(e) => handleChange('area', e.target.value)}
                    />
                </td>
                </tr>
                <tr>
                <td className={`${styles.td} ${styles.labelGray}`}>
                    <input className={styles.inputLabel} defaultValue="Nivel Jerárquico" />
                </td>
                <td className={styles.td}>
                    <input 
                        className={styles.input} 
                        value={formData.level}
                        onChange={(e) => handleChange('level', e.target.value)}
                    />
                </td>
                <td className={`${styles.td} ${styles.labelGray}`}>
                    <input className={styles.inputLabel} defaultValue="Puesto Nominal" />
                </td>
                <td className={styles.td}>
                    <input 
                        className={styles.input} 
                        value={formData.position}
                        onChange={(e) => handleChange('position', e.target.value)}
                    />
                </td>
                </tr>
                <tr>
                <td className={`${styles.td} ${styles.labelGray}`}>
                    <input className={styles.inputLabel} defaultValue="Fecha de Ingreso" />
                </td>
                <td className={styles.td}>
                    <input 
                        className={styles.input} 
                        value={formData.entryDate}
                        onChange={(e) => handleChange('entryDate', e.target.value)}
                    />
                </td>
                <td colSpan={2} className={`${styles.td} bg-slate-50`}></td>
                </tr>

                {/* SECTION II */}
                <tr><td colSpan={4} className="h-1 border-none"></td></tr>
                <tr>
                <td colSpan={2} className={`${styles.headerBlue} text-left pl-2`}>II. Estructura Salarial Fija</td>
                <td colSpan={2} className={`${styles.headerBlue} text-left pl-2`}>Cálculo Fiscal Dinámico</td>
                </tr>
                
                <tr>
                    <td colSpan={4} className={`${styles.td} text-[9px] text-center bg-blue-50 text-blue-800 font-bold`}>
                        DISPERSIÓN DE NÓMINA: DÍAS 10 Y 25 DE CADA MES. (SI ES INHÁBIL/FESTIVO, SE PAGA EL DÍA HÁBIL ANTERIOR).
                    </td>
                </tr>
                
                <tr className="bg-yellow-50">
                <td colSpan={2} className={`${styles.td} ${styles.labelGray} text-blue-900 font-black text-right`}>PROMESA DE INGRESO TOTAL SMF (OBJETIVO)</td>
                <td className={`${styles.td} text-right font-black text-blue-900`}>$</td>
                <td className={`${styles.td} bg-yellow-100`}>
                    <input 
                    type="number" 
                    className={`${styles.input} bg-yellow-100 text-right`}
                    value={formData.promesaTotal}
                    onChange={(e) => handleChange('promesaTotal', parseFloat(e.target.value) || 0)}
                    />
                </td>
                </tr>
                
                <tr>
                <td colSpan={2} className={`${styles.td} ${styles.labelGray} italic text-right`}>Salario Diario Nominal</td>
                <td className={`${styles.td} text-right font-bold`}>$</td>
                <td className={styles.td}>
                    <input 
                    type="number" 
                    className={`${styles.input} text-right`}
                    value={formData.salarioDiario}
                    onChange={(e) => handleDailyChange(parseFloat(e.target.value) || 0)}
                    />
                </td>
                </tr>

                <tr>
                <td colSpan={2} className={`${styles.td} ${styles.labelGray} text-right`}>Sueldo Nominal Mensual (Base de Registro)</td>
                <td className={`${styles.td} text-right font-bold`}>$</td>
                <td className={styles.td}>
                    <input 
                    type="number" 
                    className={`${styles.input} text-right`}
                    value={formData.nominal}
                    onChange={(e) => handleNominalChange(parseFloat(e.target.value) || 0)}
                    />
                </td>
                </tr>
                <tr>
                <td colSpan={2} className={`${styles.td} ${styles.labelGray} text-right`}>Bono de Puntualidad (10% sobre Nominal)</td>
                <td className={`${styles.td} text-right font-bold text-slate-400`}>$</td>
                <td className={`${styles.td} ${styles.formula}`}>{formatMoney(results.puntualidad)}</td>
                </tr>
                <tr>
                <td colSpan={2} className={`${styles.td} ${styles.labelGray} text-right`}>Bono de Asistencia (10% sobre Nominal)</td>
                <td className={`${styles.td} text-right font-bold text-slate-400`}>$</td>
                <td className={`${styles.td} ${styles.formula}`}>{formatMoney(results.asistencia)}</td>
                </tr>
                <tr>
                <td colSpan={2} className={`${styles.td} ${styles.labelGray} text-right`}>Vales de Despensa (Previsión Social)</td>
                <td className={`${styles.td} text-right font-bold text-slate-400`}>$</td>
                <td className={styles.td}>
                    <input 
                    type="number" 
                    className={`${styles.input} text-right`}
                    value={formData.despensa}
                    onChange={(e) => handleChange('despensa', parseFloat(e.target.value) || 0)}
                    />
                </td>
                </tr>
                <tr>
                <td colSpan={2} className={`${styles.td} ${styles.labelGray} text-red-700 italic text-right`}>Retención ISR Mensual (2026 + Subsidio)</td>
                <td className={`${styles.td} text-right font-bold text-red-600`}>$</td>
                <td className={`${styles.td} ${styles.input} text-red-600 text-right pr-1`}>{formatMoney(results.isr)}</td>
                </tr>
                <tr>
                <td colSpan={2} className={`${styles.td} ${styles.labelGray} text-red-700 italic text-right`}>Retención IMSS Cuota Obrera 2026</td>
                <td className={`${styles.td} text-right font-bold text-red-600`}>$</td>
                <td className={`${styles.td} ${styles.input} text-red-600 text-right pr-1`}>{formatMoney(results.imss)}</td>
                </tr>
                <tr className="bg-blue-50">
                <td colSpan={2} className={`${styles.td} text-blue-800 font-black uppercase text-right`}>Sueldo Fiscal Neto Mensual (Líquido)</td>
                <td className={`${styles.td} text-right text-blue-800`}>$</td>
                <td className={`${styles.td} ${styles.formula} text-blue-900 bg-blue-50`}>{formatMoney(results.netoFiscal)}</td>
                </tr>
                <tr className="bg-green-50">
                <td colSpan={2} className={`${styles.td} ${styles.labelGray} font-bold uppercase text-right`}>Ajuste por Productividad (Diferencia SMF)</td>
                <td className={`${styles.td} text-right font-bold text-green-700`}>$</td>
                <td className={`${styles.td} ${styles.formula} text-green-800 italic`}>{formatMoney(results.productividadAjuste)}</td>
                </tr>
                <tr className="bg-slate-800 text-white">
                <td colSpan={2} className={`${styles.td} border-slate-800 font-black uppercase text-right`}>Suma Mensual Fija Real (Base SMF V107.0)</td>
                <td className={`${styles.td} border-slate-800 text-right font-black`}>$</td>
                <td className={`${styles.td} border-slate-800 text-right font-black text-blue-300 text-sm`}>{formatMoney(results.smfFinal)}</td>
                </tr>

                {/* SECTION III (WAS V) - VARIABLE SCHEME NOW HERE */}
                <tr><td colSpan={4} className="h-1 border-none"></td></tr>
                <tr>
                    <td colSpan={4} className="p-0 border border-slate-400">
                        <div className="flex bg-blue-800">
                            <div className="flex-1 text-white font-black uppercase text-center text-[8px] py-0.5 border-r border-blue-600 flex items-center justify-center">
                                III. ESQUEMA VARIABLE APLICABLE:
                            </div>
                            <div className="flex">
                                <button 
                                    onClick={() => setSchemeType('bono')}
                                    className={`px-3 py-0.5 text-[8px] font-bold uppercase transition-colors ${schemeType === 'bono' ? 'bg-white text-blue-900' : 'bg-blue-900 text-blue-300 hover:bg-blue-700'}`}
                                >
                                    BONOS TRIMESTRALES
                                </button>
                                <button 
                                    onClick={() => setSchemeType('comision')}
                                    className={`px-3 py-0.5 text-[8px] font-bold uppercase transition-colors ${schemeType === 'comision' ? 'bg-white text-blue-900' : 'bg-blue-900 text-blue-300 hover:bg-blue-700'}`}
                                >
                                    COMISIONES VENTAS
                                </button>
                                <button 
                                    onClick={() => setSchemeType('mixto')}
                                    className={`px-3 py-0.5 text-[8px] font-bold uppercase transition-colors ${schemeType === 'mixto' ? 'bg-white text-blue-900' : 'bg-blue-900 text-blue-300 hover:bg-blue-700'}`}
                                >
                                    MIXTO
                                </button>
                            </div>
                        </div>
                    </td>
                </tr>

                {/* Conditional Rendering for Section III Body */}
                {schemeType === 'bono' && (
                    <>
                        <tr>
                            <td className={`${styles.td} ${styles.labelGray}`}>Bono Trimestral (100%)</td>
                            <td className={styles.td}>
                                <input 
                                type="number" 
                                className={`${styles.input} text-blue-900 font-black`}
                                placeholder="0.00"
                                value={formData.bonoTrimestral || ''}
                                onChange={(e) => handleChange('bonoTrimestral', parseFloat(e.target.value) || 0)}
                                />
                            </td>
                            <td className={`${styles.td} ${styles.labelGray} text-center`}>Promedio Mensual (100%)</td>
                            <td className={`${styles.td} text-xs font-mono text-center bg-blue-50 text-blue-800 font-bold`}>
                                ${formatMoney(results.variableMensualPromedio)}
                            </td>
                        </tr>
                        <tr>
                            <td className={`${styles.td} ${styles.labelGray} text-right text-[8px] italic`}>Proyección Trimestral (80%)</td>
                            <td className={`${styles.td} text-right text-xs text-slate-500`}>${formatMoney(results.bonoTrimestral80)}</td>
                            <td className={`${styles.td} ${styles.labelGray} text-right text-[8px] italic`}>Proyección Trimestral (120%)</td>
                            <td className={`${styles.td} text-right text-xs text-slate-500`}>${formatMoney(results.bonoTrimestral120)}</td>
                        </tr>
                        <tr>
                            <td colSpan={4} className={`${styles.td} text-[8px] italic text-slate-500`}>
                                * El bono se paga trimestralmente. La suma inferior integra el promedio al 100%. (Pago días 25: Abr, Jul, Oct, Ene).
                            </td>
                        </tr>
                    </>
                )}

                {schemeType === 'comision' && (
                    <>
                        <tr>
                            <td className={`${styles.td} ${styles.labelGray}`}>Esquema de Comisiones</td>
                            <td className={styles.td}>
                                <div className={`${styles.input} flex items-center text-[8px] font-bold text-slate-500`}>
                                    CV8 (8%), CV4 (4%), CC1 (1%), CC2 (2%), ETC.
                                </div>
                            </td>
                            <td className={`${styles.td} ${styles.labelGray} text-center`}>Variable Mensual</td>
                            <td className={`${styles.td} text-xs font-mono text-center bg-blue-50 text-slate-500 font-bold`}>
                                100% VARIABLE
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={4} className={`${styles.td} text-[8px] italic text-blue-900 font-bold bg-blue-50`}>
                                * PAGADERO ESTRICTAMENTE EL DÍA 15 DEL MES SIGUIENTE AL COBRO EFECTIVO (SECCIÓN XIII MANUAL).
                            </td>
                        </tr>
                    </>
                )}

                {schemeType === 'mixto' && (
                    <>
                         {/* Part 1: Bono */}
                        <tr>
                            <td className={`${styles.td} ${styles.labelGray}`}>Bono Trimestral (100%)</td>
                            <td className={styles.td}>
                                <input 
                                type="number" 
                                className={`${styles.input} text-blue-900 font-bold`}
                                placeholder="0.00"
                                value={formData.bonoTrimestral || ''}
                                onChange={(e) => handleChange('bonoTrimestral', parseFloat(e.target.value) || 0)}
                                />
                            </td>
                            <td className={`${styles.td} ${styles.labelGray} text-center`}>Promedio Bono (Mes)</td>
                            <td className={`${styles.td} text-xs font-mono text-center text-slate-600`}>
                                ${formatMoney(formData.bonoTrimestral / 3)}
                            </td>
                        </tr>
                         <tr>
                            <td className={`${styles.td} ${styles.labelGray} text-right text-[7px] italic`}>Proyección Trimestral (80% / 120%)</td>
                            <td className={`${styles.td} text-right text-[8px] text-slate-500`}>${formatMoney(results.bonoTrimestral80)}  /  ${formatMoney(results.bonoTrimestral120)}</td>
                            <td colSpan={2} className={`${styles.td} text-[7px] italic text-slate-400`}>
                                * Pagadero trimestralmente (Sección XII).
                            </td>
                        </tr>

                        {/* Part 2: Comision */}
                        <tr className="border-t-2 border-slate-200">
                             <td className={`${styles.td} ${styles.labelGray}`}>Comisión Mensual</td>
                            <td className={styles.td}>
                                <div className={`${styles.input} flex items-center text-[8px] font-bold text-slate-500`}>
                                    MIXTO: BONO + CÓDIGOS CV/CC VIGENTES
                                </div>
                            </td>
                            <td className={`${styles.td} ${styles.labelGray} text-center`}>Variable Comisión</td>
                            <td className={`${styles.td} text-xs font-mono text-center text-slate-500`}>
                                VARIABLE
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={4} className={`${styles.td} text-[8px] text-center bg-blue-50 text-blue-900 font-bold uppercase`}>
                                * COMISIÓN PAGADERA ESTRICTAMENTE EL DÍA 15 DEL MES SIGUIENTE AL COBRO (SECCIÓN XIII).
                            </td>
                        </tr>
                    </>
                )}

                {/* SECTION IV (WAS III) - MOBILITY NOW HERE */}
                <tr><td colSpan={4} className="h-1 border-none"></td></tr>
                <tr><td colSpan={4} className={`${styles.headerBlue} text-left pl-2`}>IV. Esquema de Movilidad y Traslados Operativos</td></tr>
                <tr>
                <td className={`${styles.td} ${styles.labelGray}`}>Asignación de Movilidad</td>
                <td colSpan={2} className={styles.td}>
                    <select 
                    className={styles.input}
                    value={formData.mobilityType}
                    onChange={(e) => handleChange('mobilityType', e.target.value)}
                    >
                        <option value="na">N/A - No Aplica (Personal de Base)</option>
                        <option value="util">Vehículo Utilitario (Propiedad de Empresa)</option>
                        <option value="propio">Vehículo Propio (Apoyo Mtto. Preventivo)</option>
                        <option value="gas">Tarjeta de Gasolina (Solo Combustible)</option>
                    </select>
                </td>
                <td className={`${styles.td} text-[8px] italic`}>Sección XVI Manual</td>
                </tr>
                <tr>
                <td className={`${styles.td} ${styles.labelGray}`}>Monto Gasolina / Apoyo Mensual</td>
                <td className={`${styles.td} text-right font-bold text-slate-400`}>$</td>
                <td className={styles.td}>
                    <input 
                        type="number"
                        className={`${styles.input} text-right`}
                        value={formData.gasAmount}
                        onChange={(e) => handleChange('gasAmount', parseFloat(e.target.value) || 0)}
                    />
                </td>
                <td className={`${styles.td} text-[9px]`}>Sujeto a bitácora y XML</td>
                </tr>

                {/* SECTION V (WAS IV) - BENEFITS NOW HERE */}
                <tr><td colSpan={4} className="h-1 border-none"></td></tr>
                <tr>
                <td colSpan={2} className={`${styles.headerBlue} text-left pl-2`}>V. Beneficios Superiores de Previsión Social</td>
                <td colSpan={2} className={`${styles.headerBlue} text-left pl-2`}>Costo Cubierto x Empresa (Adicional)</td>
                </tr>
                <tr>
                <td colSpan={2} className={`${styles.td} italic text-justify text-blue-900 font-semibold`}>Seguro Gastos Médicos Menores (Pagado x Empresa)</td>
                <td className={`${styles.td} text-right text-slate-400`}>$</td>
                <td className={`${styles.td} text-right`}>166.58</td>
                </tr>
                <tr>
                <td colSpan={2} className={`${styles.td} italic text-justify text-blue-900 font-semibold`}>Seguro Gastos Médicos Mayores (Pagado x Empresa)</td>
                <td className={`${styles.td} text-right text-slate-400`}>$</td>
                <td className={`${styles.td} text-right`}>1,783.00</td>
                </tr>
                <tr>
                <td colSpan={2} className={`${styles.td} italic text-justify`}>Seguro de Vida e Incapacidad Permanente</td>
                <td className={`${styles.td} text-right text-slate-400`}>$</td>
                <td className={`${styles.td} text-right`}>420.00</td>
                </tr>
                <tr>
                <td colSpan={2} className={`${styles.td} italic text-justify`}>Seguro Defunción (Asistencia Global)</td>
                <td className={`${styles.td} text-right text-slate-400`}>$</td>
                <td className={`${styles.td} text-right`}>868.49</td>
                </tr>
                <tr className="bg-slate-50 font-bold text-slate-500">
                <td colSpan={2} className={`${styles.td} text-right text-[8px]`}>Total Fijo + Beneficios Superiores</td>
                <td className={`${styles.td} text-right`}>$</td>
                <td className={`${styles.td} text-right`}>{formatMoney(results.totalFijoMasBeneficios)}</td>
                </tr>

                {/* GRAN TOTAL INTEGRADO */}
                <tr className="bg-corporate-900 text-white border-t-2 border-slate-900">
                    <td colSpan={2} className={`${styles.td} bg-blue-900 border-blue-900 font-black uppercase text-right py-2`}>
                        GRAN TOTAL MENSUAL INTEGRADO<br/>
                        <span className="text-[7px] font-normal opacity-70 tracking-widest text-blue-200">
                            (SUELDO NETO + PREVISIÓN + BENEFICIOS SUPERIORES + VARIABLE PROMEDIO GARANTIZABLE)
                        </span>
                    </td>
                    <td className={`${styles.td} bg-blue-900 border-blue-900 text-right font-black py-2`}>$</td>
                    <td className={`${styles.td} bg-blue-900 border-blue-900 text-right font-black text-lg py-2 text-yellow-400`}>
                        {formatMoney(results.granTotalIntegrado)}
                    </td>
                </tr>

            </tbody>
            </table>
        </div>

        {/* SIGNATURES PAGE 1 */}
        {/* mt-auto pushes this to the bottom of the flex container */}
        <div className="mt-auto grid grid-cols-5 gap-x-2 pt-4">
            <SignatureBlock label="Candidato / Colaborador" />
            <SignatureBlock label="Gerencia de Área" />
            <SignatureBlock label="Dirección Administrativa" />
            <SignatureBlock label="Gerencia Administrativa" />
            <SignatureBlock label="Talento Humano" />
        </div>
      </div>
      
      {/* PAGE 2 */}
      <div className={styles.sheet}>
        <header className="flex justify-between items-center mb-4 border-b border-slate-200 pb-2 flex-shrink-0">
            {logo ? (
                <img src={logo} alt="Logo" className="h-8 object-contain" />
             ) : (
                <div className="text-xl font-black text-blue-600 italic tracking-tighter">PROVEIN</div>
             )}
            <div className="text-right">
                <h3 className="text-sm font-black text-slate-800 uppercase">Términos y Condiciones de la Propuesta</h3>
                <div className="text-[8px] font-mono text-slate-500 uppercase">ANEXO NORMATIVO V108.0 | PÁG 2 DE 2</div>
            </div>
        </header>

        <div className="flex-grow">
            <div className="grid grid-cols-2 gap-3 h-full content-start">
                {/* Column 1 */}
                <div className="space-y-2">
                    {/* BONOS */}
                    <div className="border border-slate-200 rounded-lg p-2 bg-white shadow-sm">
                        <h4 className="text-[8px] font-black text-blue-800 uppercase mb-1 border-b border-slate-100 pb-0.5">
                            1. Política de Incentivos (Reglas de Oro)
                        </h4>
                        <p className="text-[8px] text-slate-600 text-justify mb-1 leading-relaxed">
                            {schemeType === 'bono' && 'El pago variable trimestral se rige estrictamente por la Sección XII del Manual de Remuneración (Validación 1-15, Pago 25). Requiere antigüedad mínima de 3 meses.'}
                            {schemeType === 'comision' && 'Las comisiones se rigen por la Sección XIII. El pago se realiza invariablemente el DÍA 15 sobre la cobranza efectiva del mes anterior.'}
                            {schemeType === 'mixto' && 'Esquema Híbrido: Incluye Bonos Trimestrales (Pago 25) y Comisiones Mensuales (Pago 15), sujetos a las políticas de cumplimiento de cada rubro.'}
                        </p>
                        {(schemeType === 'bono' || schemeType === 'mixto') && (
                            <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[7px] text-slate-600 mt-1">
                                <div className="flex gap-1 items-start"><span className="font-bold text-slate-800">1.</span> <span>Consensuado.</span></div>
                                <div className="flex gap-1 items-start"><span className="font-bold text-slate-800">6.</span> <span>Valuado.</span></div>
                                <div className="flex gap-1 items-start"><span className="font-bold text-slate-800">2.</span> <span>Entendido.</span></div>
                                <div className="flex gap-1 items-start"><span className="font-bold text-slate-800">7.</span> <span>Pago: Día 25.</span></div>
                                <div className="flex gap-1 items-start"><span className="font-bold text-slate-800">3.</span> <span>Alcanzable.</span></div>
                                <div className="flex gap-1 items-start"><span className="font-bold text-slate-800">8.</span> <span>Validación (1-15).</span></div>
                                <div className="flex gap-1 items-start"><span className="font-bold text-slate-800">4.</span> <span>Medible.</span></div>
                                <div className="flex gap-1 items-start"><span className="font-bold text-slate-800">9.</span> <span>Rango: 80%-120%.</span></div>
                                <div className="flex gap-1 items-start"><span className="font-bold text-slate-800">5.</span> <span>Documentado.</span></div>
                                <div className="flex gap-1 items-start"><span className="font-bold text-slate-800">10.</span> <span>Continuidad.</span></div>
                            </div>
                        )}
                    </div>

                    {/* MOVILIDAD */}
                    <div className="border border-slate-200 rounded-lg p-2 bg-slate-50">
                        <h4 className="text-[8px] font-black text-slate-800 uppercase mb-1 border-b border-slate-200 pb-0.5">
                            2. Esquema de Movilidad Asignado (Sección XVI)
                        </h4>
                        <p className="text-[8px] text-slate-600 text-justify leading-relaxed">
                            {getMobilityText()}
                        </p>
                    </div>

                    {/* AUSENCIAS (REPLACED ACADEMIC) */}
                    <div className="border border-red-100 rounded-lg p-2 bg-red-50/30">
                        <h4 className="text-[8px] font-black text-red-800 uppercase mb-1 border-b border-red-100 pb-0.5">
                            3. Gestión de Ausencias (Sección VII)
                        </h4>
                        <p className="text-[8px] text-slate-700 text-justify leading-relaxed">
                            Los días con jornada reducida (Ej. 24/31 Dic) son una cortesía institucional. <strong>No existen medios descuentos.</strong> La falta en estos días descuenta <strong>1.0 día completo</strong>. El ausentismo afecta proporcionalmente a todos los conceptos de pago (Efecto Dominó).
                        </p>
                    </div>

                    {/* GRATIFICACIONES (NEW) */}
                    <div className="border border-yellow-200 rounded-lg p-2 bg-yellow-50/40">
                        <h4 className="text-[8px] font-black text-yellow-800 uppercase mb-1 border-b border-yellow-200 pb-0.5">
                            7. Gratificaciones Anuales (Sección VI)
                        </h4>
                        <ul className="text-[8px] space-y-1 text-slate-700 list-disc ml-3">
                            <li>
                                <strong className="text-slate-900">Aguinaldo Superior:</strong> Base SMF (Sueldo + Productividad). <span className="text-red-600 font-bold">Excluye Vales de Despensa</span>.
                            </li>
                            <li>
                                <strong className="text-slate-900">Prima Vacacional:</strong> 25% sobre (Sueldo + Productividad). <span className="text-red-700 font-black">NO integra Bonos de Asistencia, Puntualidad ni Vales.</span>
                            </li>
                            <li>
                                <strong className="text-slate-900">Beneficio Inicial:</strong> 2 Días de Permiso con Goce de Sueldo (NO Vacaciones) a los 6 meses (Caducan al año).
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-2">
                    {/* PRESTACIONES */}
                    <div className="border border-slate-200 rounded-lg p-2 bg-white shadow-sm">
                        <h4 className="text-[8px] font-black text-green-800 uppercase mb-1 border-b border-slate-100 pb-0.5">
                            4. Catálogo de Beneficios (Sección XIV)
                        </h4>
                        <p className="text-[8px] text-slate-600 mb-1">
                            Al firmar esta propuesta, accedes a las siguientes coberturas:
                        </p>
                        <div className="space-y-1">
                            <div className="flex justify-between items-center text-[7px] border-b border-slate-100 pb-1">
                                <span className="font-bold text-slate-700">IMSS e INFONAVIT</span>
                                <span className="text-slate-500">Alta 100% Nominal</span>
                            </div>
                            <div className="flex justify-between items-center text-[7px] border-b border-slate-100 pb-1">
                                <span className="font-bold text-slate-700">AFORE y FONACOT</span>
                                <span className="text-slate-500">Aportación y Afiliación de Ley</span>
                            </div>
                            <div className="flex justify-between items-center text-[7px] border-b border-slate-100 pb-1">
                                <span className="font-bold text-slate-700">Seguros Médicos (GMM/GMM)</span>
                                <span className="text-slate-500">Póliza Corporativa</span>
                            </div>
                            <div className="flex justify-between items-center text-[7px] border-b border-slate-100 pb-1">
                                <span className="font-bold text-slate-700">Seguro de Vida</span>
                                <span className="text-slate-500">Protección Familiar</span>
                            </div>
                            <div className="flex justify-between items-center text-[7px] pb-1">
                                <span className="font-bold text-slate-700">Vales de Despensa</span>
                                <span className="text-slate-500">Monedero Electrónico</span>
                            </div>
                        </div>
                    </div>

                    {/* SALUD */}
                    <div className="border border-slate-200 rounded-lg p-2 bg-white">
                        <h4 className="text-[8px] font-black text-slate-800 uppercase mb-1 border-b border-slate-100 pb-0.5">
                            5. Salud e Incapacidades (Sección VIII)
                        </h4>
                        <div className="space-y-1">
                            <p className="text-[8px] text-slate-600 leading-relaxed text-justify">
                                <strong className="text-slate-900">Enfermedad General:</strong> Días 1-3 pago $0.00. Días 4+ pago proporcional al subsidio IMSS (Afecta Bonos y Productividad).
                            </p>
                            <p className="text-[8px] text-slate-600 leading-relaxed text-justify">
                                <strong className="text-slate-900">Maternidad/Riesgo:</strong> Garantía de pago al 100% en Bonos, Vales y Productividad.
                            </p>
                        </div>
                    </div>

                    {/* RENUNCIA */}
                    <div className="border border-slate-200 rounded-lg p-2 bg-slate-50">
                        <h4 className="text-[8px] font-black text-slate-800 uppercase mb-1 border-b border-slate-200 pb-0.5">
                            6. Finiquito y Entrega (Sección XIX)
                        </h4>
                        <p className="text-[8px] text-slate-600 text-justify leading-relaxed">
                            Requisito indispensable presentar Hoja de No Adeudo firmada, entregando activos (Laptop, Celular, Vehículo Utilitario, Tarjeta Gasolina) sin saldos pendientes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Statement */}
            <div className="mt-2 border-t-2 border-blue-600 pt-2">
                <p className="text-[8px] text-slate-800 font-bold text-justify mb-1">
                    DECLARACIÓN DE CONFORMIDAD
                </p>
                <p className="text-[7px] text-slate-600 text-justify leading-relaxed">
                    Manifiesto haber leído y comprendido el alcance de esta propuesta salarial, así como las normativas detalladas en el Manual de Remuneración V107.0 que rigen mi relación laboral con CONSUMIBLES PROVEIN S.A.P.I. DE C.V. Acepto que los conceptos variables y beneficios superiores están sujetos a las condiciones de cumplimiento descritas en este anexo.
                </p>
            </div>
        </div>

        {/* SIGNATURES PAGE 2 */}
        <div className="mt-auto grid grid-cols-5 gap-x-2 pt-4">
            <SignatureBlock label="Candidato / Colaborador" />
            <SignatureBlock label="Gerencia de Área" />
            <SignatureBlock label="Dirección Administrativa" />
            <SignatureBlock label="Gerencia Administrativa" />
            <SignatureBlock label="Talento Humano" />
        </div>

        <div className="mt-4 flex justify-between items-end opacity-40 text-[7px] font-bold uppercase pointer-events-none">
            <div>CONSUMIBLES PROVEIN S.A.P.I. DE C.V. | MÉXICO 2026</div>
            <div>USO INTERNO EXCLUSIVO</div>
        </div>
      </div>
    </div>
  );
};

export default SalaryCalculator;