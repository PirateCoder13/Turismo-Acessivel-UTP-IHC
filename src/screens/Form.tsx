import { useState } from 'react';
import { Camera, ArrowLeft, X, ArrowRight, CheckCircle } from 'lucide-react';

export function Form() {
  const [step, setStep] = useState(1);

  // States Step 1
  const [doorWidth, setDoorWidth] = useState('0.90');
  const [levelType, setLevelType] = useState('plano');

  // States Step 2
  const [hasRamp, setHasRamp] = useState('sim');
  const [rampHandrail, setRampHandrail] = useState('duplo');

  // States Step 3
  const [hasAccessibleToilet, setHasAccessibleToilet] = useState('sim');
  const [toiletRotation, setToiletRotation] = useState('sim');

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="flex flex-col h-full bg-background p-4 pb-20 md:p-8 lg:p-12 md:max-w-2xl mx-auto w-full">
      
      {/* Top Navigation & Progress */}
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={prevStep}
          disabled={step === 1}
          className={`flex items-center p-2 -ml-2 min-h-[48px] min-w-[48px] ${step === 1 ? 'text-transparent cursor-default' : 'text-text-light hover:text-text'}`}
          aria-label="Voltar para a tela anterior"
        >
          <ArrowLeft size={24} aria-hidden="true" />
        </button>
        <span className="font-bold text-text" aria-live="polite">Passo {step} de 4</span>
        <button 
          className="flex items-center text-text-light hover:text-text p-2 -mr-2 min-h-[48px] min-w-[48px]"
          aria-label="Cancelar e fechar formulário"
        >
          <X size={24} aria-hidden="true" />
        </button>
      </div>

      <form className="flex-1 flex flex-col" onSubmit={(e) => e.preventDefault()}>
        
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-extrabold text-text mb-2">Portas e Acessos</h2>
            <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-xl mb-8" role="note">
              <p className="text-text font-medium">
                <strong>Como medir a porta?</strong> Meça o vão livre útil com a porta totalmente aberta (Mínimo NBR 9050: 0.80m).
              </p>
            </div>
            
            <div className="mb-8">
              <label htmlFor="door-width" className="block text-lg font-bold text-text mb-3">
                Largura útil da porta principal
              </label>
              <div className="relative flex items-center">
                <input
                  id="door-width" type="number" step="0.01" value={doorWidth} onChange={(e) => setDoorWidth(e.target.value)}
                  className="w-full text-center text-3xl font-bold p-4 h-20 bg-surface border-2 border-border rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all"
                  aria-describedby="door-width-unit"
                />
                <span id="door-width-unit" className="absolute right-6 text-xl text-text-light font-bold" aria-hidden="true">m</span>
              </div>
            </div>

            <fieldset className="mb-8">
              <legend className="text-lg font-bold text-text mb-4">Condição do desnível</legend>
              <div className="space-y-4">
                {['plano', 'degrau'].map(opt => (
                  <label key={opt} className={`flex items-center p-5 border-2 rounded-xl cursor-pointer transition-colors min-h-[64px] ${levelType === opt ? 'border-primary bg-primary/5' : 'border-border bg-surface'}`}>
                    <input type="radio" name="level" value={opt} checked={levelType === opt} onChange={() => setLevelType(opt)} className="w-6 h-6 text-primary focus:ring-primary" />
                    <span className="ml-4 font-medium text-text text-lg">{opt === 'plano' ? 'Entrada plana e nivelada' : 'Possui degrau sem rampa'}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-extrabold text-text mb-2">Rampas e Circulação</h2>
            <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-xl mb-8" role="note">
              <p className="text-text font-medium">As rampas devem possuir inclinação máxima de 8,33% e corrimãos em duas alturas.</p>
            </div>

            <fieldset className="mb-8">
              <legend className="text-lg font-bold text-text mb-4">Existe rampa de acesso?</legend>
              <div className="space-y-4">
                {['sim', 'nao', 'nao_se_aplica'].map(opt => (
                  <label key={opt} className={`flex items-center p-5 border-2 rounded-xl cursor-pointer transition-colors min-h-[64px] ${hasRamp === opt ? 'border-primary bg-primary/5' : 'border-border bg-surface'}`}>
                    <input type="radio" name="ramp" value={opt} checked={hasRamp === opt} onChange={() => setHasRamp(opt)} className="w-6 h-6 text-primary focus:ring-primary" />
                    <span className="ml-4 font-medium text-text text-lg">{opt === 'sim' ? 'Sim, possui rampa' : opt === 'nao' ? 'Não possui, mas precisa' : 'Não se aplica (Totalmente plano)'}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {hasRamp === 'sim' && (
              <fieldset className="mb-8">
                <legend className="text-lg font-bold text-text mb-4">Condição do corrimão</legend>
                <div className="space-y-4">
                  {['duplo', 'simples', 'nenhum'].map(opt => (
                    <label key={opt} className={`flex items-center p-5 border-2 rounded-xl cursor-pointer transition-colors min-h-[64px] ${rampHandrail === opt ? 'border-primary bg-primary/5' : 'border-border bg-surface'}`}>
                      <input type="radio" name="handrail" value={opt} checked={rampHandrail === opt} onChange={() => setRampHandrail(opt)} className="w-6 h-6 text-primary focus:ring-primary" />
                      <span className="ml-4 font-medium text-text text-lg">{opt === 'duplo' ? 'Duplo (duas alturas)' : opt === 'simples' ? 'Simples (apenas uma altura)' : 'Sem corrimão'}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-extrabold text-text mb-2">Banheiros Adaptados</h2>
            
            <fieldset className="mb-8">
              <legend className="text-lg font-bold text-text mb-4">Possui banheiro PCD acessível?</legend>
              <div className="space-y-4">
                {['sim', 'nao'].map(opt => (
                  <label key={opt} className={`flex items-center p-5 border-2 rounded-xl cursor-pointer transition-colors min-h-[64px] ${hasAccessibleToilet === opt ? 'border-primary bg-primary/5' : 'border-border bg-surface'}`}>
                    <input type="radio" name="toilet" value={opt} checked={hasAccessibleToilet === opt} onChange={() => setHasAccessibleToilet(opt)} className="w-6 h-6 text-primary focus:ring-primary" />
                    <span className="ml-4 font-medium text-text text-lg">{opt === 'sim' ? 'Sim, exclusivo ou adaptado' : 'Não possui'}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {hasAccessibleToilet === 'sim' && (
              <fieldset className="mb-8">
                <legend className="text-lg font-bold text-text mb-4">Espaço interno permite giro 360º de cadeira de rodas? (Diâmetro min. 1.50m)</legend>
                <div className="space-y-4">
                  {['sim', 'nao', 'apertado'].map(opt => (
                    <label key={opt} className={`flex items-center p-5 border-2 rounded-xl cursor-pointer transition-colors min-h-[64px] ${toiletRotation === opt ? 'border-primary bg-primary/5' : 'border-border bg-surface'}`}>
                      <input type="radio" name="rotation" value={opt} checked={toiletRotation === opt} onChange={() => setToiletRotation(opt)} className="w-6 h-6 text-primary focus:ring-primary" />
                      <span className="ml-4 font-medium text-text text-lg">{opt === 'sim' ? 'Sim, amplo' : opt === 'apertado' ? 'Sim, mas apertado' : 'Não, é impossível girar'}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            )}
          </div>
        )}

        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-extrabold text-text mb-2">Conclusão e Evidências</h2>
            <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-xl mb-8" role="note">
              <p className="text-text font-medium">Para garantir seus pontos de colaborador, anexe fotos nítidas dos itens avaliados.</p>
            </div>

            <div className="mb-12">
              <button 
                type="button"
                className="w-full min-h-[64px] flex items-center justify-center border-2 border-dashed border-primary text-primary bg-primary/5 rounded-xl font-bold hover:bg-primary/10 transition-colors focus-visible:ring-4 focus-visible:ring-primary/50"
              >
                <Camera className="mr-2" size={28} aria-hidden="true" />
                Anexar foto comprobatória
              </button>
            </div>
            
            <div className="bg-surface border border-border p-4 rounded-xl flex items-center gap-4">
               <div className="bg-success/20 p-3 rounded-full text-success">
                  <CheckCircle size={32} />
               </div>
               <div>
                 <p className="font-bold text-text">Você ganhará +50 pts</p>
                 <p className="text-sm text-text-light">Por realizar esta auditoria completa</p>
               </div>
            </div>
          </div>
        )}

        {/* Bottom Actions */}
        <div className="mt-auto pt-8">
          {step < 4 ? (
            <button 
              type="button" onClick={nextStep}
              className="w-full min-h-[64px] bg-primary text-white font-bold text-lg rounded-xl shadow-md hover:bg-primary-dark transition-all flex items-center justify-center focus-visible:ring-4 focus-visible:ring-primary-dark"
            >
              Próximo Passo
              <ArrowRight className="ml-2" size={24} aria-hidden="true" />
            </button>
          ) : (
            <button 
              type="button"
              className="w-full min-h-[64px] bg-success text-white font-bold text-lg rounded-xl shadow-md hover:bg-emerald-600 transition-all flex items-center justify-center focus-visible:ring-4 focus-visible:ring-emerald-600"
            >
              Enviar Avaliação
              <CheckCircle className="ml-2" size={24} aria-hidden="true" />
            </button>
          )}
        </div>

      </form>
    </div>
  );
}
